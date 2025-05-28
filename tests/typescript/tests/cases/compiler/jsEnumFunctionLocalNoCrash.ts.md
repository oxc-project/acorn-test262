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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 37,
        "decorators": [],
        "name": "defineCommonExtensionSymbols",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 605,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 603,
            "expression": {
              "type": "AssignmentExpression",
              "start": 82,
              "end": 602,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 82,
                "end": 99,
                "object": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 92,
                  "decorators": [],
                  "name": "apiPrivate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 99,
                  "decorators": [],
                  "name": "Events",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 123,
                      "decorators": [],
                      "name": "ButtonClicked",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 125,
                      "end": 142,
                      "value": "button-clicked-",
                      "raw": "'button-clicked-'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 150,
                    "end": 194,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 169,
                      "decorators": [],
                      "name": "PanelObjectSelected",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 171,
                      "end": 194,
                      "value": "panel-objectSelected-",
                      "raw": "'panel-objectSelected-'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 202,
                    "end": 252,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 224,
                      "decorators": [],
                      "name": "NetworkRequestFinished",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 226,
                      "end": 252,
                      "value": "network-request-finished",
                      "raw": "'network-request-finished'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 260,
                    "end": 289,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 272,
                      "decorators": [],
                      "name": "OpenResource",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 274,
                      "end": 289,
                      "value": "open-resource",
                      "raw": "'open-resource'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 297,
                    "end": 325,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 308,
                      "decorators": [],
                      "name": "PanelSearch",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 310,
                      "end": 325,
                      "value": "panel-search-",
                      "raw": "'panel-search-'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 333,
                    "end": 377,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 349,
                      "decorators": [],
                      "name": "RecordingStarted",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 351,
                      "end": 377,
                      "value": "trace-recording-started-",
                      "raw": "'trace-recording-started-'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 385,
                    "end": 429,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 401,
                      "decorators": [],
                      "name": "RecordingStopped",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 403,
                      "end": 429,
                      "value": "trace-recording-stopped-",
                      "raw": "'trace-recording-stopped-'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 437,
                    "end": 468,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 450,
                      "decorators": [],
                      "name": "ResourceAdded",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 452,
                      "end": 468,
                      "value": "resource-added",
                      "raw": "'resource-added'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 476,
                    "end": 530,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 476,
                      "end": 500,
                      "decorators": [],
                      "name": "ResourceContentCommitted",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 502,
                      "end": 530,
                      "value": "resource-content-committed",
                      "raw": "'resource-content-committed'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 538,
                    "end": 562,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 538,
                      "end": 547,
                      "decorators": [],
                      "name": "ViewShown",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 549,
                      "end": 562,
                      "value": "view-shown-",
                      "raw": "'view-shown-'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 570,
                    "end": 596,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 570,
                      "end": 580,
                      "decorators": [],
                      "name": "ViewHidden",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 582,
                      "end": 596,
                      "value": "view-hidden-",
                      "raw": "'view-hidden-'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
