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
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 35,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
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
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 26,
                "end": 32
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 37,
      "end": 88,
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 88,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 86,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 63,
          "end": 67,
          "expression": {
            "type": "Identifier",
            "start": 63,
            "end": 67,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 54,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 274,
      "end": 767,
      "body": {
        "type": "TSModuleBlock",
        "start": 293,
        "end": 767,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 299,
            "end": 356,
            "body": {
              "type": "TSInterfaceBody",
              "start": 311,
              "end": 356,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 321,
                  "end": 331,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 324,
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
                    "start": 324,
                    "end": 330,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 326,
                      "end": 330,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 330,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 340,
                  "end": 350,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 343,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 343,
                    "end": 349,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 345,
                      "end": 349,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 349,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 362,
            "end": 449,
            "body": {
              "type": "TSInterfaceBody",
              "start": 384,
              "end": 449,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 394,
                  "end": 407,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 397,
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
                    "start": 397,
                    "end": 406,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 399,
                      "end": 406,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 406,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 422,
                  "end": 434,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 425,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 425,
                    "end": 433,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 427,
                      "end": 433
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 382,
                "end": 383,
                "expression": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 455,
            "end": 511,
            "body": {
              "type": "TSInterfaceBody",
              "start": 468,
              "end": 511,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 478,
                  "end": 486,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 478,
                    "end": 479,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 479,
                    "end": 485,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 481,
                      "end": 485,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 485,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 495,
                  "end": 505,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 495,
                    "end": 498,
                    "raw": "2.0",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 498,
                    "end": 504,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 500,
                      "end": 504,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 500,
                        "end": 504,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 465,
              "end": 467,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 517,
            "end": 602,
            "body": {
              "type": "TSInterfaceBody",
              "start": 541,
              "end": 602,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 551,
                  "end": 562,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 551,
                    "end": 552,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 552,
                    "end": 561,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 554,
                      "end": 561,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 561,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 577,
                  "end": 587,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 577,
                    "end": 578,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 578,
                    "end": 586,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 580,
                      "end": 586
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 538,
                "end": 540,
                "expression": {
                  "type": "Identifier",
                  "start": 538,
                  "end": 540,
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 527,
              "end": 529,
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 608,
            "end": 668,
            "body": {
              "type": "TSInterfaceBody",
              "start": 621,
              "end": 668,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 631,
                  "end": 641,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 631,
                    "end": 634,
                    "raw": "'1'",
                    "value": "1",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 634,
                    "end": 640,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 636,
                      "end": 640,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 636,
                        "end": 640,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 650,
                  "end": 662,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 650,
                    "end": 655,
                    "raw": "'2.0'",
                    "value": "2.0",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 655,
                    "end": 661,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 657,
                      "end": 661,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 661,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 618,
              "end": 620,
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 674,
            "end": 765,
            "body": {
              "type": "TSInterfaceBody",
              "start": 698,
              "end": 765,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 708,
                  "end": 721,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 708,
                    "end": 711,
                    "raw": "'1'",
                    "value": "1",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 711,
                    "end": 720,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 713,
                      "end": 720,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 713,
                        "end": 720,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 736,
                  "end": 750,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 736,
                    "end": 741,
                    "raw": "'2.0'",
                    "value": "2.0",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 741,
                    "end": 749,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 743,
                      "end": 749
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 695,
                "end": 697,
                "expression": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 697,
                  "decorators": [],
                  "name": "A3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 684,
              "end": 686,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 292,
        "decorators": [],
        "name": "NotOptional",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 810,
      "end": 1312,
      "body": {
        "type": "TSModuleBlock",
        "start": 826,
        "end": 1312,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 832,
            "end": 891,
            "body": {
              "type": "TSInterfaceBody",
              "start": 844,
              "end": 891,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 854,
                  "end": 865,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 854,
                    "end": 857,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 858,
                    "end": 864,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 860,
                      "end": 864,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 860,
                        "end": 864,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 874,
                  "end": 885,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 874,
                    "end": 877,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 878,
                    "end": 884,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 880,
                      "end": 884,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 880,
                        "end": 884,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 842,
              "end": 843,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 897,
            "end": 986,
            "body": {
              "type": "TSInterfaceBody",
              "start": 919,
              "end": 986,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 929,
                  "end": 943,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 929,
                    "end": 932,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 933,
                    "end": 942,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 935,
                      "end": 942,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 935,
                        "end": 942,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 958,
                  "end": 971,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 958,
                    "end": 961,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 962,
                    "end": 970,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 964,
                      "end": 970
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 917,
                "end": 918,
                "expression": {
                  "type": "Identifier",
                  "start": 917,
                  "end": 918,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 907,
              "end": 908,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 992,
            "end": 1050,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1005,
              "end": 1050,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1015,
                  "end": 1024,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1015,
                    "end": 1016,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1017,
                    "end": 1023,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1019,
                      "end": 1023,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1019,
                        "end": 1023,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1033,
                  "end": 1044,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1033,
                    "end": 1036,
                    "raw": "2.0",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1037,
                    "end": 1043,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1039,
                      "end": 1043,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1039,
                        "end": 1043,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1002,
              "end": 1004,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1056,
            "end": 1143,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1080,
              "end": 1143,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1090,
                  "end": 1102,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1090,
                    "end": 1091,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1092,
                    "end": 1101,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1094,
                      "end": 1101,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1094,
                        "end": 1101,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1117,
                  "end": 1128,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1117,
                    "end": 1118,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1119,
                    "end": 1127,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1121,
                      "end": 1127
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1077,
                "end": 1079,
                "expression": {
                  "type": "Identifier",
                  "start": 1077,
                  "end": 1079,
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1066,
              "end": 1068,
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1149,
            "end": 1211,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1162,
              "end": 1211,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1172,
                  "end": 1183,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1172,
                    "end": 1175,
                    "raw": "'1'",
                    "value": "1",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1176,
                    "end": 1182,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1178,
                      "end": 1182,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1178,
                        "end": 1182,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1192,
                  "end": 1205,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1192,
                    "end": 1197,
                    "raw": "'2.0'",
                    "value": "2.0",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1198,
                    "end": 1204,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1200,
                      "end": 1204,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1200,
                        "end": 1204,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1159,
              "end": 1161,
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1217,
            "end": 1310,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1241,
              "end": 1310,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1251,
                  "end": 1265,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1251,
                    "end": 1254,
                    "raw": "'1'",
                    "value": "1",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1255,
                    "end": 1264,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1257,
                      "end": 1264,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1257,
                        "end": 1264,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1280,
                  "end": 1295,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Literal",
                    "start": 1280,
                    "end": 1285,
                    "raw": "'2.0'",
                    "value": "2.0",
                    "regex": null,
                    "bigint": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1286,
                    "end": 1294,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1288,
                      "end": 1294
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1238,
                "end": 1240,
                "expression": {
                  "type": "Identifier",
                  "start": 1238,
                  "end": 1240,
                  "decorators": [],
                  "name": "A3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 1227,
              "end": 1229,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 817,
        "end": 825,
        "decorators": [],
        "name": "Optional",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
