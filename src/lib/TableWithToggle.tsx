/**
 * Table component with view toggle functionality — shadcn per DESIGN.md
 */

import {
  type ReactNode,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { Table as TableIcon, List } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Table } from '@/components/ui/table';

// Helper functions to extract text from React children
const extractTextFromChildren = (children: ReactNode): string[] => {
  const texts: string[] = [];

  const processNode = (node: ReactNode): void => {
    if (typeof node === 'string') {
      const trimmed = node.trim();
      if (trimmed) texts.push(trimmed);
    } else if (typeof node === 'number') {
      texts.push(node.toString());
    } else if (Array.isArray(node)) {
      node.forEach(processNode);
    } else if (node && typeof node === 'object' && 'props' in node) {
      const nodeProps = node as { props?: { children?: ReactNode } };
      if (nodeProps.props?.children) {
        processNode(nodeProps.props.children);
      }
    }
  };

  processNode(children);
  return texts;
};

const extractRowsFromChildren = (
  children: ReactNode
): Array<Record<string, string>> => {
  const rows: Array<Record<string, string>> = [];

  const processNode = (node: ReactNode): void => {
    if (Array.isArray(node)) {
      node.forEach(processNode);
    } else if (node && typeof node === 'object' && 'props' in node) {
      const nodeProps = node as {
        props?: { children?: ReactNode; className?: string };
        key?: string;
      };

      // Check if this is a table row (tr element) by key or className
      if (
        nodeProps.key?.includes('tr') ||
        nodeProps.props?.className?.includes('tr')
      ) {
        // Extract text from all direct children (td/th elements)
        const cellTexts = extractTextFromChildren(nodeProps.props?.children);

        if (cellTexts.length > 0) {
          const row: Record<string, string> = {};
          cellTexts.forEach((text, index) => {
            row[`column_${index}`] = text;
          });
          rows.push(row);
        }
      } else if (nodeProps.props?.children) {
        processNode(nodeProps.props.children);
      }
    }
  };

  processNode(children);
  return rows;
};

// Custom Table Component with view toggle — shadcn Button + Table + Card
export const TableWithToggle = ({ children }: { children: ReactNode }) => {
  const [viewMode, setViewMode] = useState<'table' | 'list'>('table');
  const [isMobile, setIsMobile] = useState(false);

  // Set responsive default view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    setViewMode(isMobile ? 'list' : 'table');
  }, [isMobile]);

  // Extract table data for list view
  const tableData = useMemo(() => {
    if (viewMode === 'table') return null;

    const rows: Array<Record<string, string>> = [];
    const headers: string[] = [];

    const processTableElement = (element: ReactNode): void => {
      if (
        typeof element === 'object' &&
        element !== null &&
        'props' in element
      ) {
        const elementProps = element as {
          props?: { children?: ReactNode; className?: string };
          key?: string;
        };

        if (elementProps.key?.includes('thead')) {
          const headerCells = extractTextFromChildren(
            elementProps.props?.children
          );
          headers.push(...headerCells);
        } else if (elementProps.key?.includes('tbody')) {
          const bodyRows = extractRowsFromChildren(
            elementProps.props?.children
          );
          rows.push(...bodyRows);
        } else if (elementProps.key?.includes('tr')) {
          const rowCells = extractTextFromChildren(
            elementProps.props?.children
          );
          if (rowCells.length > 0) {
            const row: Record<string, string> = {};
            rowCells.forEach((text, index) => {
              row[`column_${index}`] = text;
            });
            rows.push(row);
          }
        } else if (elementProps.props?.className?.includes('thead')) {
          const headerCells = extractTextFromChildren(
            elementProps.props.children
          );
          headers.push(...headerCells);
        } else if (elementProps.props?.className?.includes('tbody')) {
          const bodyRows = extractRowsFromChildren(elementProps.props.children);
          rows.push(...bodyRows);
        } else if (elementProps.props?.className?.includes('tr')) {
          const rowCells = extractTextFromChildren(elementProps.props.children);
          if (rowCells.length > 0) {
            const row: Record<string, string> = {};
            rowCells.forEach((text, index) => {
              row[`column_${index}`] = text;
            });
            rows.push(row);
          }
        } else {
          if (elementProps.props?.children) {
            if (Array.isArray(elementProps.props.children)) {
              elementProps.props.children.forEach(child => {
                processTableElement(child);
              });
            } else {
              processTableElement(elementProps.props.children);
            }
          }
        }
      }
    };

    if (Array.isArray(children)) {
      children.forEach(processTableElement);
    } else {
      processTableElement(children);
    }

    const mappedRows = rows.map(row => {
      const mappedRow: Record<string, string> = {};
      headers.forEach((header, index) => {
        mappedRow[header] = row[`column_${index}`] || '';
      });
      return mappedRow;
    });

    return { headers, rows: mappedRows };
  }, [children, viewMode]);

  return (
    <div className="my-6">
      {/* View toggle — shadcn Tabs */}
      <Tabs value={viewMode} onValueChange={v => setViewMode(v as 'table' | 'list')}>
        <TabsList className="mb-3">
          <TabsTrigger value="table" className="gap-2">
            <TableIcon className="h-4 w-4" /> Table
          </TabsTrigger>
          <TabsTrigger value="list" className="gap-2">
            <List className="h-4 w-4" /> List
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {viewMode === 'table' ? (
        <div className="rounded-xl border overflow-hidden">
          <Table
            className="sticky-table"
            style={{ '--first-col-width': '12rem' } as React.CSSProperties}
          >
            {children}
          </Table>
        </div>
      ) : (
        <div className="space-y-4">
          {tableData?.rows && tableData.rows.length > 0 ? (
            tableData.rows.map((row, index) => (
              <Card key={index}>
                <CardContent className="p-4 grid gap-2">
                  {tableData.headers.map((header, headerIndex) => (
                    <div
                      key={headerIndex}
                      className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4"
                    >
                      <div className="font-semibold text-sm sm:w-1/3">
                        {header}
                      </div>
                      <div className="text-sm text-muted-foreground sm:w-2/3">
                        {row[header] || '—'}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No rows to display.</p>
          )}
        </div>
      )}
    </div>
  );
};
