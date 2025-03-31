__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 309,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
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
          "start": 13,
          "end": 22,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 268,
        "body": [
          {
            "type": "IfStatement",
            "start": 30,
            "end": 231,
            "test": {
              "type": "BinaryExpression",
              "start": 34,
              "end": 42,
              "left": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 40,
                "end": 42,
                "value": 10,
                "raw": "10"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 44,
              "end": 133,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 54,
                  "end": 72,
                  "id": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 66,
                    "name": "foo",
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
                    "start": 69,
                    "end": 72,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 94,
                  "end": 100,
                  "expression": {
                    "type": "CallExpression",
                    "start": 94,
                    "end": 99,
                    "callee": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 97,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 109,
                  "end": 117,
                  "expression": {
                    "type": "CallExpression",
                    "start": 109,
                    "end": 116,
                    "callee": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 112,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 113,
                        "end": 115,
                        "value": 10,
                        "raw": "10"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 143,
              "end": 231,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 153,
                  "end": 171,
                  "id": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 165,
                    "name": "foo",
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
                    "start": 168,
                    "end": 171,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 193,
                  "end": 199,
                  "expression": {
                    "type": "CallExpression",
                    "start": 193,
                    "end": 198,
                    "callee": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 196,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 208,
                  "end": 216,
                  "expression": {
                    "type": "CallExpression",
                    "start": 208,
                    "end": 215,
                    "callee": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 211,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 212,
                        "end": 214,
                        "value": 10,
                        "raw": "10"
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
          {
            "type": "ExpressionStatement",
            "start": 236,
            "end": 244,
            "expression": {
              "type": "CallExpression",
              "start": 236,
              "end": 243,
              "callee": {
                "type": "Identifier",
                "start": 236,
                "end": 239,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 240,
                  "end": 242,
                  "value": 10,
                  "raw": "10"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 259,
            "end": 265,
            "expression": {
              "type": "CallExpression",
              "start": 259,
              "end": 264,
              "callee": {
                "type": "Identifier",
                "start": 259,
                "end": 262,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 277,
      "expression": {
        "type": "CallExpression",
        "start": 269,
        "end": 276,
        "callee": {
          "type": "Identifier",
          "start": 269,
          "end": 272,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 273,
            "end": 275,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 284,
      "expression": {
        "type": "CallExpression",
        "start": 278,
        "end": 283,
        "callee": {
          "type": "Identifier",
          "start": 278,
          "end": 281,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
