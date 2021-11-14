/* eslint-disable @typescript-eslint/no-magic-numbers */

import { MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

export enum HttpMethod {
  Connect = 'CONNECT', // Establishes A Tunnel To The Server Identified By The Target Resource
  Delete = 'DELETE',   // Deletes The Specified Resource
  Get = 'GET',         // Requests A Representation Of The Specified Resource
  Head = 'HEAD',       // Asks For A Response Identical To That Of A GET Request, But Without The Response Body
  Options = 'OPTIONS', // Describes The Communication Options For The Target Resource
  Patch = 'PATCH',     // Used To Apply Partial Modifications To A Resource
  Post = 'POST',       // Used To Submit An Entity To The Specified Resource, Often Causing A Change In State Or Side Effects On The Server
  Put = 'PUT',         // Replaces All Current Representations Of The Target Resource With The Request Payload
  Trace = 'TRACE'      // Performs A Message Loop-Back Test Along The Path To The Target Resource
}

export enum HttpResponseType {
  InformationResponse = 'Information Response',  // 1XX Codes
  SuccessfulResponse = 'Successful Response',    // 2XX Codes
  RedirectionMessage = 'Redirection Message',    // 3XX Codes
  ClientErrorResponse = 'Client Error Response', // 4XX Codes
  ServerErrorResponse = 'Server Error Response'  // 5XX Codes
}

export interface AppConfiguration {
  apiServer : {
    paths : {
      contributors : {
        allContributors : string;
      };
      users : {
        allUsers : string;
        authenticate : string;
        createAccount : string;
        currentUser : string;
      };
    };
    themes : string;
  };
  constants : {
    genericAnimationDurationMS : number;
    maxClipboardCopyAttempts : number;
    progressSpinnerDiameterPX : number;
    progressSpinnerStrokeWidthPX : number;
    simulatedServerLatencyMS : number;
    tooltipHideDelayMS : number;
    tooltipShowDelayMS : number;
    touchendHideDelayMS : number;
  };
  flags : {
    disableTabPagination : boolean;
    dynamicTabHeight : boolean;
    fitTabInkBarToContent : boolean;
  };
}

interface AppConstants {
  httpResponseCodes : Record<number, {
    httpResponseType : HttpResponseType;
    httpStatusText : string;
    httpStatusDescription : string;
  }>;
  timeConstants : {
    oneSecondMS : number;
  };
}

/**
 * Global app constants. Last modified: 2nd July 2021
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status | MDN Web Docs HTTP Response Status Codes}
 */
export const APP_CONSTANTS : AppConstants = {
  httpResponseCodes : {
    0 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'Blocked By DevTools',
      httpStatusDescription : 'This response (interpreted by most browsers as an "unknown error") usually indicates that local browser DevTools are blocking the specific ' +
                              'HTTP request. It is classified here as a server error.'
    },
    100 : {
      httpResponseType : HttpResponseType.InformationResponse,
      httpStatusText : 'Continue',
      httpStatusDescription : 'This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the ' +
                              'request is already finished.'
    },
    101 : {
      httpResponseType : HttpResponseType.InformationResponse,
      httpStatusText : 'Switching Protocol',
      httpStatusDescription : 'This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.'
    },
    102 : {
      httpResponseType : HttpResponseType.InformationResponse,
      httpStatusText : 'Processing (WebDAV)',
      httpStatusDescription : 'This code indicates that the server has received and is processing the request, but no response is available yet.'
    },
    103 : {
      httpResponseType : HttpResponseType.InformationResponse,
      httpStatusText : 'Early Hints',
      httpStatusDescription : 'This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server ' +
                              'prepares a response.'
    },
    200 : {
      httpResponseType : HttpResponseType.SuccessfulResponse,
      httpStatusText : 'OK',
      httpStatusDescription : 'The request has succeeded. The meaning of the success depends on the HTTP method\n' +
                              'GET: The resource has been fetched and is transmitted in the message body.\n' +
                              'HEAD: The representation headers are included in the response without any message body.\n' +
                              'PUT or POST: The resource describing the result of the action is transmitted in the message body.\n' +
                              'TRACE: The message body contains the request message as received by the server.\n'
    },
    201 : {
      httpResponseType : HttpResponseType.SuccessfulResponse,
      httpStatusText : 'Created',
      httpStatusDescription : 'The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some ' +
                              'PUT requests.'
    },
    202 : {
      httpResponseType : HttpResponseType.SuccessfulResponse,
      httpStatusText : 'Accepted',
      httpStatusDescription : 'The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous ' +
                              'response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch ' +
                              'processing.'
    },
    203 : {
      httpResponseType : HttpResponseType.SuccessfulResponse,
      httpStatusText : 'Non-Authoritative Information',
      httpStatusDescription : 'This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from ' +
                              'a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" ' +
                              'response is preferred to this status.'
    },
    204 : {
      httpResponseType : HttpResponseType.SuccessfulResponse,
      httpStatusText : 'No Content',
      httpStatusDescription : 'There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource ' +
                              'with the new ones.'
    },
    205 : {
      httpResponseType : HttpResponseType.SuccessfulResponse,
      httpStatusText : 'Reset Content',
      httpStatusDescription : 'Tells the user-agent to reset the document which sent this request.'
    },
    206 : {
      httpResponseType : HttpResponseType.SuccessfulResponse,
      httpStatusText : 'Partial Content',
      httpStatusDescription : 'This response code is used when the Range header is sent from the client to request only part of a resource.'
    },
    207 : {
      httpResponseType : HttpResponseType.SuccessfulResponse,
      httpStatusText : 'Multi-Status (WebDAV)',
      httpStatusDescription : 'Conveys information about multiple resources, for situations where multiple status codes might be appropriate.'
    },
    208 : {
      httpResponseType : HttpResponseType.SuccessfulResponse,
      httpStatusText : 'Already Reported',
      httpStatusDescription : 'Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.'
    },
    226 : {
      httpResponseType : HttpResponseType.SuccessfulResponse,
      httpStatusText : 'IM Used (HTTP Delta Encoding)',
      httpStatusDescription : 'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more ' +
                              'instance-manipulations applied to the current instance.'
    },
    300 : {
      httpResponseType : HttpResponseType.RedirectionMessage,
      httpStatusText : 'Multiple Choice',
      httpStatusDescription : 'The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing ' +
                              'one of the responses, but HTML links to the possibilities are recommended so the user can pick.)'
    },
    301 : {
      httpResponseType : HttpResponseType.RedirectionMessage,
      httpStatusText : 'Moved Permanently',
      httpStatusDescription : 'The URL of the requested resource has been changed permanently. The new URL is given in the response.'
    },
    302 : {
      httpResponseType : HttpResponseType.RedirectionMessage,
      httpStatusText : 'Found',
      httpStatusDescription : 'This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the ' +
                              'future. Therefore, this same URI should be used by the client in future requests.'
    },
    303 : {
      httpResponseType : HttpResponseType.RedirectionMessage,
      httpStatusText : 'See Other',
      httpStatusDescription : 'The server sent this response to direct the client to get the requested resource at another URI with a GET request.'
    },
    304 : {
      httpResponseType : HttpResponseType.RedirectionMessage,
      httpStatusText : 'Not Modified',
      httpStatusDescription : 'This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same ' +
                              'cached version of the response.'
    },
    307 : {
      httpResponseType : HttpResponseType.RedirectionMessage,
      httpStatusText : 'Temporary Redirect',
      httpStatusDescription : 'The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior ' +
                              'request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP ' +
                              'method used: If a POST was used in the first request, a POST must be used in the second request.'
    },
    308 : {
      httpResponseType : HttpResponseType.RedirectionMessage,
      httpStatusText : 'Permanent Redirect',
      httpStatusDescription : 'This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same ' +
                              'semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: If a ' +
                              'POST was used in the first request, a POST must be used in the second request.'
    },
    400 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Bad Request',
      httpStatusDescription : 'The server could not understand the request due to invalid syntax.'
    },
    401 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Unauthorized',
      httpStatusDescription : 'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must ' +
                              'authenticate itself to get the requested response.'
    },
    402 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Payment Required',
      httpStatusDescription : 'This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this ' +
                              'status code is used very rarely and no standard convention exists.'
    },
    403 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Forbidden',
      httpStatusDescription : 'The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested ' +
                              'resource. Unlike 401, the client\'s identity is known to the server.'
    },
    404 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Not Found',
      httpStatusDescription : 'The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the ' +
                              'endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a ' +
                              'resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.'
    },
    405 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Method Not Allowed',
      httpStatusDescription : 'The request method is known by the server but is not supported by the target resource. For example, an API may forbid DELETE-ing a resource.'
    },
    406 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Not Acceptable',
      httpStatusDescription : 'This response is sent when the web server, after performing server-driven content negotiation, doesn\'t find any content that conforms to ' +
                              'the criteria given by the user agent.'
    },
    407 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Proxy Authentication Required',
      httpStatusDescription : 'This is similar to 401 but authentication is needed to be done by a proxy.'
    },
    408 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Request Timeout',
      httpStatusDescription : 'This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would ' +
                              'like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP ' +
                              'pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.'
    },
    409 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Conflict',
      httpStatusDescription : 'This response is sent when a request conflicts with the current state of the server.'
    },
    410 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Gone',
      httpStatusDescription : 'This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected ' +
                              'to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional ' +
                              'services". APIs should not feel compelled to indicate resources that have been deleted with this status code.'
    },
    411 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Length Required',
      httpStatusDescription : 'Server rejected the request because the Content-Length header field is not defined and the server requires it.'
    },
    412 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Precondition Failed',
      httpStatusDescription : 'The client has indicated preconditions in its headers which the server does not meet.'
    },
    413 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Payload Too Large',
      httpStatusDescription : 'Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.'
    },
    414 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'URI Too Long',
      httpStatusDescription : 'The URI requested by the client is longer than the server is willing to interpret.'
    },
    415 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Unsupported Media Type',
      httpStatusDescription : 'The media format of the requested data is not supported by the server, so the server is rejecting the request.'
    },
    416 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Range Not Satisfiable',
      httpStatusDescription : 'The range specified by the Range header field in the request can\'t be fulfilled; it\'s possible that the range is outside the size of the ' +
                              'target URI\'s data.'
    },
    417 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Expectation Failed',
      httpStatusDescription : 'This response code means the expectation indicated by the Expect request header field can\'t be met by the server.'
    },
    418 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'I\'m A Teapot',
      httpStatusDescription : 'The server refuses the attempt to brew coffee with a teapot.'
    },
    421 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Misdirected Request',
      httpStatusDescription : 'The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce ' +
                              'responses for the combination of scheme and authority that are included in the request URI.'
    },
    422 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Unprocessable Entity (WebDAV)',
      httpStatusDescription : 'The request was well-formed but was unable to be followed due to semantic errors.'
    },
    423 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Locked (WebDAV)',
      httpStatusDescription : 'The resource that is being accessed is locked.'
    },
    424 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Failed Dependency (WebDAV)',
      httpStatusDescription : 'The request failed due to failure of a previous request.'
    },
    425 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Too Early',
      httpStatusDescription : 'Indicates that the server is unwilling to risk processing a request that might be replayed.'
    },
    426 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Upgrade Required',
      httpStatusDescription : 'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different ' +
                              'protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).'
    },
    428 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Precondition Required',
      httpStatusDescription : 'The origin server requires the request to be conditional. This response is intended to prevent the \'lost update\' problem, where a client ' +
                              'GETs a resource\'s state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, ' +
                              'leading to a conflict.'
    },
    429 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Too Many Requests',
      httpStatusDescription : 'The user has sent too many requests in a given amount of time ("rate limiting").'
    },
    431 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Request Header Fields Too Large',
      httpStatusDescription : 'The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the ' +
                              'size of the request header fields.'
    },
    451 : {
      httpResponseType : HttpResponseType.ClientErrorResponse,
      httpStatusText : 'Unavailable For Legal Reasons',
      httpStatusDescription : 'The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.'
    },
    500 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'Internal Server Error',
      httpStatusDescription : 'The server has encountered a situation it doesn\'t know how to handle.'
    },
    501 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'Not Implemented',
      httpStatusDescription : 'The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and ' +
                              'therefore that must not return this code) are GET and HEAD.'
    },
    502 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'Bad Gateway',
      httpStatusDescription : 'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.'
    },
    503 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'Service Unavailable',
      httpStatusDescription : 'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that ' +
                              'together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary ' +
                              'conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The ' +
                              'webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition ' +
                              'responses should usually not be cached.'
    },
    504 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'Gateway Timeout',
      httpStatusDescription : 'This error response is given when the server is acting as a gateway and cannot get a response in time.'
    },
    505 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'HTTP Version Not Supported',
      httpStatusDescription : 'The HTTP version used in the request is not supported by the server.'
    },
    506 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'Variant Also Negotiates',
      httpStatusDescription : 'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation ' +
                              'itself, and is therefore not a proper end point in the negotiation process.'
    },
    507 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'Insufficient Storage (WebDAV)',
      httpStatusDescription : 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete ' +
                              'the request.'
    },
    508 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'Loop Detected (WebDAV)',
      httpStatusDescription : 'The server detected an infinite loop while processing the request.'
    },
    510 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'Not Extended',
      httpStatusDescription : 'Further extensions to the request are required for the server to fulfill it.'
    },
    511 : {
      httpResponseType : HttpResponseType.ServerErrorResponse,
      httpStatusText : 'Network Authentication Required',
      httpStatusDescription : 'The 511 status code indicates that the client needs to authenticate to gain network access.'
    }
  },
  timeConstants : {
    oneSecondMS : 1000
  }
};

