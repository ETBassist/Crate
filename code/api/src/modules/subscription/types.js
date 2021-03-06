// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'
import DeliveryType from '../delivery/types'
// App Imports
import { UserType } from '../user/types'
import CrateType from '../crate/types'
// will need to import DeliveryType
// in DeliveryType, will need to import DeliveryProductType
// in DeliveryProductType, will need to import ProductType

// Subscription type
const SubscriptionType = new GraphQLObjectType({
  name: 'subscription',
  description: 'Subscription Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    crate: { type: CrateType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    deliveries: { type: new GraphQLList(DeliveryType) }
  })
})

export default SubscriptionType
