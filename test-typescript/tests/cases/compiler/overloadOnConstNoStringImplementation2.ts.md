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
      "end": 312,
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
        "start": 88,
        "end": 312,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 139,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 96,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 96,
              "end": 139,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 97,
                  "end": 106,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 100,
                      "end": 106
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 108,
                  "end": 137,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 137,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 118,
                      "end": 137,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 119,
                          "end": 126,
                          "name": "x",
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
                        "start": 128,
                        "end": 137,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 131,
                          "end": 137
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
            "start": 144,
            "end": 310,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 146,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 310,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 147,
                  "end": 156,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 156,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 150,
                      "end": 156
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 186,
                  "name": "callback",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 168,
                      "end": 186,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 169,
                          "end": 175,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 170,
                            "end": 175,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 172,
                              "end": 175
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 310,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 198,
                    "end": 213,
                    "expression": {
                      "type": "CallExpression",
                      "start": 198,
                      "end": 212,
                      "callee": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 206,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 207,
                          "end": 211,
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
                    "start": 222,
                    "end": 238,
                    "expression": {
                      "type": "CallExpression",
                      "start": 222,
                      "end": 237,
                      "callee": {
                        "type": "Identifier",
                        "start": 222,
                        "end": 230,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 231,
                          "end": 236,
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
                    "start": 247,
                    "end": 261,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 251,
                        "end": 260,
                        "id": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 253,
                          "name": "hm",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 256,
                          "end": 260,
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
                    "start": 270,
                    "end": 283,
                    "expression": {
                      "type": "CallExpression",
                      "start": 270,
                      "end": 282,
                      "callee": {
                        "type": "Identifier",
                        "start": 270,
                        "end": 278,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 279,
                          "end": 281,
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
                    "start": 292,
                    "end": 304,
                    "expression": {
                      "type": "CallExpression",
                      "start": 292,
                      "end": 303,
                      "callee": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 300,
                        "name": "callback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 301,
                          "end": 302,
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 86,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 322,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 322,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 321,
                "end": 322,
                "typeName": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 322,
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
      "start": 324,
      "end": 361,
      "expression": {
        "type": "CallExpression",
        "start": 324,
        "end": 360,
        "callee": {
          "type": "MemberExpression",
          "start": 324,
          "end": 328,
          "object": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 326,
            "end": 328,
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
            "start": 329,
            "end": 330,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 332,
            "end": 358,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 333,
                "end": 340,
                "name": "x",
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
      "start": 362,
      "end": 400,
      "expression": {
        "type": "CallExpression",
        "start": 362,
        "end": 399,
        "callee": {
          "type": "MemberExpression",
          "start": 362,
          "end": 366,
          "object": {
            "type": "Identifier",
            "start": 362,
            "end": 363,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 366,
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
            "start": 367,
            "end": 368,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 370,
            "end": 397,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 371,
                "end": 379,
                "name": "x",
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
      "start": 402,
      "end": 441,
      "expression": {
        "type": "CallExpression",
        "start": 402,
        "end": 440,
        "callee": {
          "type": "MemberExpression",
          "start": 402,
          "end": 406,
          "object": {
            "type": "Identifier",
            "start": 402,
            "end": 403,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 404,
            "end": 406,
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
            "start": 407,
            "end": 408,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 410,
            "end": 438,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 411,
                "end": 420,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 412,
                  "end": 420,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 414,
                    "end": 420
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
      "start": 442,
      "end": 481,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 480,
        "callee": {
          "type": "MemberExpression",
          "start": 442,
          "end": 446,
          "object": {
            "type": "Identifier",
            "start": 442,
            "end": 443,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 444,
            "end": 446,
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
            "start": 447,
            "end": 448,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 450,
            "end": 478,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 451,
                "end": 460,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 452,
                  "end": 460,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 454,
                    "end": 460
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
