__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 881,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 881,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 881,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 21,
            "end": 34,
            "directive": "use strict",
            "expression": {
              "type": "Literal",
              "start": 21,
              "end": 33,
              "raw": "\"use strict\"",
              "value": "use strict"
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 40,
            "end": 200,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 54,
              "end": 200,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 64,
                  "end": 112,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 75,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 75,
                    "end": 112,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 101,
                      "end": 112,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 76,
                        "end": 99,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 99,
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 91,
                            "end": 99,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 93,
                              "end": 99
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ]
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 122,
                  "end": 194,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 127,
                    "decorators": [],
                    "name": "greet",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 127,
                    "end": 194,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 130,
                      "end": 194,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 144,
                          "end": 184,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 151,
                            "end": 183,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 151,
                              "end": 173,
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "start": 151,
                                "end": 157,
                                "raw": "\"<h1>\"",
                                "value": "<h1>"
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 160,
                                "end": 173,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 160,
                                  "end": 164
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 165,
                                  "end": 173,
                                  "decorators": [],
                                  "name": "greeting",
                                  "optional": false
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 176,
                              "end": 183,
                              "raw": "\"</h1>\"",
                              "value": "</h1>"
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 53,
              "decorators": [],
              "name": "Greeter",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 207,
            "end": 292,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 247,
              "end": 292,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 257,
                  "end": 286,
                  "argument": {
                    "type": "NewExpression",
                    "start": 264,
                    "end": 285,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 276,
                        "end": 284,
                        "decorators": [],
                        "name": "greeting",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 275,
                      "decorators": [],
                      "name": "Greeter",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 219,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 220,
                "end": 236,
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 228,
                  "end": 236,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 230,
                    "end": 236
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 246,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 239,
                "end": 246,
                "typeName": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 246,
                  "decorators": [],
                  "name": "Greeter",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 298,
            "end": 341,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 302,
                "end": 340,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 309,
                  "decorators": [],
                  "name": "greeter",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 312,
                  "end": 340,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 324,
                      "end": 339,
                      "raw": "\"Hello, world!\"",
                      "value": "Hello, world!"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 323,
                    "decorators": [],
                    "name": "Greeter",
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
            "start": 346,
            "end": 372,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 350,
                "end": 371,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 353,
                  "decorators": [],
                  "name": "str",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 356,
                  "end": 371,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 356,
                    "end": 369,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 356,
                      "end": 363,
                      "decorators": [],
                      "name": "greeter",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 369,
                      "decorators": [],
                      "name": "greet",
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
            "type": "FunctionDeclaration",
            "start": 378,
            "end": 726,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 458,
              "end": 726,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 468,
                  "end": 497,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 472,
                      "end": 496,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 472,
                        "end": 491,
                        "decorators": [],
                        "name": "greeters",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 480,
                          "end": 491,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 482,
                            "end": 491,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 482,
                              "end": 489,
                              "typeName": {
                                "type": "Identifier",
                                "start": 482,
                                "end": 489,
                                "decorators": [],
                                "name": "Greeter",
                                "optional": false
                              }
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "start": 494,
                        "end": 496,
                        "elements": []
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 533,
                  "end": 569,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 533,
                    "end": 568,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 533,
                      "end": 544,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 541,
                        "decorators": [],
                        "name": "greeters",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 542,
                        "end": 543,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "right": {
                      "type": "NewExpression",
                      "start": 547,
                      "end": 568,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 559,
                          "end": 567,
                          "decorators": [],
                          "name": "greeting",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 551,
                        "end": 558,
                        "decorators": [],
                        "name": "Greeter",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "ForStatement",
                  "start": 578,
                  "end": 694,
                  "body": {
                    "type": "BlockStatement",
                    "start": 625,
                    "end": 694,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 639,
                        "end": 684,
                        "expression": {
                          "type": "CallExpression",
                          "start": 639,
                          "end": 683,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "start": 653,
                              "end": 682,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 665,
                                  "end": 681,
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 665,
                                    "end": 678,
                                    "decorators": [],
                                    "name": "restGreetings",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 679,
                                    "end": 680,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 657,
                                "end": 664,
                                "decorators": [],
                                "name": "Greeter",
                                "optional": false
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 639,
                            "end": 652,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 639,
                              "end": 647,
                              "decorators": [],
                              "name": "greeters",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 648,
                              "end": 652,
                              "decorators": [],
                              "name": "push",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ]
                  },
                  "init": {
                    "type": "VariableDeclaration",
                    "start": 583,
                    "end": 592,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 587,
                        "end": 592,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 587,
                          "end": 588,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 591,
                          "end": 592,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 594,
                    "end": 618,
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "start": 594,
                      "end": 595,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 598,
                      "end": 618,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 598,
                        "end": 611,
                        "decorators": [],
                        "name": "restGreetings",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 612,
                        "end": 618,
                        "decorators": [],
                        "name": "length",
                        "optional": false
                      }
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "start": 620,
                    "end": 623,
                    "argument": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 621,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "operator": "++",
                    "prefix": false
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 704,
                  "end": 720,
                  "argument": {
                    "type": "Identifier",
                    "start": 711,
                    "end": 719,
                    "decorators": [],
                    "name": "greeters",
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
              "start": 387,
              "end": 391,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 392,
                "end": 408,
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 400,
                  "end": 408,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 402,
                    "end": 408
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 410,
                "end": 456,
                "argument": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 426,
                  "decorators": [],
                  "name": "restGreetings",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 446,
                  "end": 456,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 448,
                    "end": 456,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 448,
                      "end": 454
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "VariableDeclaration",
            "start": 732,
            "end": 768,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 736,
                "end": 767,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 737,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 740,
                  "end": 767,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 745,
                      "end": 752,
                      "raw": "\"Hello\"",
                      "value": "Hello"
                    },
                    {
                      "type": "Literal",
                      "start": 754,
                      "end": 761,
                      "raw": "\"World\"",
                      "value": "World"
                    },
                    {
                      "type": "Literal",
                      "start": 763,
                      "end": 766,
                      "raw": "\"!\"",
                      "value": "!"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 740,
                    "end": 744,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ForStatement",
            "start": 815,
            "end": 879,
            "body": {
              "type": "BlockStatement",
              "start": 850,
              "end": 879,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 860,
                  "end": 873,
                  "expression": {
                    "type": "CallExpression",
                    "start": 860,
                    "end": 872,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 860,
                      "end": 870,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 860,
                        "end": 864,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 860,
                          "end": 861,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 862,
                          "end": 863,
                          "decorators": [],
                          "name": "j",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 865,
                        "end": 870,
                        "decorators": [],
                        "name": "greet",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 820,
              "end": 829,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 824,
                  "end": 829,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 824,
                    "end": 825,
                    "decorators": [],
                    "name": "j",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 828,
                    "end": 829,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 831,
              "end": 843,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 831,
                "end": 832,
                "decorators": [],
                "name": "j",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 835,
                "end": 843,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 843,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 845,
              "end": 848,
              "argument": {
                "type": "Identifier",
                "start": 845,
                "end": 846,
                "decorators": [],
                "name": "j",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 7,
        "end": 14,
        "left": {
          "type": "Identifier",
          "start": 7,
          "end": 10,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 14,
          "decorators": [],
          "name": "Bar",
          "optional": false
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
