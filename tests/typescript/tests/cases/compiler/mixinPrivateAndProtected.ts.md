__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 1568,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 38,
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "start": 51,
              "end": 55,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 78,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 169,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 85,
            "end": 107,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 94,
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": {
              "type": "Literal",
              "start": 105,
              "end": 106,
              "value": 2,
              "raw": "2"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 138,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": {
              "type": "Literal",
              "start": 136,
              "end": 137,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 167,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 154,
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": {
              "type": "Literal",
              "start": 165,
              "end": 166,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 171,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 184,
        "decorators": [],
        "name": "mixB",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 195,
              "end": 210,
              "typeName": {
                "type": "Identifier",
                "start": 195,
                "end": 206,
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 212,
          "end": 218,
          "decorators": [],
          "name": "Cls",
          "optional": false,
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
      "returnType": null,
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
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 247,
                "end": 250,
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 251,
                "end": 327,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 261,
                    "end": 288,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 274,
                      "decorators": [],
                      "name": "ptd",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": {
                      "type": "Literal",
                      "start": 285,
                      "end": 287,
                      "value": 10,
                      "raw": "10"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "protected"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 297,
                    "end": 321,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 308,
                      "decorators": [],
                      "name": "pvt",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": {
                      "type": "Literal",
                      "start": 319,
                      "end": 320,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 332,
      "end": 458,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 346,
        "decorators": [],
        "name": "mixB2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 357,
              "end": 371,
              "typeName": {
                "type": "Identifier",
                "start": 357,
                "end": 368,
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 373,
          "end": 379,
          "decorators": [],
          "name": "Cls",
          "optional": false,
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
      "returnType": null,
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
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 408,
                "end": 411,
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 412,
                "end": 455,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 422,
                    "end": 449,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 432,
                      "end": 435,
                      "decorators": [],
                      "name": "ptd",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": {
                      "type": "Literal",
                      "start": 446,
                      "end": 448,
                      "value": 10,
                      "raw": "10"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "protected"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 460,
      "end": 503,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 482,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 472,
            "decorators": [],
            "name": "AB",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 475,
            "end": 482,
            "callee": {
              "type": "Identifier",
              "start": 475,
              "end": 479,
              "decorators": [],
              "name": "mixB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 480,
                "end": 481,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
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
            "decorators": [],
            "name": "AB2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 494,
            "end": 502,
            "callee": {
              "type": "Identifier",
              "start": 494,
              "end": 499,
              "decorators": [],
              "name": "mixB2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 500,
                "end": 501,
                "decorators": [],
                "name": "A",
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
      "start": 505,
      "end": 665,
      "id": {
        "type": "Identifier",
        "start": 514,
        "end": 518,
        "decorators": [],
        "name": "mixC",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 529,
              "end": 544,
              "typeName": {
                "type": "Identifier",
                "start": 529,
                "end": 540,
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 546,
          "end": 552,
          "decorators": [],
          "name": "Cls",
          "optional": false,
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
      "returnType": null,
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
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 581,
                "end": 584,
                "decorators": [],
                "name": "Cls",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 585,
                "end": 662,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 595,
                    "end": 623,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 608,
                      "decorators": [],
                      "name": "ptd",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": {
                      "type": "Literal",
                      "start": 619,
                      "end": 622,
                      "value": 100,
                      "raw": "100"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "protected"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 632,
                    "end": 656,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 640,
                      "end": 643,
                      "decorators": [],
                      "name": "pvt",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": {
                      "type": "Literal",
                      "start": 654,
                      "end": 655,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 667,
      "end": 714,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 677,
          "end": 693,
          "id": {
            "type": "Identifier",
            "start": 677,
            "end": 681,
            "decorators": [],
            "name": "AB2C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 684,
            "end": 693,
            "callee": {
              "type": "Identifier",
              "start": 684,
              "end": 688,
              "decorators": [],
              "name": "mixC",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 689,
                "end": 692,
                "decorators": [],
                "name": "AB2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
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
            "decorators": [],
            "name": "ABC",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 705,
            "end": 713,
            "callee": {
              "type": "Identifier",
              "start": 705,
              "end": 709,
              "decorators": [],
              "name": "mixC",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 710,
                "end": 712,
                "decorators": [],
                "name": "AB",
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
      "start": 716,
      "end": 801,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 726,
          "end": 737,
          "id": {
            "type": "Identifier",
            "start": 726,
            "end": 727,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 730,
            "end": 737,
            "callee": {
              "type": "Identifier",
              "start": 734,
              "end": 735,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
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
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 748,
            "end": 756,
            "callee": {
              "type": "Identifier",
              "start": 752,
              "end": 754,
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
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
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 768,
            "end": 777,
            "callee": {
              "type": "Identifier",
              "start": 772,
              "end": 775,
              "decorators": [],
              "name": "ABC",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
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
            "decorators": [],
            "name": "ab2c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 790,
            "end": 800,
            "callee": {
              "type": "Identifier",
              "start": 794,
              "end": 798,
              "decorators": [],
              "name": "AB2C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 805,
              "end": 807,
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 808,
            "end": 815,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 821,
              "end": 824,
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 825,
            "end": 832,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 850,
              "end": 853,
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 854,
            "end": 861,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 881,
              "end": 883,
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 884,
            "end": 891,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 898,
              "end": 901,
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 902,
            "end": 909,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 927,
              "end": 930,
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 931,
            "end": 938,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 958,
              "end": 960,
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 961,
            "end": 968,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 976,
              "end": 979,
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 980,
            "end": 987,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1005,
              "end": 1008,
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 1009,
            "end": 1016,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1036,
              "end": 1038,
              "decorators": [],
              "name": "pb",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 1039,
            "end": 1046,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1055,
              "end": 1058,
              "decorators": [],
              "name": "ptd",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 1059,
            "end": 1066,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "ab2c",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1084,
              "end": 1087,
              "decorators": [],
              "name": "pvt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 1088,
            "end": 1095,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1131,
      "end": 1241,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1137,
        "end": 1143,
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1144,
        "end": 1241,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1147,
            "end": 1182,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1147,
              "end": 1158,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1158,
              "end": 1182,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1170,
                      "end": 1178,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1172,
                        "end": 1178
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1180,
                "end": 1182,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1185,
            "end": 1239,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1195,
              "end": 1214,
              "decorators": [],
              "name": "myProtectedFunction",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1214,
              "end": 1239,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1217,
                "end": 1239,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1243,
      "end": 1479,
      "id": {
        "type": "Identifier",
        "start": 1252,
        "end": 1263,
        "decorators": [],
        "name": "PersonMixin",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1274,
              "end": 1293,
              "typeName": {
                "type": "Identifier",
                "start": 1274,
                "end": 1285,
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 1295,
          "end": 1302,
          "decorators": [],
          "name": "Base",
          "optional": false,
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
      "returnType": null,
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
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 1328,
                "end": 1332,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1333,
                "end": 1476,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1337,
                    "end": 1389,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1337,
                      "end": 1348,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1348,
                      "end": 1389,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 1349,
                          "end": 1363,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 1352,
                            "end": 1356,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                      "returnType": null,
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
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "SpreadElement",
                                  "start": 1376,
                                  "end": 1383,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 1379,
                                    "end": 1383,
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1393,
                    "end": 1473,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1393,
                      "end": 1412,
                      "decorators": [],
                      "name": "myProtectedFunction",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1412,
                      "end": 1473,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                                  "decorators": [],
                                  "name": "myProtectedFunction",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1481,
      "end": 1568,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1487,
        "end": 1495,
        "decorators": [],
        "name": "Customer",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "start": 1504,
        "end": 1523,
        "callee": {
          "type": "Identifier",
          "start": 1504,
          "end": 1515,
          "decorators": [],
          "name": "PersonMixin",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1516,
            "end": 1522,
            "decorators": [],
            "name": "Person",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1524,
        "end": 1568,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1527,
            "end": 1550,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1527,
              "end": 1541,
              "decorators": [],
              "name": "accountBalance",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1555,
            "end": 1566,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1555,
              "end": 1556,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1556,
              "end": 1566,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1559,
                "end": 1566,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
