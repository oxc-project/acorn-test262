__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "log",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 30,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 37,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 33,
          "end": 37
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 39,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "decorators": [],
        "name": "get",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 69,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 63,
          "end": 69
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 86,
        "decorators": [],
        "name": "main1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 89,
        "end": 97,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 91,
          "end": 97
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 185,
        "body": [
          {
            "type": "TryStatement",
            "start": 104,
            "end": 183,
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
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
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
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 165,
                          "end": 175,
                          "value": "in catch",
                          "raw": "\"in catch\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
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
