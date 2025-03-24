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
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 11,
          "end": 14,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 53,
              "name": "Greeter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 54,
              "end": 200,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 64,
                  "end": 112,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 75,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 75,
                    "end": 112,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
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
                          "name": "greeting",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 91,
                            "end": 99,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 93,
                              "end": 99
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 101,
                      "end": 112,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 122,
                  "end": 194,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 127,
                    "name": "greet",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 127,
                    "end": 194,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                                  "name": "greeting",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
          {
            "type": "FunctionDeclaration",
            "start": 207,
            "end": 292,
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 219,
              "name": "foo",
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
                "start": 220,
                "end": 236,
                "name": "greeting",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 228,
                  "end": 236,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 230,
                    "end": 236
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                      "name": "Greeter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 276,
                        "end": 284,
                        "name": "greeting",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
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
                  "name": "Greeter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                "id": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 309,
                  "name": "greeter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 312,
                  "end": 340,
                  "callee": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 323,
                    "name": "Greeter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 324,
                      "end": 339,
                      "value": "Hello, world!",
                      "raw": "\"Hello, world!\""
                    }
                  ],
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
            "start": 346,
            "end": 372,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 350,
                "end": 371,
                "id": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 353,
                  "name": "str",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "greeter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 369,
                      "name": "greet",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
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
            "type": "FunctionDeclaration",
            "start": 378,
            "end": 726,
            "id": {
              "type": "Identifier",
              "start": 387,
              "end": 391,
              "name": "foo2",
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
                "start": 392,
                "end": 408,
                "name": "greeting",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 400,
                  "end": 408,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 402,
                    "end": 408
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 410,
                "end": 456,
                "argument": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 426,
                  "name": "restGreetings",
                  "typeAnnotation": null,
                  "decorators": [],
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
                },
                "value": null
              }
            ],
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
                      "id": {
                        "type": "Identifier",
                        "start": 472,
                        "end": 491,
                        "name": "greeters",
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
                                "name": "Greeter",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                  "kind": "var",
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
                        "name": "greeters",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 542,
                        "end": 543,
                        "value": 0,
                        "raw": "0"
                      },
                      "computed": true,
                      "optional": false
                    },
                    "right": {
                      "type": "NewExpression",
                      "start": 547,
                      "end": 568,
                      "callee": {
                        "type": "Identifier",
                        "start": 551,
                        "end": 558,
                        "name": "Greeter",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 559,
                          "end": 567,
                          "name": "greeting",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeArguments": null
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 587,
                        "end": 592,
                        "id": {
                          "type": "Identifier",
                          "start": 587,
                          "end": 588,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "var",
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
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "restGreetings",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 612,
                        "end": 618,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                              "name": "greeters",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 648,
                              "end": 652,
                              "name": "push",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "start": 653,
                              "end": 682,
                              "callee": {
                                "type": "Identifier",
                                "start": 657,
                                "end": 664,
                                "name": "Greeter",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 665,
                                  "end": 681,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 665,
                                    "end": 678,
                                    "name": "restGreetings",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 679,
                                    "end": 680,
                                    "name": "i",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": true,
                                  "optional": false
                                }
                              ],
                              "typeArguments": null
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
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
                    "name": "greeters",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
                "id": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 737,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 740,
                  "end": 767,
                  "callee": {
                    "type": "Identifier",
                    "start": 740,
                    "end": 744,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
            "type": "ForStatement",
            "start": 815,
            "end": 879,
            "init": {
              "type": "VariableDeclaration",
              "start": 820,
              "end": 829,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 824,
                  "end": 829,
                  "id": {
                    "type": "Identifier",
                    "start": 824,
                    "end": 825,
                    "name": "j",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "var",
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
                "name": "j",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 843,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                "name": "j",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 862,
                          "end": 863,
                          "name": "j",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 865,
                        "end": 870,
                        "name": "greet",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
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
