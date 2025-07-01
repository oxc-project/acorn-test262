__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "process",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 334,
                "end": 337
              },
              "start": 332,
              "end": 337
            },
            "start": 325,
            "end": 337
          },
          "init": null,
          "definite": false,
          "start": 325,
          "end": 337
        }
      ],
      "declare": true,
      "start": 313,
      "end": 338
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 360,
                "end": 363
              },
              "start": 358,
              "end": 363
            },
            "start": 351,
            "end": 363
          },
          "init": null,
          "definite": false,
          "start": 351,
          "end": 363
        }
      ],
      "declare": true,
      "start": 339,
      "end": 364
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
            "name": "fs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "existsSync",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 387,
                      "end": 397
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 404,
                            "end": 410
                          },
                          "start": 402,
                          "end": 410
                        },
                        "start": 398,
                        "end": 410
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 413,
                        "end": 420
                      },
                      "start": 411,
                      "end": 420
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 387,
                    "end": 421
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "readdirSync",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 426,
                      "end": 437
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 444,
                            "end": 450
                          },
                          "start": 442,
                          "end": 450
                        },
                        "start": 438,
                        "end": 450
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 453,
                          "end": 459
                        },
                        "start": 453,
                        "end": 461
                      },
                      "start": 451,
                      "end": 461
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 426,
                    "end": 462
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "readFileSync",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 467,
                      "end": 479
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "filename",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 490,
                            "end": 496
                          },
                          "start": 488,
                          "end": 496
                        },
                        "start": 480,
                        "end": 496
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "encoding",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 509,
                            "end": 515
                          },
                          "start": 507,
                          "end": 515
                        },
                        "start": 498,
                        "end": 515
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 518,
                        "end": 524
                      },
                      "start": 516,
                      "end": 524
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 467,
                    "end": 525
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "writeFileSync",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 530,
                      "end": 543
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "filename",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 554,
                            "end": 560
                          },
                          "start": 552,
                          "end": 560
                        },
                        "start": 544,
                        "end": 560
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 568,
                            "end": 571
                          },
                          "start": 566,
                          "end": 571
                        },
                        "start": 562,
                        "end": 571
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "encoding",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 585,
                                      "end": 593
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 596,
                                        "end": 602
                                      },
                                      "start": 594,
                                      "end": 602
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 585,
                                    "end": 603
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "mode",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 604,
                                      "end": 608
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 611,
                                        "end": 617
                                      },
                                      "start": 609,
                                      "end": 617
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 604,
                                    "end": 618
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": true,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "flag",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 619,
                                      "end": 623
                                    },
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
                                    "accessibility": null,
                                    "static": false,
                                    "start": 619,
                                    "end": 633
                                  }
                                ],
                                "start": 583,
                                "end": 635
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 638,
                                "end": 644
                              }
                            ],
                            "start": 583,
                            "end": 644
                          },
                          "start": 581,
                          "end": 644
                        },
                        "start": 573,
                        "end": 644
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 647,
                        "end": 651
                      },
                      "start": 645,
                      "end": 651
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 530,
                    "end": 652
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "watchFile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 666
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "filename",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 677,
                            "end": 683
                          },
                          "start": 675,
                          "end": 683
                        },
                        "start": 667,
                        "end": 683
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "persistent",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 696,
                                  "end": 706
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 709,
                                    "end": 716
                                  },
                                  "start": 707,
                                  "end": 716
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 696,
                                "end": 717
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": true,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "interval",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 718,
                                  "end": 726
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 729,
                                    "end": 735
                                  },
                                  "start": 727,
                                  "end": 735
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 718,
                                "end": 736
                              }
                            ],
                            "start": 694,
                            "end": 738
                          },
                          "start": 692,
                          "end": 738
                        },
                        "start": 685,
                        "end": 738
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "listener",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "curr",
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
                                          "name": "mtime",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 759,
                                          "end": 764
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Date",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 766,
                                              "end": 770
                                            },
                                            "typeArguments": null,
                                            "start": 766,
                                            "end": 770
                                          },
                                          "start": 764,
                                          "end": 770
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 759,
                                        "end": 770
                                      }
                                    ],
                                    "start": 757,
                                    "end": 772
                                  },
                                  "start": 755,
                                  "end": 772
                                },
                                "start": 751,
                                "end": 772
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "prev",
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
                                          "name": "mtime",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 782,
                                          "end": 787
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Date",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 789,
                                              "end": 793
                                            },
                                            "typeArguments": null,
                                            "start": 789,
                                            "end": 793
                                          },
                                          "start": 787,
                                          "end": 793
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 782,
                                        "end": 793
                                      }
                                    ],
                                    "start": 780,
                                    "end": 795
                                  },
                                  "start": 778,
                                  "end": 795
                                },
                                "start": 774,
                                "end": 795
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 800,
                                "end": 804
                              },
                              "start": 797,
                              "end": 804
                            },
                            "start": 750,
                            "end": 804
                          },
                          "start": 748,
                          "end": 804
                        },
                        "start": 740,
                        "end": 804
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 807,
                        "end": 811
                      },
                      "start": 805,
                      "end": 811
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 657,
                    "end": 812
                  }
                ],
                "start": 381,
                "end": 814
              },
              "start": 379,
              "end": 814
            },
            "start": 377,
            "end": 814
          },
          "init": null,
          "definite": false,
          "start": 377,
          "end": 814
        }
      ],
      "declare": true,
      "start": 365,
      "end": 815
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
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 834,
                "end": 837
              },
              "start": 832,
              "end": 837
            },
            "start": 828,
            "end": 837
          },
          "init": null,
          "definite": false,
          "start": 828,
          "end": 837
        }
      ],
      "declare": true,
      "start": 816,
      "end": 838
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 852,
            "end": 854
          },
          "start": 847,
          "end": 854
        }
      ],
      "source": {
        "type": "Literal",
        "value": "typescript",
        "raw": "\"typescript\"",
        "start": 860,
        "end": 872
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 840,
      "end": 873
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "watch",
        "optional": false,
        "typeAnnotation": null,
        "start": 884,
        "end": 889
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "rootFileNames",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 905,
                "end": 911
              },
              "start": 905,
              "end": 913
            },
            "start": 903,
            "end": 913
          },
          "start": 890,
          "end": 913
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
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
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 924,
                  "end": 926
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CompilerOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 942
                },
                "start": 924,
                "end": 942
              },
              "typeArguments": null,
              "start": 924,
              "end": 942
            },
            "start": 922,
            "end": 942
          },
          "start": 915,
          "end": 942
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "files",
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
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 963,
                          "end": 965
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MapLike",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 966,
                          "end": 973
                        },
                        "start": 963,
                        "end": 973
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
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
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 976,
                                  "end": 983
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 985,
                                    "end": 991
                                  },
                                  "start": 983,
                                  "end": 991
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 976,
                                "end": 991
                              }
                            ],
                            "start": 974,
                            "end": 993
                          }
                        ],
                        "start": 973,
                        "end": 994
                      },
                      "start": 963,
                      "end": 994
                    },
                    "start": 961,
                    "end": 994
                  },
                  "start": 956,
                  "end": 994
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 997,
                  "end": 999
                },
                "definite": false,
                "start": 956,
                "end": 999
              }
            ],
            "declare": false,
            "start": 950,
            "end": 1000
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rootFileNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1042,
                  "end": 1055
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1056,
                  "end": 1063
                },
                "optional": false,
                "computed": false,
                "start": 1042,
                "end": 1063
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fileName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1064,
                      "end": 1072
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "files",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1086,
                              "end": 1091
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1092,
                              "end": 1100
                            },
                            "optional": false,
                            "computed": true,
                            "start": 1086,
                            "end": 1101
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1106,
                                  "end": 1113
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 1115,
                                  "end": 1116
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1106,
                                "end": 1116
                              }
                            ],
                            "start": 1104,
                            "end": 1118
                          },
                          "start": 1086,
                          "end": 1118
                        },
                        "directive": null,
                        "start": 1086,
                        "end": 1119
                      }
                    ],
                    "start": 1076,
                    "end": 1125
                  },
                  "id": null,
                  "generator": false,
                  "start": 1064,
                  "end": 1125
                }
              ],
              "optional": false,
              "start": 1042,
              "end": 1126
            },
            "directive": null,
            "start": 1042,
            "end": 1127
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
                  "name": "servicesHost",
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
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1238,
                          "end": 1240
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "LanguageServiceHost",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1241,
                          "end": 1260
                        },
                        "start": 1238,
                        "end": 1260
                      },
                      "typeArguments": null,
                      "start": 1238,
                      "end": 1260
                    },
                    "start": 1236,
                    "end": 1260
                  },
                  "start": 1224,
                  "end": 1260
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
                        "name": "getScriptFileNames",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1273,
                        "end": 1291
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "rootFileNames",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1299,
                          "end": 1312
                        },
                        "id": null,
                        "generator": false,
                        "start": 1293,
                        "end": 1312
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1273,
                      "end": 1312
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getScriptVersion",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1322,
                        "end": 1338
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1341,
                            "end": 1349
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "files",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1354,
                              "end": 1359
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1360,
                              "end": 1368
                            },
                            "optional": false,
                            "computed": true,
                            "start": 1354,
                            "end": 1369
                          },
                          "operator": "&&",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "files",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1373,
                                    "end": 1378
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fileName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1379,
                                    "end": 1387
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 1373,
                                  "end": 1388
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1389,
                                  "end": 1396
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1373,
                                "end": 1396
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1397,
                                "end": 1405
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1373,
                              "end": 1405
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1373,
                            "end": 1407
                          },
                          "start": 1354,
                          "end": 1407
                        },
                        "id": null,
                        "generator": false,
                        "start": 1340,
                        "end": 1407
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1322,
                      "end": 1407
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getScriptSnapshot",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1417,
                        "end": 1434
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1437,
                            "end": 1445
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fs",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1469,
                                      "end": 1471
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "existsSync",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1472,
                                      "end": 1482
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1469,
                                    "end": 1482
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "fileName",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1483,
                                      "end": 1491
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1469,
                                  "end": 1492
                                },
                                "prefix": true,
                                "start": 1468,
                                "end": 1492
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1519,
                                      "end": 1528
                                    },
                                    "start": 1512,
                                    "end": 1529
                                  }
                                ],
                                "start": 1494,
                                "end": 1543
                              },
                              "alternate": null,
                              "start": 1464,
                              "end": 1543
                            },
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
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1564,
                                      "end": 1566
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ScriptSnapshot",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1567,
                                      "end": 1581
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1564,
                                    "end": 1581
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fromString",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1582,
                                    "end": 1592
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1564,
                                  "end": 1592
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fs",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1593,
                                            "end": 1595
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "readFileSync",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1596,
                                            "end": 1608
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1593,
                                          "end": 1608
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fileName",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1609,
                                            "end": 1617
                                          }
                                        ],
                                        "optional": false,
                                        "start": 1593,
                                        "end": 1618
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "toString",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1619,
                                        "end": 1627
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1593,
                                      "end": 1627
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 1593,
                                    "end": 1629
                                  }
                                ],
                                "optional": false,
                                "start": 1564,
                                "end": 1630
                              },
                              "start": 1557,
                              "end": 1631
                            }
                          ],
                          "start": 1450,
                          "end": 1641
                        },
                        "id": null,
                        "generator": false,
                        "start": 1436,
                        "end": 1641
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1417,
                      "end": 1641
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getCurrentDirectory",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1651,
                        "end": 1670
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "process",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1678,
                              "end": 1685
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cwd",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1686,
                              "end": 1689
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1678,
                            "end": 1689
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1678,
                          "end": 1691
                        },
                        "id": null,
                        "generator": false,
                        "start": 1672,
                        "end": 1691
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1651,
                      "end": 1691
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getCompilationSettings",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1701,
                        "end": 1723
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1731,
                          "end": 1738
                        },
                        "id": null,
                        "generator": false,
                        "start": 1725,
                        "end": 1738
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1701,
                      "end": 1738
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getDefaultLibFileName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1748,
                        "end": 1769
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1772,
                            "end": 1779
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1784,
                              "end": 1786
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getDefaultLibFilePath",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1787,
                              "end": 1808
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1784,
                            "end": 1808
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "options",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1809,
                              "end": 1816
                            }
                          ],
                          "optional": false,
                          "start": 1784,
                          "end": 1817
                        },
                        "id": null,
                        "generator": false,
                        "start": 1771,
                        "end": 1817
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1748,
                      "end": 1817
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1827,
                        "end": 1837
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1839,
                            "end": 1847
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1851,
                              "end": 1853
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "existsSync",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1854,
                              "end": 1864
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1851,
                            "end": 1864
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1865,
                              "end": 1873
                            }
                          ],
                          "optional": false,
                          "start": 1851,
                          "end": 1874
                        },
                        "id": null,
                        "generator": false,
                        "start": 1839,
                        "end": 1874
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1827,
                      "end": 1874
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "readFile",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1884,
                        "end": 1892
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1894,
                            "end": 1902
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1906,
                              "end": 1908
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "readFileSync",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1909,
                              "end": 1921
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1906,
                            "end": 1921
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1922,
                              "end": 1930
                            }
                          ],
                          "optional": false,
                          "start": 1906,
                          "end": 1931
                        },
                        "id": null,
                        "generator": false,
                        "start": 1894,
                        "end": 1931
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1884,
                      "end": 1931
                    }
                  ],
                  "start": 1263,
                  "end": 1938
                },
                "definite": false,
                "start": 1224,
                "end": 1938
              }
            ],
            "declare": false,
            "start": 1218,
            "end": 1939
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
                  "name": "services",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1992,
                  "end": 2000
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2003,
                      "end": 2005
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createLanguageService",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2006,
                      "end": 2027
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2003,
                    "end": 2027
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "servicesHost",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2028,
                      "end": 2040
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2042,
                          "end": 2044
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createDocumentRegistry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2045,
                          "end": 2067
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2042,
                        "end": 2067
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2042,
                      "end": 2069
                    }
                  ],
                  "optional": false,
                  "start": 2003,
                  "end": 2070
                },
                "definite": false,
                "start": 1992,
                "end": 2070
              }
            ],
            "declare": false,
            "start": 1986,
            "end": 2070
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rootFileNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2109,
                  "end": 2122
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2123,
                  "end": 2130
                },
                "optional": false,
                "computed": false,
                "start": 2109,
                "end": 2130
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fileName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2131,
                      "end": 2139
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "emitFile",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2198,
                            "end": 2206
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2207,
                              "end": 2215
                            }
                          ],
                          "optional": false,
                          "start": 2198,
                          "end": 2216
                        },
                        "directive": null,
                        "start": 2198,
                        "end": 2217
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2284,
                              "end": 2286
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "watchFile",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2287,
                              "end": 2296
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2284,
                            "end": 2296
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2297,
                              "end": 2305
                            },
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "persistent",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2321,
                                    "end": 2331
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 2333,
                                    "end": 2337
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2321,
                                  "end": 2337
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "interval",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2339,
                                    "end": 2347
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 250,
                                    "raw": "250",
                                    "start": 2349,
                                    "end": 2352
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2339,
                                  "end": 2352
                                }
                              ],
                              "start": 2319,
                              "end": 2354
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "curr",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2369,
                                  "end": 2373
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2375,
                                  "end": 2379
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "operator": "+",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "curr",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2442,
                                            "end": 2446
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "mtime",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2447,
                                            "end": 2452
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 2442,
                                          "end": 2452
                                        },
                                        "prefix": true,
                                        "start": 2441,
                                        "end": 2452
                                      },
                                      "operator": "<=",
                                      "right": {
                                        "type": "UnaryExpression",
                                        "operator": "+",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "prev",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2457,
                                            "end": 2461
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "mtime",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2462,
                                            "end": 2467
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 2457,
                                          "end": 2467
                                        },
                                        "prefix": true,
                                        "start": 2456,
                                        "end": 2467
                                      },
                                      "start": 2441,
                                      "end": 2467
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": null,
                                          "start": 2491,
                                          "end": 2498
                                        }
                                      ],
                                      "start": 2469,
                                      "end": 2516
                                    },
                                    "alternate": null,
                                    "start": 2437,
                                    "end": 2516
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "UpdateExpression",
                                      "operator": "++",
                                      "prefix": false,
                                      "argument": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "files",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2603,
                                            "end": 2608
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "fileName",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2609,
                                            "end": 2617
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 2603,
                                          "end": 2618
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "version",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2619,
                                          "end": 2626
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 2603,
                                        "end": 2626
                                      },
                                      "start": 2603,
                                      "end": 2628
                                    },
                                    "directive": null,
                                    "start": 2603,
                                    "end": 2629
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "emitFile",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2692,
                                        "end": 2700
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "fileName",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2701,
                                          "end": 2709
                                        }
                                      ],
                                      "optional": false,
                                      "start": 2692,
                                      "end": 2710
                                    },
                                    "directive": null,
                                    "start": 2692,
                                    "end": 2711
                                  }
                                ],
                                "start": 2384,
                                "end": 2725
                              },
                              "id": null,
                              "generator": false,
                              "start": 2368,
                              "end": 2725
                            }
                          ],
                          "optional": false,
                          "start": 2284,
                          "end": 2726
                        },
                        "directive": null,
                        "start": 2284,
                        "end": 2727
                      }
                    ],
                    "start": 2143,
                    "end": 2733
                  },
                  "id": null,
                  "generator": false,
                  "start": 2131,
                  "end": 2733
                }
              ],
              "optional": false,
              "start": 2109,
              "end": 2734
            },
            "directive": null,
            "start": 2109,
            "end": 2735
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "emitFile",
              "optional": false,
              "typeAnnotation": null,
              "start": 2750,
              "end": 2758
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fileName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2769,
                    "end": 2775
                  },
                  "start": 2767,
                  "end": 2775
                },
                "start": 2759,
                "end": 2775
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2791,
                        "end": 2797
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "services",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2800,
                            "end": 2808
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "getEmitOutput",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2809,
                            "end": 2822
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2800,
                          "end": 2822
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fileName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2823,
                            "end": 2831
                          }
                        ],
                        "optional": false,
                        "start": 2800,
                        "end": 2832
                      },
                      "definite": false,
                      "start": 2791,
                      "end": 2832
                    }
                  ],
                  "declare": false,
                  "start": 2787,
                  "end": 2833
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2848,
                        "end": 2854
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "emitSkipped",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2855,
                        "end": 2866
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2848,
                      "end": 2866
                    },
                    "prefix": true,
                    "start": 2847,
                    "end": 2866
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2882,
                              "end": 2889
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2890,
                              "end": 2893
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2882,
                            "end": 2893
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "Emitting ",
                                    "cooked": "Emitting "
                                  },
                                  "tail": false,
                                  "start": 2894,
                                  "end": 2906
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "",
                                    "cooked": ""
                                  },
                                  "tail": true,
                                  "start": 2914,
                                  "end": 2916
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fileName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2906,
                                  "end": 2914
                                }
                              ],
                              "start": 2894,
                              "end": 2916
                            }
                          ],
                          "optional": false,
                          "start": 2882,
                          "end": 2917
                        },
                        "directive": null,
                        "start": 2882,
                        "end": 2918
                      }
                    ],
                    "start": 2868,
                    "end": 2928
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2956,
                              "end": 2963
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2964,
                              "end": 2967
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2956,
                            "end": 2967
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": "Emitting ",
                                    "cooked": "Emitting "
                                  },
                                  "tail": false,
                                  "start": 2968,
                                  "end": 2980
                                },
                                {
                                  "type": "TemplateElement",
                                  "value": {
                                    "raw": " failed",
                                    "cooked": " failed"
                                  },
                                  "tail": true,
                                  "start": 2988,
                                  "end": 2997
                                }
                              ],
                              "expressions": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "fileName",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2980,
                                  "end": 2988
                                }
                              ],
                              "start": 2968,
                              "end": 2997
                            }
                          ],
                          "optional": false,
                          "start": 2956,
                          "end": 2998
                        },
                        "directive": null,
                        "start": 2956,
                        "end": 2999
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "logErrors",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3012,
                            "end": 3021
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3022,
                              "end": 3030
                            }
                          ],
                          "optional": false,
                          "start": 3012,
                          "end": 3031
                        },
                        "directive": null,
                        "start": 3012,
                        "end": 3032
                      }
                    ],
                    "start": 2942,
                    "end": 3042
                  },
                  "start": 2843,
                  "end": 3042
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3052,
                          "end": 3058
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "outputFiles",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3059,
                          "end": 3070
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3052,
                        "end": 3070
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3071,
                        "end": 3078
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3052,
                      "end": 3078
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "o",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3079,
                            "end": 3080
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fs",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3098,
                                    "end": 3100
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "writeFileSync",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3101,
                                    "end": 3114
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3098,
                                  "end": 3114
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "o",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3115,
                                      "end": 3116
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3117,
                                      "end": 3121
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3115,
                                    "end": 3121
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "o",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3123,
                                      "end": 3124
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "text",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3125,
                                      "end": 3129
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3123,
                                    "end": 3129
                                  },
                                  {
                                    "type": "Literal",
                                    "value": "utf8",
                                    "raw": "\"utf8\"",
                                    "start": 3131,
                                    "end": 3137
                                  }
                                ],
                                "optional": false,
                                "start": 3098,
                                "end": 3138
                              },
                              "directive": null,
                              "start": 3098,
                              "end": 3139
                            }
                          ],
                          "start": 3084,
                          "end": 3149
                        },
                        "id": null,
                        "generator": false,
                        "start": 3079,
                        "end": 3149
                      }
                    ],
                    "optional": false,
                    "start": 3052,
                    "end": 3150
                  },
                  "directive": null,
                  "start": 3052,
                  "end": 3151
                }
              ],
              "start": 2777,
              "end": 3157
            },
            "expression": false,
            "start": 2741,
            "end": 3157
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "logErrors",
              "optional": false,
              "typeAnnotation": null,
              "start": 3172,
              "end": 3181
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fileName",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3192,
                    "end": 3198
                  },
                  "start": 3190,
                  "end": 3198
                },
                "start": 3182,
                "end": 3198
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "allDiagnostics",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3214,
                        "end": 3228
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "services",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3231,
                                    "end": 3239
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getCompilerOptionsDiagnostics",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3240,
                                    "end": 3269
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3231,
                                  "end": 3269
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 3231,
                                "end": 3271
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "concat",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3285,
                                "end": 3291
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3231,
                              "end": 3291
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "services",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3292,
                                    "end": 3300
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getSyntacticDiagnostics",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3301,
                                    "end": 3324
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3292,
                                  "end": 3324
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fileName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3325,
                                    "end": 3333
                                  }
                                ],
                                "optional": false,
                                "start": 3292,
                                "end": 3334
                              }
                            ],
                            "optional": false,
                            "start": 3231,
                            "end": 3335
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "concat",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3349,
                            "end": 3355
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3231,
                          "end": 3355
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "services",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3356,
                                "end": 3364
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getSemanticDiagnostics",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3365,
                                "end": 3387
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3356,
                              "end": 3387
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fileName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3388,
                                "end": 3396
                              }
                            ],
                            "optional": false,
                            "start": 3356,
                            "end": 3397
                          }
                        ],
                        "optional": false,
                        "start": 3231,
                        "end": 3398
                      },
                      "definite": false,
                      "start": 3214,
                      "end": 3398
                    }
                  ],
                  "declare": false,
                  "start": 3210,
                  "end": 3399
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "allDiagnostics",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3409,
                        "end": 3423
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3424,
                        "end": 3431
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3409,
                      "end": 3431
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "diagnostic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3432,
                            "end": 3442
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "kind": "let",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "message",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3464,
                                    "end": 3471
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3474,
                                        "end": 3476
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "flattenDiagnosticMessageText",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3477,
                                        "end": 3505
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3474,
                                      "end": 3505
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "diagnostic",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3506,
                                          "end": 3516
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "messageText",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3517,
                                          "end": 3528
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3506,
                                        "end": 3528
                                      },
                                      {
                                        "type": "Literal",
                                        "value": "\n",
                                        "raw": "\"\\n\"",
                                        "start": 3530,
                                        "end": 3534
                                      }
                                    ],
                                    "optional": false,
                                    "start": 3474,
                                    "end": 3535
                                  },
                                  "definite": false,
                                  "start": 3464,
                                  "end": 3535
                                }
                              ],
                              "declare": false,
                              "start": 3460,
                              "end": 3536
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "diagnostic",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3553,
                                  "end": 3563
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "file",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3564,
                                  "end": 3568
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3553,
                                "end": 3568
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "kind": "let",
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "id": {
                                          "type": "ObjectPattern",
                                          "decorators": [],
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3594,
                                                "end": 3598
                                              },
                                              "value": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3594,
                                                "end": 3598
                                              },
                                              "method": false,
                                              "shorthand": true,
                                              "computed": false,
                                              "optional": false,
                                              "start": 3594,
                                              "end": 3598
                                            },
                                            {
                                              "type": "Property",
                                              "kind": "init",
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3600,
                                                "end": 3609
                                              },
                                              "value": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3600,
                                                "end": 3609
                                              },
                                              "method": false,
                                              "shorthand": true,
                                              "computed": false,
                                              "optional": false,
                                              "start": 3600,
                                              "end": 3609
                                            }
                                          ],
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3592,
                                          "end": 3611
                                        },
                                        "init": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "diagnostic",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3614,
                                                "end": 3624
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "file",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3625,
                                                "end": 3629
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3614,
                                              "end": 3629
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "getLineAndCharacterOfPosition",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3630,
                                              "end": 3659
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 3614,
                                            "end": 3659
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "TSNonNullExpression",
                                              "expression": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "diagnostic",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3660,
                                                  "end": 3670
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "start",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3671,
                                                  "end": 3676
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3660,
                                                "end": 3676
                                              },
                                              "start": 3660,
                                              "end": 3677
                                            }
                                          ],
                                          "optional": false,
                                          "start": 3614,
                                          "end": 3678
                                        },
                                        "definite": false,
                                        "start": 3592,
                                        "end": 3678
                                      }
                                    ],
                                    "declare": false,
                                    "start": 3588,
                                    "end": 3679
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "console",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3696,
                                          "end": 3703
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3704,
                                          "end": 3707
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3696,
                                        "end": 3707
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "TemplateLiteral",
                                          "quasis": [
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "  Error ",
                                                "cooked": "  Error "
                                              },
                                              "tail": false,
                                              "start": 3708,
                                              "end": 3719
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": " (",
                                                "cooked": " ("
                                              },
                                              "tail": false,
                                              "start": 3743,
                                              "end": 3748
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": ",",
                                                "cooked": ","
                                              },
                                              "tail": false,
                                              "start": 3756,
                                              "end": 3760
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "): ",
                                                "cooked": "): "
                                              },
                                              "tail": false,
                                              "start": 3773,
                                              "end": 3779
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "",
                                                "cooked": ""
                                              },
                                              "tail": true,
                                              "start": 3786,
                                              "end": 3788
                                            }
                                          ],
                                          "expressions": [
                                            {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "diagnostic",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3719,
                                                  "end": 3729
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "file",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3730,
                                                  "end": 3734
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 3719,
                                                "end": 3734
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "fileName",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3735,
                                                "end": 3743
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 3719,
                                              "end": 3743
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3748,
                                                "end": 3752
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 3755,
                                                "end": 3756
                                              },
                                              "start": 3748,
                                              "end": 3756
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3760,
                                                "end": 3769
                                              },
                                              "operator": "+",
                                              "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1",
                                                "start": 3772,
                                                "end": 3773
                                              },
                                              "start": 3760,
                                              "end": 3773
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "message",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3779,
                                              "end": 3786
                                            }
                                          ],
                                          "start": 3708,
                                          "end": 3788
                                        }
                                      ],
                                      "optional": false,
                                      "start": 3696,
                                      "end": 3789
                                    },
                                    "directive": null,
                                    "start": 3696,
                                    "end": 3790
                                  }
                                ],
                                "start": 3570,
                                "end": 3804
                              },
                              "alternate": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "console",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3840,
                                          "end": 3847
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3848,
                                          "end": 3851
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3840,
                                        "end": 3851
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "TemplateLiteral",
                                          "quasis": [
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "  Error: ",
                                                "cooked": "  Error: "
                                              },
                                              "tail": false,
                                              "start": 3852,
                                              "end": 3864
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "value": {
                                                "raw": "",
                                                "cooked": ""
                                              },
                                              "tail": true,
                                              "start": 3871,
                                              "end": 3873
                                            }
                                          ],
                                          "expressions": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "message",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3864,
                                              "end": 3871
                                            }
                                          ],
                                          "start": 3852,
                                          "end": 3873
                                        }
                                      ],
                                      "optional": false,
                                      "start": 3840,
                                      "end": 3874
                                    },
                                    "directive": null,
                                    "start": 3840,
                                    "end": 3875
                                  }
                                ],
                                "start": 3822,
                                "end": 3889
                              },
                              "start": 3549,
                              "end": 3889
                            }
                          ],
                          "start": 3446,
                          "end": 3899
                        },
                        "id": null,
                        "generator": false,
                        "start": 3432,
                        "end": 3899
                      }
                    ],
                    "optional": false,
                    "start": 3409,
                    "end": 3900
                  },
                  "directive": null,
                  "start": 3409,
                  "end": 3901
                }
              ],
              "start": 3200,
              "end": 3907
            },
            "expression": false,
            "start": 3163,
            "end": 3907
          }
        ],
        "start": 944,
        "end": 3909
      },
      "expression": false,
      "start": 875,
      "end": 3909
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
            "name": "currentDirectoryFiles",
            "optional": false,
            "typeAnnotation": null,
            "start": 4004,
            "end": 4025
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4028,
                    "end": 4030
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "readdirSync",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4031,
                    "end": 4042
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4028,
                  "end": 4042
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "process",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4043,
                        "end": 4050
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cwd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4051,
                        "end": 4054
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4043,
                      "end": 4054
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4043,
                    "end": 4056
                  }
                ],
                "optional": false,
                "start": 4028,
                "end": 4057
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 4063,
                "end": 4069
              },
              "optional": false,
              "computed": false,
              "start": 4028,
              "end": 4069
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fileName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4070,
                    "end": 4078
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4081,
                        "end": 4089
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4090,
                        "end": 4096
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4081,
                      "end": 4096
                    },
                    "operator": ">=",
                    "right": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 4100,
                      "end": 4101
                    },
                    "start": 4081,
                    "end": 4101
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fileName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4105,
                          "end": 4113
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "substr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4114,
                          "end": 4120
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4105,
                        "end": 4120
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4121,
                              "end": 4129
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4130,
                              "end": 4136
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4121,
                            "end": 4136
                          },
                          "operator": "-",
                          "right": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 4139,
                            "end": 4140
                          },
                          "start": 4121,
                          "end": 4140
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 4142,
                          "end": 4143
                        }
                      ],
                      "optional": false,
                      "start": 4105,
                      "end": 4144
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": ".ts",
                      "raw": "\".ts\"",
                      "start": 4149,
                      "end": 4154
                    },
                    "start": 4105,
                    "end": 4154
                  },
                  "start": 4081,
                  "end": 4154
                },
                "id": null,
                "generator": false,
                "start": 4070,
                "end": 4154
              }
            ],
            "optional": false,
            "start": 4028,
            "end": 4155
          },
          "definite": false,
          "start": 4004,
          "end": 4155
        }
      ],
      "declare": false,
      "start": 3998,
      "end": 4156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "watch",
          "optional": false,
          "typeAnnotation": null,
          "start": 4179,
          "end": 4184
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "currentDirectoryFiles",
            "optional": false,
            "typeAnnotation": null,
            "start": 4185,
            "end": 4206
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4210,
                  "end": 4216
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4218,
                      "end": 4220
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ModuleKind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4221,
                      "end": 4231
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4218,
                    "end": 4231
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CommonJS",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4232,
                    "end": 4240
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4218,
                  "end": 4240
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4210,
                "end": 4240
              }
            ],
            "start": 4208,
            "end": 4242
          }
        ],
        "optional": false,
        "start": 4179,
        "end": 4243
      },
      "directive": null,
      "start": 4179,
      "end": 4244
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 313,
  "end": 4244
}
```
