__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 1454,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 62,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 71,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 69,
        "end": 74,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 71,
            "end": 72,
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 75,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 87,
        "end": 130,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 93,
            "end": 110,
            "parameters": [
              {
                "type": "Identifier",
                "start": 94,
                "end": 103,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 95,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 97,
                    "end": 103
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 109,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 106,
                "end": 109
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 115,
            "end": 122,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "name": "E",
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
      "start": 133,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 145,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 146,
        "end": 192,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 152,
            "end": 172,
            "parameters": [
              {
                "type": "Identifier",
                "start": 153,
                "end": 162,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 154,
                  "end": 162,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 156,
                    "end": 162
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 171,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 165,
                "end": 171
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 177,
            "end": 184,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 180,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 182,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 183,
                  "name": "E",
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
      "start": 209,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 221,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 222,
        "end": 262,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 228,
            "end": 248,
            "parameters": [
              {
                "type": "Identifier",
                "start": 229,
                "end": 238,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 238,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 232,
                    "end": 238
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 239,
              "end": 247,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 241,
                "end": 247
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 253,
            "end": 260,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 256,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 258,
                "end": 259,
                "typeName": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 259,
                  "name": "E",
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
      "start": 265,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 275,
        "end": 277,
        "name": "I4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 278,
        "end": 319,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 284,
            "end": 305,
            "parameters": [
              {
                "type": "Identifier",
                "start": 285,
                "end": 294,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 286,
                  "end": 294,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 288,
                    "end": 294
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 304,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 297,
                "end": 304
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 310,
            "end": 317,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 313,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 313,
              "end": 316,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 315,
                "end": 316,
                "typeName": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 316,
                  "name": "E",
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
      "start": 322,
      "end": 373,
      "id": {
        "type": "Identifier",
        "start": 332,
        "end": 334,
        "name": "I5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 335,
        "end": 373,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 341,
            "end": 359,
            "parameters": [
              {
                "type": "Identifier",
                "start": 342,
                "end": 351,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 343,
                  "end": 351,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 345,
                    "end": 351
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 354,
                "end": 358,
                "typeName": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 358,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 364,
            "end": 371,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 364,
              "end": 367,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 370,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 369,
                "end": 370,
                "typeName": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 370,
                  "name": "E",
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
      "start": 376,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 388,
        "name": "I6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 389,
        "end": 429,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 395,
            "end": 415,
            "parameters": [
              {
                "type": "Identifier",
                "start": 396,
                "end": 405,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 397,
                  "end": 405,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 399,
                    "end": 405
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 414,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 408,
                "end": 414,
                "typeName": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 414,
                  "name": "RegExp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 420,
            "end": 427,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 420,
              "end": 423,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 426,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 425,
                "end": 426,
                "typeName": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 426,
                  "name": "E",
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
      "start": 432,
      "end": 494,
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 444,
        "name": "I7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 445,
        "end": 494,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 451,
            "end": 480,
            "parameters": [
              {
                "type": "Identifier",
                "start": 452,
                "end": 461,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 453,
                  "end": 461,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 455,
                    "end": 461
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 479,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 464,
                "end": 479,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 466,
                    "end": 477,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 466,
                      "end": 469,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 469,
                      "end": 477,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 471,
                        "end": 477
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 485,
            "end": 492,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 485,
              "end": 488,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 488,
              "end": 491,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 490,
                "end": 491,
                "typeName": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 491,
                  "name": "E",
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
      "start": 497,
      "end": 552,
      "id": {
        "type": "Identifier",
        "start": 507,
        "end": 509,
        "name": "I8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 510,
        "end": 552,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 516,
            "end": 538,
            "parameters": [
              {
                "type": "Identifier",
                "start": 517,
                "end": 526,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 518,
                  "end": 526,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 520,
                    "end": 526
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 527,
              "end": 537,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 529,
                "end": 537,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 529,
                  "end": 535
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 543,
            "end": 550,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 543,
              "end": 546,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 546,
              "end": 549,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 548,
                "end": 549,
                "typeName": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 549,
                  "name": "E",
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
      "start": 555,
      "end": 604,
      "id": {
        "type": "Identifier",
        "start": 565,
        "end": 567,
        "name": "I9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 568,
        "end": 604,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 574,
            "end": 590,
            "parameters": [
              {
                "type": "Identifier",
                "start": 575,
                "end": 584,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 576,
                  "end": 584,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 578,
                    "end": 584
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 585,
              "end": 589,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 587,
                "end": 589,
                "typeName": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 589,
                  "name": "I8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 595,
            "end": 602,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 595,
              "end": 598,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 598,
              "end": 601,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 600,
                "end": 601,
                "typeName": {
                  "type": "Identifier",
                  "start": 600,
                  "end": 601,
                  "name": "E",
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
      "type": "ClassDeclaration",
      "start": 606,
      "end": 630,
      "id": {
        "type": "Identifier",
        "start": 612,
        "end": 613,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 614,
        "end": 630,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 616,
            "end": 628,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 616,
              "end": 619,
              "name": "foo",
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
              "start": 619,
              "end": 627,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 621,
                "end": 627
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
      "start": 631,
      "end": 680,
      "id": {
        "type": "Identifier",
        "start": 641,
        "end": 644,
        "name": "I10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 645,
        "end": 680,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 651,
            "end": 666,
            "parameters": [
              {
                "type": "Identifier",
                "start": 652,
                "end": 661,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 653,
                  "end": 661,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 655,
                    "end": 661
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 662,
              "end": 665,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 664,
                "end": 665,
                "typeName": {
                  "type": "Identifier",
                  "start": 664,
                  "end": 665,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 671,
            "end": 678,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 671,
              "end": 674,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 674,
              "end": 677,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 676,
                "end": 677,
                "typeName": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 677,
                  "name": "E",
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
      "type": "ClassDeclaration",
      "start": 682,
      "end": 705,
      "id": {
        "type": "Identifier",
        "start": 688,
        "end": 690,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 694,
        "end": 705,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 696,
            "end": 703,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 699,
              "name": "foo",
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
              "start": 699,
              "end": 702,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 701,
                "end": 702,
                "typeName": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 702,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 690,
        "end": 693,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 691,
            "end": 692,
            "name": {
              "type": "Identifier",
              "start": 691,
              "end": 692,
              "name": "T",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 706,
      "end": 764,
      "id": {
        "type": "Identifier",
        "start": 716,
        "end": 719,
        "name": "I11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 720,
        "end": 764,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 726,
            "end": 750,
            "parameters": [
              {
                "type": "Identifier",
                "start": 727,
                "end": 736,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 728,
                  "end": 736,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 730,
                    "end": 736
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 737,
              "end": 749,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 739,
                "end": 749,
                "typeName": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 741,
                  "name": "A2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 741,
                  "end": 749,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 742,
                      "end": 748
                    }
                  ]
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 755,
            "end": 762,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 755,
              "end": 758,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 758,
              "end": 761,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 760,
                "end": 761,
                "typeName": {
                  "type": "Identifier",
                  "start": 760,
                  "end": 761,
                  "name": "E",
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
      "start": 767,
      "end": 828,
      "id": {
        "type": "Identifier",
        "start": 777,
        "end": 780,
        "name": "I12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 781,
        "end": 828,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 787,
            "end": 814,
            "parameters": [
              {
                "type": "Identifier",
                "start": 788,
                "end": 797,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 789,
                  "end": 797,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 791,
                    "end": 797
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 798,
              "end": 813,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 800,
                "end": 813,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 801,
                    "end": 802,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 804,
                  "end": 813,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 807,
                    "end": 813
                  }
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 819,
            "end": 826,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 819,
              "end": 822,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 822,
              "end": 825,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 824,
                "end": 825,
                "typeName": {
                  "type": "Identifier",
                  "start": 824,
                  "end": 825,
                  "name": "E",
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
      "start": 831,
      "end": 893,
      "id": {
        "type": "Identifier",
        "start": 841,
        "end": 844,
        "name": "I13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 845,
        "end": 893,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 851,
            "end": 879,
            "parameters": [
              {
                "type": "Identifier",
                "start": 852,
                "end": 861,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 853,
                  "end": 861,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 855,
                    "end": 861
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 862,
              "end": 878,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 864,
                "end": 878,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 864,
                  "end": 867,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 865,
                      "end": 866,
                      "name": {
                        "type": "Identifier",
                        "start": 865,
                        "end": 866,
                        "name": "T",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 868,
                    "end": 872,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 869,
                      "end": 872,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 871,
                        "end": 872,
                        "typeName": {
                          "type": "Identifier",
                          "start": 871,
                          "end": 872,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 874,
                  "end": 878,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 877,
                    "end": 878,
                    "typeName": {
                      "type": "Identifier",
                      "start": 877,
                      "end": 878,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 884,
            "end": 891,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 884,
              "end": 887,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 887,
              "end": 890,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 889,
                "end": 890,
                "typeName": {
                  "type": "Identifier",
                  "start": 889,
                  "end": 890,
                  "name": "E",
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
      "type": "TSEnumDeclaration",
      "start": 896,
      "end": 909,
      "id": {
        "type": "Identifier",
        "start": 901,
        "end": 903,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 906,
          "end": 907,
          "id": {
            "type": "Identifier",
            "start": 906,
            "end": 907,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 904,
        "end": 909,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 906,
            "end": 907,
            "id": {
              "type": "Identifier",
              "start": 906,
              "end": 907,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 910,
      "end": 960,
      "id": {
        "type": "Identifier",
        "start": 920,
        "end": 923,
        "name": "I14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 924,
        "end": 960,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 930,
            "end": 946,
            "parameters": [
              {
                "type": "Identifier",
                "start": 931,
                "end": 940,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 932,
                  "end": 940,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 934,
                    "end": 940
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 941,
              "end": 945,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 943,
                "end": 945,
                "typeName": {
                  "type": "Identifier",
                  "start": 943,
                  "end": 945,
                  "name": "E2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 951,
            "end": 958,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 951,
              "end": 954,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 954,
              "end": 957,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 956,
                "end": 957,
                "typeName": {
                  "type": "Identifier",
                  "start": 956,
                  "end": 957,
                  "name": "E",
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
      "type": "FunctionDeclaration",
      "start": 963,
      "end": 979,
      "id": {
        "type": "Identifier",
        "start": 972,
        "end": 973,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 976,
        "end": 979,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 980,
      "end": 1016,
      "id": {
        "type": "Identifier",
        "start": 987,
        "end": 988,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 989,
        "end": 1016,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 995,
            "end": 1014,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1002,
              "end": 1014,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1006,
                  "end": 1013,
                  "id": {
                    "type": "Identifier",
                    "start": 1006,
                    "end": 1009,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1012,
                    "end": 1013,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1017,
      "end": 1073,
      "id": {
        "type": "Identifier",
        "start": 1027,
        "end": 1030,
        "name": "I15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1031,
        "end": 1073,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1037,
            "end": 1059,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1038,
                "end": 1047,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1039,
                  "end": 1047,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1041,
                    "end": 1047
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1048,
              "end": 1058,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1050,
                "end": 1058,
                "exprName": {
                  "type": "Identifier",
                  "start": 1057,
                  "end": 1058,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 1064,
            "end": 1071,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1064,
              "end": 1067,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1067,
              "end": 1070,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1069,
                "end": 1070,
                "typeName": {
                  "type": "Identifier",
                  "start": 1069,
                  "end": 1070,
                  "name": "E",
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
      "type": "ClassDeclaration",
      "start": 1076,
      "end": 1099,
      "id": {
        "type": "Identifier",
        "start": 1082,
        "end": 1083,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1084,
        "end": 1099,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1086,
            "end": 1097,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1086,
              "end": 1089,
              "name": "baz",
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
              "start": 1089,
              "end": 1097,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1091,
                "end": 1097
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
      "type": "TSModuleDeclaration",
      "start": 1100,
      "end": 1136,
      "id": {
        "type": "Identifier",
        "start": 1107,
        "end": 1108,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1109,
        "end": 1136,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1115,
            "end": 1134,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1122,
              "end": 1134,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1126,
                  "end": 1133,
                  "id": {
                    "type": "Identifier",
                    "start": 1126,
                    "end": 1129,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1132,
                    "end": 1133,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1137,
      "end": 1193,
      "id": {
        "type": "Identifier",
        "start": 1147,
        "end": 1150,
        "name": "I16",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1151,
        "end": 1193,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1157,
            "end": 1179,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1158,
                "end": 1167,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1159,
                  "end": 1167,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1161,
                    "end": 1167
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1168,
              "end": 1178,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1170,
                "end": 1178,
                "exprName": {
                  "type": "Identifier",
                  "start": 1177,
                  "end": 1178,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 1184,
            "end": 1191,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1184,
              "end": 1187,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1187,
              "end": 1190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1189,
                "end": 1190,
                "typeName": {
                  "type": "Identifier",
                  "start": 1189,
                  "end": 1190,
                  "name": "E",
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
      "start": 1196,
      "end": 1248,
      "id": {
        "type": "Identifier",
        "start": 1206,
        "end": 1209,
        "name": "I17",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1209,
        "end": 1212,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1210,
            "end": 1211,
            "name": {
              "type": "Identifier",
              "start": 1210,
              "end": 1211,
              "name": "T",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 1213,
        "end": 1248,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1219,
            "end": 1234,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1220,
                "end": 1229,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1221,
                  "end": 1229,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1223,
                    "end": 1229
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1230,
              "end": 1233,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1232,
                "end": 1233,
                "typeName": {
                  "type": "Identifier",
                  "start": 1232,
                  "end": 1233,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 1239,
            "end": 1246,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1239,
              "end": 1242,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1242,
              "end": 1245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1244,
                "end": 1245,
                "typeName": {
                  "type": "Identifier",
                  "start": 1244,
                  "end": 1245,
                  "name": "E",
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
      "start": 1251,
      "end": 1316,
      "id": {
        "type": "Identifier",
        "start": 1261,
        "end": 1264,
        "name": "I18",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1264,
        "end": 1280,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1265,
            "end": 1266,
            "name": {
              "type": "Identifier",
              "start": 1265,
              "end": 1266,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1268,
            "end": 1279,
            "name": {
              "type": "Identifier",
              "start": 1268,
              "end": 1269,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1278,
              "end": 1279,
              "typeName": {
                "type": "Identifier",
                "start": 1278,
                "end": 1279,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 1281,
        "end": 1316,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1287,
            "end": 1302,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1288,
                "end": 1297,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1289,
                  "end": 1297,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1291,
                    "end": 1297
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1298,
              "end": 1301,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1300,
                "end": 1301,
                "typeName": {
                  "type": "Identifier",
                  "start": 1300,
                  "end": 1301,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 1307,
            "end": 1314,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1307,
              "end": 1310,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1310,
              "end": 1313,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1312,
                "end": 1313,
                "typeName": {
                  "type": "Identifier",
                  "start": 1312,
                  "end": 1313,
                  "name": "E",
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
      "start": 1319,
      "end": 1387,
      "id": {
        "type": "Identifier",
        "start": 1329,
        "end": 1332,
        "name": "I19",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1333,
        "end": 1387,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1339,
            "end": 1359,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1340,
                "end": 1349,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1341,
                  "end": 1349,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1343,
                    "end": 1349
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1350,
              "end": 1358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1352,
                "end": 1358,
                "typeName": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1358,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 1364,
            "end": 1371,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1364,
              "end": 1367,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1367,
              "end": 1370,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1369,
                "end": 1370,
                "typeName": {
                  "type": "Identifier",
                  "start": 1369,
                  "end": 1370,
                  "name": "E",
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
      "start": 1390,
      "end": 1454,
      "id": {
        "type": "Identifier",
        "start": 1400,
        "end": 1403,
        "name": "I20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1404,
        "end": 1454,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 1410,
            "end": 1426,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1411,
                "end": 1420,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1412,
                  "end": 1420,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1414,
                    "end": 1420
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1421,
              "end": 1425,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1423,
                "end": 1425,
                "members": []
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 1431,
            "end": 1438,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1431,
              "end": 1434,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1434,
              "end": 1437,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1436,
                "end": 1437,
                "typeName": {
                  "type": "Identifier",
                  "start": 1436,
                  "end": 1437,
                  "name": "E",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
