export type Props = {
   nextAndPrev?: boolean;
   nextHandler?: () => void;
   prevHandler?: () => void;
   disablePrevbtn?: boolean;
   disableNextbtn?: boolean;
};
export interface TableContainerInterface
   extends React.HTMLAttributes<HTMLDivElement> {
   cl?: string;
}
export interface TableInterface
   extends React.TableHTMLAttributes<HTMLTableElement> {}
export interface TableRowInterface
   extends React.HTMLAttributes<HTMLTableRowElement> {
   row: { heading: string }[];
}
export interface TableHeaderInterface
   extends React.HTMLAttributes<HTMLTableSectionElement> {}
export interface TableBodyInterface
   extends React.HTMLAttributes<HTMLTableSectionElement> {}
