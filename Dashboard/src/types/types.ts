export interface ISubscription {
  type: "basic" | "premium";
  title: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
}

export interface IFeatures {
  title: string;
  description: string;
}

interface IHeaderFooter {
  name: string;
  link: string;
}

interface IFooter {
  primary: IHeaderFooter[];
  secondary: { platform: string; link: string; image: string }[];
}

export interface INavlinks {
  header: IHeaderFooter[];
  footer: IFooter;
}
