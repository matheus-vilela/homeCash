import React from 'react';
import { IListMonth, ListMonth } from '../../constant';

import {  Picker } from './styles';

interface Props {
  onSelect: (month: string) => void;
  selected: string;
}

const SelectDate: React.FC<Props> = ({onSelect,selected}) => {
  return (
    <Picker defaultValue={selected} onChange={(a)=> onSelect(a.currentTarget.value)}>
      {
        ListMonth.sort((a,b)=>Number(b.id) - Number(a.id)).map((month:IListMonth) => (
          <option value={month.date} key={month.id} onClick={()=>onSelect(month.date)}>{month.name}</option>
        ))
      }
    </Picker>
  );
}

export default SelectDate;
