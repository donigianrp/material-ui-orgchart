export interface OrgChartNode {
  name: string;
  imageURL: string;
  position: string;
}

export interface OrgChartLeaf {
  children: number;
}
