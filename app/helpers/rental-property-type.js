import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Appartment'
];

export function rentalPropertyType([type]) {
  if(communityPropertyTypes.includes(type)) {
    return 'Community';
  }
  return standalone;
}
export default Ember.Helper.helper(rentalPropertyType);