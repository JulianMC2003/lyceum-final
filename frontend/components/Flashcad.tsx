import React, { useState } from 'react';
import type { Task } from "../Task.ts";

export function Flashcard() {
    const [card, setCard()] = useState<Card>({
        title: "",
        question: "",
        answer: ""
    });
}