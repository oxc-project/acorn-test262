__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 1734,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 111,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 78,
            "end": 109,
            "parameters": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 99,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 91,
                  "end": 99,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 93,
                    "end": 99
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 108,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 102,
                "end": 108
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 112,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 121,
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 124,
        "end": 146,
        "typeName": {
          "type": "Identifier",
          "start": 124,
          "end": 128,
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 128,
          "end": 146,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 129,
              "end": 133,
              "typeName": {
                "type": "Identifier",
                "start": 129,
                "end": 133,
                "decorators": [],
                "name": "Obj1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 135,
              "end": 145,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 145,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "decorators": [],
                  "name": "Obj1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 148,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 162,
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 163,
        "end": 229,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 169,
            "end": 191,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 181,
              "decorators": [],
              "name": "concreteProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 190,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 183,
                "end": 190,
                "literal": {
                  "type": "Literal",
                  "start": 183,
                  "end": 190,
                  "value": "hello",
                  "raw": "'hello'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 196,
            "end": 227,
            "parameters": [
              {
                "type": "Identifier",
                "start": 206,
                "end": 217,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 209,
                  "end": 217,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 211,
                    "end": 217
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 226,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 220,
                "end": 226
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 230,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 239,
        "decorators": [],
        "name": "Res2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 242,
        "end": 264,
        "typeName": {
          "type": "Identifier",
          "start": 242,
          "end": 246,
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 246,
          "end": 264,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 247,
              "end": 251,
              "typeName": {
                "type": "Identifier",
                "start": 247,
                "end": 251,
                "decorators": [],
                "name": "Obj2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 253,
              "end": 263,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 259,
                "end": 263,
                "typeName": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 263,
                  "decorators": [],
                  "name": "Obj2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 266,
      "end": 355,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 280,
        "decorators": [],
        "name": "Obj3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 281,
        "end": 355,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 287,
            "end": 318,
            "parameters": [
              {
                "type": "Identifier",
                "start": 297,
                "end": 308,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 300,
                  "end": 308,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 302,
                    "end": 308
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 317,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 311,
                "end": 317
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 323,
            "end": 353,
            "parameters": [
              {
                "type": "Identifier",
                "start": 333,
                "end": 344,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 336,
                  "end": 344,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 338,
                    "end": 344
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 345,
              "end": 352,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 347,
                "end": 352,
                "literal": {
                  "type": "Literal",
                  "start": 347,
                  "end": 352,
                  "value": "foo",
                  "raw": "'foo'"
                }
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 356,
      "end": 390,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 365,
        "decorators": [],
        "name": "Res3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 368,
        "end": 390,
        "typeName": {
          "type": "Identifier",
          "start": 368,
          "end": 372,
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 372,
          "end": 390,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 373,
              "end": 377,
              "typeName": {
                "type": "Identifier",
                "start": 373,
                "end": 377,
                "decorators": [],
                "name": "Obj3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 379,
              "end": 389,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 385,
                "end": 389,
                "typeName": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 389,
                  "decorators": [],
                  "name": "Obj3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 392,
      "end": 472,
      "id": {
        "type": "Identifier",
        "start": 402,
        "end": 406,
        "decorators": [],
        "name": "Obj4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 407,
        "end": 472,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 413,
            "end": 435,
            "parameters": [
              {
                "type": "Identifier",
                "start": 414,
                "end": 425,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 417,
                  "end": 425,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 419,
                    "end": 425
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 426,
              "end": 434,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 428,
                "end": 434
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 440,
            "end": 470,
            "parameters": [
              {
                "type": "Identifier",
                "start": 450,
                "end": 461,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 453,
                  "end": 461,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 455,
                    "end": 461
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 469,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 464,
                "end": 469,
                "literal": {
                  "type": "Literal",
                  "start": 464,
                  "end": 469,
                  "value": "foo",
                  "raw": "'foo'"
                }
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 473,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 478,
        "end": 482,
        "decorators": [],
        "name": "Res4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 485,
        "end": 507,
        "typeName": {
          "type": "Identifier",
          "start": 485,
          "end": 489,
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 489,
          "end": 507,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 490,
              "end": 494,
              "typeName": {
                "type": "Identifier",
                "start": 490,
                "end": 494,
                "decorators": [],
                "name": "Obj4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 496,
              "end": 506,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 502,
                "end": 506,
                "typeName": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 506,
                  "decorators": [],
                  "name": "Obj4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 509,
      "end": 589,
      "id": {
        "type": "Identifier",
        "start": 519,
        "end": 523,
        "decorators": [],
        "name": "Obj5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 524,
        "end": 589,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 530,
            "end": 561,
            "parameters": [
              {
                "type": "Identifier",
                "start": 540,
                "end": 551,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 543,
                  "end": 551,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 545,
                    "end": 551
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 552,
              "end": 560,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 554,
                "end": 560
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 566,
            "end": 587,
            "parameters": [
              {
                "type": "Identifier",
                "start": 567,
                "end": 578,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 570,
                  "end": 578,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 572,
                    "end": 578
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 579,
              "end": 586,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 581,
                "end": 586,
                "literal": {
                  "type": "Literal",
                  "start": 581,
                  "end": 586,
                  "value": "foo",
                  "raw": "'foo'"
                }
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
      "start": 590,
      "end": 624,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 599,
        "decorators": [],
        "name": "Res5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 602,
        "end": 624,
        "typeName": {
          "type": "Identifier",
          "start": 602,
          "end": 606,
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 606,
          "end": 624,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 607,
              "end": 611,
              "typeName": {
                "type": "Identifier",
                "start": 607,
                "end": 611,
                "decorators": [],
                "name": "Obj5",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 613,
              "end": 623,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 619,
                "end": 623,
                "typeName": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 623,
                  "decorators": [],
                  "name": "Obj5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 626,
      "end": 670,
      "id": {
        "type": "Identifier",
        "start": 631,
        "end": 639,
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 639,
        "end": 642,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 640,
            "end": 641,
            "name": {
              "type": "Identifier",
              "start": 640,
              "end": 641,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSMappedType",
        "start": 645,
        "end": 670,
        "key": {
          "type": "Identifier",
          "start": 648,
          "end": 649,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 653,
          "end": 660,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 659,
            "end": 660,
            "typeName": {
              "type": "Identifier",
              "start": 659,
              "end": 660,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 663,
          "end": 667,
          "objectType": {
            "type": "TSTypeReference",
            "start": 663,
            "end": 664,
            "typeName": {
              "type": "Identifier",
              "start": 663,
              "end": 664,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 665,
            "end": 666,
            "typeName": {
              "type": "Identifier",
              "start": 665,
              "end": 666,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 672,
      "end": 733,
      "id": {
        "type": "Identifier",
        "start": 682,
        "end": 686,
        "decorators": [],
        "name": "Obj6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 687,
        "end": 733,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 693,
            "end": 731,
            "parameters": [
              {
                "type": "Identifier",
                "start": 703,
                "end": 722,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 706,
                  "end": 722,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 708,
                    "end": 722,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 708,
                        "end": 714,
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 720,
                        "end": 722,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 714,
                        "end": 720
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 723,
              "end": 730,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 725,
                "end": 730,
                "literal": {
                  "type": "Literal",
                  "start": 725,
                  "end": 730,
                  "value": "foo",
                  "raw": "'foo'"
                }
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 734,
      "end": 760,
      "id": {
        "type": "Identifier",
        "start": 739,
        "end": 743,
        "decorators": [],
        "name": "Res6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 746,
        "end": 760,
        "typeName": {
          "type": "Identifier",
          "start": 746,
          "end": 754,
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 754,
          "end": 760,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 755,
              "end": 759,
              "typeName": {
                "type": "Identifier",
                "start": 755,
                "end": 759,
                "decorators": [],
                "name": "Obj6",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 762,
      "end": 850,
      "id": {
        "type": "Identifier",
        "start": 772,
        "end": 776,
        "decorators": [],
        "name": "Obj7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 777,
        "end": 850,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 783,
            "end": 805,
            "parameters": [
              {
                "type": "Identifier",
                "start": 784,
                "end": 795,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 787,
                  "end": 795,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 789,
                    "end": 795
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 796,
              "end": 804,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 798,
                "end": 804
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 810,
            "end": 848,
            "parameters": [
              {
                "type": "Identifier",
                "start": 820,
                "end": 839,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 823,
                  "end": 839,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 825,
                    "end": 839,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 825,
                        "end": 831,
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 837,
                        "end": 839,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 831,
                        "end": 837
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 840,
              "end": 847,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 842,
                "end": 847,
                "literal": {
                  "type": "Literal",
                  "start": 842,
                  "end": 847,
                  "value": "foo",
                  "raw": "'foo'"
                }
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 851,
      "end": 877,
      "id": {
        "type": "Identifier",
        "start": 856,
        "end": 860,
        "decorators": [],
        "name": "Res7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 863,
        "end": 877,
        "typeName": {
          "type": "Identifier",
          "start": 863,
          "end": 871,
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 871,
          "end": 877,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 872,
              "end": 876,
              "typeName": {
                "type": "Identifier",
                "start": 872,
                "end": 876,
                "decorators": [],
                "name": "Obj7",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 879,
      "end": 967,
      "id": {
        "type": "Identifier",
        "start": 889,
        "end": 893,
        "decorators": [],
        "name": "Obj8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 894,
        "end": 967,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 900,
            "end": 931,
            "parameters": [
              {
                "type": "Identifier",
                "start": 910,
                "end": 921,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 913,
                  "end": 921,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 915,
                    "end": 921
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 922,
              "end": 930,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 924,
                "end": 930
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 936,
            "end": 965,
            "parameters": [
              {
                "type": "Identifier",
                "start": 937,
                "end": 956,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 940,
                  "end": 956,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 942,
                    "end": 956,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 942,
                        "end": 948,
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 954,
                        "end": 956,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 948,
                        "end": 954
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 957,
              "end": 964,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 959,
                "end": 964,
                "literal": {
                  "type": "Literal",
                  "start": 959,
                  "end": 964,
                  "value": "foo",
                  "raw": "'foo'"
                }
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
      "start": 968,
      "end": 994,
      "id": {
        "type": "Identifier",
        "start": 973,
        "end": 977,
        "decorators": [],
        "name": "Res8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 980,
        "end": 994,
        "typeName": {
          "type": "Identifier",
          "start": 980,
          "end": 988,
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 988,
          "end": 994,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 989,
              "end": 993,
              "typeName": {
                "type": "Identifier",
                "start": 989,
                "end": 993,
                "decorators": [],
                "name": "Obj8",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 996,
      "end": 1068,
      "id": {
        "type": "Identifier",
        "start": 1001,
        "end": 1014,
        "decorators": [],
        "name": "StrippingPick",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1014,
        "end": 1036,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1015,
            "end": 1016,
            "name": {
              "type": "Identifier",
              "start": 1015,
              "end": 1016,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1018,
            "end": 1035,
            "name": {
              "type": "Identifier",
              "start": 1018,
              "end": 1019,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1028,
              "end": 1035,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1034,
                "end": 1035,
                "typeName": {
                  "type": "Identifier",
                  "start": 1034,
                  "end": 1035,
                  "decorators": [],
                  "name": "T",
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
        "type": "TSMappedType",
        "start": 1039,
        "end": 1068,
        "key": {
          "type": "Identifier",
          "start": 1052,
          "end": 1053,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeReference",
          "start": 1057,
          "end": 1058,
          "typeName": {
            "type": "Identifier",
            "start": 1057,
            "end": 1058,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1061,
          "end": 1065,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1061,
            "end": 1062,
            "typeName": {
              "type": "Identifier",
              "start": 1061,
              "end": 1062,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 1063,
            "end": 1064,
            "typeName": {
              "type": "Identifier",
              "start": 1063,
              "end": 1064,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": "-"
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1070,
      "end": 1124,
      "id": {
        "type": "Identifier",
        "start": 1080,
        "end": 1084,
        "decorators": [],
        "name": "Obj9",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1085,
        "end": 1124,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1091,
            "end": 1122,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1101,
                "end": 1112,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1104,
                  "end": 1112,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1106,
                    "end": 1112
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1113,
              "end": 1121,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1115,
                "end": 1121
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1125,
      "end": 1168,
      "id": {
        "type": "Identifier",
        "start": 1130,
        "end": 1134,
        "decorators": [],
        "name": "Res9",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1137,
        "end": 1168,
        "typeName": {
          "type": "Identifier",
          "start": 1137,
          "end": 1150,
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1150,
          "end": 1168,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1151,
              "end": 1155,
              "typeName": {
                "type": "Identifier",
                "start": 1151,
                "end": 1155,
                "decorators": [],
                "name": "Obj9",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 1157,
              "end": 1167,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1163,
                "end": 1167,
                "typeName": {
                  "type": "Identifier",
                  "start": 1163,
                  "end": 1167,
                  "decorators": [],
                  "name": "Obj9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1170,
      "end": 1260,
      "id": {
        "type": "Identifier",
        "start": 1180,
        "end": 1185,
        "decorators": [],
        "name": "Obj10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1186,
        "end": 1260,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1192,
            "end": 1223,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1202,
                "end": 1213,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1205,
                  "end": 1213,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1207,
                    "end": 1213
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1214,
              "end": 1222,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1216,
                "end": 1222
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1228,
            "end": 1258,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1238,
                "end": 1249,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1241,
                  "end": 1249,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1243,
                    "end": 1249
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1250,
              "end": 1257,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1252,
                "end": 1257,
                "literal": {
                  "type": "Literal",
                  "start": 1252,
                  "end": 1257,
                  "value": "foo",
                  "raw": "'foo'"
                }
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1261,
      "end": 1307,
      "id": {
        "type": "Identifier",
        "start": 1266,
        "end": 1271,
        "decorators": [],
        "name": "Res10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1274,
        "end": 1307,
        "typeName": {
          "type": "Identifier",
          "start": 1274,
          "end": 1287,
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1287,
          "end": 1307,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1288,
              "end": 1293,
              "typeName": {
                "type": "Identifier",
                "start": 1288,
                "end": 1293,
                "decorators": [],
                "name": "Obj10",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 1295,
              "end": 1306,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1301,
                "end": 1306,
                "typeName": {
                  "type": "Identifier",
                  "start": 1301,
                  "end": 1306,
                  "decorators": [],
                  "name": "Obj10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1309,
      "end": 1390,
      "id": {
        "type": "Identifier",
        "start": 1319,
        "end": 1324,
        "decorators": [],
        "name": "Obj11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1325,
        "end": 1390,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1331,
            "end": 1353,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1332,
                "end": 1343,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1335,
                  "end": 1343,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1337,
                    "end": 1343
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1344,
              "end": 1352,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1346,
                "end": 1352
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1358,
            "end": 1388,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1368,
                "end": 1379,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1371,
                  "end": 1379,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1373,
                    "end": 1379
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1380,
              "end": 1387,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1382,
                "end": 1387,
                "literal": {
                  "type": "Literal",
                  "start": 1382,
                  "end": 1387,
                  "value": "foo",
                  "raw": "'foo'"
                }
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1391,
      "end": 1437,
      "id": {
        "type": "Identifier",
        "start": 1396,
        "end": 1401,
        "decorators": [],
        "name": "Res11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1404,
        "end": 1437,
        "typeName": {
          "type": "Identifier",
          "start": 1404,
          "end": 1417,
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1417,
          "end": 1437,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1418,
              "end": 1423,
              "typeName": {
                "type": "Identifier",
                "start": 1418,
                "end": 1423,
                "decorators": [],
                "name": "Obj11",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 1425,
              "end": 1436,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1431,
                "end": 1436,
                "typeName": {
                  "type": "Identifier",
                  "start": 1431,
                  "end": 1436,
                  "decorators": [],
                  "name": "Obj11",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1439,
      "end": 1520,
      "id": {
        "type": "Identifier",
        "start": 1449,
        "end": 1454,
        "decorators": [],
        "name": "Obj12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1455,
        "end": 1520,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1461,
            "end": 1492,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1471,
                "end": 1482,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1474,
                  "end": 1482,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1476,
                    "end": 1482
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1483,
              "end": 1491,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1485,
                "end": 1491
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 1497,
            "end": 1518,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1498,
                "end": 1509,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1501,
                  "end": 1509,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1503,
                    "end": 1509
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1510,
              "end": 1517,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1512,
                "end": 1517,
                "literal": {
                  "type": "Literal",
                  "start": 1512,
                  "end": 1517,
                  "value": "foo",
                  "raw": "'foo'"
                }
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
      "start": 1521,
      "end": 1567,
      "id": {
        "type": "Identifier",
        "start": 1526,
        "end": 1531,
        "decorators": [],
        "name": "Res12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1534,
        "end": 1567,
        "typeName": {
          "type": "Identifier",
          "start": 1534,
          "end": 1547,
          "decorators": [],
          "name": "StrippingPick",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1547,
          "end": 1567,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1548,
              "end": 1553,
              "typeName": {
                "type": "Identifier",
                "start": 1548,
                "end": 1553,
                "decorators": [],
                "name": "Obj12",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 1555,
              "end": 1566,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1561,
                "end": 1566,
                "typeName": {
                  "type": "Identifier",
                  "start": 1561,
                  "end": 1566,
                  "decorators": [],
                  "name": "Obj12",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1569,
      "end": 1632,
      "id": {
        "type": "Identifier",
        "start": 1574,
        "end": 1591,
        "decorators": [],
        "name": "StrippingIdentity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1591,
        "end": 1594,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1592,
            "end": 1593,
            "name": {
              "type": "Identifier",
              "start": 1592,
              "end": 1593,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSMappedType",
        "start": 1597,
        "end": 1632,
        "key": {
          "type": "Identifier",
          "start": 1610,
          "end": 1611,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1615,
          "end": 1622,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1621,
            "end": 1622,
            "typeName": {
              "type": "Identifier",
              "start": 1621,
              "end": 1622,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1625,
          "end": 1629,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1625,
            "end": 1626,
            "typeName": {
              "type": "Identifier",
              "start": 1625,
              "end": 1626,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 1627,
            "end": 1628,
            "typeName": {
              "type": "Identifier",
              "start": 1627,
              "end": 1628,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": "-"
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1634,
      "end": 1696,
      "id": {
        "type": "Identifier",
        "start": 1644,
        "end": 1649,
        "decorators": [],
        "name": "Obj13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1650,
        "end": 1696,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1656,
            "end": 1694,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1666,
                "end": 1685,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1669,
                  "end": 1685,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 1671,
                    "end": 1685,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 1671,
                        "end": 1677,
                        "value": {
                          "raw": "wow",
                          "cooked": "wow"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 1683,
                        "end": 1685,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1677,
                        "end": 1683
                      }
                    ]
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1686,
              "end": 1693,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1688,
                "end": 1693,
                "literal": {
                  "type": "Literal",
                  "start": 1688,
                  "end": 1693,
                  "value": "foo",
                  "raw": "'foo'"
                }
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1697,
      "end": 1734,
      "id": {
        "type": "Identifier",
        "start": 1702,
        "end": 1707,
        "decorators": [],
        "name": "Res13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1710,
        "end": 1734,
        "typeName": {
          "type": "Identifier",
          "start": 1710,
          "end": 1727,
          "decorators": [],
          "name": "StrippingIdentity",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1727,
          "end": 1734,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1728,
              "end": 1733,
              "typeName": {
                "type": "Identifier",
                "start": 1728,
                "end": 1733,
                "decorators": [],
                "name": "Obj13",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
