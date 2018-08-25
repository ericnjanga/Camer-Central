

/**
 * Toggle property of a specific item of a collection (give the opposite value to the rest)
 * - Operation is done of a copy of the collection (which will be returned)
 * 
 * @arrCollection: collection that will be mapped
 * @itemIdProp: string identifying the item whose property will be toggled  
 * @itemProp: property we want to toggle
 * @itemVal: value that the target item which get
 * @itemOppVal: opposite value (items which aren't qualifying will have it)
*/
export const toggleCollectionProperty = ({
  arrCollection, 
  targetId, 
  itemIdProp,
  itemProp, 
  itemVal, 
  itemOppVal,
}) => {


  console.log('----', targetId, 
  itemIdProp,
  itemProp, 
  itemVal, 
  itemOppVal);

  const tplCollection = [...arrCollection];

  for(let i = 0, l=tplCollection.length; i < l; i += 1) {
    // console.log('..', tplCollection[i], ' | ', tplCollection[i][itemIdProp]);
    if(tplCollection[i][itemIdProp] === targetId) {

      tplCollection[i][itemProp] = itemVal;

    } else {

      tplCollection[i][itemProp] = itemOppVal;

    }

  }

  return tplCollection;
};


