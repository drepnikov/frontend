import * as React from "react";
import { NoteAppFeature } from "data/note-app/note-app.feature";

interface IMobxSampleComponentProps {}

const MobxSampleComponent: React.FC<IMobxSampleComponentProps> = () => {
  return (
    <NoteAppFeature
      onAdd={(note) => {
        console.log(note);
      }}
      notes={[
        {
          id: "312sad",
          title: "Привет мир",
          content: "Просто тестирую",
          pinned: false,
        },
        {
          id: "31122sdasad",
          title: "Привет мир2",
          content: "Просто тестирую2",
          pinned: false,
        },
        {
          id: "sdsa123123",
          title: "Особый привет мир",
          content: "Особый просто тестирую",
          pinned: true,
        },
      ]}
    />
  );
};

export { MobxSampleComponent };
