__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 129,
  "end": 746,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 129,
      "end": 340,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 141,
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
          "start": 142,
          "end": 160,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 143,
            "end": 160,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 145,
              "end": 160,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 145,
                  "end": 151
                },
                {
                  "type": "TSStringKeyword",
                  "start": 154,
                  "end": 160
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 162,
        "end": 340,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 168,
            "end": 204,
            "id": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 181,
              "end": 204,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 191,
                  "end": 198,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 191,
                    "end": 197,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 192,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 195,
                      "end": 197,
                      "value": 10,
                      "raw": "10"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          {
            "type": "IfStatement",
            "start": 209,
            "end": 338,
            "test": {
              "type": "BinaryExpression",
              "start": 213,
              "end": 234,
              "left": {
                "type": "UnaryExpression",
                "start": 213,
                "end": 221,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 226,
                "end": 234,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 236,
              "end": 291,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 246,
                  "end": 250,
                  "expression": {
                    "type": "CallExpression",
                    "start": 246,
                    "end": 249,
                    "callee": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 247,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 259,
                  "end": 275,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 266,
                    "end": 274,
                    "object": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 267,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 274,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 301,
              "end": 338,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 311,
                  "end": 322,
                  "argument": {
                    "type": "UpdateExpression",
                    "start": 318,
                    "end": 321,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 319,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 341,
      "end": 562,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 354,
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
          "start": 355,
          "end": 373,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 356,
            "end": 373,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 358,
              "end": 373,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 358,
                  "end": 364
                },
                {
                  "type": "TSStringKeyword",
                  "start": 367,
                  "end": 373
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 375,
        "end": 562,
        "body": [
          {
            "type": "IfStatement",
            "start": 381,
            "end": 534,
            "test": {
              "type": "BinaryExpression",
              "start": 385,
              "end": 406,
              "left": {
                "type": "UnaryExpression",
                "start": 385,
                "end": 393,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 398,
                "end": 406,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 408,
              "end": 450,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 418,
                  "end": 434,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 425,
                    "end": 433,
                    "object": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 426,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 433,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 460,
              "end": 534,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 470,
                  "end": 528,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 474,
                      "end": 527,
                      "id": {
                        "type": "Identifier",
                        "start": 474,
                        "end": 475,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 478,
                        "end": 527,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 490,
                          "end": 527,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 504,
                              "end": 517,
                              "argument": {
                                "type": "BinaryExpression",
                                "start": 511,
                                "end": 516,
                                "left": {
                                  "type": "Identifier",
                                  "start": 511,
                                  "end": 512,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "*",
                                "right": {
                                  "type": "Identifier",
                                  "start": 515,
                                  "end": 516,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 539,
            "end": 551,
            "expression": {
              "type": "AssignmentExpression",
              "start": 539,
              "end": 550,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 539,
                "end": 540,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 543,
                "end": 550,
                "value": "hello",
                "raw": "\"hello\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 556,
            "end": 560,
            "expression": {
              "type": "CallExpression",
              "start": 556,
              "end": 559,
              "callee": {
                "type": "Identifier",
                "start": 556,
                "end": 557,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 563,
      "end": 746,
      "id": {
        "type": "Identifier",
        "start": 572,
        "end": 576,
        "decorators": [],
        "name": "foo3",
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
          "start": 577,
          "end": 595,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 578,
            "end": 595,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 580,
              "end": 595,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 580,
                  "end": 586
                },
                {
                  "type": "TSStringKeyword",
                  "start": 589,
                  "end": 595
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 597,
        "end": 746,
        "body": [
          {
            "type": "IfStatement",
            "start": 603,
            "end": 718,
            "test": {
              "type": "BinaryExpression",
              "start": 607,
              "end": 628,
              "left": {
                "type": "UnaryExpression",
                "start": 607,
                "end": 615,
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 615,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 620,
                "end": 628,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 630,
              "end": 672,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 640,
                  "end": 656,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 647,
                    "end": 655,
                    "object": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 648,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 649,
                      "end": 655,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 682,
              "end": 718,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 692,
                  "end": 712,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 696,
                      "end": 711,
                      "id": {
                        "type": "Identifier",
                        "start": 696,
                        "end": 697,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 700,
                        "end": 711,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 706,
                          "end": 711,
                          "left": {
                            "type": "Identifier",
                            "start": 706,
                            "end": 707,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "operator": "*",
                          "right": {
                            "type": "Identifier",
                            "start": 710,
                            "end": 711,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "id": null,
                        "generator": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 723,
            "end": 735,
            "expression": {
              "type": "AssignmentExpression",
              "start": 723,
              "end": 734,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 723,
                "end": 724,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 727,
                "end": 734,
                "value": "hello",
                "raw": "\"hello\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 740,
            "end": 744,
            "expression": {
              "type": "CallExpression",
              "start": 740,
              "end": 743,
              "callee": {
                "type": "Identifier",
                "start": 740,
                "end": 741,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
