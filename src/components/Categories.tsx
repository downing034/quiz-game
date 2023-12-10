import { useContext } from 'react';
import { Category as CategoryType, Categories as CategoriesType } from 'models/categories/types';
import Category from './Category';
import Loader from 'components/Loader';
import { MainContext, useLoading } from 'contexts';
import { MainContextType } from 'models/types';

const Categories = () => {
	const { loading } = useLoading();

	const data: MainContextType = useContext(MainContext);
	const categories: CategoriesType = data.categories;
	return (
		<>
		  { loading && <Loader /> }
      { 
        !loading && categories.map((c: CategoryType) => {
          return(<Category key={c.id.toString()} category={c} />)
        })
      }
	  </>
	);
};

export default Categories;