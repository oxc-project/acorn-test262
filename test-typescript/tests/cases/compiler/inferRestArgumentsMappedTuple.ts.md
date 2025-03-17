__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 902,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 17,
        "name": "MyMappedType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 17,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 27,
              "name": "Primitive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 36,
              "end": 39
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 43,
        "end": 69,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 67,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 55,
              "name": "primitive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 66,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 66,
                  "name": "Primitive",
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
      "start": 72,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 91,
        "name": "TupleMapperOld",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 111,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 97,
              "name": "Tuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 106,
              "end": 111,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 106,
                "end": 109
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
        "type": "TSMappedType",
        "start": 115,
        "end": 210,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 119,
          "end": 137,
          "name": {
            "type": "Identifier",
            "start": 119,
            "end": 122,
            "name": "Key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 126,
            "end": 137,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 137,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 137,
                "name": "Tuple",
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
          "start": 140,
          "end": 207,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 140,
            "end": 150,
            "objectType": {
              "type": "TSTypeReference",
              "start": 140,
              "end": 145,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 145,
                "name": "Tuple",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 146,
              "end": 149,
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "name": "Key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "start": 159,
            "end": 172,
            "objectType": {
              "type": "TSTypeReference",
              "start": 159,
              "end": 164,
              "typeName": {
                "type": "Identifier",
                "start": 159,
                "end": 164,
                "name": "Tuple",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSNumberKeyword",
              "start": 165,
              "end": 171
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 175,
            "end": 199,
            "typeName": {
              "type": "Identifier",
              "start": 175,
              "end": 187,
              "name": "MyMappedType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 187,
              "end": 199,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 188,
                  "end": 198,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 188,
                    "end": 193,
                    "typeName": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 193,
                      "name": "Tuple",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 194,
                    "end": 197,
                    "typeName": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 197,
                      "name": "Key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 202,
            "end": 207
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 126,
          "end": 137,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 132,
            "end": 137,
            "typeName": {
              "type": "Identifier",
              "start": 132,
              "end": 137,
              "name": "Tuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 119,
          "end": 122,
          "name": "Key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 213,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 234,
        "name": "MyMappedTupleOld",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 237,
        "end": 269,
        "typeName": {
          "type": "Identifier",
          "start": 237,
          "end": 251,
          "name": "TupleMapperOld",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 251,
          "end": 269,
          "params": [
            {
              "type": "TSTupleType",
              "start": 252,
              "end": 268,
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
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 320,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 357,
        "name": "extractPrimitivesOld",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 379,
          "end": 416,
          "argument": {
            "type": "Identifier",
            "start": 382,
            "end": 393,
            "name": "mappedTypes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 393,
            "end": 416,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 395,
              "end": 416,
              "typeName": {
                "type": "Identifier",
                "start": 395,
                "end": 409,
                "name": "TupleMapperOld",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 409,
                "end": 416,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 410,
                    "end": 415,
                    "typeName": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 415,
                      "name": "Tuple",
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
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 357,
        "end": 378,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 358,
            "end": 377,
            "name": {
              "type": "Identifier",
              "start": 358,
              "end": 363,
              "name": "Tuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 372,
              "end": 377,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 372,
                "end": 375
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
        "start": 417,
        "end": 424,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 419,
          "end": 424,
          "typeName": {
            "type": "Identifier",
            "start": 419,
            "end": 424,
            "name": "Tuple",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 530,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 470,
            "name": "myPrimitiveTupleOld",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 452,
              "end": 470,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 454,
                "end": 470,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 473,
            "end": 530,
            "callee": {
              "type": "Identifier",
              "start": 473,
              "end": 493,
              "name": "extractPrimitivesOld",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 494,
                "end": 511,
                "properties": [
                  {
                    "type": "Property",
                    "start": 496,
                    "end": 509,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 496,
                      "end": 505,
                      "name": "primitive",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 507,
                      "end": 509,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 513,
                "end": 529,
                "properties": [
                  {
                    "type": "Property",
                    "start": 515,
                    "end": 527,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 524,
                      "name": "primitive",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 526,
                      "end": 527,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 533,
      "end": 629,
      "id": {
        "type": "Identifier",
        "start": 538,
        "end": 552,
        "name": "TupleMapperNew",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 552,
        "end": 573,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 553,
            "end": 572,
            "name": {
              "type": "Identifier",
              "start": 553,
              "end": 558,
              "name": "Tuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 567,
              "end": 572,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 567,
                "end": 570
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
        "type": "TSMappedType",
        "start": 576,
        "end": 628,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 580,
          "end": 598,
          "name": {
            "type": "Identifier",
            "start": 580,
            "end": 583,
            "name": "Key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 587,
            "end": 598,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 593,
              "end": 598,
              "typeName": {
                "type": "Identifier",
                "start": 593,
                "end": 598,
                "name": "Tuple",
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
          "type": "TSTypeReference",
          "start": 601,
          "end": 625,
          "typeName": {
            "type": "Identifier",
            "start": 601,
            "end": 613,
            "name": "MyMappedType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 613,
            "end": 625,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 614,
                "end": 624,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 614,
                  "end": 619,
                  "typeName": {
                    "type": "Identifier",
                    "start": 614,
                    "end": 619,
                    "name": "Tuple",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 620,
                  "end": 623,
                  "typeName": {
                    "type": "Identifier",
                    "start": 620,
                    "end": 623,
                    "name": "Key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 587,
          "end": 598,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 593,
            "end": 598,
            "typeName": {
              "type": "Identifier",
              "start": 593,
              "end": 598,
              "name": "Tuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 580,
          "end": 583,
          "name": "Key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 631,
      "end": 688,
      "id": {
        "type": "Identifier",
        "start": 636,
        "end": 652,
        "name": "MyMappedTupleNew",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 655,
        "end": 687,
        "typeName": {
          "type": "Identifier",
          "start": 655,
          "end": 669,
          "name": "TupleMapperNew",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 669,
          "end": 687,
          "params": [
            {
              "type": "TSTupleType",
              "start": 670,
              "end": 686,
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
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 690,
      "end": 795,
      "id": {
        "type": "Identifier",
        "start": 707,
        "end": 727,
        "name": "extractPrimitivesNew",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 749,
          "end": 786,
          "argument": {
            "type": "Identifier",
            "start": 752,
            "end": 763,
            "name": "mappedTypes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 763,
            "end": 786,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 765,
              "end": 786,
              "typeName": {
                "type": "Identifier",
                "start": 765,
                "end": 779,
                "name": "TupleMapperNew",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 779,
                "end": 786,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 780,
                    "end": 785,
                    "typeName": {
                      "type": "Identifier",
                      "start": 780,
                      "end": 785,
                      "name": "Tuple",
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
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 727,
        "end": 748,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 728,
            "end": 747,
            "name": {
              "type": "Identifier",
              "start": 728,
              "end": 733,
              "name": "Tuple",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 742,
              "end": 747,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 742,
                "end": 745
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
        "start": 787,
        "end": 794,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 789,
          "end": 794,
          "typeName": {
            "type": "Identifier",
            "start": 789,
            "end": 794,
            "name": "Tuple",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 797,
      "end": 901,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 803,
          "end": 900,
          "id": {
            "type": "Identifier",
            "start": 803,
            "end": 840,
            "name": "myPrimitiveTupleNew",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 822,
              "end": 840,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 824,
                "end": 840,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 843,
            "end": 900,
            "callee": {
              "type": "Identifier",
              "start": 843,
              "end": 863,
              "name": "extractPrimitivesNew",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 864,
                "end": 881,
                "properties": [
                  {
                    "type": "Property",
                    "start": 866,
                    "end": 879,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 866,
                      "end": 875,
                      "name": "primitive",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 877,
                      "end": 879,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 883,
                "end": 899,
                "properties": [
                  {
                    "type": "Property",
                    "start": 885,
                    "end": 897,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 885,
                      "end": 894,
                      "name": "primitive",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 896,
                      "end": 897,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
