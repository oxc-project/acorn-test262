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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "callb",
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
          "start": 15,
          "end": 39,
          "name": "lam",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 39,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 20,
              "end": 39,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 21,
                  "end": 30,
                  "name": "l",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 24,
                      "end": 30
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 42,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 56,
        "name": "callb",
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
          "start": 57,
          "end": 81,
          "name": "lam",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 60,
            "end": 81,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 62,
              "end": 81,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 63,
                  "end": 72,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 66,
                      "end": 72
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 98,
        "name": "callb",
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
          "start": 99,
          "end": 100,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 102,
        "end": 105,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 130,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 129,
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 112,
          "name": "callb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 113,
            "end": 128,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 120,
              "end": 128,
              "object": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 122,
                "end": 128,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 253,
      "end": 281,
      "expression": {
        "type": "CallExpression",
        "start": 253,
        "end": 280,
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 258,
          "name": "callb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 259,
            "end": 279,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                    "object": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 269,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 276,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
