__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3928,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 3928,
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 3928,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 3050,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 28,
              "end": 3050,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 3050,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 52,
                    "end": 73,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 63,
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 63,
                      "end": 72,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 65,
                        "end": 72,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 69,
                          "end": 72,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 70,
                              "end": 71,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 70,
                                "end": 71,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 69,
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 82,
                    "end": 103,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 93,
                      "decorators": [],
                      "name": "prev",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 93,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 95,
                        "end": 102,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 99,
                          "end": 102,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 100,
                              "end": 101,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 100,
                                "end": 101,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 99,
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 112,
                    "end": 148,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 131,
                      "decorators": [],
                      "name": "listFactory",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 131,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 133,
                        "end": 147,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 144,
                          "end": 147,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 145,
                              "end": 146,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 145,
                                "end": 146,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 144,
                          "decorators": [],
                          "name": "ListFactory",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "value": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 158,
                    "end": 286,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 169,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 169,
                      "end": 286,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 210,
                        "end": 286,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 224,
                            "end": 264,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 224,
                              "end": 263,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 224,
                                "end": 240,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 224,
                                  "end": 228
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 229,
                                  "end": 240,
                                  "decorators": [],
                                  "name": "listFactory",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "NewExpression",
                                "start": 243,
                                "end": 263,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 247,
                                  "end": 258,
                                  "decorators": [],
                                  "name": "ListFactory",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 258,
                                  "end": 261,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 259,
                                      "end": 260,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 259,
                                        "end": 260,
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                }
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
                          "type": "TSParameterProperty",
                          "start": 170,
                          "end": 192,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 177,
                            "end": 192,
                            "decorators": [],
                            "name": "isHead",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 183,
                              "end": 192,
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 185,
                                "end": 192
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 194,
                          "end": 208,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 201,
                            "end": 208,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 205,
                              "end": 208,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 207,
                                "end": 208,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 207,
                                  "end": 208,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 296,
                    "end": 567,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 306,
                      "decorators": [],
                      "name": "add",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 306,
                      "end": 567,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 325,
                        "end": 567,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 339,
                            "end": 384,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 343,
                                "end": 383,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 343,
                                  "end": 348,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 351,
                                  "end": 383,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 378,
                                      "end": 382,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 351,
                                    "end": 377,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 351,
                                      "end": 367,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 351,
                                        "end": 355
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 356,
                                        "end": 367,
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 368,
                                      "end": 377,
                                      "decorators": [],
                                      "name": "MakeEntry",
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
                            "kind": "var"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 410,
                            "end": 433,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 410,
                              "end": 432,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 410,
                                "end": 424,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 410,
                                  "end": 419,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 410,
                                    "end": 414
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 415,
                                    "end": 419,
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 420,
                                  "end": 424,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 427,
                                "end": 432,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 446,
                            "end": 464,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 446,
                              "end": 463,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 446,
                                "end": 456,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 446,
                                  "end": 451,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 452,
                                  "end": 456,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 459,
                                "end": 463
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 477,
                            "end": 500,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 477,
                              "end": 499,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 477,
                                "end": 487,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 477,
                                  "end": 482,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 483,
                                  "end": 487,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 490,
                                "end": 499,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 490,
                                  "end": 494
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 495,
                                  "end": 499,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 513,
                            "end": 531,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 513,
                              "end": 530,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 513,
                                "end": 522,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 513,
                                  "end": 517
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 518,
                                  "end": 522,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 525,
                                "end": 530,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 544,
                            "end": 557,
                            "argument": {
                              "type": "Identifier",
                              "start": 551,
                              "end": 556,
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 307,
                          "end": 314,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 311,
                            "end": 314,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 313,
                              "end": 314,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 313,
                                "end": 314,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 315,
                        "end": 324,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 317,
                          "end": 324,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 321,
                            "end": 324,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 322,
                                "end": 323,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 322,
                                  "end": 323,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 321,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 577,
                    "end": 825,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 589,
                      "decorators": [],
                      "name": "count",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 589,
                      "end": 825,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 600,
                        "end": 825,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 614,
                            "end": 633,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 618,
                                "end": 632,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 618,
                                  "end": 632,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 623,
                                    "end": 632,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 625,
                                      "end": 632,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 629,
                                        "end": 632,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 630,
                                            "end": 631,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 630,
                                              "end": 631,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        ]
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 625,
                                        "end": 629,
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
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
                            "type": "VariableDeclaration",
                            "start": 646,
                            "end": 660,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 650,
                                "end": 659,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 650,
                                  "end": 659,
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 651,
                                    "end": 659,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 653,
                                      "end": 659
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
                            "type": "ExpressionStatement",
                            "start": 674,
                            "end": 692,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 674,
                              "end": 691,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 674,
                                "end": 679,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 682,
                                "end": 691,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 682,
                                  "end": 686
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 687,
                                  "end": 691,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "ForStatement",
                            "start": 705,
                            "end": 790,
                            "body": {
                              "type": "BlockStatement",
                              "start": 739,
                              "end": 790,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 757,
                                  "end": 776,
                                  "directive": null,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 757,
                                    "end": 775,
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "start": 757,
                                      "end": 762,
                                      "decorators": [],
                                      "name": "entry",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "start": 765,
                                      "end": 775,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 765,
                                        "end": 770,
                                        "decorators": [],
                                        "name": "entry",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 771,
                                        "end": 775,
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            "init": {
                              "type": "AssignmentExpression",
                              "start": 710,
                              "end": 715,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 710,
                                "end": 711,
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 714,
                                "end": 715,
                                "raw": "0",
                                "value": 0,
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "start": 717,
                              "end": 732,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 719,
                                "end": 731,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 719,
                                  "end": 724,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 725,
                                  "end": 731,
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "operator": "!",
                              "prefix": true
                            },
                            "update": {
                              "type": "UpdateExpression",
                              "start": 734,
                              "end": 737,
                              "argument": {
                                "type": "Identifier",
                                "start": 734,
                                "end": 735,
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "++",
                              "prefix": false
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 804,
                            "end": 815,
                            "argument": {
                              "type": "Identifier",
                              "start": 812,
                              "end": 813,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 591,
                        "end": 599,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 593,
                          "end": 599
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 835,
                    "end": 912,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 842,
                      "end": 849,
                      "decorators": [],
                      "name": "isEmpty",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 849,
                      "end": 912,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 861,
                        "end": 912,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 875,
                            "end": 902,
                            "argument": {
                              "type": "BinaryExpression",
                              "start": 883,
                              "end": 900,
                              "operator": "==",
                              "left": {
                                "type": "MemberExpression",
                                "start": 883,
                                "end": 892,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 883,
                                  "end": 887
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 888,
                                  "end": 892,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 896,
                                "end": 900
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 851,
                        "end": 860,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 853,
                          "end": 860
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 922,
                    "end": 1112,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 929,
                      "end": 934,
                      "decorators": [],
                      "name": "first",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 934,
                      "end": 1112,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 940,
                        "end": 1112,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 954,
                            "end": 1102,
                            "alternate": {
                              "type": "BlockStatement",
                              "start": 1058,
                              "end": 1102,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1076,
                                  "end": 1088,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 1083,
                                    "end": 1087,
                                    "raw": "null",
                                    "value": null,
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 986,
                              "end": 1040,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1004,
                                  "end": 1026,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 1011,
                                    "end": 1025,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 1011,
                                      "end": 1020,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1011,
                                        "end": 1015
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1016,
                                        "end": 1020,
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1021,
                                      "end": 1025,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "CallExpression",
                              "start": 958,
                              "end": 972,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 958,
                                "end": 970,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 958,
                                  "end": 962
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 963,
                                  "end": 970,
                                  "decorators": [],
                                  "name": "isEmpty",
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
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 936,
                        "end": 939,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 938,
                          "end": 939,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 938,
                            "end": 939,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1122,
                    "end": 1413,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1129,
                      "end": 1138,
                      "decorators": [],
                      "name": "pushEntry",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1138,
                      "end": 1413,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1161,
                        "end": 1413,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1175,
                            "end": 1196,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1175,
                              "end": 1195,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1175,
                                "end": 1187,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1175,
                                  "end": 1180,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1181,
                                  "end": 1187,
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1190,
                                "end": 1195,
                                "raw": "false",
                                "value": false,
                                "regex": null,
                                "bigint": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1209,
                            "end": 1232,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1209,
                              "end": 1231,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1209,
                                "end": 1219,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1209,
                                  "end": 1214,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1215,
                                  "end": 1219,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 1222,
                                "end": 1231,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1222,
                                  "end": 1226
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1227,
                                  "end": 1231,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1245,
                            "end": 1263,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1245,
                              "end": 1262,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1245,
                                "end": 1255,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1245,
                                  "end": 1250,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1251,
                                  "end": 1255,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 1258,
                                "end": 1262
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1276,
                            "end": 1294,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1276,
                              "end": 1293,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1276,
                                "end": 1285,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1276,
                                  "end": 1280
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1281,
                                  "end": 1285,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1288,
                                "end": 1293,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1307,
                            "end": 1331,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1307,
                              "end": 1330,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1307,
                                "end": 1322,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1307,
                                  "end": 1317,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1307,
                                    "end": 1312,
                                    "decorators": [],
                                    "name": "entry",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1313,
                                    "end": 1317,
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1318,
                                  "end": 1322,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1325,
                                "end": 1330,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
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
                          "start": 1139,
                          "end": 1153,
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1144,
                            "end": 1153,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1146,
                              "end": 1153,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1150,
                                "end": 1153,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1151,
                                    "end": 1152,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1151,
                                      "end": 1152,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 1146,
                                "end": 1150,
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1154,
                        "end": 1160,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1156,
                          "end": 1160
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1423,
                    "end": 1792,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1430,
                      "end": 1434,
                      "decorators": [],
                      "name": "push",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1434,
                      "end": 1792,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1450,
                        "end": 1792,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1464,
                            "end": 1509,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1468,
                                "end": 1508,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1468,
                                  "end": 1473,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 1476,
                                  "end": 1508,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1503,
                                      "end": 1507,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1476,
                                    "end": 1502,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 1476,
                                      "end": 1492,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1476,
                                        "end": 1480
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1481,
                                        "end": 1492,
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1493,
                                      "end": 1502,
                                      "decorators": [],
                                      "name": "MakeEntry",
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
                            "kind": "var"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1522,
                            "end": 1540,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1522,
                              "end": 1539,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1522,
                                "end": 1532,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1522,
                                  "end": 1527,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1528,
                                  "end": 1532,
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1535,
                                "end": 1539,
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1553,
                            "end": 1574,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1553,
                              "end": 1573,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1553,
                                "end": 1565,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1553,
                                  "end": 1558,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1559,
                                  "end": 1565,
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1568,
                                "end": 1573,
                                "raw": "false",
                                "value": false,
                                "regex": null,
                                "bigint": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1587,
                            "end": 1610,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1587,
                              "end": 1609,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1587,
                                "end": 1597,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1587,
                                  "end": 1592,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1593,
                                  "end": 1597,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 1600,
                                "end": 1609,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1600,
                                  "end": 1604
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1605,
                                  "end": 1609,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1623,
                            "end": 1641,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1623,
                              "end": 1640,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1623,
                                "end": 1633,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1623,
                                  "end": 1628,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1629,
                                  "end": 1633,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 1636,
                                "end": 1640
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1654,
                            "end": 1672,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1654,
                              "end": 1671,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1654,
                                "end": 1663,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1654,
                                  "end": 1658
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1659,
                                  "end": 1663,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1666,
                                "end": 1671,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1685,
                            "end": 1709,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1685,
                              "end": 1708,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1685,
                                "end": 1700,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1685,
                                  "end": 1695,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 1685,
                                    "end": 1690,
                                    "decorators": [],
                                    "name": "entry",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1691,
                                    "end": 1695,
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1696,
                                  "end": 1700,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1703,
                                "end": 1708,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
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
                          "start": 1435,
                          "end": 1442,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1439,
                            "end": 1442,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1441,
                              "end": 1442,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1441,
                                "end": 1442,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1443,
                        "end": 1449,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1445,
                          "end": 1449
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1802,
                    "end": 2029,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1809,
                      "end": 1817,
                      "decorators": [],
                      "name": "popEntry",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1817,
                      "end": 2029,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1842,
                        "end": 2029,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 1856,
                            "end": 2019,
                            "alternate": {
                              "type": "BlockStatement",
                              "start": 1940,
                              "end": 2019,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1958,
                                  "end": 2005,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 1965,
                                    "end": 2004,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 1994,
                                        "end": 2003,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1994,
                                          "end": 1998
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1999,
                                          "end": 2003,
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 1965,
                                      "end": 1993,
                                      "computed": false,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 1965,
                                        "end": 1981,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1965,
                                          "end": 1969
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 1970,
                                          "end": 1981,
                                          "decorators": [],
                                          "name": "listFactory",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 1982,
                                        "end": 1993,
                                        "decorators": [],
                                        "name": "RemoveEntry",
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
                              "start": 1878,
                              "end": 1922,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 1896,
                                  "end": 1908,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 1903,
                                    "end": 1907,
                                    "raw": "null",
                                    "value": null,
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "MemberExpression",
                              "start": 1860,
                              "end": 1876,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1860,
                                "end": 1869,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1860,
                                  "end": 1864
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1865,
                                  "end": 1869,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1870,
                                "end": 1876,
                                "decorators": [],
                                "name": "isHead",
                                "optional": false,
                                "typeAnnotation": null
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
                          "start": 1818,
                          "end": 1831,
                          "decorators": [],
                          "name": "head",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1822,
                            "end": 1831,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1824,
                              "end": 1831,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1828,
                                "end": 1831,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 1829,
                                    "end": 1830,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1829,
                                      "end": 1830,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 1824,
                                "end": 1828,
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1832,
                        "end": 1841,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1834,
                          "end": 1841,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1838,
                            "end": 1841,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1839,
                                "end": 1840,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1839,
                                  "end": 1840,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 1834,
                            "end": 1838,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2039,
                    "end": 2288,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2046,
                      "end": 2057,
                      "decorators": [],
                      "name": "insertEntry",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2057,
                      "end": 2288,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2083,
                        "end": 2288,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2097,
                            "end": 2118,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2097,
                              "end": 2117,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2097,
                                "end": 2109,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2097,
                                  "end": 2102,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2103,
                                  "end": 2109,
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 2112,
                                "end": 2117,
                                "raw": "false",
                                "value": false,
                                "regex": null,
                                "bigint": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2131,
                            "end": 2154,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2131,
                              "end": 2153,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2131,
                                "end": 2145,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 2131,
                                  "end": 2140,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2131,
                                    "end": 2135
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2136,
                                    "end": 2140,
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2141,
                                  "end": 2145,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2148,
                                "end": 2153,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2167,
                            "end": 2185,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2167,
                              "end": 2184,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2167,
                                "end": 2177,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2167,
                                  "end": 2172,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2173,
                                  "end": 2177,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2180,
                                "end": 2184
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2198,
                            "end": 2221,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2198,
                              "end": 2220,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2198,
                                "end": 2208,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2198,
                                  "end": 2203,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2204,
                                  "end": 2208,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 2211,
                                "end": 2220,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2211,
                                  "end": 2215
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2216,
                                  "end": 2220,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2234,
                            "end": 2252,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2234,
                              "end": 2251,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2234,
                                "end": 2243,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2234,
                                  "end": 2238
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2239,
                                  "end": 2243,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2246,
                                "end": 2251,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 2265,
                            "end": 2278,
                            "argument": {
                              "type": "Identifier",
                              "start": 2272,
                              "end": 2277,
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 2058,
                          "end": 2072,
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2063,
                            "end": 2072,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2065,
                              "end": 2072,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2069,
                                "end": 2072,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2070,
                                    "end": 2071,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2070,
                                      "end": 2071,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 2065,
                                "end": 2069,
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2073,
                        "end": 2082,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2075,
                          "end": 2082,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2079,
                            "end": 2082,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2080,
                                "end": 2081,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2080,
                                  "end": 2081,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2075,
                            "end": 2079,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2298,
                    "end": 2645,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2305,
                      "end": 2316,
                      "decorators": [],
                      "name": "insertAfter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2316,
                      "end": 2645,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2335,
                        "end": 2645,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 2349,
                            "end": 2403,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 2353,
                                "end": 2402,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 2353,
                                  "end": 2367,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 2358,
                                    "end": 2367,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 2360,
                                      "end": 2367,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 2364,
                                        "end": 2367,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 2365,
                                            "end": 2366,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2365,
                                              "end": 2366,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        ]
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2360,
                                        "end": 2364,
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 2370,
                                  "end": 2402,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 2397,
                                      "end": 2401,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 2370,
                                    "end": 2396,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 2370,
                                      "end": 2386,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2370,
                                        "end": 2374
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2375,
                                        "end": 2386,
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2387,
                                      "end": 2396,
                                      "decorators": [],
                                      "name": "MakeEntry",
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
                            "kind": "var"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2416,
                            "end": 2439,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2416,
                              "end": 2438,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2416,
                                "end": 2426,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2416,
                                  "end": 2421,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2422,
                                  "end": 2426,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 2429,
                                "end": 2438,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2429,
                                  "end": 2433
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2434,
                                  "end": 2438,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2452,
                            "end": 2470,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2452,
                              "end": 2469,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2452,
                                "end": 2462,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2452,
                                  "end": 2457,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2458,
                                  "end": 2462,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2465,
                                "end": 2469
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2483,
                            "end": 2501,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2483,
                              "end": 2500,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2483,
                                "end": 2492,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2483,
                                  "end": 2487
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2488,
                                  "end": 2492,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2495,
                                "end": 2500,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2514,
                            "end": 2538,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2514,
                              "end": 2537,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2514,
                                "end": 2529,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 2514,
                                  "end": 2524,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 2514,
                                    "end": 2519,
                                    "decorators": [],
                                    "name": "entry",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2520,
                                    "end": 2524,
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2525,
                                  "end": 2529,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2532,
                                "end": 2537,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 2622,
                            "end": 2635,
                            "argument": {
                              "type": "Identifier",
                              "start": 2629,
                              "end": 2634,
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 2317,
                          "end": 2324,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2321,
                            "end": 2324,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2323,
                              "end": 2324,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2323,
                                "end": 2324,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2325,
                        "end": 2334,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2327,
                          "end": 2334,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2331,
                            "end": 2334,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2332,
                                "end": 2333,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2332,
                                  "end": 2333,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2327,
                            "end": 2331,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2655,
                    "end": 2877,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2662,
                      "end": 2679,
                      "decorators": [],
                      "name": "insertEntryBefore",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2679,
                      "end": 2877,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2705,
                        "end": 2877,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2719,
                            "end": 2742,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2719,
                              "end": 2741,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2719,
                                "end": 2733,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 2719,
                                  "end": 2728,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2719,
                                    "end": 2723
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 2724,
                                    "end": 2728,
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2729,
                                  "end": 2733,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2736,
                                "end": 2741,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2756,
                            "end": 2774,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2756,
                              "end": 2773,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2756,
                                "end": 2766,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2756,
                                  "end": 2761,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2762,
                                  "end": 2766,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2769,
                                "end": 2773
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2787,
                            "end": 2810,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2787,
                              "end": 2809,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2787,
                                "end": 2797,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2787,
                                  "end": 2792,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2793,
                                  "end": 2797,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 2800,
                                "end": 2809,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2800,
                                  "end": 2804
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2805,
                                  "end": 2809,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 2823,
                            "end": 2841,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 2823,
                              "end": 2840,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 2823,
                                "end": 2832,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2823,
                                  "end": 2827
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2828,
                                  "end": 2832,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 2835,
                                "end": 2840,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 2854,
                            "end": 2867,
                            "argument": {
                              "type": "Identifier",
                              "start": 2861,
                              "end": 2866,
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 2680,
                          "end": 2694,
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2685,
                            "end": 2694,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2687,
                              "end": 2694,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2691,
                                "end": 2694,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2692,
                                    "end": 2693,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2692,
                                      "end": 2693,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 2687,
                                "end": 2691,
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2695,
                        "end": 2704,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2697,
                          "end": 2704,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2701,
                            "end": 2704,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2702,
                                "end": 2703,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2702,
                                  "end": 2703,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2697,
                            "end": 2701,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 2887,
                    "end": 3044,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2894,
                      "end": 2906,
                      "decorators": [],
                      "name": "insertBefore",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 2906,
                      "end": 3044,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2925,
                        "end": 3044,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 2939,
                            "end": 2984,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 2943,
                                "end": 2983,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 2943,
                                  "end": 2948,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 2951,
                                  "end": 2983,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 2978,
                                      "end": 2982,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 2951,
                                    "end": 2977,
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "start": 2951,
                                      "end": 2967,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2951,
                                        "end": 2955
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2956,
                                        "end": 2967,
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2968,
                                      "end": 2977,
                                      "decorators": [],
                                      "name": "MakeEntry",
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
                            "kind": "var"
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 2997,
                            "end": 3034,
                            "argument": {
                              "type": "CallExpression",
                              "start": 3004,
                              "end": 3033,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 3027,
                                  "end": 3032,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 3004,
                                "end": 3026,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3004,
                                  "end": 3008
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3009,
                                  "end": 3026,
                                  "decorators": [],
                                  "name": "insertEntryBefore",
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
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2907,
                          "end": 2914,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2911,
                            "end": 2914,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2913,
                              "end": 2914,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2913,
                                "end": 2914,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2915,
                        "end": 2924,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2917,
                          "end": 2924,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2921,
                            "end": 2924,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2922,
                                "end": 2923,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2922,
                                  "end": 2923,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2917,
                            "end": 2921,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 38,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 38,
                "end": 41,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 39,
                    "end": 40,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 40,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 3056,
            "end": 3926,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 3063,
              "end": 3926,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 3084,
                "end": 3926,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 3095,
                    "end": 3284,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 3102,
                      "end": 3110,
                      "decorators": [],
                      "name": "MakeHead",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 3110,
                      "end": 3284,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3125,
                        "end": 3284,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 3139,
                            "end": 3184,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 3143,
                                "end": 3183,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 3143,
                                  "end": 3157,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3148,
                                    "end": 3157,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 3150,
                                      "end": 3157,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 3154,
                                        "end": 3157,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 3155,
                                            "end": 3156,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3155,
                                              "end": 3156,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        ]
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3150,
                                        "end": 3154,
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 3160,
                                  "end": 3183,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 3172,
                                      "end": 3176,
                                      "raw": "true",
                                      "value": true,
                                      "regex": null,
                                      "bigint": null
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 3178,
                                      "end": 3182,
                                      "raw": "null",
                                      "value": null,
                                      "regex": null,
                                      "bigint": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3164,
                                    "end": 3168,
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 3168,
                                    "end": 3171,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3169,
                                        "end": 3170,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3169,
                                          "end": 3170,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 3197,
                            "end": 3216,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 3197,
                              "end": 3215,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 3197,
                                "end": 3207,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3197,
                                  "end": 3202,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3203,
                                  "end": 3207,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3210,
                                "end": 3215,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 3229,
                            "end": 3248,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 3229,
                              "end": 3247,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 3229,
                                "end": 3239,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3229,
                                  "end": 3234,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3235,
                                  "end": 3239,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3242,
                                "end": 3247,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 3261,
                            "end": 3274,
                            "argument": {
                              "type": "Identifier",
                              "start": 3268,
                              "end": 3273,
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3115,
                        "end": 3124,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3117,
                          "end": 3124,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3121,
                            "end": 3124,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3122,
                                "end": 3123,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3122,
                                  "end": 3123,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 3117,
                            "end": 3121,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3110,
                        "end": 3113,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3111,
                            "end": 3112,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 3111,
                              "end": 3112,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 3294,
                    "end": 3492,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 3301,
                      "end": 3310,
                      "decorators": [],
                      "name": "MakeEntry",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 3310,
                      "end": 3492,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3332,
                        "end": 3492,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 3346,
                            "end": 3392,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 3350,
                                "end": 3391,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 3350,
                                  "end": 3364,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3355,
                                    "end": 3364,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 3357,
                                      "end": 3364,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 3361,
                                        "end": 3364,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 3362,
                                            "end": 3363,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 3362,
                                              "end": 3363,
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        ]
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 3357,
                                        "end": 3361,
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 3367,
                                  "end": 3391,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "start": 3379,
                                      "end": 3384,
                                      "raw": "false",
                                      "value": false,
                                      "regex": null,
                                      "bigint": null
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 3386,
                                      "end": 3390,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 3371,
                                    "end": 3375,
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 3375,
                                    "end": 3378,
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 3376,
                                        "end": 3377,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 3376,
                                          "end": 3377,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 3405,
                            "end": 3424,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 3405,
                              "end": 3423,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 3405,
                                "end": 3415,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3405,
                                  "end": 3410,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3411,
                                  "end": 3415,
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3418,
                                "end": 3423,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 3437,
                            "end": 3456,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 3437,
                              "end": 3455,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 3437,
                                "end": 3447,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3437,
                                  "end": 3442,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3443,
                                  "end": 3447,
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 3450,
                                "end": 3455,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 3469,
                            "end": 3482,
                            "argument": {
                              "type": "Identifier",
                              "start": 3476,
                              "end": 3481,
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null
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
                          "start": 3314,
                          "end": 3321,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3318,
                            "end": 3321,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3320,
                              "end": 3321,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3320,
                                "end": 3321,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3322,
                        "end": 3331,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3324,
                          "end": 3331,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3328,
                            "end": 3331,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3329,
                                "end": 3330,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3329,
                                  "end": 3330,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 3324,
                            "end": 3328,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3310,
                        "end": 3313,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3311,
                            "end": 3312,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 3311,
                              "end": 3312,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 3502,
                    "end": 3920,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 3509,
                      "end": 3520,
                      "decorators": [],
                      "name": "RemoveEntry",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 3520,
                      "end": 3920,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3549,
                        "end": 3920,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 3563,
                            "end": 3910,
                            "alternate": {
                              "type": "IfStatement",
                              "start": 3644,
                              "end": 3910,
                              "alternate": {
                                "type": "BlockStatement",
                                "start": 3772,
                                "end": 3910,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 3790,
                                    "end": 3819,
                                    "directive": null,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 3790,
                                      "end": 3818,
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 3790,
                                        "end": 3805,
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 3790,
                                          "end": 3800,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 3790,
                                            "end": 3795,
                                            "decorators": [],
                                            "name": "entry",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 3796,
                                            "end": 3800,
                                            "decorators": [],
                                            "name": "next",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3801,
                                          "end": 3805,
                                          "decorators": [],
                                          "name": "prev",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 3808,
                                        "end": 3818,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3808,
                                          "end": 3813,
                                          "decorators": [],
                                          "name": "entry",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3814,
                                          "end": 3818,
                                          "decorators": [],
                                          "name": "prev",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 3836,
                                    "end": 3865,
                                    "directive": null,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 3836,
                                      "end": 3864,
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 3836,
                                        "end": 3851,
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 3836,
                                          "end": 3846,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 3836,
                                            "end": 3841,
                                            "decorators": [],
                                            "name": "entry",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 3842,
                                            "end": 3846,
                                            "decorators": [],
                                            "name": "prev",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3847,
                                          "end": 3851,
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "start": 3854,
                                        "end": 3864,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 3854,
                                          "end": 3859,
                                          "decorators": [],
                                          "name": "entry",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 3860,
                                          "end": 3864,
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "start": 3883,
                                    "end": 3896,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 3890,
                                      "end": 3895,
                                      "decorators": [],
                                      "name": "entry",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 3662,
                                "end": 3754,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 3728,
                                    "end": 3740,
                                    "argument": {
                                      "type": "Literal",
                                      "start": 3735,
                                      "end": 3739,
                                      "raw": "null",
                                      "value": null,
                                      "regex": null,
                                      "bigint": null
                                    }
                                  }
                                ]
                              },
                              "test": {
                                "type": "MemberExpression",
                                "start": 3648,
                                "end": 3660,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 3648,
                                  "end": 3653,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 3654,
                                  "end": 3660,
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 3582,
                              "end": 3626,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 3600,
                                  "end": 3612,
                                  "argument": {
                                    "type": "Literal",
                                    "start": 3607,
                                    "end": 3611,
                                    "raw": "null",
                                    "value": null,
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 3567,
                              "end": 3580,
                              "operator": "==",
                              "left": {
                                "type": "Identifier",
                                "start": 3567,
                                "end": 3572,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 3576,
                                "end": 3580,
                                "raw": "null",
                                "value": null,
                                "regex": null,
                                "bigint": null
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
                          "start": 3524,
                          "end": 3538,
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3529,
                            "end": 3538,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3531,
                              "end": 3538,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 3535,
                                "end": 3538,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 3536,
                                    "end": 3537,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 3536,
                                      "end": 3537,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 3531,
                                "end": 3535,
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3539,
                        "end": 3548,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3541,
                          "end": 3548,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3545,
                            "end": 3548,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3546,
                                "end": 3547,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3546,
                                  "end": 3547,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 3541,
                            "end": 3545,
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 3520,
                        "end": 3523,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 3521,
                            "end": 3522,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 3521,
                              "end": 3522,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 3069,
                "end": 3080,
                "decorators": [],
                "name": "ListFactory",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3080,
                "end": 3083,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3081,
                    "end": 3082,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 3081,
                      "end": 3082,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
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
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
