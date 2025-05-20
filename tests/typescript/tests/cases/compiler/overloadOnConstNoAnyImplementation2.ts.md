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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 63,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 30,
                "decorators": [],
                "name": "a",
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
              },
              {
                "type": "Identifier",
                "start": 32,
                "end": 61,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 42,
                    "end": 61,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 50,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "raw": "'hi'",
                              "value": "hi"
                            }
                          }
                        }
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
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 311,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 311,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 126,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 83,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 83,
              "end": 126,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 84,
                  "end": 93,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 87,
                      "end": 93
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 95,
                  "end": 124,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 103,
                    "end": 124,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 105,
                      "end": 124,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 106,
                          "end": 113,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
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
                                "raw": "'hi'",
                                "value": "hi"
                              }
                            }
                          }
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
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 309,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 133,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 309,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 309,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 188,
                    "end": 203,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 188,
                      "end": 202,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 197,
                          "end": 201,
                          "raw": "'hi'",
                          "value": "hi"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 196,
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 212,
                    "end": 228,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 212,
                      "end": 227,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 221,
                          "end": 226,
                          "raw": "'bye'",
                          "value": "bye"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 220,
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 241,
                          "end": 243,
                          "decorators": [],
                          "name": "hm",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 246,
                          "end": 250,
                          "raw": "\"hm\"",
                          "value": "hm"
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 260,
                    "end": 273,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 260,
                      "end": 272,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 269,
                          "end": 271,
                          "decorators": [],
                          "name": "hm",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 268,
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 282,
                    "end": 294,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 282,
                      "end": 293,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 291,
                          "end": 292,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 290,
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 134,
                  "end": 143,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 135,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 137,
                      "end": 143
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 176,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 155,
                      "end": 176,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 156,
                          "end": 165,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 157,
                            "end": 165,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 159,
                              "end": 165
                            }
                          }
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
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 321,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 320,
                "end": 321,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 321,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 360,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 323,
        "end": 359,
        "arguments": [
          {
            "type": "Literal",
            "start": 328,
            "end": 329,
            "raw": "1",
            "value": 1
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 331,
            "end": 357,
            "async": false,
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
                    "raw": "1",
                    "value": 1
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
                "start": 332,
                "end": 339,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 323,
          "end": 327,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 323,
            "end": 324,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 361,
      "end": 399,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 361,
        "end": 398,
        "arguments": [
          {
            "type": "Literal",
            "start": 366,
            "end": 367,
            "raw": "1",
            "value": 1
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 369,
            "end": 396,
            "async": false,
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
                    "raw": "1",
                    "value": 1
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
                "start": 370,
                "end": 378,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "raw": "'bye'",
                      "value": "bye"
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 361,
          "end": 365,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 363,
            "end": 365,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 400,
      "end": 431,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 400,
        "end": 430,
        "arguments": [
          {
            "type": "Literal",
            "start": 405,
            "end": 406,
            "raw": "1",
            "value": 1
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 408,
            "end": 428,
            "async": false,
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
                    "raw": "1",
                    "value": 1
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
                "start": 409,
                "end": 410,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 400,
          "end": 404,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 400,
            "end": 401,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 402,
            "end": 404,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 472,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 433,
        "end": 471,
        "arguments": [
          {
            "type": "Literal",
            "start": 438,
            "end": 439,
            "raw": "1",
            "value": 1
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 441,
            "end": 469,
            "async": false,
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
                    "raw": "1",
                    "value": 1
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
                "start": 442,
                "end": 451,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 443,
                  "end": 451,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 445,
                    "end": 451
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 433,
          "end": 437,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 433,
            "end": 434,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 435,
            "end": 437,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          }
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
