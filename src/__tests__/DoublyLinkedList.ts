import DoublyLinkedList from "day112/DoublyLinkedList";
import { test_list } from "./ListTest";

test("DoublyLinkedList", function () {
    const list = new DoublyLinkedList<number>();
    test_list(list);
});
