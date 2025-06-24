export const getData = async ({
    contentType,
    entryUid,
    params={},
    includeAllReferences=false,
    // referenceFieldUID,
  }: {
    contentType: string;
    entryUid?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: { [key: string]: any };
    includeAllReferences?:boolean;
    referenceFieldUID?:string;
  }) => {
    try {
      // console.log("entryuid0", entryUid);  
      console.log("pppppp",JSON.stringify(params))
      // const defaultLocale = 'en-us';
     
      const query = params
      ? Object.keys(params)
          .map(key => {
            if (Array.isArray(params[key])) {
              return params[key].map((item: string) => `${key}[]=${item}`).join('&');
            } else {
              return `${key}=${params[key].toString()}`;
            }
          })
          .join('&')
      : '';
      console.log("blog query",query)
  
      const url = entryUid
        ? `https://eu-cdn.contentstack.com/v3/content_types/${contentType}/entries/${entryUid}?locale=en-us${query ? `&${query}` : ''}${includeAllReferences? "&include_all=true":""}`
        : `https://eu-cdn.contentstack.com/v3/content_types/${contentType}/entries?locale=en-us${query ? `&${query}` : ''}`;
        
        // const url = entryUid
        // ? `${process.env.CONTENTSTACK_HOST}v3/content_types/${contentType}/entries/${entryUid}?&include[]=${referenceFieldUID}locale=en-us${query ? `&${query}` : ''}`
        // : `${process.env.CONTENTSTACK_HOST}v3/content_types/${contentType}/entries?include[]=bltd20e24f01050d83c&locale=en-us${query ? `&${query}` : ''}`;
        
        console.log("blog url:",url)
        const apiKey = "blt9f7fb6656f851a15";
        const accessToken = "csca8b7ea7c31ddf2aad006e28";
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'api_key': apiKey || '',
          'access_token': accessToken || '',
        },
        cache: 'no-store',
      });

  
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.entries || [];
    } catch (error) {
      console.error('getData error:', error);
      return entryUid ? null : [];
    }
  };