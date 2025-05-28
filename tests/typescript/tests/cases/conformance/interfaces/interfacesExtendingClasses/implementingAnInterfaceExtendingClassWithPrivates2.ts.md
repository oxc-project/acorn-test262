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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 34,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 58,
          "end": 61,
          "expression": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
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
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 91,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 100,
        "end": 103,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 115,
          "end": 116,
          "expression": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 141,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 139,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 143,
      "end": 221,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 153,
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 162,
        "end": 165,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 177,
          "end": 178,
          "expression": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 194,
            "end": 204,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 219,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 223,
      "end": 309,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 233,
        "decorators": [],
        "name": "Bar3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 242,
        "end": 245,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 257,
          "end": 258,
          "expression": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 309,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 274,
            "end": 292,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 297,
            "end": 307,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 343,
      "end": 806,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 351,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 364,
              "end": 367,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 368,
              "end": 402,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 378,
                  "end": 396,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 408,
            "end": 456,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 417,
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 426,
              "end": 429,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 430,
              "end": 456,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 440,
                  "end": 450,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 441,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 462,
            "end": 512,
            "id": {
              "type": "Identifier",
              "start": 472,
              "end": 473,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 482,
                "end": 485,
                "expression": {
                  "type": "Identifier",
                  "start": 482,
                  "end": 485,
                  "decorators": [],
                  "name": "Baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
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
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 524,
              "end": 527,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 536,
              "end": 539,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 551,
                "end": 552,
                "expression": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 552,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 553,
              "end": 604,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 569,
                  "end": 579,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 570,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 588,
                  "end": 598,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 589,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 610,
            "end": 700,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 616,
              "end": 620,
              "decorators": [],
              "name": "Bar2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 629,
              "end": 632,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 644,
                "end": 645,
                "expression": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 645,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 646,
              "end": 700,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 665,
                  "end": 675,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 666,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 684,
                  "end": 694,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 684,
                    "end": 685,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 706,
            "end": 804,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 712,
              "end": 716,
              "decorators": [],
              "name": "Bar3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 725,
              "end": 728,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 740,
                "end": 741,
                "expression": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 741,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 742,
              "end": 804,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 761,
                  "end": 779,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 769,
                    "end": 770,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 788,
                  "end": 798,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 788,
                    "end": 789,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
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
      "start": 834,
      "end": 1379,
      "id": {
        "type": "Identifier",
        "start": 841,
        "end": 843,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 856,
              "end": 859,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 860,
              "end": 894,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 870,
                  "end": 888,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 878,
                    "end": 879,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 900,
            "end": 956,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 906,
              "end": 909,
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 918,
              "end": 921,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 922,
              "end": 956,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 932,
                  "end": 950,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 940,
                    "end": 941,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private"
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 962,
            "end": 1012,
            "id": {
              "type": "Identifier",
              "start": 972,
              "end": 973,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 982,
                "end": 985,
                "expression": {
                  "type": "Identifier",
                  "start": 982,
                  "end": 985,
                  "decorators": [],
                  "name": "Baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
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
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1024,
              "end": 1027,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 1036,
              "end": 1039,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1051,
                "end": 1052,
                "expression": {
                  "type": "Identifier",
                  "start": 1051,
                  "end": 1052,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 1053,
              "end": 1088,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1072,
                  "end": 1082,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1072,
                    "end": 1073,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1094,
            "end": 1105,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1098,
                "end": 1104,
                "id": {
                  "type": "Identifier",
                  "start": 1098,
                  "end": 1104,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
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
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1110,
            "end": 1123,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1114,
                "end": 1122,
                "id": {
                  "type": "Identifier",
                  "start": 1114,
                  "end": 1116,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1119,
                  "end": 1122,
                  "object": {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1120,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1121,
                    "end": 1122,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1128,
            "end": 1141,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1132,
                "end": 1140,
                "id": {
                  "type": "Identifier",
                  "start": 1132,
                  "end": 1134,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1137,
                  "end": 1140,
                  "object": {
                    "type": "Identifier",
                    "start": 1137,
                    "end": 1138,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1139,
                    "end": 1140,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1155,
            "end": 1168,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1159,
                "end": 1167,
                "id": {
                  "type": "Identifier",
                  "start": 1159,
                  "end": 1161,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1164,
                  "end": 1167,
                  "object": {
                    "type": "Identifier",
                    "start": 1164,
                    "end": 1165,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1166,
                    "end": 1167,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1183,
            "end": 1273,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1189,
              "end": 1193,
              "decorators": [],
              "name": "Bar2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 1202,
              "end": 1205,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1217,
                "end": 1218,
                "expression": {
                  "type": "Identifier",
                  "start": 1217,
                  "end": 1218,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 1219,
              "end": 1273,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1238,
                  "end": 1248,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1238,
                    "end": 1239,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1257,
                  "end": 1267,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1257,
                    "end": 1258,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 1279,
            "end": 1377,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1285,
              "end": 1289,
              "decorators": [],
              "name": "Bar3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 1298,
              "end": 1301,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 1313,
                "end": 1314,
                "expression": {
                  "type": "Identifier",
                  "start": 1313,
                  "end": 1314,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 1315,
              "end": 1377,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1334,
                  "end": 1352,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1342,
                    "end": 1343,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1361,
                  "end": 1371,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1361,
                    "end": 1362,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
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
