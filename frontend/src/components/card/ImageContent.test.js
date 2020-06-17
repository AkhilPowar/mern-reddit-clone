import React from "react";
import { render } from "@testing-library/react";
import ImageContent from "./ImageContent";

test("renders card component with text content", () => {
    const imageURL = "./../../../public/logo192.png";
    const titleString = "Hello World";
    const timeString = "2020/02/02 10:42:52";
    const votes = 543;
	
    const { getByText } = render(<ImageContent imageURL={imageURL} title={titleString} time={timeString} voteCount={votes} />);

    const headerElement = getByText(/Hello World/i);
    expect(headerElement).toBeInTheDocument();

    const timeDisplayElement = getByText(/2020\/02\/02/i);
    expect(timeDisplayElement).toBeInTheDocument();

    const voteDisplayElement = getByText(/543/i);
    expect(voteDisplayElement).toBeInTheDocument();
});