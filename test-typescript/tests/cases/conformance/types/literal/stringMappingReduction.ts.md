__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1149,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "T00",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "prop",
              "raw": "\"prop\""
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
                "value": {
                  "cooked": "p",
                  "raw": "p"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 41,
                "end": 44,
                "value": {
                  "cooked": "p",
                  "raw": "p"
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "start": 24,
                "end": 41,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 33,
                  "name": "Lowercase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 75,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 83,
        "name": "T01",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "prop",
              "raw": "\"prop\""
            }
          },
          {
            "type": "TSTypeReference",
            "start": 95,
            "end": 112,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 104,
              "name": "Lowercase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 136,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 144,
        "name": "T02",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "PROP",
              "raw": "\"PROP\""
            }
          },
          {
            "type": "TSTypeReference",
            "start": 156,
            "end": 173,
            "typeName": {
              "type": "Identifier",
              "start": 156,
              "end": 165,
              "name": "Lowercase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 207,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 215,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "prop",
              "raw": "\"prop\""
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
                "value": {
                  "cooked": "p",
                  "raw": "p"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 248,
                "end": 251,
                "value": {
                  "cooked": "p",
                  "raw": "p"
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "start": 231,
                "end": 248,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 240,
                  "name": "Lowercase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 264,
      "end": 302,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 272,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "prop",
              "raw": "\"prop\""
            }
          },
          {
            "type": "TSTypeReference",
            "start": 284,
            "end": 301,
            "typeName": {
              "type": "Identifier",
              "start": 284,
              "end": 293,
              "name": "Lowercase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 314,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 322,
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "PROP",
              "raw": "\"PROP\""
            }
          },
          {
            "type": "TSTypeReference",
            "start": 334,
            "end": 351,
            "typeName": {
              "type": "Identifier",
              "start": 334,
              "end": 343,
              "name": "Lowercase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 364,
      "end": 403,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 372,
        "name": "T20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "prop",
              "raw": "\"prop\""
            }
          },
          {
            "type": "TSTypeReference",
            "start": 384,
            "end": 402,
            "typeName": {
              "type": "Identifier",
              "start": 384,
              "end": 394,
              "name": "Capitalize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 436,
      "end": 475,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 444,
        "name": "T21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "Prop",
              "raw": "\"Prop\""
            }
          },
          {
            "type": "TSTypeReference",
            "start": 456,
            "end": 474,
            "typeName": {
              "type": "Identifier",
              "start": 456,
              "end": 466,
              "name": "Capitalize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 499,
      "end": 538,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 507,
        "name": "T22",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "PROP",
              "raw": "\"PROP\""
            }
          },
          {
            "type": "TSTypeReference",
            "start": 519,
            "end": 537,
            "typeName": {
              "type": "Identifier",
              "start": 519,
              "end": 529,
              "name": "Capitalize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 563,
      "end": 602,
      "id": {
        "type": "Identifier",
        "start": 568,
        "end": 571,
        "name": "T30",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "prop",
              "raw": "\"prop\""
            }
          },
          {
            "type": "TSTypeReference",
            "start": 583,
            "end": 601,
            "typeName": {
              "type": "Identifier",
              "start": 583,
              "end": 593,
              "name": "Capitalize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 613,
      "end": 652,
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 621,
        "name": "T31",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "Prop",
              "raw": "\"Prop\""
            }
          },
          {
            "type": "TSTypeReference",
            "start": 633,
            "end": 651,
            "typeName": {
              "type": "Identifier",
              "start": 633,
              "end": 643,
              "name": "Capitalize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 664,
      "end": 703,
      "id": {
        "type": "Identifier",
        "start": 669,
        "end": 672,
        "name": "T32",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "PROP",
              "raw": "\"PROP\""
            }
          },
          {
            "type": "TSTypeReference",
            "start": 684,
            "end": 702,
            "typeName": {
              "type": "Identifier",
              "start": 684,
              "end": 694,
              "name": "Capitalize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 738,
      "end": 763,
      "id": {
        "type": "Identifier",
        "start": 743,
        "end": 747,
        "name": "EMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 750,
        "end": 763,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 752,
            "end": 761,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 752,
              "end": 757,
              "name": "event",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
      "start": 764,
      "end": 786,
      "id": {
        "type": "Identifier",
        "start": 769,
        "end": 773,
        "name": "Keys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 776,
        "end": 786,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 782,
          "end": 786,
          "typeName": {
            "type": "Identifier",
            "start": 782,
            "end": 786,
            "name": "EMap",
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
      "type": "TSTypeAliasDeclaration",
      "start": 787,
      "end": 859,
      "id": {
        "type": "Identifier",
        "start": 792,
        "end": 805,
        "name": "EPlusFallback",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 806,
              "end": 807,
              "name": "C",
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
        "start": 811,
        "end": 858,
        "checkType": {
          "type": "TSTypeReference",
          "start": 811,
          "end": 812,
          "typeName": {
            "type": "Identifier",
            "start": 811,
            "end": 812,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 821,
          "end": 825,
          "typeName": {
            "type": "Identifier",
            "start": 821,
            "end": 825,
            "name": "Keys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 828,
          "end": 835,
          "objectType": {
            "type": "TSTypeReference",
            "start": 828,
            "end": 832,
            "typeName": {
              "type": "Identifier",
              "start": 828,
              "end": 832,
              "name": "EMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 833,
            "end": 834,
            "typeName": {
              "type": "Identifier",
              "start": 833,
              "end": 834,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
            "value": "unrecognised event",
            "raw": "\"unrecognised event\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 860,
      "end": 977,
      "id": {
        "type": "Identifier",
        "start": 865,
        "end": 877,
        "name": "VirtualEvent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 878,
              "end": 879,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 888,
              "end": 894
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 898,
        "end": 976,
        "objectType": {
          "type": "TSTypeLiteral",
          "start": 898,
          "end": 958,
          "members": [
            {
              "type": "TSMethodSignature",
              "start": 900,
              "end": 956,
              "key": {
                "type": "Identifier",
                "start": 900,
                "end": 914,
                "name": "bivarianceHack",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 915,
                  "end": 949,
                  "name": "event",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 920,
                    "end": 949,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 922,
                      "end": 949,
                      "typeName": {
                        "type": "Identifier",
                        "start": 922,
                        "end": 935,
                        "name": "EPlusFallback",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 935,
                        "end": 949,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 936,
                            "end": 948,
                            "typeName": {
                              "type": "Identifier",
                              "start": 936,
                              "end": 945,
                              "name": "Lowercase",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 945,
                              "end": 948,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 946,
                                  "end": 947,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 946,
                                    "end": 947,
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
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 959,
          "end": 975,
          "literal": {
            "type": "Literal",
            "start": 959,
            "end": 975,
            "value": "bivarianceHack",
            "raw": "'bivarianceHack'"
          }
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 992,
            "end": 1042,
            "name": "_virtualOn",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1002,
              "end": 1042,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1004,
                "end": 1042,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1005,
                    "end": 1033,
                    "name": "eventQrl",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1013,
                      "end": 1033,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1015,
                        "end": 1033,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1015,
                          "end": 1027,
                          "name": "VirtualEvent",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1027,
                          "end": 1033,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 1028,
                              "end": 1032,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1028,
                                "end": 1032,
                                "name": "Keys",
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1044,
      "end": 1148,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1051,
        "end": 1148,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1057,
            "end": 1147,
            "id": {
              "type": "Identifier",
              "start": 1057,
              "end": 1066,
              "name": "virtualOn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 1069,
              "end": 1147,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1088,
                  "end": 1113,
                  "name": "eventQrl",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1096,
                    "end": 1113,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1098,
                      "end": 1113,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1098,
                        "end": 1110,
                        "name": "VirtualEvent",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1110,
                        "end": 1113,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1111,
                            "end": 1112,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1111,
                              "end": 1112,
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
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1118,
                "end": 1147,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1124,
                    "end": 1145,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1124,
                      "end": 1144,
                      "callee": {
                        "type": "Identifier",
                        "start": 1124,
                        "end": 1134,
                        "name": "_virtualOn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1135,
                          "end": 1143,
                          "name": "eventQrl",
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
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1069,
                "end": 1087,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1070,
                    "end": 1086,
                    "name": {
                      "type": "Identifier",
                      "start": 1070,
                      "end": 1071,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSStringKeyword",
                      "start": 1080,
                      "end": 1086
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
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
