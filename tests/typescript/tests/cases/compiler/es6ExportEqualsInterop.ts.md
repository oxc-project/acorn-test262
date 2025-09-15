__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 15,
        "end": 26
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 46
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
                    "start": 57,
                    "end": 58
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    },
                    "start": 58,
                    "end": 66
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 57,
                  "end": 67
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
                    "start": 76,
                    "end": 77
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 79,
                      "end": 85
                    },
                    "start": 77,
                    "end": 85
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 76,
                  "end": 86
                }
              ],
              "start": 47,
              "end": 92
            },
            "declare": false,
            "start": 33,
            "end": 92
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 109
            },
            "start": 97,
            "end": 110
          }
        ],
        "start": 27,
        "end": 112
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 112
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 129,
        "end": 139
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
                  "name": "Foo",
                  "optional": false,
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 166
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 168,
                              "end": 174
                            },
                            "start": 166,
                            "end": 174
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 165,
                          "end": 175
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 184,
                            "end": 185
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 187,
                              "end": 193
                            },
                            "start": 185,
                            "end": 193
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 184,
                          "end": 194
                        }
                      ],
                      "start": 155,
                      "end": 200
                    },
                    "start": 153,
                    "end": 200
                  },
                  "start": 150,
                  "end": 200
                },
                "init": null,
                "definite": false,
                "start": 150,
                "end": 200
              }
            ],
            "declare": false,
            "start": 146,
            "end": 200
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 217
            },
            "start": 205,
            "end": 218
          }
        ],
        "start": 140,
        "end": 220
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 114,
      "end": 220
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 237,
        "end": 257
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 277
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
                    "start": 288,
                    "end": 289
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 291,
                      "end": 297
                    },
                    "start": 289,
                    "end": 297
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 288,
                  "end": 298
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
                    "start": 307,
                    "end": 308
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 310,
                      "end": 316
                    },
                    "start": 308,
                    "end": 316
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 307,
                  "end": 317
                }
              ],
              "start": 278,
              "end": 323
            },
            "declare": false,
            "start": 264,
            "end": 323
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
                  "name": "Foo",
                  "optional": false,
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 347,
                            "end": 348
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 350,
                              "end": 356
                            },
                            "start": 348,
                            "end": 356
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 347,
                          "end": 357
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 366,
                            "end": 367
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 369,
                              "end": 375
                            },
                            "start": 367,
                            "end": 375
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 366,
                          "end": 376
                        }
                      ],
                      "start": 337,
                      "end": 382
                    },
                    "start": 335,
                    "end": 382
                  },
                  "start": 332,
                  "end": 382
                },
                "init": null,
                "definite": false,
                "start": 332,
                "end": 382
              }
            ],
            "declare": false,
            "start": 328,
            "end": 382
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 399
            },
            "start": 387,
            "end": 400
          }
        ],
        "start": 258,
        "end": 402
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 222,
      "end": 402
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 419,
        "end": 427
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 447
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 472,
                              "end": 478
                            },
                            "start": 470,
                            "end": 478
                          },
                          "start": 469,
                          "end": 478
                        },
                        "init": null,
                        "definite": false,
                        "start": 469,
                        "end": 478
                      }
                    ],
                    "declare": false,
                    "start": 465,
                    "end": 479
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 458,
                  "end": 479
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
                              "start": 502,
                              "end": 508
                            },
                            "start": 500,
                            "end": 508
                          },
                          "start": 499,
                          "end": 508
                        },
                        "init": null,
                        "definite": false,
                        "start": 499,
                        "end": 508
                      }
                    ],
                    "declare": false,
                    "start": 495,
                    "end": 509
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 488,
                  "end": 509
                }
              ],
              "start": 448,
              "end": 515
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 434,
            "end": 515
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 532
            },
            "start": 520,
            "end": 533
          }
        ],
        "start": 428,
        "end": 535
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 404,
      "end": 535
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 552,
        "end": 570
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 590
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
                    "start": 601,
                    "end": 602
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 604,
                      "end": 610
                    },
                    "start": 602,
                    "end": 610
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 601,
                  "end": 611
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
                    "start": 620,
                    "end": 621
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 623,
                      "end": 629
                    },
                    "start": 621,
                    "end": 629
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 620,
                  "end": 630
                }
              ],
              "start": 591,
              "end": 636
            },
            "declare": false,
            "start": 577,
            "end": 636
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 654
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 679,
                              "end": 685
                            },
                            "start": 677,
                            "end": 685
                          },
                          "start": 676,
                          "end": 685
                        },
                        "init": null,
                        "definite": false,
                        "start": 676,
                        "end": 685
                      }
                    ],
                    "declare": false,
                    "start": 672,
                    "end": 686
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 665,
                  "end": 686
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
                              "start": 709,
                              "end": 715
                            },
                            "start": 707,
                            "end": 715
                          },
                          "start": 706,
                          "end": 715
                        },
                        "init": null,
                        "definite": false,
                        "start": 706,
                        "end": 715
                      }
                    ],
                    "declare": false,
                    "start": 702,
                    "end": 716
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 695,
                  "end": 716
                }
              ],
              "start": 655,
              "end": 722
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 641,
            "end": 722
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 739
            },
            "start": 727,
            "end": 740
          }
        ],
        "start": 571,
        "end": 742
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 537,
      "end": 742
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 759,
        "end": 776
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 796
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 817,
                    "end": 820
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
                          "start": 835,
                          "end": 836
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 838,
                            "end": 844
                          },
                          "start": 836,
                          "end": 844
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 835,
                        "end": 845
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
                          "start": 858,
                          "end": 859
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 861,
                            "end": 867
                          },
                          "start": 859,
                          "end": 867
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 858,
                        "end": 868
                      }
                    ],
                    "start": 821,
                    "end": 878
                  },
                  "declare": false,
                  "start": 807,
                  "end": 878
                }
              ],
              "start": 797,
              "end": 884
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 783,
            "end": 884
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
                  "name": "Foo",
                  "optional": false,
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 908,
                            "end": 909
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 911,
                              "end": 917
                            },
                            "start": 909,
                            "end": 917
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 908,
                          "end": 918
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 927,
                            "end": 928
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 930,
                              "end": 936
                            },
                            "start": 928,
                            "end": 936
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 927,
                          "end": 937
                        }
                      ],
                      "start": 898,
                      "end": 943
                    },
                    "start": 896,
                    "end": 943
                  },
                  "start": 893,
                  "end": 943
                },
                "init": null,
                "definite": false,
                "start": 893,
                "end": 943
              }
            ],
            "declare": false,
            "start": 889,
            "end": 943
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 960
            },
            "start": 948,
            "end": 961
          }
        ],
        "start": 777,
        "end": 963
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 744,
      "end": 963
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 980,
        "end": 990
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1006,
              "end": 1009
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 997,
            "end": 1012
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1026,
              "end": 1029
            },
            "start": 1017,
            "end": 1030
          }
        ],
        "start": 991,
        "end": 1032
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 965,
      "end": 1032
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 1049,
        "end": 1066
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1082,
              "end": 1085
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false,
            "start": 1073,
            "end": 1088
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1103,
              "end": 1106
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1131,
                              "end": 1137
                            },
                            "start": 1129,
                            "end": 1137
                          },
                          "start": 1128,
                          "end": 1137
                        },
                        "init": null,
                        "definite": false,
                        "start": 1128,
                        "end": 1137
                      }
                    ],
                    "declare": false,
                    "start": 1124,
                    "end": 1138
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1117,
                  "end": 1138
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
                              "start": 1161,
                              "end": 1167
                            },
                            "start": 1159,
                            "end": 1167
                          },
                          "start": 1158,
                          "end": 1167
                        },
                        "init": null,
                        "definite": false,
                        "start": 1158,
                        "end": 1167
                      }
                    ],
                    "declare": false,
                    "start": 1154,
                    "end": 1168
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1147,
                  "end": 1168
                }
              ],
              "start": 1107,
              "end": 1174
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1093,
            "end": 1174
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1188,
              "end": 1191
            },
            "start": 1179,
            "end": 1192
          }
        ],
        "start": 1067,
        "end": 1194
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1034,
      "end": 1194
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 1211,
        "end": 1218
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
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1231,
              "end": 1234
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1245,
                    "end": 1246
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1248,
                      "end": 1254
                    },
                    "start": 1246,
                    "end": 1254
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
                  "start": 1245,
                  "end": 1255
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1264,
                    "end": 1265
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1267,
                      "end": 1273
                    },
                    "start": 1265,
                    "end": 1273
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
                  "start": 1264,
                  "end": 1274
                }
              ],
              "start": 1235,
              "end": 1280
            },
            "abstract": false,
            "declare": false,
            "start": 1225,
            "end": 1280
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1297
            },
            "start": 1285,
            "end": 1298
          }
        ],
        "start": 1219,
        "end": 1300
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1196,
      "end": 1300
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 1317,
        "end": 1331
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
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1344,
              "end": 1347
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1358,
                    "end": 1359
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1361,
                      "end": 1367
                    },
                    "start": 1359,
                    "end": 1367
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
                  "start": 1358,
                  "end": 1368
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1377,
                    "end": 1378
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1380,
                      "end": 1386
                    },
                    "start": 1378,
                    "end": 1386
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
                  "start": 1377,
                  "end": 1387
                }
              ],
              "start": 1348,
              "end": 1393
            },
            "abstract": false,
            "declare": false,
            "start": 1338,
            "end": 1393
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1408,
              "end": 1411
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1436,
                              "end": 1442
                            },
                            "start": 1434,
                            "end": 1442
                          },
                          "start": 1433,
                          "end": 1442
                        },
                        "init": null,
                        "definite": false,
                        "start": 1433,
                        "end": 1442
                      }
                    ],
                    "declare": false,
                    "start": 1429,
                    "end": 1443
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1422,
                  "end": 1443
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
                              "start": 1466,
                              "end": 1472
                            },
                            "start": 1464,
                            "end": 1472
                          },
                          "start": 1463,
                          "end": 1472
                        },
                        "init": null,
                        "definite": false,
                        "start": 1463,
                        "end": 1472
                      }
                    ],
                    "declare": false,
                    "start": 1459,
                    "end": 1473
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1452,
                  "end": 1473
                }
              ],
              "start": 1412,
              "end": 1479
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1398,
            "end": 1479
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1493,
              "end": 1496
            },
            "start": 1484,
            "end": 1497
          }
        ],
        "start": 1332,
        "end": 1499
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1302,
      "end": 1499
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1500
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z1",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 64
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "interface",
          "raw": "\"interface\"",
          "start": 75,
          "end": 86
        },
        "start": 67,
        "end": 87
      },
      "importKind": "value",
      "start": 55,
      "end": 88
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z2",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 98
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "variable",
          "raw": "\"variable\"",
          "start": 109,
          "end": 119
        },
        "start": 101,
        "end": 120
      },
      "importKind": "value",
      "start": 89,
      "end": 121
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z3",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 131
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "interface-variable",
          "raw": "\"interface-variable\"",
          "start": 142,
          "end": 162
        },
        "start": 134,
        "end": 163
      },
      "importKind": "value",
      "start": 122,
      "end": 164
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z4",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 174
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "module",
          "raw": "\"module\"",
          "start": 185,
          "end": 193
        },
        "start": 177,
        "end": 194
      },
      "importKind": "value",
      "start": 165,
      "end": 195
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z5",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 205
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "interface-module",
          "raw": "\"interface-module\"",
          "start": 216,
          "end": 234
        },
        "start": 208,
        "end": 235
      },
      "importKind": "value",
      "start": 196,
      "end": 236
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z6",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 246
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "variable-module",
          "raw": "\"variable-module\"",
          "start": 257,
          "end": 274
        },
        "start": 249,
        "end": 275
      },
      "importKind": "value",
      "start": 237,
      "end": 276
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z7",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 286
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "function",
          "raw": "\"function\"",
          "start": 297,
          "end": 307
        },
        "start": 289,
        "end": 308
      },
      "importKind": "value",
      "start": 277,
      "end": 309
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z8",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 319
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "function-module",
          "raw": "\"function-module\"",
          "start": 330,
          "end": 347
        },
        "start": 322,
        "end": 348
      },
      "importKind": "value",
      "start": 310,
      "end": 349
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z9",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 359
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "class",
          "raw": "\"class\"",
          "start": 370,
          "end": 377
        },
        "start": 362,
        "end": 378
      },
      "importKind": "value",
      "start": 350,
      "end": 379
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z0",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 389
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "class-module",
          "raw": "\"class-module\"",
          "start": 400,
          "end": 414
        },
        "start": 392,
        "end": 415
      },
      "importKind": "value",
      "start": 380,
      "end": 416
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z1",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 420
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 422
        },
        "optional": false,
        "computed": false,
        "start": 418,
        "end": 422
      },
      "directive": null,
      "start": 418,
      "end": 423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z2",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 426
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 427,
          "end": 428
        },
        "optional": false,
        "computed": false,
        "start": 424,
        "end": 428
      },
      "directive": null,
      "start": 424,
      "end": 429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z3",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 432
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 433,
          "end": 434
        },
        "optional": false,
        "computed": false,
        "start": 430,
        "end": 434
      },
      "directive": null,
      "start": 430,
      "end": 435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z4",
          "optional": false,
          "typeAnnotation": null,
          "start": 436,
          "end": 438
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 439,
          "end": 440
        },
        "optional": false,
        "computed": false,
        "start": 436,
        "end": 440
      },
      "directive": null,
      "start": 436,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z5",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 444
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 445,
          "end": 446
        },
        "optional": false,
        "computed": false,
        "start": 442,
        "end": 446
      },
      "directive": null,
      "start": 442,
      "end": 447
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z6",
          "optional": false,
          "typeAnnotation": null,
          "start": 448,
          "end": 450
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 451,
          "end": 452
        },
        "optional": false,
        "computed": false,
        "start": 448,
        "end": 452
      },
      "directive": null,
      "start": 448,
      "end": 453
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z7",
          "optional": false,
          "typeAnnotation": null,
          "start": 454,
          "end": 456
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 457,
          "end": 458
        },
        "optional": false,
        "computed": false,
        "start": 454,
        "end": 458
      },
      "directive": null,
      "start": 454,
      "end": 459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z8",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 462
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 463,
          "end": 464
        },
        "optional": false,
        "computed": false,
        "start": 460,
        "end": 464
      },
      "directive": null,
      "start": 460,
      "end": 465
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z9",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 468
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 469,
          "end": 470
        },
        "optional": false,
        "computed": false,
        "start": 466,
        "end": 470
      },
      "directive": null,
      "start": 466,
      "end": 471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "z0",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 474
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 475,
          "end": 476
        },
        "optional": false,
        "computed": false,
        "start": 472,
        "end": 476
      },
      "directive": null,
      "start": 472,
      "end": 477
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 506
          },
          "start": 504,
          "end": 506
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 512,
        "end": 523
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 497,
      "end": 524
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 534
          },
          "start": 532,
          "end": 534
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 540,
        "end": 550
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 525,
      "end": 551
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 559,
            "end": 561
          },
          "start": 559,
          "end": 561
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 567,
        "end": 587
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 552,
      "end": 588
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 596,
            "end": 598
          },
          "start": 596,
          "end": 598
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 604,
        "end": 612
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 589,
      "end": 613
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 623
          },
          "start": 621,
          "end": 623
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 629,
        "end": 647
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 614,
      "end": 648
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": null,
            "start": 656,
            "end": 658
          },
          "start": 656,
          "end": 658
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 664,
        "end": 681
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 649,
      "end": 682
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x7",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 692
          },
          "start": 690,
          "end": 692
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 698,
        "end": 708
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 683,
      "end": 709
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x8",
            "optional": false,
            "typeAnnotation": null,
            "start": 717,
            "end": 719
          },
          "start": 717,
          "end": 719
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 725,
        "end": 742
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 710,
      "end": 743
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x9",
            "optional": false,
            "typeAnnotation": null,
            "start": 751,
            "end": 753
          },
          "start": 751,
          "end": 753
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 759,
        "end": 766
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 744,
      "end": 767
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x0",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 777
          },
          "start": 775,
          "end": 777
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 783,
        "end": 797
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 768,
      "end": 798
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 832,
            "end": 834
          },
          "start": 827,
          "end": 834
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 840,
        "end": 851
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 820,
      "end": 852
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 867
          },
          "start": 860,
          "end": 867
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 873,
        "end": 883
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 853,
      "end": 884
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y3",
            "optional": false,
            "typeAnnotation": null,
            "start": 897,
            "end": 899
          },
          "start": 892,
          "end": 899
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 905,
        "end": 925
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 885,
      "end": 926
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y4",
            "optional": false,
            "typeAnnotation": null,
            "start": 939,
            "end": 941
          },
          "start": 934,
          "end": 941
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 947,
        "end": 955
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 927,
      "end": 956
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y5",
            "optional": false,
            "typeAnnotation": null,
            "start": 969,
            "end": 971
          },
          "start": 964,
          "end": 971
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 977,
        "end": 995
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 957,
      "end": 996
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1009,
            "end": 1011
          },
          "start": 1004,
          "end": 1011
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 1017,
        "end": 1034
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 997,
      "end": 1035
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1048,
            "end": 1050
          },
          "start": 1043,
          "end": 1050
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 1056,
        "end": 1066
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1036,
      "end": 1067
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1082
          },
          "start": 1075,
          "end": 1082
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 1088,
        "end": 1105
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1068,
      "end": 1106
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1119,
            "end": 1121
          },
          "start": 1114,
          "end": 1121
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 1127,
        "end": 1134
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1107,
      "end": 1135
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1148,
            "end": 1150
          },
          "start": 1143,
          "end": 1150
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 1156,
        "end": 1170
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1136,
      "end": 1171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1173,
          "end": 1175
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1176,
          "end": 1177
        },
        "optional": false,
        "computed": false,
        "start": 1173,
        "end": 1177
      },
      "directive": null,
      "start": 1173,
      "end": 1178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1179,
          "end": 1181
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1182,
          "end": 1183
        },
        "optional": false,
        "computed": false,
        "start": 1179,
        "end": 1183
      },
      "directive": null,
      "start": 1179,
      "end": 1184
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1185,
          "end": 1187
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1188,
          "end": 1189
        },
        "optional": false,
        "computed": false,
        "start": 1185,
        "end": 1189
      },
      "directive": null,
      "start": 1185,
      "end": 1190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1191,
          "end": 1193
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1194,
          "end": 1195
        },
        "optional": false,
        "computed": false,
        "start": 1191,
        "end": 1195
      },
      "directive": null,
      "start": 1191,
      "end": 1196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1197,
          "end": 1199
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1200,
          "end": 1201
        },
        "optional": false,
        "computed": false,
        "start": 1197,
        "end": 1201
      },
      "directive": null,
      "start": 1197,
      "end": 1202
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1203,
          "end": 1205
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1206,
          "end": 1207
        },
        "optional": false,
        "computed": false,
        "start": 1203,
        "end": 1207
      },
      "directive": null,
      "start": 1203,
      "end": 1208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1209,
          "end": 1211
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1212,
          "end": 1213
        },
        "optional": false,
        "computed": false,
        "start": 1209,
        "end": 1213
      },
      "directive": null,
      "start": 1209,
      "end": 1214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y8",
          "optional": false,
          "typeAnnotation": null,
          "start": 1215,
          "end": 1217
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1218,
          "end": 1219
        },
        "optional": false,
        "computed": false,
        "start": 1215,
        "end": 1219
      },
      "directive": null,
      "start": 1215,
      "end": 1220
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y9",
          "optional": false,
          "typeAnnotation": null,
          "start": 1221,
          "end": 1223
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1224,
          "end": 1225
        },
        "optional": false,
        "computed": false,
        "start": 1221,
        "end": 1225
      },
      "directive": null,
      "start": 1221,
      "end": 1226
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "y0",
          "optional": false,
          "typeAnnotation": null,
          "start": 1227,
          "end": 1229
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1230,
          "end": 1231
        },
        "optional": false,
        "computed": false,
        "start": 1227,
        "end": 1231
      },
      "directive": null,
      "start": 1227,
      "end": 1232
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1259,
            "end": 1260
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1264,
            "end": 1266
          },
          "importKind": "value",
          "start": 1259,
          "end": 1266
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 1274,
        "end": 1285
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1250,
      "end": 1286
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1296,
            "end": 1297
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1301,
            "end": 1303
          },
          "importKind": "value",
          "start": 1296,
          "end": 1303
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 1311,
        "end": 1321
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1287,
      "end": 1322
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1332,
            "end": 1333
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1337,
            "end": 1339
          },
          "importKind": "value",
          "start": 1332,
          "end": 1339
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 1347,
        "end": 1367
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1323,
      "end": 1368
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1378,
            "end": 1379
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1383,
            "end": 1385
          },
          "importKind": "value",
          "start": 1378,
          "end": 1385
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 1393,
        "end": 1401
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1369,
      "end": 1402
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1413
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1417,
            "end": 1419
          },
          "importKind": "value",
          "start": 1412,
          "end": 1419
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 1427,
        "end": 1445
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1403,
      "end": 1446
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1456,
            "end": 1457
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1461,
            "end": 1463
          },
          "importKind": "value",
          "start": 1456,
          "end": 1463
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 1471,
        "end": 1488
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1447,
      "end": 1489
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1499,
            "end": 1500
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1504,
            "end": 1506
          },
          "importKind": "value",
          "start": 1499,
          "end": 1506
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 1514,
        "end": 1524
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1490,
      "end": 1525
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1535,
            "end": 1536
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1540,
            "end": 1542
          },
          "importKind": "value",
          "start": 1535,
          "end": 1542
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 1550,
        "end": 1567
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1526,
      "end": 1568
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1578,
            "end": 1579
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1583,
            "end": 1585
          },
          "importKind": "value",
          "start": 1578,
          "end": 1585
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 1593,
        "end": 1600
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1569,
      "end": 1601
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1611,
            "end": 1612
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null,
            "start": 1616,
            "end": 1618
          },
          "importKind": "value",
          "start": 1611,
          "end": 1618
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 1626,
        "end": 1640
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 1602,
      "end": 1641
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1643,
        "end": 1645
      },
      "directive": null,
      "start": 1643,
      "end": 1646
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1647,
        "end": 1649
      },
      "directive": null,
      "start": 1647,
      "end": 1650
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1651,
        "end": 1653
      },
      "directive": null,
      "start": 1651,
      "end": 1654
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1655,
        "end": 1657
      },
      "directive": null,
      "start": 1655,
      "end": 1658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1659,
        "end": 1661
      },
      "directive": null,
      "start": 1659,
      "end": 1662
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1663,
        "end": 1665
      },
      "directive": null,
      "start": 1663,
      "end": 1666
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1667,
        "end": 1669
      },
      "directive": null,
      "start": 1667,
      "end": 1670
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1671,
        "end": 1673
      },
      "directive": null,
      "start": 1671,
      "end": 1674
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1675,
        "end": 1677
      },
      "directive": null,
      "start": 1675,
      "end": 1678
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a0",
        "optional": false,
        "typeAnnotation": null,
        "start": 1679,
        "end": 1681
      },
      "directive": null,
      "start": 1679,
      "end": 1682
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1709,
            "end": 1710
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1714,
            "end": 1716
          },
          "exportKind": "value",
          "start": 1709,
          "end": 1716
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 1724,
        "end": 1735
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1700,
      "end": 1736
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1746,
            "end": 1747
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1751,
            "end": 1753
          },
          "exportKind": "value",
          "start": 1746,
          "end": 1753
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 1761,
        "end": 1771
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1737,
      "end": 1772
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1782,
            "end": 1783
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1787,
            "end": 1789
          },
          "exportKind": "value",
          "start": 1782,
          "end": 1789
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 1797,
        "end": 1817
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1773,
      "end": 1818
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1828,
            "end": 1829
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1833,
            "end": 1835
          },
          "exportKind": "value",
          "start": 1828,
          "end": 1835
        }
      ],
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 1843,
        "end": 1851
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1819,
      "end": 1852
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1862,
            "end": 1863
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1867,
            "end": 1869
          },
          "exportKind": "value",
          "start": 1862,
          "end": 1869
        }
      ],
      "source": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 1877,
        "end": 1895
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1853,
      "end": 1896
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1906,
            "end": 1907
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1911,
            "end": 1913
          },
          "exportKind": "value",
          "start": 1906,
          "end": 1913
        }
      ],
      "source": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 1921,
        "end": 1938
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1897,
      "end": 1939
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1949,
            "end": 1950
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1954,
            "end": 1956
          },
          "exportKind": "value",
          "start": 1949,
          "end": 1956
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 1964,
        "end": 1974
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1940,
      "end": 1975
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1985,
            "end": 1986
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1990,
            "end": 1992
          },
          "exportKind": "value",
          "start": 1985,
          "end": 1992
        }
      ],
      "source": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 2000,
        "end": 2017
      },
      "exportKind": "value",
      "attributes": [],
      "start": 1976,
      "end": 2018
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2028,
            "end": 2029
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9",
            "optional": false,
            "typeAnnotation": null,
            "start": 2033,
            "end": 2035
          },
          "exportKind": "value",
          "start": 2028,
          "end": 2035
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 2043,
        "end": 2050
      },
      "exportKind": "value",
      "attributes": [],
      "start": 2019,
      "end": 2051
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2061,
            "end": 2062
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null,
            "start": 2066,
            "end": 2068
          },
          "exportKind": "value",
          "start": 2061,
          "end": 2068
        }
      ],
      "source": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 2076,
        "end": 2090
      },
      "exportKind": "value",
      "attributes": [],
      "start": 2052,
      "end": 2091
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "interface",
        "raw": "\"interface\"",
        "start": 2122,
        "end": 2133
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2108,
      "end": 2134
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "variable",
        "raw": "\"variable\"",
        "start": 2149,
        "end": 2159
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2135,
      "end": 2160
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "interface-variable",
        "raw": "\"interface-variable\"",
        "start": 2175,
        "end": 2195
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2161,
      "end": 2196
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "module",
        "raw": "\"module\"",
        "start": 2211,
        "end": 2219
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2197,
      "end": 2220
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "interface-module",
        "raw": "\"interface-module\"",
        "start": 2235,
        "end": 2253
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2221,
      "end": 2254
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "variable-module",
        "raw": "\"variable-module\"",
        "start": 2269,
        "end": 2286
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2255,
      "end": 2287
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "function",
        "raw": "\"function\"",
        "start": 2302,
        "end": 2312
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2288,
      "end": 2313
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "function-module",
        "raw": "\"function-module\"",
        "start": 2328,
        "end": 2345
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2314,
      "end": 2346
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "class",
        "raw": "\"class\"",
        "start": 2361,
        "end": 2368
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2347,
      "end": 2369
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "class-module",
        "raw": "\"class-module\"",
        "start": 2384,
        "end": 2398
      },
      "attributes": [],
      "exportKind": "value",
      "start": 2370,
      "end": 2399
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 55,
  "end": 2399
}
```
