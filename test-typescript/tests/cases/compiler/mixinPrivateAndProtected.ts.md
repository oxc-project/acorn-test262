__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 1569,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 38,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 38,
        "end": 41,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 40,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
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
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 44,
        "end": 68,
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 48,
            "end": 62,
            "argument": {
              "type": "Identifier",
              "start": 51,
              "end": 55,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 62,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 57,
                "end": 62,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 57,
                  "end": 60
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 64,
          "end": 68,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 67,
            "end": 68,
            "typeName": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 169,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 85,
            "end": 107,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 94,
              "name": "pb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 105,
              "end": 106,
              "value": 2,
              "raw": "2"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
              }
            },
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 138,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "name": "ptd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 136,
              "end": 137,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 167,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 154,
              "name": "pvt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 165,
              "end": 166,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 162,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 156,
                "end": 162
              }
            },
            "accessibility": "private"
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
      "type": "FunctionDeclaration",
      "start": 171,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 184,
        "name": "mixB",
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
          "start": 212,
          "end": 218,
          "name": "Cls",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 218,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 217,
              "end": 218,
              "typeName": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
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
        "start": 220,
        "end": 330,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 226,
            "end": 328,
            "argument": {
              "type": "ClassExpression",
              "start": 233,
              "end": 327,
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 247,
                "end": 250,
                "name": "Cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 251,
                "end": 327,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 261,
                    "end": 288,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 274,
                      "name": "ptd",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 285,
                      "end": 287,
                      "value": 10,
                      "raw": "10"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 274,
                      "end": 282,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 276,
                        "end": 282
                      }
                    },
                    "accessibility": "protected"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 297,
                    "end": 321,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 308,
                      "name": "pvt",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 319,
                      "end": 320,
                      "value": 0,
                      "raw": "0"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 308,
                      "end": 316,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 310,
                        "end": 316
                      }
                    },
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 184,
        "end": 211,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 185,
            "end": 210,
            "name": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 195,
              "end": 210,
              "typeName": {
                "type": "Identifier",
                "start": 195,
                "end": 206,
                "name": "Constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 206,
                "end": 210,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 207,
                    "end": 209,
                    "members": []
                  }
                ]
              }
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
      "start": 332,
      "end": 458,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 346,
        "name": "mixB2",
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
          "start": 373,
          "end": 379,
          "name": "Cls",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 379,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 378,
              "end": 379,
              "typeName": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
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
        "start": 381,
        "end": 458,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 387,
            "end": 456,
            "argument": {
              "type": "ClassExpression",
              "start": 394,
              "end": 455,
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 408,
                "end": 411,
                "name": "Cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 412,
                "end": 455,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 422,
                    "end": 449,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 432,
                      "end": 435,
                      "name": "ptd",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 446,
                      "end": 448,
                      "value": 10,
                      "raw": "10"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 435,
                      "end": 443,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 437,
                        "end": 443
                      }
                    },
                    "accessibility": "protected"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 346,
        "end": 372,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 347,
            "end": 371,
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 357,
              "end": 371,
              "typeName": {
                "type": "Identifier",
                "start": 357,
                "end": 368,
                "name": "Constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 368,
                "end": 371,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 369,
                    "end": 370,
                    "typeName": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
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
      "start": 460,
      "end": 503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 482,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 472,
            "name": "AB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 475,
            "end": 482,
            "callee": {
              "type": "Identifier",
              "start": 475,
              "end": 479,
              "name": "mixB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 480,
                "end": 481,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 488,
          "end": 502,
          "id": {
            "type": "Identifier",
            "start": 488,
            "end": 491,
            "name": "AB2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 494,
            "end": 502,
            "callee": {
              "type": "Identifier",
              "start": 494,
              "end": 499,
              "name": "mixB2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 500,
                "end": 501,
                "name": "A",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 505,
      "end": 665,
      "id": {
        "type": "Identifier",
        "start": 514,
        "end": 518,
        "name": "mixC",
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
          "start": 546,
          "end": 552,
          "name": "Cls",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 549,
            "end": 552,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 551,
              "end": 552,
              "typeName": {
                "type": "Identifier",
                "start": 551,
                "end": 552,
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
        "start": 554,
        "end": 665,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 560,
            "end": 663,
            "argument": {
              "type": "ClassExpression",
              "start": 567,
              "end": 662,
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 581,
                "end": 584,
                "name": "Cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 585,
                "end": 662,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 595,
                    "end": 623,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 608,
                      "name": "ptd",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 619,
                      "end": 622,
                      "value": 100,
                      "raw": "100"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 608,
                      "end": 616,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 610,
                        "end": 616
                      }
                    },
                    "accessibility": "protected"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 632,
                    "end": 656,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 640,
                      "end": 643,
                      "name": "pvt",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 654,
                      "end": 655,
                      "value": 0,
                      "raw": "0"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 643,
                      "end": 651,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 645,
                        "end": 651
                      }
                    },
                    "accessibility": "private"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 518,
        "end": 545,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 519,
            "end": 544,
            "name": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 529,
              "end": 544,
              "typeName": {
                "type": "Identifier",
                "start": 529,
                "end": 540,
                "name": "Constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 540,
                "end": 544,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 541,
                    "end": 543,
                    "members": []
                  }
                ]
              }
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
      "start": 667,
      "end": 714,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 677,
          "end": 693,
          "id": {
            "type": "Identifier",
            "start": 677,
            "end": 681,
            "name": "AB2C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 684,
            "end": 693,
            "callee": {
              "type": "Identifier",
              "start": 684,
              "end": 688,
              "name": "mixC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 689,
                "end": 692,
                "name": "AB2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 699,
          "end": 713,
          "id": {
            "type": "Identifier",
            "start": 699,
            "end": 702,
            "name": "ABC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 705,
            "end": 713,
            "callee": {
              "type": "Identifier",
              "start": 705,
              "end": 709,
              "name": "mixC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 710,
                "end": 712,
                "name": "AB",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 716,
      "end": 801,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 726,
          "end": 737,
          "id": {
            "type": "Identifier",
            "start": 726,
            "end": 727,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 730,
            "end": 737,
            "callee": {
              "type": "Identifier",
              "start": 734,
              "end": 735,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 743,
          "end": 756,
          "id": {
            "type": "Identifier",
            "start": 743,
            "end": 745,
            "name": "ab",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 748,
            "end": 756,
            "callee": {
              "type": "Identifier",
              "start": 752,
              "end": 754,
              "name": "AB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 762,
          "end": 777,
          "id": {
            "type": "Identifier",
            "start": 762,
            "end": 765,
            "name": "abc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 768,
            "end": 777,
            "callee": {
              "type": "Identifier",
              "start": 772,
              "end": 775,
              "name": "ABC",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 783,
          "end": 800,
          "id": {
            "type": "Identifier",
            "start": 783,
            "end": 787,
            "name": "ab2c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 790,
            "end": 800,
            "callee": {
              "type": "Identifier",
              "start": 794,
              "end": 798,
              "name": "AB2C",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 803,
      "end": 818,
      "expression": {
        "type": "CallExpression",
        "start": 803,
        "end": 817,
        "callee": {
          "type": "MemberExpression",
          "start": 803,
          "end": 815,
          "object": {
            "type": "MemberExpression",
            "start": 803,
            "end": 807,
            "object": {
              "type": "Identifier",
              "start": 803,
              "end": 804,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 805,
              "end": 807,
              "name": "pb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 808,
            "end": 815,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 819,
      "end": 835,
      "expression": {
        "type": "CallExpression",
        "start": 819,
        "end": 834,
        "callee": {
          "type": "MemberExpression",
          "start": 819,
          "end": 832,
          "object": {
            "type": "MemberExpression",
            "start": 819,
            "end": 824,
            "object": {
              "type": "Identifier",
              "start": 819,
              "end": 820,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 821,
              "end": 824,
              "name": "ptd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 825,
            "end": 832,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 848,
      "end": 864,
      "expression": {
        "type": "CallExpression",
        "start": 848,
        "end": 863,
        "callee": {
          "type": "MemberExpression",
          "start": 848,
          "end": 861,
          "object": {
            "type": "MemberExpression",
            "start": 848,
            "end": 853,
            "object": {
              "type": "Identifier",
              "start": 848,
              "end": 849,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 850,
              "end": 853,
              "name": "pvt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 854,
            "end": 861,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 878,
      "end": 894,
      "expression": {
        "type": "CallExpression",
        "start": 878,
        "end": 893,
        "callee": {
          "type": "MemberExpression",
          "start": 878,
          "end": 891,
          "object": {
            "type": "MemberExpression",
            "start": 878,
            "end": 883,
            "object": {
              "type": "Identifier",
              "start": 878,
              "end": 880,
              "name": "ab",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 881,
              "end": 883,
              "name": "pb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 884,
            "end": 891,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 895,
      "end": 912,
      "expression": {
        "type": "CallExpression",
        "start": 895,
        "end": 911,
        "callee": {
          "type": "MemberExpression",
          "start": 895,
          "end": 909,
          "object": {
            "type": "MemberExpression",
            "start": 895,
            "end": 901,
            "object": {
              "type": "Identifier",
              "start": 895,
              "end": 897,
              "name": "ab",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 898,
              "end": 901,
              "name": "ptd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 902,
            "end": 909,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 924,
      "end": 941,
      "expression": {
        "type": "CallExpression",
        "start": 924,
        "end": 940,
        "callee": {
          "type": "MemberExpression",
          "start": 924,
          "end": 938,
          "object": {
            "type": "MemberExpression",
            "start": 924,
            "end": 930,
            "object": {
              "type": "Identifier",
              "start": 924,
              "end": 926,
              "name": "ab",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 927,
              "end": 930,
              "name": "pvt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 931,
            "end": 938,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 954,
      "end": 971,
      "expression": {
        "type": "CallExpression",
        "start": 954,
        "end": 970,
        "callee": {
          "type": "MemberExpression",
          "start": 954,
          "end": 968,
          "object": {
            "type": "MemberExpression",
            "start": 954,
            "end": 960,
            "object": {
              "type": "Identifier",
              "start": 954,
              "end": 957,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 958,
              "end": 960,
              "name": "pb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 961,
            "end": 968,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 972,
      "end": 990,
      "expression": {
        "type": "CallExpression",
        "start": 972,
        "end": 989,
        "callee": {
          "type": "MemberExpression",
          "start": 972,
          "end": 987,
          "object": {
            "type": "MemberExpression",
            "start": 972,
            "end": 979,
            "object": {
              "type": "Identifier",
              "start": 972,
              "end": 975,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 976,
              "end": 979,
              "name": "ptd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 980,
            "end": 987,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1001,
      "end": 1019,
      "expression": {
        "type": "CallExpression",
        "start": 1001,
        "end": 1018,
        "callee": {
          "type": "MemberExpression",
          "start": 1001,
          "end": 1016,
          "object": {
            "type": "MemberExpression",
            "start": 1001,
            "end": 1008,
            "object": {
              "type": "Identifier",
              "start": 1001,
              "end": 1004,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1005,
              "end": 1008,
              "name": "pvt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1009,
            "end": 1016,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1031,
      "end": 1049,
      "expression": {
        "type": "CallExpression",
        "start": 1031,
        "end": 1048,
        "callee": {
          "type": "MemberExpression",
          "start": 1031,
          "end": 1046,
          "object": {
            "type": "MemberExpression",
            "start": 1031,
            "end": 1038,
            "object": {
              "type": "Identifier",
              "start": 1031,
              "end": 1035,
              "name": "ab2c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1036,
              "end": 1038,
              "name": "pb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1039,
            "end": 1046,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1050,
      "end": 1069,
      "expression": {
        "type": "CallExpression",
        "start": 1050,
        "end": 1068,
        "callee": {
          "type": "MemberExpression",
          "start": 1050,
          "end": 1066,
          "object": {
            "type": "MemberExpression",
            "start": 1050,
            "end": 1058,
            "object": {
              "type": "Identifier",
              "start": 1050,
              "end": 1054,
              "name": "ab2c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1055,
              "end": 1058,
              "name": "ptd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1059,
            "end": 1066,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1079,
      "end": 1098,
      "expression": {
        "type": "CallExpression",
        "start": 1079,
        "end": 1097,
        "callee": {
          "type": "MemberExpression",
          "start": 1079,
          "end": 1095,
          "object": {
            "type": "MemberExpression",
            "start": 1079,
            "end": 1087,
            "object": {
              "type": "Identifier",
              "start": 1079,
              "end": 1083,
              "name": "ab2c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1084,
              "end": 1087,
              "name": "pvt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1088,
            "end": 1095,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1131,
      "end": 1241,
      "id": {
        "type": "Identifier",
        "start": 1137,
        "end": 1143,
        "name": "Person",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1144,
        "end": 1241,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1147,
            "end": 1182,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1147,
              "end": 1158,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1158,
              "end": 1182,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 1159,
                  "end": 1178,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 1166,
                    "end": 1178,
                    "name": "name",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1170,
                      "end": 1178,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1172,
                        "end": 1178
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1180,
                "end": 1182,
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
          },
          {
            "type": "MethodDefinition",
            "start": 1185,
            "end": 1239,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1195,
              "end": 1214,
              "name": "myProtectedFunction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1214,
              "end": 1239,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1217,
                "end": 1239,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
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
      "type": "FunctionDeclaration",
      "start": 1243,
      "end": 1479,
      "id": {
        "type": "Identifier",
        "start": 1252,
        "end": 1263,
        "name": "PersonMixin",
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
          "start": 1295,
          "end": 1302,
          "name": "Base",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1299,
            "end": 1302,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1301,
              "end": 1302,
              "typeName": {
                "type": "Identifier",
                "start": 1301,
                "end": 1302,
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
        "start": 1304,
        "end": 1479,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1307,
            "end": 1477,
            "argument": {
              "type": "ClassExpression",
              "start": 1314,
              "end": 1476,
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 1328,
                "end": 1332,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 1333,
                "end": 1476,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1337,
                    "end": 1389,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1337,
                      "end": 1348,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1348,
                      "end": 1389,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 1349,
                          "end": 1363,
                          "argument": {
                            "type": "Identifier",
                            "start": 1352,
                            "end": 1356,
                            "name": "args",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1356,
                            "end": 1363,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 1358,
                              "end": 1363,
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 1358,
                                "end": 1361
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1365,
                        "end": 1389,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1370,
                            "end": 1385,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1370,
                              "end": 1384,
                              "callee": {
                                "type": "Super",
                                "start": 1370,
                                "end": 1375
                              },
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "start": 1376,
                                  "end": 1383,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 1379,
                                    "end": 1383,
                                    "name": "args",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1393,
                    "end": 1473,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1393,
                      "end": 1412,
                      "name": "myProtectedFunction",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1412,
                      "end": 1473,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1415,
                        "end": 1473,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1420,
                            "end": 1448,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1420,
                              "end": 1447,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1420,
                                "end": 1445,
                                "object": {
                                  "type": "Super",
                                  "start": 1420,
                                  "end": 1425
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1426,
                                  "end": 1445,
                                  "name": "myProtectedFunction",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [],
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1263,
        "end": 1294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1264,
            "end": 1293,
            "name": {
              "type": "Identifier",
              "start": 1264,
              "end": 1265,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1274,
              "end": 1293,
              "typeName": {
                "type": "Identifier",
                "start": 1274,
                "end": 1285,
                "name": "Constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1285,
                "end": 1293,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1286,
                    "end": 1292,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1286,
                      "end": 1292,
                      "name": "Person",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
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
      "type": "ClassDeclaration",
      "start": 1481,
      "end": 1568,
      "id": {
        "type": "Identifier",
        "start": 1487,
        "end": 1495,
        "name": "Customer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 1504,
        "end": 1523,
        "callee": {
          "type": "Identifier",
          "start": 1504,
          "end": 1515,
          "name": "PersonMixin",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1516,
            "end": 1522,
            "name": "Person",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 1524,
        "end": 1568,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1527,
            "end": 1550,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1527,
              "end": 1541,
              "name": "accountBalance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1541,
              "end": 1549,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1543,
                "end": 1549
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1555,
            "end": 1566,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1555,
              "end": 1556,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1556,
              "end": 1566,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1559,
                "end": 1566,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
