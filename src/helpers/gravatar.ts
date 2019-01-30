import * as md5 from 'md5';

export const gravatarHelper = {
    getAvatar: (email: string): string => {
        return `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}`;
    },
};
