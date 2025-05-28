__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 800,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 800,
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
        "end": 800,
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
            "end": 300,
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
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 239,
                "end": 254,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 239,
                  "end": 254,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 239,
                    "end": 246,
                    "left": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 242,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 246,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 254,
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 255,
              "end": 300,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 265,
                  "end": 294,
                  "argument": {
                    "type": "NewExpression",
                    "start": 272,
                    "end": 293,
                    "callee": {
                      "type": "Identifier",
                      "start": 276,
                      "end": 283,
                      "decorators": [],
                      "name": "Greeter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 284,
                        "end": 292,
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
            "start": 306,
            "end": 349,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 310,
                "end": 348,
                "id": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 317,
                  "decorators": [],
                  "name": "greeter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 320,
                  "end": 348,
                  "callee": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 331,
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 332,
                      "end": 347,
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
            "start": 354,
            "end": 380,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 358,
                "end": 379,
                "id": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 361,
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 364,
                  "end": 379,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 364,
                    "end": 377,
                    "object": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 371,
                      "decorators": [],
                      "name": "greeter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 372,
                      "end": 377,
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
            "start": 386,
            "end": 687,
            "id": {
              "type": "Identifier",
              "start": 395,
              "end": 399,
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
                "start": 400,
                "end": 416,
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 408,
                  "end": 416,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 410,
                    "end": 416
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 418,
                "end": 444,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 434,
                  "decorators": [],
                  "name": "restGreetings",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 434,
                  "end": 444,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 436,
                    "end": 444,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 436,
                      "end": 442
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 446,
              "end": 687,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 456,
                  "end": 485,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 460,
                      "end": 484,
                      "id": {
                        "type": "Identifier",
                        "start": 460,
                        "end": 479,
                        "decorators": [],
                        "name": "greeters",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 468,
                          "end": 479,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 470,
                            "end": 479,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 470,
                              "end": 477,
                              "typeName": {
                                "type": "Identifier",
                                "start": 470,
                                "end": 477,
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
                        "start": 482,
                        "end": 484,
                        "elements": []
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 494,
                  "end": 530,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 494,
                    "end": 529,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 494,
                      "end": 505,
                      "object": {
                        "type": "Identifier",
                        "start": 494,
                        "end": 502,
                        "decorators": [],
                        "name": "greeters",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 503,
                        "end": 504,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "right": {
                      "type": "NewExpression",
                      "start": 508,
                      "end": 529,
                      "callee": {
                        "type": "Identifier",
                        "start": 512,
                        "end": 519,
                        "decorators": [],
                        "name": "Greeter",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 520,
                          "end": 528,
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
                  "start": 539,
                  "end": 655,
                  "init": {
                    "type": "VariableDeclaration",
                    "start": 544,
                    "end": 553,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 548,
                        "end": 553,
                        "id": {
                          "type": "Identifier",
                          "start": 548,
                          "end": 549,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 552,
                          "end": 553,
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
                    "start": 555,
                    "end": 579,
                    "left": {
                      "type": "Identifier",
                      "start": 555,
                      "end": 556,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "<",
                    "right": {
                      "type": "MemberExpression",
                      "start": 559,
                      "end": 579,
                      "object": {
                        "type": "Identifier",
                        "start": 559,
                        "end": 572,
                        "decorators": [],
                        "name": "restGreetings",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 573,
                        "end": 579,
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
                    "start": 581,
                    "end": 584,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 581,
                      "end": 582,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 586,
                    "end": 655,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 600,
                        "end": 645,
                        "expression": {
                          "type": "CallExpression",
                          "start": 600,
                          "end": 644,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 600,
                            "end": 613,
                            "object": {
                              "type": "Identifier",
                              "start": 600,
                              "end": 608,
                              "decorators": [],
                              "name": "greeters",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 609,
                              "end": 613,
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
                              "start": 614,
                              "end": 643,
                              "callee": {
                                "type": "Identifier",
                                "start": 618,
                                "end": 625,
                                "decorators": [],
                                "name": "Greeter",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "start": 626,
                                  "end": 642,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 626,
                                    "end": 639,
                                    "decorators": [],
                                    "name": "restGreetings",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 640,
                                    "end": 641,
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
                  "start": 665,
                  "end": 681,
                  "argument": {
                    "type": "Identifier",
                    "start": 672,
                    "end": 680,
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
            "start": 693,
            "end": 729,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 697,
                "end": 728,
                "id": {
                  "type": "Identifier",
                  "start": 697,
                  "end": 698,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 701,
                  "end": 728,
                  "callee": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 705,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 706,
                      "end": 713,
                      "value": "Hello",
                      "raw": "\"Hello\""
                    },
                    {
                      "type": "Literal",
                      "start": 715,
                      "end": 722,
                      "value": "World",
                      "raw": "\"World\""
                    },
                    {
                      "type": "Literal",
                      "start": 724,
                      "end": 727,
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
            "start": 734,
            "end": 798,
            "init": {
              "type": "VariableDeclaration",
              "start": 739,
              "end": 748,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 743,
                  "end": 748,
                  "id": {
                    "type": "Identifier",
                    "start": 743,
                    "end": 744,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 747,
                    "end": 748,
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
              "start": 750,
              "end": 762,
              "left": {
                "type": "Identifier",
                "start": 750,
                "end": 751,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "start": 754,
                "end": 762,
                "object": {
                  "type": "Identifier",
                  "start": 754,
                  "end": 755,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 756,
                  "end": 762,
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
              "start": 764,
              "end": 767,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 764,
                "end": 765,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 769,
              "end": 798,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 779,
                  "end": 792,
                  "expression": {
                    "type": "CallExpression",
                    "start": 779,
                    "end": 791,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 779,
                      "end": 789,
                      "object": {
                        "type": "MemberExpression",
                        "start": 779,
                        "end": 783,
                        "object": {
                          "type": "Identifier",
                          "start": 779,
                          "end": 780,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 781,
                          "end": 782,
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
                        "start": 784,
                        "end": 789,
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
