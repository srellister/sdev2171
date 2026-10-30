# Starter Snippets

Use these snippets as support, not as a substitute for understanding the flow.

## 1. Auth provider state shape

```js
const [authToken, setAuthToken] = useState('');
const [currentUser, setCurrentUser] = useState(null);
const [isWorking, setIsWorking] = useState(false);
```

## 2. Context value shape

```js
const value = {
  authToken,
  currentUser,
  isAuthenticated: Boolean(authToken),
  isWorking,
  signIn,
  registerAccount,
  signOut,
};
```

## 3. Sign-in action pattern

```js
async function signIn(credentials) {
  setIsWorking(true);

  try {
    const body = await loginRequest(credentials);
    setAuthToken(body.token);
    setCurrentUser(body.user);
    return body;
  } finally {
    setIsWorking(false);
  }
}
```

## 4. Register action pattern

```js
async function registerAccount(draft) {
  setIsWorking(true);

  try {
    const body = await registerRequest(draft);
    setAuthToken(body.token);
    setCurrentUser(body.user);
    return body;
  } finally {
    setIsWorking(false);
  }
}
```

## 5. Sign-out pattern

```js
function signOut() {
  setAuthToken('');
  setCurrentUser(null);
}
```

## 6. Entry redirect pattern

```js
if (isAuthenticated) {
  return <Redirect href="/(protected)/details" />;
}

return <Redirect href="/(public)/welcome" />;
```

## 7. Protected layout gate

```js
if (!isAuthenticated) {
  return <Redirect href="/(public)/login" />;
}
```

## 8. Bearer-token request pattern

```js
const response = await fetch(`${getApiBaseUrl()}/auth/me`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

## 9. Post-login route change

```js
await signIn({
  email,
  password,
});

router.replace('/(protected)/details');
```
