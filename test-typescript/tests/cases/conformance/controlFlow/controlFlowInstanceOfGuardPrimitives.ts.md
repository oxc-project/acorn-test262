__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 433,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 361,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 361,
        "body": [
          {
            "type": "IfStatement",
            "start": 58,
            "end": 359,
            "alternate": {
              "type": "IfStatement",
              "start": 168,
              "end": 359,
              "alternate": {
                "type": "BlockStatement",
                "start": 282,
                "end": 359,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 292,
                    "end": 353,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 292,
                      "end": 352,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 304,
                          "end": 351,
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "start": 304,
                            "end": 328,
                            "raw": "\"Aha!! It's the number \"",
                            "value": "Aha!! It's the number ",
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 331,
                            "end": 351,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 349,
                                "end": 350,
                                "raw": "3",
                                "value": 3,
                                "regex": null,
                                "bigint": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 331,
                              "end": 348,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 331,
                                "end": 336,
                                "decorators": [],
                                "name": "thing",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 337,
                                "end": 348,
                                "decorators": [],
                                "name": "toPrecision",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 292,
                        "end": 303,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 292,
                          "end": 299,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 300,
                          "end": 303,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 199,
                "end": 276,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 209,
                    "end": 270,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 209,
                      "end": 269,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 221,
                          "end": 268,
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "start": 221,
                            "end": 253,
                            "raw": "\"Aha!! It's a string of length \"",
                            "value": "Aha!! It's a string of length ",
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 256,
                            "end": 268,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 256,
                              "end": 261,
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 262,
                              "end": 268,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 209,
                        "end": 220,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 209,
                          "end": 216,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 217,
                          "end": 220,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 172,
                "end": 197,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 172,
                  "end": 184,
                  "argument": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 184,
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 189,
                  "end": 197,
                  "raw": "'string'",
                  "value": "string",
                  "regex": null,
                  "bigint": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 87,
              "end": 162,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 97,
                  "end": 156,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 97,
                    "end": 155,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 109,
                        "end": 154,
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "start": 109,
                          "end": 132,
                          "raw": "\"Aha!! It's a Date in \"",
                          "value": "Aha!! It's a Date in ",
                          "regex": null,
                          "bigint": null
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 135,
                          "end": 154,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 135,
                            "end": 152,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 135,
                              "end": 140,
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 152,
                              "decorators": [],
                              "name": "getFullYear",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 97,
                      "end": 108,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 104,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 108,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 62,
              "end": 85,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 62,
                "end": 67,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 79,
                "end": 85,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 20,
        "decorators": [],
        "name": "distinguish",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 50,
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 50,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 28,
              "end": 50,
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
                  "start": 46,
                  "end": 50,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 50,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 363,
      "end": 387,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 363,
        "end": 386,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 375,
            "end": 385,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 379,
              "end": 383,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 363,
          "end": 374,
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 388,
      "end": 408,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 388,
        "end": 407,
        "arguments": [
          {
            "type": "Literal",
            "start": 400,
            "end": 406,
            "raw": "\"beef\"",
            "value": "beef",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 388,
          "end": 399,
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 409,
      "end": 433,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 409,
        "end": 432,
        "arguments": [
          {
            "type": "Literal",
            "start": 421,
            "end": 431,
            "raw": "3.14159265",
            "value": 3.14159265,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 409,
          "end": 420,
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
