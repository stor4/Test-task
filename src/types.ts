export type ProjectCardProps = {
    id: number;
    title: string;
    description: string;
    images: { 
        small: string, 
        original: string 
    }[];
    generalInfo: {
      name: string;
      price: number;
      province: string;
      living_area: number;
      bathrooms: number;
      coordinates: {
        latitude: string,
        longitude: string
      },
      reference: string,
      rooms: number,
      size: number,
      terrace: string | number,
      type: string
    };
  };
  