__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 9,
        "end": 12
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 22
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 23,
          "end": 24
        },
        "start": 21,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 25,
        "end": 28
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 14,
      "end": 28
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "start": 37,
          "end": 40
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 42
        },
        "start": 37,
        "end": 42
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ma",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 58
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "importKind": "value",
            "start": 49,
            "end": 63
          }
        ],
        "start": 43,
        "end": 65
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 30,
      "end": 65
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mImport",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 81
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "importKind": "value",
            "start": 88,
            "end": 101
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 118
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "start": 117,
              "end": 120
            },
            "importKind": "value",
            "start": 106,
            "end": 121
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 135
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "importKind": "value",
            "start": 126,
            "end": 140
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 154
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 158
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 160
              },
              "start": 157,
              "end": 160
            },
            "importKind": "value",
            "start": 145,
            "end": 161
          }
        ],
        "start": 82,
        "end": 163
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 67,
      "end": 163
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m0",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 174
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 192
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 195,
              "end": 202
            },
            "expression": false,
            "start": 181,
            "end": 202
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 219
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 223,
                    "end": 229
                  },
                  "start": 221,
                  "end": 229
                },
                "start": 220,
                "end": 229
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 208,
            "end": 231
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 247
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 251,
                    "end": 257
                  },
                  "start": 249,
                  "end": 257
                },
                "start": 248,
                "end": 257
              }
            ],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 236,
            "end": 259
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 275
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 280,
                    "end": 283
                  },
                  "start": 278,
                  "end": 283
                },
                "start": 276,
                "end": 283
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 285,
              "end": 292
            },
            "expression": false,
            "start": 264,
            "end": 292
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 306
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 325
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 332,
                          "end": 338
                        },
                        "start": 330,
                        "end": 338
                      },
                      "start": 328,
                      "end": 338
                    },
                    "start": 326,
                    "end": 338
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 317,
                  "end": 339
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 357
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 363,
                          "end": 369
                        },
                        "start": 361,
                        "end": 369
                      },
                      "start": 359,
                      "end": 369
                    },
                    "start": 357,
                    "end": 369
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 348,
                  "end": 370
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 396
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 379,
                  "end": 397
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 422
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 406,
                  "end": 423
                }
              ],
              "start": 307,
              "end": 429
            },
            "abstract": false,
            "declare": false,
            "start": 298,
            "end": 429
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 445,
              "end": 447
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 463,
                        "end": 469
                      },
                      "typeArguments": null,
                      "start": 463,
                      "end": 469
                    },
                    "start": 461,
                    "end": 469
                  },
                  "start": 458,
                  "end": 470
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 483,
                          "end": 489
                        },
                        "start": 481,
                        "end": 489
                      },
                      "start": 480,
                      "end": 489
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 492,
                        "end": 494
                      },
                      "typeArguments": null,
                      "start": 492,
                      "end": 494
                    },
                    "start": 490,
                    "end": 494
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 479,
                  "end": 495
                }
              ],
              "start": 448,
              "end": 501
            },
            "declare": false,
            "start": 435,
            "end": 501
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 516
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 519,
              "end": 520
            },
            "importKind": "value",
            "start": 507,
            "end": 521
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 535
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 539
            },
            "importKind": "value",
            "start": 526,
            "end": 540
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 554
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 558
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 559,
                "end": 560
              },
              "start": 557,
              "end": 560
            },
            "importKind": "value",
            "start": 545,
            "end": 561
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null,
              "start": 573,
              "end": 575
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 579
            },
            "importKind": "value",
            "start": 566,
            "end": 580
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 594
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 598
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 600
              },
              "start": 597,
              "end": 600
            },
            "importKind": "value",
            "start": 585,
            "end": 601
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m7",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 615
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 619
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 620,
                  "end": 621
                },
                "start": 618,
                "end": 621
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 623
              },
              "start": 618,
              "end": 623
            },
            "importKind": "value",
            "start": 606,
            "end": 624
          }
        ],
        "start": 175,
        "end": 626
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 165,
      "end": 626
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 637
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 662
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 665,
                "end": 672
              },
              "expression": false,
              "start": 651,
              "end": 672
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 644,
            "end": 672
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 694,
                "end": 696
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 700,
                      "end": 706
                    },
                    "start": 698,
                    "end": 706
                  },
                  "start": 697,
                  "end": 706
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 685,
              "end": 708
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 678,
            "end": 708
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 731
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 735,
                      "end": 741
                    },
                    "start": 733,
                    "end": 741
                  },
                  "start": 732,
                  "end": 741
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 720,
              "end": 743
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 713,
            "end": 743
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 766
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 771,
                      "end": 774
                    },
                    "start": 769,
                    "end": 774
                  },
                  "start": 767,
                  "end": 774
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 776,
                "end": 783
              },
              "expression": false,
              "start": 755,
              "end": 783
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 748,
            "end": 783
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 802,
                "end": 804
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 822,
                      "end": 823
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 830,
                            "end": 836
                          },
                          "start": 828,
                          "end": 836
                        },
                        "start": 825,
                        "end": 836
                      },
                      "start": 823,
                      "end": 836
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 815,
                    "end": 837
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 854,
                      "end": 855
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 862,
                            "end": 868
                          },
                          "start": 860,
                          "end": 868
                        },
                        "start": 857,
                        "end": 868
                      },
                      "start": 855,
                      "end": 868
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 846,
                    "end": 869
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 893,
                      "end": 895
                    },
                    "typeAnnotation": null,
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 878,
                    "end": 896
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 919,
                      "end": 921
                    },
                    "typeAnnotation": null,
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 905,
                    "end": 922
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 939,
                      "end": 940
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "Hello",
                              "raw": "\"Hello\"",
                              "start": 964,
                              "end": 971
                            },
                            "start": 957,
                            "end": 972
                          }
                        ],
                        "start": 943,
                        "end": 982
                      },
                      "expression": false,
                      "start": 940,
                      "end": 982
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 932,
                    "end": 982
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1000
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1004,
                              "end": 1005
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1007,
                                "end": 1013
                              },
                              "start": 1005,
                              "end": 1013
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1004,
                            "end": 1014
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1015,
                              "end": 1016
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1018,
                                "end": 1024
                              },
                              "start": 1016,
                              "end": 1024
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1015,
                            "end": 1025
                          }
                        ],
                        "start": 1002,
                        "end": 1027
                      },
                      "start": 1000,
                      "end": 1027
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 992,
                    "end": 1028
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1037,
                      "end": 1048
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1057,
                            "end": 1058
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1050,
                          "end": 1058
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1071,
                                "end": 1077
                              },
                              "start": 1069,
                              "end": 1077
                            },
                            "start": 1067,
                            "end": 1077
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1060,
                          "end": 1077
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1087,
                            "end": 1089
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1079,
                          "end": 1089
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n4",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1103,
                                "end": 1109
                              },
                              "start": 1101,
                              "end": 1109
                            },
                            "start": 1099,
                            "end": 1109
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1091,
                          "end": 1109
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1111,
                        "end": 1122
                      },
                      "expression": false,
                      "start": 1049,
                      "end": 1122
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1037,
                    "end": 1122
                  }
                ],
                "start": 805,
                "end": 1128
              },
              "abstract": false,
              "declare": false,
              "start": 796,
              "end": 1128
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 789,
            "end": 1128
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1151,
                "end": 1153
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1169,
                          "end": 1175
                        },
                        "typeArguments": null,
                        "start": 1169,
                        "end": 1175
                      },
                      "start": 1167,
                      "end": 1175
                    },
                    "start": 1164,
                    "end": 1176
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1189,
                            "end": 1195
                          },
                          "start": 1187,
                          "end": 1195
                        },
                        "start": 1186,
                        "end": 1195
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1198,
                          "end": 1200
                        },
                        "typeArguments": null,
                        "start": 1198,
                        "end": 1200
                      },
                      "start": 1196,
                      "end": 1200
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1185,
                    "end": 1201
                  }
                ],
                "start": 1154,
                "end": 1207
              },
              "declare": false,
              "start": 1141,
              "end": 1207
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1134,
            "end": 1207
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1220,
              "end": 1222
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1225,
              "end": 1226
            },
            "importKind": "value",
            "start": 1213,
            "end": 1227
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1239,
              "end": 1241
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1244,
              "end": 1245
            },
            "importKind": "value",
            "start": 1232,
            "end": 1246
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1260
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1263,
                "end": 1264
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1265,
                "end": 1266
              },
              "start": 1263,
              "end": 1266
            },
            "importKind": "value",
            "start": 1251,
            "end": 1267
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1279,
              "end": 1281
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1284,
              "end": 1285
            },
            "importKind": "value",
            "start": 1272,
            "end": 1286
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1298,
              "end": 1300
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1303,
                "end": 1304
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1305,
                "end": 1306
              },
              "start": 1303,
              "end": 1306
            },
            "importKind": "value",
            "start": 1291,
            "end": 1307
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1319,
              "end": 1321
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1324,
                  "end": 1325
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1326,
                  "end": 1327
                },
                "start": 1324,
                "end": 1327
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1328,
                "end": 1329
              },
              "start": 1324,
              "end": 1329
            },
            "importKind": "value",
            "start": 1312,
            "end": 1330
          }
        ],
        "start": 638,
        "end": 1332
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 628,
      "end": 1332
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1341,
        "end": 1342
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1363,
                "end": 1365
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1380,
                          "end": 1381
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 1384,
                          "end": 1386
                        },
                        "definite": false,
                        "start": 1380,
                        "end": 1386
                      }
                    ],
                    "declare": false,
                    "start": 1376,
                    "end": 1387
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1410,
                                "end": 1416
                              },
                              "start": 1408,
                              "end": 1416
                            },
                            "start": 1407,
                            "end": 1416
                          },
                          "init": null,
                          "definite": false,
                          "start": 1407,
                          "end": 1416
                        }
                      ],
                      "declare": false,
                      "start": 1403,
                      "end": 1417
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1396,
                    "end": 1417
                  }
                ],
                "start": 1366,
                "end": 1423
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 1356,
              "end": 1423
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1349,
            "end": 1423
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1443,
                "end": 1445
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1470,
                                "end": 1476
                              },
                              "start": 1468,
                              "end": 1476
                            },
                            "start": 1467,
                            "end": 1476
                          },
                          "init": null,
                          "definite": false,
                          "start": 1467,
                          "end": 1476
                        }
                      ],
                      "declare": false,
                      "start": 1463,
                      "end": 1477
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1456,
                    "end": 1477
                  }
                ],
                "start": 1446,
                "end": 1483
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 1436,
              "end": 1483
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1429,
            "end": 1483
          }
        ],
        "start": 1343,
        "end": 1485
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1334,
      "end": 1485
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1494,
        "end": 1495
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m25",
                "optional": false,
                "typeAnnotation": null,
                "start": 1517,
                "end": 1520
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1545,
                        "end": 1547
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "VariableDeclaration",
                              "kind": "var",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1576,
                                        "end": 1582
                                      },
                                      "start": 1574,
                                      "end": 1582
                                    },
                                    "start": 1573,
                                    "end": 1582
                                  },
                                  "init": null,
                                  "definite": false,
                                  "start": 1573,
                                  "end": 1582
                                }
                              ],
                              "declare": false,
                              "start": 1569,
                              "end": 1583
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1562,
                            "end": 1583
                          }
                        ],
                        "start": 1548,
                        "end": 1593
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false,
                      "start": 1538,
                      "end": 1593
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1531,
                    "end": 1593
                  }
                ],
                "start": 1521,
                "end": 1599
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 1510,
              "end": 1599
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1503,
            "end": 1599
          }
        ],
        "start": 1496,
        "end": 1601
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1487,
      "end": 1601
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1610,
        "end": 1613
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1634,
                "end": 1636
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1661,
                        "end": 1663
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "TSModuleDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1692,
                                "end": 1694
                              },
                              "body": {
                                "type": "TSModuleBlock",
                                "body": [
                                  {
                                    "type": "ExportNamedDeclaration",
                                    "declaration": {
                                      "type": "VariableDeclaration",
                                      "kind": "var",
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "id": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "c",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1727,
                                                "end": 1733
                                              },
                                              "start": 1725,
                                              "end": 1733
                                            },
                                            "start": 1724,
                                            "end": 1733
                                          },
                                          "init": null,
                                          "definite": false,
                                          "start": 1724,
                                          "end": 1733
                                        }
                                      ],
                                      "declare": false,
                                      "start": 1720,
                                      "end": 1734
                                    },
                                    "specifiers": [],
                                    "source": null,
                                    "exportKind": "value",
                                    "attributes": [],
                                    "start": 1713,
                                    "end": 1734
                                  }
                                ],
                                "start": 1695,
                                "end": 1748
                              },
                              "kind": "module",
                              "declare": false,
                              "global": false,
                              "start": 1685,
                              "end": 1748
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 1678,
                            "end": 1748
                          }
                        ],
                        "start": 1664,
                        "end": 1758
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false,
                      "start": 1654,
                      "end": 1758
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1647,
                    "end": 1758
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1784,
                        "end": 1785
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 20,
                              "raw": "20",
                              "start": 1809,
                              "end": 1811
                            },
                            "start": 1802,
                            "end": 1812
                          }
                        ],
                        "start": 1788,
                        "end": 1822
                      },
                      "expression": false,
                      "start": 1775,
                      "end": 1822
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1768,
                    "end": 1822
                  }
                ],
                "start": 1637,
                "end": 1828
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 1627,
              "end": 1828
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1620,
            "end": 1828
          }
        ],
        "start": 1614,
        "end": 1830
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1603,
      "end": 1830
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1847,
        "end": 1849
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1867,
                    "end": 1868
                  },
                  "init": null,
                  "definite": false,
                  "start": 1867,
                  "end": 1868
                }
              ],
              "declare": false,
              "start": 1863,
              "end": 1869
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1856,
            "end": 1869
          }
        ],
        "start": 1850,
        "end": 1871
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1832,
      "end": 1871
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1888,
        "end": 1890
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1908,
                    "end": 1909
                  },
                  "init": null,
                  "definite": false,
                  "start": 1908,
                  "end": 1909
                }
              ],
              "declare": false,
              "start": 1904,
              "end": 1910
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1897,
            "end": 1910
          }
        ],
        "start": 1891,
        "end": 1912
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1873,
      "end": 1912
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m43",
        "optional": false,
        "typeAnnotation": null,
        "start": 1929,
        "end": 1932
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1950,
                    "end": 1951
                  },
                  "init": null,
                  "definite": false,
                  "start": 1950,
                  "end": 1951
                }
              ],
              "declare": false,
              "start": 1946,
              "end": 1952
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1939,
            "end": 1952
          }
        ],
        "start": 1933,
        "end": 1954
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1914,
      "end": 1954
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m55",
        "optional": false,
        "typeAnnotation": null,
        "start": 1971,
        "end": 1974
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1992,
                    "end": 1993
                  },
                  "init": null,
                  "definite": false,
                  "start": 1992,
                  "end": 1993
                }
              ],
              "declare": false,
              "start": 1988,
              "end": 1994
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1981,
            "end": 1994
          }
        ],
        "start": 1975,
        "end": 1996
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1956,
      "end": 1996
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "m3",
        "raw": "\"m3\"",
        "start": 2013,
        "end": 2017
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2038,
                        "end": 2044
                      },
                      "start": 2036,
                      "end": 2044
                    },
                    "start": 2035,
                    "end": 2044
                  },
                  "init": null,
                  "definite": false,
                  "start": 2035,
                  "end": 2044
                }
              ],
              "declare": false,
              "start": 2031,
              "end": 2045
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2024,
            "end": 2045
          }
        ],
        "start": 2018,
        "end": 2047
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1998,
      "end": 2047
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exportTests",
        "optional": false,
        "typeAnnotation": null,
        "start": 2056,
        "end": 2067
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2087,
                "end": 2096
              },
              "typeParameters": null,
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
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2115,
                      "end": 2117
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 30,
                              "raw": "30",
                              "start": 2141,
                              "end": 2143
                            },
                            "start": 2134,
                            "end": 2144
                          }
                        ],
                        "start": 2120,
                        "end": 2154
                      },
                      "expression": false,
                      "start": 2117,
                      "end": 2154
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2107,
                    "end": 2154
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2171,
                      "end": 2173
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "string",
                              "raw": "\"string\"",
                              "start": 2197,
                              "end": 2205
                            },
                            "start": 2190,
                            "end": 2206
                          }
                        ],
                        "start": 2176,
                        "end": 2216
                      },
                      "expression": false,
                      "start": 2173,
                      "end": 2216
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2164,
                    "end": 2216
                  }
                ],
                "start": 2097,
                "end": 2222
              },
              "abstract": false,
              "declare": false,
              "start": 2081,
              "end": 2222
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2074,
            "end": 2222
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2233,
              "end": 2243
            },
            "typeParameters": null,
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
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2262,
                    "end": 2264
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 30,
                            "raw": "30",
                            "start": 2288,
                            "end": 2290
                          },
                          "start": 2281,
                          "end": 2291
                        }
                      ],
                      "start": 2267,
                      "end": 2301
                    },
                    "expression": false,
                    "start": 2264,
                    "end": 2301
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2254,
                  "end": 2301
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2318,
                    "end": 2320
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "\"string\"",
                            "start": 2344,
                            "end": 2352
                          },
                          "start": 2337,
                          "end": 2353
                        }
                      ],
                      "start": 2323,
                      "end": 2363
                    },
                    "expression": false,
                    "start": 2320,
                    "end": 2363
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2311,
                  "end": 2363
                }
              ],
              "start": 2244,
              "end": 2369
            },
            "abstract": false,
            "declare": false,
            "start": 2227,
            "end": 2369
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2388,
                "end": 2397
              },
              "typeParameters": null,
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
                      "name": "getC2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2416,
                      "end": 2429
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
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
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2457,
                                "end": 2467
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2453,
                              "end": 2469
                            },
                            "start": 2446,
                            "end": 2470
                          }
                        ],
                        "start": 2432,
                        "end": 2480
                      },
                      "expression": false,
                      "start": 2429,
                      "end": 2480
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2408,
                    "end": 2480
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "setC2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2497,
                      "end": 2510
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2516,
                                "end": 2526
                              },
                              "typeArguments": null,
                              "start": 2516,
                              "end": 2526
                            },
                            "start": 2514,
                            "end": 2526
                          },
                          "start": 2511,
                          "end": 2526
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2528,
                        "end": 2539
                      },
                      "expression": false,
                      "start": 2510,
                      "end": 2539
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2489,
                    "end": 2539
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2560,
                      "end": 2562
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
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
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2590,
                                "end": 2600
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2586,
                              "end": 2602
                            },
                            "start": 2579,
                            "end": 2603
                          }
                        ],
                        "start": 2565,
                        "end": 2613
                      },
                      "expression": false,
                      "start": 2562,
                      "end": 2613
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2548,
                    "end": 2613
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getC1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2629,
                      "end": 2641
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
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
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2669,
                                "end": 2678
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2665,
                              "end": 2680
                            },
                            "start": 2658,
                            "end": 2681
                          }
                        ],
                        "start": 2644,
                        "end": 2691
                      },
                      "expression": false,
                      "start": 2641,
                      "end": 2691
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2622,
                    "end": 2691
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "setC1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2707,
                      "end": 2719
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2725,
                                "end": 2734
                              },
                              "typeArguments": null,
                              "start": 2725,
                              "end": 2734
                            },
                            "start": 2723,
                            "end": 2734
                          },
                          "start": 2720,
                          "end": 2734
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2736,
                        "end": 2747
                      },
                      "expression": false,
                      "start": 2719,
                      "end": 2747
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2700,
                    "end": 2747
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2767,
                      "end": 2769
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
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
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2797,
                                "end": 2806
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2793,
                              "end": 2808
                            },
                            "start": 2786,
                            "end": 2809
                          }
                        ],
                        "start": 2772,
                        "end": 2819
                      },
                      "expression": false,
                      "start": 2769,
                      "end": 2819
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2756,
                    "end": 2819
                  }
                ],
                "start": 2398,
                "end": 2825
              },
              "abstract": false,
              "declare": false,
              "start": 2382,
              "end": 2825
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2375,
            "end": 2825
          }
        ],
        "start": 2068,
        "end": 2827
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 2049,
      "end": 2827
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mAmbient",
        "optional": false,
        "typeAnnotation": null,
        "start": 2844,
        "end": 2852
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 2865,
              "end": 2866
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2884,
                    "end": 2890
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2892,
                      "end": 2898
                    },
                    "start": 2890,
                    "end": 2898
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 2877,
                  "end": 2899
                }
              ],
              "start": 2867,
              "end": 2905
            },
            "abstract": false,
            "declare": false,
            "start": 2859,
            "end": 2905
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2920,
              "end": 2923
            },
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2928,
                  "end": 2929
                },
                "typeArguments": null,
                "start": 2928,
                "end": 2929
              },
              "start": 2926,
              "end": 2929
            },
            "body": null,
            "expression": false,
            "start": 2911,
            "end": 2930
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aVar",
                  "optional": false,
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
                        "start": 2945,
                        "end": 2946
                      },
                      "typeArguments": null,
                      "start": 2945,
                      "end": 2946
                    },
                    "start": 2943,
                    "end": 2946
                  },
                  "start": 2939,
                  "end": 2946
                },
                "init": null,
                "definite": false,
                "start": 2939,
                "end": 2946
              }
            ],
            "declare": false,
            "start": 2935,
            "end": 2947
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2962,
              "end": 2963
            },
            "typeParameters": null,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2974,
                    "end": 2975
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2977,
                      "end": 2983
                    },
                    "start": 2975,
                    "end": 2983
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2974,
                  "end": 2984
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2993,
                    "end": 2994
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
                        "start": 2996,
                        "end": 2997
                      },
                      "typeArguments": null,
                      "start": 2996,
                      "end": 2997
                    },
                    "start": 2994,
                    "end": 2997
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2993,
                  "end": 2998
                }
              ],
              "start": 2964,
              "end": 3004
            },
            "declare": false,
            "start": 2952,
            "end": 3004
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 3014,
              "end": 3015
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3026,
                    "end": 3027
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 3026,
                  "end": 3027
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3037,
                    "end": 3038
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 3037,
                  "end": 3038
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3048,
                    "end": 3049
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 3048,
                  "end": 3049
                }
              ],
              "start": 3016,
              "end": 3055
            },
            "const": false,
            "declare": false,
            "start": 3009,
            "end": 3055
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3068,
              "end": 3070
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3087,
                    "end": 3088
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myProp",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3110,
                          "end": 3116
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3118,
                            "end": 3124
                          },
                          "start": 3116,
                          "end": 3124
                        },
                        "value": null,
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public",
                        "start": 3103,
                        "end": 3125
                      }
                    ],
                    "start": 3089,
                    "end": 3135
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 3081,
                  "end": 3135
                },
                {
                  "type": "TSDeclareFunction",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3154,
                    "end": 3157
                  },
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3161,
                        "end": 3162
                      },
                      "typeArguments": null,
                      "start": 3161,
                      "end": 3162
                    },
                    "start": 3159,
                    "end": 3162
                  },
                  "body": null,
                  "expression": false,
                  "start": 3145,
                  "end": 3163
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aVar",
                        "optional": false,
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
                              "start": 3182,
                              "end": 3183
                            },
                            "typeArguments": null,
                            "start": 3182,
                            "end": 3183
                          },
                          "start": 3180,
                          "end": 3183
                        },
                        "start": 3176,
                        "end": 3183
                      },
                      "init": null,
                      "definite": false,
                      "start": 3176,
                      "end": 3183
                    }
                  ],
                  "declare": false,
                  "start": 3172,
                  "end": 3184
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3203,
                    "end": 3204
                  },
                  "typeParameters": null,
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3219,
                          "end": 3220
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3222,
                            "end": 3228
                          },
                          "start": 3220,
                          "end": 3228
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3219,
                        "end": 3229
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3242,
                          "end": 3243
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
                              "start": 3245,
                              "end": 3246
                            },
                            "typeArguments": null,
                            "start": 3245,
                            "end": 3246
                          },
                          "start": 3243,
                          "end": 3246
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3242,
                        "end": 3247
                      }
                    ],
                    "start": 3205,
                    "end": 3257
                  },
                  "declare": false,
                  "start": 3193,
                  "end": 3257
                },
                {
                  "type": "TSEnumDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3271,
                    "end": 3272
                  },
                  "body": {
                    "type": "TSEnumBody",
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3287,
                          "end": 3288
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 3287,
                        "end": 3288
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3302,
                          "end": 3303
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 3302,
                        "end": 3303
                      },
                      {
                        "type": "TSEnumMember",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3317,
                          "end": 3318
                        },
                        "initializer": null,
                        "computed": false,
                        "start": 3317,
                        "end": 3318
                      }
                    ],
                    "start": 3273,
                    "end": 3328
                  },
                  "const": false,
                  "declare": false,
                  "start": 3266,
                  "end": 3328
                }
              ],
              "start": 3071,
              "end": 3334
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 3061,
            "end": 3334
          }
        ],
        "start": 2853,
        "end": 3336
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 2829,
      "end": 3336
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 3347,
        "end": 3350
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mAmbient",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3366,
                  "end": 3374
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3375,
                  "end": 3378
                },
                "optional": false,
                "computed": false,
                "start": 3366,
                "end": 3378
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3366,
              "end": 3380
            },
            "start": 3359,
            "end": 3381
          }
        ],
        "start": 3353,
        "end": 3383
      },
      "expression": false,
      "start": 3338,
      "end": 3383
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3389,
            "end": 3393
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "mAmbient",
                "optional": false,
                "typeAnnotation": null,
                "start": 3400,
                "end": 3408
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 3409,
                "end": 3410
              },
              "optional": false,
              "computed": false,
              "start": 3400,
              "end": 3410
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3396,
            "end": 3412
          },
          "definite": false,
          "start": 3389,
          "end": 3412
        }
      ],
      "declare": false,
      "start": 3385,
      "end": 3413
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3418,
            "end": 3422
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mAmbient",
              "optional": false,
              "typeAnnotation": null,
              "start": 3425,
              "end": 3433
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "aVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 3434,
              "end": 3438
            },
            "optional": false,
            "computed": false,
            "start": 3425,
            "end": 3438
          },
          "definite": false,
          "start": 3418,
          "end": 3438
        }
      ],
      "declare": false,
      "start": 3414,
      "end": 3439
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3448,
                    "end": 3456
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3457,
                    "end": 3458
                  },
                  "start": 3448,
                  "end": 3458
                },
                "typeArguments": null,
                "start": 3448,
                "end": 3458
              },
              "start": 3446,
              "end": 3458
            },
            "start": 3444,
            "end": 3458
          },
          "init": null,
          "definite": false,
          "start": 3444,
          "end": 3458
        }
      ],
      "declare": false,
      "start": 3440,
      "end": 3459
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "eVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3470,
                    "end": 3478
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3479,
                    "end": 3480
                  },
                  "start": 3470,
                  "end": 3480
                },
                "typeArguments": null,
                "start": 3470,
                "end": 3480
              },
              "start": 3468,
              "end": 3480
            },
            "start": 3464,
            "end": 3480
          },
          "init": null,
          "definite": false,
          "start": 3464,
          "end": 3480
        }
      ],
      "declare": false,
      "start": 3460,
      "end": 3481
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 3492,
        "end": 3497
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mAmbient",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3513,
                    "end": 3521
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3522,
                    "end": 3524
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3513,
                  "end": 3524
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3525,
                  "end": 3528
                },
                "optional": false,
                "computed": false,
                "start": 3513,
                "end": 3528
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3513,
              "end": 3530
            },
            "start": 3506,
            "end": 3531
          }
        ],
        "start": 3500,
        "end": 3533
      },
      "expression": false,
      "start": 3483,
      "end": 3533
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m3cVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3539,
            "end": 3545
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mAmbient",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3552,
                  "end": 3560
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3561,
                  "end": 3563
                },
                "optional": false,
                "computed": false,
                "start": 3552,
                "end": 3563
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 3564,
                "end": 3565
              },
              "optional": false,
              "computed": false,
              "start": 3552,
              "end": 3565
            },
            "typeArguments": null,
            "arguments": [],
            "start": 3548,
            "end": 3567
          },
          "definite": false,
          "start": 3539,
          "end": 3567
        }
      ],
      "declare": false,
      "start": 3535,
      "end": 3568
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m3aVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3573,
            "end": 3579
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "mAmbient",
                "optional": false,
                "typeAnnotation": null,
                "start": 3582,
                "end": 3590
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 3591,
                "end": 3593
              },
              "optional": false,
              "computed": false,
              "start": 3582,
              "end": 3593
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "aVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 3594,
              "end": 3598
            },
            "optional": false,
            "computed": false,
            "start": 3582,
            "end": 3598
          },
          "definite": false,
          "start": 3573,
          "end": 3598
        }
      ],
      "declare": false,
      "start": 3569,
      "end": 3599
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m3bB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mAmbient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3610,
                      "end": 3618
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3619,
                      "end": 3621
                    },
                    "start": 3610,
                    "end": 3621
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3622,
                    "end": 3623
                  },
                  "start": 3610,
                  "end": 3623
                },
                "typeArguments": null,
                "start": 3610,
                "end": 3623
              },
              "start": 3608,
              "end": 3623
            },
            "start": 3604,
            "end": 3623
          },
          "init": null,
          "definite": false,
          "start": 3604,
          "end": 3623
        }
      ],
      "declare": false,
      "start": 3600,
      "end": 3624
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m3eVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mAmbient",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3637,
                      "end": 3645
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3646,
                      "end": 3648
                    },
                    "start": 3637,
                    "end": 3648
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3649,
                    "end": 3650
                  },
                  "start": 3637,
                  "end": 3650
                },
                "typeArguments": null,
                "start": 3637,
                "end": 3650
              },
              "start": 3635,
              "end": 3650
            },
            "start": 3629,
            "end": 3650
          },
          "init": null,
          "definite": false,
          "start": 3629,
          "end": 3650
        }
      ],
      "declare": false,
      "start": 3625,
      "end": 3651
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3652
}
```
