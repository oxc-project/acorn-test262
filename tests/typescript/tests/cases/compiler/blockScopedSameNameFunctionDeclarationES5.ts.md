__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 329,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
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
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 288,
        "body": [
          {
            "type": "IfStatement",
            "start": 30,
            "end": 251,
            "test": {
              "type": "BinaryExpression",
              "start": 34,
              "end": 41,
              "left": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 40,
                "end": 41,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 43,
              "end": 142,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 53,
                  "end": 71,
                  "id": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 65,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 68,
                    "end": 71,
                    "body": []
                  },
                  "expression": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 102,
                  "end": 108,
                  "expression": {
                    "type": "CallExpression",
                    "start": 102,
                    "end": 107,
                    "callee": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 105,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 118,
                  "end": 126,
                  "expression": {
                    "type": "CallExpression",
                    "start": 118,
                    "end": 125,
                    "callee": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 121,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 122,
                        "end": 124,
                        "value": 10,
                        "raw": "10"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 152,
              "end": 251,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 162,
                  "end": 180,
                  "id": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 174,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 177,
                    "end": 180,
                    "body": []
                  },
                  "expression": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 211,
                  "end": 217,
                  "expression": {
                    "type": "CallExpression",
                    "start": 211,
                    "end": 216,
                    "callee": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 214,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 227,
                  "end": 235,
                  "expression": {
                    "type": "CallExpression",
                    "start": 227,
                    "end": 234,
                    "callee": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 230,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 231,
                        "end": 233,
                        "value": 10,
                        "raw": "10"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 256,
            "end": 264,
            "expression": {
              "type": "CallExpression",
              "start": 256,
              "end": 263,
              "callee": {
                "type": "Identifier",
                "start": 256,
                "end": 259,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 260,
                  "end": 262,
                  "value": 10,
                  "raw": "10"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 279,
            "end": 285,
            "expression": {
              "type": "CallExpression",
              "start": 279,
              "end": 284,
              "callee": {
                "type": "Identifier",
                "start": 279,
                "end": 282,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 297,
      "expression": {
        "type": "CallExpression",
        "start": 289,
        "end": 296,
        "callee": {
          "type": "Identifier",
          "start": 289,
          "end": 292,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 293,
            "end": 295,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 304,
      "expression": {
        "type": "CallExpression",
        "start": 298,
        "end": 303,
        "callee": {
          "type": "Identifier",
          "start": 298,
          "end": 301,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
