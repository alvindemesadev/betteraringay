import Section from '../components/ui/Section';
import { useParams, Link } from 'react-router';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import { governmentCategories, getCategorySubcategories, type Subcategory, type CategoryIndex } from '../data/yamlLoader';
import * as LucideIcons from 'lucide-react';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import GovernmentActivitySection from '../components/home/GovernmentActivitySection';
import SEO from '../components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

const Government: React.FC = () => {
  const { category } = useParams();
  const [categoryIndex, setCategoryIndex] = useState<CategoryIndex>({ layout: 'list', pages: [] });
  const [loading, setLoading] = useState(false);
  const subcategories: Subcategory[] = categoryIndex.pages;

  const getCategory = () => governmentCategories.categories.find(c => c.slug === category);
  const categoryData = getCategory();
  const Icon = LucideIcons[categoryData?.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>;

  useEffect(() => {
    if (category && categoryData) {
      setLoading(true);
      getCategorySubcategories(category)
        .then(setCategoryIndex)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [category, categoryData]);

  if (!category) {
    return (
      <>
        <SEO title="Government" description={`All government departments of ${import.meta.env.VITE_GOVERNMENT_NAME}.`} keywords="government, departments, LGU, Aringay" />
        <GovernmentActivitySection title="All government departments" description={`All departments of ${import.meta.env.VITE_GOVERNMENT_NAME}. Explore mandates, services, and contacts.`} />
      </>
    );
  }
  if (!categoryData) {
    return (
      <Section className="p-3 mb-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/government">Government</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>{category}</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Category not found</AlertTitle>
          <AlertDescription>The category you are looking for does not exist.</AlertDescription>
        </Alert>
      </Section>
    );
  }

  return (
    <>
      <SEO title={categoryData.category || category} description={categoryData.description} keywords={`${categoryData.category}, government, LGU Aringay`} />
      <Section className="p-3 mb-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/government">Government</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>{categoryData.category}</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {Icon && <Icon className="h-8 w-8 mb-4 text-primary" />}
        <Heading>{categoryData.category || category}</Heading>
        <Text className="text-muted-foreground mb-6">{categoryData.description}</Text>

        {loading ? (
          <div className="grid gap-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        ) : (
          <>
            {categoryIndex.title && <Heading level={3}>{categoryIndex.title}</Heading>}
            {categoryIndex.description && <Text className="text-muted-foreground mb-4">{categoryIndex.description}</Text>}
            {categoryIndex.layout === 'grid' ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {subcategories.map(subcategory => (
                  <Link key={subcategory.slug} to={`/government/${category}/${subcategory.slug}`} className="block h-full">
                    <Card className="h-full border-t-4 border-primary hover:shadow-lg hover:-translate-y-1 transition-all">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-medium">{subcategory.name}</h4>
                        {subcategory.description && <p className="mt-2 text-sm text-muted-foreground">{subcategory.description}</p>}
                        <Badge variant="secondary" className="mt-3 font-normal">{categoryData.category || category}</Badge>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {subcategories.map(subcategory => (
                  <Link key={subcategory.slug} to={`/government/${category}/${subcategory.slug}`} className="block">
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-medium">{subcategory.name}</h4>
                        {subcategory.description && <p className="mt-2 text-sm text-muted-foreground">{subcategory.description}</p>}
                        <Badge variant="secondary" className="mt-3 font-normal">{categoryData.category || category}</Badge>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </Section>
    </>
  );
};

export default Government;
