__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 863,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 863,
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 863,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 301,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 28,
              "end": 301,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 301,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 48,
                    "end": 89,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 53,
                      "decorators": [],
                      "name": "lines",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 55,
                        "end": 65,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 59,
                          "end": 65,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 60,
                              "end": 64,
                              "typeName": {
                                "type": "Identifier",
                                "start": 60,
                                "end": 64,
                                "decorators": [],
                                "name": "Line",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 59,
                          "decorators": [],
                          "name": "List",
                          "optional": false
                        }
                      }
                    },
                    "value": {
                      "type": "CallExpression",
                      "start": 68,
                      "end": 88,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 80,
                        "decorators": [],
                        "name": "ListMakeHead",
                        "optional": false
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 80,
                        "end": 86,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 81,
                            "end": 85,
                            "typeName": {
                              "type": "Identifier",
                              "start": 81,
                              "end": 85,
                              "decorators": [],
                              "name": "Line",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 107,
                    "end": 291,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 114,
                      "decorators": [],
                      "name": "addLine",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 114,
                      "end": 291,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 145,
                        "end": 291,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 172,
                            "end": 200,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 176,
                                "end": 199,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 176,
                                  "end": 186,
                                  "decorators": [],
                                  "name": "line",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 180,
                                    "end": 186,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 182,
                                      "end": 186,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 182,
                                        "end": 186,
                                        "decorators": [],
                                        "name": "Line",
                                        "optional": false
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 189,
                                  "end": 199,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 193,
                                    "end": 197,
                                    "decorators": [],
                                    "name": "Line",
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 213,
                            "end": 250,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 217,
                                "end": 249,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 217,
                                  "end": 226,
                                  "decorators": [],
                                  "name": "lineEntry",
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 229,
                                  "end": 249,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 244,
                                      "end": 248,
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 229,
                                    "end": 243,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 229,
                                      "end": 239,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 229,
                                        "end": 233
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 234,
                                        "end": 239,
                                        "decorators": [],
                                        "name": "lines",
                                        "optional": false
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 240,
                                      "end": 243,
                                      "decorators": [],
                                      "name": "add",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 264,
                            "end": 281,
                            "argument": {
                              "type": "Identifier",
                              "start": 271,
                              "end": 280,
                              "decorators": [],
                              "name": "lineEntry",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 115,
                          "end": 131,
                          "decorators": [],
                          "name": "lineText",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 123,
                            "end": 131,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 125,
                              "end": 131
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 132,
                        "end": 144,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 134,
                          "end": 144,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 138,
                            "end": 144,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 139,
                                "end": 143,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 139,
                                  "end": 143,
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
                            "decorators": [],
                            "name": "List",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 40,
                "decorators": [],
                "name": "Buffer",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 311,
            "end": 398,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 318,
              "end": 398,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 371,
                "end": 398,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 379,
                    "end": 392,
                    "argument": {
                      "type": "Identifier",
                      "start": 386,
                      "end": 391,
                      "decorators": [],
                      "name": "entry",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 327,
                "end": 342,
                "decorators": [],
                "name": "ListRemoveEntry",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 346,
                  "end": 360,
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 351,
                    "end": 360,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 353,
                      "end": 360,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 357,
                        "end": 360,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 358,
                            "end": 359,
                            "typeName": {
                              "type": "Identifier",
                              "start": 358,
                              "end": 359,
                              "decorators": [],
                              "name": "U",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 353,
                        "end": 357,
                        "decorators": [],
                        "name": "List",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 361,
                "end": 370,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 363,
                  "end": 370,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 367,
                    "end": 370,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 368,
                        "end": 369,
                        "typeName": {
                          "type": "Identifier",
                          "start": 368,
                          "end": 369,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 367,
                    "decorators": [],
                    "name": "List",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 342,
                "end": 345,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 343,
                    "end": 344,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 344,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 404,
            "end": 469,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 411,
              "end": 469,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 447,
                "end": 469,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 451,
                    "end": 463,
                    "argument": {
                      "type": "Literal",
                      "start": 458,
                      "end": 462,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 420,
                "end": 432,
                "decorators": [],
                "name": "ListMakeHead",
                "optional": false
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 437,
                "end": 446,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 439,
                  "end": 446,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 443,
                    "end": 446,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 444,
                        "end": 445,
                        "typeName": {
                          "type": "Identifier",
                          "start": 444,
                          "end": 445,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 443,
                    "decorators": [],
                    "name": "List",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 432,
                "end": 435,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 433,
                    "end": 434,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 475,
            "end": 548,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 482,
              "end": 548,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 526,
                "end": 548,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 530,
                    "end": 542,
                    "argument": {
                      "type": "Literal",
                      "start": 537,
                      "end": 541,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 491,
                "end": 504,
                "decorators": [],
                "name": "ListMakeEntry",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 508,
                  "end": 515,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 512,
                    "end": 515,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 514,
                      "end": 515,
                      "typeName": {
                        "type": "Identifier",
                        "start": 514,
                        "end": 515,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 516,
                "end": 525,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 518,
                  "end": 525,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 522,
                    "end": 525,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 523,
                        "end": 524,
                        "typeName": {
                          "type": "Identifier",
                          "start": 523,
                          "end": 524,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 522,
                    "decorators": [],
                    "name": "List",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 504,
                "end": 507,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 505,
                    "end": 506,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 505,
                      "end": 506,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 558,
            "end": 838,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 572,
              "end": 838,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 583,
                  "end": 604,
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 590,
                    "end": 594,
                    "decorators": [],
                    "name": "next",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 594,
                    "end": 603,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 596,
                      "end": 603,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 600,
                        "end": 603,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 601,
                            "end": 602,
                            "typeName": {
                              "type": "Identifier",
                              "start": 601,
                              "end": 602,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 596,
                        "end": 600,
                        "decorators": [],
                        "name": "List",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 615,
                  "end": 723,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 618,
                    "decorators": [],
                    "name": "add",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 618,
                    "end": 723,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 637,
                      "end": 723,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 651,
                          "end": 683,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 651,
                            "end": 682,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 651,
                              "end": 660,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 651,
                                "end": 655
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 656,
                                "end": 660,
                                "decorators": [],
                                "name": "next",
                                "optional": false
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 663,
                              "end": 682,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 677,
                                  "end": 681,
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 663,
                                "end": 676,
                                "decorators": [],
                                "name": "ListMakeEntry",
                                "optional": false
                              },
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 696,
                          "end": 713,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 703,
                            "end": 712,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 703,
                              "end": 707
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 708,
                              "end": 712,
                              "decorators": [],
                              "name": "next",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 619,
                        "end": 626,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 623,
                          "end": 626,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 625,
                            "end": 626,
                            "typeName": {
                              "type": "Identifier",
                              "start": 625,
                              "end": 626,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 627,
                      "end": 636,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 629,
                        "end": 636,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 633,
                          "end": 636,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 634,
                              "end": 635,
                              "typeName": {
                                "type": "Identifier",
                                "start": 634,
                                "end": 635,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 629,
                          "end": 633,
                          "decorators": [],
                          "name": "List",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 733,
                  "end": 826,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 733,
                    "end": 741,
                    "decorators": [],
                    "name": "popEntry",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 741,
                    "end": 826,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 766,
                      "end": 826,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 780,
                          "end": 816,
                          "argument": {
                            "type": "CallExpression",
                            "start": 788,
                            "end": 814,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 804,
                                "end": 813,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 804,
                                  "end": 808
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 809,
                                  "end": 813,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 788,
                              "end": 803,
                              "decorators": [],
                              "name": "ListRemoveEntry",
                              "optional": false
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 742,
                        "end": 755,
                        "decorators": [],
                        "name": "head",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 746,
                          "end": 755,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 748,
                            "end": 755,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 752,
                              "end": 755,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 753,
                                  "end": 754,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 753,
                                    "end": 754,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 748,
                              "end": 752,
                              "decorators": [],
                              "name": "List",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 756,
                      "end": 765,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 758,
                        "end": 765,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 762,
                          "end": 765,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 763,
                              "end": 764,
                              "typeName": {
                                "type": "Identifier",
                                "start": 763,
                                "end": 764,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 758,
                          "end": 762,
                          "decorators": [],
                          "name": "List",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 564,
              "end": 568,
              "decorators": [],
              "name": "List",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 568,
              "end": 571,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 569,
                  "end": 570,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 570,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 841,
            "end": 861,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 848,
              "end": 861,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 859,
                "end": 861,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 854,
                "end": 858,
                "decorators": [],
                "name": "Line",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "start": 7,
        "end": 13,
        "decorators": [],
        "name": "Editor",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
