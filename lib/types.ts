export interface Column {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  Link: Description;
  Description: Description;
  Image: Description;
  Name: Name;
  Category?: Category;
}

export interface Category {
  id: string;
  type: string;
  select: Select;
}

export interface Select {
  id: string;
  name: string;
  color: string;
}

export interface Description {
  id: ID;
  type: DescriptionType;
  rich_text: RichText[];
}

export enum ID {
  EEZg = 'EEZg',
  GeT = 'GE@T',
  KHn = 'k@hn'
}

export interface RichText {
  type: RichTextType;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null | string;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: Color;
}

export enum Color {
  Default = 'default'
}

export interface Text {
  content: string;
  link: Link | null;
}

export interface Link {
  url: string;
}

export enum RichTextType {
  Text = 'text'
}

export enum DescriptionType {
  RichText = 'rich_text'
}

export interface Name {
  id: string;
  type: string;
  title: RichText[];
}

export interface Page {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  parent: Parent;
  archived: boolean;
  properties: PageProperties;
  url: string;
}

export interface PageProperties {
  description: PageDescription;
  Page: PageName;
}
export interface PageDescription {
  id: string;
  type: string;
  rich_text: TextEntity[];
}
export interface PageName {
  id: string;
  type: string;
  title: TextEntity[];
}
export interface TextEntity {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: null;
}
