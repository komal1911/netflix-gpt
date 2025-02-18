export const LOGO_URL="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const user_avatar="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXMrBpySF8XZ8sCkWvT8aguR_wkRNG3R8T7iwBTsIkMyYwlB6it3SFUkQreUS4BP7yzuo542K7ZoPtOd13o6SbNT3mRrFQA.png?r=6a6";
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
    }
  };

export const movieImgCDN="https://image.tmdb.org/t/p/w500/";
export const bgImg="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg";
export const supportedLanguages=[{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},
  {identifier:"spanish",name:"Spanish"}
]
export const OPENAI_KEY=import.meta.env.VITE_OPENAI_KEY;