__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 916,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 916,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 916,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 46,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 85,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 85,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 85,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 69,
                    "end": 83,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 76,
                      "end": 82,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 76,
                        "end": 80
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
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
          },
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 127,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 127,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 107,
                "end": 127,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 109,
                    "end": 125,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 109,
                      "end": 124,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 109,
                        "end": 115,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 109,
                          "end": 113
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 118,
                        "end": 124,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 118,
                          "end": 122
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 124,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 132,
            "end": 166,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 140,
              "end": 143,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 143,
              "end": 166,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 166,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 148,
                    "end": 164,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 155,
                      "end": 163,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 155,
                        "end": 159
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 163,
                        "decorators": [],
                        "name": "foo",
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
          },
          {
            "type": "PropertyDefinition",
            "start": 172,
            "end": 197,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 196,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 202,
            "end": 243,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 222,
              "end": 243,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 225,
                "end": 243,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 227,
                    "end": 241,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 234,
                      "end": 240,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 234,
                        "end": 238
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 240,
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
          },
          {
            "type": "MethodDefinition",
            "start": 248,
            "end": 292,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 268,
              "end": 292,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 272,
                "end": 292,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 274,
                    "end": 290,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 274,
                      "end": 289,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 274,
                        "end": 280,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 274,
                          "end": 278
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 280,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 283,
                        "end": 289,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 289,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 269,
                  "end": 270,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 297,
            "end": 338,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 315,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 338,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 318,
                "end": 338,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 320,
                    "end": 336,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 327,
                      "end": 335,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 327,
                        "end": 331
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 335,
                        "decorators": [],
                        "name": "foo",
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
          },
          {
            "type": "MethodDefinition",
            "start": 343,
            "end": 379,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 361,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 379,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 364,
                "end": 379,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 366,
                    "end": 377,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 366,
                      "end": 376,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 366,
                        "end": 374,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 366,
                          "end": 370
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 374,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 385,
            "end": 914,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 393,
              "end": 396,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 396,
              "end": 914,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 399,
                "end": 914,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 409,
                    "end": 908,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 418,
                      "end": 908,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 432,
                          "end": 898,
                          "accessibility": "private",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 440,
                            "end": 443,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 443,
                            "end": 898,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 446,
                              "end": 898,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 464,
                                  "end": 473,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 468,
                                      "end": 472,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 468,
                                        "end": 472,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 469,
                                          "end": 472,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 471,
                                            "end": 472,
                                            "typeArguments": null,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 471,
                                              "end": 472,
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          }
                                        }
                                      },
                                      "init": null
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 490,
                                  "end": 505,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 494,
                                      "end": 504,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 494,
                                        "end": 496,
                                        "decorators": [],
                                        "name": "x1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 499,
                                        "end": 504,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 499,
                                          "end": 500,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 501,
                                          "end": 504,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 522,
                                  "end": 537,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 526,
                                      "end": 536,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 526,
                                        "end": 528,
                                        "decorators": [],
                                        "name": "x2",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 531,
                                        "end": 536,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 531,
                                          "end": 532,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 533,
                                          "end": 536,
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 554,
                                  "end": 567,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 558,
                                      "end": 566,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 558,
                                        "end": 560,
                                        "decorators": [],
                                        "name": "x3",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 563,
                                        "end": 566,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 563,
                                          "end": 564,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 565,
                                          "end": 566,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 584,
                                  "end": 597,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 588,
                                      "end": 596,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 588,
                                        "end": 590,
                                        "decorators": [],
                                        "name": "x4",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 593,
                                        "end": 596,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 593,
                                          "end": 594,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 595,
                                          "end": 596,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 615,
                                  "end": 629,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 619,
                                      "end": 628,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 619,
                                        "end": 622,
                                        "decorators": [],
                                        "name": "sx1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 625,
                                        "end": 628,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 625,
                                          "end": 626,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 627,
                                          "end": 628,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 646,
                                  "end": 660,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 650,
                                      "end": 659,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 650,
                                        "end": 653,
                                        "decorators": [],
                                        "name": "sx2",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 656,
                                        "end": 659,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 656,
                                          "end": 657,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 658,
                                          "end": 659,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 677,
                                  "end": 693,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 681,
                                      "end": 692,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 681,
                                        "end": 684,
                                        "decorators": [],
                                        "name": "sx3",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 687,
                                        "end": 692,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 687,
                                          "end": 688,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 689,
                                          "end": 692,
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 710,
                                  "end": 726,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 714,
                                      "end": 725,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 714,
                                        "end": 717,
                                        "decorators": [],
                                        "name": "sx4",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 720,
                                        "end": 725,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 720,
                                          "end": 721,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 722,
                                          "end": 725,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 744,
                                  "end": 760,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 748,
                                      "end": 759,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 748,
                                        "end": 749,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "NewExpression",
                                        "start": 752,
                                        "end": 759,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 756,
                                          "end": 757,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 777,
                                  "end": 792,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 781,
                                      "end": 791,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 781,
                                        "end": 783,
                                        "decorators": [],
                                        "name": "y1",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 786,
                                        "end": 791,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 786,
                                          "end": 787,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 788,
                                          "end": 791,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 809,
                                  "end": 824,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 813,
                                      "end": 823,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 813,
                                        "end": 815,
                                        "decorators": [],
                                        "name": "y2",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 818,
                                        "end": 823,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 818,
                                          "end": 819,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 820,
                                          "end": 823,
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 841,
                                  "end": 854,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 845,
                                      "end": 853,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 845,
                                        "end": 847,
                                        "decorators": [],
                                        "name": "y3",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 850,
                                        "end": 853,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 850,
                                          "end": 851,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 852,
                                          "end": 853,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 871,
                                  "end": 884,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 875,
                                      "end": 883,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 875,
                                        "end": 877,
                                        "decorators": [],
                                        "name": "y4",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 880,
                                        "end": 883,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 880,
                                          "end": 881,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 882,
                                          "end": 883,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
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
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 415,
                      "end": 417,
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
