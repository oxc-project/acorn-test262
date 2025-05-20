__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 481,
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
      "end": 312,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 312,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 139,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 96,
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
              "start": 96,
              "end": 139,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 97,
                  "end": 106,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 100,
                      "end": 106
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 108,
                  "end": 137,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 137,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 118,
                      "end": 137,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 119,
                          "end": 126,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 120,
                            "end": 126,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 122,
                              "end": 126,
                              "literal": {
                                "type": "Literal",
                                "start": 122,
                                "end": 126,
                                "raw": "'hi'",
                                "value": "hi"
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 128,
                        "end": 137,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 131,
                          "end": 137
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
            "start": 144,
            "end": 310,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 146,
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
              "start": 146,
              "end": 310,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 310,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 198,
                    "end": 213,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 198,
                      "end": 212,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 207,
                          "end": 211,
                          "raw": "'hi'",
                          "value": "hi"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 206,
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
                    "start": 222,
                    "end": 238,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 222,
                      "end": 237,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 231,
                          "end": 236,
                          "raw": "'bye'",
                          "value": "bye"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 230,
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
                    "start": 247,
                    "end": 261,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 251,
                        "end": 260,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 253,
                          "decorators": [],
                          "name": "hm",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 256,
                          "end": 260,
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
                    "start": 270,
                    "end": 283,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 270,
                      "end": 282,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 279,
                          "end": 281,
                          "decorators": [],
                          "name": "hm",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 278,
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
                    "start": 292,
                    "end": 304,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 292,
                      "end": 303,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 301,
                          "end": 302,
                          "raw": "1",
                          "value": 1
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 300,
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
                  "start": 147,
                  "end": 156,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 156,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 150,
                      "end": 156
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 186,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 168,
                      "end": 186,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 169,
                          "end": 175,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 170,
                            "end": 175,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 172,
                              "end": 175
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 177,
                        "end": 186,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 180,
                          "end": 186
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 86,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 322,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 322,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 322,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 321,
                "end": 322,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 322,
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
      "start": 324,
      "end": 361,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 324,
        "end": 360,
        "arguments": [
          {
            "type": "Literal",
            "start": 329,
            "end": 330,
            "raw": "1",
            "value": 1
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 332,
            "end": 358,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 345,
              "end": 358,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 347,
                  "end": 356,
                  "argument": {
                    "type": "Literal",
                    "start": 354,
                    "end": 355,
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
                "start": 333,
                "end": 340,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 334,
                  "end": 340,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 336,
                    "end": 340,
                    "literal": {
                      "type": "Literal",
                      "start": 336,
                      "end": 340,
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
          "start": 324,
          "end": 328,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 326,
            "end": 328,
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
      "start": 362,
      "end": 400,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 362,
        "end": 399,
        "arguments": [
          {
            "type": "Literal",
            "start": 367,
            "end": 368,
            "raw": "1",
            "value": 1
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 370,
            "end": 397,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 384,
              "end": 397,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 386,
                  "end": 395,
                  "argument": {
                    "type": "Literal",
                    "start": 393,
                    "end": 394,
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
                "start": 371,
                "end": 379,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 372,
                  "end": 379,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 374,
                    "end": 379,
                    "literal": {
                      "type": "Literal",
                      "start": 374,
                      "end": 379,
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
          "start": 362,
          "end": 366,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 362,
            "end": 363,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 366,
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
      "start": 402,
      "end": 441,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 402,
        "end": 440,
        "arguments": [
          {
            "type": "Literal",
            "start": 407,
            "end": 408,
            "raw": "1",
            "value": 1
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 410,
            "end": 438,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 425,
              "end": 438,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 427,
                  "end": 436,
                  "argument": {
                    "type": "Literal",
                    "start": 434,
                    "end": 435,
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
                "start": 411,
                "end": 420,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 412,
                  "end": 420,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 414,
                    "end": 420
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
          "start": 402,
          "end": 406,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 402,
            "end": 403,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 404,
            "end": 406,
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
      "start": 442,
      "end": 481,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 480,
        "arguments": [
          {
            "type": "Literal",
            "start": 447,
            "end": 448,
            "raw": "1",
            "value": 1
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 450,
            "end": 478,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 465,
              "end": 478,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 467,
                  "end": 476,
                  "argument": {
                    "type": "Literal",
                    "start": 474,
                    "end": 475,
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
                "start": 451,
                "end": 460,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 452,
                  "end": 460,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 454,
                    "end": 460
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
          "start": 442,
          "end": 446,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 442,
            "end": 443,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 444,
            "end": 446,
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
