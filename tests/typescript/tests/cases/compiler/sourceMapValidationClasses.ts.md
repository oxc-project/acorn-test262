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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 14,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 881,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 21,
            "end": 34,
            "expression": {
              "type": "Literal",
              "start": 21,
              "end": 33,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": "use strict"
          },
          {
            "type": "ClassDeclaration",
            "start": 40,
            "end": 200,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 53,
              "decorators": [],
              "name": "Greeter",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 54,
              "end": 200,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 64,
                  "end": 112,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 75,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 75,
                    "end": 112,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
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
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 101,
                      "end": 112,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 122,
                  "end": 194,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 127,
                    "decorators": [],
                    "name": "greet",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 127,
                    "end": 194,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "left": {
                              "type": "BinaryExpression",
                              "start": 151,
                              "end": 173,
                              "left": {
                                "type": "Literal",
                                "start": 151,
                                "end": 157,
                                "value": "<h1>",
                                "raw": "\"<h1>\""
                              },
                              "operator": "+",
                              "right": {
                                "type": "MemberExpression",
                                "start": 160,
                                "end": 173,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 160,
                                  "end": 164
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 165,
                                  "end": 173,
                                  "decorators": [],
                                  "name": "greeting",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "start": 176,
                              "end": 183,
                              "value": "</h1>",
                              "raw": "\"</h1>\""
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 207,
            "end": 292,
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 219,
              "decorators": [],
              "name": "foo",
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
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
                    "callee": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 275,
                      "decorators": [],
                      "name": "Greeter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 276,
                        "end": 284,
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 298,
            "end": 341,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 302,
                "end": 340,
                "id": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 309,
                  "decorators": [],
                  "name": "greeter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 312,
                  "end": 340,
                  "callee": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 323,
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 324,
                      "end": 339,
                      "value": "Hello, world!",
                      "raw": "\"Hello, world!\""
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
            "start": 346,
            "end": 372,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 350,
                "end": 371,
                "id": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 353,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 356,
                  "end": 371,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 356,
                    "end": 369,
                    "object": {
                      "type": "Identifier",
                      "start": 356,
                      "end": 363,
                      "decorators": [],
                      "name": "greeter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 369,
                      "decorators": [],
                      "name": "greet",
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
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 378,
            "end": 726,
            "id": {
              "type": "Identifier",
              "start": 387,
              "end": 391,
              "decorators": [],
              "name": "foo2",
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
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 426,
                  "decorators": [],
                  "name": "restGreetings",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 458,
              "end": 726,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 468,
                  "end": 497,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 472,
                      "end": 496,
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "start": 494,
                        "end": 496,
                        "elements": []
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
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
                      "object": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 541,
                        "decorators": [],
                        "name": "greeters",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 542,
                        "end": 543,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "right": {
                      "type": "NewExpression",
                      "start": 547,
                      "end": 568,
                      "callee": {
                        "type": "Identifier",
                        "start": 551,
                        "end": 558,
                        "decorators": [],
                        "name": "Greeter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 559,
                          "end": 567,
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ]
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ForStatement",
                  "start": 578,
                  "end": 694,
                  "init": {
                    "type": "VariableDeclaration",
                    "start": 583,
                    "end": 592,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 587,
                        "end": 592,
                        "id": {
                          "type": "Identifier",
                          "start": 587,
                          "end": 588,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 591,
                          "end": 592,
                          "value": 0,
                          "raw": "0"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 594,
                    "end": 618,
                    "left": {
                      "type": "Identifier",
                      "start": 594,
                      "end": 595,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "<",
                    "right": {
                      "type": "MemberExpression",
                      "start": 598,
                      "end": 618,
                      "object": {
                        "type": "Identifier",
                        "start": 598,
                        "end": 611,
                        "decorators": [],
                        "name": "restGreetings",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 612,
                        "end": 618,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "start": 620,
                    "end": 623,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 621,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 639,
                            "end": 652,
                            "object": {
                              "type": "Identifier",
                              "start": 639,
                              "end": 647,
                              "decorators": [],
                              "name": "greeters",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 648,
                              "end": 652,
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "start": 653,
                              "end": 682,
                              "callee": {
                                "type": "Identifier",
                                "start": 657,
                                "end": 664,
                                "decorators": [],
                                "name": "Greeter",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 665,
                                  "end": 681,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 665,
                                    "end": 678,
                                    "decorators": [],
                                    "name": "restGreetings",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 679,
                                    "end": 680,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": true
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
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 732,
            "end": 768,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 736,
                "end": 767,
                "id": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 737,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 740,
                  "end": 767,
                  "callee": {
                    "type": "Identifier",
                    "start": 740,
                    "end": 744,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 745,
                      "end": 752,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    },
                    {
                      "type": "Literal",
                      "start": 754,
                      "end": 761,
                      "value": "World",
                      "raw": "\"World\""
                    },
                    {
                      "type": "Literal",
                      "start": 763,
                      "end": 766,
                      "value": "!",
                      "raw": "\"!\""
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
            "type": "ForStatement",
            "start": 815,
            "end": 879,
            "init": {
              "type": "VariableDeclaration",
              "start": 820,
              "end": 829,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 824,
                  "end": 829,
                  "id": {
                    "type": "Identifier",
                    "start": 824,
                    "end": 825,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 828,
                    "end": 829,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 831,
              "end": 843,
              "left": {
                "type": "Identifier",
                "start": 831,
                "end": 832,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "start": 835,
                "end": 843,
                "object": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 843,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 845,
              "end": 848,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 845,
                "end": 846,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              }
            },
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 860,
                      "end": 870,
                      "object": {
                        "type": "MemberExpression",
                        "start": 860,
                        "end": 864,
                        "object": {
                          "type": "Identifier",
                          "start": 860,
                          "end": 861,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 862,
                          "end": 863,
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 865,
                        "end": 870,
                        "decorators": [],
                        "name": "greet",
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
                  "directive": null
                }
              ]
            }
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
