import { permissionsList } from "./schemas/fields";
import { ListAccessArgs } from "./types";

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

export const permissions = {
  ...generatedPermissions,
  isAwesome({ session }: ListAccessArgs): boolean {
    return session?.data.name.includes('rustam');
  },
};

export const rules = {
    canManageProducts({ session }: ListAccessArgs ){
        if(permissions.canManageProducts({ session })){
          return true;
        }

        return { user: {id: session.itemId} };
    },

    canOrder({ session }: ListAccessArgs ){
      if(!isSignedIn({ session})){
        return false;
      }
      if(permissions.canManageProducts({ session })){
        return true;
      }
      return { user: {id: session.itemId} };
  },

  canManageOrderItems({ session }: ListAccessArgs ){
    if(!isSignedIn({ session})){
      return false;
    }
    if(permissions.canManageProducts({ session })){
      return true;
    }
    return { order: {user: {id: session.itemId}} };
},


    canReadProducts({ session }: ListAccessArgs ){
      if(!isSignedIn({ session})){
        return false;
      }
      if(permissions.canManageProducts({ session})){
        return true;
      }

      return { status: 'AVAILABLE'}
    },

    canManageUsers({ session }: ListAccessArgs ){
      if(!isSignedIn({ session})){
        return false;
      }
      if(permissions.canManageUsers({ session })){
        return true;
      }
      return { id: session.itemId};
  },
}
