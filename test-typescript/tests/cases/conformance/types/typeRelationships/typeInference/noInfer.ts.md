__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 2669,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 40,
      "end": 67,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 51,
        "end": 66,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 58,
          "end": 66,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 59,
              "end": 65
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 51,
          "end": 58,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 114,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 79,
        "end": 113,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 86,
          "end": 113,
          "params": [
            {
              "type": "TSUnionType",
              "start": 87,
              "end": 112,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 87,
                  "end": 93
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 96,
                  "end": 102
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 105,
                  "end": 112
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 79,
          "end": 86,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 115,
      "end": 145,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 126,
        "end": 144,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 133,
          "end": 144,
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 134,
              "end": 143
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 126,
          "end": 133,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 146,
      "end": 172,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 154,
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 157,
        "end": 171,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 164,
          "end": 171,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 165,
              "end": 170,
              "literal": {
                "type": "Literal",
                "start": 165,
                "end": 170,
                "raw": "\"foo\"",
                "value": "foo",
                "regex": null,
                "bigint": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 157,
          "end": 164,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 173,
      "end": 208,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 181,
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 184,
        "end": 207,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 191,
          "end": 207,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 192,
              "end": 206,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 192,
                  "end": 198,
                  "tail": false,
                  "value": {
                    "cooked": "foo",
                    "raw": "foo"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 204,
                  "end": 206,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 198,
                  "end": 204
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 184,
          "end": 191,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 209,
      "end": 261,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 217,
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 220,
        "end": 260,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 227,
          "end": 260,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 228,
              "end": 259,
              "types": [
                {
                  "type": "TSTemplateLiteralType",
                  "start": 228,
                  "end": 242,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 228,
                      "end": 234,
                      "tail": false,
                      "value": {
                        "cooked": "foo",
                        "raw": "foo"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 240,
                      "end": 242,
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 234,
                      "end": 240
                    }
                  ]
                },
                {
                  "type": "TSTemplateLiteralType",
                  "start": 245,
                  "end": 259,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 245,
                      "end": 248,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 254,
                      "end": 259,
                      "tail": true,
                      "value": {
                        "cooked": "bar",
                        "raw": "bar"
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 248,
                      "end": 254
                    }
                  ]
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 220,
          "end": 227,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 262,
      "end": 285,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 270,
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 273,
        "end": 284,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 280,
          "end": 284,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 281,
              "end": 283,
              "members": []
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 273,
          "end": 280,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 332,
      "end": 361,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 340,
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 343,
        "end": 360,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 350,
          "end": 360,
          "params": [
            {
              "type": "TSArrayType",
              "start": 351,
              "end": 359,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 351,
                "end": 357
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 343,
          "end": 350,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 362,
      "end": 396,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 367,
        "end": 370,
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 373,
        "end": 395,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 380,
          "end": 395,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 381,
              "end": 394,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 383,
                  "end": 392,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 384,
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
                    "start": 384,
                    "end": 392,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 386,
                      "end": 392
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 373,
          "end": 380,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 443,
      "end": 477,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 448,
        "end": 451,
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 457,
        "end": 476,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 464,
          "end": 476,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 465,
              "end": 475,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 472,
                "end": 475,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 473,
                    "end": 474,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
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
                "start": 465,
                "end": 472,
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 457,
          "end": 464,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 451,
        "end": 454,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 452,
            "end": 453,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
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
      "start": 478,
      "end": 521,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 483,
        "end": 486,
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 492,
        "end": 520,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 499,
          "end": 520,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 500,
              "end": 519,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 500,
                  "end": 510,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 507,
                    "end": 510,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 508,
                        "end": 509,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 508,
                          "end": 509,
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
                    "start": 500,
                    "end": 507,
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 513,
                  "end": 519
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 492,
          "end": 499,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 486,
        "end": 489,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 487,
            "end": 488,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 487,
              "end": 488,
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
      "start": 522,
      "end": 567,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 527,
        "end": 530,
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 536,
        "end": 566,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 543,
          "end": 566,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 544,
              "end": 565,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 544,
                  "end": 554,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 551,
                    "end": 554,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 552,
                        "end": 553,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 552,
                          "end": 553,
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
                    "start": 544,
                    "end": 551,
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 557,
                  "end": 565,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 557,
                    "end": 563
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 536,
          "end": 543,
          "decorators": [],
          "name": "NoInfer",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 530,
        "end": 533,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 531,
            "end": 532,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 531,
              "end": 532,
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
      "start": 627,
      "end": 678,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 632,
        "end": 635,
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 638,
        "end": 677,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 644,
          "end": 677,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 651,
            "end": 677,
            "params": [
              {
                "type": "TSTypeLiteral",
                "start": 652,
                "end": 676,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 654,
                    "end": 664,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 654,
                      "end": 655,
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
                      "start": 655,
                      "end": 663,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 657,
                        "end": 663
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 665,
                    "end": 674,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 665,
                      "end": 666,
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
                      "start": 666,
                      "end": 674,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 668,
                        "end": 674
                      }
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 644,
            "end": 651,
            "decorators": [],
            "name": "NoInfer",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 679,
      "end": 710,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 684,
        "end": 687,
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 693,
        "end": 709,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 699,
          "end": 709,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 706,
            "end": 709,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 707,
                "end": 708,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 708,
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
            "start": 699,
            "end": 706,
            "decorators": [],
            "name": "NoInfer",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 687,
        "end": 690,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 688,
            "end": 689,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 688,
              "end": 689,
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
      "start": 711,
      "end": 776,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 716,
        "end": 719,
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 722,
        "end": 775,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 730,
          "end": 769,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 736,
            "end": 769,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 743,
              "end": 769,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 744,
                  "end": 768,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 746,
                      "end": 756,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 746,
                        "end": 747,
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
                        "start": 747,
                        "end": 755,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 749,
                          "end": 755
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 757,
                      "end": 766,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 757,
                        "end": 758,
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
                        "start": 758,
                        "end": 766,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 760,
                          "end": 766
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 736,
              "end": 743,
              "decorators": [],
              "name": "NoInfer",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 725,
          "end": 726,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 772,
          "end": 773,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 772,
            "end": 773,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 778,
      "end": 844,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 795,
        "end": 799,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 818,
          "end": 822,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 819,
            "end": 822,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 821,
              "end": 822,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 821,
                "end": 822,
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
          "start": 824,
          "end": 837,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 825,
            "end": 837,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 827,
              "end": 837,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 834,
                "end": 837,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 835,
                    "end": 836,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 835,
                      "end": 836,
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
                "start": 827,
                "end": 834,
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 838,
        "end": 844,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 840,
          "end": 844
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 799,
        "end": 817,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 800,
            "end": 816,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 810,
              "end": 816
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 800,
              "end": 801,
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
      "start": 845,
      "end": 913,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 862,
        "end": 866,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 885,
          "end": 889,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 886,
            "end": 889,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 888,
              "end": 889,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 888,
                "end": 889,
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
          "start": 891,
          "end": 906,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 892,
            "end": 906,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 894,
              "end": 906,
              "elementType": {
                "type": "TSTypeReference",
                "start": 894,
                "end": 904,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 901,
                  "end": 904,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 902,
                      "end": 903,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 902,
                        "end": 903,
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
                  "start": 894,
                  "end": 901,
                  "decorators": [],
                  "name": "NoInfer",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 907,
        "end": 913,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 909,
          "end": 913
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 866,
        "end": 884,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 867,
            "end": 883,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 877,
              "end": 883
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 867,
              "end": 868,
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
      "start": 914,
      "end": 982,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 931,
        "end": 935,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 954,
          "end": 958,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 955,
            "end": 958,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 957,
              "end": 958,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 957,
                "end": 958,
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
          "start": 960,
          "end": 975,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 961,
            "end": 975,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 963,
              "end": 975,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 970,
                "end": 975,
                "params": [
                  {
                    "type": "TSArrayType",
                    "start": 971,
                    "end": 974,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 971,
                      "end": 972,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 971,
                        "end": 972,
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
                "start": 963,
                "end": 970,
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 976,
        "end": 982,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 978,
          "end": 982
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 935,
        "end": 953,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 936,
            "end": 952,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 946,
              "end": 952
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 936,
              "end": 937,
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
      "start": 983,
      "end": 1056,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1000,
        "end": 1004,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1023,
          "end": 1027,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1024,
            "end": 1027,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1026,
              "end": 1027,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1026,
                "end": 1027,
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
          "start": 1029,
          "end": 1049,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1030,
            "end": 1049,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1032,
              "end": 1049,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1034,
                  "end": 1047,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1034,
                    "end": 1035,
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
                    "start": 1035,
                    "end": 1047,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1037,
                      "end": 1047,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1044,
                        "end": 1047,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1045,
                            "end": 1046,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1045,
                              "end": 1046,
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
                        "start": 1037,
                        "end": 1044,
                        "decorators": [],
                        "name": "NoInfer",
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
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1050,
        "end": 1056,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1052,
          "end": 1056
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1004,
        "end": 1022,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1005,
            "end": 1021,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1015,
              "end": 1021
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1005,
              "end": 1006,
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
      "start": 1057,
      "end": 1130,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1074,
        "end": 1078,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1097,
          "end": 1101,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1098,
            "end": 1101,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1100,
              "end": 1101,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1100,
                "end": 1101,
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
          "start": 1103,
          "end": 1123,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1104,
            "end": 1123,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1106,
              "end": 1123,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1113,
                "end": 1123,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 1114,
                    "end": 1122,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1116,
                        "end": 1120,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1116,
                          "end": 1117,
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
                          "start": 1117,
                          "end": 1120,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1119,
                            "end": 1120,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1119,
                              "end": 1120,
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
                "start": 1106,
                "end": 1113,
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1124,
        "end": 1130,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1126,
          "end": 1130
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1078,
        "end": 1096,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1079,
            "end": 1095,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1089,
              "end": 1095
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1079,
              "end": 1080,
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
      "type": "ExpressionStatement",
      "start": 1132,
      "end": 1150,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1132,
        "end": 1150,
        "arguments": [
          {
            "type": "Literal",
            "start": 1137,
            "end": 1142,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 1144,
            "end": 1149,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1132,
          "end": 1136,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1157,
      "end": 1175,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1157,
        "end": 1175,
        "arguments": [
          {
            "type": "Literal",
            "start": 1162,
            "end": 1167,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 1169,
            "end": 1174,
            "raw": "'bar'",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1157,
          "end": 1161,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1185,
      "end": 1205,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1185,
        "end": 1205,
        "arguments": [
          {
            "type": "Literal",
            "start": 1190,
            "end": 1195,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ArrayExpression",
            "start": 1197,
            "end": 1204,
            "elements": [
              {
                "type": "Literal",
                "start": 1198,
                "end": 1203,
                "raw": "'bar'",
                "value": "bar",
                "regex": null,
                "bigint": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1185,
          "end": 1189,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1215,
      "end": 1235,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1215,
        "end": 1235,
        "arguments": [
          {
            "type": "Literal",
            "start": 1220,
            "end": 1225,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ArrayExpression",
            "start": 1227,
            "end": 1234,
            "elements": [
              {
                "type": "Literal",
                "start": 1228,
                "end": 1233,
                "raw": "'bar'",
                "value": "bar",
                "regex": null,
                "bigint": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1215,
          "end": 1219,
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1245,
      "end": 1270,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1245,
        "end": 1270,
        "arguments": [
          {
            "type": "Literal",
            "start": 1250,
            "end": 1255,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ObjectExpression",
            "start": 1257,
            "end": 1269,
            "properties": [
              {
                "type": "Property",
                "start": 1259,
                "end": 1267,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1259,
                  "end": 1260,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1262,
                  "end": 1267,
                  "raw": "'bar'",
                  "value": "bar",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1245,
          "end": 1249,
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1280,
      "end": 1305,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1280,
        "end": 1305,
        "arguments": [
          {
            "type": "Literal",
            "start": 1285,
            "end": 1290,
            "raw": "'foo'",
            "value": "foo",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ObjectExpression",
            "start": 1292,
            "end": 1304,
            "properties": [
              {
                "type": "Property",
                "start": 1294,
                "end": 1302,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1295,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1297,
                  "end": 1302,
                  "raw": "'bar'",
                  "value": "bar",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1280,
          "end": 1284,
          "decorators": [],
          "name": "foo5",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1316,
      "end": 1353,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1337,
        "end": 1353,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1339,
            "end": 1351,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1339,
              "end": 1343,
              "decorators": [],
              "name": "move",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1343,
              "end": 1351,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1345,
                "end": 1351,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1347,
                  "end": 1351
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1330,
        "end": 1336,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1354,
      "end": 1403,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1387,
        "end": 1403,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1389,
            "end": 1401,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1389,
              "end": 1393,
              "decorators": [],
              "name": "woof",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1393,
              "end": 1401,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1395,
                "end": 1401,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1397,
                  "end": 1401
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1368,
        "end": 1371,
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1380,
        "end": 1386,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1404,
      "end": 1482,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1421,
        "end": 1432,
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1436,
          "end": 1444,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1441,
            "end": 1444,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1443,
              "end": 1444,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1443,
                "end": 1444,
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
          "start": 1446,
          "end": 1474,
          "decorators": [],
          "name": "getDefault",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1456,
            "end": 1474,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1458,
              "end": 1474,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1461,
                "end": 1474,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1464,
                  "end": 1474,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1471,
                    "end": 1474,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1472,
                        "end": 1473,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1472,
                          "end": 1473,
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
                    "start": 1464,
                    "end": 1471,
                    "decorators": [],
                    "name": "NoInfer",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1475,
        "end": 1481,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1477,
          "end": 1481
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1432,
        "end": 1435,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1433,
            "end": 1434,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1433,
              "end": 1434,
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
      "type": "ExpressionStatement",
      "start": 1484,
      "end": 1530,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1484,
        "end": 1529,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 1496,
            "end": 1508,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1500,
              "end": 1506,
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1510,
            "end": 1528,
            "async": false,
            "body": {
              "type": "NewExpression",
              "start": 1516,
              "end": 1528,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1520,
                "end": 1526,
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1484,
          "end": 1495,
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1537,
      "end": 1580,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1537,
        "end": 1579,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 1549,
            "end": 1561,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1553,
              "end": 1559,
              "decorators": [],
              "name": "Animal",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1563,
            "end": 1578,
            "async": false,
            "body": {
              "type": "NewExpression",
              "start": 1569,
              "end": 1578,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1573,
                "end": 1576,
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1537,
          "end": 1548,
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1587,
      "end": 1630,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1587,
        "end": 1629,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 1599,
            "end": 1608,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1603,
              "end": 1606,
              "decorators": [],
              "name": "Dog",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 1610,
            "end": 1628,
            "async": false,
            "body": {
              "type": "NewExpression",
              "start": 1616,
              "end": 1628,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1620,
                "end": 1626,
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1587,
          "end": 1598,
          "decorators": [],
          "name": "doSomething",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1641,
      "end": 1715,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1658,
        "end": 1669,
        "decorators": [],
        "name": "assertEqual",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1673,
          "end": 1682,
          "decorators": [],
          "name": "actual",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1679,
            "end": 1682,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1681,
              "end": 1682,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1681,
                "end": 1682,
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
          "start": 1684,
          "end": 1704,
          "decorators": [],
          "name": "expected",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1692,
            "end": 1704,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1694,
              "end": 1704,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1701,
                "end": 1704,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1702,
                    "end": 1703,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1702,
                      "end": 1703,
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
                "start": 1694,
                "end": 1701,
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1705,
        "end": 1714,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 1707,
          "end": 1714
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1669,
        "end": 1672,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1670,
            "end": 1671,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1670,
              "end": 1671,
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
      "type": "ExpressionStatement",
      "start": 1717,
      "end": 1749,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1717,
        "end": 1748,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1729,
            "end": 1737,
            "properties": [
              {
                "type": "Property",
                "start": 1731,
                "end": 1735,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1731,
                  "end": 1732,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1734,
                  "end": 1735,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 1739,
            "end": 1747,
            "properties": [
              {
                "type": "Property",
                "start": 1741,
                "end": 1745,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1741,
                  "end": 1742,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1744,
                  "end": 1745,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1717,
          "end": 1728,
          "decorators": [],
          "name": "assertEqual",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1756,
      "end": 1781,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1762,
          "end": 1780,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1762,
            "end": 1763,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1766,
            "end": 1780,
            "properties": [
              {
                "type": "Property",
                "start": 1768,
                "end": 1772,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1768,
                  "end": 1769,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1771,
                  "end": 1772,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1774,
                "end": 1778,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1774,
                  "end": 1775,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1777,
                  "end": 1778,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
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
      "type": "ExpressionStatement",
      "start": 1782,
      "end": 1807,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1782,
        "end": 1806,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1794,
            "end": 1795,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 1797,
            "end": 1805,
            "properties": [
              {
                "type": "Property",
                "start": 1799,
                "end": 1803,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1799,
                  "end": 1800,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1802,
                  "end": 1803,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1782,
          "end": 1793,
          "decorators": [],
          "name": "assertEqual",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1818,
      "end": 1893,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1835,
        "end": 1841,
        "decorators": [],
        "name": "invoke",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1848,
          "end": 1869,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1852,
            "end": 1869,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1854,
              "end": 1869,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1855,
                  "end": 1863,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1860,
                    "end": 1863,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1862,
                      "end": 1863,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1862,
                        "end": 1863,
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
                "start": 1865,
                "end": 1869,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1868,
                  "end": 1869,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1868,
                    "end": 1869,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1871,
          "end": 1888,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1876,
            "end": 1888,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1878,
              "end": 1888,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1885,
                "end": 1888,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1886,
                    "end": 1887,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1886,
                      "end": 1887,
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
                "start": 1878,
                "end": 1885,
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1889,
        "end": 1892,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1891,
          "end": 1892,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1891,
            "end": 1892,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1841,
        "end": 1847,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1842,
            "end": 1843,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1842,
              "end": 1843,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1845,
            "end": 1846,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1845,
              "end": 1846,
              "decorators": [],
              "name": "R",
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
      "start": 1894,
      "end": 1947,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1911,
        "end": 1915,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1916,
          "end": 1937,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1921,
            "end": 1937,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1923,
              "end": 1937,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1925,
                  "end": 1935,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1925,
                    "end": 1926,
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
                    "start": 1926,
                    "end": 1934,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1928,
                      "end": 1934
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1938,
        "end": 1946,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1940,
          "end": 1946
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1949,
      "end": 1978,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1949,
        "end": 1977,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1956,
            "end": 1960,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 1962,
            "end": 1976,
            "properties": [
              {
                "type": "Property",
                "start": 1964,
                "end": 1968,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1964,
                  "end": 1965,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1967,
                  "end": 1968,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 1970,
                "end": 1974,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1970,
                  "end": 1971,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1973,
                  "end": 1974,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1949,
          "end": 1955,
          "decorators": [],
          "name": "invoke",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1988,
      "end": 2009,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1988,
        "end": 2008,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1993,
            "end": 2007,
            "properties": [
              {
                "type": "Property",
                "start": 1995,
                "end": 1999,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1995,
                  "end": 1996,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 1998,
                  "end": 1999,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 2001,
                "end": 2005,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2001,
                  "end": 2002,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2004,
                  "end": 2005,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1988,
          "end": 1992,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2020,
      "end": 2062,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2025,
        "end": 2034,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2044,
        "end": 2061,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2046,
            "end": 2059,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2046,
              "end": 2051,
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2051,
              "end": 2058,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2053,
                "end": 2058,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2053,
                  "end": 2058,
                  "decorators": [],
                  "name": "Props",
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
        "start": 2034,
        "end": 2041,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2035,
            "end": 2040,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2035,
              "end": 2040,
              "decorators": [],
              "name": "Props",
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
      "start": 2063,
      "end": 2152,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2080,
        "end": 2086,
        "decorators": [],
        "name": "doWork",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2094,
          "end": 2121,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2103,
            "end": 2121,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2105,
              "end": 2121,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2114,
                "end": 2121,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2115,
                    "end": 2120,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2115,
                      "end": 2120,
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2105,
                "end": 2114,
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2123,
          "end": 2144,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2128,
            "end": 2144,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2130,
              "end": 2144,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2137,
                "end": 2144,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2138,
                    "end": 2143,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2138,
                      "end": 2143,
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2130,
                "end": 2137,
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2145,
        "end": 2151,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2147,
          "end": 2151
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2086,
        "end": 2093,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2087,
            "end": 2092,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2087,
              "end": 2092,
              "decorators": [],
              "name": "Props",
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
      "start": 2153,
      "end": 2200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2167,
          "end": 2199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2167,
            "end": 2199,
            "decorators": [],
            "name": "comp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2171,
              "end": 2199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2173,
                "end": 2199,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2182,
                  "end": 2199,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 2183,
                      "end": 2198,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 2185,
                          "end": 2196,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2185,
                            "end": 2188,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2188,
                            "end": 2196,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2190,
                              "end": 2196
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2173,
                  "end": 2182,
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "ExpressionStatement",
      "start": 2202,
      "end": 2228,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2202,
        "end": 2227,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2209,
            "end": 2213,
            "decorators": [],
            "name": "comp",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 2215,
            "end": 2226,
            "properties": [
              {
                "type": "Property",
                "start": 2217,
                "end": 2224,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2217,
                  "end": 2220,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 2222,
                  "end": 2224,
                  "raw": "42",
                  "value": 42,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2202,
          "end": 2208,
          "decorators": [],
          "name": "doWork",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2235,
      "end": 2252,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2235,
        "end": 2251,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2242,
            "end": 2246,
            "decorators": [],
            "name": "comp",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 2248,
            "end": 2250,
            "properties": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2235,
          "end": 2241,
          "decorators": [],
          "name": "doWork",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2263,
      "end": 2336,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2280,
        "end": 2286,
        "decorators": [],
        "name": "mutate",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2290,
          "end": 2331,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2298,
            "end": 2331,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2300,
              "end": 2331,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2301,
                  "end": 2314,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2302,
                    "end": 2314,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2304,
                      "end": 2314,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2311,
                        "end": 2314,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2312,
                            "end": 2313,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2312,
                              "end": 2313,
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
                        "start": 2304,
                        "end": 2311,
                        "decorators": [],
                        "name": "NoInfer",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2316,
                  "end": 2325,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2317,
                    "end": 2325,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2319,
                      "end": 2325
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2327,
                "end": 2331,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2330,
                  "end": 2331,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2330,
                    "end": 2331,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2332,
        "end": 2335,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2334,
          "end": 2335,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2334,
            "end": 2335,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2286,
        "end": 2289,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2287,
            "end": 2288,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2287,
              "end": 2288,
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
      "start": 2337,
      "end": 2373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2343,
          "end": 2372,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2343,
            "end": 2350,
            "decorators": [],
            "name": "mutate1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2353,
            "end": 2372,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2360,
                "end": 2371,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 2370,
                  "end": 2371,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2361,
                    "end": 2362,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 2364,
                    "end": 2365,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2353,
              "end": 2359,
              "decorators": [],
              "name": "mutate",
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
      "type": "ClassDeclaration",
      "start": 2375,
      "end": 2407,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2405,
        "end": 2407,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2389,
        "end": 2401,
        "decorators": [],
        "name": "ExampleClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2401,
        "end": 2404,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2402,
            "end": 2403,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2402,
              "end": 2403,
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
      "type": "ClassDeclaration",
      "start": 2408,
      "end": 2569,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2425,
        "end": 2569,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2431,
            "end": 2505,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2431,
              "end": 2442,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2442,
              "end": 2505,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2503,
                "end": 2505,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 2443,
                  "end": 2473,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 2451,
                    "end": 2473,
                    "decorators": [],
                    "name": "clazz",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2456,
                      "end": 2473,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2458,
                        "end": 2473,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2470,
                          "end": 2473,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2471,
                              "end": 2472,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2471,
                                "end": 2472,
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
                          "start": 2458,
                          "end": 2470,
                          "decorators": [],
                          "name": "ExampleClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 2475,
                  "end": 2501,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 2483,
                    "end": 2501,
                    "decorators": [],
                    "name": "_value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2489,
                      "end": 2501,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2491,
                        "end": 2501,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2498,
                          "end": 2501,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2499,
                              "end": 2500,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2499,
                                "end": 2500,
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
                          "start": 2491,
                          "end": 2498,
                          "decorators": [],
                          "name": "NoInfer",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2511,
            "end": 2567,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2515,
              "end": 2520,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2520,
              "end": 2567,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2526,
                "end": 2567,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2536,
                    "end": 2555,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2543,
                      "end": 2554,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 2543,
                        "end": 2547
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2548,
                        "end": 2554,
                        "decorators": [],
                        "name": "_value",
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
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2522,
                "end": 2525,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2524,
                  "end": 2525,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2524,
                    "end": 2525,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2414,
        "end": 2421,
        "decorators": [],
        "name": "OkClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2421,
        "end": 2424,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2422,
            "end": 2423,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2422,
              "end": 2423,
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
      "type": "ClassDeclaration",
      "start": 2570,
      "end": 2669,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2588,
        "end": 2669,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2594,
            "end": 2667,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2594,
              "end": 2605,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2605,
              "end": 2667,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2665,
                "end": 2667,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 2606,
                  "end": 2636,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 2614,
                    "end": 2636,
                    "decorators": [],
                    "name": "clazz",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2619,
                      "end": 2636,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2621,
                        "end": 2636,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2633,
                          "end": 2636,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2634,
                              "end": 2635,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2634,
                                "end": 2635,
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
                          "start": 2621,
                          "end": 2633,
                          "decorators": [],
                          "name": "ExampleClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 2638,
                  "end": 2663,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 2645,
                    "end": 2663,
                    "decorators": [],
                    "name": "_value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2651,
                      "end": 2663,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2653,
                        "end": 2663,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2660,
                          "end": 2663,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2661,
                              "end": 2662,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2661,
                                "end": 2662,
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
                          "start": 2653,
                          "end": 2660,
                          "decorators": [],
                          "name": "NoInfer",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
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
        "start": 2576,
        "end": 2584,
        "decorators": [],
        "name": "OkClass2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2584,
        "end": 2587,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2585,
            "end": 2586,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2585,
              "end": 2586,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
