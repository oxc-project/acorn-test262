__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Writeable",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 95
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
              "start": 96,
              "end": 97
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 96,
            "end": 97
          }
        ],
        "start": 95,
        "end": 98
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 115
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
              "start": 125,
              "end": 126
            },
            "typeArguments": null,
            "start": 125,
            "end": 126
          },
          "start": 119,
          "end": 126
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "typeArguments": null,
            "start": 129,
            "end": 130
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "typeArguments": null,
            "start": 131,
            "end": 132
          },
          "start": 129,
          "end": 133
        },
        "optional": false,
        "readonly": "-",
        "start": 101,
        "end": 135
      },
      "declare": false,
      "start": 81,
      "end": 136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnumValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 152
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 156,
            "end": 162
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 167,
                "end": 173
              },
              "start": 167,
              "end": 175
            },
            "start": 164,
            "end": 175
          }
        ],
        "start": 155,
        "end": 176
      },
      "declare": false,
      "start": 137,
      "end": 177
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 189
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
              "start": 190,
              "end": 191
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EnumValues",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 210
              },
              "typeArguments": null,
              "start": 200,
              "end": 210
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 190,
            "end": 210
          }
        ],
        "start": 189,
        "end": 211
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 217,
          "end": 218
        },
        "constraint": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 223
            },
            "typeArguments": null,
            "start": 222,
            "end": 223
          },
          "indexType": {
            "type": "TSNumberKeyword",
            "start": 224,
            "end": 230
          },
          "start": 222,
          "end": 231
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 235
          },
          "typeArguments": null,
          "start": 234,
          "end": 235
        },
        "optional": false,
        "readonly": null,
        "start": 214,
        "end": 238
      },
      "declare": false,
      "start": 178,
      "end": 239
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ZodEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 262
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
              "start": 263,
              "end": 264
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 274,
                  "end": 280
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 285,
                      "end": 291
                    },
                    "start": 285,
                    "end": 293
                  },
                  "start": 282,
                  "end": 293
                }
              ],
              "start": 273,
              "end": 294
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 263,
            "end": 294
          }
        ],
        "start": 262,
        "end": 295
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enum",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 308
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 318
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
                          "start": 319,
                          "end": 320
                        },
                        "typeArguments": null,
                        "start": 319,
                        "end": 320
                      }
                    ],
                    "start": 318,
                    "end": 321
                  },
                  "start": 312,
                  "end": 321
                },
                "start": 310,
                "end": 321
              },
              "body": null,
              "expression": false,
              "start": 308,
              "end": 321
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 300,
            "end": 321
          }
        ],
        "start": 296,
        "end": 323
      },
      "abstract": false,
      "declare": true,
      "start": 241,
      "end": 323
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createZodEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 355
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 366,
              "end": 372
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 356,
            "end": 372
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 375
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 392
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 395
                        },
                        "typeArguments": null,
                        "start": 394,
                        "end": 395
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 400,
                              "end": 401
                            },
                            "typeArguments": null,
                            "start": 400,
                            "end": 401
                          },
                          "start": 400,
                          "end": 403
                        },
                        "start": 397,
                        "end": 403
                      }
                    ],
                    "start": 393,
                    "end": 404
                  }
                ],
                "start": 392,
                "end": 405
              },
              "start": 384,
              "end": 405
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 374,
            "end": 405
          }
        ],
        "start": 355,
        "end": 406
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
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
                "start": 415,
                "end": 416
              },
              "typeArguments": null,
              "start": 415,
              "end": 416
            },
            "start": 413,
            "end": 416
          },
          "start": 407,
          "end": 416
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ZodEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 426
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Writeable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 436
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
                        "start": 437,
                        "end": 438
                      },
                      "typeArguments": null,
                      "start": 437,
                      "end": 438
                    }
                  ],
                  "start": 436,
                  "end": 439
                },
                "start": 427,
                "end": 439
              }
            ],
            "start": 426,
            "end": 440
          },
          "start": 419,
          "end": 440
        },
        "start": 417,
        "end": 440
      },
      "body": null,
      "expression": false,
      "start": 325,
      "end": 441
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Maybe",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 534
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
              "start": 535,
              "end": 536
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 535,
            "end": 536
          }
        ],
        "start": 534,
        "end": 537
      },
      "typeAnnotation": {
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
              "start": 540,
              "end": 541
            },
            "typeArguments": null,
            "start": 540,
            "end": 541
          },
          {
            "type": "TSNullKeyword",
            "start": 544,
            "end": 548
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 551,
            "end": 560
          }
        ],
        "start": 540,
        "end": 560
      },
      "declare": false,
      "start": 524,
      "end": 561
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 575
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSUnknownKeyword",
            "start": 579,
            "end": 586
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 591,
                "end": 598
              },
              "start": 591,
              "end": 600
            },
            "start": 588,
            "end": 600
          }
        ],
        "start": 578,
        "end": 601
      },
      "declare": false,
      "start": 562,
      "end": 602
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 608,
        "end": 617
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 626,
                    "end": 632
                  },
                  "start": 624,
                  "end": 632
                },
                "start": 623,
                "end": 632
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 635,
                "end": 638
              },
              "start": 633,
              "end": 638
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 622,
            "end": 638
          }
        ],
        "start": 620,
        "end": 640
      },
      "declare": false,
      "start": 603,
      "end": 641
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Flags",
        "optional": false,
        "typeAnnotation": null,
        "start": 647,
        "end": 652
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 655,
              "end": 658
            },
            "start": 655,
            "end": 658
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "d",
              "raw": "\"d\"",
              "start": 661,
              "end": 664
            },
            "start": 661,
            "end": 664
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 667,
              "end": 669
            },
            "start": 667,
            "end": 669
          }
        ],
        "start": 655,
        "end": 669
      },
      "declare": false,
      "start": 642,
      "end": 670
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ISchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 689
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
              "start": 690,
              "end": 691
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 690,
            "end": 691
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 694
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 697,
              "end": 700
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 693,
            "end": 700
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 703
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 717
              },
              "typeArguments": null,
              "start": 712,
              "end": 717
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 720,
              "end": 723
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 702,
            "end": 723
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 726
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 729,
              "end": 732
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 725,
            "end": 732
          }
        ],
        "start": 689,
        "end": 733
      },
      "extends": [],
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
              "name": "__flags",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 745
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 747,
                  "end": 748
                },
                "typeArguments": null,
                "start": 747,
                "end": 748
              },
              "start": 745,
              "end": 748
            },
            "accessibility": null,
            "static": false,
            "start": 738,
            "end": 749
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__context",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 761
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 763,
                  "end": 764
                },
                "typeArguments": null,
                "start": 763,
                "end": 764
              },
              "start": 761,
              "end": 764
            },
            "accessibility": null,
            "static": false,
            "start": 752,
            "end": 765
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__outputType",
              "optional": false,
              "typeAnnotation": null,
              "start": 768,
              "end": 780
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
                  "start": 782,
                  "end": 783
                },
                "typeArguments": null,
                "start": 782,
                "end": 783
              },
              "start": 780,
              "end": 783
            },
            "accessibility": null,
            "static": false,
            "start": 768,
            "end": 784
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "__default",
              "optional": false,
              "typeAnnotation": null,
              "start": 787,
              "end": 796
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
                  "start": 798,
                  "end": 799
                },
                "typeArguments": null,
                "start": 798,
                "end": 799
              },
              "start": 796,
              "end": 799
            },
            "accessibility": null,
            "static": false,
            "start": 787,
            "end": 800
          }
        ],
        "start": 734,
        "end": 802
      },
      "declare": false,
      "start": 672,
      "end": 802
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 818,
        "end": 829
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TType",
              "optional": false,
              "typeAnnotation": null,
              "start": 833,
              "end": 838
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Maybe",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 852
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnyTuple",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 853,
                      "end": 861
                    },
                    "typeArguments": null,
                    "start": 853,
                    "end": 861
                  }
                ],
                "start": 852,
                "end": 862
              },
              "start": 847,
              "end": 862
            },
            "default": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnyTuple",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 865,
                    "end": 873
                  },
                  "typeArguments": null,
                  "start": 865,
                  "end": 873
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 876,
                  "end": 885
                }
              ],
              "start": 865,
              "end": 885
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 833,
            "end": 885
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 889,
              "end": 897
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 909
              },
              "typeArguments": null,
              "start": 900,
              "end": 909
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 889,
            "end": 909
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDefault",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 921
            },
            "constraint": null,
            "default": {
              "type": "TSUndefinedKeyword",
              "start": 924,
              "end": 933
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 913,
            "end": 933
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 937,
              "end": 943
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Flags",
                "optional": false,
                "typeAnnotation": null,
                "start": 952,
                "end": 957
              },
              "typeArguments": null,
              "start": 952,
              "end": 957
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 960,
                "end": 962
              },
              "start": 960,
              "end": 962
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 937,
            "end": 962
          }
        ],
        "start": 829,
        "end": 964
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 969,
              "end": 980
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schemas",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ISchema",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 991,
                            "end": 998
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 999,
                                "end": 1002
                              }
                            ],
                            "start": 998,
                            "end": 1003
                          },
                          "start": 991,
                          "end": 1003
                        },
                        {
                          "type": "TSRestType",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ISchema",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1008,
                                "end": 1015
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSAnyKeyword",
                                    "start": 1016,
                                    "end": 1019
                                  }
                                ],
                                "start": 1015,
                                "end": 1020
                              },
                              "start": 1008,
                              "end": 1020
                            },
                            "start": 1008,
                            "end": 1022
                          },
                          "start": 1005,
                          "end": 1022
                        }
                      ],
                      "start": 990,
                      "end": 1023
                    },
                    "start": 988,
                    "end": 1023
                  },
                  "start": 981,
                  "end": 1023
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 980,
              "end": 1025
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 969,
            "end": 1025
          }
        ],
        "start": 965,
        "end": 1027
      },
      "abstract": false,
      "declare": true,
      "start": 804,
      "end": 1027
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "create",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1051
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 1052,
                "end": 1053
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyTuple",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1062,
                  "end": 1070
                },
                "typeArguments": null,
                "start": 1062,
                "end": 1070
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1052,
              "end": 1070
            }
          ],
          "start": 1051,
          "end": 1071
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "schemas",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1087
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
                      "start": 1097,
                      "end": 1098
                    },
                    "typeArguments": null,
                    "start": 1097,
                    "end": 1098
                  },
                  "start": 1091,
                  "end": 1098
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ISchema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1101,
                    "end": 1108
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
                            "start": 1109,
                            "end": 1110
                          },
                          "typeArguments": null,
                          "start": 1109,
                          "end": 1110
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1111,
                            "end": 1112
                          },
                          "typeArguments": null,
                          "start": 1111,
                          "end": 1112
                        },
                        "start": 1109,
                        "end": 1113
                      }
                    ],
                    "start": 1108,
                    "end": 1114
                  },
                  "start": 1101,
                  "end": 1114
                },
                "optional": false,
                "readonly": null,
                "start": 1081,
                "end": 1117
              },
              "start": 1079,
              "end": 1117
            },
            "start": 1072,
            "end": 1117
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TupleSchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1134,
                  "end": 1145
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "start": 1146,
                            "end": 1147
                          },
                          "typeArguments": null,
                          "start": 1146,
                          "end": 1147
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1150,
                          "end": 1159
                        }
                      ],
                      "start": 1146,
                      "end": 1159
                    }
                  ],
                  "start": 1145,
                  "end": 1160
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "schemas",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1161,
                    "end": 1168
                  }
                ],
                "start": 1130,
                "end": 1169
              },
              "start": 1123,
              "end": 1170
            }
          ],
          "start": 1119,
          "end": 1172
        },
        "expression": false,
        "start": 1036,
        "end": 1172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1029,
      "end": 1172
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 81,
  "end": 1172
}
```
