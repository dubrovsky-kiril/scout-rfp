import React from "react";
import { mount } from "enzyme";
import { create } from "react-test-renderer";
import Table from "./Table";

describe("Table component", () => {
  test("Matches the snapshot", () => {
    const data = [["X", "Y"], ["A", "B"], ["0", "9"]];
    const table = create(<Table data={data} />);

    expect(table.toJSON()).toMatchSnapshot();
  });
  test("Is showing expected rows number", () => {
    const data = [["X", "Y"], ["A", "B"], ["0", "9"]];
    const rowsNumber = data.length;

    const table = mount(<Table data={data} />);

    expect(table.find("tr").length).toEqual(rowsNumber);
  });
  test("Is showing expected header cells number", () => {
    const data = [["X", "Y"], ["A", "B"], ["0", "9"]];
    const headersCellsNumber = data[0].length;

    const table = mount(<Table data={data} />);

    expect(table.find("th").length).toEqual(headersCellsNumber);
  });
  test("Is showing expected row cells number", () => {
    const data = [["X", "Y"], ["A", "B"], ["0", "9"]];
    const cellsPerRow = data[0].length;

    const table = mount(<Table data={data} />);

    table
      .find("tbody")
      .find("tr")
      .map(node => expect(node.find("td").length).toEqual(cellsPerRow));
  });
  test("Is showing expected header cells values", () => {
    const data = [["X", "Y"], ["A", "B"], ["0", "9"]];
    const headersCells = data[0];

    const table = mount(<Table data={data} />);

    table
      .find("th")
      .map((node, index) => expect(node.text()).toEqual(headersCells[index]));
  });
  test("Is showing expected rows cells values", () => {
    const data = [["X", "Y"], ["A", "B"], ["0", "9"]];
    const rowsCells = data.slice(1);

    const table = mount(<Table data={data} />);

    table
      .find("tbody")
      .find("tr")
      .map((trNode, trIndex) => {
        return trNode
          .find("td")
          .map((tdNode, tdIndex) =>
            expect(tdNode.text()).toEqual(rowsCells[trIndex][tdIndex])
          );
      });
  });
});
