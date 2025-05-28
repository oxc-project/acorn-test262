__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1277,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
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
      "end": 770,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 292,
        "decorators": [],
        "name": "NotOptional",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 293,
        "end": 770,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 299,
            "end": 359,
            "id": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 311,
              "end": 359,
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
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
                  "end": 353,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 343,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 343,
                    "end": 352,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 345,
                      "end": 352,
                      "typeName": {
                        "type": "Identifier",
                        "start": 345,
                        "end": 352,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 365,
            "end": 450,
            "id": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 385,
                "end": 386,
                "expression": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 386,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 387,
              "end": 450,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 397,
                  "end": 410,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 400,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 400,
                    "end": 409,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 402,
                      "end": 409,
                      "typeName": {
                        "type": "Identifier",
                        "start": 402,
                        "end": 409,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 425,
                  "end": 435,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 428,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 428,
                    "end": 434,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 430,
                      "end": 434,
                      "typeName": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 434,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 456,
            "end": 515,
            "id": {
              "type": "Identifier",
              "start": 466,
              "end": 468,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 469,
              "end": 515,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 479,
                  "end": 487,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 479,
                    "end": 480,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 480,
                    "end": 486,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 482,
                      "end": 486,
                      "typeName": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 486,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 496,
                  "end": 509,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 496,
                    "end": 499,
                    "value": 2,
                    "raw": "2.0"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 499,
                    "end": 508,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 501,
                      "end": 508,
                      "typeName": {
                        "type": "Identifier",
                        "start": 501,
                        "end": 508,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 521,
            "end": 604,
            "id": {
              "type": "Identifier",
              "start": 531,
              "end": 533,
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 542,
                "end": 544,
                "expression": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 544,
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 545,
              "end": 604,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 555,
                  "end": 566,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 555,
                    "end": 556,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 556,
                    "end": 565,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 558,
                      "end": 565,
                      "typeName": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 565,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 581,
                  "end": 589,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 581,
                    "end": 582,
                    "value": 2,
                    "raw": "2"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 582,
                    "end": 588,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 584,
                      "end": 588,
                      "typeName": {
                        "type": "Identifier",
                        "start": 584,
                        "end": 588,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 610,
            "end": 673,
            "id": {
              "type": "Identifier",
              "start": 620,
              "end": 622,
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 623,
              "end": 673,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 633,
                  "end": 643,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 633,
                    "end": 636,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 636,
                    "end": 642,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 638,
                      "end": 642,
                      "typeName": {
                        "type": "Identifier",
                        "start": 638,
                        "end": 642,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 652,
                  "end": 667,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 652,
                    "end": 657,
                    "value": "2.0",
                    "raw": "'2.0'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 657,
                    "end": 666,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 659,
                      "end": 666,
                      "typeName": {
                        "type": "Identifier",
                        "start": 659,
                        "end": 666,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 679,
            "end": 768,
            "id": {
              "type": "Identifier",
              "start": 689,
              "end": 691,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 700,
                "end": 702,
                "expression": {
                  "type": "Identifier",
                  "start": 700,
                  "end": 702,
                  "decorators": [],
                  "name": "A3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 703,
              "end": 768,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 713,
                  "end": 726,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 713,
                    "end": 716,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 716,
                    "end": 725,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 718,
                      "end": 725,
                      "typeName": {
                        "type": "Identifier",
                        "start": 718,
                        "end": 725,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 741,
                  "end": 753,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 741,
                    "end": 746,
                    "value": "2.0",
                    "raw": "'2.0'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 746,
                    "end": 752,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 748,
                      "end": 752,
                      "typeName": {
                        "type": "Identifier",
                        "start": 748,
                        "end": 752,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 772,
      "end": 1277,
      "id": {
        "type": "Identifier",
        "start": 779,
        "end": 787,
        "decorators": [],
        "name": "Optional",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 788,
        "end": 1277,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 794,
            "end": 856,
            "id": {
              "type": "Identifier",
              "start": 804,
              "end": 805,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 806,
              "end": 856,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 816,
                  "end": 827,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 819,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 820,
                    "end": 826,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 822,
                      "end": 826,
                      "typeName": {
                        "type": "Identifier",
                        "start": 822,
                        "end": 826,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 836,
                  "end": 850,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 836,
                    "end": 839,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 840,
                    "end": 849,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 842,
                      "end": 849,
                      "typeName": {
                        "type": "Identifier",
                        "start": 842,
                        "end": 849,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 862,
            "end": 949,
            "id": {
              "type": "Identifier",
              "start": 872,
              "end": 873,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 882,
                "end": 883,
                "expression": {
                  "type": "Identifier",
                  "start": 882,
                  "end": 883,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 884,
              "end": 949,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 894,
                  "end": 908,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 894,
                    "end": 897,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 898,
                    "end": 907,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 900,
                      "end": 907,
                      "typeName": {
                        "type": "Identifier",
                        "start": 900,
                        "end": 907,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 923,
                  "end": 934,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 923,
                    "end": 926,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 927,
                    "end": 933,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 929,
                      "end": 933,
                      "typeName": {
                        "type": "Identifier",
                        "start": 929,
                        "end": 933,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 955,
            "end": 1016,
            "id": {
              "type": "Identifier",
              "start": 965,
              "end": 967,
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 968,
              "end": 1016,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 978,
                  "end": 987,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 978,
                    "end": 979,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 980,
                    "end": 986,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 982,
                      "end": 986,
                      "typeName": {
                        "type": "Identifier",
                        "start": 982,
                        "end": 986,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 996,
                  "end": 1010,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 996,
                    "end": 999,
                    "value": 2,
                    "raw": "2.0"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1000,
                    "end": 1009,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1002,
                      "end": 1009,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1002,
                        "end": 1009,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 1022,
            "end": 1107,
            "id": {
              "type": "Identifier",
              "start": 1032,
              "end": 1034,
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1043,
                "end": 1045,
                "expression": {
                  "type": "Identifier",
                  "start": 1043,
                  "end": 1045,
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 1046,
              "end": 1107,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1056,
                  "end": 1068,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1056,
                    "end": 1057,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1058,
                    "end": 1067,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1060,
                      "end": 1067,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1060,
                        "end": 1067,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1083,
                  "end": 1092,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1083,
                    "end": 1084,
                    "value": 2,
                    "raw": "2"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1085,
                    "end": 1091,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1087,
                      "end": 1091,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1087,
                        "end": 1091,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 1113,
            "end": 1178,
            "id": {
              "type": "Identifier",
              "start": 1123,
              "end": 1125,
              "decorators": [],
              "name": "A3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 1126,
              "end": 1178,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1136,
                  "end": 1147,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1136,
                    "end": 1139,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1140,
                    "end": 1146,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1142,
                      "end": 1146,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1142,
                        "end": 1146,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1156,
                  "end": 1172,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1156,
                    "end": 1161,
                    "value": "2.0",
                    "raw": "'2.0'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1162,
                    "end": 1171,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1164,
                      "end": 1171,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1164,
                        "end": 1171,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 1184,
            "end": 1275,
            "id": {
              "type": "Identifier",
              "start": 1194,
              "end": 1196,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 1205,
                "end": 1207,
                "expression": {
                  "type": "Identifier",
                  "start": 1205,
                  "end": 1207,
                  "decorators": [],
                  "name": "A3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 1208,
              "end": 1275,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1218,
                  "end": 1232,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1218,
                    "end": 1221,
                    "value": "1",
                    "raw": "'1'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1222,
                    "end": 1231,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1224,
                      "end": 1231,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1224,
                        "end": 1231,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1247,
                  "end": 1260,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 1247,
                    "end": 1252,
                    "value": "2.0",
                    "raw": "'2.0'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1253,
                    "end": 1259,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1255,
                      "end": 1259,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1255,
                        "end": 1259,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
