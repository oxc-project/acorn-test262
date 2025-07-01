__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 9,
        "end": 13
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 22
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 40
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 44,
                      "end": 50
                    },
                    "start": 42,
                    "end": 50
                  },
                  "start": 41,
                  "end": 50
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 55,
                      "end": 61
                    },
                    "start": 53,
                    "end": 61
                  },
                  "start": 52,
                  "end": 61
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 63,
                "end": 66
              },
              "expression": false,
              "start": 40,
              "end": 66
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 66
          }
        ],
        "start": 23,
        "end": 68
      },
      "abstract": false,
      "declare": false,
      "start": 14,
      "end": 68
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 77
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 79
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 78,
            "end": 79
          }
        ],
        "start": 77,
        "end": 80
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 98
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 103,
                        "end": 104
                      },
                      "typeArguments": null,
                      "start": 103,
                      "end": 104
                    },
                    "start": 101,
                    "end": 104
                  },
                  "start": 99,
                  "end": 104
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 106,
                "end": 109
              },
              "expression": false,
              "start": 98,
              "end": 109
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 87,
            "end": 109
          }
        ],
        "start": 81,
        "end": 111
      },
      "abstract": false,
      "declare": false,
      "start": 70,
      "end": 111
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyCtor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 140,
                        "end": 143
                      },
                      "start": 138,
                      "end": 143
                    },
                    "start": 132,
                    "end": 144
                  }
                ],
                "start": 126,
                "end": 146
              },
              "start": 124,
              "end": 146
            },
            "start": 117,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 117,
          "end": 146
        }
      ],
      "declare": false,
      "start": 113,
      "end": 147
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyCtor1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 174,
                        "end": 175
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 178,
                        "end": 181
                      },
                      "start": 176,
                      "end": 181
                    },
                    "start": 169,
                    "end": 182
                  }
                ],
                "start": 163,
                "end": 184
              },
              "start": 161,
              "end": 184
            },
            "start": 153,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 153,
          "end": 184
        }
      ],
      "declare": false,
      "start": 149,
      "end": 185
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nestedCtor",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 207
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nestedCtor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 232
                },
                "typeArguments": null,
                "start": 222,
                "end": 232
              },
              "start": 220,
              "end": 232
            },
            "start": 214,
            "end": 233
          }
        ],
        "start": 208,
        "end": 235
      },
      "declare": false,
      "start": 187,
      "end": 235
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nestedCtor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nestedCtor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 262
                },
                "typeArguments": null,
                "start": 252,
                "end": 262
              },
              "start": 250,
              "end": 262
            },
            "start": 240,
            "end": 262
          },
          "init": null,
          "definite": false,
          "start": 240,
          "end": 262
        }
      ],
      "declare": false,
      "start": 236,
      "end": 263
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 356
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C0",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 365
            },
            "typeArguments": null,
            "arguments": [],
            "start": 359,
            "end": 365
          },
          "definite": false,
          "start": 355,
          "end": 365
        }
      ],
      "declare": false,
      "start": 351,
      "end": 366
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 376
                },
                "typeArguments": null,
                "start": 374,
                "end": 376
              },
              "start": 372,
              "end": 376
            },
            "start": 371,
            "end": 376
          },
          "init": null,
          "definite": false,
          "start": 371,
          "end": 376
        }
      ],
      "declare": false,
      "start": 367,
      "end": 377
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 438
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 446
            },
            "typeArguments": null,
            "arguments": [],
            "start": 441,
            "end": 446
          },
          "definite": false,
          "start": 436,
          "end": 446
        }
      ],
      "declare": false,
      "start": 432,
      "end": 447
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 457
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 458,
                      "end": 460
                    }
                  ],
                  "start": 457,
                  "end": 461
                },
                "start": 456,
                "end": 461
              },
              "start": 454,
              "end": 461
            },
            "start": 452,
            "end": 461
          },
          "init": null,
          "definite": false,
          "start": 452,
          "end": 461
        }
      ],
      "declare": false,
      "start": 448,
      "end": 462
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 547,
            "end": 548
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "anyCtor",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 562
            },
            "typeArguments": null,
            "arguments": [],
            "start": 551,
            "end": 562
          },
          "definite": false,
          "start": 547,
          "end": 562
        }
      ],
      "declare": false,
      "start": 543,
      "end": 563
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 571,
                "end": 574
              },
              "start": 569,
              "end": 574
            },
            "start": 568,
            "end": 574
          },
          "init": null,
          "definite": false,
          "start": 568,
          "end": 574
        }
      ],
      "declare": false,
      "start": 564,
      "end": 575
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 653,
            "end": 654
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "anyCtor1",
              "optional": false,
              "typeAnnotation": null,
              "start": 661,
              "end": 669
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 679
              }
            ],
            "start": 657,
            "end": 680
          },
          "definite": false,
          "start": 653,
          "end": 680
        }
      ],
      "declare": false,
      "start": 649,
      "end": 681
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "newFn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 787,
        "end": 793
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 794,
              "end": 795
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 814,
                      "end": 820
                    },
                    "start": 812,
                    "end": 820
                  },
                  "start": 806,
                  "end": 820
                }
              ],
              "start": 804,
              "end": 822
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 794,
            "end": 822
          }
        ],
        "start": 793,
        "end": 823
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 828
              },
              "typeArguments": null,
              "start": 827,
              "end": 828
            },
            "start": 825,
            "end": 828
          },
          "start": 824,
          "end": 828
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 841
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 848,
                    "end": 849
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 844,
                  "end": 849
                },
                "definite": false,
                "start": 840,
                "end": 849
              }
            ],
            "declare": false,
            "start": 836,
            "end": 850
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 862,
                      "end": 868
                    },
                    "start": 860,
                    "end": 868
                  },
                  "start": 859,
                  "end": 868
                },
                "init": null,
                "definite": false,
                "start": 859,
                "end": 868
              }
            ],
            "declare": false,
            "start": 855,
            "end": 869
          }
        ],
        "start": 830,
        "end": 871
      },
      "expression": false,
      "start": 778,
      "end": 871
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "newFn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 977,
        "end": 983
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 985
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1004,
                          "end": 1010
                        },
                        "start": 1002,
                        "end": 1010
                      },
                      "start": 1001,
                      "end": 1010
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1013,
                      "end": 1019
                    },
                    "start": 1011,
                    "end": 1019
                  },
                  "start": 996,
                  "end": 1019
                }
              ],
              "start": 994,
              "end": 1020
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 984,
            "end": 1020
          }
        ],
        "start": 983,
        "end": 1021
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1025,
                "end": 1026
              },
              "typeArguments": null,
              "start": 1025,
              "end": 1026
            },
            "start": 1023,
            "end": 1026
          },
          "start": 1022,
          "end": 1026
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1038,
                  "end": 1039
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1046,
                    "end": 1047
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 32,
                      "raw": "32",
                      "start": 1048,
                      "end": 1050
                    }
                  ],
                  "start": 1042,
                  "end": 1051
                },
                "definite": false,
                "start": 1038,
                "end": 1051
              }
            ],
            "declare": false,
            "start": 1034,
            "end": 1052
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1064,
                      "end": 1070
                    },
                    "start": 1062,
                    "end": 1070
                  },
                  "start": 1061,
                  "end": 1070
                },
                "init": null,
                "definite": false,
                "start": 1061,
                "end": 1070
              }
            ],
            "declare": false,
            "start": 1057,
            "end": 1071
          }
        ],
        "start": 1028,
        "end": 1073
      },
      "expression": false,
      "start": 968,
      "end": 1073
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fnVoid",
        "optional": false,
        "typeAnnotation": null,
        "start": 1135,
        "end": 1141
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1145,
          "end": 1149
        },
        "start": 1143,
        "end": 1149
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1150,
        "end": 1153
      },
      "expression": false,
      "start": 1126,
      "end": 1153
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 1158,
            "end": 1159
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fnVoid",
              "optional": false,
              "typeAnnotation": null,
              "start": 1166,
              "end": 1172
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1162,
            "end": 1174
          },
          "definite": false,
          "start": 1158,
          "end": 1174
        }
      ],
      "declare": false,
      "start": 1154,
      "end": 1175
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1183,
                "end": 1186
              },
              "start": 1181,
              "end": 1186
            },
            "start": 1180,
            "end": 1186
          },
          "init": null,
          "definite": false,
          "start": 1180,
          "end": 1186
        }
      ],
      "declare": false,
      "start": 1176,
      "end": 1187
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nested",
            "optional": false,
            "typeAnnotation": null,
            "start": 1220,
            "end": 1226
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "NewExpression",
              "callee": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nestedCtor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1243,
                  "end": 1253
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1239,
                "end": 1255
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1234,
              "end": 1258
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1229,
            "end": 1261
          },
          "definite": false,
          "start": 1220,
          "end": 1261
        }
      ],
      "declare": false,
      "start": 1216,
      "end": 1262
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1267,
            "end": 1268
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 1275,
              "end": 1281
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1271,
            "end": 1283
          },
          "definite": false,
          "start": 1267,
          "end": 1283
        }
      ],
      "declare": false,
      "start": 1263,
      "end": 1284
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1289,
            "end": 1290
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 1297,
              "end": 1303
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1293,
            "end": 1305
          },
          "definite": false,
          "start": 1289,
          "end": 1305
        }
      ],
      "declare": false,
      "start": 1285,
      "end": 1306
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1306
}
```
