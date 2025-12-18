__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMappedType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 17
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Primitive",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 27
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 36,
              "end": 39
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 39
          }
        ],
        "start": 17,
        "end": 40
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "primitive",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 55
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Primitive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 66
                },
                "typeArguments": null,
                "start": 57,
                "end": 66
              },
              "start": 55,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 46,
            "end": 67
          }
        ],
        "start": 43,
        "end": 69
      },
      "declare": false,
      "start": 0,
      "end": 70
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleMapperOld",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 91
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 97
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 106,
                "end": 109
              },
              "start": 106,
              "end": 111
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 111
          }
        ],
        "start": 91,
        "end": 112
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 122
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 137
            },
            "typeArguments": null,
            "start": 132,
            "end": 137
          },
          "start": 126,
          "end": 137
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tuple",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 145
              },
              "typeArguments": null,
              "start": 140,
              "end": 145
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 149
              },
              "typeArguments": null,
              "start": 146,
              "end": 149
            },
            "start": 140,
            "end": 150
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tuple",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 164
              },
              "typeArguments": null,
              "start": 159,
              "end": 164
            },
            "indexType": {
              "type": "TSNumberKeyword",
              "start": 165,
              "end": 171
            },
            "start": 159,
            "end": 172
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyMappedType",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 187
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 193
                    },
                    "typeArguments": null,
                    "start": 188,
                    "end": 193
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 197
                    },
                    "typeArguments": null,
                    "start": 194,
                    "end": 197
                  },
                  "start": 188,
                  "end": 198
                }
              ],
              "start": 187,
              "end": 199
            },
            "start": 175,
            "end": 199
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 202,
            "end": 207
          },
          "start": 140,
          "end": 207
        },
        "optional": false,
        "readonly": null,
        "start": 115,
        "end": 210
      },
      "declare": false,
      "start": 72,
      "end": 211
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMappedTupleOld",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 234
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleMapperOld",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 251
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 253,
                  "end": 259
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 261,
                  "end": 267
                }
              ],
              "start": 252,
              "end": 268
            }
          ],
          "start": 251,
          "end": 269
        },
        "start": 237,
        "end": 269
      },
      "declare": false,
      "start": 213,
      "end": 270
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extractPrimitivesOld",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 357
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 363
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 372,
                "end": 375
              },
              "start": 372,
              "end": 377
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 358,
            "end": 377
          }
        ],
        "start": 357,
        "end": 378
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "mappedTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 382,
            "end": 393
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TupleMapperOld",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 409
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 415
                    },
                    "typeArguments": null,
                    "start": 410,
                    "end": 415
                  }
                ],
                "start": 409,
                "end": 416
              },
              "start": 395,
              "end": 416
            },
            "start": 393,
            "end": 416
          },
          "value": null,
          "start": 379,
          "end": 416
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 424
          },
          "typeArguments": null,
          "start": 419,
          "end": 424
        },
        "start": 417,
        "end": 424
      },
      "body": null,
      "expression": false,
      "start": 320,
      "end": 425
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myPrimitiveTupleOld",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 455,
                    "end": 461
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 463,
                    "end": 469
                  }
                ],
                "start": 454,
                "end": 470
              },
              "start": 452,
              "end": 470
            },
            "start": 433,
            "end": 470
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "extractPrimitivesOld",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 493
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 496,
                      "end": 505
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 507,
                      "end": 509
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 496,
                    "end": 509
                  }
                ],
                "start": 494,
                "end": 511
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 524
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 526,
                      "end": 527
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 515,
                    "end": 527
                  }
                ],
                "start": 513,
                "end": 529
              }
            ],
            "optional": false,
            "start": 473,
            "end": 530
          },
          "definite": false,
          "start": 433,
          "end": 530
        }
      ],
      "declare": false,
      "start": 427,
      "end": 531
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleMapperNew",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 552
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 558
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 567,
                "end": 570
              },
              "start": 567,
              "end": 572
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 553,
            "end": 572
          }
        ],
        "start": 552,
        "end": 573
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null,
          "start": 580,
          "end": 583
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 598
            },
            "typeArguments": null,
            "start": 593,
            "end": 598
          },
          "start": 587,
          "end": 598
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyMappedType",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 613
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tuple",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 619
                  },
                  "typeArguments": null,
                  "start": 614,
                  "end": 619
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 623
                  },
                  "typeArguments": null,
                  "start": 620,
                  "end": 623
                },
                "start": 614,
                "end": 624
              }
            ],
            "start": 613,
            "end": 625
          },
          "start": 601,
          "end": 625
        },
        "optional": false,
        "readonly": null,
        "start": 576,
        "end": 628
      },
      "declare": false,
      "start": 533,
      "end": 629
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMappedTupleNew",
        "optional": false,
        "typeAnnotation": null,
        "start": 636,
        "end": 652
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleMapperNew",
          "optional": false,
          "typeAnnotation": null,
          "start": 655,
          "end": 669
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 671,
                  "end": 677
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 679,
                  "end": 685
                }
              ],
              "start": 670,
              "end": 686
            }
          ],
          "start": 669,
          "end": 687
        },
        "start": 655,
        "end": 687
      },
      "declare": false,
      "start": 631,
      "end": 688
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extractPrimitivesNew",
        "optional": false,
        "typeAnnotation": null,
        "start": 707,
        "end": 727
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 733
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 742,
                "end": 745
              },
              "start": 742,
              "end": 747
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 728,
            "end": 747
          }
        ],
        "start": 727,
        "end": 748
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "mappedTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 752,
            "end": 763
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TupleMapperNew",
                "optional": false,
                "typeAnnotation": null,
                "start": 765,
                "end": 779
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 780,
                      "end": 785
                    },
                    "typeArguments": null,
                    "start": 780,
                    "end": 785
                  }
                ],
                "start": 779,
                "end": 786
              },
              "start": 765,
              "end": 786
            },
            "start": 763,
            "end": 786
          },
          "value": null,
          "start": 749,
          "end": 786
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 789,
            "end": 794
          },
          "typeArguments": null,
          "start": 789,
          "end": 794
        },
        "start": 787,
        "end": 794
      },
      "body": null,
      "expression": false,
      "start": 690,
      "end": 795
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myPrimitiveTupleNew",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 825,
                    "end": 831
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 833,
                    "end": 839
                  }
                ],
                "start": 824,
                "end": 840
              },
              "start": 822,
              "end": 840
            },
            "start": 803,
            "end": 840
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "extractPrimitivesNew",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 863
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 875
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 877,
                      "end": 879
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 866,
                    "end": 879
                  }
                ],
                "start": 864,
                "end": 881
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primitive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 885,
                      "end": 894
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 896,
                      "end": 897
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 885,
                    "end": 897
                  }
                ],
                "start": 883,
                "end": 899
              }
            ],
            "optional": false,
            "start": 843,
            "end": 900
          },
          "definite": false,
          "start": 803,
          "end": 900
        }
      ],
      "declare": false,
      "start": 797,
      "end": 901
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 901
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMappedType",
    "start": 5,
    "end": 17,
    "range": [
      5,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 18,
    "end": 27,
    "range": [
      18,
      27
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 28,
    "end": 35,
    "range": [
      28,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 36,
    "end": 39,
    "range": [
      36,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "primitive",
    "start": 46,
    "end": 55,
    "range": [
      46,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 57,
    "end": 66,
    "range": [
      57,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 72,
    "end": 76,
    "range": [
      72,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "TupleMapperOld",
    "start": 77,
    "end": 91,
    "range": [
      77,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 92,
    "end": 97,
    "range": [
      92,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 98,
    "end": 105,
    "range": [
      98,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 106,
    "end": 109,
    "range": [
      106,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 119,
    "end": 122,
    "range": [
      119,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 123,
    "end": 125,
    "range": [
      123,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 126,
    "end": 131,
    "range": [
      126,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 132,
    "end": 137,
    "range": [
      132,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 140,
    "end": 145,
    "range": [
      140,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 146,
    "end": 149,
    "range": [
      146,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 151,
    "end": 158,
    "range": [
      151,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 159,
    "end": 164,
    "range": [
      159,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 165,
    "end": 171,
    "range": [
      165,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMappedType",
    "start": 175,
    "end": 187,
    "range": [
      175,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 188,
    "end": 193,
    "range": [
      188,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 194,
    "end": 197,
    "range": [
      194,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 202,
    "end": 207,
    "range": [
      202,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 213,
    "end": 217,
    "range": [
      213,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMappedTupleOld",
    "start": 218,
    "end": 234,
    "range": [
      218,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "TupleMapperOld",
    "start": 237,
    "end": 251,
    "range": [
      237,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 253,
    "end": 259,
    "range": [
      253,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 261,
    "end": 267,
    "range": [
      261,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 320,
    "end": 327,
    "range": [
      320,
      327
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 328,
    "end": 336,
    "range": [
      328,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "extractPrimitivesOld",
    "start": 337,
    "end": 357,
    "range": [
      337,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 358,
    "end": 363,
    "range": [
      358,
      363
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 364,
    "end": 371,
    "range": [
      364,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 372,
    "end": 375,
    "range": [
      372,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 379,
    "end": 382,
    "range": [
      379,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "mappedTypes",
    "start": 382,
    "end": 393,
    "range": [
      382,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "TupleMapperOld",
    "start": 395,
    "end": 409,
    "range": [
      395,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 410,
    "end": 415,
    "range": [
      410,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 419,
    "end": 424,
    "range": [
      419,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 427,
    "end": 432,
    "range": [
      427,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "myPrimitiveTupleOld",
    "start": 433,
    "end": 452,
    "range": [
      433,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 455,
    "end": 461,
    "range": [
      455,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 463,
    "end": 469,
    "range": [
      463,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "extractPrimitivesOld",
    "start": 473,
    "end": 493,
    "range": [
      473,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "primitive",
    "start": 496,
    "end": 505,
    "range": [
      496,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 507,
    "end": 509,
    "range": [
      507,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "primitive",
    "start": 515,
    "end": 524,
    "range": [
      515,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 533,
    "end": 537,
    "range": [
      533,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "TupleMapperNew",
    "start": 538,
    "end": 552,
    "range": [
      538,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 553,
    "end": 558,
    "range": [
      553,
      558
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 559,
    "end": 566,
    "range": [
      559,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 567,
    "end": 570,
    "range": [
      567,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 580,
    "end": 583,
    "range": [
      580,
      583
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 584,
    "end": 586,
    "range": [
      584,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 587,
    "end": 592,
    "range": [
      587,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 593,
    "end": 598,
    "range": [
      593,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMappedType",
    "start": 601,
    "end": 613,
    "range": [
      601,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 614,
    "end": 619,
    "range": [
      614,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 620,
    "end": 623,
    "range": [
      620,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 631,
    "end": 635,
    "range": [
      631,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMappedTupleNew",
    "start": 636,
    "end": 652,
    "range": [
      636,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "TupleMapperNew",
    "start": 655,
    "end": 669,
    "range": [
      655,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 671,
    "end": 677,
    "range": [
      671,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 679,
    "end": 685,
    "range": [
      679,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 690,
    "end": 697,
    "range": [
      690,
      697
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 698,
    "end": 706,
    "range": [
      698,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "extractPrimitivesNew",
    "start": 707,
    "end": 727,
    "range": [
      707,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 728,
    "end": 733,
    "range": [
      728,
      733
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 734,
    "end": 741,
    "range": [
      734,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 742,
    "end": 745,
    "range": [
      742,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 749,
    "end": 752,
    "range": [
      749,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "mappedTypes",
    "start": 752,
    "end": 763,
    "range": [
      752,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "TupleMapperNew",
    "start": 765,
    "end": 779,
    "range": [
      765,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 780,
    "end": 785,
    "range": [
      780,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 789,
    "end": 794,
    "range": [
      789,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 797,
    "end": 802,
    "range": [
      797,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "myPrimitiveTupleNew",
    "start": 803,
    "end": 822,
    "range": [
      803,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 825,
    "end": 831,
    "range": [
      825,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 833,
    "end": 839,
    "range": [
      833,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "extractPrimitivesNew",
    "start": 843,
    "end": 863,
    "range": [
      843,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Identifier",
    "value": "primitive",
    "start": 866,
    "end": 875,
    "range": [
      866,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 877,
    "end": 879,
    "range": [
      877,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "primitive",
    "start": 885,
    "end": 894,
    "range": [
      885,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  }
]
```
