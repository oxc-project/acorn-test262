__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 13
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 17
        },
        "start": 10,
        "end": 17
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 24,
              "end": 36
            },
            "directive": "use strict",
            "start": 24,
            "end": 37
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Greeter",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 56
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 78
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 96,
                              "end": 102
                            },
                            "start": 94,
                            "end": 102
                          },
                          "start": 86,
                          "end": 102
                        },
                        "readonly": false,
                        "static": false,
                        "start": 79,
                        "end": 102
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 104,
                      "end": 115
                    },
                    "expression": false,
                    "start": 78,
                    "end": 115
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 67,
                  "end": 115
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greet",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 130
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Literal",
                                "value": "<h1>",
                                "raw": "\"<h1>\"",
                                "start": 154,
                                "end": 160
                              },
                              "operator": "+",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 163,
                                  "end": 167
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "greeting",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 168,
                                  "end": 176
                                },
                                "optional": false,
                                "computed": false,
                                "start": 163,
                                "end": 176
                              },
                              "start": 154,
                              "end": 176
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "value": "</h1>",
                              "raw": "\"</h1>\"",
                              "start": 179,
                              "end": 186
                            },
                            "start": 154,
                            "end": 186
                          },
                          "start": 147,
                          "end": 187
                        }
                      ],
                      "start": 133,
                      "end": 197
                    },
                    "expression": false,
                    "start": 130,
                    "end": 197
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 125,
                  "end": 197
                }
              ],
              "start": 57,
              "end": 203
            },
            "abstract": false,
            "declare": false,
            "start": 43,
            "end": 203
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 222
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 233,
                    "end": 239
                  },
                  "start": 231,
                  "end": 239
                },
                "start": 223,
                "end": 239
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 242,
                      "end": 245
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 249
                    },
                    "start": 242,
                    "end": 249
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 257
                  },
                  "start": 242,
                  "end": 257
                },
                "typeArguments": null,
                "start": 242,
                "end": 257
              },
              "start": 240,
              "end": 257
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Greeter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 279,
                      "end": 286
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 287,
                        "end": 295
                      }
                    ],
                    "start": 275,
                    "end": 296
                  },
                  "start": 268,
                  "end": 297
                }
              ],
              "start": 258,
              "end": 303
            },
            "expression": false,
            "start": 210,
            "end": 303
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
                  "name": "greeter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 320
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 334
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Hello, world!",
                      "raw": "\"Hello, world!\"",
                      "start": 335,
                      "end": 350
                    }
                  ],
                  "start": 323,
                  "end": 351
                },
                "definite": false,
                "start": 313,
                "end": 351
              }
            ],
            "declare": false,
            "start": 309,
            "end": 352
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
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 364
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greeter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 374
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 375,
                      "end": 380
                    },
                    "optional": false,
                    "computed": false,
                    "start": 367,
                    "end": 380
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 367,
                  "end": 382
                },
                "definite": false,
                "start": 361,
                "end": 382
              }
            ],
            "declare": false,
            "start": 357,
            "end": 383
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 402
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 413,
                    "end": 419
                  },
                  "start": 411,
                  "end": 419
                },
                "start": 403,
                "end": 419
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restGreetings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 424,
                  "end": 437
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 439,
                      "end": 445
                    },
                    "start": 439,
                    "end": 447
                  },
                  "start": 437,
                  "end": 447
                },
                "value": null,
                "start": 421,
                "end": 447
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "greeters",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Greeter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 473,
                                "end": 480
                              },
                              "typeArguments": null,
                              "start": 473,
                              "end": 480
                            },
                            "start": 473,
                            "end": 482
                          },
                          "start": 471,
                          "end": 482
                        },
                        "start": 463,
                        "end": 482
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 485,
                        "end": 487
                      },
                      "definite": false,
                      "start": 463,
                      "end": 487
                    }
                  ],
                  "declare": false,
                  "start": 459,
                  "end": 488
                },
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
                        "name": "greeters",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 497,
                        "end": 505
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 506,
                        "end": 507
                      },
                      "optional": false,
                      "computed": true,
                      "start": 497,
                      "end": 508
                    },
                    "right": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Greeter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 515,
                        "end": 522
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 523,
                          "end": 531
                        }
                      ],
                      "start": 511,
                      "end": 532
                    },
                    "start": 497,
                    "end": 532
                  },
                  "directive": null,
                  "start": 497,
                  "end": 533
                },
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 551,
                          "end": 552
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 555,
                          "end": 556
                        },
                        "definite": false,
                        "start": 551,
                        "end": 556
                      }
                    ],
                    "declare": false,
                    "start": 547,
                    "end": 556
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 558,
                      "end": 559
                    },
                    "operator": "<",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "restGreetings",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 562,
                        "end": 575
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 582
                      },
                      "optional": false,
                      "computed": false,
                      "start": 562,
                      "end": 582
                    },
                    "start": 558,
                    "end": 582
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 584,
                      "end": 585
                    },
                    "start": 584,
                    "end": 587
                  },
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
                              "name": "greeters",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 603,
                              "end": 611
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 612,
                              "end": 616
                            },
                            "optional": false,
                            "computed": false,
                            "start": 603,
                            "end": 616
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Greeter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 621,
                                "end": 628
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "restGreetings",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 629,
                                    "end": 642
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 643,
                                    "end": 644
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 629,
                                  "end": 645
                                }
                              ],
                              "start": 617,
                              "end": 646
                            }
                          ],
                          "optional": false,
                          "start": 603,
                          "end": 647
                        },
                        "directive": null,
                        "start": 603,
                        "end": 648
                      }
                    ],
                    "start": 589,
                    "end": 658
                  },
                  "start": 542,
                  "end": 658
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greeters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 675,
                    "end": 683
                  },
                  "start": 668,
                  "end": 684
                }
              ],
              "start": 449,
              "end": 690
            },
            "expression": false,
            "start": 389,
            "end": 690
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 700,
                  "end": 701
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 704,
                    "end": 708
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 709,
                      "end": 716
                    },
                    {
                      "type": "Literal",
                      "value": "World",
                      "raw": "\"World\"",
                      "start": 718,
                      "end": 725
                    },
                    {
                      "type": "Literal",
                      "value": "!",
                      "raw": "\"!\"",
                      "start": 727,
                      "end": 730
                    }
                  ],
                  "optional": false,
                  "start": 704,
                  "end": 731
                },
                "definite": false,
                "start": 700,
                "end": 731
              }
            ],
            "declare": false,
            "start": 696,
            "end": 732
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 746,
                    "end": 747
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 750,
                    "end": 751
                  },
                  "definite": false,
                  "start": 746,
                  "end": 751
                }
              ],
              "declare": false,
              "start": 742,
              "end": 751
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 754
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 757,
                  "end": 758
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 765
                },
                "optional": false,
                "computed": false,
                "start": 757,
                "end": 765
              },
              "start": 753,
              "end": 765
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 768
              },
              "start": 767,
              "end": 770
            },
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 782,
                          "end": 783
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 784,
                          "end": 785
                        },
                        "optional": false,
                        "computed": true,
                        "start": 782,
                        "end": 786
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greet",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 787,
                        "end": 792
                      },
                      "optional": false,
                      "computed": false,
                      "start": 782,
                      "end": 792
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 782,
                    "end": 794
                  },
                  "directive": null,
                  "start": 782,
                  "end": 795
                }
              ],
              "start": 772,
              "end": 801
            },
            "start": 737,
            "end": 801
          }
        ],
        "start": 18,
        "end": 803
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 803
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 803
}
```
