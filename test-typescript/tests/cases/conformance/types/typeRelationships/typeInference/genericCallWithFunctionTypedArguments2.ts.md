__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 166,
  "end": 931,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 166,
      "end": 228,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 178,
        "name": "foo",
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
          "start": 182,
          "end": 199,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 199,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 185,
              "end": 199,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 189,
                  "end": 193,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 193,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 192,
                      "end": 193,
                      "typeName": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 193,
                        "name": "T",
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
                "start": 195,
                "end": 199,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 198,
                  "end": 199,
                  "typeName": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
                    "name": "T",
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
        "start": 201,
        "end": 228,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 207,
            "end": 226,
            "argument": {
              "type": "NewExpression",
              "start": 214,
              "end": 225,
              "callee": {
                "type": "Identifier",
                "start": 218,
                "end": 219,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 220,
                  "end": 224,
                  "value": null,
                  "raw": "null"
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 178,
        "end": 181,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 179,
            "end": 180,
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
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
      "type": "TSInterfaceDeclaration",
      "start": 230,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 241,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 242,
        "end": 267,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 248,
            "end": 265,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 252,
              "end": 255,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 253,
                  "end": 254,
                  "name": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 256,
                "end": 260,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 257,
                  "end": 260,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 259,
                    "end": 260,
                    "typeName": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "name": "T",
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
              "start": 261,
              "end": 264,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 263,
                "end": 264,
                "typeName": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 264,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 268,
      "end": 306,
      "id": {
        "type": "Identifier",
        "start": 278,
        "end": 280,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 280,
        "end": 283,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 281,
            "end": 282,
            "name": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 284,
        "end": 306,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 290,
            "end": 304,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 295,
                "end": 299,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 296,
                  "end": 299,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 298,
                    "end": 299,
                    "typeName": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 299,
                      "name": "T",
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
              "start": 300,
              "end": 303,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 302,
                "end": 303,
                "typeName": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 315,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 315,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 314,
                "end": 315,
                "typeName": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 315,
                  "name": "I",
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
      "type": "VariableDeclaration",
      "start": 317,
      "end": 336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 335,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 335,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 335,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 325,
                "end": 335,
                "typeName": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 327,
                  "name": "I2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 327,
                  "end": 335,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 328,
                      "end": 334
                    }
                  ]
                }
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
      "type": "VariableDeclaration",
      "start": 337,
      "end": 369,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 341,
          "end": 369,
          "id": {
            "type": "Identifier",
            "start": 341,
            "end": 369,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 369,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 344,
                "end": 369,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 350,
                    "end": 367,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 354,
                      "end": 357,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 355,
                          "end": 356,
                          "name": {
                            "type": "Identifier",
                            "start": 355,
                            "end": 356,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 358,
                        "end": 362,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 359,
                          "end": 362,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 361,
                            "end": 362,
                            "typeName": {
                              "type": "Identifier",
                              "start": 361,
                              "end": 362,
                              "name": "T",
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
                      "start": 363,
                      "end": 366,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 365,
                        "end": 366,
                        "typeName": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 366,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 371,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 375,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 375,
            "end": 376,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 379,
            "end": 385,
            "callee": {
              "type": "Identifier",
              "start": 379,
              "end": 382,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 383,
                "end": 384,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 418,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 417,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 400,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 403,
            "end": 417,
            "callee": {
              "type": "Identifier",
              "start": 403,
              "end": 406,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 406,
              "end": 414,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 407,
                  "end": 413
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 447,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 446,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 436,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 439,
            "end": 446,
            "callee": {
              "type": "Identifier",
              "start": 439,
              "end": 442,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 443,
                "end": 445,
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 458,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 465,
            "name": "r3b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 468,
            "end": 474,
            "callee": {
              "type": "Identifier",
              "start": 468,
              "end": 471,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 472,
                "end": 473,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 484,
      "end": 555,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 497,
        "name": "foo2",
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
          "start": 504,
          "end": 508,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 505,
            "end": 508,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 507,
              "end": 508,
              "typeName": {
                "type": "Identifier",
                "start": 507,
                "end": 508,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 510,
          "end": 528,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 512,
            "end": 528,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 514,
              "end": 528,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 518,
                  "end": 522,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 519,
                    "end": 522,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 521,
                      "end": 522,
                      "typeName": {
                        "type": "Identifier",
                        "start": 521,
                        "end": 522,
                        "name": "T",
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
                "start": 524,
                "end": 528,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 527,
                  "end": 528,
                  "typeName": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 528,
                    "name": "U",
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
        "start": 530,
        "end": 555,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 536,
            "end": 553,
            "argument": {
              "type": "NewExpression",
              "start": 543,
              "end": 552,
              "callee": {
                "type": "Identifier",
                "start": 547,
                "end": 549,
                "name": "cb",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 550,
                  "end": 551,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 497,
        "end": 503,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 498,
            "end": 499,
            "name": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 501,
            "end": 502,
            "name": {
              "type": "Identifier",
              "start": 501,
              "end": 502,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
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
      "start": 557,
      "end": 578,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 577,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 563,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 566,
            "end": 577,
            "callee": {
              "type": "Identifier",
              "start": 566,
              "end": 570,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 571,
                "end": 572,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 574,
                "end": 576,
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 588,
      "end": 609,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 608,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 595,
            "name": "r4b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 598,
            "end": 608,
            "callee": {
              "type": "Identifier",
              "start": 598,
              "end": 602,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 603,
                "end": 604,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 606,
                "end": 607,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 617,
      "end": 637,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 636,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 623,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 626,
            "end": 636,
            "callee": {
              "type": "Identifier",
              "start": 626,
              "end": 630,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 631,
                "end": 632,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 634,
                "end": 635,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 645,
      "end": 683,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 649,
          "end": 682,
          "id": {
            "type": "Identifier",
            "start": 649,
            "end": 651,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 654,
            "end": 682,
            "callee": {
              "type": "Identifier",
              "start": 654,
              "end": 658,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 675,
                "end": 677,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Identifier",
                "start": 679,
                "end": 681,
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 658,
              "end": 674,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 659,
                  "end": 665
                },
                {
                  "type": "TSStringKeyword",
                  "start": 667,
                  "end": 673
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 695,
      "end": 772,
      "id": {
        "type": "Identifier",
        "start": 704,
        "end": 708,
        "name": "foo3",
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
          "start": 715,
          "end": 719,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 716,
            "end": 719,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 718,
              "end": 719,
              "typeName": {
                "type": "Identifier",
                "start": 718,
                "end": 719,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 721,
          "end": 739,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 723,
            "end": 739,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 725,
              "end": 739,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 729,
                  "end": 733,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 730,
                    "end": 733,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 732,
                      "end": 733,
                      "typeName": {
                        "type": "Identifier",
                        "start": 732,
                        "end": 733,
                        "name": "T",
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
                "start": 735,
                "end": 739,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 738,
                  "end": 739,
                  "typeName": {
                    "type": "Identifier",
                    "start": 738,
                    "end": 739,
                    "name": "U",
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
        },
        {
          "type": "Identifier",
          "start": 741,
          "end": 745,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 742,
            "end": 745,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 744,
              "end": 745,
              "typeName": {
                "type": "Identifier",
                "start": 744,
                "end": 745,
                "name": "U",
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
      "body": {
        "type": "BlockStatement",
        "start": 747,
        "end": 772,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 753,
            "end": 770,
            "argument": {
              "type": "NewExpression",
              "start": 760,
              "end": 769,
              "callee": {
                "type": "Identifier",
                "start": 764,
                "end": 766,
                "name": "cb",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 767,
                  "end": 768,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 708,
        "end": 714,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 709,
            "end": 710,
            "name": {
              "type": "Identifier",
              "start": 709,
              "end": 710,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 712,
            "end": 713,
            "name": {
              "type": "Identifier",
              "start": 712,
              "end": 713,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
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
      "start": 774,
      "end": 801,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 778,
          "end": 800,
          "id": {
            "type": "Identifier",
            "start": 778,
            "end": 780,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 783,
            "end": 800,
            "callee": {
              "type": "Identifier",
              "start": 783,
              "end": 787,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 788,
                "end": 792,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 794,
                "end": 795,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 797,
                "end": 799,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 809,
      "end": 837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 813,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 813,
            "end": 816,
            "name": "r7b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 819,
            "end": 836,
            "callee": {
              "type": "Identifier",
              "start": 819,
              "end": 823,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 824,
                "end": 828,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 830,
                "end": 831,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 833,
                "end": 835,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 845,
      "end": 869,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 849,
          "end": 868,
          "id": {
            "type": "Identifier",
            "start": 849,
            "end": 851,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 854,
            "end": 868,
            "callee": {
              "type": "Identifier",
              "start": 854,
              "end": 858,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 859,
                "end": 860,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 862,
                "end": 864,
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 866,
                "end": 867,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 879,
      "end": 921,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 883,
          "end": 920,
          "id": {
            "type": "Identifier",
            "start": 883,
            "end": 885,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 888,
            "end": 920,
            "callee": {
              "type": "Identifier",
              "start": 888,
              "end": 892,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 909,
                "end": 911,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Identifier",
                "start": 913,
                "end": 915,
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 917,
                "end": 919,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 892,
              "end": 908,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 893,
                  "end": 899
                },
                {
                  "type": "TSStringKeyword",
                  "start": 901,
                  "end": 907
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
