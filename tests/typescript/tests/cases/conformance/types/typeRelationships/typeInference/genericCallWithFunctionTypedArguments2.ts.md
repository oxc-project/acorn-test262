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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
          "start": 182,
          "end": 199,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 220,
                  "end": 224,
                  "value": null,
                  "raw": "null"
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 230,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 241,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 315,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 315,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 317,
      "end": 336,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 335,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 335,
            "decorators": [],
            "name": "i2",
            "optional": false,
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
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 337,
      "end": 369,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 341,
          "end": 369,
          "id": {
            "type": "Identifier",
            "start": 341,
            "end": 369,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 371,
      "end": 386,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 375,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 375,
            "end": 376,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 379,
            "end": 385,
            "callee": {
              "type": "Identifier",
              "start": 379,
              "end": 382,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 383,
                "end": 384,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 418,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 417,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 400,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 403,
            "end": 417,
            "callee": {
              "type": "Identifier",
              "start": 403,
              "end": 406,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 447,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 446,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 436,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 439,
            "end": 446,
            "callee": {
              "type": "Identifier",
              "start": 439,
              "end": 442,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 443,
                "end": 445,
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 458,
      "end": 475,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 465,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 468,
            "end": 474,
            "callee": {
              "type": "Identifier",
              "start": 468,
              "end": 471,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 472,
                "end": 473,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
          "start": 504,
          "end": 508,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 510,
          "end": 528,
          "decorators": [],
          "name": "cb",
          "optional": false,
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 550,
                  "end": 551,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 557,
      "end": 578,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 577,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 563,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 566,
            "end": 577,
            "callee": {
              "type": "Identifier",
              "start": 566,
              "end": 570,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 588,
      "end": 609,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 608,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 595,
            "decorators": [],
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 598,
            "end": 608,
            "callee": {
              "type": "Identifier",
              "start": 598,
              "end": 602,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 617,
      "end": 637,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 636,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 623,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 626,
            "end": 636,
            "callee": {
              "type": "Identifier",
              "start": 626,
              "end": 630,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 645,
      "end": 683,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 649,
          "end": 682,
          "id": {
            "type": "Identifier",
            "start": 649,
            "end": 651,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 654,
            "end": 682,
            "callee": {
              "type": "Identifier",
              "start": 654,
              "end": 658,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
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
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
          "start": 715,
          "end": 719,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 721,
          "end": 739,
          "decorators": [],
          "name": "cb",
          "optional": false,
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
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
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 741,
          "end": 745,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 767,
                  "end": 768,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 774,
      "end": 801,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 778,
          "end": 800,
          "id": {
            "type": "Identifier",
            "start": 778,
            "end": 780,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 783,
            "end": 800,
            "callee": {
              "type": "Identifier",
              "start": 783,
              "end": 787,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 797,
                "end": 799,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 809,
      "end": 837,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 813,
          "end": 836,
          "id": {
            "type": "Identifier",
            "start": 813,
            "end": 816,
            "decorators": [],
            "name": "r7b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 819,
            "end": 836,
            "callee": {
              "type": "Identifier",
              "start": 819,
              "end": 823,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 833,
                "end": 835,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 845,
      "end": 869,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 849,
          "end": 868,
          "id": {
            "type": "Identifier",
            "start": 849,
            "end": 851,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 854,
            "end": 868,
            "callee": {
              "type": "Identifier",
              "start": 854,
              "end": 858,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 866,
                "end": 867,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 879,
      "end": 921,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 883,
          "end": 920,
          "id": {
            "type": "Identifier",
            "start": 883,
            "end": 885,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 888,
            "end": 920,
            "callee": {
              "type": "Identifier",
              "start": 888,
              "end": 892,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
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
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 917,
                "end": 919,
                "value": "",
                "raw": "''"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
