__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 923,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 688,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 688,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 139,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 139,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 139,
                "body": [
                  {
                    "type": "ForOfStatement",
                    "start": 30,
                    "end": 133,
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 35,
                      "end": 40,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 39,
                          "end": 40,
                          "id": {
                            "type": "Identifier",
                            "start": 39,
                            "end": 40,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "let",
                      "declare": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 44,
                      "end": 47,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 45,
                          "end": 46,
                          "value": 0,
                          "raw": "0"
                        }
                      ]
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 49,
                      "end": 133,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 63,
                          "end": 96,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 67,
                              "end": 95,
                              "id": {
                                "type": "Identifier",
                                "start": 67,
                                "end": 68,
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "FunctionExpression",
                                "start": 71,
                                "end": 95,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 82,
                                  "end": 95,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 84,
                                      "end": 93,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 91,
                                        "end": 92,
                                        "name": "x",
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
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 109,
                          "end": 123,
                          "expression": {
                            "type": "CallExpression",
                            "start": 109,
                            "end": 122,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 109,
                              "end": 117,
                              "object": {
                                "type": "ThisExpression",
                                "start": 109,
                                "end": 113
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 114,
                                "end": 117,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 118,
                                "end": 121,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 118,
                                  "end": 119,
                                  "name": "f",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "optional": false,
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
          },
          {
            "type": "MethodDefinition",
            "start": 144,
            "end": 166,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 147,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 166,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 148,
                  "end": 157,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 151,
                      "end": 157
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 166,
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
            "start": 172,
            "end": 426,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 175,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 175,
              "end": 426,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 426,
                "body": [
                  {
                    "type": "ForOfStatement",
                    "start": 188,
                    "end": 420,
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 193,
                      "end": 198,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 197,
                          "end": 198,
                          "id": {
                            "type": "Identifier",
                            "start": 197,
                            "end": 198,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "let",
                      "declare": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 202,
                      "end": 205,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 203,
                          "end": 204,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 207,
                      "end": 420,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 221,
                          "end": 255,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 225,
                              "end": 254,
                              "id": {
                                "type": "Identifier",
                                "start": 225,
                                "end": 226,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "FunctionExpression",
                                "start": 229,
                                "end": 254,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 240,
                                  "end": 254,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 243,
                                      "end": 252,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 250,
                                        "end": 251,
                                        "name": "x",
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
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        },
                        {
                          "type": "ForOfStatement",
                          "start": 268,
                          "end": 383,
                          "await": false,
                          "left": {
                            "type": "VariableDeclaration",
                            "start": 273,
                            "end": 278,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 277,
                                "end": 278,
                                "id": {
                                  "type": "Identifier",
                                  "start": 277,
                                  "end": 278,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": null,
                                "definite": false
                              }
                            ],
                            "kind": "let",
                            "declare": false
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "start": 282,
                            "end": 285,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 283,
                                "end": 284,
                                "value": 1,
                                "raw": "1"
                              }
                            ]
                          },
                          "body": {
                            "type": "BlockStatement",
                            "start": 287,
                            "end": 383,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 305,
                                "end": 338,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 309,
                                    "end": 337,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 309,
                                      "end": 310,
                                      "name": "b",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "FunctionExpression",
                                      "start": 313,
                                      "end": 337,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 324,
                                        "end": 337,
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "start": 326,
                                            "end": 335,
                                            "argument": {
                                              "type": "Identifier",
                                              "start": 333,
                                              "end": 334,
                                              "name": "y",
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
                                    "definite": false
                                  }
                                ],
                                "kind": "let",
                                "declare": false
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 355,
                                "end": 369,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 355,
                                  "end": 368,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 355,
                                    "end": 363,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 355,
                                      "end": 359
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 360,
                                      "end": 363,
                                      "name": "bar",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "start": 364,
                                      "end": 367,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 364,
                                        "end": 365,
                                        "name": "b",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [],
                                      "optional": false,
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
                          "type": "ExpressionStatement",
                          "start": 396,
                          "end": 410,
                          "expression": {
                            "type": "CallExpression",
                            "start": 396,
                            "end": 409,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 396,
                              "end": 404,
                              "object": {
                                "type": "ThisExpression",
                                "start": 396,
                                "end": 400
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 401,
                                "end": 404,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 405,
                                "end": 408,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 405,
                                  "end": 406,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "optional": false,
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
          },
          {
            "type": "MethodDefinition",
            "start": 431,
            "end": 686,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 431,
              "end": 435,
              "name": "baz2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 435,
              "end": 686,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 438,
                "end": 686,
                "body": [
                  {
                    "type": "ForOfStatement",
                    "start": 448,
                    "end": 680,
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 453,
                      "end": 458,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 457,
                          "end": 458,
                          "id": {
                            "type": "Identifier",
                            "start": 457,
                            "end": 458,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "let",
                      "declare": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 462,
                      "end": 465,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 463,
                          "end": 464,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 467,
                      "end": 680,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 481,
                          "end": 515,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 485,
                              "end": 514,
                              "id": {
                                "type": "Identifier",
                                "start": 485,
                                "end": 486,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "FunctionExpression",
                                "start": 489,
                                "end": 514,
                                "id": null,
                                "expression": false,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 500,
                                  "end": 514,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 503,
                                      "end": 512,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 510,
                                        "end": 511,
                                        "name": "x",
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
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 528,
                          "end": 542,
                          "expression": {
                            "type": "CallExpression",
                            "start": 528,
                            "end": 541,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 528,
                              "end": 536,
                              "object": {
                                "type": "ThisExpression",
                                "start": 528,
                                "end": 532
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 533,
                                "end": 536,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 537,
                                "end": 540,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 537,
                                  "end": 538,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [],
                                "optional": false,
                                "typeArguments": null
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        },
                        {
                          "type": "ForOfStatement",
                          "start": 555,
                          "end": 670,
                          "await": false,
                          "left": {
                            "type": "VariableDeclaration",
                            "start": 560,
                            "end": 565,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 564,
                                "end": 565,
                                "id": {
                                  "type": "Identifier",
                                  "start": 564,
                                  "end": 565,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": null,
                                "definite": false
                              }
                            ],
                            "kind": "let",
                            "declare": false
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "start": 569,
                            "end": 572,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 570,
                                "end": 571,
                                "value": 1,
                                "raw": "1"
                              }
                            ]
                          },
                          "body": {
                            "type": "BlockStatement",
                            "start": 574,
                            "end": 670,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 592,
                                "end": 625,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 596,
                                    "end": 624,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 596,
                                      "end": 597,
                                      "name": "b",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "FunctionExpression",
                                      "start": 600,
                                      "end": 624,
                                      "id": null,
                                      "expression": false,
                                      "generator": false,
                                      "async": false,
                                      "params": [],
                                      "body": {
                                        "type": "BlockStatement",
                                        "start": 611,
                                        "end": 624,
                                        "body": [
                                          {
                                            "type": "ReturnStatement",
                                            "start": 613,
                                            "end": 622,
                                            "argument": {
                                              "type": "Identifier",
                                              "start": 620,
                                              "end": 621,
                                              "name": "y",
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
                                    "definite": false
                                  }
                                ],
                                "kind": "let",
                                "declare": false
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 642,
                                "end": 656,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 642,
                                  "end": 655,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 642,
                                    "end": 650,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 642,
                                      "end": 646
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 647,
                                      "end": 650,
                                      "name": "bar",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "start": 651,
                                      "end": 654,
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 651,
                                        "end": 652,
                                        "name": "b",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "arguments": [],
                                      "optional": false,
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
                        }
                      ]
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
      "type": "ClassDeclaration",
      "start": 690,
      "end": 923,
      "id": {
        "type": "Identifier",
        "start": 696,
        "end": 697,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 698,
        "end": 923,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 704,
            "end": 894,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 704,
              "end": 707,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 707,
              "end": 894,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 710,
                "end": 894,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 720,
                    "end": 888,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 724,
                        "end": 888,
                        "id": {
                          "type": "Identifier",
                          "start": 724,
                          "end": 725,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 740,
                          "end": 888,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 746,
                            "end": 888,
                            "body": [
                              {
                                "type": "ForOfStatement",
                                "start": 764,
                                "end": 874,
                                "await": false,
                                "left": {
                                  "type": "VariableDeclaration",
                                  "start": 769,
                                  "end": 774,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 773,
                                      "end": 774,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 773,
                                        "end": 774,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": null,
                                      "definite": false
                                    }
                                  ],
                                  "kind": "let",
                                  "declare": false
                                },
                                "right": {
                                  "type": "ArrayExpression",
                                  "start": 778,
                                  "end": 781,
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "start": 779,
                                      "end": 780,
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  ]
                                },
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 783,
                                  "end": 874,
                                  "body": [
                                    {
                                      "type": "VariableDeclaration",
                                      "start": 805,
                                      "end": 821,
                                      "declarations": [
                                        {
                                          "type": "VariableDeclarator",
                                          "start": 809,
                                          "end": 820,
                                          "id": {
                                            "type": "Identifier",
                                            "start": 809,
                                            "end": 810,
                                            "name": "f",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "init": {
                                            "type": "ArrowFunctionExpression",
                                            "start": 813,
                                            "end": 820,
                                            "id": null,
                                            "expression": true,
                                            "generator": false,
                                            "async": false,
                                            "params": [],
                                            "body": {
                                              "type": "Identifier",
                                              "start": 819,
                                              "end": 820,
                                              "name": "x",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeParameters": null,
                                            "returnType": null
                                          },
                                          "definite": false
                                        }
                                      ],
                                      "kind": "let",
                                      "declare": false
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 842,
                                      "end": 856,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 842,
                                        "end": 855,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 842,
                                          "end": 850,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 842,
                                            "end": 846
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 847,
                                            "end": 850,
                                            "name": "bar",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "arguments": [
                                          {
                                            "type": "CallExpression",
                                            "start": 851,
                                            "end": 854,
                                            "callee": {
                                              "type": "Identifier",
                                              "start": 851,
                                              "end": 852,
                                              "name": "f",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "arguments": [],
                                            "optional": false,
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
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
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
          },
          {
            "type": "MethodDefinition",
            "start": 899,
            "end": 921,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 899,
              "end": 902,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 902,
              "end": 921,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 903,
                  "end": 912,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 904,
                    "end": 912,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 906,
                      "end": 912
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 914,
                "end": 921,
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
