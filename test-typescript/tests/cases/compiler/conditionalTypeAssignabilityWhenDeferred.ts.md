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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 98,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 29,
          "name": "FilterPropsByType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
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
              "start": 33,
              "end": 35,
              "name": {
                "type": "Identifier",
                "start": 33,
                "end": 35,
                "name": "TT",
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
          "type": "TSIndexedAccessType",
          "start": 39,
          "end": 97,
          "objectType": {
            "type": "TSMappedType",
            "start": 39,
            "end": 88,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 44,
              "end": 56,
              "name": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 49,
                "end": 56,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 55,
                  "end": 56,
                  "typeName": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 59,
              "end": 86,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 59,
                "end": 63,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 59,
                  "end": 60,
                  "typeName": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 61,
                  "end": 62,
                  "typeName": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 74,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 74,
                  "name": "TT",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 81,
                "end": 86
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 49,
              "end": 56,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "indexType": {
            "type": "TSTypeOperator",
            "start": 89,
            "end": 96,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 95,
              "end": 96,
              "typeName": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 100,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 115,
        "name": "select",
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
          "start": 221,
          "end": 232,
          "name": "property",
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
        },
        {
          "type": "Identifier",
          "start": 234,
          "end": 247,
          "name": "list",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 245,
                  "name": "TList",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 249,
          "end": 270,
          "name": "valueProp",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 258,
            "end": 270,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 260,
              "end": 270,
              "typeName": {
                "type": "Identifier",
                "start": 260,
                "end": 270,
                "name": "TValueProp",
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
        "start": 272,
        "end": 274,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 220,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 144,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 168,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 153,
              "name": "TList",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 162,
              "end": 168
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 172,
            "end": 218,
            "name": {
              "type": "Identifier",
              "start": 172,
              "end": 182,
              "name": "TValueProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 191,
              "end": 218,
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 208,
                "name": "FilterPropsByType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 208,
                "end": 218,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 209,
                    "end": 214,
                    "typeName": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 214,
                      "name": "TList",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 216,
                    "end": 217,
                    "typeName": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 217,
                      "name": "T",
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
      "type": "ExportNamedDeclaration",
      "start": 276,
      "end": 379,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 283,
        "end": 379,
        "id": {
          "type": "Identifier",
          "start": 292,
          "end": 296,
          "name": "func",
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
            "start": 316,
            "end": 321,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 319,
                "end": 321,
                "typeName": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 321,
                  "name": "XX",
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
            "start": 323,
            "end": 345,
            "name": "tipos",
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 337,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 337,
                        "end": 341,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 339,
                          "end": 341,
                          "typeName": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 341,
                            "name": "XX",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 347,
          "end": 379,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 351,
              "end": 377,
              "expression": {
                "type": "CallExpression",
                "start": 351,
                "end": 376,
                "callee": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 357,
                  "name": "select",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 358,
                    "end": 359,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 361,
                    "end": 366,
                    "name": "tipos",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Literal",
                    "start": 368,
                    "end": 375,
                    "value": "value",
                    "raw": "\"value\""
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
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 296,
          "end": 315,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 297,
              "end": 314,
              "name": {
                "type": "Identifier",
                "start": 297,
                "end": 299,
                "name": "XX",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 308,
                "end": 314
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 381,
      "end": 477,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 416,
        "name": "onlyNullablePlease",
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
          "start": 460,
          "end": 468,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 465,
            "end": 468,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 467,
              "end": 468,
              "typeName": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 416,
        "end": 456,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 417,
            "end": 455,
            "name": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                "typeName": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 441,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "start": 444,
                "end": 447
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 450,
                "end": 455
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 470,
        "end": 476,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 472,
          "end": 476
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 479,
      "end": 580,
      "id": {
        "type": "Identifier",
        "start": 496,
        "end": 515,
        "name": "onlyNullablePlease2",
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
          "start": 564,
          "end": 572,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 569,
            "end": 572,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 571,
              "end": 572,
              "typeName": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 515,
        "end": 563,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 519,
            "end": 561,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 545,
                      "end": 546,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              },
              "trueType": {
                "type": "TSAnyKeyword",
                "start": 550,
                "end": 553
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 556,
                "end": 561
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 573,
        "end": 579,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 575,
          "end": 579
        }
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
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 610,
            "name": "z",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 612,
      "end": 634,
      "expression": {
        "type": "CallExpression",
        "start": 612,
        "end": 633,
        "callee": {
          "type": "Identifier",
          "start": 612,
          "end": 630,
          "name": "onlyNullablePlease",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 631,
            "end": 632,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 656,
      "end": 679,
      "expression": {
        "type": "CallExpression",
        "start": 656,
        "end": 678,
        "callee": {
          "type": "Identifier",
          "start": 656,
          "end": 675,
          "name": "onlyNullablePlease2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 676,
            "end": 677,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 714,
            "end": 723,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 715,
              "end": 723,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 717,
                "end": 723
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 725,
      "end": 747,
      "expression": {
        "type": "CallExpression",
        "start": 725,
        "end": 746,
        "callee": {
          "type": "Identifier",
          "start": 725,
          "end": 743,
          "name": "onlyNullablePlease",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 744,
            "end": 745,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 769,
      "end": 792,
      "expression": {
        "type": "CallExpression",
        "start": 769,
        "end": 791,
        "callee": {
          "type": "Identifier",
          "start": 769,
          "end": 788,
          "name": "onlyNullablePlease2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 789,
            "end": 790,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 815,
      "end": 971,
      "id": {
        "type": "Identifier",
        "start": 824,
        "end": 825,
        "name": "f",
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
          "start": 829,
          "end": 833,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 830,
            "end": 833,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 832,
              "end": 833,
              "typeName": {
                "type": "Identifier",
                "start": 832,
                "end": 833,
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
                "id": {
                  "type": "Identifier",
                  "start": 843,
                  "end": 854,
                  "name": "x",
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 846,
                            "end": 847,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 850,
                          "end": 854
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 857,
                  "end": 887,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 857,
                    "end": 876,
                    "left": {
                      "type": "CallExpression",
                      "start": 857,
                      "end": 870,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 857,
                        "end": 868,
                        "object": {
                          "type": "Identifier",
                          "start": 857,
                          "end": 861,
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 862,
                          "end": 868,
                          "name": "random",
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
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "start": 873,
                      "end": 876,
                      "value": 0.5,
                      "raw": "0.5"
                    }
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 879,
                    "end": 883,
                    "value": null,
                    "raw": "null"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 886,
                    "end": 887,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 891,
            "end": 913,
            "expression": {
              "type": "CallExpression",
              "start": 891,
              "end": 912,
              "callee": {
                "type": "Identifier",
                "start": 891,
                "end": 909,
                "name": "onlyNullablePlease",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 910,
                  "end": 911,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 931,
            "end": 954,
            "expression": {
              "type": "CallExpression",
              "start": 931,
              "end": 953,
              "callee": {
                "type": "Identifier",
                "start": 931,
                "end": 950,
                "name": "onlyNullablePlease2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 951,
                  "end": 952,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 825,
        "end": 828,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 826,
            "end": 827,
            "name": {
              "type": "Identifier",
              "start": 826,
              "end": 827,
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
      "type": "FunctionDeclaration",
      "start": 973,
      "end": 1096,
      "id": {
        "type": "Identifier",
        "start": 982,
        "end": 984,
        "name": "f2",
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
          "start": 988,
          "end": 1006,
          "name": "t1",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 994,
                    "end": 995,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 995,
                    "end": 998,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 997,
                      "end": 998,
                      "typeName": {
                        "type": "Identifier",
                        "start": 997,
                        "end": 998,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1000,
                  "end": 1004,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1000,
                    "end": 1001,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1001,
                    "end": 1004,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1003,
                      "end": 1004,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1003,
                        "end": 1004,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1008,
          "end": 1048,
          "name": "t2",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 1012,
                  "end": 1013,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 1022,
                "end": 1023,
                "typeName": {
                  "type": "Identifier",
                  "start": 1022,
                  "end": 1023,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1028,
                      "end": 1029,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1029,
                      "end": 1032,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1031,
                        "end": 1032,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1031,
                          "end": 1032,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1034,
                    "end": 1038,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1034,
                      "end": 1035,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1035,
                      "end": 1038,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1037,
                        "end": 1038,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1037,
                          "end": 1038,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1043,
                "end": 1048
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1050,
        "end": 1096,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1054,
            "end": 1062,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1054,
              "end": 1061,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1054,
                "end": 1056,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1059,
                "end": 1061,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1071,
            "end": 1079,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1071,
              "end": 1078,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1071,
                "end": 1073,
                "name": "t2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1076,
                "end": 1078,
                "name": "t1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 984,
        "end": 987,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 985,
            "end": 986,
            "name": {
              "type": "Identifier",
              "start": 985,
              "end": 986,
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
      "type": "TSTypeAliasDeclaration",
      "start": 1098,
      "end": 1142,
      "id": {
        "type": "Identifier",
        "start": 1103,
        "end": 1106,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1107,
              "end": 1108,
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
        "type": "TSConditionalType",
        "start": 1112,
        "end": 1141,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1112,
          "end": 1113,
          "typeName": {
            "type": "Identifier",
            "start": 1112,
            "end": 1113,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 1122,
          "end": 1126,
          "literal": {
            "type": "Literal",
            "start": 1122,
            "end": 1126,
            "value": true,
            "raw": "true"
          }
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 1129,
          "end": 1135
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 1138,
          "end": 1141,
          "literal": {
            "type": "Literal",
            "start": 1138,
            "end": 1141,
            "value": "a",
            "raw": "\"a\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1144,
      "end": 1251,
      "id": {
        "type": "Identifier",
        "start": 1153,
        "end": 1157,
        "name": "test",
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
          "start": 1161,
          "end": 1170,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1162,
            "end": 1170,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1164,
              "end": 1170,
              "typeName": {
                "type": "Identifier",
                "start": 1164,
                "end": 1167,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1167,
                "end": 1170,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1168,
                    "end": 1169,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1168,
                      "end": 1169,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1172,
          "end": 1181,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1173,
            "end": 1181,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1175,
              "end": 1181
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1183,
        "end": 1251,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1187,
            "end": 1195,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1187,
              "end": 1194,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1187,
                "end": 1188,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1191,
                "end": 1194,
                "value": "a",
                "raw": "\"a\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1234,
            "end": 1240,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1234,
              "end": 1239,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1234,
                "end": 1235,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1238,
                "end": 1239,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1157,
        "end": 1160,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1158,
            "end": 1159,
            "name": {
              "type": "Identifier",
              "start": 1158,
              "end": 1159,
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
      "type": "TSTypeAliasDeclaration",
      "start": 1263,
      "end": 1342,
      "id": {
        "type": "Identifier",
        "start": 1268,
        "end": 1280,
        "name": "Distributive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1281,
              "end": 1282,
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
        "type": "TSConditionalType",
        "start": 1286,
        "end": 1341,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1286,
          "end": 1287,
          "typeName": {
            "type": "Identifier",
            "start": 1286,
            "end": 1287,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1298,
                "end": 1299,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1299,
                "end": 1307,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1301,
                  "end": 1307
                }
              },
              "accessibility": null,
              "static": false
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1314,
                "end": 1315,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1315,
                "end": 1323,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1317,
                  "end": 1323
                }
              },
              "accessibility": null,
              "static": false
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1330,
                "end": 1331,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1331,
                "end": 1339,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1333,
                  "end": 1339
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1343,
      "end": 2988,
      "id": {
        "type": "Identifier",
        "start": 1352,
        "end": 1386,
        "name": "testAssignabilityToConditionalType",
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
                "id": {
                  "type": "Identifier",
                  "start": 1402,
                  "end": 1403,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1408,
                        "end": 1409,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1411,
                        "end": 1412,
                        "value": 1,
                        "raw": "1"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1414,
                      "end": 1418,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1414,
                        "end": 1415,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 1417,
                        "end": 1418,
                        "value": 2,
                        "raw": "2"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1430,
                  "end": 1504,
                  "name": "x",
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 1434,
                              "end": 1435,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                      "trueType": {
                        "type": "TSTypeLiteral",
                        "start": 1460,
                        "end": 1473,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1462,
                            "end": 1471,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1462,
                              "end": 1463,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1463,
                              "end": 1471,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1465,
                                "end": 1471
                              }
                            },
                            "accessibility": null,
                            "static": false
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1482,
                              "end": 1483,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1483,
                              "end": 1491,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1485,
                                "end": 1491
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 1493,
                            "end": 1502,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1493,
                              "end": 1494,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1494,
                              "end": 1502,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1496,
                                "end": 1502
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "start": 1507,
                  "end": 1517,
                  "expression": {
                    "type": "Identifier",
                    "start": 1507,
                    "end": 1516,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1548,
                  "end": 1604,
                  "name": "o1",
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 1553,
                              "end": 1554,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                      "trueType": {
                        "type": "TSTypeLiteral",
                        "start": 1575,
                        "end": 1588,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1577,
                            "end": 1586,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1577,
                              "end": 1578,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1578,
                              "end": 1586,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1580,
                                "end": 1586
                              }
                            },
                            "accessibility": null,
                            "static": false
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1593,
                              "end": 1594,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1594,
                              "end": 1602,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1596,
                                "end": 1602
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1607,
                  "end": 1608,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1690,
                  "end": 1836,
                  "name": "x1",
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 1695,
                              "end": 1696,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 1723,
                                "end": 1724,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                        "trueType": {
                          "type": "TSTypeLiteral",
                          "start": 1745,
                          "end": 1758,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1747,
                              "end": 1756,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1747,
                                "end": 1748,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1748,
                                "end": 1756,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1750,
                                  "end": 1756
                                }
                              },
                              "accessibility": null,
                              "static": false
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1763,
                                "end": 1764,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1764,
                                "end": 1772,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1766,
                                  "end": 1772
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 1784,
                                "end": 1785,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
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
                        "trueType": {
                          "type": "TSTypeLiteral",
                          "start": 1806,
                          "end": 1819,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 1808,
                              "end": 1817,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1808,
                                "end": 1809,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1809,
                                "end": 1817,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1811,
                                  "end": 1817
                                }
                              },
                              "accessibility": null,
                              "static": false
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
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 1824,
                                "end": 1825,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1825,
                                "end": 1833,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1827,
                                  "end": 1833
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1839,
                  "end": 1840,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 1886,
                  "end": 1933,
                  "name": "o2",
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 1891,
                              "end": 1892,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1910,
                                    "end": 1911,
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
                              }
                            ]
                          }
                        ]
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "start": 1916,
                        "end": 1917,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1916,
                          "end": 1917,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1922,
                              "end": 1923,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1923,
                              "end": 1931,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1925,
                                "end": 1931
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1936,
                  "end": 1937,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2505,
                  "end": 2524,
                  "name": "o3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2507,
                    "end": 2524,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2509,
                      "end": 2524,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2509,
                        "end": 2521,
                        "name": "Distributive",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2521,
                        "end": 2524,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2522,
                            "end": 2523,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2522,
                              "end": 2523,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 2527,
                  "end": 2528,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2614,
                  "end": 2642,
                  "name": "o4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2616,
                    "end": 2642,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2618,
                      "end": 2642,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2618,
                        "end": 2630,
                        "name": "Distributive",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2631,
                                  "end": 2632,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 2635,
                                "end": 2641
                              }
                            ]
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 2645,
                  "end": 2646,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2719,
                  "end": 2745,
                  "name": "o5",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2721,
                    "end": 2745,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2723,
                      "end": 2745,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2723,
                        "end": 2735,
                        "name": "Distributive",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 2738,
                                  "end": 2739,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 2739,
                                  "end": 2742,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 2741,
                                    "end": 2742,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2741,
                                      "end": 2742,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 2748,
                  "end": 2749,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 2920,
                  "end": 2981,
                  "name": "o6",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2922,
                    "end": 2981,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2924,
                      "end": 2981,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2924,
                        "end": 2936,
                        "name": "Distributive",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 2938,
                                    "end": 2939,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
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
                            "trueType": {
                              "type": "TSTypeLiteral",
                              "start": 2959,
                              "end": 2972,
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "start": 2961,
                                  "end": 2970,
                                  "computed": false,
                                  "optional": false,
                                  "readonly": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 2961,
                                    "end": 2962,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2962,
                                    "end": 2970,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 2964,
                                      "end": 2970
                                    }
                                  },
                                  "accessibility": null,
                                  "static": false
                                }
                              ]
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 2975,
                              "end": 2980
                            }
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 2984,
                  "end": 2985,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1386,
        "end": 1389,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1387,
            "end": 1388,
            "name": {
              "type": "Identifier",
              "start": 1387,
              "end": 1388,
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
      "type": "TSTypeAliasDeclaration",
      "start": 2990,
      "end": 3025,
      "id": {
        "type": "Identifier",
        "start": 2995,
        "end": 3002,
        "name": "Wrapped",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3003,
              "end": 3004,
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
        "type": "TSTypeLiteral",
        "start": 3008,
        "end": 3024,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3010,
            "end": 3022,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3010,
              "end": 3019,
              "name": "___secret",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3019,
              "end": 3022,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3021,
                "end": 3022,
                "typeName": {
                  "type": "Identifier",
                  "start": 3021,
                  "end": 3022,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 3026,
      "end": 3078,
      "id": {
        "type": "Identifier",
        "start": 3031,
        "end": 3037,
        "name": "Unwrap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3038,
              "end": 3039,
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
        "type": "TSConditionalType",
        "start": 3043,
        "end": 3077,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3043,
          "end": 3044,
          "typeName": {
            "type": "Identifier",
            "start": 3043,
            "end": 3044,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3053,
          "end": 3069,
          "typeName": {
            "type": "Identifier",
            "start": 3053,
            "end": 3060,
            "name": "Wrapped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": {
                    "type": "Identifier",
                    "start": 3067,
                    "end": 3068,
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
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3072,
          "end": 3073,
          "typeName": {
            "type": "Identifier",
            "start": 3072,
            "end": 3073,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3076,
          "end": 3077,
          "typeName": {
            "type": "Identifier",
            "start": 3076,
            "end": 3077,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 3080,
      "end": 3182,
      "id": {
        "type": "Identifier",
        "start": 3097,
        "end": 3100,
        "name": "set",
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
          "start": 3126,
          "end": 3132,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3129,
            "end": 3132,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3131,
              "end": 3132,
              "typeName": {
                "type": "Identifier",
                "start": 3131,
                "end": 3132,
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
          "start": 3136,
          "end": 3142,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3139,
            "end": 3142,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3141,
              "end": 3142,
              "typeName": {
                "type": "Identifier",
                "start": 3141,
                "end": 3142,
                "name": "K",
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
          "start": 3146,
          "end": 3165,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3151,
            "end": 3165,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3153,
              "end": 3165,
              "typeName": {
                "type": "Identifier",
                "start": 3153,
                "end": 3159,
                "name": "Unwrap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3159,
                "end": 3165,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 3160,
                    "end": 3164,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 3160,
                      "end": 3161,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3160,
                        "end": 3161,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 3162,
                      "end": 3163,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3162,
                        "end": 3163,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
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
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3100,
        "end": 3122,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3101,
            "end": 3102,
            "name": {
              "type": "Identifier",
              "start": 3101,
              "end": 3102,
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
            "start": 3104,
            "end": 3121,
            "name": {
              "type": "Identifier",
              "start": 3104,
              "end": 3105,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3114,
              "end": 3121,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3120,
                "end": 3121,
                "typeName": {
                  "type": "Identifier",
                  "start": 3120,
                  "end": 3121,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3167,
        "end": 3181,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3169,
          "end": 3181,
          "typeName": {
            "type": "Identifier",
            "start": 3169,
            "end": 3175,
            "name": "Unwrap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3175,
            "end": 3181,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 3176,
                "end": 3180,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3176,
                  "end": 3177,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3176,
                    "end": 3177,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3178,
                  "end": 3179,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3178,
                    "end": 3179,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 3184,
      "end": 3289,
      "id": {
        "type": "Identifier",
        "start": 3190,
        "end": 3194,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 3195,
        "end": 3289,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3199,
            "end": 3222,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3199,
              "end": 3203,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3204,
              "end": 3221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3206,
                "end": 3221,
                "typeName": {
                  "type": "Identifier",
                  "start": 3206,
                  "end": 3213,
                  "name": "Wrapped",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3226,
            "end": 3287,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3226,
              "end": 3232,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 3232,
              "end": 3287,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3235,
                "end": 3287,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3241,
                    "end": 3265,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3241,
                      "end": 3264,
                      "callee": {
                        "type": "Identifier",
                        "start": 3241,
                        "end": 3244,
                        "name": "set",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                          "value": "prop",
                          "raw": "\"prop\""
                        },
                        {
                          "type": "Literal",
                          "start": 3259,
                          "end": 3263,
                          "value": "hi",
                          "raw": "\"hi\""
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
      "type": "ExpressionStatement",
      "start": 3291,
      "end": 3321,
      "expression": {
        "type": "CallExpression",
        "start": 3291,
        "end": 3320,
        "callee": {
          "type": "Identifier",
          "start": 3291,
          "end": 3294,
          "name": "set",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 3295,
            "end": 3305,
            "callee": {
              "type": "Identifier",
              "start": 3299,
              "end": 3303,
              "name": "Foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          {
            "type": "Literal",
            "start": 3307,
            "end": 3313,
            "value": "prop",
            "raw": "\"prop\""
          },
          {
            "type": "Literal",
            "start": 3315,
            "end": 3319,
            "value": "hi",
            "raw": "\"hi\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3341,
      "end": 3426,
      "id": {
        "type": "Identifier",
        "start": 3346,
        "end": 3364,
        "name": "InferBecauseWhyNot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3365,
              "end": 3366,
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
              "typeName": {
                "type": "Identifier",
                "start": 3371,
                "end": 3372,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3384,
                  "end": 3395,
                  "name": "p",
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
                        "name": {
                          "type": "Identifier",
                          "start": 3393,
                          "end": 3395,
                          "name": "P1",
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
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            }
          ]
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
              "typeName": {
                "type": "Identifier",
                "start": 3409,
                "end": 3411,
                "name": "P1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 3414,
              "end": 3415,
              "typeName": {
                "type": "Identifier",
                "start": 3414,
                "end": 3415,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3420,
          "end": 3425
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3428,
      "end": 3513,
      "id": {
        "type": "Identifier",
        "start": 3437,
        "end": 3439,
        "name": "f3",
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
          "start": 3469,
          "end": 3473,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3470,
            "end": 3473,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3472,
              "end": 3473,
              "typeName": {
                "type": "Identifier",
                "start": 3472,
                "end": 3473,
                "name": "Q",
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3439,
        "end": 3468,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3440,
            "end": 3467,
            "name": {
              "type": "Identifier",
              "start": 3440,
              "end": 3441,
              "name": "Q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 3450,
              "end": 3467,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3451,
                  "end": 3459,
                  "name": "arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3454,
                    "end": 3459,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3456,
                      "end": 3459
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3474,
        "end": 3497,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3476,
          "end": 3497,
          "typeName": {
            "type": "Identifier",
            "start": 3476,
            "end": 3494,
            "name": "InferBecauseWhyNot",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3494,
            "end": 3497,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3495,
                "end": 3496,
                "typeName": {
                  "type": "Identifier",
                  "start": 3495,
                  "end": 3496,
                  "name": "Q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3515,
      "end": 3608,
      "id": {
        "type": "Identifier",
        "start": 3520,
        "end": 3550,
        "name": "InferBecauseWhyNotDistributive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 3551,
              "end": 3552,
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
        "type": "TSConditionalType",
        "start": 3556,
        "end": 3607,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3556,
          "end": 3557,
          "typeName": {
            "type": "Identifier",
            "start": 3556,
            "end": 3557,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 3566,
          "end": 3586,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 3567,
              "end": 3578,
              "name": "p",
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
                    "name": {
                      "type": "Identifier",
                      "start": 3576,
                      "end": 3578,
                      "name": "P1",
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
                }
              },
              "decorators": [],
              "optional": false
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
          }
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
              "typeName": {
                "type": "Identifier",
                "start": 3591,
                "end": 3593,
                "name": "P1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 3596,
              "end": 3597,
              "typeName": {
                "type": "Identifier",
                "start": 3596,
                "end": 3597,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3602,
          "end": 3607
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3610,
      "end": 3726,
      "id": {
        "type": "Identifier",
        "start": 3619,
        "end": 3621,
        "name": "f4",
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
          "start": 3654,
          "end": 3658,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3655,
            "end": 3658,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3657,
              "end": 3658,
              "typeName": {
                "type": "Identifier",
                "start": 3657,
                "end": 3658,
                "name": "Q",
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3621,
        "end": 3650,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3622,
            "end": 3649,
            "name": {
              "type": "Identifier",
              "start": 3622,
              "end": 3623,
              "name": "Q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 3632,
              "end": 3649,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3633,
                  "end": 3641,
                  "name": "arg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3636,
                    "end": 3641,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3638,
                      "end": 3641
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3660,
        "end": 3695,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3662,
          "end": 3695,
          "typeName": {
            "type": "Identifier",
            "start": 3662,
            "end": 3692,
            "name": "InferBecauseWhyNotDistributive",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3692,
            "end": 3695,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3693,
                "end": 3694,
                "typeName": {
                  "type": "Identifier",
                  "start": 3693,
                  "end": 3694,
                  "name": "Q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