export const DEFAULT_APP_CONFIGURATION : AppConfiguration = {
  apiServer : {
    paths : {
      contributors : {
        allContributors : 'api/contributors/allContributors'
      },
      users : {
        allUsers : 'api/users/allUsers',
        authenticate : 'api/users/authenticate',
        createAccount : 'api/users/createAccount',
        currentUser : 'api/users/currentUser'
      }
    },
    themes : 'assets/themes'
  },
  constants : {
    genericAnimationDurationMS : 100,
    maxClipboardCopyAttempts : 2,
    progressSpinnerDiameterPX : 80,
    progressSpinnerStrokeWidthPX : 10,
    simulatedServerLatencyMS : 1000,
    tooltipHideDelayMS : 0,
    tooltipShowDelayMS : 500,
    touchendHideDelayMS : 1500
  },
  flags : {
    disableTabPagination : false,
    dynamicTabHeight : true,
    fitTabInkBarToContent : true
  }
};

export const DEFAULT_MAT_DIALOG_CONFIG : MatDialogConfig = {
  autoFocus : true,
  closeOnNavigation : false,
  disableClose : true,
  hasBackdrop : true,
  restoreFocus : true,
  direction : 'ltr',
  panelClass : 'pf-dialog',
  role : 'dialog'
};

export const DEFAULT_MAT_SNACKBAR_CONFIG : MatSnackBarConfig = {
  duration : 5000,
  direction : 'ltr',
  horizontalPosition : 'center',
  verticalPosition : 'bottom',
  politeness : 'polite',
  announcementMessage : undefined,
  data : undefined,
  panelClass : undefined,
  viewContainerRef : undefined
};
