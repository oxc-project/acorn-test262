modules.d.ts
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 112,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 33,
            "end": 92,
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
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 58,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 60,
                      "end": 66
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 76,
                  "end": 86,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 79,
                      "end": 85
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          },
          {
            "type": "TSExportAssignment",
            "start": 97,
            "end": 110,
            "expression": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 26,
        "raw": "\"interface\"",
        "value": "interface"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 114,
      "end": 220,
      "kind": "module",
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 200,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
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
                          "key": {
                            "type": "Identifier",
                            "start": 165,
                            "end": 166,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 166,
                            "end": 174,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 168,
                              "end": 174
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 184,
                          "end": 194,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 184,
                            "end": 185,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 185,
                            "end": 193,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 187,
                              "end": 193
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSExportAssignment",
            "start": 205,
            "end": 218,
            "expression": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 129,
        "end": 139,
        "raw": "\"variable\"",
        "value": "variable"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 222,
      "end": 402,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 258,
        "end": 402,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 264,
            "end": 323,
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
                  "key": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 289,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 289,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 291,
                      "end": 297
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 307,
                  "end": 317,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 308,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 308,
                    "end": 316,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 310,
                      "end": 316
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 274,
              "end": 277,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 382,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
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
                          "key": {
                            "type": "Identifier",
                            "start": 347,
                            "end": 348,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 348,
                            "end": 356,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 350,
                              "end": 356
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 366,
                          "end": 376,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 366,
                            "end": 367,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 367,
                            "end": 375,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 369,
                              "end": 375
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSExportAssignment",
            "start": 387,
            "end": 400,
            "expression": {
              "type": "Identifier",
              "start": 396,
              "end": 399,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 237,
        "end": 257,
        "raw": "\"interface-variable\"",
        "value": "interface-variable"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 404,
      "end": 532,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 428,
        "end": 532,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 434,
            "end": 512,
            "body": {
              "type": "TSModuleBlock",
              "start": 445,
              "end": 512,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 455,
                  "end": 476,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 462,
                    "end": 476,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 466,
                        "end": 475,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 466,
                          "end": 475,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 467,
                            "end": 475,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 469,
                              "end": 475
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 485,
                  "end": 506,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 492,
                    "end": 506,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 496,
                        "end": 505,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 496,
                          "end": 505,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 497,
                            "end": 505,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 499,
                              "end": 505
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 441,
              "end": 444,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "TSExportAssignment",
            "start": 517,
            "end": 530,
            "expression": {
              "type": "Identifier",
              "start": 526,
              "end": 529,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 419,
        "end": 427,
        "raw": "\"module\"",
        "value": "module"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 534,
      "end": 736,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 568,
        "end": 736,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 574,
            "end": 633,
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
                  "key": {
                    "type": "Identifier",
                    "start": 598,
                    "end": 599,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 599,
                    "end": 607,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 601,
                      "end": 607
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 617,
                  "end": 627,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 617,
                    "end": 618,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 618,
                    "end": 626,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 620,
                      "end": 626
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 584,
              "end": 587,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 638,
            "end": 716,
            "body": {
              "type": "TSModuleBlock",
              "start": 649,
              "end": 716,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 659,
                  "end": 680,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 666,
                    "end": 680,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 670,
                        "end": 679,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 670,
                          "end": 679,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 671,
                            "end": 679,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 673,
                              "end": 679
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 689,
                  "end": 710,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 696,
                    "end": 710,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 700,
                        "end": 709,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 700,
                          "end": 709,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 701,
                            "end": 709,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 703,
                              "end": 709
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 645,
              "end": 648,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "TSExportAssignment",
            "start": 721,
            "end": 734,
            "expression": {
              "type": "Identifier",
              "start": 730,
              "end": 733,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 549,
        "end": 567,
        "raw": "\"interface-module\"",
        "value": "interface-module"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 738,
      "end": 954,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 771,
        "end": 954,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 777,
            "end": 875,
            "body": {
              "type": "TSModuleBlock",
              "start": 788,
              "end": 875,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 798,
                  "end": 869,
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
                        "key": {
                          "type": "Identifier",
                          "start": 826,
                          "end": 827,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 827,
                          "end": 835,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 829,
                            "end": 835
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 849,
                        "end": 859,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 849,
                          "end": 850,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 850,
                          "end": 858,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 852,
                            "end": 858
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 808,
                    "end": 811,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 784,
              "end": 787,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "kind": "module"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 934,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
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
                          "key": {
                            "type": "Identifier",
                            "start": 899,
                            "end": 900,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 900,
                            "end": 908,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 902,
                              "end": 908
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 918,
                          "end": 928,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 918,
                            "end": 919,
                            "decorators": [],
                            "name": "b",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 919,
                            "end": 927,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 921,
                              "end": 927
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSExportAssignment",
            "start": 939,
            "end": 952,
            "expression": {
              "type": "Identifier",
              "start": 948,
              "end": 951,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 753,
        "end": 770,
        "raw": "\"variable-module\"",
        "value": "variable-module"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 956,
      "end": 1023,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 982,
        "end": 1023,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 988,
            "end": 1003,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 997,
              "end": 1000,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": []
          },
          {
            "type": "TSExportAssignment",
            "start": 1008,
            "end": 1021,
            "expression": {
              "type": "Identifier",
              "start": 1017,
              "end": 1020,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 971,
        "end": 981,
        "raw": "\"function\"",
        "value": "function"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1025,
      "end": 1182,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 1058,
        "end": 1182,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 1064,
            "end": 1079,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 1073,
              "end": 1076,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 1084,
            "end": 1162,
            "body": {
              "type": "TSModuleBlock",
              "start": 1095,
              "end": 1162,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1105,
                  "end": 1126,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1112,
                    "end": 1126,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1116,
                        "end": 1125,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1116,
                          "end": 1125,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1117,
                            "end": 1125,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1119,
                              "end": 1125
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1135,
                  "end": 1156,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1142,
                    "end": 1156,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1146,
                        "end": 1155,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1146,
                          "end": 1155,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1147,
                            "end": 1155,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1149,
                              "end": 1155
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 1091,
              "end": 1094,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "TSExportAssignment",
            "start": 1167,
            "end": 1180,
            "expression": {
              "type": "Identifier",
              "start": 1176,
              "end": 1179,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 1040,
        "end": 1057,
        "raw": "\"function-module\"",
        "value": "function-module"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1184,
      "end": 1288,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 1207,
        "end": 1288,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1213,
            "end": 1268,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1223,
              "end": 1268,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1233,
                  "end": 1243,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1233,
                    "end": 1234,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1252,
                  "end": 1262,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1252,
                    "end": 1253,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1219,
              "end": 1222,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSExportAssignment",
            "start": 1273,
            "end": 1286,
            "expression": {
              "type": "Identifier",
              "start": 1282,
              "end": 1285,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 1199,
        "end": 1206,
        "raw": "\"class\"",
        "value": "class"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1290,
      "end": 1484,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 1320,
        "end": 1484,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1326,
            "end": 1381,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1336,
              "end": 1381,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1346,
                  "end": 1356,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1346,
                    "end": 1347,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 1365,
                  "end": 1375,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1365,
                    "end": 1366,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
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
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1332,
              "end": 1335,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 1386,
            "end": 1464,
            "body": {
              "type": "TSModuleBlock",
              "start": 1397,
              "end": 1464,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1407,
                  "end": 1428,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1414,
                    "end": 1428,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1418,
                        "end": 1427,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1418,
                          "end": 1427,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1419,
                            "end": 1427,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1421,
                              "end": 1427
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                },
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1437,
                  "end": 1458,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1444,
                    "end": 1458,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1448,
                        "end": 1457,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1448,
                          "end": 1457,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1449,
                            "end": 1457,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1451,
                              "end": 1457
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 1393,
              "end": 1396,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "TSExportAssignment",
            "start": 1469,
            "end": 1482,
            "expression": {
              "type": "Identifier",
              "start": 1478,
              "end": 1481,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 1305,
        "end": 1319,
        "raw": "\"class-module\"",
        "value": "class-module"
      }
    }
  ],
  "sourceType": "module"
}
```
main.ts
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
        "decorators": [],
        "name": "z1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 67,
        "end": 87,
        "expression": {
          "type": "Literal",
          "start": 75,
          "end": 86,
          "raw": "\"interface\"",
          "value": "interface"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 89,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "decorators": [],
        "name": "z2",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 101,
        "end": 120,
        "expression": {
          "type": "Literal",
          "start": 109,
          "end": 119,
          "raw": "\"variable\"",
          "value": "variable"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 122,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 131,
        "decorators": [],
        "name": "z3",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 134,
        "end": 163,
        "expression": {
          "type": "Literal",
          "start": 142,
          "end": 162,
          "raw": "\"interface-variable\"",
          "value": "interface-variable"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 165,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 174,
        "decorators": [],
        "name": "z4",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 177,
        "end": 194,
        "expression": {
          "type": "Literal",
          "start": 185,
          "end": 193,
          "raw": "\"module\"",
          "value": "module"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 196,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 205,
        "decorators": [],
        "name": "z5",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 208,
        "end": 235,
        "expression": {
          "type": "Literal",
          "start": 216,
          "end": 234,
          "raw": "\"interface-module\"",
          "value": "interface-module"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 237,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 246,
        "decorators": [],
        "name": "z6",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 249,
        "end": 275,
        "expression": {
          "type": "Literal",
          "start": 257,
          "end": 274,
          "raw": "\"variable-module\"",
          "value": "variable-module"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 277,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "decorators": [],
        "name": "z7",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 289,
        "end": 308,
        "expression": {
          "type": "Literal",
          "start": 297,
          "end": 307,
          "raw": "\"function\"",
          "value": "function"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 310,
      "end": 349,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 319,
        "decorators": [],
        "name": "z8",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 322,
        "end": 348,
        "expression": {
          "type": "Literal",
          "start": 330,
          "end": 347,
          "raw": "\"function-module\"",
          "value": "function-module"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 350,
      "end": 379,
      "id": {
        "type": "Identifier",
        "start": 357,
        "end": 359,
        "decorators": [],
        "name": "z9",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 362,
        "end": 378,
        "expression": {
          "type": "Literal",
          "start": 370,
          "end": 377,
          "raw": "\"class\"",
          "value": "class"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 380,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 389,
        "decorators": [],
        "name": "z0",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 392,
        "end": 415,
        "expression": {
          "type": "Literal",
          "start": 400,
          "end": 414,
          "raw": "\"class-module\"",
          "value": "class-module"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 418,
      "end": 423,
      "expression": {
        "type": "MemberExpression",
        "start": 418,
        "end": 422,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 418,
          "end": 420,
          "decorators": [],
          "name": "z1",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 421,
          "end": 422,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 424,
      "end": 429,
      "expression": {
        "type": "MemberExpression",
        "start": 424,
        "end": 428,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 424,
          "end": 426,
          "decorators": [],
          "name": "z2",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 427,
          "end": 428,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 430,
      "end": 435,
      "expression": {
        "type": "MemberExpression",
        "start": 430,
        "end": 434,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 430,
          "end": 432,
          "decorators": [],
          "name": "z3",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 433,
          "end": 434,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 436,
      "end": 441,
      "expression": {
        "type": "MemberExpression",
        "start": 436,
        "end": 440,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 436,
          "end": 438,
          "decorators": [],
          "name": "z4",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 439,
          "end": 440,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 447,
      "expression": {
        "type": "MemberExpression",
        "start": 442,
        "end": 446,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 442,
          "end": 444,
          "decorators": [],
          "name": "z5",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 445,
          "end": 446,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 448,
      "end": 453,
      "expression": {
        "type": "MemberExpression",
        "start": 448,
        "end": 452,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 448,
          "end": 450,
          "decorators": [],
          "name": "z6",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 451,
          "end": 452,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 454,
      "end": 459,
      "expression": {
        "type": "MemberExpression",
        "start": 454,
        "end": 458,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 454,
          "end": 456,
          "decorators": [],
          "name": "z7",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 457,
          "end": 458,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 465,
      "expression": {
        "type": "MemberExpression",
        "start": 460,
        "end": 464,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 460,
          "end": 462,
          "decorators": [],
          "name": "z8",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 463,
          "end": 464,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 466,
      "end": 471,
      "expression": {
        "type": "MemberExpression",
        "start": 466,
        "end": 470,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 466,
          "end": 468,
          "decorators": [],
          "name": "z9",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 469,
          "end": 470,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 472,
      "end": 477,
      "expression": {
        "type": "MemberExpression",
        "start": 472,
        "end": 476,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 472,
          "end": 474,
          "decorators": [],
          "name": "z0",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 475,
          "end": 476,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 497,
      "end": 524,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 512,
        "end": 523,
        "raw": "\"interface\"",
        "value": "interface"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 504,
          "end": 506,
          "local": {
            "type": "Identifier",
            "start": 504,
            "end": 506,
            "decorators": [],
            "name": "x1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 525,
      "end": 551,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 540,
        "end": 550,
        "raw": "\"variable\"",
        "value": "variable"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 532,
          "end": 534,
          "local": {
            "type": "Identifier",
            "start": 532,
            "end": 534,
            "decorators": [],
            "name": "x2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 552,
      "end": 588,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 567,
        "end": 587,
        "raw": "\"interface-variable\"",
        "value": "interface-variable"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 559,
          "end": 561,
          "local": {
            "type": "Identifier",
            "start": 559,
            "end": 561,
            "decorators": [],
            "name": "x3",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 589,
      "end": 613,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 604,
        "end": 612,
        "raw": "\"module\"",
        "value": "module"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 596,
          "end": 598,
          "local": {
            "type": "Identifier",
            "start": 596,
            "end": 598,
            "decorators": [],
            "name": "x4",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 614,
      "end": 648,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 629,
        "end": 647,
        "raw": "\"interface-module\"",
        "value": "interface-module"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 621,
          "end": 623,
          "local": {
            "type": "Identifier",
            "start": 621,
            "end": 623,
            "decorators": [],
            "name": "x5",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 649,
      "end": 682,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 664,
        "end": 681,
        "raw": "\"variable-module\"",
        "value": "variable-module"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 656,
          "end": 658,
          "local": {
            "type": "Identifier",
            "start": 656,
            "end": 658,
            "decorators": [],
            "name": "x6",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 683,
      "end": 709,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 698,
        "end": 708,
        "raw": "\"function\"",
        "value": "function"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 690,
          "end": 692,
          "local": {
            "type": "Identifier",
            "start": 690,
            "end": 692,
            "decorators": [],
            "name": "x7",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 710,
      "end": 743,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 725,
        "end": 742,
        "raw": "\"function-module\"",
        "value": "function-module"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 717,
          "end": 719,
          "local": {
            "type": "Identifier",
            "start": 717,
            "end": 719,
            "decorators": [],
            "name": "x8",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 744,
      "end": 767,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 759,
        "end": 766,
        "raw": "\"class\"",
        "value": "class"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 751,
          "end": 753,
          "local": {
            "type": "Identifier",
            "start": 751,
            "end": 753,
            "decorators": [],
            "name": "x9",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 768,
      "end": 798,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 783,
        "end": 797,
        "raw": "\"class-module\"",
        "value": "class-module"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 775,
          "end": 777,
          "local": {
            "type": "Identifier",
            "start": 775,
            "end": 777,
            "decorators": [],
            "name": "x0",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 820,
      "end": 852,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 840,
        "end": 851,
        "raw": "\"interface\"",
        "value": "interface"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 827,
          "end": 834,
          "local": {
            "type": "Identifier",
            "start": 832,
            "end": 834,
            "decorators": [],
            "name": "y1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 853,
      "end": 884,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 873,
        "end": 883,
        "raw": "\"variable\"",
        "value": "variable"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 860,
          "end": 867,
          "local": {
            "type": "Identifier",
            "start": 865,
            "end": 867,
            "decorators": [],
            "name": "y2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 885,
      "end": 926,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 905,
        "end": 925,
        "raw": "\"interface-variable\"",
        "value": "interface-variable"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 892,
          "end": 899,
          "local": {
            "type": "Identifier",
            "start": 897,
            "end": 899,
            "decorators": [],
            "name": "y3",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 927,
      "end": 956,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 947,
        "end": 955,
        "raw": "\"module\"",
        "value": "module"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 934,
          "end": 941,
          "local": {
            "type": "Identifier",
            "start": 939,
            "end": 941,
            "decorators": [],
            "name": "y4",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 957,
      "end": 996,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 977,
        "end": 995,
        "raw": "\"interface-module\"",
        "value": "interface-module"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 964,
          "end": 971,
          "local": {
            "type": "Identifier",
            "start": 969,
            "end": 971,
            "decorators": [],
            "name": "y5",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 997,
      "end": 1035,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1017,
        "end": 1034,
        "raw": "\"variable-module\"",
        "value": "variable-module"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 1004,
          "end": 1011,
          "local": {
            "type": "Identifier",
            "start": 1009,
            "end": 1011,
            "decorators": [],
            "name": "y6",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1036,
      "end": 1067,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1056,
        "end": 1066,
        "raw": "\"function\"",
        "value": "function"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 1043,
          "end": 1050,
          "local": {
            "type": "Identifier",
            "start": 1048,
            "end": 1050,
            "decorators": [],
            "name": "y7",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1068,
      "end": 1106,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1088,
        "end": 1105,
        "raw": "\"function-module\"",
        "value": "function-module"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 1075,
          "end": 1082,
          "local": {
            "type": "Identifier",
            "start": 1080,
            "end": 1082,
            "decorators": [],
            "name": "y8",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1107,
      "end": 1135,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1127,
        "end": 1134,
        "raw": "\"class\"",
        "value": "class"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 1114,
          "end": 1121,
          "local": {
            "type": "Identifier",
            "start": 1119,
            "end": 1121,
            "decorators": [],
            "name": "y9",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1136,
      "end": 1171,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1156,
        "end": 1170,
        "raw": "\"class-module\"",
        "value": "class-module"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 1143,
          "end": 1150,
          "local": {
            "type": "Identifier",
            "start": 1148,
            "end": 1150,
            "decorators": [],
            "name": "y0",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 1173,
      "end": 1178,
      "expression": {
        "type": "MemberExpression",
        "start": 1173,
        "end": 1177,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1173,
          "end": 1175,
          "decorators": [],
          "name": "y1",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1176,
          "end": 1177,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1179,
      "end": 1184,
      "expression": {
        "type": "MemberExpression",
        "start": 1179,
        "end": 1183,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1179,
          "end": 1181,
          "decorators": [],
          "name": "y2",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1182,
          "end": 1183,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1185,
      "end": 1190,
      "expression": {
        "type": "MemberExpression",
        "start": 1185,
        "end": 1189,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1185,
          "end": 1187,
          "decorators": [],
          "name": "y3",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1188,
          "end": 1189,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1191,
      "end": 1196,
      "expression": {
        "type": "MemberExpression",
        "start": 1191,
        "end": 1195,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1191,
          "end": 1193,
          "decorators": [],
          "name": "y4",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1194,
          "end": 1195,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1197,
      "end": 1202,
      "expression": {
        "type": "MemberExpression",
        "start": 1197,
        "end": 1201,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1197,
          "end": 1199,
          "decorators": [],
          "name": "y5",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1200,
          "end": 1201,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1203,
      "end": 1208,
      "expression": {
        "type": "MemberExpression",
        "start": 1203,
        "end": 1207,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1203,
          "end": 1205,
          "decorators": [],
          "name": "y6",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1206,
          "end": 1207,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1209,
      "end": 1214,
      "expression": {
        "type": "MemberExpression",
        "start": 1209,
        "end": 1213,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1209,
          "end": 1211,
          "decorators": [],
          "name": "y7",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1212,
          "end": 1213,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1215,
      "end": 1220,
      "expression": {
        "type": "MemberExpression",
        "start": 1215,
        "end": 1219,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1215,
          "end": 1217,
          "decorators": [],
          "name": "y8",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1218,
          "end": 1219,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1221,
      "end": 1226,
      "expression": {
        "type": "MemberExpression",
        "start": 1221,
        "end": 1225,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1221,
          "end": 1223,
          "decorators": [],
          "name": "y9",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1224,
          "end": 1225,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1227,
      "end": 1232,
      "expression": {
        "type": "MemberExpression",
        "start": 1227,
        "end": 1231,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1227,
          "end": 1229,
          "decorators": [],
          "name": "y0",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1230,
          "end": 1231,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 1250,
      "end": 1286,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1274,
        "end": 1285,
        "raw": "\"interface\"",
        "value": "interface"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1259,
          "end": 1266,
          "imported": {
            "type": "Identifier",
            "start": 1259,
            "end": 1260,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1264,
            "end": 1266,
            "decorators": [],
            "name": "a1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1287,
      "end": 1322,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1311,
        "end": 1321,
        "raw": "\"variable\"",
        "value": "variable"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1296,
          "end": 1303,
          "imported": {
            "type": "Identifier",
            "start": 1296,
            "end": 1297,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1301,
            "end": 1303,
            "decorators": [],
            "name": "a2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1323,
      "end": 1368,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1347,
        "end": 1367,
        "raw": "\"interface-variable\"",
        "value": "interface-variable"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1332,
          "end": 1339,
          "imported": {
            "type": "Identifier",
            "start": 1332,
            "end": 1333,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1337,
            "end": 1339,
            "decorators": [],
            "name": "a3",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1369,
      "end": 1402,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1393,
        "end": 1401,
        "raw": "\"module\"",
        "value": "module"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1378,
          "end": 1385,
          "imported": {
            "type": "Identifier",
            "start": 1378,
            "end": 1379,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1383,
            "end": 1385,
            "decorators": [],
            "name": "a4",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1403,
      "end": 1446,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1427,
        "end": 1445,
        "raw": "\"interface-module\"",
        "value": "interface-module"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1412,
          "end": 1419,
          "imported": {
            "type": "Identifier",
            "start": 1412,
            "end": 1413,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1417,
            "end": 1419,
            "decorators": [],
            "name": "a5",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1447,
      "end": 1489,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1471,
        "end": 1488,
        "raw": "\"variable-module\"",
        "value": "variable-module"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1456,
          "end": 1463,
          "imported": {
            "type": "Identifier",
            "start": 1456,
            "end": 1457,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1461,
            "end": 1463,
            "decorators": [],
            "name": "a6",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1490,
      "end": 1525,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1514,
        "end": 1524,
        "raw": "\"function\"",
        "value": "function"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1499,
          "end": 1506,
          "imported": {
            "type": "Identifier",
            "start": 1499,
            "end": 1500,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1504,
            "end": 1506,
            "decorators": [],
            "name": "a7",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1526,
      "end": 1568,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1550,
        "end": 1567,
        "raw": "\"function-module\"",
        "value": "function-module"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1535,
          "end": 1542,
          "imported": {
            "type": "Identifier",
            "start": 1535,
            "end": 1536,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1540,
            "end": 1542,
            "decorators": [],
            "name": "a8",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1569,
      "end": 1601,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1593,
        "end": 1600,
        "raw": "\"class\"",
        "value": "class"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1578,
          "end": 1585,
          "imported": {
            "type": "Identifier",
            "start": 1578,
            "end": 1579,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1583,
            "end": 1585,
            "decorators": [],
            "name": "a9",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 1602,
      "end": 1641,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 1626,
        "end": 1640,
        "raw": "\"class-module\"",
        "value": "class-module"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 1611,
          "end": 1618,
          "imported": {
            "type": "Identifier",
            "start": 1611,
            "end": 1612,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1616,
            "end": 1618,
            "decorators": [],
            "name": "a0",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 1643,
      "end": 1646,
      "expression": {
        "type": "Identifier",
        "start": 1643,
        "end": 1645,
        "decorators": [],
        "name": "a1",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1647,
      "end": 1650,
      "expression": {
        "type": "Identifier",
        "start": 1647,
        "end": 1649,
        "decorators": [],
        "name": "a2",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1651,
      "end": 1654,
      "expression": {
        "type": "Identifier",
        "start": 1651,
        "end": 1653,
        "decorators": [],
        "name": "a3",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1655,
      "end": 1658,
      "expression": {
        "type": "Identifier",
        "start": 1655,
        "end": 1657,
        "decorators": [],
        "name": "a4",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1659,
      "end": 1662,
      "expression": {
        "type": "Identifier",
        "start": 1659,
        "end": 1661,
        "decorators": [],
        "name": "a5",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1663,
      "end": 1666,
      "expression": {
        "type": "Identifier",
        "start": 1663,
        "end": 1665,
        "decorators": [],
        "name": "a6",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1667,
      "end": 1670,
      "expression": {
        "type": "Identifier",
        "start": 1667,
        "end": 1669,
        "decorators": [],
        "name": "a7",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1671,
      "end": 1674,
      "expression": {
        "type": "Identifier",
        "start": 1671,
        "end": 1673,
        "decorators": [],
        "name": "a8",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1675,
      "end": 1678,
      "expression": {
        "type": "Identifier",
        "start": 1675,
        "end": 1677,
        "decorators": [],
        "name": "a9",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1679,
      "end": 1682,
      "expression": {
        "type": "Identifier",
        "start": 1679,
        "end": 1681,
        "decorators": [],
        "name": "a0",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1700,
      "end": 1736,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 1724,
        "end": 1735,
        "raw": "\"interface\"",
        "value": "interface"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1709,
          "end": 1716,
          "exported": {
            "type": "Identifier",
            "start": 1714,
            "end": 1716,
            "decorators": [],
            "name": "a1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1709,
            "end": 1710,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1737,
      "end": 1772,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 1761,
        "end": 1771,
        "raw": "\"variable\"",
        "value": "variable"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1746,
          "end": 1753,
          "exported": {
            "type": "Identifier",
            "start": 1751,
            "end": 1753,
            "decorators": [],
            "name": "a2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1746,
            "end": 1747,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1773,
      "end": 1818,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 1797,
        "end": 1817,
        "raw": "\"interface-variable\"",
        "value": "interface-variable"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1782,
          "end": 1789,
          "exported": {
            "type": "Identifier",
            "start": 1787,
            "end": 1789,
            "decorators": [],
            "name": "a3",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1782,
            "end": 1783,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1819,
      "end": 1852,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 1843,
        "end": 1851,
        "raw": "\"module\"",
        "value": "module"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1828,
          "end": 1835,
          "exported": {
            "type": "Identifier",
            "start": 1833,
            "end": 1835,
            "decorators": [],
            "name": "a4",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1828,
            "end": 1829,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1853,
      "end": 1896,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 1877,
        "end": 1895,
        "raw": "\"interface-module\"",
        "value": "interface-module"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1862,
          "end": 1869,
          "exported": {
            "type": "Identifier",
            "start": 1867,
            "end": 1869,
            "decorators": [],
            "name": "a5",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1862,
            "end": 1863,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1897,
      "end": 1939,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 1921,
        "end": 1938,
        "raw": "\"variable-module\"",
        "value": "variable-module"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1906,
          "end": 1913,
          "exported": {
            "type": "Identifier",
            "start": 1911,
            "end": 1913,
            "decorators": [],
            "name": "a6",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1906,
            "end": 1907,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1940,
      "end": 1975,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 1964,
        "end": 1974,
        "raw": "\"function\"",
        "value": "function"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1949,
          "end": 1956,
          "exported": {
            "type": "Identifier",
            "start": 1954,
            "end": 1956,
            "decorators": [],
            "name": "a7",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1949,
            "end": 1950,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1976,
      "end": 2018,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2000,
        "end": 2017,
        "raw": "\"function-module\"",
        "value": "function-module"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 1985,
          "end": 1992,
          "exported": {
            "type": "Identifier",
            "start": 1990,
            "end": 1992,
            "decorators": [],
            "name": "a8",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 1985,
            "end": 1986,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2019,
      "end": 2051,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2043,
        "end": 2050,
        "raw": "\"class\"",
        "value": "class"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 2028,
          "end": 2035,
          "exported": {
            "type": "Identifier",
            "start": 2033,
            "end": 2035,
            "decorators": [],
            "name": "a9",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 2028,
            "end": 2029,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2052,
      "end": 2091,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2076,
        "end": 2090,
        "raw": "\"class-module\"",
        "value": "class-module"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 2061,
          "end": 2068,
          "exported": {
            "type": "Identifier",
            "start": 2066,
            "end": 2068,
            "decorators": [],
            "name": "a0",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 2061,
            "end": 2062,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2108,
      "end": 2134,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2122,
        "end": 2133,
        "raw": "\"interface\"",
        "value": "interface"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2135,
      "end": 2160,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2149,
        "end": 2159,
        "raw": "\"variable\"",
        "value": "variable"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2161,
      "end": 2196,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2175,
        "end": 2195,
        "raw": "\"interface-variable\"",
        "value": "interface-variable"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2197,
      "end": 2220,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2211,
        "end": 2219,
        "raw": "\"module\"",
        "value": "module"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2221,
      "end": 2254,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2235,
        "end": 2253,
        "raw": "\"interface-module\"",
        "value": "interface-module"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2255,
      "end": 2287,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2269,
        "end": 2286,
        "raw": "\"variable-module\"",
        "value": "variable-module"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2288,
      "end": 2313,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2302,
        "end": 2312,
        "raw": "\"function\"",
        "value": "function"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2314,
      "end": 2346,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2328,
        "end": 2345,
        "raw": "\"function-module\"",
        "value": "function-module"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2347,
      "end": 2369,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2361,
        "end": 2368,
        "raw": "\"class\"",
        "value": "class"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 2370,
      "end": 2399,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 2384,
        "end": 2398,
        "raw": "\"class-module\"",
        "value": "class-module"
      }
    }
  ],
  "sourceType": "module"
}
```
