__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1379,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 58,
          "end": 61,
          "expression": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "name": "Foo",
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
        "start": 62,
        "end": 80,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 78,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 71,
                "end": 77
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
      "type": "ClassDeclaration",
      "start": 82,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 91,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 100,
        "end": 103,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 141,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 139,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 132,
                "end": 138
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 115,
          "end": 116,
          "expression": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 153,
        "name": "Bar2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 162,
        "end": 165,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 194,
            "end": 204,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 212,
                "end": 218
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 177,
          "end": 178,
          "expression": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 223,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 233,
        "name": "Bar3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 242,
        "end": 245,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 309,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 274,
            "end": 292,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 291,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 285,
                "end": 291
              }
            },
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 297,
            "end": 307,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 298,
              "end": 306,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 300,
                "end": 306
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 257,
          "end": 258,
          "expression": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 343,
      "end": 806,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 351,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 352,
        "end": 806,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 358,
            "end": 402,
            "id": {
              "type": "Identifier",
              "start": 364,
              "end": 367,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 368,
              "end": 402,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 378,
                  "end": 396,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 387,
                    "end": 395,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 389,
                      "end": 395
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 408,
            "end": 456,
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 417,
              "name": "Baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 426,
              "end": 429,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 430,
              "end": 456,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 440,
                  "end": 450,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 441,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 441,
                    "end": 449,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 443,
                      "end": 449
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 462,
            "end": 512,
            "id": {
              "type": "Identifier",
              "start": 472,
              "end": 473,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 482,
                "end": 485,
                "expression": {
                  "type": "Identifier",
                  "start": 482,
                  "end": 485,
                  "name": "Baz",
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
              "start": 486,
              "end": 512,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 496,
                  "end": 506,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 496,
                    "end": 497,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 497,
                    "end": 505,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 499,
                      "end": 505
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
            "type": "ClassDeclaration",
            "start": 518,
            "end": 604,
            "id": {
              "type": "Identifier",
              "start": 524,
              "end": 527,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 536,
              "end": 539,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 553,
              "end": 604,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 569,
                  "end": 579,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 570,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 570,
                    "end": 578,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 572,
                      "end": 578
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 588,
                  "end": 598,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 589,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 589,
                    "end": 597,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 591,
                      "end": 597
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 551,
                "end": 552,
                "expression": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 552,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 610,
            "end": 700,
            "id": {
              "type": "Identifier",
              "start": 616,
              "end": 620,
              "name": "Bar2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 629,
              "end": 632,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 646,
              "end": 700,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 665,
                  "end": 675,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 666,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 666,
                    "end": 674,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 668,
                      "end": 674
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 684,
                  "end": 694,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 684,
                    "end": 685,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 685,
                    "end": 693,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 687,
                      "end": 693
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 644,
                "end": 645,
                "expression": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 645,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 706,
            "end": 804,
            "id": {
              "type": "Identifier",
              "start": 712,
              "end": 716,
              "name": "Bar3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 725,
              "end": 728,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 742,
              "end": 804,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 761,
                  "end": 779,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 769,
                    "end": 770,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 770,
                    "end": 778,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 772,
                      "end": 778
                    }
                  },
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 788,
                  "end": 798,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 788,
                    "end": 789,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 789,
                    "end": 797,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 791,
                      "end": 797
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 740,
                "end": 741,
                "expression": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 741,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 834,
      "end": 1379,
      "id": {
        "type": "Identifier",
        "start": 841,
        "end": 843,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 844,
        "end": 1379,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 850,
            "end": 894,
            "id": {
              "type": "Identifier",
              "start": 856,
              "end": 859,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 860,
              "end": 894,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 870,
                  "end": 888,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 878,
                    "end": 879,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 879,
                    "end": 887,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 881,
                      "end": 887
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 900,
            "end": 956,
            "id": {
              "type": "Identifier",
              "start": 906,
              "end": 909,
              "name": "Baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 918,
              "end": 921,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 922,
              "end": 956,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 932,
                  "end": 950,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 940,
                    "end": 941,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 941,
                    "end": 949,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 943,
                      "end": 949
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 962,
            "end": 1012,
            "id": {
              "type": "Identifier",
              "start": 972,
              "end": 973,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 982,
                "end": 985,
                "expression": {
                  "type": "Identifier",
                  "start": 982,
                  "end": 985,
                  "name": "Baz",
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
              "start": 986,
              "end": 1012,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 996,
                  "end": 1006,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 996,
                    "end": 997,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 997,
                    "end": 1005,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 999,
                      "end": 1005
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
            "type": "ClassDeclaration",
            "start": 1018,
            "end": 1088,
            "id": {
              "type": "Identifier",
              "start": 1024,
              "end": 1027,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 1036,
              "end": 1039,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 1053,
              "end": 1088,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1072,
                  "end": 1082,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1072,
                    "end": 1073,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1073,
                    "end": 1081,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1075,
                      "end": 1081
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1051,
                "end": 1052,
                "expression": {
                  "type": "Identifier",
                  "start": 1051,
                  "end": 1052,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1094,
            "end": 1105,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1098,
                "end": 1104,
                "id": {
                  "type": "Identifier",
                  "start": 1098,
                  "end": 1104,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1099,
                    "end": 1104,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1101,
                      "end": 1104,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1101,
                        "end": 1104,
                        "name": "Bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1110,
            "end": 1123,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1114,
                "end": 1122,
                "id": {
                  "type": "Identifier",
                  "start": 1114,
                  "end": 1116,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1119,
                  "end": 1122,
                  "object": {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1120,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1121,
                    "end": 1122,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1128,
            "end": 1141,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1132,
                "end": 1140,
                "id": {
                  "type": "Identifier",
                  "start": 1132,
                  "end": 1134,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1137,
                  "end": 1140,
                  "object": {
                    "type": "Identifier",
                    "start": 1137,
                    "end": 1138,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1139,
                    "end": 1140,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1155,
            "end": 1168,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1159,
                "end": 1167,
                "id": {
                  "type": "Identifier",
                  "start": 1159,
                  "end": 1161,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1164,
                  "end": 1167,
                  "object": {
                    "type": "Identifier",
                    "start": 1164,
                    "end": 1165,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1166,
                    "end": 1167,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1183,
            "end": 1273,
            "id": {
              "type": "Identifier",
              "start": 1189,
              "end": 1193,
              "name": "Bar2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 1202,
              "end": 1205,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 1219,
              "end": 1273,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1238,
                  "end": 1248,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1238,
                    "end": 1239,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1239,
                    "end": 1247,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1241,
                      "end": 1247
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1257,
                  "end": 1267,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1257,
                    "end": 1258,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1258,
                    "end": 1266,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1260,
                      "end": 1266
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1217,
                "end": 1218,
                "expression": {
                  "type": "Identifier",
                  "start": 1217,
                  "end": 1218,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1279,
            "end": 1377,
            "id": {
              "type": "Identifier",
              "start": 1285,
              "end": 1289,
              "name": "Bar3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 1298,
              "end": 1301,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 1315,
              "end": 1377,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1334,
                  "end": 1352,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1342,
                    "end": 1343,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1343,
                    "end": 1351,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1345,
                      "end": 1351
                    }
                  },
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1361,
                  "end": 1371,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1361,
                    "end": 1362,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1362,
                    "end": 1370,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1364,
                      "end": 1370
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1313,
                "end": 1314,
                "expression": {
                  "type": "Identifier",
                  "start": 1313,
                  "end": 1314,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
