function FindProxyForURL(url, host) {
  // If the hostname matches, send to the proxy.
  if (dnsDomainIs(host, "local.styleshare.kr") || shExpMatch(host, "local.styleshare.kr")) {
    return "PROXY 1.tcp.jp.ngrok.io:23947; DIRECT";
  }

  // DEFAULT RULE: All other traffic, send direct.
  return "DIRECT";
}
