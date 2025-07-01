__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 26
              },
              "typeArguments": null,
              "start": 22,
              "end": 26
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 26
          }
        ],
        "start": 11,
        "end": 27
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
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
                  "start": 37,
                  "end": 38
                },
                "typeArguments": null,
                "start": 37,
                "end": 38
              },
              "start": 35,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 39
          }
        ],
        "start": 28,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
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
              "start": 55,
              "end": 56
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 71
              },
              "typeArguments": null,
              "start": 65,
              "end": 71
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 55,
            "end": 71
          }
        ],
        "start": 54,
        "end": 72
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
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
                  "start": 91,
                  "end": 92
                },
                "typeArguments": null,
                "start": 91,
                "end": 92
              },
              "start": 89,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 88,
            "end": 93
          }
        ],
        "start": 73,
        "end": 95
      },
      "declare": false,
      "start": 43,
      "end": 95
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 105
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
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
                    "start": 124,
                    "end": 125
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 135
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 136,
                            "end": 140
                          },
                          "typeArguments": null,
                          "start": 136,
                          "end": 140
                        }
                      ],
                      "start": 135,
                      "end": 141
                    },
                    "start": 134,
                    "end": 141
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 124,
                  "end": 141
                }
              ],
              "start": 123,
              "end": 142
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 154
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
                        "start": 156,
                        "end": 157
                      },
                      "typeArguments": null,
                      "start": 156,
                      "end": 157
                    },
                    "start": 154,
                    "end": 157
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 153,
                  "end": 158
                }
              ],
              "start": 143,
              "end": 164
            },
            "declare": false,
            "start": 112,
            "end": 164
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
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
                    "start": 182,
                    "end": 183
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 192,
                      "end": 193
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 194,
                          "end": 197
                        }
                      ],
                      "start": 193,
                      "end": 198
                    },
                    "start": 192,
                    "end": 198
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 182,
                  "end": 198
                }
              ],
              "start": 181,
              "end": 199
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 220
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
                        "start": 222,
                        "end": 223
                      },
                      "typeArguments": null,
                      "start": 222,
                      "end": 223
                    },
                    "start": 220,
                    "end": 223
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 219,
                  "end": 224
                }
              ],
              "start": 200,
              "end": 230
            },
            "declare": false,
            "start": 170,
            "end": 230
          }
        ],
        "start": 106,
        "end": 232
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 97,
      "end": 232
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 243
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
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
                    "start": 262,
                    "end": 263
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 276
                    },
                    "typeArguments": null,
                    "start": 272,
                    "end": 276
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 262,
                  "end": 276
                }
              ],
              "start": 261,
              "end": 277
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 288,
                    "end": 289
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
                        "start": 291,
                        "end": 292
                      },
                      "typeArguments": null,
                      "start": 291,
                      "end": 292
                    },
                    "start": 289,
                    "end": 292
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 288,
                  "end": 293
                }
              ],
              "start": 278,
              "end": 299
            },
            "declare": false,
            "start": 250,
            "end": 299
          }
        ],
        "start": 244,
        "end": 301
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 234,
      "end": 301
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 310,
        "end": 312
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
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
                    "start": 331,
                    "end": 332
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 341,
                      "end": 347
                    },
                    "typeArguments": null,
                    "start": 341,
                    "end": 347
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 331,
                  "end": 347
                }
              ],
              "start": 330,
              "end": 348
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 411
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
                        "start": 413,
                        "end": 414
                      },
                      "typeArguments": null,
                      "start": 413,
                      "end": 414
                    },
                    "start": 411,
                    "end": 414
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 410,
                  "end": 415
                }
              ],
              "start": 349,
              "end": 421
            },
            "declare": false,
            "start": 319,
            "end": 421
          }
        ],
        "start": 313,
        "end": 423
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 303,
      "end": 423
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 434
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 458,
                "end": 459
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
                      "start": 460,
                      "end": 461
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 470,
                        "end": 474
                      },
                      "typeArguments": null,
                      "start": 470,
                      "end": 474
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 460,
                    "end": 474
                  }
                ],
                "start": 459,
                "end": 475
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 486,
                      "end": 487
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
                          "start": 489,
                          "end": 490
                        },
                        "typeArguments": null,
                        "start": 489,
                        "end": 490
                      },
                      "start": 487,
                      "end": 490
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 486,
                    "end": 491
                  }
                ],
                "start": 476,
                "end": 497
              },
              "declare": false,
              "start": 448,
              "end": 497
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 441,
            "end": 497
          }
        ],
        "start": 435,
        "end": 499
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 425,
      "end": 499
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 510
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 535
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
                      "start": 536,
                      "end": 537
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 546,
                        "end": 552
                      },
                      "typeArguments": null,
                      "start": 546,
                      "end": 552
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 536,
                    "end": 552
                  }
                ],
                "start": 535,
                "end": 553
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 573,
                      "end": 574
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
                          "start": 576,
                          "end": 577
                        },
                        "typeArguments": null,
                        "start": 576,
                        "end": 577
                      },
                      "start": 574,
                      "end": 577
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 573,
                    "end": 578
                  }
                ],
                "start": 554,
                "end": 584
              },
              "declare": false,
              "start": 524,
              "end": 584
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 517,
            "end": 584
          }
        ],
        "start": 511,
        "end": 586
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 501,
      "end": 586
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 598,
        "end": 599
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
              "start": 600,
              "end": 601
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 610,
              "end": 616
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 600,
            "end": 616
          }
        ],
        "start": 599,
        "end": 617
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
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 623
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
                  "start": 625,
                  "end": 626
                },
                "typeArguments": null,
                "start": 625,
                "end": 626
              },
              "start": 623,
              "end": 626
            },
            "accessibility": null,
            "static": false,
            "start": 622,
            "end": 627
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 631
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constraint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 633,
                  "end": 643
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
                        "start": 644,
                        "end": 645
                      },
                      "typeArguments": null,
                      "start": 644,
                      "end": 645
                    }
                  ],
                  "start": 643,
                  "end": 646
                },
                "start": 633,
                "end": 646
              },
              "start": 631,
              "end": 646
            },
            "accessibility": null,
            "static": false,
            "start": 630,
            "end": 647
          }
        ],
        "start": 618,
        "end": 655
      },
      "declare": false,
      "start": 588,
      "end": 655
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 667,
        "end": 668
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
              "start": 669,
              "end": 670
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 669,
            "end": 670
          }
        ],
        "start": 668,
        "end": 671
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 683
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
                  "start": 685,
                  "end": 686
                },
                "typeArguments": null,
                "start": 685,
                "end": 686
              },
              "start": 683,
              "end": 686
            },
            "accessibility": null,
            "static": false,
            "start": 682,
            "end": 687
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
              "start": 690,
              "end": 691
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constraint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 693,
                  "end": 703
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
                        "start": 704,
                        "end": 705
                      },
                      "typeArguments": null,
                      "start": 704,
                      "end": 705
                    }
                  ],
                  "start": 703,
                  "end": 706
                },
                "start": 693,
                "end": 706
              },
              "start": 691,
              "end": 706
            },
            "accessibility": null,
            "static": false,
            "start": 690,
            "end": 707
          }
        ],
        "start": 672,
        "end": 715
      },
      "declare": false,
      "start": 657,
      "end": 715
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 728
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
              "start": 729,
              "end": 730
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 729,
            "end": 730
          }
        ],
        "start": 728,
        "end": 731
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 737
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
                  "start": 739,
                  "end": 740
                },
                "typeArguments": null,
                "start": 739,
                "end": 740
              },
              "start": 737,
              "end": 740
            },
            "accessibility": null,
            "static": false,
            "start": 736,
            "end": 741
          }
        ],
        "start": 732,
        "end": 743
      },
      "declare": false,
      "start": 717,
      "end": 743
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 755,
        "end": 756
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
              "start": 757,
              "end": 758
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 767,
              "end": 773
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 757,
            "end": 773
          }
        ],
        "start": 756,
        "end": 774
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 785,
              "end": 786
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
                  "start": 788,
                  "end": 789
                },
                "typeArguments": null,
                "start": 788,
                "end": 789
              },
              "start": 786,
              "end": 789
            },
            "accessibility": null,
            "static": false,
            "start": 785,
            "end": 790
          }
        ],
        "start": 775,
        "end": 792
      },
      "declare": false,
      "start": 745,
      "end": 792
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 804,
        "end": 814
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
              "start": 815,
              "end": 816
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 825,
              "end": 831
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 815,
            "end": 831
          }
        ],
        "start": 814,
        "end": 832
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 833,
        "end": 835
      },
      "declare": false,
      "start": 794,
      "end": 835
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 835
}
```
