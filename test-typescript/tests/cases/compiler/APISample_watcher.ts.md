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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 337,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 339,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 363,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 815,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 814,
          "definite": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 387,
                      "end": 397,
                      "decorators": [],
                      "name": "existsSync",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
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
                    "readonly": false,
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
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 426,
                    "end": 462,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 426,
                      "end": 437,
                      "decorators": [],
                      "name": "readdirSync",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
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
                    "readonly": false,
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
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 467,
                    "end": 525,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 467,
                      "end": 479,
                      "decorators": [],
                      "name": "readFileSync",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
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
                    "readonly": false,
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
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 530,
                    "end": 652,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 543,
                      "decorators": [],
                      "name": "writeFileSync",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
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
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 585,
                                      "end": 593,
                                      "decorators": [],
                                      "name": "encoding",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": true,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 594,
                                      "end": 602,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 596,
                                        "end": 602
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 604,
                                    "end": 618,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 604,
                                      "end": 608,
                                      "decorators": [],
                                      "name": "mode",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": true,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 609,
                                      "end": 617,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 611,
                                        "end": 617
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 619,
                                    "end": 633,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 619,
                                      "end": 623,
                                      "decorators": [],
                                      "name": "flag",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": true,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 624,
                                      "end": 632,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 626,
                                        "end": 632
                                      }
                                    }
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
                    "readonly": false,
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
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 657,
                    "end": 812,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 666,
                      "decorators": [],
                      "name": "watchFile",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
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
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 696,
                                  "end": 706,
                                  "decorators": [],
                                  "name": "persistent",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": true,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 707,
                                  "end": 716,
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 709,
                                    "end": 716
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 718,
                                "end": 736,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 718,
                                  "end": 726,
                                  "decorators": [],
                                  "name": "interval",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": true,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 727,
                                  "end": 735,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 729,
                                    "end": 735
                                  }
                                }
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
                                        "accessibility": null,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 759,
                                          "end": 764,
                                          "decorators": [],
                                          "name": "mtime",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 764,
                                          "end": 770,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 766,
                                            "end": 770,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 766,
                                              "end": 770,
                                              "decorators": [],
                                              "name": "Date",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        }
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
                                        "accessibility": null,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 782,
                                          "end": 787,
                                          "decorators": [],
                                          "name": "mtime",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "readonly": false,
                                        "static": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 787,
                                          "end": 793,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 789,
                                            "end": 793,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 789,
                                              "end": 793,
                                              "decorators": [],
                                              "name": "Date",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        }
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
                            },
                            "typeParameters": null
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 816,
      "end": 838,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 828,
          "end": 837,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ImportDeclaration",
      "start": 840,
      "end": 873,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 860,
        "end": 872,
        "raw": "\"typescript\"",
        "value": "typescript",
        "regex": null,
        "bigint": null
      },
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
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 875,
      "end": 3909,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 944,
        "end": 3909,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 950,
            "end": 1000,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 956,
                "end": 999,
                "definite": false,
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
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 976,
                                  "end": 983,
                                  "decorators": [],
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 983,
                                  "end": 991,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 985,
                                    "end": 991
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
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
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 997,
                  "end": 999,
                  "properties": []
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 1042,
            "end": 1127,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1042,
              "end": 1126,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1064,
                  "end": 1125,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1076,
                    "end": 1125,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1086,
                        "end": 1119,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1086,
                          "end": 1118,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1086,
                            "end": 1101,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 1086,
                              "end": 1091,
                              "decorators": [],
                              "name": "files",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1092,
                              "end": 1100,
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null
                            }
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
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1106,
                                  "end": 1113,
                                  "decorators": [],
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 1115,
                                  "end": 1116,
                                  "raw": "0",
                                  "value": 0,
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ]
                          }
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
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
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1042,
                "end": 1063,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1042,
                  "end": 1055,
                  "decorators": [],
                  "name": "rootFileNames",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1056,
                  "end": 1063,
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1218,
            "end": 1939,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1224,
                "end": 1938,
                "definite": false,
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
                      "typeArguments": null,
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
                      }
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1273,
                        "end": 1291,
                        "decorators": [],
                        "name": "getScriptFileNames",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1293,
                        "end": 1312,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 1299,
                          "end": 1312,
                          "decorators": [],
                          "name": "rootFileNames",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1322,
                      "end": 1407,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1322,
                        "end": 1338,
                        "decorators": [],
                        "name": "getScriptVersion",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1340,
                        "end": 1407,
                        "async": false,
                        "body": {
                          "type": "LogicalExpression",
                          "start": 1354,
                          "end": 1407,
                          "operator": "&&",
                          "left": {
                            "type": "MemberExpression",
                            "start": 1354,
                            "end": 1369,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 1354,
                              "end": 1359,
                              "decorators": [],
                              "name": "files",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1360,
                              "end": 1368,
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 1373,
                            "end": 1407,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1373,
                              "end": 1405,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1373,
                                "end": 1396,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1373,
                                  "end": 1388,
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1373,
                                    "end": 1378,
                                    "decorators": [],
                                    "name": "files",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1379,
                                    "end": 1387,
                                    "decorators": [],
                                    "name": "fileName",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1389,
                                  "end": 1396,
                                  "decorators": [],
                                  "name": "version",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1397,
                                "end": 1405,
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
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
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1417,
                      "end": 1641,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1417,
                        "end": 1434,
                        "decorators": [],
                        "name": "getScriptSnapshot",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1436,
                        "end": 1641,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1450,
                          "end": 1641,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 1464,
                              "end": 1543,
                              "alternate": null,
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
                              "test": {
                                "type": "UnaryExpression",
                                "start": 1468,
                                "end": 1492,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 1469,
                                  "end": 1492,
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
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1469,
                                    "end": 1482,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1469,
                                      "end": 1471,
                                      "decorators": [],
                                      "name": "fs",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1472,
                                      "end": 1482,
                                      "decorators": [],
                                      "name": "existsSync",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "operator": "!",
                                "prefix": true
                              }
                            },
                            {
                              "type": "ReturnStatement",
                              "start": 1557,
                              "end": 1631,
                              "argument": {
                                "type": "CallExpression",
                                "start": 1564,
                                "end": 1630,
                                "arguments": [
                                  {
                                    "type": "CallExpression",
                                    "start": 1593,
                                    "end": 1629,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1593,
                                      "end": 1627,
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 1593,
                                        "end": 1618,
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
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 1593,
                                          "end": 1608,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1593,
                                            "end": 1595,
                                            "decorators": [],
                                            "name": "fs",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1596,
                                            "end": 1608,
                                            "decorators": [],
                                            "name": "readFileSync",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1619,
                                        "end": 1627,
                                        "decorators": [],
                                        "name": "toString",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 1564,
                                  "end": 1592,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 1564,
                                    "end": 1581,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1564,
                                      "end": 1566,
                                      "decorators": [],
                                      "name": "ts",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1567,
                                      "end": 1581,
                                      "decorators": [],
                                      "name": "ScriptSnapshot",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1582,
                                    "end": 1592,
                                    "decorators": [],
                                    "name": "fromString",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
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
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1651,
                      "end": 1691,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1651,
                        "end": 1670,
                        "decorators": [],
                        "name": "getCurrentDirectory",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1672,
                        "end": 1691,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 1678,
                          "end": 1691,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1678,
                            "end": 1689,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1678,
                              "end": 1685,
                              "decorators": [],
                              "name": "process",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1686,
                              "end": 1689,
                              "decorators": [],
                              "name": "cwd",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1701,
                      "end": 1738,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1701,
                        "end": 1723,
                        "decorators": [],
                        "name": "getCompilationSettings",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1725,
                        "end": 1738,
                        "async": false,
                        "body": {
                          "type": "Identifier",
                          "start": 1731,
                          "end": 1738,
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1748,
                      "end": 1817,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1748,
                        "end": 1769,
                        "decorators": [],
                        "name": "getDefaultLibFileName",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1771,
                        "end": 1817,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 1784,
                          "end": 1817,
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1784,
                            "end": 1808,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1784,
                              "end": 1786,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1787,
                              "end": 1808,
                              "decorators": [],
                              "name": "getDefaultLibFilePath",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
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
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1827,
                      "end": 1874,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1827,
                        "end": 1837,
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1839,
                        "end": 1874,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 1851,
                          "end": 1874,
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1851,
                            "end": 1864,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1851,
                              "end": 1853,
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1854,
                              "end": 1864,
                              "decorators": [],
                              "name": "existsSync",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
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
                        "typeParameters": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1884,
                      "end": 1931,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1884,
                        "end": 1892,
                        "decorators": [],
                        "name": "readFile",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 1894,
                        "end": 1931,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 1906,
                          "end": 1931,
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1906,
                            "end": 1921,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1906,
                              "end": 1908,
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1909,
                              "end": 1921,
                              "decorators": [],
                              "name": "readFileSync",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
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
                        "typeParameters": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 1986,
            "end": 2070,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1992,
                "end": 2070,
                "definite": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2042,
                        "end": 2067,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2042,
                          "end": 2044,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2045,
                          "end": 2067,
                          "decorators": [],
                          "name": "createDocumentRegistry",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 2003,
                    "end": 2027,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2003,
                      "end": 2005,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2006,
                      "end": 2027,
                      "decorators": [],
                      "name": "createLanguageService",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 2109,
            "end": 2735,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 2109,
              "end": 2734,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 2131,
                  "end": 2733,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2143,
                    "end": 2733,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2198,
                        "end": 2217,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2198,
                          "end": 2216,
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
                          "callee": {
                            "type": "Identifier",
                            "start": 2198,
                            "end": 2206,
                            "decorators": [],
                            "name": "emitFile",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2284,
                        "end": 2727,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2284,
                          "end": 2726,
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
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 2321,
                                    "end": 2331,
                                    "decorators": [],
                                    "name": "persistent",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 2333,
                                    "end": 2337,
                                    "raw": "true",
                                    "value": true,
                                    "regex": null,
                                    "bigint": null
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 2339,
                                  "end": 2352,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 2339,
                                    "end": 2347,
                                    "decorators": [],
                                    "name": "interval",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 2349,
                                    "end": 2352,
                                    "raw": "250",
                                    "value": 250,
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 2368,
                              "end": 2725,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 2384,
                                "end": 2725,
                                "body": [
                                  {
                                    "type": "IfStatement",
                                    "start": 2437,
                                    "end": 2516,
                                    "alternate": null,
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
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 2441,
                                      "end": 2467,
                                      "operator": "<=",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "start": 2441,
                                        "end": 2452,
                                        "argument": {
                                          "type": "MemberExpression",
                                          "start": 2442,
                                          "end": 2452,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 2442,
                                            "end": 2446,
                                            "decorators": [],
                                            "name": "curr",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 2447,
                                            "end": 2452,
                                            "decorators": [],
                                            "name": "mtime",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "operator": "+",
                                        "prefix": true
                                      },
                                      "right": {
                                        "type": "UnaryExpression",
                                        "start": 2456,
                                        "end": 2467,
                                        "argument": {
                                          "type": "MemberExpression",
                                          "start": 2457,
                                          "end": 2467,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 2457,
                                            "end": 2461,
                                            "decorators": [],
                                            "name": "prev",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 2462,
                                            "end": 2467,
                                            "decorators": [],
                                            "name": "mtime",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "operator": "+",
                                        "prefix": true
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 2603,
                                    "end": 2629,
                                    "directive": null,
                                    "expression": {
                                      "type": "UpdateExpression",
                                      "start": 2603,
                                      "end": 2628,
                                      "argument": {
                                        "type": "MemberExpression",
                                        "start": 2603,
                                        "end": 2626,
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 2603,
                                          "end": 2618,
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 2603,
                                            "end": 2608,
                                            "decorators": [],
                                            "name": "files",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 2609,
                                            "end": 2617,
                                            "decorators": [],
                                            "name": "fileName",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 2619,
                                          "end": 2626,
                                          "decorators": [],
                                          "name": "version",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "operator": "++",
                                      "prefix": false
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 2692,
                                    "end": 2711,
                                    "directive": null,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 2692,
                                      "end": 2710,
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
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 2692,
                                        "end": 2700,
                                        "decorators": [],
                                        "name": "emitFile",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
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
                              "typeParameters": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2284,
                            "end": 2296,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 2284,
                              "end": 2286,
                              "decorators": [],
                              "name": "fs",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2287,
                              "end": 2296,
                              "decorators": [],
                              "name": "watchFile",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
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
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 2109,
                "end": 2130,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 2109,
                  "end": 2122,
                  "decorators": [],
                  "name": "rootFileNames",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 2123,
                  "end": 2130,
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 2741,
            "end": 3157,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2777,
              "end": 3157,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2787,
                  "end": 2833,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2791,
                      "end": 2832,
                      "definite": false,
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 2800,
                          "end": 2822,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 2800,
                            "end": 2808,
                            "decorators": [],
                            "name": "services",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 2809,
                            "end": 2822,
                            "decorators": [],
                            "name": "getEmitOutput",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "IfStatement",
                  "start": 2843,
                  "end": 3042,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 2942,
                    "end": 3042,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2956,
                        "end": 2999,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2956,
                          "end": 2998,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "start": 2968,
                              "end": 2997,
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
                              ],
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "start": 2968,
                                  "end": 2980,
                                  "tail": false,
                                  "value": {
                                    "cooked": "Emitting ",
                                    "raw": "Emitting "
                                  }
                                },
                                {
                                  "type": "TemplateElement",
                                  "start": 2988,
                                  "end": 2997,
                                  "tail": true,
                                  "value": {
                                    "cooked": " failed",
                                    "raw": " failed"
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2956,
                            "end": 2967,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 2956,
                              "end": 2963,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2964,
                              "end": 2967,
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 3012,
                        "end": 3032,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 3012,
                          "end": 3031,
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
                          "callee": {
                            "type": "Identifier",
                            "start": 3012,
                            "end": 3021,
                            "decorators": [],
                            "name": "logErrors",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
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
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2882,
                          "end": 2917,
                          "arguments": [
                            {
                              "type": "TemplateLiteral",
                              "start": 2894,
                              "end": 2916,
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
                              ],
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "start": 2894,
                                  "end": 2906,
                                  "tail": false,
                                  "value": {
                                    "cooked": "Emitting ",
                                    "raw": "Emitting "
                                  }
                                },
                                {
                                  "type": "TemplateElement",
                                  "start": 2914,
                                  "end": 2916,
                                  "tail": true,
                                  "value": {
                                    "cooked": "",
                                    "raw": ""
                                  }
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 2882,
                            "end": 2893,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 2882,
                              "end": 2889,
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 2890,
                              "end": 2893,
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 2847,
                    "end": 2866,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 2848,
                      "end": 2866,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2848,
                        "end": 2854,
                        "decorators": [],
                        "name": "output",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2855,
                        "end": 2866,
                        "decorators": [],
                        "name": "emitSkipped",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "!",
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3052,
                  "end": 3151,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 3052,
                    "end": 3150,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 3079,
                        "end": 3149,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 3084,
                          "end": 3149,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 3098,
                              "end": 3139,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 3098,
                                "end": 3138,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 3115,
                                    "end": 3121,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3115,
                                      "end": 3116,
                                      "decorators": [],
                                      "name": "o",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3117,
                                      "end": 3121,
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "start": 3123,
                                    "end": 3129,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 3123,
                                      "end": 3124,
                                      "decorators": [],
                                      "name": "o",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 3125,
                                      "end": 3129,
                                      "decorators": [],
                                      "name": "text",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  {
                                    "type": "Literal",
                                    "start": 3131,
                                    "end": 3137,
                                    "raw": "\"utf8\"",
                                    "value": "utf8",
                                    "regex": null,
                                    "bigint": null
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3098,
                                  "end": 3114,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3098,
                                    "end": 3100,
                                    "decorators": [],
                                    "name": "fs",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3101,
                                    "end": 3114,
                                    "decorators": [],
                                    "name": "writeFileSync",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
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
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3052,
                      "end": 3078,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 3052,
                        "end": 3070,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 3052,
                          "end": 3058,
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 3059,
                          "end": 3070,
                          "decorators": [],
                          "name": "outputFiles",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3071,
                        "end": 3078,
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 2750,
              "end": 2758,
              "decorators": [],
              "name": "emitFile",
              "optional": false,
              "typeAnnotation": null
            },
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
            "typeParameters": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 3163,
            "end": 3907,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 3200,
              "end": 3907,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3210,
                  "end": 3399,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3214,
                      "end": 3398,
                      "definite": false,
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
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 3356,
                            "end": 3397,
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
                            "callee": {
                              "type": "MemberExpression",
                              "start": 3356,
                              "end": 3387,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 3356,
                                "end": 3364,
                                "decorators": [],
                                "name": "services",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 3365,
                                "end": 3387,
                                "decorators": [],
                                "name": "getSemanticDiagnostics",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 3231,
                          "end": 3355,
                          "computed": false,
                          "object": {
                            "type": "CallExpression",
                            "start": 3231,
                            "end": 3335,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 3292,
                                "end": 3334,
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
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3292,
                                  "end": 3324,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3292,
                                    "end": 3300,
                                    "decorators": [],
                                    "name": "services",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3301,
                                    "end": 3324,
                                    "decorators": [],
                                    "name": "getSyntacticDiagnostics",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 3231,
                              "end": 3291,
                              "computed": false,
                              "object": {
                                "type": "CallExpression",
                                "start": 3231,
                                "end": 3271,
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 3231,
                                  "end": 3269,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 3231,
                                    "end": 3239,
                                    "decorators": [],
                                    "name": "services",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 3240,
                                    "end": 3269,
                                    "decorators": [],
                                    "name": "getCompilerOptionsDiagnostics",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 3285,
                                "end": 3291,
                                "decorators": [],
                                "name": "concat",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 3349,
                            "end": 3355,
                            "decorators": [],
                            "name": "concat",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3409,
                  "end": 3901,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 3409,
                    "end": 3900,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 3432,
                        "end": 3899,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 3446,
                          "end": 3899,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 3460,
                              "end": 3536,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 3464,
                                  "end": 3535,
                                  "definite": false,
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
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 3506,
                                        "end": 3528,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3506,
                                          "end": 3516,
                                          "decorators": [],
                                          "name": "diagnostic",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3517,
                                          "end": 3528,
                                          "decorators": [],
                                          "name": "messageText",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Literal",
                                        "start": 3530,
                                        "end": 3534,
                                        "raw": "\"\\n\"",
                                        "value": "\n",
                                        "regex": null,
                                        "bigint": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 3474,
                                      "end": 3505,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 3474,
                                        "end": 3476,
                                        "decorators": [],
                                        "name": "ts",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 3477,
                                        "end": 3505,
                                        "decorators": [],
                                        "name": "flattenDiagnosticMessageText",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "let"
                            },
                            {
                              "type": "IfStatement",
                              "start": 3549,
                              "end": 3889,
                              "alternate": {
                                "type": "BlockStatement",
                                "start": 3822,
                                "end": 3889,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 3840,
                                    "end": 3875,
                                    "directive": null,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 3840,
                                      "end": 3874,
                                      "arguments": [
                                        {
                                          "type": "TemplateLiteral",
                                          "start": 3852,
                                          "end": 3873,
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
                                          ],
                                          "quasis": [
                                            {
                                              "type": "TemplateElement",
                                              "start": 3852,
                                              "end": 3864,
                                              "tail": false,
                                              "value": {
                                                "cooked": "  Error: ",
                                                "raw": "  Error: "
                                              }
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "start": 3871,
                                              "end": 3873,
                                              "tail": true,
                                              "value": {
                                                "cooked": "",
                                                "raw": ""
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 3840,
                                        "end": 3851,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3840,
                                          "end": 3847,
                                          "decorators": [],
                                          "name": "console",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3848,
                                          "end": 3851,
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
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
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 3592,
                                        "end": 3678,
                                        "definite": false,
                                        "id": {
                                          "type": "ObjectPattern",
                                          "start": 3592,
                                          "end": 3611,
                                          "decorators": [],
                                          "optional": false,
                                          "properties": [
                                            {
                                              "type": "Property",
                                              "start": 3594,
                                              "end": 3598,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 3594,
                                                "end": 3598,
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "kind": "init",
                                              "method": false,
                                              "optional": false,
                                              "shorthand": true,
                                              "value": {
                                                "type": "Identifier",
                                                "start": 3594,
                                                "end": 3598,
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            },
                                            {
                                              "type": "Property",
                                              "start": 3600,
                                              "end": 3609,
                                              "computed": false,
                                              "key": {
                                                "type": "Identifier",
                                                "start": 3600,
                                                "end": 3609,
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "kind": "init",
                                              "method": false,
                                              "optional": false,
                                              "shorthand": true,
                                              "value": {
                                                "type": "Identifier",
                                                "start": 3600,
                                                "end": 3609,
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          ],
                                          "typeAnnotation": null
                                        },
                                        "init": {
                                          "type": "CallExpression",
                                          "start": 3614,
                                          "end": 3678,
                                          "arguments": [
                                            {
                                              "type": "TSNonNullExpression",
                                              "start": 3660,
                                              "end": 3677,
                                              "expression": {
                                                "type": "MemberExpression",
                                                "start": 3660,
                                                "end": 3676,
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 3660,
                                                  "end": 3670,
                                                  "decorators": [],
                                                  "name": "diagnostic",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 3671,
                                                  "end": 3676,
                                                  "decorators": [],
                                                  "name": "start",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 3614,
                                            "end": 3659,
                                            "computed": false,
                                            "object": {
                                              "type": "MemberExpression",
                                              "start": 3614,
                                              "end": 3629,
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 3614,
                                                "end": 3624,
                                                "decorators": [],
                                                "name": "diagnostic",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "start": 3625,
                                                "end": 3629,
                                                "decorators": [],
                                                "name": "file",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 3630,
                                              "end": 3659,
                                              "decorators": [],
                                              "name": "getLineAndCharacterOfPosition",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          },
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      }
                                    ],
                                    "declare": false,
                                    "kind": "let"
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 3696,
                                    "end": 3790,
                                    "directive": null,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 3696,
                                      "end": 3789,
                                      "arguments": [
                                        {
                                          "type": "TemplateLiteral",
                                          "start": 3708,
                                          "end": 3788,
                                          "expressions": [
                                            {
                                              "type": "MemberExpression",
                                              "start": 3719,
                                              "end": 3743,
                                              "computed": false,
                                              "object": {
                                                "type": "MemberExpression",
                                                "start": 3719,
                                                "end": 3734,
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "start": 3719,
                                                  "end": 3729,
                                                  "decorators": [],
                                                  "name": "diagnostic",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "start": 3730,
                                                  "end": 3734,
                                                  "decorators": [],
                                                  "name": "file",
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "start": 3735,
                                                "end": 3743,
                                                "decorators": [],
                                                "name": "fileName",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "start": 3748,
                                              "end": 3756,
                                              "operator": "+",
                                              "left": {
                                                "type": "Identifier",
                                                "start": 3748,
                                                "end": 3752,
                                                "decorators": [],
                                                "name": "line",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "start": 3755,
                                                "end": 3756,
                                                "raw": "1",
                                                "value": 1,
                                                "regex": null,
                                                "bigint": null
                                              }
                                            },
                                            {
                                              "type": "BinaryExpression",
                                              "start": 3760,
                                              "end": 3773,
                                              "operator": "+",
                                              "left": {
                                                "type": "Identifier",
                                                "start": 3760,
                                                "end": 3769,
                                                "decorators": [],
                                                "name": "character",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "right": {
                                                "type": "Literal",
                                                "start": 3772,
                                                "end": 3773,
                                                "raw": "1",
                                                "value": 1,
                                                "regex": null,
                                                "bigint": null
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
                                          ],
                                          "quasis": [
                                            {
                                              "type": "TemplateElement",
                                              "start": 3708,
                                              "end": 3719,
                                              "tail": false,
                                              "value": {
                                                "cooked": "  Error ",
                                                "raw": "  Error "
                                              }
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "start": 3743,
                                              "end": 3748,
                                              "tail": false,
                                              "value": {
                                                "cooked": " (",
                                                "raw": " ("
                                              }
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "start": 3756,
                                              "end": 3760,
                                              "tail": false,
                                              "value": {
                                                "cooked": ",",
                                                "raw": ","
                                              }
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "start": 3773,
                                              "end": 3779,
                                              "tail": false,
                                              "value": {
                                                "cooked": "): ",
                                                "raw": "): "
                                              }
                                            },
                                            {
                                              "type": "TemplateElement",
                                              "start": 3786,
                                              "end": 3788,
                                              "tail": true,
                                              "value": {
                                                "cooked": "",
                                                "raw": ""
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 3696,
                                        "end": 3707,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3696,
                                          "end": 3703,
                                          "decorators": [],
                                          "name": "console",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3704,
                                          "end": 3707,
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              },
                              "test": {
                                "type": "MemberExpression",
                                "start": 3553,
                                "end": 3568,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3553,
                                  "end": 3563,
                                  "decorators": [],
                                  "name": "diagnostic",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3564,
                                  "end": 3568,
                                  "decorators": [],
                                  "name": "file",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
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
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 3409,
                      "end": 3431,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3409,
                        "end": 3423,
                        "decorators": [],
                        "name": "allDiagnostics",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3424,
                        "end": 3431,
                        "decorators": [],
                        "name": "forEach",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 3172,
              "end": 3181,
              "decorators": [],
              "name": "logErrors",
              "optional": false,
              "typeAnnotation": null
            },
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
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 884,
        "end": 889,
        "decorators": [],
        "name": "watch",
        "optional": false,
        "typeAnnotation": null
      },
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
              "typeArguments": null,
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
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3998,
      "end": 4156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4004,
          "end": 4155,
          "definite": false,
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
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 4070,
                "end": 4154,
                "async": false,
                "body": {
                  "type": "LogicalExpression",
                  "start": 4081,
                  "end": 4154,
                  "operator": "&&",
                  "left": {
                    "type": "BinaryExpression",
                    "start": 4081,
                    "end": 4101,
                    "operator": ">=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4081,
                      "end": 4096,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4081,
                        "end": 4089,
                        "decorators": [],
                        "name": "fileName",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4090,
                        "end": 4096,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4100,
                      "end": 4101,
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 4105,
                    "end": 4154,
                    "operator": "===",
                    "left": {
                      "type": "CallExpression",
                      "start": 4105,
                      "end": 4144,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 4121,
                          "end": 4140,
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "start": 4121,
                            "end": 4136,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 4121,
                              "end": 4129,
                              "decorators": [],
                              "name": "fileName",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 4130,
                              "end": 4136,
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 4139,
                            "end": 4140,
                            "raw": "3",
                            "value": 3,
                            "regex": null,
                            "bigint": null
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 4142,
                          "end": 4143,
                          "raw": "3",
                          "value": 3,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4105,
                        "end": 4120,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 4105,
                          "end": 4113,
                          "decorators": [],
                          "name": "fileName",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4114,
                          "end": 4120,
                          "decorators": [],
                          "name": "substr",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4149,
                      "end": 4154,
                      "raw": "\".ts\"",
                      "value": ".ts",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
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
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 4028,
              "end": 4069,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 4028,
                "end": 4057,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 4043,
                    "end": 4056,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4043,
                      "end": 4054,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4043,
                        "end": 4050,
                        "decorators": [],
                        "name": "process",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4051,
                        "end": 4054,
                        "decorators": [],
                        "name": "cwd",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 4028,
                  "end": 4042,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4028,
                    "end": 4030,
                    "decorators": [],
                    "name": "fs",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 4031,
                    "end": 4042,
                    "decorators": [],
                    "name": "readdirSync",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4063,
                "end": 4069,
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 4179,
      "end": 4244,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 4179,
        "end": 4243,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4210,
                  "end": 4216,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 4218,
                  "end": 4240,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 4218,
                    "end": 4231,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4218,
                      "end": 4220,
                      "decorators": [],
                      "name": "ts",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4221,
                      "end": 4231,
                      "decorators": [],
                      "name": "ModuleKind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 4232,
                    "end": 4240,
                    "decorators": [],
                    "name": "CommonJS",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 4179,
          "end": 4184,
          "decorators": [],
          "name": "watch",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
