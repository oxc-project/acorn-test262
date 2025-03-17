__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3727,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 98,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 98,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 29,
          "decorators": [],
          "name": "FilterPropsByType",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 39,
          "end": 97,
          "indexType": {
            "type": "TSTypeOperator",
            "start": 89,
            "end": 96,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 95,
              "end": 96,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "objectType": {
            "type": "TSMappedType",
            "start": 39,
            "end": 88,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 49,
              "end": 56,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": null,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 59,
              "end": 86,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 59,
                "end": 63,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 61,
                  "end": 62,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 59,
                  "end": 60,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 74,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 74,
                  "decorators": [],
                  "name": "TT",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 81,
                "end": 86
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 78,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 29,
          "end": 36,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 30,
              "end": 31,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 33,
              "end": 35,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 33,
                "end": 35,
                "decorators": [],
                "name": "TT",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 274,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 272,
        "end": 274,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 115,
        "decorators": [],
        "name": "select",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 221,
          "end": 232,
          "decorators": [],
          "name": "property",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 229,
            "end": 232,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 231,
              "end": 232,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 234,
          "end": 247,
          "decorators": [],
          "name": "list",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 238,
            "end": 247,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 240,
              "end": 247,
              "elementType": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 245,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 245,
                  "decorators": [],
                  "name": "TList",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 249,
          "end": 270,
          "decorators": [],
          "name": "valueProp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 258,
            "end": 270,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 260,
              "end": 270,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 260,
                "end": 270,
                "decorators": [],
                "name": "TValueProp",
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
        "start": 115,
        "end": 220,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 144,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 129,
              "end": 144,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 129,
                  "end": 135
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 138,
                  "end": 144
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 168,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 162,
              "end": 168
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 153,
              "decorators": [],
              "name": "TList",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 172,
            "end": 218,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 191,
              "end": 218,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 208,
                "end": 218,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 209,
                    "end": 214,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 214,
                      "decorators": [],
                      "name": "TList",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 216,
                    "end": 217,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 217,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 208,
                "decorators": [],
                "name": "FilterPropsByType",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 172,
              "end": 182,
              "decorators": [],
              "name": "TValueProp",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 276,
      "end": 379,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 283,
        "end": 379,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 347,
          "end": 379,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 351,
              "end": 377,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 351,
                "end": 376,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 361,
                    "end": 366,
                    "decorators": [],
                    "name": "tipos",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 368,
                    "end": 375,
                    "raw": "\"value\"",
                    "value": "value"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 357,
                  "decorators": [],
                  "name": "select",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 292,
          "end": 296,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 316,
            "end": 321,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 319,
                "end": 321,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 321,
                  "decorators": [],
                  "name": "XX",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 323,
            "end": 345,
            "decorators": [],
            "name": "tipos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 328,
              "end": 345,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 330,
                "end": 345,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 330,
                  "end": 343,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 332,
                      "end": 341,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 337,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 337,
                        "end": 341,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 339,
                          "end": 341,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 341,
                            "decorators": [],
                            "name": "XX",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 296,
          "end": 315,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 297,
              "end": 314,
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "start": 308,
                "end": 314
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 297,
                "end": 299,
                "decorators": [],
                "name": "XX",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 381,
      "end": 477,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 416,
        "decorators": [],
        "name": "onlyNullablePlease",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 460,
          "end": 468,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 465,
            "end": 468,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 467,
              "end": 468,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 470,
        "end": 476,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 472,
          "end": 476
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 416,
        "end": 456,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 417,
            "end": 455,
            "const": false,
            "constraint": {
              "type": "TSConditionalType",
              "start": 427,
              "end": 455,
              "checkType": {
                "type": "TSNullKeyword",
                "start": 427,
                "end": 431
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 440,
                "end": 441,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 441,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 450,
                "end": 455
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "start": 444,
                "end": 447
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
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
      "type": "TSDeclareFunction",
      "start": 479,
      "end": 580,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 496,
        "end": 515,
        "decorators": [],
        "name": "onlyNullablePlease2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 564,
          "end": 572,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 569,
            "end": 572,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 571,
              "end": 572,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 573,
        "end": 579,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 575,
          "end": 579
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 515,
        "end": 563,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 519,
            "end": 561,
            "const": false,
            "constraint": {
              "type": "TSConditionalType",
              "start": 529,
              "end": 561,
              "checkType": {
                "type": "TSTupleType",
                "start": 529,
                "end": 535,
                "elementTypes": [
                  {
                    "type": "TSNullKeyword",
                    "start": 530,
                    "end": 534
                  }
                ]
              },
              "extendsType": {
                "type": "TSTupleType",
                "start": 544,
                "end": 547,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 545,
                    "end": 546,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 545,
                      "end": 546,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 556,
                "end": 561
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "start": 550,
                "end": 553
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
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
      "start": 582,
      "end": 611,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 594,
          "end": 610,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 610,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 595,
              "end": 610,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 597,
                "end": 610,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 597,
                    "end": 603
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 606,
                    "end": 610
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 612,
      "end": 634,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 612,
        "end": 633,
        "arguments": [
          {
            "type": "Identifier",
            "start": 631,
            "end": 632,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 612,
          "end": 630,
          "decorators": [],
          "name": "onlyNullablePlease",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 656,
      "end": 679,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 656,
        "end": 678,
        "arguments": [
          {
            "type": "Identifier",
            "start": 676,
            "end": 677,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 656,
          "end": 675,
          "decorators": [],
          "name": "onlyNullablePlease2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 702,
      "end": 724,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 714,
          "end": 723,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 714,
            "end": 723,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 715,
              "end": 723,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 717,
                "end": 723
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 725,
      "end": 747,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 725,
        "end": 746,
        "arguments": [
          {
            "type": "Identifier",
            "start": 744,
            "end": 745,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 725,
          "end": 743,
          "decorators": [],
          "name": "onlyNullablePlease",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 769,
      "end": 792,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 769,
        "end": 791,
        "arguments": [
          {
            "type": "Identifier",
            "start": 789,
            "end": 790,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 769,
          "end": 788,
          "decorators": [],
          "name": "onlyNullablePlease2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 815,
      "end": 971,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 835,
        "end": 971,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 839,
            "end": 888,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 843,
                "end": 887,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 843,
                  "end": 854,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 844,
                    "end": 854,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 846,
                      "end": 854,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 846,
                          "end": 847,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 846,
                            "end": 847,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 850,
                          "end": 854
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 857,
                  "end": 887,
                  "alternate": {
                    "type": "Identifier",
                    "start": 886,
                    "end": 887,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 879,
                    "end": 883,
                    "raw": "null",
                    "value": null
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 857,
                    "end": 876,
                    "operator": ">",
                    "left": {
                      "type": "CallExpression",
                      "start": 857,
                      "end": 870,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 857,
                        "end": 868,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 857,
                          "end": 861,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 862,
                          "end": 868,
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 873,
                      "end": 876,
                      "raw": "0.5",
                      "value": 0.5
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 891,
            "end": 913,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 891,
              "end": 912,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 910,
                  "end": 911,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 891,
                "end": 909,
                "decorators": [],
                "name": "onlyNullablePlease",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 931,
            "end": 954,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 931,
              "end": 953,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 951,
                  "end": 952,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 931,
                "end": 950,
                "decorators": [],
                "name": "onlyNullablePlease2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 824,
        "end": 825,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 829,
          "end": 833,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 830,
            "end": 833,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 832,
              "end": 833,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 832,
                "end": 833,
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
        "start": 825,
        "end": 828,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 826,
            "end": 827,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 826,
              "end": 827,
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
      "start": 973,
      "end": 1096,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1050,
        "end": 1096,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1054,
            "end": 1062,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1054,
              "end": 1061,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1054,
                "end": 1056,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1059,
                "end": 1061,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1071,
            "end": 1079,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1071,
              "end": 1078,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1071,
                "end": 1073,
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1076,
                "end": 1078,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 982,
        "end": 984,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 988,
          "end": 1006,
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 990,
            "end": 1006,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 992,
              "end": 1006,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 994,
                  "end": 999,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 994,
                    "end": 995,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 995,
                    "end": 998,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 997,
                      "end": 998,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 997,
                        "end": 998,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1000,
                  "end": 1004,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1000,
                    "end": 1001,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1001,
                    "end": 1004,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1003,
                      "end": 1004,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1003,
                        "end": 1004,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1008,
          "end": 1048,
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1010,
            "end": 1048,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 1012,
              "end": 1048,
              "checkType": {
                "type": "TSTypeReference",
                "start": 1012,
                "end": 1013,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1012,
                  "end": 1013,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1022,
                "end": 1023,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1023,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1043,
                "end": 1048
              },
              "trueType": {
                "type": "TSTypeLiteral",
                "start": 1026,
                "end": 1040,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1028,
                    "end": 1033,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1028,
                      "end": 1029,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1029,
                      "end": 1032,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1031,
                        "end": 1032,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1031,
                          "end": 1032,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1034,
                    "end": 1038,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1034,
                      "end": 1035,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1035,
                      "end": 1038,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1037,
                        "end": 1038,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1037,
                          "end": 1038,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 984,
        "end": 987,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 985,
            "end": 986,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 985,
              "end": 986,
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
      "type": "TSTypeAliasDeclaration",
      "start": 1098,
      "end": 1142,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1103,
        "end": 1106,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1112,
        "end": 1141,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1112,
          "end": 1113,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1112,
            "end": 1113,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 1122,
          "end": 1126,
          "literal": {
            "type": "Literal",
            "start": 1122,
            "end": 1126,
            "raw": "true",
            "value": true
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 1138,
          "end": 1141,
          "literal": {
            "type": "Literal",
            "start": 1138,
            "end": 1141,
            "raw": "\"a\"",
            "value": "a"
          }
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 1129,
          "end": 1135
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1106,
        "end": 1109,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1107,
            "end": 1108,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1107,
              "end": 1108,
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
      "start": 1144,
      "end": 1251,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1183,
        "end": 1251,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1187,
            "end": 1195,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1187,
              "end": 1194,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1187,
                "end": 1188,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1191,
                "end": 1194,
                "raw": "\"a\"",
                "value": "a"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1234,
            "end": 1240,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1234,
              "end": 1239,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1234,
                "end": 1235,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1238,
                "end": 1239,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1153,
        "end": 1157,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1161,
          "end": 1170,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1162,
            "end": 1170,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1164,
              "end": 1170,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1167,
                "end": 1170,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1168,
                    "end": 1169,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1168,
                      "end": 1169,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1164,
                "end": 1167,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1172,
          "end": 1181,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1173,
            "end": 1181,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1175,
              "end": 1181
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1157,
        "end": 1160,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1158,
            "end": 1159,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1158,
              "end": 1159,
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
      "type": "TSTypeAliasDeclaration",
      "start": 1263,
      "end": 1342,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1268,
        "end": 1280,
        "decorators": [],
        "name": "Distributive",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1286,
        "end": 1341,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1286,
          "end": 1287,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1286,
            "end": 1287,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 1296,
          "end": 1309,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1298,
              "end": 1307,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1298,
                "end": 1299,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1299,
                "end": 1307,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1301,
                  "end": 1307
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 1328,
          "end": 1341,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1330,
              "end": 1339,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1330,
                "end": 1331,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1331,
                "end": 1339,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1333,
                  "end": 1339
                }
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 1312,
          "end": 1325,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1314,
              "end": 1323,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1314,
                "end": 1315,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1315,
                "end": 1323,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1317,
                  "end": 1323
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1280,
        "end": 1283,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1281,
            "end": 1282,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1281,
              "end": 1282,
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
      "start": 1343,
      "end": 2988,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1392,
        "end": 2988,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1396,
            "end": 1421,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1402,
                "end": 1420,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1402,
                  "end": 1403,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1406,
                  "end": 1420,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1408,
                      "end": 1412,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1408,
                        "end": 1409,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1411,
                        "end": 1412,
                        "raw": "1",
                        "value": 1
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1414,
                      "end": 1418,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1414,
                        "end": 1415,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1417,
                        "end": 1418,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1424,
            "end": 1518,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1430,
                "end": 1517,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1430,
                  "end": 1504,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1431,
                    "end": 1504,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 1433,
                      "end": 1504,
                      "checkType": {
                        "type": "TSTupleType",
                        "start": 1433,
                        "end": 1436,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 1434,
                            "end": 1435,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1434,
                              "end": 1435,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "start": 1445,
                        "end": 1453,
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1446,
                            "end": 1452
                          }
                        ]
                      },
                      "falseType": {
                        "type": "TSTypeLiteral",
                        "start": 1480,
                        "end": 1504,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1482,
                            "end": 1492,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1482,
                              "end": 1483,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1483,
                              "end": 1491,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1485,
                                "end": 1491
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1493,
                            "end": 1502,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1493,
                              "end": 1494,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1494,
                              "end": 1502,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1496,
                                "end": 1502
                              }
                            }
                          }
                        ]
                      },
                      "trueType": {
                        "type": "TSTypeLiteral",
                        "start": 1460,
                        "end": 1473,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1462,
                            "end": 1471,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1462,
                              "end": 1463,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1463,
                              "end": 1471,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1465,
                                "end": 1471
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "start": 1507,
                  "end": 1517,
                  "expression": {
                    "type": "Identifier",
                    "start": 1507,
                    "end": 1516,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1542,
            "end": 1609,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1548,
                "end": 1608,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1548,
                  "end": 1604,
                  "decorators": [],
                  "name": "o1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1550,
                    "end": 1604,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 1552,
                      "end": 1604,
                      "checkType": {
                        "type": "TSTupleType",
                        "start": 1552,
                        "end": 1555,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 1553,
                            "end": 1554,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1553,
                              "end": 1554,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "start": 1564,
                        "end": 1572,
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1565,
                            "end": 1571
                          }
                        ]
                      },
                      "falseType": {
                        "type": "TSTypeLiteral",
                        "start": 1591,
                        "end": 1604,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1593,
                            "end": 1602,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1593,
                              "end": 1594,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1594,
                              "end": 1602,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1596,
                                "end": 1602
                              }
                            }
                          }
                        ]
                      },
                      "trueType": {
                        "type": "TSTypeLiteral",
                        "start": 1575,
                        "end": 1588,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1577,
                            "end": 1586,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1577,
                              "end": 1578,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1578,
                              "end": 1586,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1580,
                                "end": 1586
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1607,
                  "end": 1608,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1684,
            "end": 1841,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1690,
                "end": 1840,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1690,
                  "end": 1836,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1692,
                    "end": 1836,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 1694,
                      "end": 1836,
                      "checkType": {
                        "type": "TSTupleType",
                        "start": 1694,
                        "end": 1697,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 1695,
                            "end": 1696,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1695,
                              "end": 1696,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "start": 1706,
                        "end": 1714,
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1707,
                            "end": 1713
                          }
                        ]
                      },
                      "falseType": {
                        "type": "TSConditionalType",
                        "start": 1783,
                        "end": 1835,
                        "checkType": {
                          "type": "TSTupleType",
                          "start": 1783,
                          "end": 1786,
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "start": 1784,
                              "end": 1785,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1784,
                                "end": 1785,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "extendsType": {
                          "type": "TSTupleType",
                          "start": 1795,
                          "end": 1803,
                          "elementTypes": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1796,
                              "end": 1802
                            }
                          ]
                        },
                        "falseType": {
                          "type": "TSTypeLiteral",
                          "start": 1822,
                          "end": 1835,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1824,
                              "end": 1833,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1824,
                                "end": 1825,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1825,
                                "end": 1833,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1827,
                                  "end": 1833
                                }
                              }
                            }
                          ]
                        },
                        "trueType": {
                          "type": "TSTypeLiteral",
                          "start": 1806,
                          "end": 1819,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1808,
                              "end": 1817,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1808,
                                "end": 1809,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1809,
                                "end": 1817,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1811,
                                  "end": 1817
                                }
                              }
                            }
                          ]
                        }
                      },
                      "trueType": {
                        "type": "TSConditionalType",
                        "start": 1722,
                        "end": 1774,
                        "checkType": {
                          "type": "TSTupleType",
                          "start": 1722,
                          "end": 1725,
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "start": 1723,
                              "end": 1724,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1723,
                                "end": 1724,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "extendsType": {
                          "type": "TSTupleType",
                          "start": 1734,
                          "end": 1742,
                          "elementTypes": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1735,
                              "end": 1741
                            }
                          ]
                        },
                        "falseType": {
                          "type": "TSTypeLiteral",
                          "start": 1761,
                          "end": 1774,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1763,
                              "end": 1772,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1763,
                                "end": 1764,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1764,
                                "end": 1772,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1766,
                                  "end": 1772
                                }
                              }
                            }
                          ]
                        },
                        "trueType": {
                          "type": "TSTypeLiteral",
                          "start": 1745,
                          "end": 1758,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1747,
                              "end": 1756,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1747,
                                "end": 1748,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1748,
                                "end": 1756,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1750,
                                  "end": 1756
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1839,
                  "end": 1840,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1880,
            "end": 1938,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1886,
                "end": 1937,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1886,
                  "end": 1933,
                  "decorators": [],
                  "name": "o2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1888,
                    "end": 1933,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 1890,
                      "end": 1933,
                      "checkType": {
                        "type": "TSTupleType",
                        "start": 1890,
                        "end": 1893,
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "start": 1891,
                            "end": 1892,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1891,
                              "end": 1892,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "start": 1902,
                        "end": 1913,
                        "elementTypes": [
                          {
                            "type": "TSTupleType",
                            "start": 1903,
                            "end": 1912,
                            "elementTypes": [
                              {
                                "type": "TSInferType",
                                "start": 1904,
                                "end": 1911,
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "start": 1910,
                                  "end": 1911,
                                  "const": false,
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1910,
                                    "end": 1911,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "out": false
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "falseType": {
                        "type": "TSTypeLiteral",
                        "start": 1920,
                        "end": 1933,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1922,
                            "end": 1931,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1922,
                              "end": 1923,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1923,
                              "end": 1931,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1925,
                                "end": 1931
                              }
                            }
                          }
                        ]
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "start": 1916,
                        "end": 1917,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1916,
                          "end": 1917,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1936,
                  "end": 1937,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2499,
            "end": 2529,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2505,
                "end": 2528,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2505,
                  "end": 2524,
                  "decorators": [],
                  "name": "o3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2507,
                    "end": 2524,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2509,
                      "end": 2524,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2521,
                        "end": 2524,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2522,
                            "end": 2523,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2522,
                              "end": 2523,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 2509,
                        "end": 2521,
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2527,
                  "end": 2528,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2608,
            "end": 2647,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2614,
                "end": 2646,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2614,
                  "end": 2642,
                  "decorators": [],
                  "name": "o4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2616,
                    "end": 2642,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2618,
                      "end": 2642,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2630,
                        "end": 2642,
                        "params": [
                          {
                            "type": "TSIntersectionType",
                            "start": 2631,
                            "end": 2641,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 2631,
                                "end": 2632,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2631,
                                  "end": 2632,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 2635,
                                "end": 2641
                              }
                            ]
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 2618,
                        "end": 2630,
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2645,
                  "end": 2646,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2713,
            "end": 2750,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2719,
                "end": 2749,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2719,
                  "end": 2745,
                  "decorators": [],
                  "name": "o5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2721,
                    "end": 2745,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2723,
                      "end": 2745,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2735,
                        "end": 2745,
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 2736,
                            "end": 2744,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 2738,
                                "end": 2742,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 2738,
                                  "end": 2739,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2739,
                                  "end": 2742,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2741,
                                    "end": 2742,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2741,
                                      "end": 2742,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 2723,
                        "end": 2735,
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2748,
                  "end": 2749,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2914,
            "end": 2986,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2920,
                "end": 2985,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2920,
                  "end": 2981,
                  "decorators": [],
                  "name": "o6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2922,
                    "end": 2981,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2924,
                      "end": 2981,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2936,
                        "end": 2981,
                        "params": [
                          {
                            "type": "TSConditionalType",
                            "start": 2937,
                            "end": 2980,
                            "checkType": {
                              "type": "TSTupleType",
                              "start": 2937,
                              "end": 2940,
                              "elementTypes": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 2938,
                                  "end": 2939,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2938,
                                    "end": 2939,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "extendsType": {
                              "type": "TSTupleType",
                              "start": 2949,
                              "end": 2956,
                              "elementTypes": [
                                {
                                  "type": "TSNeverKeyword",
                                  "start": 2950,
                                  "end": 2955
                                }
                              ]
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 2975,
                              "end": 2980
                            },
                            "trueType": {
                              "type": "TSTypeLiteral",
                              "start": 2959,
                              "end": 2972,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 2961,
                                  "end": 2970,
                                  "accessibility": null,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 2961,
                                    "end": 2962,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2962,
                                    "end": 2970,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 2964,
                                      "end": 2970
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 2924,
                        "end": 2936,
                        "decorators": [],
                        "name": "Distributive",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 2984,
                  "end": 2985,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1352,
        "end": 1386,
        "decorators": [],
        "name": "testAssignabilityToConditionalType",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1386,
        "end": 1389,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1387,
            "end": 1388,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1387,
              "end": 1388,
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
      "type": "TSTypeAliasDeclaration",
      "start": 2990,
      "end": 3025,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2995,
        "end": 3002,
        "decorators": [],
        "name": "Wrapped",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3008,
        "end": 3024,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3010,
            "end": 3022,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3010,
              "end": 3019,
              "decorators": [],
              "name": "___secret",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3019,
              "end": 3022,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3021,
                "end": 3022,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3021,
                  "end": 3022,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3002,
        "end": 3005,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3003,
            "end": 3004,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3003,
              "end": 3004,
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
      "type": "TSTypeAliasDeclaration",
      "start": 3026,
      "end": 3078,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3031,
        "end": 3037,
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3043,
        "end": 3077,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3043,
          "end": 3044,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3043,
            "end": 3044,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3053,
          "end": 3069,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3060,
            "end": 3069,
            "params": [
              {
                "type": "TSInferType",
                "start": 3061,
                "end": 3068,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3067,
                  "end": 3068,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3067,
                    "end": 3068,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3053,
            "end": 3060,
            "decorators": [],
            "name": "Wrapped",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3076,
          "end": 3077,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3076,
            "end": 3077,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3072,
          "end": 3073,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3072,
            "end": 3073,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3037,
        "end": 3040,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3038,
            "end": 3039,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3038,
              "end": 3039,
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
      "type": "TSDeclareFunction",
      "start": 3080,
      "end": 3182,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3097,
        "end": 3100,
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3126,
          "end": 3132,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3129,
            "end": 3132,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3131,
              "end": 3132,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3131,
                "end": 3132,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3136,
          "end": 3142,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3139,
            "end": 3142,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3141,
              "end": 3142,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3141,
                "end": 3142,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3146,
          "end": 3165,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3151,
            "end": 3165,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3153,
              "end": 3165,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3159,
                "end": 3165,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 3160,
                    "end": 3164,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 3162,
                      "end": 3163,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3162,
                        "end": 3163,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 3160,
                      "end": 3161,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3160,
                        "end": 3161,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3153,
                "end": 3159,
                "decorators": [],
                "name": "Unwrap",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3167,
        "end": 3181,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3169,
          "end": 3181,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3175,
            "end": 3181,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 3176,
                "end": 3180,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3178,
                  "end": 3179,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3178,
                    "end": 3179,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3176,
                  "end": 3177,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3176,
                    "end": 3177,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3169,
            "end": 3175,
            "decorators": [],
            "name": "Unwrap",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3100,
        "end": 3122,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3101,
            "end": 3102,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3101,
              "end": 3102,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3104,
            "end": 3121,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3114,
              "end": 3121,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3120,
                "end": 3121,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3120,
                  "end": 3121,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3104,
              "end": 3105,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 3184,
      "end": 3289,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3195,
        "end": 3289,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3199,
            "end": 3222,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 3199,
              "end": 3203,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3204,
              "end": 3221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3206,
                "end": 3221,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3213,
                  "end": 3221,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3214,
                      "end": 3220
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3206,
                  "end": 3213,
                  "decorators": [],
                  "name": "Wrapped",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 3226,
            "end": 3287,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3226,
              "end": 3232,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3232,
              "end": 3287,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3235,
                "end": 3287,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3241,
                    "end": 3265,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3241,
                      "end": 3264,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 3245,
                          "end": 3249
                        },
                        {
                          "type": "Literal",
                          "start": 3251,
                          "end": 3257,
                          "raw": "\"prop\"",
                          "value": "prop"
                        },
                        {
                          "type": "Literal",
                          "start": 3259,
                          "end": 3263,
                          "raw": "\"hi\"",
                          "value": "hi"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 3241,
                        "end": 3244,
                        "decorators": [],
                        "name": "set",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 3190,
        "end": 3194,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3291,
      "end": 3321,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 3291,
        "end": 3320,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 3295,
            "end": 3305,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 3299,
              "end": 3303,
              "decorators": [],
              "name": "Foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "Literal",
            "start": 3307,
            "end": 3313,
            "raw": "\"prop\"",
            "value": "prop"
          },
          {
            "type": "Literal",
            "start": 3315,
            "end": 3319,
            "raw": "\"hi\"",
            "value": "hi"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3291,
          "end": 3294,
          "decorators": [],
          "name": "set",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3341,
      "end": 3426,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3346,
        "end": 3364,
        "decorators": [],
        "name": "InferBecauseWhyNot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3370,
        "end": 3425,
        "checkType": {
          "type": "TSTupleType",
          "start": 3370,
          "end": 3373,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 3371,
              "end": 3372,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3371,
                "end": 3372,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 3382,
          "end": 3404,
          "elementTypes": [
            {
              "type": "TSFunctionType",
              "start": 3383,
              "end": 3403,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3384,
                  "end": 3395,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3385,
                    "end": 3395,
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "start": 3387,
                      "end": 3395,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 3393,
                        "end": 3395,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 3393,
                          "end": 3395,
                          "decorators": [],
                          "name": "P1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3397,
                "end": 3403,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3400,
                  "end": 3403
                }
              },
              "typeParameters": null
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3420,
          "end": 3425
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 3409,
          "end": 3415,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 3409,
              "end": 3411,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3409,
                "end": 3411,
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3414,
              "end": 3415,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3414,
                "end": 3415,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3364,
        "end": 3367,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3365,
            "end": 3366,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3365,
              "end": 3366,
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
      "start": 3428,
      "end": 3513,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3498,
        "end": 3513,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3502,
            "end": 3511,
            "argument": {
              "type": "Identifier",
              "start": 3509,
              "end": 3510,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3437,
        "end": 3439,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3469,
          "end": 3473,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3470,
            "end": 3473,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3472,
              "end": 3473,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3472,
                "end": 3473,
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3474,
        "end": 3497,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3476,
          "end": 3497,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3494,
            "end": 3497,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3495,
                "end": 3496,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3495,
                  "end": 3496,
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3476,
            "end": 3494,
            "decorators": [],
            "name": "InferBecauseWhyNot",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3439,
        "end": 3468,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3440,
            "end": 3467,
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "start": 3450,
              "end": 3467,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3451,
                  "end": 3459,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3454,
                    "end": 3459,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3456,
                      "end": 3459
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3461,
                "end": 3467,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3464,
                  "end": 3467
                }
              },
              "typeParameters": null
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3440,
              "end": 3441,
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3515,
      "end": 3608,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3520,
        "end": 3550,
        "decorators": [],
        "name": "InferBecauseWhyNotDistributive",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3556,
        "end": 3607,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3556,
          "end": 3557,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3556,
            "end": 3557,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 3566,
          "end": 3586,
          "params": [
            {
              "type": "Identifier",
              "start": 3567,
              "end": 3578,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3568,
                "end": 3578,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 3570,
                  "end": 3578,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 3576,
                    "end": 3578,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 3576,
                      "end": 3578,
                      "decorators": [],
                      "name": "P1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 3580,
            "end": 3586,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3583,
              "end": 3586
            }
          },
          "typeParameters": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3602,
          "end": 3607
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 3591,
          "end": 3597,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 3591,
              "end": 3593,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3591,
                "end": 3593,
                "decorators": [],
                "name": "P1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3596,
              "end": 3597,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3596,
                "end": 3597,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3550,
        "end": 3553,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3551,
            "end": 3552,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3551,
              "end": 3552,
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
      "start": 3610,
      "end": 3726,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3696,
        "end": 3726,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3700,
            "end": 3709,
            "argument": {
              "type": "Identifier",
              "start": 3707,
              "end": 3708,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3619,
        "end": 3621,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3654,
          "end": 3658,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3655,
            "end": 3658,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3657,
              "end": 3658,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3657,
                "end": 3658,
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3660,
        "end": 3695,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3662,
          "end": 3695,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3692,
            "end": 3695,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3693,
                "end": 3694,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3693,
                  "end": 3694,
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3662,
            "end": 3692,
            "decorators": [],
            "name": "InferBecauseWhyNotDistributive",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3621,
        "end": 3650,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3622,
            "end": 3649,
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "start": 3632,
              "end": 3649,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3633,
                  "end": 3641,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3636,
                    "end": 3641,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3638,
                      "end": 3641
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3643,
                "end": 3649,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3646,
                  "end": 3649
                }
              },
              "typeParameters": null
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3622,
              "end": 3623,
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
