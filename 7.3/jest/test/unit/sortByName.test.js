const sorting = require("../../app");

describe("Books names test suit", () => {
    it("Books names should be sorted in ascending order", () => {
        expect(
        sorting.sortByName([
            "Гарри Поттер",
            "Властелин Колец",
            "Волшебник изумрудного города",
        ])
        ).toEqual([
            "Властелин Колец",
            "Волшебник изумрудного города",
            "Гарри Поттер",
        ]);
    });

    it("Should return an empty array if input is empty", () => {
        expect(sorting.sortByName([])).toEqual([]);
    });

    it("Should return the same array if it contains only one element", () => {
        const input = ["Гарри Поттер"];
        expect(sorting.sortByName(input)).toEqual(input);
    });

    it("Should correctly sort multiple elements with the same name", () => {
        const input = [
            "Гарри Поттер",
            "Властелин Колец",
            "Волшебник изумрудного города",
            "Гарри Поттер",
        ];
        const expectedOutput = [
            "Властелин Колец",
            "Волшебник изумрудного города",
            "Гарри Поттер",
            "Гарри Поттер",
        ];
        expect(sorting.sortByName(input)).toEqual(expectedOutput);
    });

    it("Should correctly sort elements with special characters", () => {
        const input = [
            "The Lord of the Rings",
            "Harry Potter and the Philosopher's Stone",
            "Alice in Wonderland",
        ];
        const expectedOutput = [
            "Alice in Wonderland",
            "Harry Potter and the Philosopher's Stone",
            "The Lord of the Rings",
        ];
        expect(sorting.sortByName(input)).toEqual(expectedOutput);
    });
});