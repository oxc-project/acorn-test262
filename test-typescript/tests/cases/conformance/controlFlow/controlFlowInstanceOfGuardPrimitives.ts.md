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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 20,
        "name": "distinguish",
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
          "end": 50,
          "name": "thing",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 50,
                    "name": "Date",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 361,
        "body": [
          {
            "type": "IfStatement",
            "start": 58,
            "end": 359,
            "test": {
              "type": "BinaryExpression",
              "start": 62,
              "end": 85,
              "left": {
                "type": "Identifier",
                "start": 62,
                "end": 67,
                "name": "thing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 79,
                "end": 85,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "expression": {
                    "type": "CallExpression",
                    "start": 97,
                    "end": 155,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 97,
                      "end": 108,
                      "object": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 104,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 105,
                        "end": 108,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 109,
                        "end": 154,
                        "left": {
                          "type": "Literal",
                          "start": 109,
                          "end": 132,
                          "value": "Aha!! It's a Date in ",
                          "raw": "\"Aha!! It's a Date in \""
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "start": 135,
                          "end": 154,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 135,
                            "end": 152,
                            "object": {
                              "type": "Identifier",
                              "start": 135,
                              "end": 140,
                              "name": "thing",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 141,
                              "end": 152,
                              "name": "getFullYear",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        }
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
              "type": "IfStatement",
              "start": 168,
              "end": 359,
              "test": {
                "type": "BinaryExpression",
                "start": 172,
                "end": 197,
                "left": {
                  "type": "UnaryExpression",
                  "start": 172,
                  "end": 184,
                  "operator": "typeof",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 184,
                    "name": "thing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 189,
                  "end": 197,
                  "value": "string",
                  "raw": "'string'"
                }
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
                    "expression": {
                      "type": "CallExpression",
                      "start": 209,
                      "end": 269,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 209,
                        "end": 220,
                        "object": {
                          "type": "Identifier",
                          "start": 209,
                          "end": 216,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 217,
                          "end": 220,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 221,
                          "end": 268,
                          "left": {
                            "type": "Literal",
                            "start": 221,
                            "end": 253,
                            "value": "Aha!! It's a string of length ",
                            "raw": "\"Aha!! It's a string of length \""
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "start": 256,
                            "end": 268,
                            "object": {
                              "type": "Identifier",
                              "start": 256,
                              "end": 261,
                              "name": "thing",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 262,
                              "end": 268,
                              "name": "length",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
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
                "start": 282,
                "end": 359,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 292,
                    "end": 353,
                    "expression": {
                      "type": "CallExpression",
                      "start": 292,
                      "end": 352,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 292,
                        "end": 303,
                        "object": {
                          "type": "Identifier",
                          "start": 292,
                          "end": 299,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 300,
                          "end": 303,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 304,
                          "end": 351,
                          "left": {
                            "type": "Literal",
                            "start": 304,
                            "end": 328,
                            "value": "Aha!! It's the number ",
                            "raw": "\"Aha!! It's the number \""
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "start": 331,
                            "end": 351,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 331,
                              "end": 348,
                              "object": {
                                "type": "Identifier",
                                "start": 331,
                                "end": 336,
                                "name": "thing",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 337,
                                "end": 348,
                                "name": "toPrecision",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 349,
                                "end": 350,
                                "value": 3,
                                "raw": "3"
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
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
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 363,
      "end": 387,
      "expression": {
        "type": "CallExpression",
        "start": 363,
        "end": 386,
        "callee": {
          "type": "Identifier",
          "start": 363,
          "end": 374,
          "name": "distinguish",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 375,
            "end": 385,
            "callee": {
              "type": "Identifier",
              "start": 379,
              "end": 383,
              "name": "Date",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 388,
      "end": 408,
      "expression": {
        "type": "CallExpression",
        "start": 388,
        "end": 407,
        "callee": {
          "type": "Identifier",
          "start": 388,
          "end": 399,
          "name": "distinguish",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 400,
            "end": 406,
            "value": "beef",
            "raw": "\"beef\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 409,
      "end": 433,
      "expression": {
        "type": "CallExpression",
        "start": 409,
        "end": 432,
        "callee": {
          "type": "Identifier",
          "start": 409,
          "end": 420,
          "name": "distinguish",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 421,
            "end": 431,
            "value": 3.14159265,
            "raw": "3.14159265"
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
