__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 753,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 34,
        "name": "getStringOrNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 53,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 38,
          "end": 53,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 38,
              "end": 44
            },
            {
              "type": "TSNumberKeyword",
              "start": 47,
              "end": 53
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 67,
        "name": "f1",
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
        "start": 70,
        "end": 181,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 76,
            "end": 106,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 82,
                "end": 105,
                "id": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 86,
                  "end": 105,
                  "callee": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 103,
                    "name": "getStringOrNumber",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 111,
            "end": 179,
            "test": {
              "type": "BinaryExpression",
              "start": 115,
              "end": 136,
              "left": {
                "type": "UnaryExpression",
                "start": 115,
                "end": 123,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 128,
                "end": 136,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 138,
              "end": 179,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 148,
                  "end": 173,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 154,
                      "end": 172,
                      "id": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 158,
                        "end": 172,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "MemberExpression",
                          "start": 164,
                          "end": 172,
                          "object": {
                            "type": "Identifier",
                            "start": 164,
                            "end": 165,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 172,
                            "name": "length",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 183,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 194,
        "name": "f2",
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
        "start": 197,
        "end": 320,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 203,
            "end": 233,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 209,
                "end": 232,
                "id": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 213,
                  "end": 232,
                  "callee": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 230,
                    "name": "getStringOrNumber",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 238,
            "end": 288,
            "test": {
              "type": "BinaryExpression",
              "start": 242,
              "end": 263,
              "left": {
                "type": "UnaryExpression",
                "start": 242,
                "end": 250,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 255,
                "end": 263,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 265,
              "end": 288,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 275,
                  "end": 282,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 293,
            "end": 318,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 299,
                "end": 317,
                "id": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 300,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 303,
                  "end": 317,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "MemberExpression",
                    "start": 309,
                    "end": 317,
                    "object": {
                      "type": "Identifier",
                      "start": 309,
                      "end": 310,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 317,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 322,
      "end": 464,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 333,
        "name": "f3",
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
        "start": 336,
        "end": 464,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 342,
            "end": 372,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 348,
                "end": 371,
                "id": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 349,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 352,
                  "end": 371,
                  "callee": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 369,
                    "name": "getStringOrNumber",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 377,
            "end": 462,
            "test": {
              "type": "BinaryExpression",
              "start": 381,
              "end": 402,
              "left": {
                "type": "UnaryExpression",
                "start": 381,
                "end": 389,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 389,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 394,
                "end": 402,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 404,
              "end": 462,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 414,
                  "end": 456,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 420,
                      "end": 455,
                      "id": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 421,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 424,
                        "end": 455,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 435,
                          "end": 455,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 437,
                              "end": 453,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 444,
                                "end": 452,
                                "object": {
                                  "type": "Identifier",
                                  "start": 444,
                                  "end": 445,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 446,
                                  "end": 452,
                                  "name": "length",
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
                        "returnType": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 466,
      "end": 620,
      "id": {
        "type": "Identifier",
        "start": 475,
        "end": 477,
        "name": "f4",
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
        "start": 480,
        "end": 620,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 486,
            "end": 516,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 492,
                "end": 515,
                "id": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 493,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 496,
                  "end": 515,
                  "callee": {
                    "type": "Identifier",
                    "start": 496,
                    "end": 513,
                    "name": "getStringOrNumber",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 521,
            "end": 571,
            "test": {
              "type": "BinaryExpression",
              "start": 525,
              "end": 546,
              "left": {
                "type": "UnaryExpression",
                "start": 525,
                "end": 533,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 533,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 538,
                "end": 546,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 548,
              "end": 571,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 558,
                  "end": 565,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 576,
            "end": 618,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 582,
                "end": 617,
                "id": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 583,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 586,
                  "end": 617,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 597,
                    "end": 617,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 599,
                        "end": 615,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 606,
                          "end": 614,
                          "object": {
                            "type": "Identifier",
                            "start": 606,
                            "end": 607,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 608,
                            "end": 614,
                            "name": "length",
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
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 622,
      "end": 753,
      "id": {
        "type": "Identifier",
        "start": 631,
        "end": 633,
        "name": "f5",
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
        "start": 636,
        "end": 753,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 642,
            "end": 672,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 648,
                "end": 671,
                "id": {
                  "type": "Identifier",
                  "start": 648,
                  "end": 649,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 652,
                  "end": 671,
                  "callee": {
                    "type": "Identifier",
                    "start": 652,
                    "end": 669,
                    "name": "getStringOrNumber",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 677,
            "end": 751,
            "test": {
              "type": "BinaryExpression",
              "start": 681,
              "end": 702,
              "left": {
                "type": "UnaryExpression",
                "start": 681,
                "end": 689,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 688,
                  "end": 689,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 694,
                "end": 702,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 704,
              "end": 751,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 714,
                  "end": 745,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 720,
                      "end": 744,
                      "id": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 721,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "start": 724,
                        "end": 744,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "ArrowFunctionExpression",
                          "start": 730,
                          "end": 744,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "MemberExpression",
                            "start": 736,
                            "end": 744,
                            "object": {
                              "type": "Identifier",
                              "start": 736,
                              "end": 737,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 738,
                              "end": 744,
                              "name": "length",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
