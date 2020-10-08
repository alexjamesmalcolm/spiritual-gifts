import useResource from "@alexjamesmalcolm/use-resource";
import { useCallback, useMemo } from "react";

interface Common {
  version: string;
  type: string;
  direction: string;
}

interface ChapterContent {
  [key: number]: {
    verse: string;
    verse_nr: number;
  };
}

interface Chapter extends Common {
  type: "chapter";
  book_name: string;
  book_nr: number;
  chapter_nr: number;
  chapter: ChapterContent;
}

interface Book {
  book_name: string;
  book_nr: string;
  book_ref: string;
  chapter_nr: string;
  chapter: ChapterContent;
}

interface Verse extends Common {
  type: "verse";
  book: Book[];
}

const useVerse = (verse: string) => {
  const getResource = useCallback(
    () =>
      fetch(`/verse/json?p=${verse.replaceAll(" ", "")}&v=weymouth`)
        .then((response) => response.text())
        .then((text) => JSON.parse(text.slice(1, -2))),
    [verse]
  );
  const {
    data,
    isLoading,
    error,
  }: {
    data: Chapter | Verse | undefined | null;
    isLoading: boolean;
    error: Error | false;
  } = useResource(verse, { getResource });
  return useMemo<string>(() => {
    if (isLoading || !data || error) {
      return "";
    }
    if (data.type === "chapter") {
      return (Object.entries(data.chapter).map(
        ([, { verse }]) => verse
      ) as string[]).join("");
    } else if (data.type === "verse") {
      return (data.book
        .flatMap((book) => Object.entries(book.chapter))
        .map(([, { verse }]) => verse) as string[]).join("");
    }
    return "";
  }, [data, error, isLoading]);
};

export default useVerse;
