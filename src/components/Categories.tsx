import { useContext } from 'react';
import { Category as CategoryType, Categories as CategoriesType } from 'models/types';
import Category from './Category';
import Loader from 'components/Loader';
import { MainContext, useLoading } from 'contexts';

const Categories = () => {
	const { loading } = useLoading();

	const data = useContext(MainContext);
	const categories: CategoriesType = data.categories;

	return (
		<>
		  { loading && <Loader /> }
      { 
        !loading && categories.map((c: CategoryType) => {
          return(<Category key={c.id} category={c} />)
        })
      }
	  </>
	);
};

export default Categories;