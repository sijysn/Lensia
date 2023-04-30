export const authorize = async () => {
  await fetch(
    "https://api.instagram.com/oauth/authorize?client_id=244576871418829&redirect_uri=https://www.lensia.space/&scope=user_profile,user_media&response_type=code",
    {
      method: "GET",
      cache: "no-cache",
    }
  );
};

export const getToken = async (code: string) => {
  const param = {
    client_id: 244576871418829,
    client_secret: "54ded54e7077d91a393adf408853c8e0",
    code,
    grant_type: "authorization_code",
    redirect_uri: "https://www.lensia.space/",
  };
  const res = await fetch("https://api.instagram.com/oauth/access_token", {
    method: "POST",
    body: JSON.stringify(param),
  });
  return res;
};

export const getUserMediaFromInstagram = async (access_token: string) => { 
  const res = await fetch(`https://graph.instagram.com/me/media?fields=id&access_token=${access_token}`. {
    method: "GET",
  })
  return res
}

export const getMediaDataFromInstagram = async (media_id: string, access_token: string) => {
  const res = await fetch(`https://graph.instagram.com/${media_id}?fields=id,media_type,media_url,username,timestamp&access_token=${access_token}`)
  return res
}
