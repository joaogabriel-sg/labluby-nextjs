import { EventType } from "@shared/types";

export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-9a41c-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events: EventType[] = [];

  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }

  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export async function getEventById(id: string) {
  const events = await getAllEvents();
  return events.find((event) => event.id === id)!;
}

export async function getFilteredEvents(dateFilter: {
  month: number;
  year: number;
}) {
  const { year, month } = dateFilter;

  const events = await getAllEvents();

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
