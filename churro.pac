function FindProxyForURL(url, host) {
  // If the hostname matches, send to the proxy.
  if (dnsDomainIs(host, ".naver.com") || shExpMatch(host, "*.naver.com")) {
    return "PROXY 1.tcp.jp.ngrok.io:23947; DIRECT";
  }

  // DEFAULT RULE: All other traffic, send direct.
  return "DIRECT";
}
