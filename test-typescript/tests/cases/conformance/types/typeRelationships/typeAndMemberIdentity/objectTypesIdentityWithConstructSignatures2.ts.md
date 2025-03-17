__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 1615,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 99,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 97,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 69,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 97,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 79,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 71,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 73,
                      "end": 79
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 97,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 83,
                    "end": 95,
                    "argument": {
                      "type": "Literal",
                      "start": 90,
                      "end": 94,
                      "value": null,
                      "raw": "null"
                    }
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
      "type": "ClassDeclaration",
      "start": 101,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 154,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 118,
            "end": 152,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 129,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 152,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 130,
                  "end": 134,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 133,
                      "end": 134,
                      "typeName": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 134,
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
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 152,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 138,
                    "end": 150,
                    "argument": {
                      "type": "Literal",
                      "start": 145,
                      "end": 149,
                      "value": null,
                      "raw": "null"
                    }
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 108,
        "end": 111,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 109,
            "end": 110,
            "name": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 156,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 167,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 168,
        "end": 200,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 174,
            "end": 198,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 178,
                "end": 188,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 179,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 181,
                    "end": 188
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 197,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 191,
                "end": 197
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 202,
      "end": 239,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 214,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 214,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 216,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
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
        "start": 218,
        "end": 239,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 224,
            "end": 237,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 228,
                "end": 232,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 229,
                  "end": 232,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 231,
                    "end": 232,
                    "typeName": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 232,
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
              "start": 233,
              "end": 236,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 235,
                "end": 236,
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
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
      "start": 241,
      "end": 272,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 272,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 272,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 248,
                "end": 272,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 250,
                    "end": 270,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 254,
                        "end": 261,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 255,
                          "end": 261,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 257,
                            "end": 261,
                            "typeName": {
                              "type": "Identifier",
                              "start": 257,
                              "end": 261,
                              "name": "Date",
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
                      "start": 262,
                      "end": 270,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 264,
                        "end": 270
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
      "start": 273,
      "end": 315,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 314,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 281,
            "end": 314,
            "properties": [
              {
                "type": "Property",
                "start": 283,
                "end": 312,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 286,
                  "name": "new",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 286,
                  "end": 312,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 287,
                      "end": 296,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 288,
                        "end": 296,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 290,
                          "end": 296,
                          "typeName": {
                            "type": "Identifier",
                            "start": 290,
                            "end": 296,
                            "name": "RegExp",
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
                    "start": 298,
                    "end": 312,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 300,
                        "end": 310,
                        "argument": {
                          "type": "Literal",
                          "start": 307,
                          "end": 309,
                          "value": "",
                          "raw": "''"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 367,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 381,
        "name": "foo1b",
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
          "start": 382,
          "end": 386,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 383,
            "end": 386,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 385,
              "end": 386,
              "typeName": {
                "type": "Identifier",
                "start": 385,
                "end": 386,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 389,
      "end": 410,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 403,
        "name": "foo1b",
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
          "start": 404,
          "end": 408,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 405,
            "end": 408,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 407,
              "end": 408,
              "typeName": {
                "type": "Identifier",
                "start": 407,
                "end": 408,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 420,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 434,
        "name": "foo1b",
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
          "start": 435,
          "end": 441,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 436,
            "end": 441,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 438,
              "end": 441
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 443,
        "end": 446,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 448,
      "end": 477,
      "id": {
        "type": "Identifier",
        "start": 457,
        "end": 462,
        "name": "foo1c",
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
          "start": 463,
          "end": 475,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 464,
            "end": 475,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 466,
              "end": 475,
              "typeName": {
                "type": "Identifier",
                "start": 466,
                "end": 467,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 467,
                "end": 475,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 468,
                    "end": 474
                  }
                ]
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
    {
      "type": "TSDeclareFunction",
      "start": 478,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 487,
        "end": 492,
        "name": "foo1c",
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
          "start": 493,
          "end": 505,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 494,
            "end": 505,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 496,
              "end": 505,
              "typeName": {
                "type": "Identifier",
                "start": 496,
                "end": 497,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 497,
                "end": 505,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 498,
                    "end": 504
                  }
                ]
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
    {
      "type": "FunctionDeclaration",
      "start": 517,
      "end": 543,
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 531,
        "name": "foo1c",
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
          "start": 532,
          "end": 538,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 533,
            "end": 538,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 535,
              "end": 538
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 540,
        "end": 543,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 545,
      "end": 565,
      "id": {
        "type": "Identifier",
        "start": 554,
        "end": 558,
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
          "start": 559,
          "end": 563,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 560,
            "end": 563,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 562,
              "end": 563,
              "typeName": {
                "type": "Identifier",
                "start": 562,
                "end": 563,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 566,
      "end": 586,
      "id": {
        "type": "Identifier",
        "start": 575,
        "end": 579,
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
          "start": 580,
          "end": 584,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 581,
            "end": 584,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 583,
              "end": 584,
              "typeName": {
                "type": "Identifier",
                "start": 583,
                "end": 584,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 596,
      "end": 621,
      "id": {
        "type": "Identifier",
        "start": 605,
        "end": 609,
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
          "start": 610,
          "end": 616,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 611,
            "end": 616,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 613,
              "end": 616
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 618,
        "end": 621,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 623,
      "end": 650,
      "id": {
        "type": "Identifier",
        "start": 632,
        "end": 636,
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
          "start": 637,
          "end": 648,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 638,
            "end": 648,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 640,
              "end": 648,
              "exprName": {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 651,
      "end": 678,
      "id": {
        "type": "Identifier",
        "start": 660,
        "end": 664,
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
          "start": 665,
          "end": 676,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 666,
            "end": 676,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 668,
              "end": 676,
              "exprName": {
                "type": "Identifier",
                "start": 675,
                "end": 676,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 688,
      "end": 713,
      "id": {
        "type": "Identifier",
        "start": 697,
        "end": 701,
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
          "start": 702,
          "end": 708,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 703,
            "end": 708,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 705,
              "end": 708
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 710,
        "end": 713,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 715,
      "end": 742,
      "id": {
        "type": "Identifier",
        "start": 724,
        "end": 728,
        "name": "foo4",
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
          "start": 729,
          "end": 740,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 730,
            "end": 740,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 732,
              "end": 740,
              "exprName": {
                "type": "Identifier",
                "start": 739,
                "end": 740,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 743,
      "end": 770,
      "id": {
        "type": "Identifier",
        "start": 752,
        "end": 756,
        "name": "foo4",
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
          "start": 757,
          "end": 768,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 758,
            "end": 768,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 760,
              "end": 768,
              "exprName": {
                "type": "Identifier",
                "start": 767,
                "end": 768,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 780,
      "end": 805,
      "id": {
        "type": "Identifier",
        "start": 789,
        "end": 793,
        "name": "foo4",
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
          "start": 794,
          "end": 800,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 795,
            "end": 800,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 797,
              "end": 800
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 802,
        "end": 805,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 807,
      "end": 827,
      "id": {
        "type": "Identifier",
        "start": 816,
        "end": 820,
        "name": "foo8",
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
          "start": 821,
          "end": 825,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 822,
            "end": 825,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 824,
              "end": 825,
              "typeName": {
                "type": "Identifier",
                "start": 824,
                "end": 825,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 828,
      "end": 848,
      "id": {
        "type": "Identifier",
        "start": 837,
        "end": 841,
        "name": "foo8",
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
          "start": 842,
          "end": 846,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 843,
            "end": 846,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 845,
              "end": 846,
              "typeName": {
                "type": "Identifier",
                "start": 845,
                "end": 846,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 855,
      "end": 880,
      "id": {
        "type": "Identifier",
        "start": 864,
        "end": 868,
        "name": "foo8",
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
          "start": 869,
          "end": 875,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 870,
            "end": 875,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 872,
              "end": 875
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 877,
        "end": 880,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 882,
      "end": 902,
      "id": {
        "type": "Identifier",
        "start": 891,
        "end": 895,
        "name": "foo9",
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
          "start": 896,
          "end": 900,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 897,
            "end": 900,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 899,
              "end": 900,
              "typeName": {
                "type": "Identifier",
                "start": 899,
                "end": 900,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 903,
      "end": 931,
      "id": {
        "type": "Identifier",
        "start": 912,
        "end": 916,
        "name": "foo9",
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
          "start": 917,
          "end": 929,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 918,
            "end": 929,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 920,
              "end": 929,
              "typeName": {
                "type": "Identifier",
                "start": 920,
                "end": 921,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 921,
                "end": 929,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 922,
                    "end": 928
                  }
                ]
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
    {
      "type": "FunctionDeclaration",
      "start": 971,
      "end": 996,
      "id": {
        "type": "Identifier",
        "start": 980,
        "end": 984,
        "name": "foo9",
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
          "start": 985,
          "end": 991,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 986,
            "end": 991,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 988,
              "end": 991
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 993,
        "end": 996,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 998,
      "end": 1019,
      "id": {
        "type": "Identifier",
        "start": 1007,
        "end": 1012,
        "name": "foo10",
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
          "start": 1013,
          "end": 1017,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1014,
            "end": 1017,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1016,
              "end": 1017,
              "typeName": {
                "type": "Identifier",
                "start": 1016,
                "end": 1017,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1020,
      "end": 1048,
      "id": {
        "type": "Identifier",
        "start": 1029,
        "end": 1034,
        "name": "foo10",
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
          "start": 1035,
          "end": 1046,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1036,
            "end": 1046,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1038,
              "end": 1046,
              "exprName": {
                "type": "Identifier",
                "start": 1045,
                "end": 1046,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1055,
      "end": 1081,
      "id": {
        "type": "Identifier",
        "start": 1064,
        "end": 1069,
        "name": "foo10",
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
          "start": 1070,
          "end": 1076,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1071,
            "end": 1076,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1073,
              "end": 1076
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1078,
        "end": 1081,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1083,
      "end": 1104,
      "id": {
        "type": "Identifier",
        "start": 1092,
        "end": 1097,
        "name": "foo11",
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
          "start": 1098,
          "end": 1102,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1099,
            "end": 1102,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1101,
              "end": 1102,
              "typeName": {
                "type": "Identifier",
                "start": 1101,
                "end": 1102,
                "name": "B",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1105,
      "end": 1133,
      "id": {
        "type": "Identifier",
        "start": 1114,
        "end": 1119,
        "name": "foo11",
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
          "start": 1120,
          "end": 1131,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1121,
            "end": 1131,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1123,
              "end": 1131,
              "exprName": {
                "type": "Identifier",
                "start": 1130,
                "end": 1131,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1140,
      "end": 1166,
      "id": {
        "type": "Identifier",
        "start": 1149,
        "end": 1154,
        "name": "foo11",
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
          "start": 1155,
          "end": 1161,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1156,
            "end": 1161,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1158,
              "end": 1161
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1163,
        "end": 1166,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1168,
      "end": 1189,
      "id": {
        "type": "Identifier",
        "start": 1177,
        "end": 1182,
        "name": "foo12",
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
          "start": 1183,
          "end": 1187,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1184,
            "end": 1187,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1186,
              "end": 1187,
              "typeName": {
                "type": "Identifier",
                "start": 1186,
                "end": 1187,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1190,
      "end": 1219,
      "id": {
        "type": "Identifier",
        "start": 1199,
        "end": 1204,
        "name": "foo12",
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
          "start": 1205,
          "end": 1217,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1206,
            "end": 1217,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1208,
              "end": 1217,
              "typeName": {
                "type": "Identifier",
                "start": 1208,
                "end": 1209,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1209,
                "end": 1217,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1210,
                    "end": 1216
                  }
                ]
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
    {
      "type": "FunctionDeclaration",
      "start": 1226,
      "end": 1252,
      "id": {
        "type": "Identifier",
        "start": 1235,
        "end": 1240,
        "name": "foo12",
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
          "start": 1241,
          "end": 1247,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1242,
            "end": 1247,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1244,
              "end": 1247
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1249,
        "end": 1252,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1254,
      "end": 1285,
      "id": {
        "type": "Identifier",
        "start": 1263,
        "end": 1269,
        "name": "foo12b",
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
          "start": 1270,
          "end": 1283,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1271,
            "end": 1283,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1273,
              "end": 1283,
              "typeName": {
                "type": "Identifier",
                "start": 1273,
                "end": 1275,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1275,
                "end": 1283,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1276,
                    "end": 1282
                  }
                ]
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
    {
      "type": "TSDeclareFunction",
      "start": 1286,
      "end": 1316,
      "id": {
        "type": "Identifier",
        "start": 1295,
        "end": 1301,
        "name": "foo12b",
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
          "start": 1302,
          "end": 1314,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1303,
            "end": 1314,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1305,
              "end": 1314,
              "typeName": {
                "type": "Identifier",
                "start": 1305,
                "end": 1306,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1306,
                "end": 1314,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1307,
                    "end": 1313
                  }
                ]
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
    {
      "type": "FunctionDeclaration",
      "start": 1323,
      "end": 1350,
      "id": {
        "type": "Identifier",
        "start": 1332,
        "end": 1338,
        "name": "foo12b",
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
          "start": 1339,
          "end": 1345,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1340,
            "end": 1345,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1342,
              "end": 1345
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1347,
        "end": 1350,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1352,
      "end": 1373,
      "id": {
        "type": "Identifier",
        "start": 1361,
        "end": 1366,
        "name": "foo13",
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
          "start": 1367,
          "end": 1371,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1368,
            "end": 1371,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1370,
              "end": 1371,
              "typeName": {
                "type": "Identifier",
                "start": 1370,
                "end": 1371,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1374,
      "end": 1402,
      "id": {
        "type": "Identifier",
        "start": 1383,
        "end": 1388,
        "name": "foo13",
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
          "start": 1389,
          "end": 1400,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1390,
            "end": 1400,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1392,
              "end": 1400,
              "exprName": {
                "type": "Identifier",
                "start": 1399,
                "end": 1400,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1409,
      "end": 1435,
      "id": {
        "type": "Identifier",
        "start": 1418,
        "end": 1423,
        "name": "foo13",
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
          "start": 1424,
          "end": 1430,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1425,
            "end": 1430,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1427,
              "end": 1430
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1432,
        "end": 1435,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1437,
      "end": 1458,
      "id": {
        "type": "Identifier",
        "start": 1446,
        "end": 1451,
        "name": "foo14",
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
          "start": 1452,
          "end": 1456,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1453,
            "end": 1456,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1455,
              "end": 1456,
              "typeName": {
                "type": "Identifier",
                "start": 1455,
                "end": 1456,
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
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1459,
      "end": 1487,
      "id": {
        "type": "Identifier",
        "start": 1468,
        "end": 1473,
        "name": "foo14",
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
          "start": 1474,
          "end": 1485,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1475,
            "end": 1485,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1477,
              "end": 1485,
              "exprName": {
                "type": "Identifier",
                "start": 1484,
                "end": 1485,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1494,
      "end": 1520,
      "id": {
        "type": "Identifier",
        "start": 1503,
        "end": 1508,
        "name": "foo14",
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
          "start": 1509,
          "end": 1515,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1510,
            "end": 1515,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1512,
              "end": 1515
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1517,
        "end": 1520,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1522,
      "end": 1552,
      "id": {
        "type": "Identifier",
        "start": 1531,
        "end": 1536,
        "name": "foo15",
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
          "start": 1537,
          "end": 1550,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1538,
            "end": 1550,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1540,
              "end": 1550,
              "typeName": {
                "type": "Identifier",
                "start": 1540,
                "end": 1542,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1542,
                "end": 1550,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1543,
                    "end": 1549
                  }
                ]
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
    {
      "type": "TSDeclareFunction",
      "start": 1553,
      "end": 1582,
      "id": {
        "type": "Identifier",
        "start": 1562,
        "end": 1567,
        "name": "foo15",
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
          "start": 1568,
          "end": 1580,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1569,
            "end": 1580,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1571,
              "end": 1580,
              "typeName": {
                "type": "Identifier",
                "start": 1571,
                "end": 1572,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1572,
                "end": 1580,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1573,
                    "end": 1579
                  }
                ]
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
    {
      "type": "FunctionDeclaration",
      "start": 1589,
      "end": 1615,
      "id": {
        "type": "Identifier",
        "start": 1598,
        "end": 1603,
        "name": "foo15",
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
          "start": 1604,
          "end": 1610,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1605,
            "end": 1610,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1607,
              "end": 1610
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1612,
        "end": 1615,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
