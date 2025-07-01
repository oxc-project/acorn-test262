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
          "start": 7,
          "end": 10
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 14
        },
        "start": 7,
        "end": 14
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
              "start": 21,
              "end": 33
            },
            "directive": "use strict",
            "start": 21,
            "end": 34
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
              "start": 46,
              "end": 53
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
                    "start": 64,
                    "end": 75
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
                              "start": 93,
                              "end": 99
                            },
                            "start": 91,
                            "end": 99
                          },
                          "start": 83,
                          "end": 99
                        },
                        "readonly": false,
                        "static": false,
                        "start": 76,
                        "end": 99
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 101,
                      "end": 112
                    },
                    "expression": false,
                    "start": 75,
                    "end": 112
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 64,
                  "end": 112
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
                    "start": 122,
                    "end": 127
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
                                "start": 151,
                                "end": 157
                              },
                              "operator": "+",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 160,
                                  "end": 164
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "greeting",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 165,
                                  "end": 173
                                },
                                "optional": false,
                                "computed": false,
                                "start": 160,
                                "end": 173
                              },
                              "start": 151,
                              "end": 173
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "value": "</h1>",
                              "raw": "\"</h1>\"",
                              "start": 176,
                              "end": 183
                            },
                            "start": 151,
                            "end": 183
                          },
                          "start": 144,
                          "end": 184
                        }
                      ],
                      "start": 130,
                      "end": 194
                    },
                    "expression": false,
                    "start": 127,
                    "end": 194
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 122,
                  "end": 194
                }
              ],
              "start": 54,
              "end": 200
            },
            "abstract": false,
            "declare": false,
            "start": 40,
            "end": 200
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 219
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
                    "start": 230,
                    "end": 236
                  },
                  "start": 228,
                  "end": 236
                },
                "start": 220,
                "end": 236
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
                      "start": 239,
                      "end": 242
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 246
                    },
                    "start": 239,
                    "end": 246
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 254
                  },
                  "start": 239,
                  "end": 254
                },
                "typeArguments": null,
                "start": 239,
                "end": 254
              },
              "start": 237,
              "end": 254
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
                      "start": 276,
                      "end": 283
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 292
                      }
                    ],
                    "start": 272,
                    "end": 293
                  },
                  "start": 265,
                  "end": 294
                }
              ],
              "start": 255,
              "end": 300
            },
            "expression": false,
            "start": 207,
            "end": 300
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
                  "start": 310,
                  "end": 317
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 331
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Hello, world!",
                      "raw": "\"Hello, world!\"",
                      "start": 332,
                      "end": 347
                    }
                  ],
                  "start": 320,
                  "end": 348
                },
                "definite": false,
                "start": 310,
                "end": 348
              }
            ],
            "declare": false,
            "start": 306,
            "end": 349
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
                  "start": 358,
                  "end": 361
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
                      "start": 364,
                      "end": 371
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 372,
                      "end": 377
                    },
                    "optional": false,
                    "computed": false,
                    "start": 364,
                    "end": 377
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 364,
                  "end": 379
                },
                "definite": false,
                "start": 358,
                "end": 379
              }
            ],
            "declare": false,
            "start": 354,
            "end": 380
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 399
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
                    "start": 410,
                    "end": 416
                  },
                  "start": 408,
                  "end": 416
                },
                "start": 400,
                "end": 416
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
                  "start": 421,
                  "end": 434
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 436,
                      "end": 442
                    },
                    "start": 436,
                    "end": 444
                  },
                  "start": 434,
                  "end": 444
                },
                "value": null,
                "start": 418,
                "end": 444
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
                                "start": 470,
                                "end": 477
                              },
                              "typeArguments": null,
                              "start": 470,
                              "end": 477
                            },
                            "start": 470,
                            "end": 479
                          },
                          "start": 468,
                          "end": 479
                        },
                        "start": 460,
                        "end": 479
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 482,
                        "end": 484
                      },
                      "definite": false,
                      "start": 460,
                      "end": 484
                    }
                  ],
                  "declare": false,
                  "start": 456,
                  "end": 485
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
                        "start": 494,
                        "end": 502
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 503,
                        "end": 504
                      },
                      "optional": false,
                      "computed": true,
                      "start": 494,
                      "end": 505
                    },
                    "right": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Greeter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 519
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 520,
                          "end": 528
                        }
                      ],
                      "start": 508,
                      "end": 529
                    },
                    "start": 494,
                    "end": 529
                  },
                  "directive": null,
                  "start": 494,
                  "end": 530
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
                          "start": 548,
                          "end": 549
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 552,
                          "end": 553
                        },
                        "definite": false,
                        "start": 548,
                        "end": 553
                      }
                    ],
                    "declare": false,
                    "start": 544,
                    "end": 553
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 555,
                      "end": 556
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
                        "start": 559,
                        "end": 572
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 573,
                        "end": 579
                      },
                      "optional": false,
                      "computed": false,
                      "start": 559,
                      "end": 579
                    },
                    "start": 555,
                    "end": 579
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
                      "start": 581,
                      "end": 582
                    },
                    "start": 581,
                    "end": 584
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
                              "start": 600,
                              "end": 608
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 609,
                              "end": 613
                            },
                            "optional": false,
                            "computed": false,
                            "start": 600,
                            "end": 613
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
                                "start": 618,
                                "end": 625
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
                                    "start": 626,
                                    "end": 639
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 640,
                                    "end": 641
                                  },
                                  "optional": false,
                                  "computed": true,
                                  "start": 626,
                                  "end": 642
                                }
                              ],
                              "start": 614,
                              "end": 643
                            }
                          ],
                          "optional": false,
                          "start": 600,
                          "end": 644
                        },
                        "directive": null,
                        "start": 600,
                        "end": 645
                      }
                    ],
                    "start": 586,
                    "end": 655
                  },
                  "start": 539,
                  "end": 655
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greeters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 672,
                    "end": 680
                  },
                  "start": 665,
                  "end": 681
                }
              ],
              "start": 446,
              "end": 687
            },
            "expression": false,
            "start": 386,
            "end": 687
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
                  "start": 697,
                  "end": 698
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 701,
                    "end": 705
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Hello",
                      "raw": "\"Hello\"",
                      "start": 706,
                      "end": 713
                    },
                    {
                      "type": "Literal",
                      "value": "World",
                      "raw": "\"World\"",
                      "start": 715,
                      "end": 722
                    },
                    {
                      "type": "Literal",
                      "value": "!",
                      "raw": "\"!\"",
                      "start": 724,
                      "end": 727
                    }
                  ],
                  "optional": false,
                  "start": 701,
                  "end": 728
                },
                "definite": false,
                "start": 697,
                "end": 728
              }
            ],
            "declare": false,
            "start": 693,
            "end": 729
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
                    "start": 743,
                    "end": 744
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 747,
                    "end": 748
                  },
                  "definite": false,
                  "start": 743,
                  "end": 748
                }
              ],
              "declare": false,
              "start": 739,
              "end": 748
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 750,
                "end": 751
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
                  "start": 754,
                  "end": 755
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 756,
                  "end": 762
                },
                "optional": false,
                "computed": false,
                "start": 754,
                "end": 762
              },
              "start": 750,
              "end": 762
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
                "start": 764,
                "end": 765
              },
              "start": 764,
              "end": 767
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
                          "start": 779,
                          "end": 780
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 781,
                          "end": 782
                        },
                        "optional": false,
                        "computed": true,
                        "start": 779,
                        "end": 783
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greet",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 784,
                        "end": 789
                      },
                      "optional": false,
                      "computed": false,
                      "start": 779,
                      "end": 789
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 779,
                    "end": 791
                  },
                  "directive": null,
                  "start": 779,
                  "end": 792
                }
              ],
              "start": 769,
              "end": 798
            },
            "start": 734,
            "end": 798
          }
        ],
        "start": 15,
        "end": 800
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 800
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 800
}
```
