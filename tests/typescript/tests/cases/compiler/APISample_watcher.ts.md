__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 313,
  "end": 4244,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 338,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 337,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 337,
            "decorators": [],
            "name": "process",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 332,
              "end": 337,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 334,
                "end": 337
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 364,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 363,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 363,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 358,
              "end": 363,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 360,
                "end": 363
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 815,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 814,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 814,
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 379,
              "end": 814,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 381,
                "end": 814,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 387,
                    "end": 421,
                    "key": {
                      "type": "Identifier",
                      "start": 387,
                      "end": 397,
                      "decorators": [],
                      "name": "existsSync",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 398,
                        "end": 410,
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 402,
                          "end": 410,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 404,
                            "end": 410
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 411,
                      "end": 420,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 413,
                        "end": 420
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 426,
                    "end": 462,
                    "key": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 437,
                      "decorators": [],
                      "name": "readdirSync",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 438,
                        "end": 450,
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 442,
                          "end": 450,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 444,
                            "end": 450
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 451,
                      "end": 461,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 453,
                        "end": 461,
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 453,
                          "end": 459
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 467,
                    "end": 525,
                    "key": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 479,
                      "decorators": [],
                      "name": "readFileSync",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 480,
                        "end": 496,
                        "decorators": [],
                        "name": "filename",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 488,
                          "end": 496,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 490,
                            "end": 496
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 498,
                        "end": 515,
                        "decorators": [],
                        "name": "encoding",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 507,
                          "end": 515,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 509,
                            "end": 515
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 516,
                      "end": 524,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 518,
                        "end": 524
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 530,
                    "end": 652,
                    "key": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 543,
                      "decorators": [],
                      "name": "writeFileSync",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 544,
                        "end": 560,
                        "decorators": [],
                        "name": "filename",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 552,
                          "end": 560,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 554,
                            "end": 560
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 562,
                        "end": 571,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 566,
                          "end": 571,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 568,
                            "end": 571
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 573,
                        "end": 644,
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 581,
                          "end": 644,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 583,
                            "end": 644,
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "start": 583,
                                "end": 635,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 585,
                                    "end": 603,
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 585,
                                      "end": 593,
                                      "decorators": [],
                                      "name": "encoding",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 594,
                                      "end": 602,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 596,
                                        "end": 602
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 604,
                                    "end": 618,
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 604,
                                      "end": 608,
                                      "decorators": [],
                                      "name": "mode",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 609,
                                      "end": 617,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 611,
                                        "end": 617
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 619,
                                    "end": 633,
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 619,
                                      "end": 623,
                                      "decorators": [],
                                      "name": "flag",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 624,
                                      "end": 632,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 626,
                                        "end": 632
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 638,
                                "end": 644
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 645,
                      "end": 651,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 647,
                        "end": 651
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 657,
                    "end": 812,
                    "key": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 666,
                      "decorators": [],
                      "name": "watchFile",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 667,
                        "end": 683,
                        "decorators": [],
                        "name": "filename",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 675,
                          "end": 683,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 677,
                            "end": 683
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 685,
                        "end": 738,
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 692,
                          "end": 738,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 694,
                            "end": 738,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 696,
                                "end": 717,
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 696,
                                  "end": 706,
                                  "decorators": [],
                                  "name": "persistent",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 707,
                                  "end": 716,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 709,
                                    "end": 716
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 718,
                                "end": 736,
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 718,
                                  "end": 726,
                                  "decorators": [],
                                  "name": "interval",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 727,
                                  "end": 735,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 729,
                                    "end": 735
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 740,
                        "end": 804,
                        "decorators": [],
                        "name": "listener",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 748,
                          "end": 804,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 750,
                            "end": 804,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 751,
                                "end": 772,
                                "decorators": [],
                                "name": "curr",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 755,
                                  "end": 772,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 757,
                                    "end": 772,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 759,
                                        "end": 770,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 759,
                                          "end": 764,
                                          "decorators": [],
                                          "name": "mtime",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 764,
                                          "end": 770,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 766,
                                            "end": 770,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 766,
                                              "end": 770,
                                              "decorators": [],
                                              "name": "Date",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 774,
                                "end": 795,
                                "decorators": [],
                                "name": "prev",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 778,
                                  "end": 795,
                                  "typeAnnotation": {
                                    "type": "TSTypeLiteral",
                                    "start": 780,
                                    "end": 795,
                                    "members": [
                                      {
                                        "type": "TSPropertySignature",
                                        "start": 782,
                                        "end": 793,
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 782,
                                          "end": 787,
                                          "decorators": [],
                                          "name": "mtime",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 787,
                                          "end": 793,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 789,
                                            "end": 793,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 789,
                                              "end": 793,
                                              "decorators": [],
                                              "name": "Date",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "typeArguments": null
                                          }
                                        },
                                        "accessibility": null,
                                        "static": false
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 797,
                              "end": 804,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 800,
                                "end": 804
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 805,
                      "end": 811,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 807,
                        "end": 811
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 816,
      "end": 838,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 828,
          "end": 837,
          "id": {
            "type": "Identifier",
            "start": 828,
            "end": 837,
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 832,
              "end": 837,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 834,
                "end": 837
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ImportDeclaration",
      "start": 840,
      "end": 873,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 847,
          "end": 854,
          "local": {
            "type": "Identifier",
            "start": 852,
            "end": 854,
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 860,
        "end": 872,
        "value": "typescript",
        "raw": "\"typescript\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 875,
      "end": 3909,
      "id": {
        "type": "Identifier",
        "start": 884,
        "end": 889,
        "decorators": [],
        "name": "watch",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 890,
          "end": 913,
          "decorators": [],
          "name": "rootFileNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 903,
            "end": 913,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 905,
              "end": 913,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 905,
                "end": 911
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 915,
          "end": 942,
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 922,
            "end": 942,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 924,
              "end": 942,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 924,
                "end": 942,
                "left": {
                  "type": "Identifier",
                  "start": 924,
                  "end": 926,
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 927,
                  "end": 942,
                  "decorators": [],
                  "name": "CompilerOptions",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 944,
        "end": 3909,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 950,
            "end": 1000,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 956,
                "end": 999,
                "id": {
                  "type": "Identifier",
                  "start": 956,
                  "end": 994,
                  "decorators": [],
                  "name": "files",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 961,
                    "end": 994,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 963,
                      "end": 994,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 963,
                        "end": 973,
                        "left": {
                          "type": "Identifier",
                          "start": 963,
                          "end": 965,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 966,
                          "end": 973,
                          "decorators": [],
                          "name": "MapLike",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 973,
                        "end": 994,
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 974,
                            "end": 993,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 976,
                                "end": 991,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 976,
                                  "end": 983,
                                  "decorators": [],
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 983,
                                  "end": 991,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 985,
                                    "end": 991
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 997,
                  "end": 999,
                  "properties": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1042,
            "end": 1127,
            "expression": {
              "type": "CallExpression",
              "start": 1042,
              "end": 1126,
              "callee": {
                "type": "MemberExpression",
                "start": 1042,
                "end": 1063,
                "object": {
                  "type": "Identifier",
                  "start": 1042,
                  "end": 1055,
                  "decorators": [],
                  "name": "rootFileNames",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1056,
                  "end": 1063,
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1064,
                  "end": 1125,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1064,
                      "end": 1072,
                      "decorators": [],
                      "name": "fileName",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1076,
                    "end": 1125,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1086,
                        "end": 1119,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1086,
                          "end": 1118,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1086,
                            "end": 1101,
                            "object": {
                              "type": "Identifier",
                              "start": 1086,
                              "end": 1091,
                              "decorators": [],
                              "name": "files",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1092,
                              "end": 1100,
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": true
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "start": 1104,
                            "end": 1118,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 1106,
                                "end": 1116,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 1106,
                                  "end": 1113,
                                  "decorators": [],
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 1115,
                                  "end": 1116,
                                  "value": 0,
                                  "raw": "0"
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1218,
            "end": 1939,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1224,
                "end": 1938,
                "id": {
                  "type": "Identifier",
                  "start": 1224,
                  "end": 1260,
                  "decorators": [],
                  "name": "servicesHost",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1236,
                    "end": 1260,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1238,
                      "end": 1260,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 1238,
                        "end": 1260,
                        "left": {
                          "type": "Identifier",
                          "start": 1238,
                          "end": 1240,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1241,
                          "end": 1260,
                          "decorators": [],
                          "name": "LanguageServiceHost",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1263,
                  "end": 1938,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1273,
                      "end": 1312,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1273,
                        "end": 1291,
                        "decorators": [],
                        "name": "getScriptFileNames",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1293,
                        "end": 1312,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1299,
                          "end": 1312,
                          "decorators": [],
                          "name": "rootFileNames",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1322,
                      "end": 1407,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1322,
                        "end": 1338,
                        "decorators": [],
                        "name": "getScriptVersion",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1340,
                        "end": 1407,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1341,
                            "end": 1349,
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "LogicalExpression",
                          "start": 1354,
                          "end": 1407,
                          "left": {
                            "type": "MemberExpression",
                            "start": 1354,
                            "end": 1369,
                            "object": {
                              "type": "Identifier",
                              "start": 1354,
                              "end": 1359,
                              "decorators": [],
                              "name": "files",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1360,
                              "end": 1368,
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": true
                          },
                          "operator": "&&",
                          "right": {
                            "type": "CallExpression",
                            "start": 1373,
                            "end": 1407,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1373,
                              "end": 1405,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1373,
                                "end": 1396,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1373,
                                  "end": 1388,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1373,
                                    "end": 1378,
                                    "decorators": [],
                                    "name": "files",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1379,
                                    "end": 1387,
                                    "decorators": [],
                                    "name": "fileName",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": true
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1389,
                                  "end": 1396,
                                  "decorators": [],
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1397,
                                "end": 1405,
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1417,
                      "end": 1641,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1417,
                        "end": 1434,
                        "decorators": [],
                        "name": "getScriptSnapshot",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1436,
                        "end": 1641,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1437,
                            "end": 1445,
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1450,
                          "end": 1641,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 1464,
                              "end": 1543,
                              "test": {
                                "type": "UnaryExpression",
                                "start": 1468,
                                "end": 1492,
                                "operator": "!",
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 1469,
                                  "end": 1492,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1469,
                                    "end": 1482,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1469,
                                      "end": 1471,
                                      "decorators": [],
                                      "name": "fs",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1472,
                                      "end": 1482,
                                      "decorators": [],
                                      "name": "existsSync",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1483,
                                      "end": 1491,
                                      "decorators": [],
                                      "name": "fileName",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "optional": false
                                },
                                "prefix": true
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 1494,
                                "end": 1543,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 1512,
                                    "end": 1529,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 1519,
                                      "end": 1528,
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            },
                            {
                              "type": "ReturnStatement",
                              "start": 1557,
                              "end": 1631,
                              "argument": {
                                "type": "CallExpression",
                                "start": 1564,
                                "end": 1630,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1564,
                                  "end": 1592,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1564,
                                    "end": 1581,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1564,
                                      "end": 1566,
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1567,
                                      "end": 1581,
                                      "decorators": [],
                                      "name": "ScriptSnapshot",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1582,
                                    "end": 1592,
                                    "decorators": [],
                                    "name": "fromString",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "CallExpression",
                                    "start": 1593,
                                    "end": 1629,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1593,
                                      "end": 1627,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 1593,
                                        "end": 1618,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 1593,
                                          "end": 1608,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1593,
                                            "end": 1595,
                                            "decorators": [],
                                            "name": "fs",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1596,
                                            "end": 1608,
                                            "decorators": [],
                                            "name": "readFileSync",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "start": 1609,
                                            "end": 1617,
                                            "decorators": [],
                                            "name": "fileName",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        ],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1619,
                                        "end": 1627,
                                        "decorators": [],
                                        "name": "toString",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false
                              }
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1651,
                      "end": 1691,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1651,
                        "end": 1670,
                        "decorators": [],
                        "name": "getCurrentDirectory",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1672,
                        "end": 1691,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "start": 1678,
                          "end": 1691,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1678,
                            "end": 1689,
                            "object": {
                              "type": "Identifier",
                              "start": 1678,
                              "end": 1685,
                              "decorators": [],
                              "name": "process",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1686,
                              "end": 1689,
                              "decorators": [],
                              "name": "cwd",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1701,
                      "end": 1738,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1701,
                        "end": 1723,
                        "decorators": [],
                        "name": "getCompilationSettings",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1725,
                        "end": 1738,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1731,
                          "end": 1738,
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1748,
                      "end": 1817,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1748,
                        "end": 1769,
                        "decorators": [],
                        "name": "getDefaultLibFileName",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1771,
                        "end": 1817,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1772,
                            "end": 1779,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "start": 1784,
                          "end": 1817,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1784,
                            "end": 1808,
                            "object": {
                              "type": "Identifier",
                              "start": 1784,
                              "end": 1786,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1787,
                              "end": 1808,
                              "decorators": [],
                              "name": "getDefaultLibFilePath",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1809,
                              "end": 1816,
                              "decorators": [],
                              "name": "options",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1827,
                      "end": 1874,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1827,
                        "end": 1837,
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1839,
                        "end": 1874,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1839,
                            "end": 1847,
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "start": 1851,
                          "end": 1874,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1851,
                            "end": 1864,
                            "object": {
                              "type": "Identifier",
                              "start": 1851,
                              "end": 1853,
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1854,
                              "end": 1864,
                              "decorators": [],
                              "name": "existsSync",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1865,
                              "end": 1873,
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1884,
                      "end": 1931,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1884,
                        "end": 1892,
                        "decorators": [],
                        "name": "readFile",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1894,
                        "end": 1931,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1894,
                            "end": 1902,
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "start": 1906,
                          "end": 1931,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1906,
                            "end": 1921,
                            "object": {
                              "type": "Identifier",
                              "start": 1906,
                              "end": 1908,
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1909,
                              "end": 1921,
                              "decorators": [],
                              "name": "readFileSync",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1922,
                              "end": 1930,
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1986,
            "end": 2070,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1992,
                "end": 2070,
                "id": {
                  "type": "Identifier",
                  "start": 1992,
                  "end": 2000,
                  "decorators": [],
                  "name": "services",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2003,
                  "end": 2070,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2003,
                    "end": 2027,
                    "object": {
                      "type": "Identifier",
                      "start": 2003,
                      "end": 2005,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2006,
                      "end": 2027,
                      "decorators": [],
                      "name": "createLanguageService",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2028,
                      "end": 2040,
                      "decorators": [],
                      "name": "servicesHost",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "CallExpression",
                      "start": 2042,
                      "end": 2069,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2042,
                        "end": 2067,
                        "object": {
                          "type": "Identifier",
                          "start": 2042,
                          "end": 2044,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2045,
                          "end": 2067,
                          "decorators": [],
                          "name": "createDocumentRegistry",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2109,
            "end": 2735,
            "expression": {
              "type": "CallExpression",
              "start": 2109,
              "end": 2734,
              "callee": {
                "type": "MemberExpression",
                "start": 2109,
                "end": 2130,
                "object": {
                  "type": "Identifier",
                  "start": 2109,
                  "end": 2122,
                  "decorators": [],
                  "name": "rootFileNames",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2123,
                  "end": 2130,
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 2131,
                  "end": 2733,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2131,
                      "end": 2139,
                      "decorators": [],
                      "name": "fileName",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2143,
                    "end": 2733,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2198,
                        "end": 2217,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2198,
                          "end": 2216,
                          "callee": {
                            "type": "Identifier",
                            "start": 2198,
                            "end": 2206,
                            "decorators": [],
                            "name": "emitFile",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 2207,
                              "end": 2215,
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2284,
                        "end": 2727,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2284,
                          "end": 2726,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2284,
                            "end": 2296,
                            "object": {
                              "type": "Identifier",
                              "start": 2284,
                              "end": 2286,
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2287,
                              "end": 2296,
                              "decorators": [],
                              "name": "watchFile",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 2297,
                              "end": 2305,
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "ObjectExpression",
                              "start": 2319,
                              "end": 2354,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2321,
                                  "end": 2337,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 2321,
                                    "end": 2331,
                                    "decorators": [],
                                    "name": "persistent",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 2333,
                                    "end": 2337,
                                    "value": true,
                                    "raw": "true"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 2339,
                                  "end": 2352,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 2339,
                                    "end": 2347,
                                    "decorators": [],
                                    "name": "interval",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 2349,
                                    "end": 2352,
                                    "value": 250,
                                    "raw": "250"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 2368,
                              "end": 2725,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 2369,
                                  "end": 2373,
                                  "decorators": [],
                                  "name": "curr",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "Identifier",
                                  "start": 2375,
                                  "end": 2379,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 2384,
                                "end": 2725,
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "start": 2437,
                                    "end": 2516,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 2441,
                                      "end": 2467,
                                      "left": {
                                        "type": "UnaryExpression",
                                        "start": 2441,
                                        "end": 2452,
                                        "operator": "+",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "start": 2442,
                                          "end": 2452,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 2442,
                                            "end": 2446,
                                            "decorators": [],
                                            "name": "curr",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 2447,
                                            "end": 2452,
                                            "decorators": [],
                                            "name": "mtime",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "prefix": true
                                      },
                                      "operator": "<=",
                                      "right": {
                                        "type": "UnaryExpression",
                                        "start": 2456,
                                        "end": 2467,
                                        "operator": "+",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "start": 2457,
                                          "end": 2467,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 2457,
                                            "end": 2461,
                                            "decorators": [],
                                            "name": "prev",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 2462,
                                            "end": 2467,
                                            "decorators": [],
                                            "name": "mtime",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "prefix": true
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 2469,
                                      "end": 2516,
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "start": 2491,
                                          "end": 2498,
                                          "argument": null
                                        }
                                      ]
                                    },
                                    "alternate": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 2603,
                                    "end": 2629,
                                    "expression": {
                                      "type": "UpdateExpression",
                                      "start": 2603,
                                      "end": 2628,
                                      "operator": "++",
                                      "prefix": false,
                                      "argument": {
                                        "type": "MemberExpression",
                                        "start": 2603,
                                        "end": 2626,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 2603,
                                          "end": 2618,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 2603,
                                            "end": 2608,
                                            "decorators": [],
                                            "name": "files",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 2609,
                                            "end": 2617,
                                            "decorators": [],
                                            "name": "fileName",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": true
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 2619,
                                          "end": 2626,
                                          "decorators": [],
                                          "name": "version",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      }
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 2692,
                                    "end": 2711,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 2692,
                                      "end": 2710,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 2692,
                                        "end": 2700,
                                        "decorators": [],
                                        "name": "emitFile",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 2701,
                                          "end": 2709,
                                          "decorators": [],
                                          "name": "fileName",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "id": null,
                              "generator": false
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 2741,
            "end": 3157,
            "id": {
              "type": "Identifier",
              "start": 2750,
              "end": 2758,
              "decorators": [],
              "name": "emitFile",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 2759,
                "end": 2775,
                "decorators": [],
                "name": "fileName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2767,
                  "end": 2775,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2769,
                    "end": 2775
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 2777,
              "end": 3157,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2787,
                  "end": 2833,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2791,
                      "end": 2832,
                      "id": {
                        "type": "Identifier",
                        "start": 2791,
                        "end": 2797,
                        "decorators": [],
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 2800,
                        "end": 2832,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2800,
                          "end": 2822,
                          "object": {
                            "type": "Identifier",
                            "start": 2800,
                            "end": 2808,
                            "decorators": [],
                            "name": "services",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2809,
                            "end": 2822,
                            "decorators": [],
                            "name": "getEmitOutput",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 2823,
                            "end": 2831,
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 2843,
                  "end": 3042,
                  "test": {
                    "type": "UnaryExpression",
                    "start": 2847,
                    "end": 2866,
                    "operator": "!",
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2848,
                      "end": 2866,
                      "object": {
                        "type": "Identifier",
                        "start": 2848,
                        "end": 2854,
                        "decorators": [],
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2855,
                        "end": 2866,
                        "decorators": [],
                        "name": "emitSkipped",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "prefix": true
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 2868,
                    "end": 2928,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2882,
                        "end": 2918,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2882,
                          "end": 2917,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2882,
                            "end": 2893,
                            "object": {
                              "type": "Identifier",
                              "start": 2882,
                              "end": 2889,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2890,
                              "end": 2893,
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "start": 2894,
                              "end": 2916,
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "start": 2894,
                                  "end": 2906,
                                  "value": {
                                    "raw": "Emitting ",
                                    "cooked": "Emitting "
                                  },
                                  "tail": false
                                },
                                {
                                  "type": "TemplateElement",
                                  "start": 2914,
                                  "end": 2916,
                                  "value": {
                                    "raw": "",
                                    "cooked": ""
                                  },
                                  "tail": true
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "Identifier",
                                  "start": 2906,
                                  "end": 2914,
                                  "decorators": [],
                                  "name": "fileName",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ]
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 2942,
                    "end": 3042,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2956,
                        "end": 2999,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2956,
                          "end": 2998,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2956,
                            "end": 2967,
                            "object": {
                              "type": "Identifier",
                              "start": 2956,
                              "end": 2963,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2964,
                              "end": 2967,
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "start": 2968,
                              "end": 2997,
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "start": 2968,
                                  "end": 2980,
                                  "value": {
                                    "raw": "Emitting ",
                                    "cooked": "Emitting "
                                  },
                                  "tail": false
                                },
                                {
                                  "type": "TemplateElement",
                                  "start": 2988,
                                  "end": 2997,
                                  "value": {
                                    "raw": " failed",
                                    "cooked": " failed"
                                  },
                                  "tail": true
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "Identifier",
                                  "start": 2980,
                                  "end": 2988,
                                  "decorators": [],
                                  "name": "fileName",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ]
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 3012,
                        "end": 3032,
                        "expression": {
                          "type": "CallExpression",
                          "start": 3012,
                          "end": 3031,
                          "callee": {
                            "type": "Identifier",
                            "start": 3012,
                            "end": 3021,
                            "decorators": [],
                            "name": "logErrors",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 3022,
                              "end": 3030,
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3052,
                  "end": 3151,
                  "expression": {
                    "type": "CallExpression",
                    "start": 3052,
                    "end": 3150,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3052,
                      "end": 3078,
                      "object": {
                        "type": "MemberExpression",
                        "start": 3052,
                        "end": 3070,
                        "object": {
                          "type": "Identifier",
                          "start": 3052,
                          "end": 3058,
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3059,
                          "end": 3070,
                          "decorators": [],
                          "name": "outputFiles",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3071,
                        "end": 3078,
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 3079,
                        "end": 3149,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3079,
                            "end": 3080,
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 3084,
                          "end": 3149,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 3098,
                              "end": 3139,
                              "expression": {
                                "type": "CallExpression",
                                "start": 3098,
                                "end": 3138,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3098,
                                  "end": 3114,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3098,
                                    "end": 3100,
                                    "decorators": [],
                                    "name": "fs",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3101,
                                    "end": 3114,
                                    "decorators": [],
                                    "name": "writeFileSync",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 3115,
                                    "end": 3121,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3115,
                                      "end": 3116,
                                      "decorators": [],
                                      "name": "o",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3117,
                                      "end": 3121,
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "start": 3123,
                                    "end": 3129,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3123,
                                      "end": 3124,
                                      "decorators": [],
                                      "name": "o",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3125,
                                      "end": 3129,
                                      "decorators": [],
                                      "name": "text",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  {
                                    "type": "Literal",
                                    "start": 3131,
                                    "end": 3137,
                                    "value": "utf8",
                                    "raw": "\"utf8\""
                                  }
                                ],
                                "optional": false
                              },
                              "directive": null
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 3163,
            "end": 3907,
            "id": {
              "type": "Identifier",
              "start": 3172,
              "end": 3181,
              "decorators": [],
              "name": "logErrors",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 3182,
                "end": 3198,
                "decorators": [],
                "name": "fileName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3190,
                  "end": 3198,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3192,
                    "end": 3198
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 3200,
              "end": 3907,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3210,
                  "end": 3399,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3214,
                      "end": 3398,
                      "id": {
                        "type": "Identifier",
                        "start": 3214,
                        "end": 3228,
                        "decorators": [],
                        "name": "allDiagnostics",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 3231,
                        "end": 3398,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3231,
                          "end": 3355,
                          "object": {
                            "type": "CallExpression",
                            "start": 3231,
                            "end": 3335,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 3231,
                              "end": 3291,
                              "object": {
                                "type": "CallExpression",
                                "start": 3231,
                                "end": 3271,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3231,
                                  "end": 3269,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3231,
                                    "end": 3239,
                                    "decorators": [],
                                    "name": "services",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3240,
                                    "end": 3269,
                                    "decorators": [],
                                    "name": "getCompilerOptionsDiagnostics",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3285,
                                "end": 3291,
                                "decorators": [],
                                "name": "concat",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 3292,
                                "end": 3334,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3292,
                                  "end": 3324,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3292,
                                    "end": 3300,
                                    "decorators": [],
                                    "name": "services",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3301,
                                    "end": 3324,
                                    "decorators": [],
                                    "name": "getSyntacticDiagnostics",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 3325,
                                    "end": 3333,
                                    "decorators": [],
                                    "name": "fileName",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "optional": false
                              }
                            ],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 3349,
                            "end": 3355,
                            "decorators": [],
                            "name": "concat",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 3356,
                            "end": 3397,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 3356,
                              "end": 3387,
                              "object": {
                                "type": "Identifier",
                                "start": 3356,
                                "end": 3364,
                                "decorators": [],
                                "name": "services",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 3365,
                                "end": 3387,
                                "decorators": [],
                                "name": "getSemanticDiagnostics",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 3388,
                                "end": 3396,
                                "decorators": [],
                                "name": "fileName",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "optional": false
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3409,
                  "end": 3901,
                  "expression": {
                    "type": "CallExpression",
                    "start": 3409,
                    "end": 3900,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3409,
                      "end": 3431,
                      "object": {
                        "type": "Identifier",
                        "start": 3409,
                        "end": 3423,
                        "decorators": [],
                        "name": "allDiagnostics",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3424,
                        "end": 3431,
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 3432,
                        "end": 3899,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3432,
                            "end": 3442,
                            "decorators": [],
                            "name": "diagnostic",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 3446,
                          "end": 3899,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 3460,
                              "end": 3536,
                              "kind": "let",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 3464,
                                  "end": 3535,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 3464,
                                    "end": 3471,
                                    "decorators": [],
                                    "name": "message",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "start": 3474,
                                    "end": 3535,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 3474,
                                      "end": 3505,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 3474,
                                        "end": 3476,
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3477,
                                        "end": 3505,
                                        "decorators": [],
                                        "name": "flattenDiagnosticMessageText",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 3506,
                                        "end": 3528,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3506,
                                          "end": 3516,
                                          "decorators": [],
                                          "name": "diagnostic",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3517,
                                          "end": 3528,
                                          "decorators": [],
                                          "name": "messageText",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3530,
                                        "end": 3534,
                                        "value": "\n",
                                        "raw": "\"\\n\""
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
                            },
                            {
                              "type": "IfStatement",
                              "start": 3549,
                              "end": 3889,
                              "test": {
                                "type": "MemberExpression",
                                "start": 3553,
                                "end": 3568,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3553,
                                  "end": 3563,
                                  "decorators": [],
                                  "name": "diagnostic",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 3564,
                                  "end": 3568,
                                  "decorators": [],
                                  "name": "file",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 3570,
                                "end": 3804,
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "start": 3588,
                                    "end": 3679,
                                    "kind": "let",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 3592,
                                        "end": 3678,
                                        "id": {
                                          "type": "ObjectPattern",
                                          "start": 3592,
                                          "end": 3611,
                                          "decorators": [],
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "start": 3594,
                                              "end": 3598,
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "start": 3594,
                                                "end": 3598,
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "value": {
                                                "type": "Identifier",
                                                "start": 3594,
                                                "end": 3598,
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "method": false,
                                              "shorthand": true,
                                              "computed": false,
                                              "optional": false
                                            },
                                            {
                                              "type": "Property",
                                              "start": 3600,
                                              "end": 3609,
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "start": 3600,
                                                "end": 3609,
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "value": {
                                                "type": "Identifier",
                                                "start": 3600,
                                                "end": 3609,
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "method": false,
                                              "shorthand": true,
                                              "computed": false,
                                              "optional": false
                                            }
                                          ],
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "init": {
                                          "type": "CallExpression",
                                          "start": 3614,
                                          "end": 3678,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 3614,
                                            "end": 3659,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 3614,
                                              "end": 3629,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 3614,
                                                "end": 3624,
                                                "decorators": [],
                                                "name": "diagnostic",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 3625,
                                                "end": 3629,
                                                "decorators": [],
                                                "name": "file",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 3630,
                                              "end": 3659,
                                              "decorators": [],
                                              "name": "getLineAndCharacterOfPosition",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "TSNonNullExpression",
                                              "start": 3660,
                                              "end": 3677,
                                              "expression": {
                                                "type": "MemberExpression",
                                                "start": 3660,
                                                "end": 3676,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 3660,
                                                  "end": 3670,
                                                  "decorators": [],
                                                  "name": "diagnostic",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 3671,
                                                  "end": 3676,
                                                  "decorators": [],
                                                  "name": "start",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              }
                                            }
                                          ],
                                          "optional": false
                                        },
                                        "definite": false
                                      }
                                    ],
                                    "declare": false
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 3696,
                                    "end": 3790,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 3696,
                                      "end": 3789,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 3696,
                                        "end": 3707,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3696,
                                          "end": 3703,
                                          "decorators": [],
                                          "name": "console",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3704,
                                          "end": 3707,
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "TemplateLiteral",
                                          "start": 3708,
                                          "end": 3788,
                                          "quasis": [
                                            {
                                              "type": "TemplateElement",
                                              "start": 3708,
                                              "end": 3719,
                                              "value": {
                                                "raw": "  Error ",
                                                "cooked": "  Error "
                                              },
                                              "tail": false
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "start": 3743,
                                              "end": 3748,
                                              "value": {
                                                "raw": " (",
                                                "cooked": " ("
                                              },
                                              "tail": false
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "start": 3756,
                                              "end": 3760,
                                              "value": {
                                                "raw": ",",
                                                "cooked": ","
                                              },
                                              "tail": false
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "start": 3773,
                                              "end": 3779,
                                              "value": {
                                                "raw": "): ",
                                                "cooked": "): "
                                              },
                                              "tail": false
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "start": 3786,
                                              "end": 3788,
                                              "value": {
                                                "raw": "",
                                                "cooked": ""
                                              },
                                              "tail": true
                                            }
                                          ],
                                          "expressions": [
                                            {
                                              "type": "MemberExpression",
                                              "start": 3719,
                                              "end": 3743,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 3719,
                                                "end": 3734,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 3719,
                                                  "end": 3729,
                                                  "decorators": [],
                                                  "name": "diagnostic",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 3730,
                                                  "end": 3734,
                                                  "decorators": [],
                                                  "name": "file",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "computed": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "start": 3735,
                                                "end": 3743,
                                                "decorators": [],
                                                "name": "fileName",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "computed": false
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "start": 3748,
                                              "end": 3756,
                                              "left": {
                                                "type": "Identifier",
                                                "start": 3748,
                                                "end": 3752,
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Literal",
                                                "start": 3755,
                                                "end": 3756,
                                                "value": 1,
                                                "raw": "1"
                                              }
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "start": 3760,
                                              "end": 3773,
                                              "left": {
                                                "type": "Identifier",
                                                "start": 3760,
                                                "end": 3769,
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Literal",
                                                "start": 3772,
                                                "end": 3773,
                                                "value": 1,
                                                "raw": "1"
                                              }
                                            },
                                            {
                                              "type": "Identifier",
                                              "start": 3779,
                                              "end": 3786,
                                              "decorators": [],
                                              "name": "message",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ]
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "alternate": {
                                "type": "BlockStatement",
                                "start": 3822,
                                "end": 3889,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 3840,
                                    "end": 3875,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 3840,
                                      "end": 3874,
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 3840,
                                        "end": 3851,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3840,
                                          "end": 3847,
                                          "decorators": [],
                                          "name": "console",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3848,
                                          "end": 3851,
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "TemplateLiteral",
                                          "start": 3852,
                                          "end": 3873,
                                          "quasis": [
                                            {
                                              "type": "TemplateElement",
                                              "start": 3852,
                                              "end": 3864,
                                              "value": {
                                                "raw": "  Error: ",
                                                "cooked": "  Error: "
                                              },
                                              "tail": false
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "start": 3871,
                                              "end": 3873,
                                              "value": {
                                                "raw": "",
                                                "cooked": ""
                                              },
                                              "tail": true
                                            }
                                          ],
                                          "expressions": [
                                            {
                                              "type": "Identifier",
                                              "start": 3864,
                                              "end": 3871,
                                              "decorators": [],
                                              "name": "message",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ]
                                        }
                                      ],
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "id": null,
                        "generator": false
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3998,
      "end": 4156,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4004,
          "end": 4155,
          "id": {
            "type": "Identifier",
            "start": 4004,
            "end": 4025,
            "decorators": [],
            "name": "currentDirectoryFiles",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4028,
            "end": 4155,
            "callee": {
              "type": "MemberExpression",
              "start": 4028,
              "end": 4069,
              "object": {
                "type": "CallExpression",
                "start": 4028,
                "end": 4057,
                "callee": {
                  "type": "MemberExpression",
                  "start": 4028,
                  "end": 4042,
                  "object": {
                    "type": "Identifier",
                    "start": 4028,
                    "end": 4030,
                    "decorators": [],
                    "name": "fs",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4031,
                    "end": 4042,
                    "decorators": [],
                    "name": "readdirSync",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 4043,
                    "end": 4056,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4043,
                      "end": 4054,
                      "object": {
                        "type": "Identifier",
                        "start": 4043,
                        "end": 4050,
                        "decorators": [],
                        "name": "process",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4051,
                        "end": 4054,
                        "decorators": [],
                        "name": "cwd",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4063,
                "end": 4069,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4070,
                "end": 4154,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4070,
                    "end": 4078,
                    "decorators": [],
                    "name": "fileName",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "LogicalExpression",
                  "start": 4081,
                  "end": 4154,
                  "left": {
                    "type": "BinaryExpression",
                    "start": 4081,
                    "end": 4101,
                    "left": {
                      "type": "MemberExpression",
                      "start": 4081,
                      "end": 4096,
                      "object": {
                        "type": "Identifier",
                        "start": 4081,
                        "end": 4089,
                        "decorators": [],
                        "name": "fileName",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4090,
                        "end": 4096,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": ">=",
                    "right": {
                      "type": "Literal",
                      "start": 4100,
                      "end": 4101,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 4105,
                    "end": 4154,
                    "left": {
                      "type": "CallExpression",
                      "start": 4105,
                      "end": 4144,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4105,
                        "end": 4120,
                        "object": {
                          "type": "Identifier",
                          "start": 4105,
                          "end": 4113,
                          "decorators": [],
                          "name": "fileName",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4114,
                          "end": 4120,
                          "decorators": [],
                          "name": "substr",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 4121,
                          "end": 4140,
                          "left": {
                            "type": "MemberExpression",
                            "start": 4121,
                            "end": 4136,
                            "object": {
                              "type": "Identifier",
                              "start": 4121,
                              "end": 4129,
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 4130,
                              "end": 4136,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "-",
                          "right": {
                            "type": "Literal",
                            "start": 4139,
                            "end": 4140,
                            "value": 3,
                            "raw": "3"
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 4142,
                          "end": 4143,
                          "value": 3,
                          "raw": "3"
                        }
                      ],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 4149,
                      "end": 4154,
                      "value": ".ts",
                      "raw": "\".ts\""
                    }
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4179,
      "end": 4244,
      "expression": {
        "type": "CallExpression",
        "start": 4179,
        "end": 4243,
        "callee": {
          "type": "Identifier",
          "start": 4179,
          "end": 4184,
          "decorators": [],
          "name": "watch",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 4185,
            "end": 4206,
            "decorators": [],
            "name": "currentDirectoryFiles",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 4208,
            "end": 4242,
            "properties": [
              {
                "type": "Property",
                "start": 4210,
                "end": 4240,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 4210,
                  "end": 4216,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 4218,
                  "end": 4240,
                  "object": {
                    "type": "MemberExpression",
                    "start": 4218,
                    "end": 4231,
                    "object": {
                      "type": "Identifier",
                      "start": 4218,
                      "end": 4220,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4221,
                      "end": 4231,
                      "decorators": [],
                      "name": "ModuleKind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4232,
                    "end": 4240,
                    "decorators": [],
                    "name": "CommonJS",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
