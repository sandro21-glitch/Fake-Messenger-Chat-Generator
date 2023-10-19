type StateTypes = {
  allMessages: { from: string; text: string}[];
  personOne: string[];
  personTwo: string[];
  parts: {
    activeNow: boolean;
    hideHeader: boolean;
    hideFooter: boolean;
  };
  layout: string;
  battery: number;
  img: string;
  name: string;
  clock: string;
};

export default StateTypes;
