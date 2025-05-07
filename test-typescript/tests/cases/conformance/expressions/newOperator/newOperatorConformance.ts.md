__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1306,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 13,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C0",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 68,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 40,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 40,
              "end": 66,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 63,
                "end": 66,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 41,
                  "end": 50,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 42,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 44,
                      "end": 50
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 52,
                  "end": 61,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 53,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 55,
                      "end": 61
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
        "start": 20,
        "end": 22,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 70,
      "end": 111,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 111,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 109,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 98,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 109,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 106,
                "end": 109,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 99,
                  "end": 104,
                  "decorators": [],
                  "name": "n",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 101,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 103,
                      "end": 104,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 103,
                        "end": 104,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
        "start": 76,
        "end": 77,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 79,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 146,
            "decorators": [],
            "name": "anyCtor",
            "optional": false,
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
                    },
                    "typeParameters": null
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 149,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 184,
            "decorators": [],
            "name": "anyCtor1",
            "optional": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 174,
                        "end": 175,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
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
                    },
                    "typeParameters": null
                  }
                ]
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
      "type": "TSInterfaceDeclaration",
      "start": 187,
      "end": 235,
      "body": {
        "type": "TSInterfaceBody",
        "start": 208,
        "end": 235,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 214,
            "end": 233,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 232,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 232,
                  "decorators": [],
                  "name": "nestedCtor",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 207,
        "decorators": [],
        "name": "nestedCtor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 262,
            "decorators": [],
            "name": "nestedCtor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 262,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 252,
                "end": 262,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 262,
                  "decorators": [],
                  "name": "nestedCtor",
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
      "type": "VariableDeclaration",
      "start": 351,
      "end": 366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 365,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 356,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 359,
            "end": 365,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 363,
              "end": 365,
              "decorators": [],
              "name": "C0",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 376,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 372,
              "end": 376,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 374,
                "end": 376,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 376,
                  "decorators": [],
                  "name": "C0",
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
      "type": "VariableDeclaration",
      "start": 432,
      "end": 447,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 446,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 438,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 441,
            "end": 446,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 445,
              "end": 446,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 461,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 454,
              "end": 461,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 456,
                "end": 461,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 457,
                  "decorators": [],
                  "name": "T",
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
      "type": "VariableDeclaration",
      "start": 543,
      "end": 563,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 562,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 548,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 551,
            "end": 562,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 555,
              "end": 562,
              "decorators": [],
              "name": "anyCtor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 568,
            "end": 574,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 569,
              "end": 574,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 571,
                "end": 574
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
      "type": "VariableDeclaration",
      "start": 649,
      "end": 681,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 653,
          "end": 680,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 653,
            "end": 654,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 657,
            "end": 680,
            "arguments": [
              {
                "type": "Identifier",
                "start": 670,
                "end": 679,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 661,
              "end": 669,
              "decorators": [],
              "name": "anyCtor1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 778,
      "end": 871,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 841,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 844,
                  "end": 849,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 848,
                    "end": 849,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 868,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 860,
                    "end": 868,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 862,
                      "end": 868
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 787,
        "end": 793,
        "decorators": [],
        "name": "newFn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 824,
          "end": 828,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 825,
            "end": 828,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 827,
              "end": 828,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 827,
                "end": 828,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 793,
        "end": 823,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 794,
            "end": 822,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 804,
              "end": 822,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 806,
                  "end": 820,
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
                  },
                  "typeParameters": null
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 794,
              "end": 795,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 968,
      "end": 1073,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1038,
                  "end": 1039,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 1042,
                  "end": 1051,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1048,
                      "end": 1050,
                      "raw": "32",
                      "value": 32,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1046,
                    "end": 1047,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1061,
                  "end": 1070,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1062,
                    "end": 1070,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1064,
                      "end": 1070
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 977,
        "end": 983,
        "decorators": [],
        "name": "newFn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1022,
          "end": 1026,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1023,
            "end": 1026,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1025,
              "end": 1026,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1025,
                "end": 1026,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 983,
        "end": 1021,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 984,
            "end": 1020,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 994,
              "end": 1020,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 996,
                  "end": 1019,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1001,
                      "end": 1010,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1002,
                        "end": 1010,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1004,
                          "end": 1010
                        }
                      }
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
                  },
                  "typeParameters": null
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 984,
              "end": 985,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1126,
      "end": 1153,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1150,
        "end": 1153,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1135,
        "end": 1141,
        "decorators": [],
        "name": "fnVoid",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1143,
        "end": 1149,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1145,
          "end": 1149
        }
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1158,
            "end": 1159,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1162,
            "end": 1174,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1166,
              "end": 1172,
              "decorators": [],
              "name": "fnVoid",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1180,
            "end": 1186,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1181,
              "end": 1186,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1183,
                "end": 1186
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
      "type": "VariableDeclaration",
      "start": 1216,
      "end": 1262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1220,
          "end": 1261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1220,
            "end": 1226,
            "decorators": [],
            "name": "nested",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1229,
            "end": 1261,
            "arguments": [],
            "callee": {
              "type": "NewExpression",
              "start": 1234,
              "end": 1258,
              "arguments": [],
              "callee": {
                "type": "NewExpression",
                "start": 1239,
                "end": 1255,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 1243,
                  "end": 1253,
                  "decorators": [],
                  "name": "nestedCtor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "typeArguments": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1267,
            "end": 1268,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1271,
            "end": 1283,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1275,
              "end": 1281,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1289,
            "end": 1290,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1293,
            "end": 1305,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1297,
              "end": 1303,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
