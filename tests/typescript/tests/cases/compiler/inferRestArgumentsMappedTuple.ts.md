__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 901,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 70,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 17,
        "decorators": [],
        "name": "MyMappedType",
        "optional": false,
        "typeAnnotation": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 55,
              "decorators": [],
              "name": "primitive",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 57,
                "end": 66,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 66,
                  "decorators": [],
                  "name": "Primitive",
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
        "start": 17,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 18,
            "end": 39,
            "const": false,
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 36,
              "end": 39
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 18,
              "end": 27,
              "decorators": [],
              "name": "Primitive",
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
      "start": 72,
      "end": 211,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 91,
        "decorators": [],
        "name": "TupleMapperOld",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 115,
        "end": 210,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 126,
          "end": 137,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 132,
            "end": 137,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 132,
              "end": 137,
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 119,
          "end": 122,
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 140,
          "end": 207,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 140,
            "end": 150,
            "indexType": {
              "type": "TSTypeReference",
              "start": 146,
              "end": 149,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 140,
              "end": 145,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 145,
                "decorators": [],
                "name": "Tuple",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "start": 159,
            "end": 172,
            "indexType": {
              "type": "TSNumberKeyword",
              "start": 165,
              "end": 171
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 159,
              "end": 164,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 159,
                "end": 164,
                "decorators": [],
                "name": "Tuple",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 202,
            "end": 207
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 175,
            "end": 199,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 187,
              "end": 199,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 188,
                  "end": 198,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 194,
                    "end": 197,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 197,
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 188,
                    "end": 193,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 193,
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 175,
              "end": 187,
              "decorators": [],
              "name": "MyMappedType",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
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
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 97,
              "decorators": [],
              "name": "Tuple",
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
      "start": 213,
      "end": 270,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 234,
        "decorators": [],
        "name": "MyMappedTupleOld",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 237,
        "end": 269,
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 237,
          "end": 251,
          "decorators": [],
          "name": "TupleMapperOld",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 320,
      "end": 425,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 357,
        "decorators": [],
        "name": "extractPrimitivesOld",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 379,
          "end": 416,
          "argument": {
            "type": "Identifier",
            "start": 382,
            "end": 393,
            "decorators": [],
            "name": "mappedTypes",
            "optional": false,
            "typeAnnotation": null
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 409,
                "end": 416,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 410,
                    "end": 415,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 415,
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 395,
                "end": 409,
                "decorators": [],
                "name": "TupleMapperOld",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 417,
        "end": 424,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 419,
          "end": 424,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 419,
            "end": 424,
            "decorators": [],
            "name": "Tuple",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 357,
        "end": 378,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 358,
            "end": 377,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 358,
              "end": 363,
              "decorators": [],
              "name": "Tuple",
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
      "start": 427,
      "end": 531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 530,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 470,
            "decorators": [],
            "name": "myPrimitiveTupleOld",
            "optional": false,
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
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 473,
            "end": 530,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 496,
                      "end": 505,
                      "decorators": [],
                      "name": "primitive",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 507,
                      "end": 509,
                      "raw": "\"\"",
                      "value": ""
                    }
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 515,
                      "end": 524,
                      "decorators": [],
                      "name": "primitive",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 526,
                      "end": 527,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 473,
              "end": 493,
              "decorators": [],
              "name": "extractPrimitivesOld",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 533,
      "end": 629,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 538,
        "end": 552,
        "decorators": [],
        "name": "TupleMapperNew",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 576,
        "end": 628,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 587,
          "end": 598,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 593,
            "end": 598,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 593,
              "end": 598,
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 580,
          "end": 583,
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 601,
          "end": 625,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 613,
            "end": 625,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 614,
                "end": 624,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 620,
                  "end": 623,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 620,
                    "end": 623,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 614,
                  "end": 619,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 614,
                    "end": 619,
                    "decorators": [],
                    "name": "Tuple",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 601,
            "end": 613,
            "decorators": [],
            "name": "MyMappedType",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 553,
              "end": 558,
              "decorators": [],
              "name": "Tuple",
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
      "start": 631,
      "end": 688,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 636,
        "end": 652,
        "decorators": [],
        "name": "MyMappedTupleNew",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 655,
        "end": 687,
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 655,
          "end": 669,
          "decorators": [],
          "name": "TupleMapperNew",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 690,
      "end": 795,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 707,
        "end": 727,
        "decorators": [],
        "name": "extractPrimitivesNew",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 749,
          "end": 786,
          "argument": {
            "type": "Identifier",
            "start": 752,
            "end": 763,
            "decorators": [],
            "name": "mappedTypes",
            "optional": false,
            "typeAnnotation": null
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
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 779,
                "end": 786,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 780,
                    "end": 785,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 780,
                      "end": 785,
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 765,
                "end": 779,
                "decorators": [],
                "name": "TupleMapperNew",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 787,
        "end": 794,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 789,
          "end": 794,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 789,
            "end": 794,
            "decorators": [],
            "name": "Tuple",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 727,
        "end": 748,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 728,
            "end": 747,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 728,
              "end": 733,
              "decorators": [],
              "name": "Tuple",
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
      "start": 797,
      "end": 901,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 803,
          "end": 900,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 803,
            "end": 840,
            "decorators": [],
            "name": "myPrimitiveTupleNew",
            "optional": false,
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
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 843,
            "end": 900,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 866,
                      "end": 875,
                      "decorators": [],
                      "name": "primitive",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 877,
                      "end": 879,
                      "raw": "\"\"",
                      "value": ""
                    }
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 885,
                      "end": 894,
                      "decorators": [],
                      "name": "primitive",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 896,
                      "end": 897,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 843,
              "end": 863,
              "decorators": [],
              "name": "extractPrimitivesNew",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
