__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 67
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 73,
              "end": 79
            },
            "start": 71,
            "end": 79
          },
          "start": 68,
          "end": 79
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 96
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 109,
                  "end": 112
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 120,
                    "end": 127
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 134,
                          "end": 141
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 142,
                          "end": 145
                        },
                        "optional": false,
                        "computed": false,
                        "start": 134,
                        "end": 145
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "1",
                          "raw": "\"1\"",
                          "start": 146,
                          "end": 149
                        }
                      ],
                      "optional": false,
                      "start": 134,
                      "end": 150
                    },
                    "directive": null,
                    "start": 134,
                    "end": 151
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 158,
                          "end": 165
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 166,
                          "end": 169
                        },
                        "optional": false,
                        "computed": false,
                        "start": 158,
                        "end": 169
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "2",
                          "raw": "\"2\"",
                          "start": 170,
                          "end": 173
                        }
                      ],
                      "optional": false,
                      "start": 158,
                      "end": 174
                    },
                    "directive": null,
                    "start": 158,
                    "end": 175
                  }
                ],
                "start": 104,
                "end": 175
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 185,
                  "end": 188
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 196,
                          "end": 203
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 204,
                          "end": 207
                        },
                        "optional": false,
                        "computed": false,
                        "start": 196,
                        "end": 207
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "3",
                          "raw": "\"3\"",
                          "start": 208,
                          "end": 211
                        }
                      ],
                      "optional": false,
                      "start": 196,
                      "end": 212
                    },
                    "directive": null,
                    "start": 196,
                    "end": 213
                  }
                ],
                "start": 180,
                "end": 213
              }
            ],
            "start": 85,
            "end": 217
          }
        ],
        "start": 81,
        "end": 219
      },
      "expression": false,
      "start": 57,
      "end": 219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 231
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 237,
              "end": 243
            },
            "start": 235,
            "end": 243
          },
          "start": 232,
          "end": 243
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 260
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 273,
                  "end": 276
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 284,
                          "end": 291
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 292,
                          "end": 295
                        },
                        "optional": false,
                        "computed": false,
                        "start": 284,
                        "end": 295
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "1",
                          "raw": "\"1\"",
                          "start": 296,
                          "end": 299
                        }
                      ],
                      "optional": false,
                      "start": 284,
                      "end": 300
                    },
                    "directive": null,
                    "start": 284,
                    "end": 301
                  }
                ],
                "start": 268,
                "end": 301
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 321,
                    "end": 328
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 335,
                          "end": 342
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 343,
                          "end": 346
                        },
                        "optional": false,
                        "computed": false,
                        "start": 335,
                        "end": 346
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "2",
                          "raw": "\"2\"",
                          "start": 347,
                          "end": 350
                        }
                      ],
                      "optional": false,
                      "start": 335,
                      "end": 351
                    },
                    "directive": null,
                    "start": 335,
                    "end": 352
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 359,
                          "end": 366
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 367,
                          "end": 370
                        },
                        "optional": false,
                        "computed": false,
                        "start": 359,
                        "end": 370
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "3",
                          "raw": "\"3\"",
                          "start": 371,
                          "end": 374
                        }
                      ],
                      "optional": false,
                      "start": 359,
                      "end": 375
                    },
                    "directive": null,
                    "start": 359,
                    "end": 376
                  }
                ],
                "start": 306,
                "end": 376
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 386,
                  "end": 389
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 397,
                          "end": 404
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 408
                        },
                        "optional": false,
                        "computed": false,
                        "start": 397,
                        "end": 408
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "4",
                          "raw": "\"4\"",
                          "start": 409,
                          "end": 412
                        }
                      ],
                      "optional": false,
                      "start": 397,
                      "end": 413
                    },
                    "directive": null,
                    "start": 397,
                    "end": 414
                  }
                ],
                "start": 381,
                "end": 414
              }
            ],
            "start": 249,
            "end": 418
          }
        ],
        "start": 245,
        "end": 420
      },
      "expression": false,
      "start": 221,
      "end": 420
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 420
}
```
