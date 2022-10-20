import React from 'react';
import { categories, ICategories } from '../../constant';

import { Category, Container, Content, Title } from './styles';

interface Props {
  selectedCategory: ICategories;
  handleSelectCategory: (category: ICategories) => void;
  all?: boolean;
}

const Categories: React.FC<Props> = ({selectedCategory, handleSelectCategory, all=true}) => {
  return(
    <Container>
      <Title>Categorias</Title>
      <Content>
        {
          categories.filter((category)=> all ? category : category.id !== '0').map((category:ICategories) => {
            const Icon:any = category.icon;
            return (
              <Category key={category.id} selected={selectedCategory.id === category.id} color={category.color} onClick={()=>handleSelectCategory(category)}>
              <div className='icon'>
                <Icon size={30} color={category.color} />
              </div>
              <div className='name'>
                <h3>{category.name}</h3>
              </div>
            </Category>
          )})
        }
      </Content>
    </Container>
  );
}

export default Categories;
