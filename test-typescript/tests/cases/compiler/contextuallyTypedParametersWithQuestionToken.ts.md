__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 360,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 75,
        "name": "acceptNum",
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
          "start": 76,
          "end": 87,
          "name": "num",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 79,
            "end": 87,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 81,
              "end": 87
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 89,
        "end": 91,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 133,
            "name": "f1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 133,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 103,
                "end": 133,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 104,
                    "end": 113,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 105,
                      "end": 113,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 107,
                        "end": 113
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 115,
                    "end": 124,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 116,
                      "end": 124,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 118,
                        "end": 124
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 126,
                  "end": 133,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 129,
                    "end": 133
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 136,
            "end": 220,
            "id": {
              "type": "Identifier",
              "start": 145,
              "end": 149,
              "name": "self",
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
                "start": 150,
                "end": 151,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 153,
                "end": 155,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": true
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 157,
              "end": 220,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 161,
                  "end": 174,
                  "expression": {
                    "type": "CallExpression",
                    "start": 161,
                    "end": 173,
                    "callee": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 170,
                      "name": "acceptNum",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 171,
                        "end": 172,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 186,
                  "end": 195,
                  "expression": {
                    "type": "CallExpression",
                    "start": 186,
                    "end": 194,
                    "callee": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 190,
                      "name": "self",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 191,
                        "end": 193,
                        "value": "",
                        "raw": "\"\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 198,
                  "end": 218,
                  "expression": {
                    "type": "CallExpression",
                    "start": 198,
                    "end": 217,
                    "callee": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 202,
                      "name": "self",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 203,
                        "end": 205,
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Identifier",
                        "start": 207,
                        "end": 216,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 359,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 263,
            "name": "f2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 263,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 233,
                "end": 263,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 234,
                    "end": 243,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 235,
                      "end": 243,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 245,
                    "end": 254,
                    "name": "b",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 246,
                      "end": 254,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 248,
                        "end": 254
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 256,
                  "end": 263,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 259,
                    "end": 263
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 266,
            "end": 358,
            "id": {
              "type": "Identifier",
              "start": 275,
              "end": 279,
              "name": "self",
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
                "start": 280,
                "end": 281,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 283,
                "end": 293,
                "name": "b",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 285,
                  "end": 293,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 287,
                    "end": 293
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 295,
              "end": 358,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 299,
                  "end": 312,
                  "expression": {
                    "type": "CallExpression",
                    "start": 299,
                    "end": 311,
                    "callee": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 308,
                      "name": "acceptNum",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 309,
                        "end": 310,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 324,
                  "end": 333,
                  "expression": {
                    "type": "CallExpression",
                    "start": 324,
                    "end": 332,
                    "callee": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 328,
                      "name": "self",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 329,
                        "end": 331,
                        "value": "",
                        "raw": "\"\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 336,
                  "end": 356,
                  "expression": {
                    "type": "CallExpression",
                    "start": 336,
                    "end": 355,
                    "callee": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 340,
                      "name": "self",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 341,
                        "end": 343,
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Identifier",
                        "start": 345,
                        "end": 354,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
