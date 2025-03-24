__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 232,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "log",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 30,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 37,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 33,
          "end": 37
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 39,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "name": "get",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 69,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 63,
          "end": 69
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 86,
        "name": "main1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 232,
        "body": [
          {
            "type": "TryStatement",
            "start": 104,
            "end": 230,
            "block": {
              "type": "BlockStatement",
              "start": 108,
              "end": 137,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 118,
                  "end": 131,
                  "argument": {
                    "type": "CallExpression",
                    "start": 125,
                    "end": 130,
                    "callee": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 128,
                      "name": "get",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 142,
              "end": 183,
              "param": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 183,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 161,
                    "end": 177,
                    "expression": {
                      "type": "CallExpression",
                      "start": 161,
                      "end": 176,
                      "callee": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 164,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 165,
                          "end": 175,
                          "value": "in catch",
                          "raw": "\"in catch\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 196,
              "end": 230,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 206,
                  "end": 224,
                  "expression": {
                    "type": "CallExpression",
                    "start": 206,
                    "end": 223,
                    "callee": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 209,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 210,
                        "end": 222,
                        "value": "in finally",
                        "raw": "\"in finally\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 89,
        "end": 97,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 91,
          "end": 97
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
