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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 13,
        "name": "Editor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 863,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 301,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 28,
              "end": 301,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 40,
                "name": "Buffer",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 41,
                "end": 301,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 48,
                    "end": 89,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 53,
                      "name": "lines",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "CallExpression",
                      "start": 68,
                      "end": 88,
                      "callee": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 80,
                        "name": "ListMakeHead",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
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
                              "name": "Line",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 55,
                        "end": 65,
                        "typeName": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 59,
                          "name": "List",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "name": "Line",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 107,
                    "end": 291,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 114,
                      "name": "addLine",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 114,
                      "end": 291,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 115,
                          "end": 131,
                          "name": "lineText",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 123,
                            "end": 131,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 125,
                              "end": 131
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 176,
                                  "end": 186,
                                  "name": "line",
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
                                        "name": "Line",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeArguments": null
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 189,
                                  "end": 199,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 193,
                                    "end": 197,
                                    "name": "Line",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "typeArguments": null
                                },
                                "definite": false
                              }
                            ],
                            "kind": "var",
                            "declare": false
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 217,
                                  "end": 226,
                                  "name": "lineEntry",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 229,
                                  "end": 249,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 229,
                                    "end": 243,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 229,
                                      "end": 239,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 229,
                                        "end": 233
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 234,
                                        "end": 239,
                                        "name": "lines",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 240,
                                      "end": 243,
                                      "name": "add",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 244,
                                      "end": 248,
                                      "name": "line",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "definite": false
                              }
                            ],
                            "kind": "var",
                            "declare": false
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 264,
                            "end": 281,
                            "argument": {
                              "type": "Identifier",
                              "start": 271,
                              "end": 280,
                              "name": "lineEntry",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 132,
                        "end": 144,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 134,
                          "end": 144,
                          "typeName": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 138,
                            "name": "List",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                  "name": "Line",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 311,
            "end": 398,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 318,
              "end": 398,
              "id": {
                "type": "Identifier",
                "start": 327,
                "end": 342,
                "name": "ListRemoveEntry",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 346,
                  "end": 360,
                  "name": "entry",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 351,
                    "end": 360,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 353,
                      "end": 360,
                      "typeName": {
                        "type": "Identifier",
                        "start": 353,
                        "end": 357,
                        "name": "List",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "name": "entry",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 342,
                "end": 345,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 343,
                    "end": 344,
                    "name": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 344,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 361,
                "end": 370,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 363,
                  "end": 370,
                  "typeName": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 367,
                    "name": "List",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 404,
            "end": 469,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 411,
              "end": 469,
              "id": {
                "type": "Identifier",
                "start": 420,
                "end": 432,
                "name": "ListMakeHead",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 432,
                "end": 435,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 433,
                    "end": 434,
                    "name": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 437,
                "end": 446,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 439,
                  "end": 446,
                  "typeName": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 443,
                    "name": "List",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 475,
            "end": 548,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 482,
              "end": 548,
              "id": {
                "type": "Identifier",
                "start": 491,
                "end": 504,
                "name": "ListMakeEntry",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 508,
                  "end": 515,
                  "name": "data",
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
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 504,
                "end": 507,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 505,
                    "end": 506,
                    "name": {
                      "type": "Identifier",
                      "start": 505,
                      "end": 506,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 516,
                "end": 525,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 518,
                  "end": 525,
                  "typeName": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 522,
                    "name": "List",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 558,
            "end": 838,
            "id": {
              "type": "Identifier",
              "start": 564,
              "end": 568,
              "name": "List",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 572,
              "end": 838,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 583,
                  "end": 604,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 590,
                    "end": 594,
                    "name": "next",
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
                    "start": 594,
                    "end": 603,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 596,
                      "end": 603,
                      "typeName": {
                        "type": "Identifier",
                        "start": 596,
                        "end": 600,
                        "name": "List",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 615,
                  "end": 723,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 618,
                    "name": "add",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 618,
                    "end": 723,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 619,
                        "end": 626,
                        "name": "data",
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                              "object": {
                                "type": "ThisExpression",
                                "start": 651,
                                "end": 655
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 656,
                                "end": 660,
                                "name": "next",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "right": {
                              "type": "CallExpression",
                              "start": 663,
                              "end": 682,
                              "callee": {
                                "type": "Identifier",
                                "start": 663,
                                "end": 676,
                                "name": "ListMakeEntry",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 677,
                                  "end": 681,
                                  "name": "data",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 696,
                          "end": 713,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 703,
                            "end": 712,
                            "object": {
                              "type": "ThisExpression",
                              "start": 703,
                              "end": 707
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 708,
                              "end": 712,
                              "name": "next",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 627,
                      "end": 636,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 629,
                        "end": 636,
                        "typeName": {
                          "type": "Identifier",
                          "start": 629,
                          "end": 633,
                          "name": "List",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 733,
                  "end": 826,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 733,
                    "end": 741,
                    "name": "popEntry",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 741,
                    "end": 826,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 742,
                        "end": 755,
                        "name": "head",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 746,
                          "end": 755,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 748,
                            "end": 755,
                            "typeName": {
                              "type": "Identifier",
                              "start": 748,
                              "end": 752,
                              "name": "List",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                            "callee": {
                              "type": "Identifier",
                              "start": 788,
                              "end": 803,
                              "name": "ListRemoveEntry",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 804,
                                "end": 813,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 804,
                                  "end": 808
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 809,
                                  "end": 813,
                                  "name": "next",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 756,
                      "end": 765,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 758,
                        "end": 765,
                        "typeName": {
                          "type": "Identifier",
                          "start": 758,
                          "end": 762,
                          "name": "List",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 568,
              "end": 571,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 569,
                  "end": 570,
                  "name": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 570,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 841,
            "end": 861,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 848,
              "end": 861,
              "id": {
                "type": "Identifier",
                "start": 854,
                "end": 858,
                "name": "Line",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 859,
                "end": 861,
                "body": []
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
