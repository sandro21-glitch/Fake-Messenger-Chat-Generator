type StateTypes = {
  allMessages: { from: string; text: string }[];
  personOne: string[];
  personTwo: string[];
  parts: {
    activeNow: boolean;
    hideHeader: boolean;
    hideFooter: boolean;
  };
  status: {
    sent: boolean;
    delivered: boolean;
    seen: boolean;
  };
  layout: string;
  battery: number;
  img: string;
  name: string;
  clock: string;
};

export default StateTypes;
