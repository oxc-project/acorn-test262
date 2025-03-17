__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1307,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 13,
        "body": []
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
      "start": 14,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 22,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 68,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 66,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 40,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 40,
              "end": 66,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 41,
                  "end": 50,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 44,
                      "end": 50
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 52,
                  "end": 61,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 53,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 55,
                      "end": 61
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 63,
                "end": 66,
                "body": []
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
      "start": 70,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 111,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 109,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 98,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 109,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 104,
                  "name": "n",
                  "typeAnnotation": {
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 109,
                "body": []
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
        "start": 77,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 79,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
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
      "type": "VariableDeclaration",
      "start": 113,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 146,
            "name": "anyCtor",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 126,
                "end": 146,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 132,
                    "end": 144,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 138,
                      "end": 143,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 140,
                        "end": 143
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
      "start": 149,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 184,
            "name": "anyCtor1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 163,
                "end": 184,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 169,
                    "end": 182,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 174,
                        "end": 175,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 176,
                      "end": 181,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 178,
                        "end": 181
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
      "type": "TSInterfaceDeclaration",
      "start": 187,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 207,
        "name": "nestedCtor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 208,
        "end": 235,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 214,
            "end": 233,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 232,
                  "name": "nestedCtor",
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
      "start": 236,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 262,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 262,
            "name": "nestedCtor",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 262,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 252,
                "end": 262,
                "typeName": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 262,
                  "name": "nestedCtor",
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
      "start": 351,
      "end": 366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 365,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 356,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 359,
            "end": 365,
            "callee": {
              "type": "Identifier",
              "start": 363,
              "end": 365,
              "name": "C0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 367,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 376,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 376,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 372,
              "end": 376,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 374,
                "end": 376,
                "typeName": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 376,
                  "name": "C0",
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
      "start": 432,
      "end": 447,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 446,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 438,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 441,
            "end": 446,
            "callee": {
              "type": "Identifier",
              "start": 445,
              "end": 446,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 448,
      "end": 462,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 452,
          "end": 461,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 461,
            "name": "c1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 454,
              "end": 461,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 456,
                "end": 461,
                "typeName": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 457,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 457,
                  "end": 461,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 458,
                      "end": 460,
                      "members": []
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
      "start": 543,
      "end": 563,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 562,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 548,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 551,
            "end": 562,
            "callee": {
              "type": "Identifier",
              "start": 555,
              "end": 562,
              "name": "anyCtor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 564,
      "end": 575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 568,
          "end": 574,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 574,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 569,
              "end": 574,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 571,
                "end": 574
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
      "start": 649,
      "end": 681,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 653,
          "end": 680,
          "id": {
            "type": "Identifier",
            "start": 653,
            "end": 654,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 657,
            "end": 680,
            "callee": {
              "type": "Identifier",
              "start": 661,
              "end": 669,
              "name": "anyCtor1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 670,
                "end": 679,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
      "start": 778,
      "end": 871,
      "id": {
        "type": "Identifier",
        "start": 787,
        "end": 793,
        "name": "newFn1",
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
          "start": 824,
          "end": 828,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 825,
            "end": 828,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 827,
              "end": 828,
              "typeName": {
                "type": "Identifier",
                "start": 827,
                "end": 828,
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
        "start": 830,
        "end": 871,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 836,
            "end": 850,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 840,
                "end": 849,
                "id": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 841,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 844,
                  "end": 849,
                  "callee": {
                    "type": "Identifier",
                    "start": 848,
                    "end": 849,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
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
            "start": 855,
            "end": 869,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 859,
                "end": 868,
                "id": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 868,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 860,
                    "end": 868,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 862,
                      "end": 868
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
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 793,
        "end": 823,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 794,
            "end": 822,
            "name": {
              "type": "Identifier",
              "start": 794,
              "end": 795,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 804,
              "end": 822,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 806,
                  "end": 820,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 812,
                    "end": 820,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 814,
                      "end": 820
                    }
                  }
                }
              ]
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
      "type": "FunctionDeclaration",
      "start": 968,
      "end": 1073,
      "id": {
        "type": "Identifier",
        "start": 977,
        "end": 983,
        "name": "newFn2",
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
          "start": 1022,
          "end": 1026,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1023,
            "end": 1026,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1025,
              "end": 1026,
              "typeName": {
                "type": "Identifier",
                "start": 1025,
                "end": 1026,
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
        "start": 1028,
        "end": 1073,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1034,
            "end": 1052,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1038,
                "end": 1051,
                "id": {
                  "type": "Identifier",
                  "start": 1038,
                  "end": 1039,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1042,
                  "end": 1051,
                  "callee": {
                    "type": "Identifier",
                    "start": 1046,
                    "end": 1047,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1048,
                      "end": 1050,
                      "value": 32,
                      "raw": "32"
                    }
                  ],
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
            "start": 1057,
            "end": 1071,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1061,
                "end": 1070,
                "id": {
                  "type": "Identifier",
                  "start": 1061,
                  "end": 1070,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1062,
                    "end": 1070,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1064,
                      "end": 1070
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
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 983,
        "end": 1021,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 984,
            "end": 1020,
            "name": {
              "type": "Identifier",
              "start": 984,
              "end": 985,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 994,
              "end": 1020,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 996,
                  "end": 1019,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1001,
                      "end": 1010,
                      "name": "s",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1002,
                        "end": 1010,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1004,
                          "end": 1010
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1011,
                    "end": 1019,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1013,
                      "end": 1019
                    }
                  }
                }
              ]
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
      "type": "FunctionDeclaration",
      "start": 1126,
      "end": 1153,
      "id": {
        "type": "Identifier",
        "start": 1135,
        "end": 1141,
        "name": "fnVoid",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1150,
        "end": 1153,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1143,
        "end": 1149,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1145,
          "end": 1149
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1154,
      "end": 1175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1158,
          "end": 1174,
          "id": {
            "type": "Identifier",
            "start": 1158,
            "end": 1159,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1162,
            "end": 1174,
            "callee": {
              "type": "Identifier",
              "start": 1166,
              "end": 1172,
              "name": "fnVoid",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 1176,
      "end": 1187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1180,
          "end": 1186,
          "id": {
            "type": "Identifier",
            "start": 1180,
            "end": 1186,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1181,
              "end": 1186,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1183,
                "end": 1186
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
      "start": 1216,
      "end": 1262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1220,
          "end": 1261,
          "id": {
            "type": "Identifier",
            "start": 1220,
            "end": 1226,
            "name": "nested",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1229,
            "end": 1261,
            "callee": {
              "type": "NewExpression",
              "start": 1234,
              "end": 1258,
              "callee": {
                "type": "NewExpression",
                "start": 1239,
                "end": 1255,
                "callee": {
                  "type": "Identifier",
                  "start": 1243,
                  "end": 1253,
                  "name": "nestedCtor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "arguments": [],
              "typeArguments": null
            },
            "arguments": [],
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
      "start": 1263,
      "end": 1284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1267,
          "end": 1283,
          "id": {
            "type": "Identifier",
            "start": 1267,
            "end": 1268,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1271,
            "end": 1283,
            "callee": {
              "type": "Identifier",
              "start": 1275,
              "end": 1281,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 1285,
      "end": 1306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1289,
          "end": 1305,
          "id": {
            "type": "Identifier",
            "start": 1289,
            "end": 1290,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1293,
            "end": 1305,
            "callee": {
              "type": "Identifier",
              "start": 1297,
              "end": 1303,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
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
