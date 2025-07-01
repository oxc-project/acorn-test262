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
        "name": "distinguish",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 28,
                  "end": 34
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 37,
                  "end": 43
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 50
                  },
                  "typeArguments": null,
                  "start": 46,
                  "end": 50
                }
              ],
              "start": 28,
              "end": 50
            },
            "start": 26,
            "end": 50
          },
          "start": 21,
          "end": 50
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 67
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 85
              },
              "start": 62,
              "end": 85
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
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
                        "start": 97,
                        "end": 104
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 108
                      },
                      "optional": false,
                      "computed": false,
                      "start": 97,
                      "end": 108
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "Aha!! It's a Date in ",
                          "raw": "\"Aha!! It's a Date in \"",
                          "start": 109,
                          "end": 132
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 135,
                              "end": 140
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getFullYear",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 152
                            },
                            "optional": false,
                            "computed": false,
                            "start": 135,
                            "end": 152
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 135,
                          "end": 154
                        },
                        "start": 109,
                        "end": 154
                      }
                    ],
                    "optional": false,
                    "start": 97,
                    "end": 155
                  },
                  "directive": null,
                  "start": 97,
                  "end": 156
                }
              ],
              "start": 87,
              "end": 162
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 184
                  },
                  "prefix": true,
                  "start": 172,
                  "end": 184
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 189,
                  "end": 197
                },
                "start": 172,
                "end": 197
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
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
                          "start": 209,
                          "end": 216
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 217,
                          "end": 220
                        },
                        "optional": false,
                        "computed": false,
                        "start": 209,
                        "end": 220
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": "Aha!! It's a string of length ",
                            "raw": "\"Aha!! It's a string of length \"",
                            "start": 221,
                            "end": 253
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 256,
                              "end": 261
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 262,
                              "end": 268
                            },
                            "optional": false,
                            "computed": false,
                            "start": 256,
                            "end": 268
                          },
                          "start": 221,
                          "end": 268
                        }
                      ],
                      "optional": false,
                      "start": 209,
                      "end": 269
                    },
                    "directive": null,
                    "start": 209,
                    "end": 270
                  }
                ],
                "start": 199,
                "end": 276
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
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
                          "start": 292,
                          "end": 299
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 300,
                          "end": 303
                        },
                        "optional": false,
                        "computed": false,
                        "start": 292,
                        "end": 303
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": "Aha!! It's the number ",
                            "raw": "\"Aha!! It's the number \"",
                            "start": 304,
                            "end": 328
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thing",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 331,
                                "end": 336
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toPrecision",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 337,
                                "end": 348
                              },
                              "optional": false,
                              "computed": false,
                              "start": 331,
                              "end": 348
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 349,
                                "end": 350
                              }
                            ],
                            "optional": false,
                            "start": 331,
                            "end": 351
                          },
                          "start": 304,
                          "end": 351
                        }
                      ],
                      "optional": false,
                      "start": 292,
                      "end": 352
                    },
                    "directive": null,
                    "start": 292,
                    "end": 353
                  }
                ],
                "start": 282,
                "end": 359
              },
              "start": 168,
              "end": 359
            },
            "start": 58,
            "end": 359
          }
        ],
        "start": 52,
        "end": 361
      },
      "expression": false,
      "start": 0,
      "end": 361
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "typeAnnotation": null,
          "start": 363,
          "end": 374
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 383
            },
            "typeArguments": null,
            "arguments": [],
            "start": 375,
            "end": 385
          }
        ],
        "optional": false,
        "start": 363,
        "end": 386
      },
      "directive": null,
      "start": 363,
      "end": 387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 399
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "beef",
            "raw": "\"beef\"",
            "start": 400,
            "end": 406
          }
        ],
        "optional": false,
        "start": 388,
        "end": 407
      },
      "directive": null,
      "start": 388,
      "end": 408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3.14159265,
            "raw": "3.14159265",
            "start": 421,
            "end": 431
          }
        ],
        "optional": false,
        "start": 409,
        "end": 432
      },
      "directive": null,
      "start": 409,
      "end": 433
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 433
}
```
