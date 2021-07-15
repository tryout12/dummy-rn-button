import React from 'react';
import { Button } from 'react-native';
import {Props} from './Interfaces/IProps';

export const DummyButton = ({title}:Props) => (
    <Button title={title} onPress={() => {}}/>
)