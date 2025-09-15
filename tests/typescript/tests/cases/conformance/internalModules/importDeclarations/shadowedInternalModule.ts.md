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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
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
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 96
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 102
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 104,
                          "end": 105
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 101,
                        "end": 105
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 107,
                          "end": 108
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 110,
                          "end": 111
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 107,
                        "end": 111
                      }
                    ],
                    "start": 99,
                    "end": 113
                  },
                  "definite": false,
                  "start": 91,
                  "end": 113
                }
              ],
              "declare": false,
              "start": 87,
              "end": 113
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 80,
            "end": 113
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 140
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
                      "start": 151,
                      "end": 152
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 154,
                        "end": 160
                      },
                      "start": 152,
                      "end": 160
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 151,
                    "end": 161
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
                      "start": 170,
                      "end": 171
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 173,
                        "end": 179
                      },
                      "start": 171,
                      "end": 179
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 170,
                    "end": 180
                  }
                ],
                "start": 141,
                "end": 186
              },
              "declare": false,
              "start": 125,
              "end": 186
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 118,
            "end": 186
          }
        ],
        "start": 74,
        "end": 188
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 62,
      "end": 188
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 202
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 214
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 220
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 222,
                        "end": 223
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 219,
                      "end": 223
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 225,
                        "end": 226
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 228,
                        "end": 229
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 225,
                      "end": 229
                    }
                  ],
                  "start": 217,
                  "end": 231
                },
                "definite": false,
                "start": 213,
                "end": 231
              }
            ],
            "declare": false,
            "start": 209,
            "end": 232
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 249
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 253
            },
            "importKind": "value",
            "start": 237,
            "end": 254
          }
        ],
        "start": 203,
        "end": 256
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 191,
      "end": 256
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 269
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
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 294
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 327
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
                              "start": 341,
                              "end": 342
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 344,
                                "end": 350
                              },
                              "start": 342,
                              "end": 350
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 341,
                            "end": 351
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
                              "start": 364,
                              "end": 365
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 367,
                                "end": 373
                              },
                              "start": 365,
                              "end": 373
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 364,
                            "end": 373
                          }
                        ],
                        "start": 327,
                        "end": 383
                      },
                      "declare": false,
                      "start": 312,
                      "end": 383
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 305,
                    "end": 383
                  }
                ],
                "start": 295,
                "end": 389
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 283,
              "end": 389
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 276,
            "end": 389
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 408,
                "end": 409
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 424
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 426,
                        "end": 432
                      },
                      "start": 424,
                      "end": 432
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 420,
                    "end": 433
                  }
                ],
                "start": 410,
                "end": 439
              },
              "abstract": false,
              "declare": false,
              "start": 402,
              "end": 439
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 395,
            "end": 439
          }
        ],
        "start": 270,
        "end": 441
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 258,
      "end": 441
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 454
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 469
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 473
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "start": 472,
              "end": 475
            },
            "importKind": "value",
            "start": 461,
            "end": 476
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
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 486,
                  "end": 487
                },
                "init": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 490,
                  "end": 492
                },
                "definite": false,
                "start": 486,
                "end": 492
              }
            ],
            "declare": false,
            "start": 482,
            "end": 493
          }
        ],
        "start": 455,
        "end": 495
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 443,
      "end": 495
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 512
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 530
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 533,
                "end": 539
              },
              "declare": false,
              "start": 524,
              "end": 540
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 517,
            "end": 540
          }
        ],
        "start": 513,
        "end": 542
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 501,
      "end": 542
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 555
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 575
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 579
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 581
                },
                "start": 578,
                "end": 581
              },
              "importKind": "value",
              "start": 567,
              "end": 582
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 560,
            "end": 582
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 603
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [],
                "start": 604,
                "end": 606
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 592,
              "end": 606
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 585,
            "end": 606
          }
        ],
        "start": 556,
        "end": 608
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 544,
      "end": 608
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 620,
        "end": 621
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "any",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 636
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 640
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 642
              },
              "start": 639,
              "end": 642
            },
            "importKind": "value",
            "start": 626,
            "end": 643
          }
        ],
        "start": 622,
        "end": 645
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 610,
      "end": 645
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "q",
        "optional": false,
        "typeAnnotation": null,
        "start": 661,
        "end": 662
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 680,
                    "end": 681
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 684,
                    "end": 686
                  },
                  "definite": false,
                  "start": 680,
                  "end": 686
                }
              ],
              "declare": false,
              "start": 674,
              "end": 687
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 667,
            "end": 687
          }
        ],
        "start": 663,
        "end": 689
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 651,
      "end": 689
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 702
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 721,
                "end": 722
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 725,
                  "end": 726
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 727,
                  "end": 728
                },
                "start": 725,
                "end": 728
              },
              "importKind": "value",
              "start": 714,
              "end": 729
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 707,
            "end": 729
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 744,
                "end": 745
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 748,
                "end": 754
              },
              "declare": false,
              "start": 739,
              "end": 755
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 732,
            "end": 755
          }
        ],
        "start": 703,
        "end": 757
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 691,
      "end": 757
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null,
        "start": 769,
        "end": 770
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 783
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 786,
                "end": 787
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 788,
                "end": 789
              },
              "start": 786,
              "end": 789
            },
            "importKind": "value",
            "start": 775,
            "end": 790
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 799,
                  "end": 800
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 803,
                  "end": 804
                },
                "definite": false,
                "start": 799,
                "end": 804
              }
            ],
            "declare": false,
            "start": 793,
            "end": 805
          }
        ],
        "start": 771,
        "end": 807
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 759,
      "end": 807
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 807
}
```
