__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 472,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 63,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 30,
                "name": "a",
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
              },
              {
                "type": "Identifier",
                "start": 32,
                "end": 61,
                "name": "callback",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 42,
                    "end": 61,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 50,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 44,
                          "end": 50,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 46,
                            "end": 50,
                            "literal": {
                              "type": "Literal",
                              "start": 46,
                              "end": 50,
                              "value": "hi",
                              "raw": "'hi'"
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 311,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 126,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 83,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 83,
              "end": 126,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 84,
                  "end": 93,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 87,
                      "end": 93
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 95,
                  "end": 124,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 103,
                    "end": 124,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 105,
                      "end": 124,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 106,
                          "end": 113,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 107,
                            "end": 113,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 109,
                              "end": 113,
                              "literal": {
                                "type": "Literal",
                                "start": 109,
                                "end": 113,
                                "value": "hi",
                                "raw": "'hi'"
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 115,
                        "end": 124,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 118,
                          "end": 124
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 309,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 133,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 309,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 134,
                  "end": 143,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 137,
                      "end": 143
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 176,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 155,
                      "end": 176,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 156,
                          "end": 165,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 157,
                            "end": 165,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 159,
                              "end": 165
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 167,
                        "end": 176,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 170,
                          "end": 176
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 309,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 188,
                    "end": 203,
                    "expression": {
                      "type": "CallExpression",
                      "start": 188,
                      "end": 202,
                      "callee": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 196,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 197,
                          "end": 201,
                          "value": "hi",
                          "raw": "'hi'"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 212,
                    "end": 228,
                    "expression": {
                      "type": "CallExpression",
                      "start": 212,
                      "end": 227,
                      "callee": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 220,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 221,
                          "end": 226,
                          "value": "bye",
                          "raw": "'bye'"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 237,
                    "end": 251,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 241,
                        "end": 250,
                        "id": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 243,
                          "name": "hm",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 246,
                          "end": 250,
                          "value": "hm",
                          "raw": "\"hm\""
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 260,
                    "end": 273,
                    "expression": {
                      "type": "CallExpression",
                      "start": 260,
                      "end": 272,
                      "callee": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 268,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 269,
                          "end": 271,
                          "name": "hm",
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
                    "start": 282,
                    "end": 294,
                    "expression": {
                      "type": "CallExpression",
                      "start": 282,
                      "end": 293,
                      "callee": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 290,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 291,
                          "end": 292,
                          "value": 1,
                          "raw": "1"
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 317,
          "end": 321,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 321,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 320,
                "end": 321,
                "typeName": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 321,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 360,
      "expression": {
        "type": "CallExpression",
        "start": 323,
        "end": 359,
        "callee": {
          "type": "MemberExpression",
          "start": 323,
          "end": 327,
          "object": {
            "type": "Identifier",
            "start": 323,
            "end": 324,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "name": "x1",
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
            "start": 328,
            "end": 329,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 331,
            "end": 357,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 332,
                "end": 339,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 333,
                  "end": 339,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 335,
                    "end": 339,
                    "literal": {
                      "type": "Literal",
                      "start": 335,
                      "end": 339,
                      "value": "hi",
                      "raw": "'hi'"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 344,
              "end": 357,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 346,
                  "end": 355,
                  "argument": {
                    "type": "Literal",
                    "start": 353,
                    "end": 354,
                    "value": 1,
                    "raw": "1"
                  }
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
    },
    {
      "type": "ExpressionStatement",
      "start": 361,
      "end": 399,
      "expression": {
        "type": "CallExpression",
        "start": 361,
        "end": 398,
        "callee": {
          "type": "MemberExpression",
          "start": 361,
          "end": 365,
          "object": {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 363,
            "end": 365,
            "name": "x1",
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
            "start": 366,
            "end": 367,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 369,
            "end": 396,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 370,
                "end": 378,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 371,
                  "end": 378,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 373,
                    "end": 378,
                    "literal": {
                      "type": "Literal",
                      "start": 373,
                      "end": 378,
                      "value": "bye",
                      "raw": "'bye'"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 383,
              "end": 396,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 385,
                  "end": 394,
                  "argument": {
                    "type": "Literal",
                    "start": 392,
                    "end": 393,
                    "value": 1,
                    "raw": "1"
                  }
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
    },
    {
      "type": "ExpressionStatement",
      "start": 400,
      "end": 431,
      "expression": {
        "type": "CallExpression",
        "start": 400,
        "end": 430,
        "callee": {
          "type": "MemberExpression",
          "start": 400,
          "end": 404,
          "object": {
            "type": "Identifier",
            "start": 400,
            "end": 401,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 402,
            "end": 404,
            "name": "x1",
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
            "start": 405,
            "end": 406,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 408,
            "end": 428,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 409,
                "end": 410,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 415,
              "end": 428,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 417,
                  "end": 426,
                  "argument": {
                    "type": "Literal",
                    "start": 424,
                    "end": 425,
                    "value": 1,
                    "raw": "1"
                  }
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
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 472,
      "expression": {
        "type": "CallExpression",
        "start": 433,
        "end": 471,
        "callee": {
          "type": "MemberExpression",
          "start": 433,
          "end": 437,
          "object": {
            "type": "Identifier",
            "start": 433,
            "end": 434,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 435,
            "end": 437,
            "name": "x1",
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
            "start": 438,
            "end": 439,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 441,
            "end": 469,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 442,
                "end": 451,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 443,
                  "end": 451,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 445,
                    "end": 451
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 456,
              "end": 469,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 458,
                  "end": 467,
                  "argument": {
                    "type": "Literal",
                    "start": 465,
                    "end": 466,
                    "value": 1,
                    "raw": "1"
                  }
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
