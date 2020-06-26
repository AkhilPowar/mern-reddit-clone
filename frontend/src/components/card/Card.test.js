import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("renders card component with all properties", () => {
    const titleString = "Hello World";
    const timeString = "2020/02/02 10:42:52";
    const votes = 543;
    
    const { getByText } = render(<Card title={titleString} time={timeString} voteCount={votes} />);
    
    const headerElement = getByText(/Hello World/i);
    expect(headerElement).toBeInTheDocument();

    const timeDisplayElement = getByText(/2020\/02\/02/i);
    expect(timeDisplayElement).toBeInTheDocument();

    const voteDisplayElement = getByText(/543/i);
    expect(voteDisplayElement).toBeInTheDocument();
});
