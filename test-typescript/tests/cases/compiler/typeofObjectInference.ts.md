__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 602,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "val",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 13,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 31,
        "name": "decorateA",
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
          "start": 47,
          "end": 84,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 84,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 51,
              "end": 84,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 52,
                  "end": 78,
                  "name": "first",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 78,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 59,
                      "end": 78,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 60,
                          "end": 77,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 65,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 65,
                            "end": 77,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 67,
                              "end": 77,
                              "exprName": {
                                "type": "Identifier",
                                "start": 74,
                                "end": 77,
                                "name": "val",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 84,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 83,
                  "end": 84,
                  "typeName": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
        "start": 86,
        "end": 126,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 92,
            "end": 124,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 99,
              "end": 124,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "CallExpression",
                "start": 108,
                "end": 124,
                "callee": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 110,
                  "name": "fn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "start": 111,
                    "end": 123,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 112,
                        "end": 122,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 117,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 122,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 101,
                "end": 104,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 103,
                  "end": 104,
                  "typeName": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 45,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 42,
              "end": 45
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 160,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 135,
            "end": 160,
            "callee": {
              "type": "Identifier",
              "start": 135,
              "end": 144,
              "name": "decorateA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 145,
                "end": 159,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 146,
                    "end": 153,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 147,
                        "end": 152,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 152,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 152,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 158,
                  "end": 159,
                  "value": 5,
                  "raw": "5"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 162,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 180,
        "name": "decorateB",
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
          "start": 196,
          "end": 224,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 224,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 200,
              "end": 224,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 201,
                  "end": 218,
                  "name": "first",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 206,
                    "end": 218,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 208,
                      "end": 218,
                      "exprName": {
                        "type": "Identifier",
                        "start": 215,
                        "end": 218,
                        "name": "val",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 220,
                "end": 224,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 223,
                  "end": 224,
                  "typeName": {
                    "type": "Identifier",
                    "start": 223,
                    "end": 224,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
        "start": 226,
        "end": 257,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 232,
            "end": 255,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 239,
              "end": 255,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "CallExpression",
                "start": 248,
                "end": 255,
                "callee": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 250,
                  "name": "fn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 251,
                    "end": 254,
                    "name": "val",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 241,
                "end": 244,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 243,
                  "end": 244,
                  "typeName": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 180,
        "end": 195,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 181,
            "end": 194,
            "name": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 191,
              "end": 194
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 289,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 266,
            "end": 289,
            "callee": {
              "type": "Identifier",
              "start": 266,
              "end": 275,
              "name": "decorateB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 276,
                "end": 288,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 277,
                    "end": 282,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 287,
                  "end": 288,
                  "value": 5,
                  "raw": "5"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 291,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 309,
        "name": "decorateC",
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
          "start": 325,
          "end": 358,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 327,
            "end": 358,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 329,
              "end": 358,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 330,
                  "end": 352,
                  "name": "first",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 335,
                    "end": 352,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 337,
                      "end": 352,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 338,
                          "end": 351,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 338,
                            "end": 343,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 343,
                            "end": 351,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 345,
                              "end": 351
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 354,
                "end": 358,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 357,
                  "end": 358,
                  "typeName": {
                    "type": "Identifier",
                    "start": 357,
                    "end": 358,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
        "start": 360,
        "end": 400,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 366,
            "end": 398,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 373,
              "end": 398,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "CallExpression",
                "start": 382,
                "end": 398,
                "callee": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 384,
                  "name": "fn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "start": 385,
                    "end": 397,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 386,
                        "end": 396,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 386,
                          "end": 391,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 393,
                          "end": 396,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 375,
                "end": 378,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 377,
                  "end": 378,
                  "typeName": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 378,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 309,
        "end": 324,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 310,
            "end": 323,
            "name": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 320,
              "end": 323
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 434,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 409,
            "end": 434,
            "callee": {
              "type": "Identifier",
              "start": 409,
              "end": 418,
              "name": "decorateC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 419,
                "end": 433,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 420,
                    "end": 427,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 421,
                        "end": 426,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 421,
                          "end": 426,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 421,
                          "end": 426,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 432,
                  "end": 433,
                  "value": 5,
                  "raw": "5"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 436,
      "end": 468,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 446,
        "name": "First",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 449,
        "end": 468,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 450,
            "end": 467,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 450,
              "end": 455,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 455,
              "end": 467,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 457,
                "end": 467,
                "exprName": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 467,
                  "name": "val",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 469,
      "end": 568,
      "id": {
        "type": "Identifier",
        "start": 478,
        "end": 487,
        "name": "decorateD",
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
          "start": 503,
          "end": 526,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 505,
            "end": 526,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 507,
              "end": 526,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 508,
                  "end": 520,
                  "name": "first",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 513,
                    "end": 520,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 515,
                      "end": 520,
                      "typeName": {
                        "type": "Identifier",
                        "start": 515,
                        "end": 520,
                        "name": "First",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 522,
                "end": 526,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 525,
                  "end": 526,
                  "typeName": {
                    "type": "Identifier",
                    "start": 525,
                    "end": 526,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
        "start": 528,
        "end": 568,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 534,
            "end": 566,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 541,
              "end": 566,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "CallExpression",
                "start": 550,
                "end": 566,
                "callee": {
                  "type": "Identifier",
                  "start": 550,
                  "end": 552,
                  "name": "fn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ObjectExpression",
                    "start": 553,
                    "end": 565,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 554,
                        "end": 564,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 554,
                          "end": 559,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 561,
                          "end": 564,
                          "name": "val",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 543,
                "end": 546,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 545,
                  "end": 546,
                  "typeName": {
                    "type": "Identifier",
                    "start": 545,
                    "end": 546,
                    "name": "O",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 487,
        "end": 502,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 488,
            "end": 501,
            "name": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 498,
              "end": 501
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 569,
      "end": 602,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 602,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 574,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 577,
            "end": 602,
            "callee": {
              "type": "Identifier",
              "start": 577,
              "end": 586,
              "name": "decorateD",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 587,
                "end": 601,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 588,
                    "end": 595,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 589,
                        "end": 594,
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 589,
                          "end": 594,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 589,
                          "end": 594,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 600,
                  "end": 601,
                  "value": 5,
                  "raw": "5"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
