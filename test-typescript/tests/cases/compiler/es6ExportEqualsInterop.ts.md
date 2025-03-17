__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1485,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 112,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 26,
        "value": "interface",
        "raw": "\"interface\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 112,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 33,
            "end": 92,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 47,
              "end": 92,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 57,
                  "end": 67,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 58,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 76,
                  "end": 86,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 79,
                      "end": 85
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
            "type": "TSExportAssignment",
            "start": 97,
            "end": 110,
            "expression": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 114,
      "end": 220,
      "id": {
        "type": "Literal",
        "start": 129,
        "end": 139,
        "value": "variable",
        "raw": "\"variable\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 140,
        "end": 220,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 146,
            "end": 200,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 150,
                "end": 200,
                "id": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 200,
                  "name": "Foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 155,
                      "end": 200,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 165,
                          "end": 175,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 165,
                            "end": 166,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 166,
                            "end": 174,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 168,
                              "end": 174
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 184,
                          "end": 194,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 184,
                            "end": 185,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 185,
                            "end": 193,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 187,
                              "end": 193
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
            "type": "TSExportAssignment",
            "start": 205,
            "end": 218,
            "expression": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 222,
      "end": 402,
      "id": {
        "type": "Literal",
        "start": 237,
        "end": 257,
        "value": "interface-variable",
        "raw": "\"interface-variable\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 258,
        "end": 402,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 264,
            "end": 323,
            "id": {
              "type": "Identifier",
              "start": 274,
              "end": 277,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 278,
              "end": 323,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 288,
                  "end": 298,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 289,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 289,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 291,
                      "end": 297
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 307,
                  "end": 317,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 308,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 308,
                    "end": 316,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 310,
                      "end": 316
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
            "type": "VariableDeclaration",
            "start": 328,
            "end": 382,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 332,
                "end": 382,
                "id": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 382,
                  "name": "Foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 335,
                    "end": 382,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 337,
                      "end": 382,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 347,
                          "end": 357,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 347,
                            "end": 348,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 348,
                            "end": 356,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 350,
                              "end": 356
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 366,
                          "end": 376,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 366,
                            "end": 367,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 367,
                            "end": 375,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 369,
                              "end": 375
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
            "type": "TSExportAssignment",
            "start": 387,
            "end": 400,
            "expression": {
              "type": "Identifier",
              "start": 396,
              "end": 399,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 404,
      "end": 532,
      "id": {
        "type": "Literal",
        "start": 419,
        "end": 427,
        "value": "module",
        "raw": "\"module\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 428,
        "end": 532,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 434,
            "end": 512,
            "id": {
              "type": "Identifier",
              "start": 441,
              "end": 444,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 445,
              "end": 512,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 455,
                  "end": 476,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 462,
                    "end": 476,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 466,
                        "end": 475,
                        "id": {
                          "type": "Identifier",
                          "start": 466,
                          "end": 475,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 467,
                            "end": 475,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 469,
                              "end": 475
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
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 485,
                  "end": 506,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 492,
                    "end": 506,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 496,
                        "end": 505,
                        "id": {
                          "type": "Identifier",
                          "start": 496,
                          "end": 505,
                          "name": "b",
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
            "type": "TSExportAssignment",
            "start": 517,
            "end": 530,
            "expression": {
              "type": "Identifier",
              "start": 526,
              "end": 529,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 534,
      "end": 736,
      "id": {
        "type": "Literal",
        "start": 549,
        "end": 567,
        "value": "interface-module",
        "raw": "\"interface-module\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 568,
        "end": 736,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 574,
            "end": 633,
            "id": {
              "type": "Identifier",
              "start": 584,
              "end": 587,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 588,
              "end": 633,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 598,
                  "end": 608,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 598,
                    "end": 599,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 599,
                    "end": 607,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 601,
                      "end": 607
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 617,
                  "end": 627,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 617,
                    "end": 618,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 618,
                    "end": 626,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 620,
                      "end": 626
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
            "type": "TSModuleDeclaration",
            "start": 638,
            "end": 716,
            "id": {
              "type": "Identifier",
              "start": 645,
              "end": 648,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 649,
              "end": 716,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 659,
                  "end": 680,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 666,
                    "end": 680,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 670,
                        "end": 679,
                        "id": {
                          "type": "Identifier",
                          "start": 670,
                          "end": 679,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 671,
                            "end": 679,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 673,
                              "end": 679
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
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 689,
                  "end": 710,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 696,
                    "end": 710,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 700,
                        "end": 709,
                        "id": {
                          "type": "Identifier",
                          "start": 700,
                          "end": 709,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 701,
                            "end": 709,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 703,
                              "end": 709
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
            "type": "TSExportAssignment",
            "start": 721,
            "end": 734,
            "expression": {
              "type": "Identifier",
              "start": 730,
              "end": 733,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 738,
      "end": 954,
      "id": {
        "type": "Literal",
        "start": 753,
        "end": 770,
        "value": "variable-module",
        "raw": "\"variable-module\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 771,
        "end": 954,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 777,
            "end": 875,
            "id": {
              "type": "Identifier",
              "start": 784,
              "end": 787,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 788,
              "end": 875,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 798,
                  "end": 869,
                  "id": {
                    "type": "Identifier",
                    "start": 808,
                    "end": 811,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 812,
                    "end": 869,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 826,
                        "end": 836,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 826,
                          "end": 827,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 827,
                          "end": 835,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 829,
                            "end": 835
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 849,
                        "end": 859,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 849,
                          "end": 850,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 850,
                          "end": 858,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 852,
                            "end": 858
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "VariableDeclaration",
            "start": 880,
            "end": 934,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 884,
                "end": 934,
                "id": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 934,
                  "name": "Foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 887,
                    "end": 934,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 889,
                      "end": 934,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 899,
                          "end": 909,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 899,
                            "end": 900,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 900,
                            "end": 908,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 902,
                              "end": 908
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 918,
                          "end": 928,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 918,
                            "end": 919,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 919,
                            "end": 927,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 921,
                              "end": 927
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
            "type": "TSExportAssignment",
            "start": 939,
            "end": 952,
            "expression": {
              "type": "Identifier",
              "start": 948,
              "end": 951,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 956,
      "end": 1023,
      "id": {
        "type": "Literal",
        "start": 971,
        "end": 981,
        "value": "function",
        "raw": "\"function\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 982,
        "end": 1023,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 988,
            "end": 1003,
            "id": {
              "type": "Identifier",
              "start": 997,
              "end": 1000,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSExportAssignment",
            "start": 1008,
            "end": 1021,
            "expression": {
              "type": "Identifier",
              "start": 1017,
              "end": 1020,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1025,
      "end": 1182,
      "id": {
        "type": "Literal",
        "start": 1040,
        "end": 1057,
        "value": "function-module",
        "raw": "\"function-module\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1058,
        "end": 1182,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 1064,
            "end": 1079,
            "id": {
              "type": "Identifier",
              "start": 1073,
              "end": 1076,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 1084,
            "end": 1162,
            "id": {
              "type": "Identifier",
              "start": 1091,
              "end": 1094,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 1095,
              "end": 1162,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1105,
                  "end": 1126,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1112,
                    "end": 1126,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1116,
                        "end": 1125,
                        "id": {
                          "type": "Identifier",
                          "start": 1116,
                          "end": 1125,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1117,
                            "end": 1125,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1119,
                              "end": 1125
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
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1135,
                  "end": 1156,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1142,
                    "end": 1156,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1146,
                        "end": 1155,
                        "id": {
                          "type": "Identifier",
                          "start": 1146,
                          "end": 1155,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1147,
                            "end": 1155,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1149,
                              "end": 1155
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
            "type": "TSExportAssignment",
            "start": 1167,
            "end": 1180,
            "expression": {
              "type": "Identifier",
              "start": 1176,
              "end": 1179,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1184,
      "end": 1288,
      "id": {
        "type": "Literal",
        "start": 1199,
        "end": 1206,
        "value": "class",
        "raw": "\"class\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1207,
        "end": 1288,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1213,
            "end": 1268,
            "id": {
              "type": "Identifier",
              "start": 1219,
              "end": 1222,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1223,
              "end": 1268,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1233,
                  "end": 1243,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1233,
                    "end": 1234,
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
                    "start": 1234,
                    "end": 1242,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1236,
                      "end": 1242
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1252,
                  "end": 1262,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1252,
                    "end": 1253,
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
                    "start": 1253,
                    "end": 1261,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1255,
                      "end": 1261
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
            "type": "TSExportAssignment",
            "start": 1273,
            "end": 1286,
            "expression": {
              "type": "Identifier",
              "start": 1282,
              "end": 1285,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1290,
      "end": 1484,
      "id": {
        "type": "Literal",
        "start": 1305,
        "end": 1319,
        "value": "class-module",
        "raw": "\"class-module\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1320,
        "end": 1484,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1326,
            "end": 1381,
            "id": {
              "type": "Identifier",
              "start": 1332,
              "end": 1335,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1336,
              "end": 1381,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1346,
                  "end": 1356,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1346,
                    "end": 1347,
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
                    "start": 1347,
                    "end": 1355,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1349,
                      "end": 1355
                    }
                  },
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1365,
                  "end": 1375,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1365,
                    "end": 1366,
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
                    "start": 1366,
                    "end": 1374,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1368,
                      "end": 1374
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
            "start": 1386,
            "end": 1464,
            "id": {
              "type": "Identifier",
              "start": 1393,
              "end": 1396,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 1397,
              "end": 1464,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1407,
                  "end": 1428,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1414,
                    "end": 1428,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1418,
                        "end": 1427,
                        "id": {
                          "type": "Identifier",
                          "start": 1418,
                          "end": 1427,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1419,
                            "end": 1427,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1421,
                              "end": 1427
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
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1437,
                  "end": 1458,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1444,
                    "end": 1458,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1448,
                        "end": 1457,
                        "id": {
                          "type": "Identifier",
                          "start": 1448,
                          "end": 1457,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1449,
                            "end": 1457,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1451,
                              "end": 1457
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
            "type": "TSExportAssignment",
            "start": 1469,
            "end": 1482,
            "expression": {
              "type": "Identifier",
              "start": 1478,
              "end": 1481,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 2400,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 55,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 64,
        "name": "z1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 67,
        "end": 87,
        "expression": {
          "type": "Literal",
          "start": 75,
          "end": 86,
          "value": "interface",
          "raw": "\"interface\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 89,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "name": "z2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 101,
        "end": 120,
        "expression": {
          "type": "Literal",
          "start": 109,
          "end": 119,
          "value": "variable",
          "raw": "\"variable\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 122,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 131,
        "name": "z3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 134,
        "end": 163,
        "expression": {
          "type": "Literal",
          "start": 142,
          "end": 162,
          "value": "interface-variable",
          "raw": "\"interface-variable\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 165,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 174,
        "name": "z4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 177,
        "end": 194,
        "expression": {
          "type": "Literal",
          "start": 185,
          "end": 193,
          "value": "module",
          "raw": "\"module\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 196,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 205,
        "name": "z5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 208,
        "end": 235,
        "expression": {
          "type": "Literal",
          "start": 216,
          "end": 234,
          "value": "interface-module",
          "raw": "\"interface-module\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 237,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 246,
        "name": "z6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 249,
        "end": 275,
        "expression": {
          "type": "Literal",
          "start": 257,
          "end": 274,
          "value": "variable-module",
          "raw": "\"variable-module\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 277,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "name": "z7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 289,
        "end": 308,
        "expression": {
          "type": "Literal",
          "start": 297,
          "end": 307,
          "value": "function",
          "raw": "\"function\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 310,
      "end": 349,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 319,
        "name": "z8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 322,
        "end": 348,
        "expression": {
          "type": "Literal",
          "start": 330,
          "end": 347,
          "value": "function-module",
          "raw": "\"function-module\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 350,
      "end": 379,
      "id": {
        "type": "Identifier",
        "start": 357,
        "end": 359,
        "name": "z9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 362,
        "end": 378,
        "expression": {
          "type": "Literal",
          "start": 370,
          "end": 377,
          "value": "class",
          "raw": "\"class\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 380,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 389,
        "name": "z0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 392,
        "end": 415,
        "expression": {
          "type": "Literal",
          "start": 400,
          "end": 414,
          "value": "class-module",
          "raw": "\"class-module\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 418,
      "end": 423,
      "expression": {
        "type": "MemberExpression",
        "start": 418,
        "end": 422,
        "object": {
          "type": "Identifier",
          "start": 418,
          "end": 420,
          "name": "z1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 421,
          "end": 422,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 424,
      "end": 429,
      "expression": {
        "type": "MemberExpression",
        "start": 424,
        "end": 428,
        "object": {
          "type": "Identifier",
          "start": 424,
          "end": 426,
          "name": "z2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 427,
          "end": 428,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 430,
      "end": 435,
      "expression": {
        "type": "MemberExpression",
        "start": 430,
        "end": 434,
        "object": {
          "type": "Identifier",
          "start": 430,
          "end": 432,
          "name": "z3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 433,
          "end": 434,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 436,
      "end": 441,
      "expression": {
        "type": "MemberExpression",
        "start": 436,
        "end": 440,
        "object": {
          "type": "Identifier",
          "start": 436,
          "end": 438,
          "name": "z4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 439,
          "end": 440,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 447,
      "expression": {
        "type": "MemberExpression",
        "start": 442,
        "end": 446,
        "object": {
          "type": "Identifier",
          "start": 442,
          "end": 444,
          "name": "z5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 445,
          "end": 446,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 448,
      "end": 453,
      "expression": {
        "type": "MemberExpression",
        "start": 448,
        "end": 452,
        "object": {
          "type": "Identifier",
          "start": 448,
          "end": 450,
          "name": "z6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 451,
          "end": 452,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 454,
      "end": 459,
      "expression": {
        "type": "MemberExpression",
        "start": 454,
        "end": 458,
        "object": {
          "type": "Identifier",
          "start": 454,
          "end": 456,
          "name": "z7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 457,
          "end": 458,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 465,
      "expression": {
        "type": "MemberExpression",
        "start": 460,
        "end": 464,
        "object": {
          "type": "Identifier",
          "start": 460,
          "end": 462,
          "name": "z8",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 463,
          "end": 464,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 466,
      "end": 471,
      "expression": {
        "type": "MemberExpression",
        "start": 466,
        "end": 470,
        "object": {
          "type": "Identifier",
          "start": 466,
          "end": 468,
          "name": "z9",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 469,
          "end": 470,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 472,
      "end": 477,
      "expression": {
        "type": "MemberExpression",
        "start": 472,
        "end": 476,
        "object": {
          "type": "Identifier",
          "start": 472,
          "end": 474,
          "name": "z0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 475,
          "end": 476,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 497,
      "end": 524,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 504,
          "end": 506,
          "local": {
            "type": "Identifier",
            "start": 504,
            "end": 506,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 512,
        "end": 523,
        "value": "interface",
        "raw": "\"interface\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 525,
      "end": 551,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 532,
          "end": 534,
          "local": {
            "type": "Identifier",
            "start": 532,
            "end": 534,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 540,
        "end": 550,
        "value": "variable",
        "raw": "\"variable\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 552,
      "end": 588,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 559,
          "end": 561,
          "local": {
            "type": "Identifier",
            "start": 559,
            "end": 561,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 567,
        "end": 587,
        "value": "interface-variable",
        "raw": "\"interface-variable\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 589,
      "end": 613,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 596,
          "end": 598,
          "local": {
            "type": "Identifier",
            "start": 596,
            "end": 598,
            "name": "x4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 604,
        "end": 612,
        "value": "module",
        "raw": "\"module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 614,
      "end": 648,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 621,
          "end": 623,
          "local": {
            "type": "Identifier",
            "start": 621,
            "end": 623,
            "name": "x5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 629,
        "end": 647,
        "value": "interface-module",
        "raw": "\"interface-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 649,
      "end": 682,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 656,
          "end": 658,
          "local": {
            "type": "Identifier",
            "start": 656,
            "end": 658,
            "name": "x6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 664,
        "end": 681,
        "value": "variable-module",
        "raw": "\"variable-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 683,
      "end": 709,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 690,
          "end": 692,
          "local": {
            "type": "Identifier",
            "start": 690,
            "end": 692,
            "name": "x7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 698,
        "end": 708,
        "value": "function",
        "raw": "\"function\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 710,
      "end": 743,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 717,
          "end": 719,
          "local": {
            "type": "Identifier",
            "start": 717,
            "end": 719,
            "name": "x8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 725,
        "end": 742,
        "value": "function-module",
        "raw": "\"function-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 744,
      "end": 767,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 751,
          "end": 753,
          "local": {
            "type": "Identifier",
            "start": 751,
            "end": 753,
            "name": "x9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 759,
        "end": 766,
        "value": "class",
        "raw": "\"class\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 768,
      "end": 798,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 775,
          "end": 777,
          "local": {
            "type": "Identifier",
            "start": 775,
            "end": 777,
            "name": "x0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 783,
        "end": 797,
        "value": "class-module",
        "raw": "\"class-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 820,
      "end": 852,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 827,
          "end": 834,
          "local": {
            "type": "Identifier",
            "start": 832,
            "end": 834,
            "name": "y1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 840,
        "end": 851,
        "value": "interface",
        "raw": "\"interface\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 853,
      "end": 884,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 860,
          "end": 867,
          "local": {
            "type": "Identifier",
            "start": 865,
            "end": 867,
            "name": "y2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 873,
        "end": 883,
        "value": "variable",
        "raw": "\"variable\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 885,
      "end": 926,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 892,
          "end": 899,
          "local": {
            "type": "Identifier",
            "start": 897,
            "end": 899,
            "name": "y3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 905,
        "end": 925,
        "value": "interface-variable",
        "raw": "\"interface-variable\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 927,
      "end": 956,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 934,
          "end": 941,
          "local": {
            "type": "Identifier",
            "start": 939,
            "end": 941,
            "name": "y4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 947,
        "end": 955,
        "value": "module",
        "raw": "\"module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 957,
      "end": 996,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 964,
          "end": 971,
          "local": {
            "type": "Identifier",
            "start": 969,
            "end": 971,
            "name": "y5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 977,
        "end": 995,
        "value": "interface-module",
        "raw": "\"interface-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 997,
      "end": 1035,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 1004,
          "end": 1011,
          "local": {
            "type": "Identifier",
            "start": 1009,
            "end": 1011,
            "name": "y6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1017,
        "end": 1034,
        "value": "variable-module",
        "raw": "\"variable-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1036,
      "end": 1067,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 1043,
          "end": 1050,
          "local": {
            "type": "Identifier",
            "start": 1048,
            "end": 1050,
            "name": "y7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1056,
        "end": 1066,
        "value": "function",
        "raw": "\"function\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1068,
      "end": 1106,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 1075,
          "end": 1082,
          "local": {
            "type": "Identifier",
            "start": 1080,
            "end": 1082,
            "name": "y8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1088,
        "end": 1105,
        "value": "function-module",
        "raw": "\"function-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1107,
      "end": 1135,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 1114,
          "end": 1121,
          "local": {
            "type": "Identifier",
            "start": 1119,
            "end": 1121,
            "name": "y9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1127,
        "end": 1134,
        "value": "class",
        "raw": "\"class\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1136,
      "end": 1171,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 1143,
          "end": 1150,
          "local": {
            "type": "Identifier",
            "start": 1148,
            "end": 1150,
            "name": "y0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1156,
        "end": 1170,
        "value": "class-module",
        "raw": "\"class-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 1173,
      "end": 1178,
      "expression": {
        "type": "MemberExpression",
        "start": 1173,
        "end": 1177,
        "object": {
          "type": "Identifier",
          "start": 1173,
          "end": 1175,
          "name": "y1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1176,
          "end": 1177,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1179,
      "end": 1184,
      "expression": {
        "type": "MemberExpression",
        "start": 1179,
        "end": 1183,
        "object": {
          "type": "Identifier",
          "start": 1179,
          "end": 1181,
          "name": "y2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1182,
          "end": 1183,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1185,
      "end": 1190,
      "expression": {
        "type": "MemberExpression",
        "start": 1185,
        "end": 1189,
        "object": {
          "type": "Identifier",
          "start": 1185,
          "end": 1187,
          "name": "y3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1188,
          "end": 1189,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1191,
      "end": 1196,
      "expression": {
        "type": "MemberExpression",
        "start": 1191,
        "end": 1195,
        "object": {
          "type": "Identifier",
          "start": 1191,
          "end": 1193,
          "name": "y4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1194,
          "end": 1195,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1197,
      "end": 1202,
      "expression": {
        "type": "MemberExpression",
        "start": 1197,
        "end": 1201,
        "object": {
          "type": "Identifier",
          "start": 1197,
          "end": 1199,
          "name": "y5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1200,
          "end": 1201,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1203,
      "end": 1208,
      "expression": {
        "type": "MemberExpression",
        "start": 1203,
        "end": 1207,
        "object": {
          "type": "Identifier",
          "start": 1203,
          "end": 1205,
          "name": "y6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1206,
          "end": 1207,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1209,
      "end": 1214,
      "expression": {
        "type": "MemberExpression",
        "start": 1209,
        "end": 1213,
        "object": {
          "type": "Identifier",
          "start": 1209,
          "end": 1211,
          "name": "y7",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1212,
          "end": 1213,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1215,
      "end": 1220,
      "expression": {
        "type": "MemberExpression",
        "start": 1215,
        "end": 1219,
        "object": {
          "type": "Identifier",
          "start": 1215,
          "end": 1217,
          "name": "y8",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1218,
          "end": 1219,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1221,
      "end": 1226,
      "expression": {
        "type": "MemberExpression",
        "start": 1221,
        "end": 1225,
        "object": {
          "type": "Identifier",
          "start": 1221,
          "end": 1223,
          "name": "y9",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1224,
          "end": 1225,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1227,
      "end": 1232,
      "expression": {
        "type": "MemberExpression",
        "start": 1227,
        "end": 1231,
        "object": {
          "type": "Identifier",
          "start": 1227,
          "end": 1229,
          "name": "y0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1230,
          "end": 1231,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 1250,
      "end": 1286,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1259,
          "end": 1266,
          "imported": {
            "type": "Identifier",
            "start": 1259,
            "end": 1260,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 1264,
            "end": 1266,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1274,
        "end": 1285,
        "value": "interface",
        "raw": "\"interface\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1287,
      "end": 1322,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1296,
          "end": 1303,
          "imported": {
            "type": "Identifier",
            "start": 1296,
            "end": 1297,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 1301,
            "end": 1303,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1311,
        "end": 1321,
        "value": "variable",
        "raw": "\"variable\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1323,
      "end": 1368,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1332,
          "end": 1339,
          "imported": {
            "type": "Identifier",
            "start": 1332,
            "end": 1333,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 1337,
            "end": 1339,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1347,
        "end": 1367,
        "value": "interface-variable",
        "raw": "\"interface-variable\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1369,
      "end": 1402,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1378,
          "end": 1385,
          "imported": {
            "type": "Identifier",
            "start": 1378,
            "end": 1379,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 1383,
            "end": 1385,
            "name": "a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1393,
        "end": 1401,
        "value": "module",
        "raw": "\"module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1403,
      "end": 1446,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1412,
          "end": 1419,
          "imported": {
            "type": "Identifier",
            "start": 1412,
            "end": 1413,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 1417,
            "end": 1419,
            "name": "a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1427,
        "end": 1445,
        "value": "interface-module",
        "raw": "\"interface-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1447,
      "end": 1489,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1456,
          "end": 1463,
          "imported": {
            "type": "Identifier",
            "start": 1456,
            "end": 1457,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 1461,
            "end": 1463,
            "name": "a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1471,
        "end": 1488,
        "value": "variable-module",
        "raw": "\"variable-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1490,
      "end": 1525,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1499,
          "end": 1506,
          "imported": {
            "type": "Identifier",
            "start": 1499,
            "end": 1500,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 1504,
            "end": 1506,
            "name": "a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1514,
        "end": 1524,
        "value": "function",
        "raw": "\"function\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1526,
      "end": 1568,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1535,
          "end": 1542,
          "imported": {
            "type": "Identifier",
            "start": 1535,
            "end": 1536,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 1540,
            "end": 1542,
            "name": "a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1550,
        "end": 1567,
        "value": "function-module",
        "raw": "\"function-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1569,
      "end": 1601,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1578,
          "end": 1585,
          "imported": {
            "type": "Identifier",
            "start": 1578,
            "end": 1579,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 1583,
            "end": 1585,
            "name": "a9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1593,
        "end": 1600,
        "value": "class",
        "raw": "\"class\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 1602,
      "end": 1641,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1611,
          "end": 1618,
          "imported": {
            "type": "Identifier",
            "start": 1611,
            "end": 1612,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 1616,
            "end": 1618,
            "name": "a0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1626,
        "end": 1640,
        "value": "class-module",
        "raw": "\"class-module\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 1643,
      "end": 1646,
      "expression": {
        "type": "Identifier",
        "start": 1643,
        "end": 1645,
        "name": "a1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1647,
      "end": 1650,
      "expression": {
        "type": "Identifier",
        "start": 1647,
        "end": 1649,
        "name": "a2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1651,
      "end": 1654,
      "expression": {
        "type": "Identifier",
        "start": 1651,
        "end": 1653,
        "name": "a3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1655,
      "end": 1658,
      "expression": {
        "type": "Identifier",
        "start": 1655,
        "end": 1657,
        "name": "a4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1659,
      "end": 1662,
      "expression": {
        "type": "Identifier",
        "start": 1659,
        "end": 1661,
        "name": "a5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1663,
      "end": 1666,
      "expression": {
        "type": "Identifier",
        "start": 1663,
        "end": 1665,
        "name": "a6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1667,
      "end": 1670,
      "expression": {
        "type": "Identifier",
        "start": 1667,
        "end": 1669,
        "name": "a7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1671,
      "end": 1674,
      "expression": {
        "type": "Identifier",
        "start": 1671,
        "end": 1673,
        "name": "a8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1675,
      "end": 1678,
      "expression": {
        "type": "Identifier",
        "start": 1675,
        "end": 1677,
        "name": "a9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1679,
      "end": 1682,
      "expression": {
        "type": "Identifier",
        "start": 1679,
        "end": 1681,
        "name": "a0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1700,
      "end": 1736,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1709,
          "end": 1716,
          "local": {
            "type": "Identifier",
            "start": 1709,
            "end": 1710,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 1714,
            "end": 1716,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1724,
        "end": 1735,
        "value": "interface",
        "raw": "\"interface\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1737,
      "end": 1772,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1746,
          "end": 1753,
          "local": {
            "type": "Identifier",
            "start": 1746,
            "end": 1747,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 1751,
            "end": 1753,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1761,
        "end": 1771,
        "value": "variable",
        "raw": "\"variable\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1773,
      "end": 1818,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1782,
          "end": 1789,
          "local": {
            "type": "Identifier",
            "start": 1782,
            "end": 1783,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 1787,
            "end": 1789,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1797,
        "end": 1817,
        "value": "interface-variable",
        "raw": "\"interface-variable\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1819,
      "end": 1852,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1828,
          "end": 1835,
          "local": {
            "type": "Identifier",
            "start": 1828,
            "end": 1829,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 1833,
            "end": 1835,
            "name": "a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1843,
        "end": 1851,
        "value": "module",
        "raw": "\"module\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1853,
      "end": 1896,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1862,
          "end": 1869,
          "local": {
            "type": "Identifier",
            "start": 1862,
            "end": 1863,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 1867,
            "end": 1869,
            "name": "a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1877,
        "end": 1895,
        "value": "interface-module",
        "raw": "\"interface-module\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1897,
      "end": 1939,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1906,
          "end": 1913,
          "local": {
            "type": "Identifier",
            "start": 1906,
            "end": 1907,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 1911,
            "end": 1913,
            "name": "a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1921,
        "end": 1938,
        "value": "variable-module",
        "raw": "\"variable-module\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1940,
      "end": 1975,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1949,
          "end": 1956,
          "local": {
            "type": "Identifier",
            "start": 1949,
            "end": 1950,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 1954,
            "end": 1956,
            "name": "a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 1964,
        "end": 1974,
        "value": "function",
        "raw": "\"function\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1976,
      "end": 2018,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1985,
          "end": 1992,
          "local": {
            "type": "Identifier",
            "start": 1985,
            "end": 1986,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 1990,
            "end": 1992,
            "name": "a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 2000,
        "end": 2017,
        "value": "function-module",
        "raw": "\"function-module\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2019,
      "end": 2051,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 2028,
          "end": 2035,
          "local": {
            "type": "Identifier",
            "start": 2028,
            "end": 2029,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 2033,
            "end": 2035,
            "name": "a9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 2043,
        "end": 2050,
        "value": "class",
        "raw": "\"class\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2052,
      "end": 2091,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 2061,
          "end": 2068,
          "local": {
            "type": "Identifier",
            "start": 2061,
            "end": 2062,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 2066,
            "end": 2068,
            "name": "a0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 2076,
        "end": 2090,
        "value": "class-module",
        "raw": "\"class-module\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2108,
      "end": 2134,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 2122,
        "end": 2133,
        "value": "interface",
        "raw": "\"interface\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2135,
      "end": 2160,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 2149,
        "end": 2159,
        "value": "variable",
        "raw": "\"variable\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2161,
      "end": 2196,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 2175,
        "end": 2195,
        "value": "interface-variable",
        "raw": "\"interface-variable\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2197,
      "end": 2220,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 2211,
        "end": 2219,
        "value": "module",
        "raw": "\"module\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2221,
      "end": 2254,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 2235,
        "end": 2253,
        "value": "interface-module",
        "raw": "\"interface-module\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2255,
      "end": 2287,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 2269,
        "end": 2286,
        "value": "variable-module",
        "raw": "\"variable-module\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2288,
      "end": 2313,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 2302,
        "end": 2312,
        "value": "function",
        "raw": "\"function\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2314,
      "end": 2346,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 2328,
        "end": 2345,
        "value": "function-module",
        "raw": "\"function-module\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2347,
      "end": 2369,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 2361,
        "end": 2368,
        "value": "class",
        "raw": "\"class\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2370,
      "end": 2399,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 2384,
        "end": 2398,
        "value": "class-module",
        "raw": "\"class-module\""
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
