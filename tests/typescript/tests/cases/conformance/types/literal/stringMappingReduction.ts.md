__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1148,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 45,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 11,
        "end": 44,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 11,
            "end": 17,
            "literal": {
              "type": "Literal",
              "start": 11,
              "end": 17,
              "raw": "\"prop\"",
              "value": "prop"
            }
          },
          {
            "type": "TSTemplateLiteralType",
            "start": 20,
            "end": 44,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 20,
                "end": 24,
                "tail": false,
                "value": {
                  "cooked": "p",
                  "raw": "p"
                }
              },
              {
                "type": "TemplateElement",
                "start": 41,
                "end": 44,
                "tail": true,
                "value": {
                  "cooked": "p",
                  "raw": "p"
                }
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "start": 24,
                "end": 41,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 33,
                  "end": 41,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 34,
                      "end": 40
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 33,
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 75,
      "end": 113,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 86,
        "end": 112,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 86,
            "end": 92,
            "literal": {
              "type": "Literal",
              "start": 86,
              "end": 92,
              "raw": "\"prop\"",
              "value": "prop"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 112,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 104,
              "end": 112,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 104,
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 136,
      "end": 174,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 144,
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 147,
        "end": 173,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 147,
            "end": 153,
            "literal": {
              "type": "Literal",
              "start": 147,
              "end": 153,
              "raw": "\"PROP\"",
              "value": "PROP"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 156,
            "end": 173,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 165,
              "end": 173,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 166,
                  "end": 172
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 156,
              "end": 165,
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 207,
      "end": 252,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 215,
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 218,
        "end": 251,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 218,
            "end": 224,
            "literal": {
              "type": "Literal",
              "start": 218,
              "end": 224,
              "raw": "\"prop\"",
              "value": "prop"
            }
          },
          {
            "type": "TSTemplateLiteralType",
            "start": 227,
            "end": 251,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 227,
                "end": 231,
                "tail": false,
                "value": {
                  "cooked": "p",
                  "raw": "p"
                }
              },
              {
                "type": "TemplateElement",
                "start": 248,
                "end": 251,
                "tail": true,
                "value": {
                  "cooked": "p",
                  "raw": "p"
                }
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "start": 231,
                "end": 248,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 240,
                  "end": 248,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 241,
                      "end": 247
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 240,
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 264,
      "end": 302,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 272,
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 275,
        "end": 301,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 275,
            "end": 281,
            "literal": {
              "type": "Literal",
              "start": 275,
              "end": 281,
              "raw": "\"prop\"",
              "value": "prop"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 284,
            "end": 301,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 293,
              "end": 301,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 294,
                  "end": 300
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 284,
              "end": 293,
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 314,
      "end": 352,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 322,
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 325,
        "end": 351,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 325,
            "end": 331,
            "literal": {
              "type": "Literal",
              "start": 325,
              "end": 331,
              "raw": "\"PROP\"",
              "value": "PROP"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 334,
            "end": 351,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 343,
              "end": 351,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 344,
                  "end": 350
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 334,
              "end": 343,
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 364,
      "end": 403,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 372,
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 375,
        "end": 402,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 375,
            "end": 381,
            "literal": {
              "type": "Literal",
              "start": 375,
              "end": 381,
              "raw": "\"prop\"",
              "value": "prop"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 384,
            "end": 402,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 394,
              "end": 402,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 395,
                  "end": 401
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 384,
              "end": 394,
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 436,
      "end": 475,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 444,
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 447,
        "end": 474,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 447,
            "end": 453,
            "literal": {
              "type": "Literal",
              "start": 447,
              "end": 453,
              "raw": "\"Prop\"",
              "value": "Prop"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 456,
            "end": 474,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 466,
              "end": 474,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 467,
                  "end": 473
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 456,
              "end": 466,
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 499,
      "end": 538,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 507,
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 510,
        "end": 537,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 510,
            "end": 516,
            "literal": {
              "type": "Literal",
              "start": 510,
              "end": 516,
              "raw": "\"PROP\"",
              "value": "PROP"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 519,
            "end": 537,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 529,
              "end": 537,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 530,
                  "end": 536
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 519,
              "end": 529,
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 563,
      "end": 602,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 568,
        "end": 571,
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 574,
        "end": 601,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 574,
            "end": 580,
            "literal": {
              "type": "Literal",
              "start": 574,
              "end": 580,
              "raw": "\"prop\"",
              "value": "prop"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 583,
            "end": 601,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 593,
              "end": 601,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 594,
                  "end": 600
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 583,
              "end": 593,
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 613,
      "end": 652,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 621,
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 624,
        "end": 651,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 624,
            "end": 630,
            "literal": {
              "type": "Literal",
              "start": 624,
              "end": 630,
              "raw": "\"Prop\"",
              "value": "Prop"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 633,
            "end": 651,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 643,
              "end": 651,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 644,
                  "end": 650
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 633,
              "end": 643,
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 664,
      "end": 703,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 669,
        "end": 672,
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 675,
        "end": 702,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 675,
            "end": 681,
            "literal": {
              "type": "Literal",
              "start": 675,
              "end": 681,
              "raw": "\"PROP\"",
              "value": "PROP"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 684,
            "end": 702,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 694,
              "end": 702,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 695,
                  "end": 701
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 684,
              "end": 694,
              "decorators": [],
              "name": "Capitalize",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 738,
      "end": 763,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 743,
        "end": 747,
        "decorators": [],
        "name": "EMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 750,
        "end": 763,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 752,
            "end": 761,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 752,
              "end": 757,
              "decorators": [],
              "name": "event",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 757,
              "end": 761,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 759,
                "end": 761,
                "members": []
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 764,
      "end": 786,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 769,
        "end": 773,
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 776,
        "end": 786,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 782,
          "end": 786,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 782,
            "end": 786,
            "decorators": [],
            "name": "EMap",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 787,
      "end": 859,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 792,
        "end": 805,
        "decorators": [],
        "name": "EPlusFallback",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 811,
        "end": 858,
        "checkType": {
          "type": "TSTypeReference",
          "start": 811,
          "end": 812,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 811,
            "end": 812,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 821,
          "end": 825,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 821,
            "end": 825,
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 838,
          "end": 858,
          "literal": {
            "type": "Literal",
            "start": 838,
            "end": 858,
            "raw": "\"unrecognised event\"",
            "value": "unrecognised event"
          }
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 828,
          "end": 835,
          "indexType": {
            "type": "TSTypeReference",
            "start": 833,
            "end": 834,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 833,
              "end": 834,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 828,
            "end": 832,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 828,
              "end": 832,
              "decorators": [],
              "name": "EMap",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 805,
        "end": 808,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 806,
            "end": 807,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 806,
              "end": 807,
              "decorators": [],
              "name": "C",
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
      "start": 860,
      "end": 977,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 865,
        "end": 877,
        "decorators": [],
        "name": "VirtualEvent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 898,
        "end": 976,
        "indexType": {
          "type": "TSLiteralType",
          "start": 959,
          "end": 975,
          "literal": {
            "type": "Literal",
            "start": 959,
            "end": 975,
            "raw": "'bivarianceHack'",
            "value": "bivarianceHack"
          }
        },
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 898,
          "end": 958,
          "members": [
            {
              "type": "TSMethodSignature",
              "start": 900,
              "end": 956,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 900,
                "end": 914,
                "decorators": [],
                "name": "bivarianceHack",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 915,
                  "end": 949,
                  "decorators": [],
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 920,
                    "end": 949,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 922,
                      "end": 949,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 935,
                        "end": 949,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 936,
                            "end": 948,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 945,
                              "end": 948,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 946,
                                  "end": 947,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 946,
                                    "end": 947,
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
                              "start": 936,
                              "end": 945,
                              "decorators": [],
                              "name": "Lowercase",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 922,
                        "end": 935,
                        "decorators": [],
                        "name": "EPlusFallback",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 950,
                "end": 955,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 952,
                  "end": 955
                }
              },
              "static": false,
              "typeParameters": null
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 877,
        "end": 895,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 878,
            "end": 894,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 888,
              "end": 894
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 878,
              "end": 879,
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
      "start": 978,
      "end": 1043,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 992,
          "end": 1042,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 992,
            "end": 1042,
            "decorators": [],
            "name": "_virtualOn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1002,
              "end": 1042,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1004,
                "end": 1042,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1005,
                    "end": 1033,
                    "decorators": [],
                    "name": "eventQrl",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1013,
                      "end": 1033,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1015,
                        "end": 1033,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1027,
                          "end": 1033,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1028,
                              "end": 1032,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1028,
                                "end": 1032,
                                "decorators": [],
                                "name": "Keys",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1015,
                          "end": 1027,
                          "decorators": [],
                          "name": "VirtualEvent",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1035,
                  "end": 1042,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1038,
                    "end": 1042
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1044,
      "end": 1148,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1051,
        "end": 1148,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1057,
            "end": 1147,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1057,
              "end": 1066,
              "decorators": [],
              "name": "virtualOn",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 1069,
              "end": 1147,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1118,
                "end": 1147,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1124,
                    "end": 1145,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1124,
                      "end": 1144,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1135,
                          "end": 1143,
                          "decorators": [],
                          "name": "eventQrl",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 1124,
                        "end": 1134,
                        "decorators": [],
                        "name": "_virtualOn",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1088,
                  "end": 1113,
                  "decorators": [],
                  "name": "eventQrl",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1096,
                    "end": 1113,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1098,
                      "end": 1113,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1110,
                        "end": 1113,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1111,
                            "end": 1112,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1111,
                              "end": 1112,
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
                        "start": 1098,
                        "end": 1110,
                        "decorators": [],
                        "name": "VirtualEvent",
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
                "start": 1069,
                "end": 1087,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1070,
                    "end": 1086,
                    "const": false,
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 1080,
                      "end": 1086
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1070,
                      "end": 1071,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
