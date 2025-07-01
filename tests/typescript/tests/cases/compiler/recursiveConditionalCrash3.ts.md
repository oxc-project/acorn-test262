__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 11,
      "end": 20
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CanBeExpanded",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 99
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 101
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 110,
                "end": 116
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 119,
                "end": 125
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 100,
              "end": 125
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "constraint": null,
              "default": {
                "type": "TSStringKeyword",
                "start": 131,
                "end": 137
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 127,
              "end": 137
            }
          ],
          "start": 99,
          "end": 138
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 152
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 155
                  },
                  "typeArguments": null,
                  "start": 154,
                  "end": 155
                },
                "start": 152,
                "end": 155
              },
              "accessibility": null,
              "static": false,
              "start": 147,
              "end": 155
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "default",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 167
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "typeArguments": null,
                  "start": 169,
                  "end": 170
                },
                "start": 167,
                "end": 170
              },
              "accessibility": null,
              "static": false,
              "start": 160,
              "end": 170
            }
          ],
          "start": 141,
          "end": 172
        },
        "declare": false,
        "start": 81,
        "end": 172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 74,
      "end": 172
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 188
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 189,
        "end": 193
      },
      "declare": false,
      "start": 174,
      "end": 193
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "User",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 209
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 222
          },
          "typeArguments": null,
          "start": 218,
          "end": 222
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 231
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 233,
                "end": 239
              },
              "start": 231,
              "end": 239
            },
            "accessibility": null,
            "static": false,
            "start": 229,
            "end": 240
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "role",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 249
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 264
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Role",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 269
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 269
                    }
                  ],
                  "start": 264,
                  "end": 270
                },
                "start": 251,
                "end": 270
              },
              "start": 249,
              "end": 270
            },
            "accessibility": null,
            "static": false,
            "start": 245,
            "end": 271
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "note",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 280
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 282,
                "end": 288
              },
              "start": 280,
              "end": 288
            },
            "accessibility": null,
            "static": false,
            "start": 276,
            "end": 289
          }
        ],
        "start": 223,
        "end": 291
      },
      "declare": false,
      "start": 195,
      "end": 291
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Role",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 307
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 320
          },
          "typeArguments": null,
          "start": 316,
          "end": 320
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 329
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 331,
                "end": 337
              },
              "start": 329,
              "end": 337
            },
            "accessibility": null,
            "static": false,
            "start": 327,
            "end": 338
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "user",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 347
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 362
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "User",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 367
                      },
                      "typeArguments": null,
                      "start": 363,
                      "end": 367
                    }
                  ],
                  "start": 362,
                  "end": 368
                },
                "start": 349,
                "end": 368
              },
              "start": 347,
              "end": 368
            },
            "accessibility": null,
            "static": false,
            "start": 343,
            "end": 369
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 377,
                "end": 383
              },
              "start": 375,
              "end": 383
            },
            "accessibility": null,
            "static": false,
            "start": 374,
            "end": 383
          }
        ],
        "start": 321,
        "end": 385
      },
      "declare": false,
      "start": 293,
      "end": 385
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 450
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 463
          },
          "typeArguments": null,
          "start": 459,
          "end": 463
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 472
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 474,
                "end": 480
              },
              "start": 472,
              "end": 480
            },
            "accessibility": null,
            "static": false,
            "start": 470,
            "end": 481
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 486,
              "end": 490
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 492,
                "end": 498
              },
              "start": 490,
              "end": 498
            },
            "accessibility": null,
            "static": false,
            "start": 486,
            "end": 499
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "user",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 508
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 510,
                  "end": 523
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "User",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 524,
                        "end": 528
                      },
                      "typeArguments": null,
                      "start": 524,
                      "end": 528
                    }
                  ],
                  "start": 523,
                  "end": 529
                },
                "start": 510,
                "end": 529
              },
              "start": 508,
              "end": 529
            },
            "accessibility": null,
            "static": false,
            "start": 504,
            "end": 530
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "role",
              "optional": false,
              "typeAnnotation": null,
              "start": 535,
              "end": 539
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 554
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Role",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 559
                      },
                      "typeArguments": null,
                      "start": 555,
                      "end": 559
                    }
                  ],
                  "start": 554,
                  "end": 560
                },
                "start": 541,
                "end": 560
              },
              "start": 539,
              "end": 560
            },
            "accessibility": null,
            "static": false,
            "start": 535,
            "end": 560
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "roles",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 570
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CanBeExpanded",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 585
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Role",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 586,
                          "end": 590
                        },
                        "typeArguments": null,
                        "start": 586,
                        "end": 590
                      },
                      "start": 586,
                      "end": 592
                    }
                  ],
                  "start": 585,
                  "end": 593
                },
                "start": 572,
                "end": 593
              },
              "start": 570,
              "end": 593
            },
            "accessibility": null,
            "static": false,
            "start": 565,
            "end": 593
          }
        ],
        "start": 464,
        "end": 595
      },
      "declare": false,
      "start": 439,
      "end": 595
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Join",
        "optional": false,
        "typeAnnotation": null,
        "start": 602,
        "end": 606
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 608
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 607,
            "end": 608
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 611
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 610,
            "end": 611
          }
        ],
        "start": 606,
        "end": 612
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 615,
            "end": 616
          },
          "typeArguments": null,
          "start": 615,
          "end": 616
        },
        "extendsType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 625,
              "end": 631
            },
            {
              "type": "TSNumberKeyword",
              "start": 634,
              "end": 640
            }
          ],
          "start": 625,
          "end": 640
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 648
            },
            "typeArguments": null,
            "start": 647,
            "end": 648
          },
          "extendsType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 657,
                "end": 663
              },
              {
                "type": "TSNumberKeyword",
                "start": 666,
                "end": 672
              }
            ],
            "start": 657,
            "end": 672
          },
          "trueType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 683,
                "end": 686
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 687,
                "end": 690
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 713,
                "end": 716
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 717,
                "end": 719
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 686,
                  "end": 687
                },
                "typeArguments": null,
                "start": 686,
                "end": 687
              },
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 690,
                    "end": 692
                  },
                  "start": 690,
                  "end": 692
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 701,
                    "end": 702
                  },
                  "typeArguments": null,
                  "start": 701,
                  "end": 702
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 705,
                    "end": 707
                  },
                  "start": 705,
                  "end": 707
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": ".",
                    "raw": "\".\"",
                    "start": 710,
                    "end": 713
                  },
                  "start": 710,
                  "end": 713
                },
                "start": 690,
                "end": 713
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 717
                },
                "typeArguments": null,
                "start": 716,
                "end": 717
              }
            ],
            "start": 683,
            "end": 719
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 730,
            "end": 735
          },
          "start": 647,
          "end": 735
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 738,
          "end": 743
        },
        "start": 615,
        "end": 743
      },
      "declare": false,
      "start": 597,
      "end": 744
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrefixWith",
        "optional": false,
        "typeAnnotation": null,
        "start": 751,
        "end": 761
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 762,
              "end": 763
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 762,
            "end": 763
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 765,
              "end": 766
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 765,
            "end": 766
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 769
            },
            "constraint": null,
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ".",
                "raw": "'.'",
                "start": 772,
                "end": 775
              },
              "start": 772,
              "end": 775
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 768,
            "end": 775
          }
        ],
        "start": 761,
        "end": 776
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 780
          },
          "typeArguments": null,
          "start": 779,
          "end": 780
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 789,
            "end": 791
          },
          "start": 789,
          "end": 791
        },
        "trueType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 794,
              "end": 797
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 807,
              "end": 809
            }
          ],
          "types": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 797,
                  "end": 803
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 806,
                    "end": 807
                  },
                  "typeArguments": null,
                  "start": 806,
                  "end": 807
                }
              ],
              "start": 797,
              "end": 807
            }
          ],
          "start": 794,
          "end": 809
        },
        "falseType": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 812,
              "end": 815
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 825,
              "end": 828
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 838,
              "end": 841
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 851,
              "end": 853
            }
          ],
          "types": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 815,
                  "end": 821
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 824,
                    "end": 825
                  },
                  "typeArguments": null,
                  "start": 824,
                  "end": 825
                }
              ],
              "start": 815,
              "end": 825
            },
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 828,
                  "end": 834
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 837,
                    "end": 838
                  },
                  "typeArguments": null,
                  "start": 837,
                  "end": 838
                }
              ],
              "start": 828,
              "end": 838
            },
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 841,
                  "end": 847
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 850,
                    "end": 851
                  },
                  "typeArguments": null,
                  "start": 850,
                  "end": 851
                }
              ],
              "start": 841,
              "end": 851
            }
          ],
          "start": 812,
          "end": 853
        },
        "start": 779,
        "end": 853
      },
      "declare": false,
      "start": 746,
      "end": 853
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SplitWithAllPossibleCombinations",
        "optional": false,
        "typeAnnotation": null,
        "start": 860,
        "end": 892
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 893,
              "end": 894
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 903,
              "end": 909
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 893,
            "end": 909
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 911,
              "end": 912
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 921,
              "end": 927
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 911,
            "end": 927
          }
        ],
        "start": 892,
        "end": 928
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSStringKeyword",
          "start": 935,
          "end": 941
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 950,
            "end": 951
          },
          "typeArguments": null,
          "start": 950,
          "end": 951
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 954,
          "end": 960
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 971,
              "end": 972
            },
            "typeArguments": null,
            "start": 971,
            "end": 972
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 981,
              "end": 983
            },
            "start": 981,
            "end": 983
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 986,
              "end": 988
            },
            "start": 986,
            "end": 988
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 1003,
                "end": 1004
              },
              "typeArguments": null,
              "start": 1003,
              "end": 1004
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1013,
                  "end": 1016
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1023,
                  "end": 1026
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1027,
                  "end": 1030
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1037,
                  "end": 1039
                }
              ],
              "types": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1022,
                      "end": 1023
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1022,
                    "end": 1023
                  },
                  "start": 1016,
                  "end": 1023
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1026,
                    "end": 1027
                  },
                  "typeArguments": null,
                  "start": 1026,
                  "end": 1027
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1036,
                      "end": 1037
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1036,
                    "end": 1037
                  },
                  "start": 1030,
                  "end": 1037
                }
              ],
              "start": 1013,
              "end": 1039
            },
            "trueType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1058,
                    "end": 1059
                  },
                  "typeArguments": null,
                  "start": 1058,
                  "end": 1059
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Join",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1062,
                    "end": 1066
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1067,
                          "end": 1068
                        },
                        "typeArguments": null,
                        "start": 1067,
                        "end": 1068
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SplitWithAllPossibleCombinations",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1070,
                          "end": 1102
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1103,
                                "end": 1104
                              },
                              "typeArguments": null,
                              "start": 1103,
                              "end": 1104
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "D",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1106,
                                "end": 1107
                              },
                              "typeArguments": null,
                              "start": 1106,
                              "end": 1107
                            }
                          ],
                          "start": 1102,
                          "end": 1108
                        },
                        "start": 1070,
                        "end": 1108
                      }
                    ],
                    "start": 1066,
                    "end": 1109
                  },
                  "start": 1062,
                  "end": 1109
                }
              ],
              "start": 1058,
              "end": 1109
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 1128,
                "end": 1129
              },
              "typeArguments": null,
              "start": 1128,
              "end": 1129
            },
            "start": 1003,
            "end": 1129
          },
          "start": 971,
          "end": 1129
        },
        "start": 935,
        "end": 1129
      },
      "declare": false,
      "start": 855,
      "end": 1130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeysCanBeExpanded_",
        "optional": false,
        "typeAnnotation": null,
        "start": 1246,
        "end": 1264
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1265,
              "end": 1266
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1265,
            "end": 1266
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1268,
              "end": 1269
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1278,
              "end": 1284
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1268,
            "end": 1284
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 1286,
              "end": 1291
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 1300,
                "end": 1306
              },
              "start": 1300,
              "end": 1308
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1286,
            "end": 1308
          }
        ],
        "start": 1264,
        "end": 1309
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1312,
            "end": 1313
          },
          "typeArguments": null,
          "start": 1312,
          "end": 1313
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 1322,
              "end": 1327
            },
            "typeArguments": null,
            "start": 1322,
            "end": 1327
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 1328,
              "end": 1336
            },
            "start": 1328,
            "end": 1336
          },
          "start": 1322,
          "end": 1337
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 1340,
          "end": 1345
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1352,
              "end": 1353
            },
            "typeArguments": null,
            "start": 1352,
            "end": 1353
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanBeExpanded",
              "optional": false,
              "typeAnnotation": null,
              "start": 1362,
              "end": 1375
            },
            "typeArguments": null,
            "start": 1362,
            "end": 1375
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeysCanBeExpanded_",
              "optional": false,
              "typeAnnotation": null,
              "start": 1386,
              "end": 1404
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1405,
                      "end": 1406
                    },
                    "typeArguments": null,
                    "start": 1405,
                    "end": 1406
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "'value'",
                      "start": 1407,
                      "end": 1414
                    },
                    "start": 1407,
                    "end": 1414
                  },
                  "start": 1405,
                  "end": 1415
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1417,
                    "end": 1418
                  },
                  "typeArguments": null,
                  "start": 1417,
                  "end": 1418
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Depth",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1420,
                    "end": 1425
                  },
                  "typeArguments": null,
                  "start": 1420,
                  "end": 1425
                }
              ],
              "start": 1404,
              "end": 1426
            },
            "start": 1386,
            "end": 1426
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1437,
                "end": 1438
              },
              "typeArguments": null,
              "start": 1437,
              "end": 1438
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 1447,
                "end": 1452
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1459,
                        "end": 1460
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1459,
                      "end": 1460
                    },
                    "start": 1453,
                    "end": 1460
                  }
                ],
                "start": 1452,
                "end": 1461
              },
              "start": 1447,
              "end": 1461
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "KeysCanBeExpanded_",
                "optional": false,
                "typeAnnotation": null,
                "start": 1464,
                "end": 1482
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1483,
                      "end": 1484
                    },
                    "typeArguments": null,
                    "start": 1483,
                    "end": 1484
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1486,
                      "end": 1487
                    },
                    "typeArguments": null,
                    "start": 1486,
                    "end": 1487
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Depth",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1489,
                      "end": 1494
                    },
                    "typeArguments": null,
                    "start": 1489,
                    "end": 1494
                  }
                ],
                "start": 1482,
                "end": 1495
              },
              "start": 1464,
              "end": 1495
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1511,
                  "end": 1512
                },
                "typeArguments": null,
                "start": 1511,
                "end": 1512
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 1521,
                "end": 1527
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1569,
                    "end": 1570
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1580,
                        "end": 1581
                      },
                      "typeArguments": null,
                      "start": 1580,
                      "end": 1581
                    },
                    "start": 1574,
                    "end": 1581
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1606,
                          "end": 1607
                        },
                        "typeArguments": null,
                        "start": 1606,
                        "end": 1607
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1608,
                          "end": 1609
                        },
                        "typeArguments": null,
                        "start": 1608,
                        "end": 1609
                      },
                      "start": 1606,
                      "end": 1610
                    },
                    "extendsType": {
                      "type": "TSObjectKeyword",
                      "start": 1619,
                      "end": 1625
                    },
                    "trueType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1652,
                          "end": 1653
                        },
                        "typeArguments": null,
                        "start": 1652,
                        "end": 1653
                      },
                      "extendsType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1662,
                            "end": 1668
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 1671,
                            "end": 1677
                          }
                        ],
                        "start": 1662,
                        "end": 1677
                      },
                      "trueType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTemplateLiteralType",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": false,
                                "start": 1708,
                                "end": 1711
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": true,
                                "start": 1712,
                                "end": 1714
                              }
                            ],
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1711,
                                  "end": 1712
                                },
                                "typeArguments": null,
                                "start": 1711,
                                "end": 1712
                              }
                            ],
                            "start": 1708,
                            "end": 1714
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Join",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1717,
                              "end": 1721
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTemplateLiteralType",
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "",
                                        "cooked": ""
                                      },
                                      "tail": false,
                                      "start": 1722,
                                      "end": 1725
                                    },
                                    {
                                      "type": "TemplateElement",
                                      "value": {
                                        "raw": "",
                                        "cooked": ""
                                      },
                                      "tail": true,
                                      "start": 1726,
                                      "end": 1728
                                    }
                                  ],
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "K",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1725,
                                        "end": 1726
                                      },
                                      "typeArguments": null,
                                      "start": 1725,
                                      "end": 1726
                                    }
                                  ],
                                  "start": 1722,
                                  "end": 1728
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "KeysCanBeExpanded_",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1730,
                                    "end": 1748
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSIndexedAccessType",
                                        "objectType": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "T",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1749,
                                            "end": 1750
                                          },
                                          "typeArguments": null,
                                          "start": 1749,
                                          "end": 1750
                                        },
                                        "indexType": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "K",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1751,
                                            "end": 1752
                                          },
                                          "typeArguments": null,
                                          "start": 1751,
                                          "end": 1752
                                        },
                                        "start": 1749,
                                        "end": 1753
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "N",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1755,
                                          "end": 1756
                                        },
                                        "typeArguments": null,
                                        "start": 1755,
                                        "end": 1756
                                      },
                                      {
                                        "type": "TSTupleType",
                                        "elementTypes": [
                                          {
                                            "type": "TSLiteralType",
                                            "literal": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1",
                                              "start": 1759,
                                              "end": 1760
                                            },
                                            "start": 1759,
                                            "end": 1760
                                          },
                                          {
                                            "type": "TSRestType",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Depth",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1765,
                                                "end": 1770
                                              },
                                              "typeArguments": null,
                                              "start": 1765,
                                              "end": 1770
                                            },
                                            "start": 1762,
                                            "end": 1770
                                          }
                                        ],
                                        "start": 1758,
                                        "end": 1771
                                      }
                                    ],
                                    "start": 1748,
                                    "end": 1772
                                  },
                                  "start": 1730,
                                  "end": 1772
                                }
                              ],
                              "start": 1721,
                              "end": 1773
                            },
                            "start": 1717,
                            "end": 1773
                          }
                        ],
                        "start": 1708,
                        "end": 1773
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 1804,
                        "end": 1809
                      },
                      "start": 1652,
                      "end": 1809
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 1836,
                      "end": 1841
                    },
                    "start": 1606,
                    "end": 1841
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 1546,
                  "end": 1860
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1867,
                      "end": 1868
                    },
                    "typeArguments": null,
                    "start": 1867,
                    "end": 1868
                  },
                  "start": 1861,
                  "end": 1868
                },
                "start": 1546,
                "end": 1869
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1904,
                "end": 1909
              },
              "start": 1511,
              "end": 1909
            },
            "start": 1437,
            "end": 1909
          },
          "start": 1352,
          "end": 1909
        },
        "start": 1312,
        "end": 1909
      },
      "declare": false,
      "start": 1241,
      "end": 1909
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "KeysCanBeExpanded",
          "optional": false,
          "typeAnnotation": null,
          "start": 1923,
          "end": 1940
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1941,
                "end": 1942
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1941,
              "end": 1942
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 1944,
                "end": 1945
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1954,
                "end": 1960
              },
              "default": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 1963,
                  "end": 1964
                },
                "start": 1963,
                "end": 1964
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1944,
              "end": 1964
            }
          ],
          "start": 1940,
          "end": 1965
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "KeysCanBeExpanded_",
            "optional": false,
            "typeAnnotation": null,
            "start": 1968,
            "end": 1986
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1987,
                  "end": 1988
                },
                "typeArguments": null,
                "start": 1987,
                "end": 1988
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1990,
                  "end": 1991
                },
                "typeArguments": null,
                "start": 1990,
                "end": 1991
              },
              {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 1993,
                "end": 1995
              }
            ],
            "start": 1986,
            "end": 1996
          },
          "start": 1968,
          "end": 1996
        },
        "declare": false,
        "start": 1918,
        "end": 1996
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1911,
      "end": 1996
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expand__",
        "optional": false,
        "typeAnnotation": null,
        "start": 2060,
        "end": 2068
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 2069,
              "end": 2070
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2069,
            "end": 2070
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 2072,
              "end": 2076
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2072,
            "end": 2076
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 2078,
              "end": 2079
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2088,
              "end": 2094
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2078,
            "end": 2094
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 2096,
              "end": 2097
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2106,
              "end": 2112
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2096,
            "end": 2112
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 2115,
              "end": 2120
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2129,
                "end": 2136
              },
              "start": 2129,
              "end": 2138
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2115,
            "end": 2138
          }
        ],
        "start": 2068,
        "end": 2140
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 2147,
            "end": 2148
          },
          "typeArguments": null,
          "start": 2147,
          "end": 2148
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 2157,
              "end": 2162
            },
            "typeArguments": null,
            "start": 2157,
            "end": 2162
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 2163,
              "end": 2171
            },
            "start": 2163,
            "end": 2171
          },
          "start": 2157,
          "end": 2172
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 2183,
              "end": 2184
            },
            "typeArguments": null,
            "start": 2183,
            "end": 2184
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanBeExpanded",
              "optional": false,
              "typeAnnotation": null,
              "start": 2193,
              "end": 2206
            },
            "typeArguments": null,
            "start": 2193,
            "end": 2206
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 2221,
                "end": 2222
              },
              "typeArguments": null,
              "start": 2221,
              "end": 2222
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "default",
                "raw": "'default'",
                "start": 2223,
                "end": 2232
              },
              "start": 2223,
              "end": 2232
            },
            "start": 2221,
            "end": 2233
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 2248,
              "end": 2249
            },
            "typeArguments": null,
            "start": 2248,
            "end": 2249
          },
          "start": 2183,
          "end": 2249
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 2260,
              "end": 2261
            },
            "typeArguments": null,
            "start": 2260,
            "end": 2261
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanBeExpanded",
              "optional": false,
              "typeAnnotation": null,
              "start": 2270,
              "end": 2283
            },
            "typeArguments": null,
            "start": 2270,
            "end": 2283
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Expand__",
              "optional": false,
              "typeAnnotation": null,
              "start": 2298,
              "end": 2306
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2307,
                      "end": 2308
                    },
                    "typeArguments": null,
                    "start": 2307,
                    "end": 2308
                  },
                  "indexType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2309,
                        "end": 2310
                      },
                      "typeArguments": null,
                      "start": 2309,
                      "end": 2310
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2319,
                        "end": 2323
                      },
                      "typeArguments": null,
                      "start": 2319,
                      "end": 2323
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "value",
                        "raw": "'value'",
                        "start": 2326,
                        "end": 2333
                      },
                      "start": 2326,
                      "end": 2333
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "default",
                        "raw": "'default'",
                        "start": 2336,
                        "end": 2345
                      },
                      "start": 2336,
                      "end": 2345
                    },
                    "start": 2309,
                    "end": 2345
                  },
                  "start": 2307,
                  "end": 2346
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2348,
                    "end": 2352
                  },
                  "typeArguments": null,
                  "start": 2348,
                  "end": 2352
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2354,
                    "end": 2355
                  },
                  "typeArguments": null,
                  "start": 2354,
                  "end": 2355
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2357,
                    "end": 2358
                  },
                  "typeArguments": null,
                  "start": 2357,
                  "end": 2358
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Depth",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2360,
                    "end": 2365
                  },
                  "typeArguments": null,
                  "start": 2360,
                  "end": 2365
                }
              ],
              "start": 2306,
              "end": 2366
            },
            "start": 2298,
            "end": 2366
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 2381,
                "end": 2382
              },
              "typeArguments": null,
              "start": 2381,
              "end": 2382
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 2391,
                "end": 2396
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2403,
                        "end": 2404
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2403,
                      "end": 2404
                    },
                    "start": 2397,
                    "end": 2404
                  }
                ],
                "start": 2396,
                "end": 2405
              },
              "start": 2391,
              "end": 2405
            },
            "trueType": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expand__",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2424,
                  "end": 2432
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2433,
                        "end": 2434
                      },
                      "typeArguments": null,
                      "start": 2433,
                      "end": 2434
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Keys",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2436,
                        "end": 2440
                      },
                      "typeArguments": null,
                      "start": 2436,
                      "end": 2440
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2442,
                        "end": 2443
                      },
                      "typeArguments": null,
                      "start": 2442,
                      "end": 2443
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2445,
                        "end": 2446
                      },
                      "typeArguments": null,
                      "start": 2445,
                      "end": 2446
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Depth",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2448,
                        "end": 2453
                      },
                      "typeArguments": null,
                      "start": 2448,
                      "end": 2453
                    }
                  ],
                  "start": 2432,
                  "end": 2454
                },
                "start": 2424,
                "end": 2454
              },
              "start": 2424,
              "end": 2456
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2475,
                  "end": 2476
                },
                "typeArguments": null,
                "start": 2475,
                "end": 2476
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 2485,
                "end": 2491
              },
              "trueType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2533,
                  "end": 2534
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2544,
                      "end": 2545
                    },
                    "typeArguments": null,
                    "start": 2544,
                    "end": 2545
                  },
                  "start": 2538,
                  "end": 2545
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Expand__",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2550,
                    "end": 2558
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2559,
                            "end": 2560
                          },
                          "typeArguments": null,
                          "start": 2559,
                          "end": 2560
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2561,
                            "end": 2562
                          },
                          "typeArguments": null,
                          "start": 2561,
                          "end": 2562
                        },
                        "start": 2559,
                        "end": 2563
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Keys",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2565,
                          "end": 2569
                        },
                        "typeArguments": null,
                        "start": 2565,
                        "end": 2569
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PrefixWith",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2571,
                          "end": 2581
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2582,
                                "end": 2583
                              },
                              "typeArguments": null,
                              "start": 2582,
                              "end": 2583
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2585,
                                "end": 2586
                              },
                              "typeArguments": null,
                              "start": 2585,
                              "end": 2586
                            }
                          ],
                          "start": 2581,
                          "end": 2587
                        },
                        "start": 2571,
                        "end": 2587
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "N",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2589,
                          "end": 2590
                        },
                        "typeArguments": null,
                        "start": 2589,
                        "end": 2590
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 2593,
                              "end": 2594
                            },
                            "start": 2593,
                            "end": 2594
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Depth",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2599,
                                "end": 2604
                              },
                              "typeArguments": null,
                              "start": 2599,
                              "end": 2604
                            },
                            "start": 2596,
                            "end": 2604
                          }
                        ],
                        "start": 2592,
                        "end": 2605
                      }
                    ],
                    "start": 2558,
                    "end": 2606
                  },
                  "start": 2550,
                  "end": 2606
                },
                "optional": "-",
                "readonly": null,
                "start": 2510,
                "end": 2624
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2643,
                  "end": 2644
                },
                "typeArguments": null,
                "start": 2643,
                "end": 2644
              },
              "start": 2475,
              "end": 2644
            },
            "start": 2381,
            "end": 2644
          },
          "start": 2260,
          "end": 2644
        },
        "start": 2147,
        "end": 2644
      },
      "declare": false,
      "start": 2055,
      "end": 2644
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SplitAC",
        "optional": false,
        "typeAnnotation": null,
        "start": 2653,
        "end": 2660
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2661,
              "end": 2662
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2661,
            "end": 2662
          }
        ],
        "start": 2660,
        "end": 2663
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SplitWithAllPossibleCombinations",
            "optional": false,
            "typeAnnotation": null,
            "start": 2666,
            "end": 2698
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2699,
                    "end": 2700
                  },
                  "typeArguments": null,
                  "start": 2699,
                  "end": 2700
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 2709,
                  "end": 2715
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2718,
                    "end": 2719
                  },
                  "typeArguments": null,
                  "start": 2718,
                  "end": 2719
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 2722,
                    "end": 2724
                  },
                  "start": 2722,
                  "end": 2724
                },
                "start": 2699,
                "end": 2724
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": ".",
                  "raw": "'.'",
                  "start": 2726,
                  "end": 2729
                },
                "start": 2726,
                "end": 2729
              }
            ],
            "start": 2698,
            "end": 2730
          },
          "start": 2666,
          "end": 2730
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Ko",
              "optional": false,
              "typeAnnotation": null,
              "start": 2745,
              "end": 2747
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2745,
            "end": 2747
          },
          "start": 2739,
          "end": 2747
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ko",
            "optional": false,
            "typeAnnotation": null,
            "start": 2750,
            "end": 2752
          },
          "typeArguments": null,
          "start": 2750,
          "end": 2752
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2755,
            "end": 2757
          },
          "start": 2755,
          "end": 2757
        },
        "start": 2666,
        "end": 2757
      },
      "declare": false,
      "start": 2648,
      "end": 2757
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expand_",
        "optional": false,
        "typeAnnotation": null,
        "start": 2763,
        "end": 2770
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2771,
              "end": 2772
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2771,
            "end": 2772
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2774,
              "end": 2775
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2774,
            "end": 2775
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 2777,
              "end": 2778
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2787,
              "end": 2793
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 2796,
                "end": 2797
              },
              "start": 2796,
              "end": 2797
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2777,
            "end": 2797
          }
        ],
        "start": 2770,
        "end": 2798
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Expand__",
          "optional": false,
          "typeAnnotation": null,
          "start": 2801,
          "end": 2809
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2810,
                "end": 2811
              },
              "typeArguments": null,
              "start": 2810,
              "end": 2811
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SplitAC",
                "optional": false,
                "typeAnnotation": null,
                "start": 2813,
                "end": 2820
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2821,
                      "end": 2822
                    },
                    "typeArguments": null,
                    "start": 2821,
                    "end": 2822
                  }
                ],
                "start": 2820,
                "end": 2823
              },
              "start": 2813,
              "end": 2823
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 2825,
                "end": 2827
              },
              "start": 2825,
              "end": 2827
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 2829,
                "end": 2830
              },
              "typeArguments": null,
              "start": 2829,
              "end": 2830
            },
            {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 2832,
              "end": 2834
            }
          ],
          "start": 2809,
          "end": 2835
        },
        "start": 2801,
        "end": 2835
      },
      "declare": false,
      "start": 2758,
      "end": 2835
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AllKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 2841,
        "end": 2848
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2849,
              "end": 2850
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2849,
            "end": 2850
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 2852,
              "end": 2853
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2862,
              "end": 2868
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 2871,
                "end": 2872
              },
              "start": 2871,
              "end": 2872
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2852,
            "end": 2872
          }
        ],
        "start": 2848,
        "end": 2873
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "KeysCanBeExpanded",
            "optional": false,
            "typeAnnotation": null,
            "start": 2876,
            "end": 2893
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2894,
                  "end": 2895
                },
                "typeArguments": null,
                "start": 2894,
                "end": 2895
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2897,
                  "end": 2898
                },
                "typeArguments": null,
                "start": 2897,
                "end": 2898
              }
            ],
            "start": 2893,
            "end": 2899
          },
          "start": 2876,
          "end": 2899
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 2914,
              "end": 2915
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2914,
            "end": 2915
          },
          "start": 2908,
          "end": 2915
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 2918,
            "end": 2919
          },
          "typeArguments": null,
          "start": 2918,
          "end": 2919
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2922,
          "end": 2927
        },
        "start": 2876,
        "end": 2927
      },
      "declare": false,
      "start": 2836,
      "end": 2927
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Expand",
          "optional": false,
          "typeAnnotation": null,
          "start": 3130,
          "end": 3136
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3137,
                "end": 3138
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 3147,
                "end": 3153
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3137,
              "end": 3153
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3155,
                "end": 3156
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3165,
                  "end": 3172
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3173,
                        "end": 3174
                      },
                      "typeArguments": null,
                      "start": 3173,
                      "end": 3174
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3176,
                        "end": 3177
                      },
                      "typeArguments": null,
                      "start": 3176,
                      "end": 3177
                    }
                  ],
                  "start": 3172,
                  "end": 3178
                },
                "start": 3165,
                "end": 3178
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 3181,
                "end": 3186
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3155,
              "end": 3186
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 3188,
                "end": 3189
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 3198,
                "end": 3204
              },
              "default": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 3207,
                  "end": 3208
                },
                "start": 3207,
                "end": 3208
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3188,
              "end": 3208
            }
          ],
          "start": 3136,
          "end": 3209
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Expand_",
            "optional": false,
            "typeAnnotation": null,
            "start": 3212,
            "end": 3219
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3220,
                  "end": 3221
                },
                "typeArguments": null,
                "start": 3220,
                "end": 3221
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3223,
                  "end": 3224
                },
                "typeArguments": null,
                "start": 3223,
                "end": 3224
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3226,
                  "end": 3227
                },
                "typeArguments": null,
                "start": 3226,
                "end": 3227
              }
            ],
            "start": 3219,
            "end": 3228
          },
          "start": 3212,
          "end": 3228
        },
        "declare": false,
        "start": 3125,
        "end": 3228
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3118,
      "end": 3228
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3357,
                  "end": 3363
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3364,
                        "end": 3365
                      },
                      "typeArguments": null,
                      "start": 3364,
                      "end": 3365
                    }
                  ],
                  "start": 3363,
                  "end": 3366
                },
                "start": 3357,
                "end": 3366
              },
              "start": 3355,
              "end": 3366
            },
            "start": 3353,
            "end": 3366
          },
          "init": null,
          "definite": false,
          "start": 3353,
          "end": 3366
        }
      ],
      "declare": false,
      "start": 3349,
      "end": 3366
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Expand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3375,
                  "end": 3381
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3382,
                        "end": 3383
                      },
                      "typeArguments": null,
                      "start": 3382,
                      "end": 3383
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "user.role.user.role",
                        "raw": "'user.role.user.role'",
                        "start": 3385,
                        "end": 3406
                      },
                      "start": 3385,
                      "end": 3406
                    }
                  ],
                  "start": 3381,
                  "end": 3407
                },
                "start": 3375,
                "end": 3407
              },
              "start": 3373,
              "end": 3407
            },
            "start": 3371,
            "end": 3407
          },
          "init": null,
          "definite": false,
          "start": 3371,
          "end": 3407
        }
      ],
      "declare": false,
      "start": 3367,
      "end": 3407
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 3919,
        "end": 3934
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3935,
              "end": 3936
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 3945,
                "end": 3949
              },
              "typeArguments": null,
              "start": 3945,
              "end": 3949
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3935,
            "end": 3949
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3951,
              "end": 3952
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AllKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 3961,
                "end": 3968
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3969,
                      "end": 3970
                    },
                    "typeArguments": null,
                    "start": 3969,
                    "end": 3970
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 3972,
                      "end": 3973
                    },
                    "start": 3972,
                    "end": 3973
                  }
                ],
                "start": 3968,
                "end": 3974
              },
              "start": 3961,
              "end": 3974
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3951,
            "end": 3974
          }
        ],
        "start": 3934,
        "end": 3976
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Expand",
          "optional": false,
          "typeAnnotation": null,
          "start": 3979,
          "end": 3985
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3986,
                "end": 3987
              },
              "typeArguments": null,
              "start": 3986,
              "end": 3987
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3989,
                "end": 3990
              },
              "typeArguments": null,
              "start": 3989,
              "end": 3990
            }
          ],
          "start": 3985,
          "end": 3991
        },
        "start": 3979,
        "end": 3991
      },
      "declare": false,
      "start": 3914,
      "end": 3991
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryOptions2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3998,
        "end": 4014
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4015,
              "end": 4016
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4015,
            "end": 4016
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4019,
              "end": 4020
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4019,
            "end": 4020
          }
        ],
        "start": 4014,
        "end": 4023
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Expand_",
          "optional": false,
          "typeAnnotation": null,
          "start": 4026,
          "end": 4033
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4034,
                "end": 4035
              },
              "typeArguments": null,
              "start": 4034,
              "end": 4035
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 4037,
                "end": 4038
              },
              "typeArguments": null,
              "start": 4037,
              "end": 4038
            }
          ],
          "start": 4033,
          "end": 4039
        },
        "start": 4026,
        "end": 4039
      },
      "declare": false,
      "start": 3993,
      "end": 4039
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryOptions3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4045,
        "end": 4061
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4062,
              "end": 4063
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4062,
            "end": 4063
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4066,
              "end": 4067
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4066,
            "end": 4067
          }
        ],
        "start": 4061,
        "end": 4070
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Expand_",
            "optional": false,
            "typeAnnotation": null,
            "start": 4073,
            "end": 4080
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4081,
                  "end": 4082
                },
                "typeArguments": null,
                "start": 4081,
                "end": 4082
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4084,
                  "end": 4085
                },
                "typeArguments": null,
                "start": 4084,
                "end": 4085
              }
            ],
            "start": 4080,
            "end": 4086
          },
          "start": 4073,
          "end": 4086
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 4101,
              "end": 4102
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4101,
            "end": 4102
          },
          "start": 4095,
          "end": 4102
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "O",
            "optional": false,
            "typeAnnotation": null,
            "start": 4105,
            "end": 4106
          },
          "typeArguments": null,
          "start": 4105,
          "end": 4106
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4109,
          "end": 4114
        },
        "start": 4073,
        "end": 4114
      },
      "declare": false,
      "start": 4040,
      "end": 4114
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 4121,
        "end": 4133
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4134,
              "end": 4135
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4134,
            "end": 4135
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4136,
              "end": 4137
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4136,
            "end": 4137
          }
        ],
        "start": 4133,
        "end": 4138
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Expand_",
            "optional": false,
            "typeAnnotation": null,
            "start": 4141,
            "end": 4148
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4149,
                  "end": 4150
                },
                "typeArguments": null,
                "start": 4149,
                "end": 4150
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4152,
                  "end": 4153
                },
                "typeArguments": null,
                "start": 4152,
                "end": 4153
              }
            ],
            "start": 4148,
            "end": 4154
          },
          "start": 4141,
          "end": 4154
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 4169,
              "end": 4170
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4169,
            "end": 4170
          },
          "start": 4163,
          "end": 4170
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "O",
            "optional": false,
            "typeAnnotation": null,
            "start": 4173,
            "end": 4174
          },
          "typeArguments": null,
          "start": 4173,
          "end": 4174
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4177,
          "end": 4182
        },
        "start": 4141,
        "end": 4182
      },
      "declare": false,
      "start": 4116,
      "end": 4182
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryOptions4",
        "optional": false,
        "typeAnnotation": null,
        "start": 4188,
        "end": 4204
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 4205,
              "end": 4206
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4205,
            "end": 4206
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4209,
              "end": 4210
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4209,
            "end": 4210
          }
        ],
        "start": 4204,
        "end": 4213
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExpandResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 4216,
          "end": 4228
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4229,
                "end": 4230
              },
              "typeArguments": null,
              "start": 4229,
              "end": 4230
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 4231,
                "end": 4232
              },
              "typeArguments": null,
              "start": 4231,
              "end": 4232
            }
          ],
          "start": 4228,
          "end": 4233
        },
        "start": 4216,
        "end": 4233
      },
      "declare": false,
      "start": 4183,
      "end": 4233
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UseQueryOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4404,
                  "end": 4419
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4420,
                        "end": 4421
                      },
                      "typeArguments": null,
                      "start": 4420,
                      "end": 4421
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "role.user.role",
                        "raw": "'role.user.role'",
                        "start": 4423,
                        "end": 4439
                      },
                      "start": 4423,
                      "end": 4439
                    }
                  ],
                  "start": 4419,
                  "end": 4440
                },
                "start": 4404,
                "end": 4440
              },
              "start": 4402,
              "end": 4440
            },
            "start": 4401,
            "end": 4440
          },
          "init": null,
          "definite": false,
          "start": 4401,
          "end": 4440
        }
      ],
      "declare": false,
      "start": 4397,
      "end": 4440
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 4440
}
```
