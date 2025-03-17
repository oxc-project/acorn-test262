__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 129,
  "end": 747,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 129,
      "end": 340,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 162,
        "end": 340,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 168,
            "end": 204,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 181,
              "end": 204,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 191,
                  "end": 198,
                  "directive": null,
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
                      "raw": "10",
                      "value": 10
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
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "IfStatement",
            "start": 209,
            "end": 338,
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
                    "argument": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 319,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "++",
                    "prefix": false
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 246,
                    "end": 249,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 247,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 259,
                  "end": 275,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 266,
                    "end": 274,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 267,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 274,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 213,
              "end": 234,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 213,
                "end": 221,
                "argument": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 226,
                "end": 234,
                "raw": "\"string\"",
                "value": "string"
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
        "start": 138,
        "end": 141,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 341,
      "end": 562,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 375,
        "end": 562,
        "body": [
          {
            "type": "IfStatement",
            "start": 381,
            "end": 534,
            "alternate": {
              "type": "BlockStatement",
              "start": 460,
              "end": 534,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 470,
                  "end": 528,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 474,
                      "end": 527,
                      "definite": false,
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
                        "async": false,
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
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "start": 511,
                                  "end": 512,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
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
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
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
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 426,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 433,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 385,
              "end": 406,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 385,
                "end": 393,
                "argument": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 398,
                "end": 406,
                "raw": "\"string\"",
                "value": "string"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 539,
            "end": 551,
            "directive": null,
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
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 556,
            "end": 560,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 556,
              "end": 559,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 556,
                "end": 557,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 354,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 563,
      "end": 746,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 597,
        "end": 746,
        "body": [
          {
            "type": "IfStatement",
            "start": 603,
            "end": 718,
            "alternate": {
              "type": "BlockStatement",
              "start": 682,
              "end": 718,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 692,
                  "end": 712,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 696,
                      "end": 711,
                      "definite": false,
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
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "start": 706,
                          "end": 711,
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "start": 706,
                            "end": 707,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
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
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 648,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 649,
                      "end": 655,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 607,
              "end": 628,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 607,
                "end": 615,
                "argument": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 615,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 620,
                "end": 628,
                "raw": "\"string\"",
                "value": "string"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 723,
            "end": 735,
            "directive": null,
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
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 740,
            "end": 744,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 740,
              "end": 743,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 740,
                "end": 741,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 572,
        "end": 576,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
