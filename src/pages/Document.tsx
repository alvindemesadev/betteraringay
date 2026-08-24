import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { loadMarkdownContent, type MarkdownContent } from '../lib/markdownLoader';
import { createMarkdownComponents } from '../lib/markdownComponents';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getTypographyTheme } from '../lib/typographyThemes';
import { serviceCategories, governmentCategories, getCategorySubcategories, isNestedCategory, type Subcategory, type CategoryIndex } from '../data/yamlLoader';
import SEO from '../components/SEO';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { AlertCircle } from 'lucide-react';

interface DocumentProps {
  theme?: string;
  categoryType?: 'service' | 'government';
}

function DocBreadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <Breadcrumb className="mb-8">
      <BreadcrumbList>
        {items.map((b, i) => (
          <span key={b.href} className="flex items-center gap-1.5">
            <BreadcrumbItem>
              {i === items.length - 1 ? <BreadcrumbPage>{b.label}</BreadcrumbPage> : <BreadcrumbLink href={b.href}>{b.label}</BreadcrumbLink>}
            </BreadcrumbItem>
            {i < items.length - 1 && <BreadcrumbSeparator />}
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default function Document({ theme: initialTheme = 'default', categoryType }: DocumentProps) {
  const { documentSlug, category } = useParams();
  const [markdownContent, setMarkdownContent] = useState<MarkdownContent | null>(null);
  const [nestedIndex, setNestedIndex] = useState<CategoryIndex | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const markdownComponents = createMarkdownComponents(getTypographyTheme(initialTheme));

  const [breadcrumbs, setBreadcrumbs] = useState([{ label: 'Home', href: '/' }]);

  useEffect(() => {
    if (!documentSlug || !category || !categoryType) {
      setError('No document specified');
      setLoading(false);
      return;
    }

    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);

        const isGovernment = categoryType === 'government';
        const categories = isGovernment ? governmentCategories.categories : serviceCategories.categories;
        const sectionLabel = isGovernment ? 'Government' : 'Services';
        const sectionHref = isGovernment ? '/government' : '/services';
        const categoryData = categories.find(c => c.slug === category);

        if (isNestedCategory(documentSlug)) {
          const index = await getCategorySubcategories(documentSlug);
          setNestedIndex(index);
          setBreadcrumbs([
            { label: 'Home', href: '/' },
            { label: sectionLabel, href: sectionHref },
            { label: categoryData?.category ?? category, href: `${sectionHref}/${category}` },
            { label: documentSlug, href: `${sectionHref}/${category}/${documentSlug}` },
          ]);
          return;
        }

        const content = await loadMarkdownContent(documentSlug, category, categoryType);
        setMarkdownContent(content);

        setBreadcrumbs([
          { label: 'Home', href: '/' },
          { label: sectionLabel, href: sectionHref },
          { label: categoryData?.category ?? category, href: `${sectionHref}/${category}` },
          { label: content.title ?? documentSlug, href: `${sectionHref}/${category}/${documentSlug}` },
        ]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load document');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [documentSlug, category, categoryType]);

  if (loading) {
    return (
      <Section className="p-3 mb-12">
        <Skeleton className="h-4 w-32 mb-4" />
        <Skeleton className="h-24 w-full" />
      </Section>
    );
  }

  if (error) {
    return (
      <Section className="p-3 mb-12">
        <DocBreadcrumbs items={breadcrumbs} />
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Document Not Found</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </Section>
    );
  }

  if (nestedIndex) {
    const nestedPages: Subcategory[] = nestedIndex.pages;
    return (
      <>
        <SEO title={documentSlug} keywords={`${documentSlug}, government services, local government`} />
        <Section className="p-3 mb-12">
          <DocBreadcrumbs items={breadcrumbs} />
          {nestedIndex.title && <Heading level={2}>{nestedIndex.title}</Heading>}
          {nestedIndex.description && <Text className="text-muted-foreground mb-4">{nestedIndex.description}</Text>}
          {nestedIndex.layout === 'grid' ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {nestedPages.map((page, i) => (
                <Card key={page.slug ?? i} className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-medium">{page.name}</h4>
                    {page.description && <p className="mt-2 text-sm text-muted-foreground">{page.description}</p>}
                    <Badge variant="secondary" className="mt-3">Detail</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {nestedPages.map((page, i) => (
                <Card key={page.slug ?? i} className="hover:shadow-sm transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-medium">{page.name}</h4>
                    {page.description && <p className="mt-2 text-sm text-muted-foreground">{page.description}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </Section>
      </>
    );
  }

  if (!markdownContent) return null;

  return (
    <>
      <SEO title={markdownContent.title || documentSlug} description={markdownContent.description || `Government service information for ${documentSlug}`} keywords={`${documentSlug}, government services, public services, local government`} />
      <Section className="p-3 mb-12">
        <DocBreadcrumbs items={breadcrumbs} />
        <Card className="mb-8 overflow-hidden">
          <CardHeader>
            {markdownContent.description && <p className="text-sm text-muted-foreground">{markdownContent.description}</p>}
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {markdownContent.content}
            </ReactMarkdown>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
