import React from "react";
import { render } from "@testing-library/react";
import TextContent from "./TextContent";

test("renders card component with text content", () => {
    const textContent = "Hi. This is the text content we are using for testing.";
    const titleString = "Hello World";
    const timeString = "2020/02/02 10:42:52";
    const votes = 543;
	
    const { getByText } = render(<TextContent content={textContent} title={titleString} time={timeString} voteCount={votes} />);
	
    const contentElement = getByText(/Hi. This is the text content we are using for testing./i);
    expect(contentElement).toBeInTheDocument();

    const headerElement = getByText(/Hello World/i);
    expect(headerElement).toBeInTheDocument();

    const timeDisplayElement = getByText(/2020\/02\/02/i);
    expect(timeDisplayElement).toBeInTheDocument();

    const voteDisplayElement = getByText(/543/i);
    expect(voteDisplayElement).toBeInTheDocument();
});