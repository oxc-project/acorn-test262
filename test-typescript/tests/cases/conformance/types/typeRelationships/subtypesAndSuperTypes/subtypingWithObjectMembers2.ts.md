__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1312,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 35,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 33,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 26,
                "end": 32
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
      "type": "TSInterfaceDeclaration",
      "start": 37,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 54,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 63,
          "end": 67,
          "expression": {
            "type": "Identifier",
            "start": 63,
            "end": 67,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 88,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 86,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
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
      "type": "TSModuleDeclaration",
      "start": 274,
      "end": 767,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 292,
        "name": "NotOptional",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 293,
        "end": 767,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 299,
            "end": 356,
            "id": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 311,
              "end": 356,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 321,
                  "end": 331,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 324,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 324,
                    "end": 330,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 326,
                      "end": 330,
                      "typeName": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 330,
                        "name": "Base",
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
                  "start": 340,
                  "end": 350,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 343,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 343,
                    "end": 349,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 345,
                      "end": 349,
                      "typeName": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 349,
                        "name": "Base",
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
            "type": "TSInterfaceDeclaration",
            "start": 362,
            "end": 449,
            "id": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 382,
                "end": 383,
                "expression": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 384,
              "end": 449,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 394,
                  "end": 407,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 397,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 397,
                    "end": 406,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 399,
                      "end": 406,
                      "typeName": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 406,
                        "name": "Derived",
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
                  "start": 422,
                  "end": 434,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 425,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 425,
                    "end": 433,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 427,
                      "end": 433
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
            "type": "TSInterfaceDeclaration",
            "start": 455,
            "end": 511,
            "id": {
              "type": "Identifier",
              "start": 465,
              "end": 467,
              "name": "A2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 468,
              "end": 511,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 478,
                  "end": 486,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 478,
                    "end": 479,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 479,
                    "end": 485,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 481,
                      "end": 485,
                      "typeName": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 485,
                        "name": "Base",
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
                  "start": 495,
                  "end": 505,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 495,
                    "end": 498,
                    "value": 2,
                    "raw": "2.0"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 498,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 500,
                      "end": 504,
                      "typeName": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 504,
                        "name": "Base",
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
            "type": "TSInterfaceDeclaration",
            "start": 517,
            "end": 602,
            "id": {
              "type": "Identifier",
              "start": 527,
              "end": 529,
              "name": "B2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 538,
                "end": 540,
                "expression": {
                  "type": "Identifier",
                  "start": 538,
                  "end": 540,
                  "name": "A2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 541,
              "end": 602,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 551,
                  "end": 562,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 551,
                    "end": 552,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 552,
                    "end": 561,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 554,
                      "end": 561,
                      "typeName": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 561,
                        "name": "Derived",
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
                  "start": 577,
                  "end": 587,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 577,
                    "end": 578,
                    "value": 2,
                    "raw": "2"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 578,
                    "end": 586,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 580,
                      "end": 586
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
            "type": "TSInterfaceDeclaration",
            "start": 608,
            "end": 668,
            "id": {
              "type": "Identifier",
              "start": 618,
              "end": 620,
              "name": "A3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 621,
              "end": 668,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 631,
                  "end": 641,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 631,
                    "end": 634,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 634,
                    "end": 640,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 636,
                      "end": 640,
                      "typeName": {
                        "type": "Identifier",
                        "start": 636,
                        "end": 640,
                        "name": "Base",
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
                  "start": 650,
                  "end": 662,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 650,
                    "end": 655,
                    "value": "2.0",
                    "raw": "'2.0'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 655,
                    "end": 661,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 657,
                      "end": 661,
                      "typeName": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 661,
                        "name": "Base",
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
            "type": "TSInterfaceDeclaration",
            "start": 674,
            "end": 765,
            "id": {
              "type": "Identifier",
              "start": 684,
              "end": 686,
              "name": "B3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 695,
                "end": 697,
                "expression": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 697,
                  "name": "A3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 698,
              "end": 765,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 708,
                  "end": 721,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 708,
                    "end": 711,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 711,
                    "end": 720,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 713,
                      "end": 720,
                      "typeName": {
                        "type": "Identifier",
                        "start": 713,
                        "end": 720,
                        "name": "Derived",
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
                  "start": 736,
                  "end": 750,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 736,
                    "end": 741,
                    "value": "2.0",
                    "raw": "'2.0'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 741,
                    "end": 749,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 743,
                      "end": 749
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 810,
      "end": 1312,
      "id": {
        "type": "Identifier",
        "start": 817,
        "end": 825,
        "name": "Optional",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 826,
        "end": 1312,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 832,
            "end": 891,
            "id": {
              "type": "Identifier",
              "start": 842,
              "end": 843,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 844,
              "end": 891,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 854,
                  "end": 865,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 854,
                    "end": 857,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 858,
                    "end": 864,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 860,
                      "end": 864,
                      "typeName": {
                        "type": "Identifier",
                        "start": 860,
                        "end": 864,
                        "name": "Base",
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
                  "start": 874,
                  "end": 885,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 874,
                    "end": 877,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 878,
                    "end": 884,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 880,
                      "end": 884,
                      "typeName": {
                        "type": "Identifier",
                        "start": 880,
                        "end": 884,
                        "name": "Base",
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
            "type": "TSInterfaceDeclaration",
            "start": 897,
            "end": 986,
            "id": {
              "type": "Identifier",
              "start": 907,
              "end": 908,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 917,
                "end": 918,
                "expression": {
                  "type": "Identifier",
                  "start": 917,
                  "end": 918,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 919,
              "end": 986,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 929,
                  "end": 943,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 929,
                    "end": 932,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 933,
                    "end": 942,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 935,
                      "end": 942,
                      "typeName": {
                        "type": "Identifier",
                        "start": 935,
                        "end": 942,
                        "name": "Derived",
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
                  "start": 958,
                  "end": 971,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 958,
                    "end": 961,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 962,
                    "end": 970,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 964,
                      "end": 970
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
            "type": "TSInterfaceDeclaration",
            "start": 992,
            "end": 1050,
            "id": {
              "type": "Identifier",
              "start": 1002,
              "end": 1004,
              "name": "A2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1005,
              "end": 1050,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1015,
                  "end": 1024,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1015,
                    "end": 1016,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1017,
                    "end": 1023,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1019,
                      "end": 1023,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1019,
                        "end": 1023,
                        "name": "Base",
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
                  "start": 1033,
                  "end": 1044,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1033,
                    "end": 1036,
                    "value": 2,
                    "raw": "2.0"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1037,
                    "end": 1043,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1039,
                      "end": 1043,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1039,
                        "end": 1043,
                        "name": "Base",
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
            "type": "TSInterfaceDeclaration",
            "start": 1056,
            "end": 1143,
            "id": {
              "type": "Identifier",
              "start": 1066,
              "end": 1068,
              "name": "B2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1077,
                "end": 1079,
                "expression": {
                  "type": "Identifier",
                  "start": 1077,
                  "end": 1079,
                  "name": "A2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1080,
              "end": 1143,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1090,
                  "end": 1102,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1090,
                    "end": 1091,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1092,
                    "end": 1101,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1094,
                      "end": 1101,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1094,
                        "end": 1101,
                        "name": "Derived",
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
                  "start": 1117,
                  "end": 1128,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1117,
                    "end": 1118,
                    "value": 2,
                    "raw": "2"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1119,
                    "end": 1127,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1121,
                      "end": 1127
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
            "type": "TSInterfaceDeclaration",
            "start": 1149,
            "end": 1211,
            "id": {
              "type": "Identifier",
              "start": 1159,
              "end": 1161,
              "name": "A3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1162,
              "end": 1211,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1172,
                  "end": 1183,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1172,
                    "end": 1175,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1176,
                    "end": 1182,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1178,
                      "end": 1182,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1178,
                        "end": 1182,
                        "name": "Base",
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
                  "start": 1192,
                  "end": 1205,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1192,
                    "end": 1197,
                    "value": "2.0",
                    "raw": "'2.0'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1198,
                    "end": 1204,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1200,
                      "end": 1204,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1200,
                        "end": 1204,
                        "name": "Base",
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
            "type": "TSInterfaceDeclaration",
            "start": 1217,
            "end": 1310,
            "id": {
              "type": "Identifier",
              "start": 1227,
              "end": 1229,
              "name": "B3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1238,
                "end": 1240,
                "expression": {
                  "type": "Identifier",
                  "start": 1238,
                  "end": 1240,
                  "name": "A3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1241,
              "end": 1310,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1251,
                  "end": 1265,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1251,
                    "end": 1254,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1255,
                    "end": 1264,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1257,
                      "end": 1264,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1257,
                        "end": 1264,
                        "name": "Derived",
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
                  "start": 1280,
                  "end": 1295,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1280,
                    "end": 1285,
                    "value": "2.0",
                    "raw": "'2.0'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1286,
                    "end": 1294,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1288,
                      "end": 1294
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
