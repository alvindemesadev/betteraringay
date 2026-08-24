import Section from '../ui/Section';
import * as LucideIcons from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { useTranslation } from '../../hooks/useTranslation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router';

import { governmentCategories } from '../../data/yamlLoader';

interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  category: string;
  slug: string;
  subcategories: Subcategory[];
  description: string;
  icon: string;
}

interface GovernmentActivitySectionProps {
  title?: string;
  description?: string;
}

export default function GovernmentActivitySection({
  title,
  description,
}: GovernmentActivitySectionProps = {}) {
  const { t } = useTranslation();

  const getIcon = (category: string) => {
    const IconComponent = LucideIcons[
      category as keyof typeof LucideIcons
    ] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
  };

  const displayedCategories = governmentCategories.categories as Category[];

  return (
    <Section id="#government">
      <Heading level={2}>{title || t('title')}</Heading>
      <Text className="text-gray-600 mb-6">
        {description || t('governmentActivity.description')}
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedCategories.map(category => (
          <Link key={category.slug} to={`/government/${category.slug}`} className="block h-full">
            <Card className="border-t-4 border-primary h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-3">
                <div className="bg-primary/10 text-primary p-2.5 rounded-lg">{getIcon(category.icon)}</div>
                <CardTitle className="text-base leading-tight">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{category.description}</p>
                <Badge variant="secondary" className="mt-3 font-normal">
                  {category.category}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
