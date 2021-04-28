import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

const EventsCategory = (CategoryName: string) => ({
        table: {
            category: CategoryName
        }
    }
)

export default {
    title: 'input',
    //component: Accordion,
}

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

