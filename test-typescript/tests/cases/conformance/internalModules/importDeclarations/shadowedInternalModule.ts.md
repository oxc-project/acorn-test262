__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 772,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 62,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 71,
        "end": 185,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 77,
            "end": 110,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 84,
              "end": 110,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 88,
                  "end": 110,
                  "id": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 93,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 96,
                    "end": 110,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 98,
                        "end": 102,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 101,
                          "end": 102,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 104,
                        "end": 108,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 105,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 107,
                          "end": 108,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 115,
            "end": 183,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 122,
              "end": 183,
              "id": {
                "type": "Identifier",
                "start": 132,
                "end": 137,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 138,
                "end": 183,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 148,
                    "end": 158,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 151,
                        "end": 157
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 167,
                    "end": 177,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 168,
                      "end": 176,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 170,
                        "end": 176
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 188,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 196,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 197,
        "end": 250,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 203,
            "end": 226,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 207,
                "end": 225,
                "id": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 211,
                  "end": 225,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 213,
                      "end": 217,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 214,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 216,
                        "end": 217,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 219,
                      "end": 223,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 222,
                        "end": 223,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 231,
            "end": 248,
            "id": {
              "type": "Identifier",
              "start": 238,
              "end": 243,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 252,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 260,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 261,
        "end": 429,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 267,
            "end": 377,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 274,
              "end": 377,
              "id": {
                "type": "Identifier",
                "start": 281,
                "end": 282,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 283,
                "end": 377,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 293,
                    "end": 371,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 300,
                      "end": 371,
                      "id": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 315,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 315,
                        "end": 371,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 329,
                            "end": 339,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 329,
                              "end": 330,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 330,
                              "end": 338,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 332,
                                "end": 338
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 352,
                            "end": 361,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 352,
                              "end": 353,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 353,
                              "end": 361,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 355,
                                "end": 361
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "type"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 383,
            "end": 427,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 390,
              "end": 427,
              "id": {
                "type": "Identifier",
                "start": 396,
                "end": 397,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 398,
                "end": 427,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 408,
                    "end": 421,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 412,
                      "name": "name",
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
                      "start": 412,
                      "end": 420,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 414,
                        "end": 420
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
      "type": "TSModuleDeclaration",
      "start": 431,
      "end": 480,
      "id": {
        "type": "Identifier",
        "start": 438,
        "end": 439,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 440,
        "end": 480,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 446,
            "end": 461,
            "id": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
              "name": "Y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 457,
              "end": 460,
              "left": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 459,
                "end": 460,
                "name": "Y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 467,
            "end": 478,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 471,
                "end": 477,
                "id": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 472,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 475,
                  "end": 477,
                  "value": 12,
                  "raw": "12"
                },
                "definite": false
              }
            ],
            "kind": "var",
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
      "start": 486,
      "end": 524,
      "id": {
        "type": "Identifier",
        "start": 493,
        "end": 494,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 495,
        "end": 524,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 499,
            "end": 522,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 506,
              "end": 522,
              "id": {
                "type": "Identifier",
                "start": 511,
                "end": 512,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 515,
                "end": 521
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 526,
      "end": 584,
      "id": {
        "type": "Identifier",
        "start": 533,
        "end": 534,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 535,
        "end": 584,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 539,
            "end": 561,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 546,
              "end": 561,
              "id": {
                "type": "Identifier",
                "start": 553,
                "end": 554,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 557,
                "end": 560,
                "left": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 558,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 559,
                  "end": 560,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 564,
            "end": 582,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 571,
              "end": 582,
              "id": {
                "type": "Identifier",
                "start": 578,
                "end": 579,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 580,
                "end": 582,
                "body": []
              },
              "kind": "module",
              "declare": false,
              "global": false
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
      "type": "TSModuleDeclaration",
      "start": 586,
      "end": 618,
      "id": {
        "type": "Identifier",
        "start": 593,
        "end": 594,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 595,
        "end": 618,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 599,
            "end": 616,
            "id": {
              "type": "Identifier",
              "start": 606,
              "end": 609,
              "name": "any",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 612,
              "end": 615,
              "left": {
                "type": "Identifier",
                "start": 612,
                "end": 613,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 614,
                "end": 615,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 624,
      "end": 659,
      "id": {
        "type": "Identifier",
        "start": 631,
        "end": 632,
        "name": "q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 633,
        "end": 659,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 637,
            "end": 657,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 644,
              "end": 657,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 650,
                  "end": 656,
                  "id": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 651,
                    "name": "Q",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 654,
                    "end": 656,
                    "properties": []
                  },
                  "definite": false
                }
              ],
              "kind": "const",
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
      "type": "TSModuleDeclaration",
      "start": 661,
      "end": 724,
      "id": {
        "type": "Identifier",
        "start": 668,
        "end": 669,
        "name": "r",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 670,
        "end": 724,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 674,
            "end": 696,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 681,
              "end": 696,
              "id": {
                "type": "Identifier",
                "start": 688,
                "end": 689,
                "name": "Q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 692,
                "end": 695,
                "left": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 693,
                  "name": "q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 694,
                  "end": 695,
                  "name": "Q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 699,
            "end": 722,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 706,
              "end": 722,
              "id": {
                "type": "Identifier",
                "start": 711,
                "end": 712,
                "name": "Q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 715,
                "end": 721
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 726,
      "end": 771,
      "id": {
        "type": "Identifier",
        "start": 733,
        "end": 734,
        "name": "s",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 735,
        "end": 771,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 739,
            "end": 754,
            "id": {
              "type": "Identifier",
              "start": 746,
              "end": 747,
              "name": "Q",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 750,
              "end": 753,
              "left": {
                "type": "Identifier",
                "start": 750,
                "end": 751,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 752,
                "end": 753,
                "name": "Q",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 757,
            "end": 769,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 763,
                "end": 768,
                "id": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 764,
                  "name": "Q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 767,
                  "end": 768,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "const",
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
