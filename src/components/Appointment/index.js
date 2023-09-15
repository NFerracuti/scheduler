import React from "react";

import "components/Appointment/styles.scss";

import Header from "components/Appointment/Header";
import { useState } from "react";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";

export default function Appointment(props) {
  // console.log("index props: ", props);
  const {mode, transition} = useVisualMode(props.interview ? "SHOW" : "EMPTY")

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === "SHOW" &&
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition("CONFIRM")}
          onEdit={() => transition("EDIT")}
        />
      } 
      {mode === "EMPTY" &&
        <Empty onAdd={() => {
          transition("CREATE")}
          } />}
      {mode === "EDIT" &&
        <Form 
        interviewers={props.interviewers}
        onSave={() => transition("SHOW")}
        onCancel={() => transition("SHOW")}/>
      }
      {mode === "CREATE" &&
        <Form 
        interviewers={props.interviewers}
        onSave={() => transition("SHOW")}/>
      }
      {mode === "SAVING" &&
        <Status />
      }
      {mode === "DELETING" &&
        <Status />}
    </article>
  );
}
