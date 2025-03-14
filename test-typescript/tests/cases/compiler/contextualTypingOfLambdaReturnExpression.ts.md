__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 367,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 41,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "callb",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 39,
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 39,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 20,
              "end": 39,
              "params": [
                {
                  "type": "Identifier",
                  "start": 21,
                  "end": 30,
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 24,
                      "end": 30
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 32,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 35,
                  "end": 39
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 42,
      "end": 83,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 56,
        "decorators": [],
        "name": "callb",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 57,
          "end": 81,
          "decorators": [],
          "name": "lam",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 60,
            "end": 81,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 62,
              "end": 81,
              "params": [
                {
                  "type": "Identifier",
                  "start": 63,
                  "end": 72,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 66,
                      "end": 72
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 74,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 77,
                  "end": 81
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 105,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 102,
        "end": 105,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 98,
        "decorators": [],
        "name": "callb",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 99,
          "end": 100,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 130,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 129,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 113,
            "end": 128,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 120,
              "end": 128,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 122,
                "end": 128,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 112,
          "decorators": [],
          "name": "callb",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 281,
      "expression": {
        "type": "CallExpression",
        "start": 253,
        "end": 280,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 259,
            "end": 279,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 266,
              "end": 279,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 268,
                  "end": 277,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 268,
                    "end": 276,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 269,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 276,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 258,
          "decorators": [],
          "name": "callb",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
