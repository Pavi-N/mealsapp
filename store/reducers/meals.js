import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals:MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState,action) => {
    switch(action.type){
        case TOGGLE_FAVORITE:
            const exisitingIndex = state.favoriteMeals.findIndex(meal=> meal.id=== action.mealId)  
            if(exisitingIndex>=0){
                const updatedFavMeal = [...state.favoriteMeals]
                updatedFavMeal.splice(exisitingIndex,1)
                return{
                    ...state,
                    favoriteMeals: updatedFavMeal
                }
            } 
            else{
                const meals = state.meals.find(meal => meal.id ===action.mealId)
                return{
                    ...state,
                    favoriteMeals: state.favoriteMeals.concat(meals)
                }
            }   
        case SET_FILTERS:
            const appliedFilters = action.filters
            const updatedsFilteredMeals = state.meals.filter(meal=>{
                if(appliedFilters.glutenFree && !meal.isGlutenFree ){
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree ){
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan ){
                    return false;
                } 
                 if(appliedFilters.vegeterian && !meal.isVegetarian ){
                    return false;
                }
                    return true;
            })
            return {
                ...state,
                filteredMeals: updatedsFilteredMeals
            }
    default:
    return state
    }
    
}

export default mealsReducer;