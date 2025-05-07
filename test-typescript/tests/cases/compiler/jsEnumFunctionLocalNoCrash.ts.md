__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 605,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 605,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 605,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 603,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 82,
              "end": 602,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 82,
                "end": 99,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 92,
                  "decorators": [],
                  "name": "apiPrivate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 99,
                  "decorators": [],
                  "name": "Events",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "ObjectExpression",
                "start": 102,
                "end": 602,
                "properties": [
                  {
                    "type": "Property",
                    "start": 110,
                    "end": 142,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 123,
                      "decorators": [],
                      "name": "ButtonClicked",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 125,
                      "end": 142,
                      "raw": "'button-clicked-'",
                      "value": "button-clicked-",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 150,
                    "end": 194,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 169,
                      "decorators": [],
                      "name": "PanelObjectSelected",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 171,
                      "end": 194,
                      "raw": "'panel-objectSelected-'",
                      "value": "panel-objectSelected-",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 202,
                    "end": 252,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 224,
                      "decorators": [],
                      "name": "NetworkRequestFinished",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 226,
                      "end": 252,
                      "raw": "'network-request-finished'",
                      "value": "network-request-finished",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 260,
                    "end": 289,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 272,
                      "decorators": [],
                      "name": "OpenResource",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 274,
                      "end": 289,
                      "raw": "'open-resource'",
                      "value": "open-resource",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 297,
                    "end": 325,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 308,
                      "decorators": [],
                      "name": "PanelSearch",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 310,
                      "end": 325,
                      "raw": "'panel-search-'",
                      "value": "panel-search-",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 333,
                    "end": 377,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 349,
                      "decorators": [],
                      "name": "RecordingStarted",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 351,
                      "end": 377,
                      "raw": "'trace-recording-started-'",
                      "value": "trace-recording-started-",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 385,
                    "end": 429,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 401,
                      "decorators": [],
                      "name": "RecordingStopped",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 403,
                      "end": 429,
                      "raw": "'trace-recording-stopped-'",
                      "value": "trace-recording-stopped-",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 437,
                    "end": 468,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 450,
                      "decorators": [],
                      "name": "ResourceAdded",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 452,
                      "end": 468,
                      "raw": "'resource-added'",
                      "value": "resource-added",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 476,
                    "end": 530,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 500,
                      "decorators": [],
                      "name": "ResourceContentCommitted",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 502,
                      "end": 530,
                      "raw": "'resource-content-committed'",
                      "value": "resource-content-committed",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 538,
                    "end": 562,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 547,
                      "decorators": [],
                      "name": "ViewShown",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 549,
                      "end": 562,
                      "raw": "'view-shown-'",
                      "value": "view-shown-",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 570,
                    "end": 596,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 570,
                      "end": 580,
                      "decorators": [],
                      "name": "ViewHidden",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 582,
                      "end": 596,
                      "raw": "'view-hidden-'",
                      "value": "view-hidden-",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 37,
        "decorators": [],
        "name": "defineCommonExtensionSymbols",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 38,
          "end": 48,
          "decorators": [],
          "name": "apiPrivate",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
