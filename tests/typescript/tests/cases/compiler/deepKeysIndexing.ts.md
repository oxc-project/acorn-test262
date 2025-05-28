__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 1368,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 77,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 97,
        "decorators": [],
        "name": "DeepObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 98,
        "end": 147,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 102,
            "end": 145,
            "parameters": [
              {
                "type": "Identifier",
                "start": 103,
                "end": 113,
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 105,
                  "end": 113,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 107,
                    "end": 113
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 144,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 116,
                "end": 144,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 122,
                    "end": 140,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 123,
                        "end": 133,
                        "decorators": [],
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 125,
                          "end": 133,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 127,
                            "end": 133
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 134,
                      "end": 139,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 136,
                        "end": 139
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 149,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 165,
        "decorators": [],
        "name": "keys2broken",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 165,
        "end": 213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 169,
            "end": 189,
            "name": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 179,
              "end": 189,
              "typeName": {
                "type": "Identifier",
                "start": 179,
                "end": 189,
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 193,
            "end": 211,
            "name": {
              "type": "Identifier",
              "start": 193,
              "end": 195,
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 204,
              "end": 211,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 210,
                "end": 211,
                "typeName": {
                  "type": "Identifier",
                  "start": 210,
                  "end": 211,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 216,
        "end": 275,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 216,
          "end": 221,
          "objectType": {
            "type": "TSTypeReference",
            "start": 216,
            "end": 217,
            "typeName": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 218,
            "end": 220,
            "typeName": {
              "type": "Identifier",
              "start": 218,
              "end": 220,
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 230,
          "end": 236
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 239,
          "end": 267,
          "typeName": {
            "type": "Identifier",
            "start": 239,
            "end": 246,
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 246,
            "end": 267,
            "params": [
              {
                "type": "TSTypeOperator",
                "start": 247,
                "end": 258,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 253,
                  "end": 258,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 253,
                    "end": 254,
                    "typeName": {
                      "type": "Identifier",
                      "start": 253,
                      "end": 254,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 255,
                    "end": 257,
                    "typeName": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 257,
                      "decorators": [],
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 260,
                "end": 266
              }
            ]
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 270,
          "end": 275
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 278,
      "end": 389,
      "id": {
        "type": "Identifier",
        "start": 283,
        "end": 295,
        "decorators": [],
        "name": "keys2working",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 295,
        "end": 343,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 299,
            "end": 319,
            "name": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 309,
              "end": 319,
              "typeName": {
                "type": "Identifier",
                "start": 309,
                "end": 319,
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 323,
            "end": 341,
            "name": {
              "type": "Identifier",
              "start": 323,
              "end": 325,
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 334,
              "end": 341,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 340,
                "end": 341,
                "typeName": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 341,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 346,
        "end": 388,
        "checkType": {
          "type": "TSIndexedAccessType",
          "start": 346,
          "end": 351,
          "objectType": {
            "type": "TSTypeReference",
            "start": 346,
            "end": 347,
            "typeName": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 348,
            "end": 350,
            "typeName": {
              "type": "Identifier",
              "start": 348,
              "end": 350,
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 360,
          "end": 366
        },
        "trueType": {
          "type": "TSTypeOperator",
          "start": 369,
          "end": 380,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 375,
            "end": 380,
            "objectType": {
              "type": "TSTypeReference",
              "start": 375,
              "end": 376,
              "typeName": {
                "type": "Identifier",
                "start": 375,
                "end": 376,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 377,
              "end": 379,
              "typeName": {
                "type": "Identifier",
                "start": 377,
                "end": 379,
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 383,
          "end": 388
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 391,
      "end": 522,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 411,
        "decorators": [],
        "name": "keys2workaround",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 411,
        "end": 453,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 412,
            "end": 432,
            "name": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 422,
              "end": 432,
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 432,
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 434,
            "end": 452,
            "name": {
              "type": "Identifier",
              "start": 434,
              "end": 436,
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 445,
              "end": 452,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 451,
                "end": 452,
                "typeName": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 452,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 456,
        "end": 521,
        "typeName": {
          "type": "Identifier",
          "start": 456,
          "end": 463,
          "decorators": [],
          "name": "Extract",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 463,
          "end": 521,
          "params": [
            {
              "type": "TSConditionalType",
              "start": 467,
              "end": 509,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 467,
                "end": 472,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 467,
                  "end": 468,
                  "typeName": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 469,
                  "end": 471,
                  "typeName": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 471,
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 481,
                "end": 487
              },
              "trueType": {
                "type": "TSTypeOperator",
                "start": 490,
                "end": 501,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 496,
                  "end": 501,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 496,
                    "end": 497,
                    "typeName": {
                      "type": "Identifier",
                      "start": 496,
                      "end": 497,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 498,
                    "end": 500,
                    "typeName": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 500,
                      "decorators": [],
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 504,
                "end": 509
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 513,
              "end": 519
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 524,
      "end": 621,
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 537,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 546,
          "end": 556,
          "expression": {
            "type": "Identifier",
            "start": 546,
            "end": 556,
            "decorators": [],
            "name": "DeepObject",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 557,
        "end": 621,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 561,
            "end": 619,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 561,
              "end": 562,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 562,
              "end": 618,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 564,
                "end": 618,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 570,
                    "end": 579,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 570,
                      "end": 573,
                      "value": "1",
                      "raw": "\"1\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 573,
                      "end": 578,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 575,
                        "end": 578,
                        "literal": {
                          "type": "Literal",
                          "start": 575,
                          "end": 578,
                          "value": 123,
                          "raw": "123"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 584,
                    "end": 596,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 584,
                      "end": 587,
                      "value": "2",
                      "raw": "\"2\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 587,
                      "end": 595,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 589,
                        "end": 595
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 601,
                    "end": 614,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 601,
                      "end": 604,
                      "value": "3",
                      "raw": "\"3\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 604,
                      "end": 613,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 606,
                        "end": 613
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "ClassDeclaration",
      "start": 623,
      "end": 1048,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 629,
        "end": 632,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 632,
        "end": 654,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 633,
            "end": 653,
            "name": {
              "type": "Identifier",
              "start": 633,
              "end": 634,
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 643,
              "end": 653,
              "typeName": {
                "type": "Identifier",
                "start": 643,
                "end": 653,
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 655,
        "end": 1048,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 659,
            "end": 782,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 659,
              "end": 665,
              "decorators": [],
              "name": "broken",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 665,
              "end": 782,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 665,
                "end": 753,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 671,
                    "end": 689,
                    "name": {
                      "type": "Identifier",
                      "start": 671,
                      "end": 673,
                      "decorators": [],
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 682,
                      "end": 689,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 688,
                        "end": 689,
                        "typeName": {
                          "type": "Identifier",
                          "start": 688,
                          "end": 689,
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 695,
                    "end": 724,
                    "name": {
                      "type": "Identifier",
                      "start": 695,
                      "end": 697,
                      "decorators": [],
                      "name": "K2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 706,
                      "end": 724,
                      "typeName": {
                        "type": "Identifier",
                        "start": 706,
                        "end": 717,
                        "decorators": [],
                        "name": "keys2broken",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 717,
                        "end": 724,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 718,
                            "end": 719,
                            "typeName": {
                              "type": "Identifier",
                              "start": 718,
                              "end": 719,
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 721,
                            "end": 723,
                            "typeName": {
                              "type": "Identifier",
                              "start": 721,
                              "end": 723,
                              "decorators": [],
                              "name": "K1",
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 730,
                    "end": 749,
                    "name": {
                      "type": "Identifier",
                      "start": 730,
                      "end": 731,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "start": 740,
                      "end": 749,
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 740,
                        "end": 745,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 740,
                          "end": 741,
                          "typeName": {
                            "type": "Identifier",
                            "start": 740,
                            "end": 741,
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 742,
                          "end": 744,
                          "typeName": {
                            "type": "Identifier",
                            "start": 742,
                            "end": 744,
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 746,
                        "end": 748,
                        "typeName": {
                          "type": "Identifier",
                          "start": 746,
                          "end": 748,
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                  "start": 754,
                  "end": 760,
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 756,
                    "end": 760,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 758,
                      "end": 760,
                      "typeName": {
                        "type": "Identifier",
                        "start": 758,
                        "end": 760,
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 762,
                  "end": 768,
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 764,
                    "end": 768,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 766,
                      "end": 768,
                      "typeName": {
                        "type": "Identifier",
                        "start": 766,
                        "end": 768,
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 770,
                  "end": 778,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 775,
                    "end": 778,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 777,
                      "end": 778,
                      "typeName": {
                        "type": "Identifier",
                        "start": 777,
                        "end": 778,
                        "decorators": [],
                        "name": "V",
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
                "start": 780,
                "end": 782,
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
          },
          {
            "type": "MethodDefinition",
            "start": 786,
            "end": 911,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 786,
              "end": 793,
              "decorators": [],
              "name": "working",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 793,
              "end": 911,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 793,
                "end": 882,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 799,
                    "end": 817,
                    "name": {
                      "type": "Identifier",
                      "start": 799,
                      "end": 801,
                      "decorators": [],
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 810,
                      "end": 817,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 816,
                        "end": 817,
                        "typeName": {
                          "type": "Identifier",
                          "start": 816,
                          "end": 817,
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 823,
                    "end": 853,
                    "name": {
                      "type": "Identifier",
                      "start": 823,
                      "end": 825,
                      "decorators": [],
                      "name": "K2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 834,
                      "end": 853,
                      "typeName": {
                        "type": "Identifier",
                        "start": 834,
                        "end": 846,
                        "decorators": [],
                        "name": "keys2working",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 846,
                        "end": 853,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 847,
                            "end": 848,
                            "typeName": {
                              "type": "Identifier",
                              "start": 847,
                              "end": 848,
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 850,
                            "end": 852,
                            "typeName": {
                              "type": "Identifier",
                              "start": 850,
                              "end": 852,
                              "decorators": [],
                              "name": "K1",
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 859,
                    "end": 878,
                    "name": {
                      "type": "Identifier",
                      "start": 859,
                      "end": 860,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "start": 869,
                      "end": 878,
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 869,
                        "end": 874,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 869,
                          "end": 870,
                          "typeName": {
                            "type": "Identifier",
                            "start": 869,
                            "end": 870,
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 871,
                          "end": 873,
                          "typeName": {
                            "type": "Identifier",
                            "start": 871,
                            "end": 873,
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 875,
                        "end": 877,
                        "typeName": {
                          "type": "Identifier",
                          "start": 875,
                          "end": 877,
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                  "start": 883,
                  "end": 889,
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 885,
                    "end": 889,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 887,
                      "end": 889,
                      "typeName": {
                        "type": "Identifier",
                        "start": 887,
                        "end": 889,
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 891,
                  "end": 897,
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 893,
                    "end": 897,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 895,
                      "end": 897,
                      "typeName": {
                        "type": "Identifier",
                        "start": 895,
                        "end": 897,
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 899,
                  "end": 907,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 904,
                    "end": 907,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 906,
                      "end": 907,
                      "typeName": {
                        "type": "Identifier",
                        "start": 906,
                        "end": 907,
                        "decorators": [],
                        "name": "V",
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
                "start": 909,
                "end": 911,
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
          },
          {
            "type": "MethodDefinition",
            "start": 915,
            "end": 1046,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 915,
              "end": 925,
              "decorators": [],
              "name": "workaround",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 925,
              "end": 1046,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 925,
                "end": 1017,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 931,
                    "end": 949,
                    "name": {
                      "type": "Identifier",
                      "start": 931,
                      "end": 933,
                      "decorators": [],
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 942,
                      "end": 949,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 948,
                        "end": 949,
                        "typeName": {
                          "type": "Identifier",
                          "start": 948,
                          "end": 949,
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 955,
                    "end": 988,
                    "name": {
                      "type": "Identifier",
                      "start": 955,
                      "end": 957,
                      "decorators": [],
                      "name": "K2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 966,
                      "end": 988,
                      "typeName": {
                        "type": "Identifier",
                        "start": 966,
                        "end": 981,
                        "decorators": [],
                        "name": "keys2workaround",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 981,
                        "end": 988,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 982,
                            "end": 983,
                            "typeName": {
                              "type": "Identifier",
                              "start": 982,
                              "end": 983,
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 985,
                            "end": 987,
                            "typeName": {
                              "type": "Identifier",
                              "start": 985,
                              "end": 987,
                              "decorators": [],
                              "name": "K1",
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 994,
                    "end": 1013,
                    "name": {
                      "type": "Identifier",
                      "start": 994,
                      "end": 995,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "start": 1004,
                      "end": 1013,
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "start": 1004,
                        "end": 1009,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1004,
                          "end": 1005,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1004,
                            "end": 1005,
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1006,
                          "end": 1008,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1006,
                            "end": 1008,
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 1010,
                        "end": 1012,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1010,
                          "end": 1012,
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                  "start": 1018,
                  "end": 1024,
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1020,
                    "end": 1024,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1022,
                      "end": 1024,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1022,
                        "end": 1024,
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1026,
                  "end": 1032,
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1028,
                    "end": 1032,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1030,
                      "end": 1032,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1030,
                        "end": 1032,
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1034,
                  "end": 1042,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1039,
                    "end": 1042,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1041,
                      "end": 1042,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1041,
                        "end": 1042,
                        "decorators": [],
                        "name": "V",
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
                "start": 1044,
                "end": 1046,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 1050,
      "end": 1077,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1056,
          "end": 1076,
          "id": {
            "type": "Identifier",
            "start": 1056,
            "end": 1059,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1062,
            "end": 1076,
            "callee": {
              "type": "Identifier",
              "start": 1066,
              "end": 1069,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1069,
              "end": 1074,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1070,
                  "end": 1073,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1070,
                    "end": 1073,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1141,
      "end": 1168,
      "expression": {
        "type": "CallExpression",
        "start": 1141,
        "end": 1167,
        "callee": {
          "type": "MemberExpression",
          "start": 1141,
          "end": 1151,
          "object": {
            "type": "Identifier",
            "start": 1141,
            "end": 1144,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1145,
            "end": 1151,
            "decorators": [],
            "name": "broken",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1152,
            "end": 1155,
            "value": "a",
            "raw": "\"a\""
          },
          {
            "type": "Literal",
            "start": 1157,
            "end": 1160,
            "value": "1",
            "raw": "\"1\""
          },
          {
            "type": "Literal",
            "start": 1162,
            "end": 1166,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1252,
      "end": 1280,
      "expression": {
        "type": "CallExpression",
        "start": 1252,
        "end": 1279,
        "callee": {
          "type": "MemberExpression",
          "start": 1252,
          "end": 1263,
          "object": {
            "type": "Identifier",
            "start": 1252,
            "end": 1255,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1256,
            "end": 1263,
            "decorators": [],
            "name": "working",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1264,
            "end": 1267,
            "value": "a",
            "raw": "\"a\""
          },
          {
            "type": "Literal",
            "start": 1269,
            "end": 1272,
            "value": "1",
            "raw": "\"1\""
          },
          {
            "type": "Literal",
            "start": 1274,
            "end": 1278,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1309,
      "end": 1340,
      "expression": {
        "type": "CallExpression",
        "start": 1309,
        "end": 1339,
        "callee": {
          "type": "MemberExpression",
          "start": 1309,
          "end": 1323,
          "object": {
            "type": "Identifier",
            "start": 1309,
            "end": 1312,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1313,
            "end": 1323,
            "decorators": [],
            "name": "workaround",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 1324,
            "end": 1327,
            "value": "a",
            "raw": "\"a\""
          },
          {
            "type": "Literal",
            "start": 1329,
            "end": 1332,
            "value": "1",
            "raw": "\"1\""
          },
          {
            "type": "Literal",
            "start": 1334,
            "end": 1338,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
