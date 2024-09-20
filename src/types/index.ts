export interface EventByYearProps {
  id: number;
  name: string
  firstYear: number;
  lastYear: number;
  events: EventsProps[];
}

export interface EventsProps {
	year: number
	description: string
}
