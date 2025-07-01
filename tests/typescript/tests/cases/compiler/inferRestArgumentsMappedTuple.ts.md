__ESTREE_TEST__:PASS:
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
