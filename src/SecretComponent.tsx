import * as React from "react";

export const SecretComponent = (props: { message?: string }) =>
  props.message ? (
    <p>
      {props.message.substring(0, props.message.length - 3)}
      {"*".repeat(3)}
    </p>
  ) : (
    <p />
  );
