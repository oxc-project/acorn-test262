__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1133,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 505,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 505,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 103,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 50,
                "end": 66,
                "expression": {
                  "type": "CallExpression",
                  "start": 51,
                  "end": 66,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 58,
                      "end": 65,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 62,
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 65,
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 57,
                    "decorators": [],
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              {
                "type": "Decorator",
                "start": 69,
                "end": 83,
                "expression": {
                  "type": "CallExpression",
                  "start": 70,
                  "end": 83,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 75,
                      "end": 82,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 79,
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 82,
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 74,
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 94,
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 170,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 118,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 118,
              "end": 170,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 170,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 142,
                    "end": 166,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 142,
                      "end": 165,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 142,
                        "end": 155,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 142,
                          "end": 146
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 155,
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 165,
                        "decorators": [],
                        "name": "message",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 119,
                  "end": 134,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 128,
                      "end": 134
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 174,
            "end": 261,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 174,
                "end": 190,
                "expression": {
                  "type": "CallExpression",
                  "start": 175,
                  "end": 190,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 182,
                      "end": 189,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 186,
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 189,
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 175,
                    "end": 181,
                    "decorators": [],
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              {
                "type": "Decorator",
                "start": 193,
                "end": 207,
                "expression": {
                  "type": "CallExpression",
                  "start": 194,
                  "end": 207,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 199,
                      "end": 206,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 203,
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 206,
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 198,
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 215,
              "decorators": [],
              "name": "greet",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 261,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 261,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 224,
                    "end": 257,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 231,
                      "end": 256,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 231,
                        "end": 240,
                        "raw": "\"Hello, \"",
                        "value": "Hello, "
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 243,
                        "end": 256,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 243,
                          "end": 247
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 256,
                          "decorators": [],
                          "name": "greeting",
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 265,
            "end": 335,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 265,
                "end": 272,
                "expression": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 272,
                  "decorators": [],
                  "name": "lambda",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 275,
                "end": 280,
                "expression": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 280,
                  "decorators": [],
                  "name": "deco",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 289,
              "decorators": [],
              "name": "greet1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 289,
              "end": 335,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 292,
                "end": 335,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 298,
                    "end": 331,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 305,
                      "end": 330,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 305,
                        "end": 314,
                        "raw": "\"Hello, \"",
                        "value": "Hello, "
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 317,
                        "end": 330,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 317,
                          "end": 321
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 322,
                          "end": 330,
                          "decorators": [],
                          "name": "greeting",
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 339,
            "end": 428,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 345,
              "decorators": [],
              "name": "greet2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 345,
              "end": 428,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 385,
                "end": 428,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 391,
                    "end": 424,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 398,
                      "end": 423,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 398,
                        "end": 407,
                        "raw": "\"Hello, \"",
                        "value": "Hello, "
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 410,
                        "end": 423,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 410,
                          "end": 414
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 423,
                          "decorators": [],
                          "name": "greeting",
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
                  "start": 378,
                  "end": 383,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 346,
                      "end": 362,
                      "expression": {
                        "type": "CallExpression",
                        "start": 347,
                        "end": 362,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 354,
                            "end": 361,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 354,
                              "end": 358,
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 359,
                              "end": 361,
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 353,
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "Decorator",
                      "start": 363,
                      "end": 377,
                      "expression": {
                        "type": "CallExpression",
                        "start": 364,
                        "end": 377,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 369,
                            "end": 376,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 369,
                              "end": 373,
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 374,
                              "end": 376,
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 364,
                          "end": 368,
                          "decorators": [],
                          "name": "deco",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "name": "param",
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
            "start": 432,
            "end": 503,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 438,
              "decorators": [],
              "name": "greet3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 438,
              "end": 503,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 460,
                "end": 503,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 466,
                    "end": 499,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 473,
                      "end": 498,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 473,
                        "end": 482,
                        "raw": "\"Hello, \"",
                        "value": "Hello, "
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 485,
                        "end": 498,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 485,
                          "end": 489
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 490,
                          "end": 498,
                          "decorators": [],
                          "name": "greeting",
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
                  "start": 453,
                  "end": 458,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 439,
                      "end": 446,
                      "expression": {
                        "type": "Identifier",
                        "start": 440,
                        "end": 446,
                        "decorators": [],
                        "name": "lambda",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Decorator",
                      "start": 447,
                      "end": 452,
                      "expression": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 452,
                        "decorators": [],
                        "name": "deco",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 0,
          "end": 16,
          "expression": {
            "type": "CallExpression",
            "start": 1,
            "end": 16,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 8,
                "end": 15,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 12,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 13,
                  "end": 15,
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1,
              "end": 7,
              "decorators": [],
              "name": "lambda",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "Decorator",
          "start": 17,
          "end": 31,
          "expression": {
            "type": "CallExpression",
            "start": 18,
            "end": 31,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 23,
                "end": 30,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 27,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 30,
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "deco",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 45,
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 507,
      "end": 544,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 542,
        "end": 544,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 520,
        "decorators": [],
        "name": "deco",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 521,
          "end": 535,
          "argument": {
            "type": "Identifier",
            "start": 524,
            "end": 528,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 528,
            "end": 535,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 530,
              "end": 535,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 530,
                "end": 533
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 536,
        "end": 541,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 538,
          "end": 541
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 546,
      "end": 580,
      "body": {
        "type": "TSEnumBody",
        "start": 556,
        "end": 580,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 560,
            "end": 566,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 560,
              "end": 562,
              "decorators": [],
              "name": "No",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 565,
              "end": 566,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "TSEnumMember",
            "start": 570,
            "end": 577,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 570,
              "end": 573,
              "decorators": [],
              "name": "Yes",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 576,
              "end": 577,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 551,
        "end": 555,
        "decorators": [],
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 582,
      "end": 625,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 624,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 594,
            "decorators": [],
            "name": "lambda",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 597,
            "end": 624,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 622,
              "end": 624,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 598,
                "end": 612,
                "argument": {
                  "type": "Identifier",
                  "start": 601,
                  "end": 605,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 605,
                  "end": 612,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 607,
                    "end": 612,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 607,
                      "end": 610
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 613,
              "end": 618,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 615,
                "end": 618
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 627,
      "end": 1133,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 674,
        "end": 1133,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 678,
            "end": 731,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 678,
                "end": 694,
                "expression": {
                  "type": "CallExpression",
                  "start": 679,
                  "end": 694,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 686,
                      "end": 693,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 686,
                        "end": 690,
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 691,
                        "end": 693,
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 679,
                    "end": 685,
                    "decorators": [],
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              {
                "type": "Decorator",
                "start": 697,
                "end": 711,
                "expression": {
                  "type": "CallExpression",
                  "start": 698,
                  "end": 711,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 703,
                      "end": 710,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 703,
                        "end": 707,
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 708,
                        "end": 710,
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 698,
                    "end": 702,
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 714,
              "end": 722,
              "decorators": [],
              "name": "greeting",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 722,
              "end": 730,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 724,
                "end": 730
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 735,
            "end": 798,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 735,
              "end": 746,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 746,
              "end": 798,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 764,
                "end": 798,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 770,
                    "end": 794,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 770,
                      "end": 793,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 770,
                        "end": 783,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 770,
                          "end": 774
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 775,
                          "end": 783,
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 786,
                        "end": 793,
                        "decorators": [],
                        "name": "message",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 747,
                  "end": 762,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 754,
                    "end": 762,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 756,
                      "end": 762
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 802,
            "end": 889,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 802,
                "end": 818,
                "expression": {
                  "type": "CallExpression",
                  "start": 803,
                  "end": 818,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 810,
                      "end": 817,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 810,
                        "end": 814,
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 815,
                        "end": 817,
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 803,
                    "end": 809,
                    "decorators": [],
                    "name": "lambda",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              },
              {
                "type": "Decorator",
                "start": 821,
                "end": 835,
                "expression": {
                  "type": "CallExpression",
                  "start": 822,
                  "end": 835,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 827,
                      "end": 834,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 831,
                        "decorators": [],
                        "name": "Enum",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 832,
                        "end": 834,
                        "decorators": [],
                        "name": "No",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 822,
                    "end": 826,
                    "decorators": [],
                    "name": "deco",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 838,
              "end": 843,
              "decorators": [],
              "name": "greet",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 843,
              "end": 889,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 846,
                "end": 889,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 852,
                    "end": 885,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 859,
                      "end": 884,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 859,
                        "end": 868,
                        "raw": "\"Hello, \"",
                        "value": "Hello, "
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 871,
                        "end": 884,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 871,
                          "end": 875
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 876,
                          "end": 884,
                          "decorators": [],
                          "name": "greeting",
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 893,
            "end": 963,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 893,
                "end": 900,
                "expression": {
                  "type": "Identifier",
                  "start": 894,
                  "end": 900,
                  "decorators": [],
                  "name": "lambda",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Decorator",
                "start": 903,
                "end": 908,
                "expression": {
                  "type": "Identifier",
                  "start": 904,
                  "end": 908,
                  "decorators": [],
                  "name": "deco",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 911,
              "end": 917,
              "decorators": [],
              "name": "greet1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 917,
              "end": 963,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 920,
                "end": 963,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 926,
                    "end": 959,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 933,
                      "end": 958,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 933,
                        "end": 942,
                        "raw": "\"Hello, \"",
                        "value": "Hello, "
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 945,
                        "end": 958,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 945,
                          "end": 949
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 950,
                          "end": 958,
                          "decorators": [],
                          "name": "greeting",
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 967,
            "end": 1056,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 967,
              "end": 973,
              "decorators": [],
              "name": "greet2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 973,
              "end": 1056,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1013,
                "end": 1056,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1019,
                    "end": 1052,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1026,
                      "end": 1051,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 1026,
                        "end": 1035,
                        "raw": "\"Hello, \"",
                        "value": "Hello, "
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 1038,
                        "end": 1051,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1038,
                          "end": 1042
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1043,
                          "end": 1051,
                          "decorators": [],
                          "name": "greeting",
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
                  "start": 1006,
                  "end": 1011,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 974,
                      "end": 990,
                      "expression": {
                        "type": "CallExpression",
                        "start": 975,
                        "end": 990,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 982,
                            "end": 989,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 982,
                              "end": 986,
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 987,
                              "end": 989,
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 975,
                          "end": 981,
                          "decorators": [],
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "Decorator",
                      "start": 991,
                      "end": 1005,
                      "expression": {
                        "type": "CallExpression",
                        "start": 992,
                        "end": 1005,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 997,
                            "end": 1004,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 997,
                              "end": 1001,
                              "decorators": [],
                              "name": "Enum",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1002,
                              "end": 1004,
                              "decorators": [],
                              "name": "No",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 992,
                          "end": 996,
                          "decorators": [],
                          "name": "deco",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "name": "param",
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
            "start": 1060,
            "end": 1131,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1060,
              "end": 1066,
              "decorators": [],
              "name": "greet3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1066,
              "end": 1131,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1088,
                "end": 1131,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1094,
                    "end": 1127,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1101,
                      "end": 1126,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 1101,
                        "end": 1110,
                        "raw": "\"Hello, \"",
                        "value": "Hello, "
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 1113,
                        "end": 1126,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1113,
                          "end": 1117
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1118,
                          "end": 1126,
                          "decorators": [],
                          "name": "greeting",
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
                  "start": 1081,
                  "end": 1086,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 1067,
                      "end": 1074,
                      "expression": {
                        "type": "Identifier",
                        "start": 1068,
                        "end": 1074,
                        "decorators": [],
                        "name": "lambda",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Decorator",
                      "start": 1075,
                      "end": 1080,
                      "expression": {
                        "type": "Identifier",
                        "start": 1076,
                        "end": 1080,
                        "decorators": [],
                        "name": "deco",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 627,
          "end": 643,
          "expression": {
            "type": "CallExpression",
            "start": 628,
            "end": 643,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 635,
                "end": 642,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 639,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 642,
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 628,
              "end": 634,
              "decorators": [],
              "name": "lambda",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        {
          "type": "Decorator",
          "start": 644,
          "end": 658,
          "expression": {
            "type": "CallExpression",
            "start": 645,
            "end": 658,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 650,
                "end": 657,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 654,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 655,
                  "end": 657,
                  "decorators": [],
                  "name": "No",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 645,
              "end": 649,
              "decorators": [],
              "name": "deco",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 665,
        "end": 673,
        "decorators": [],
        "name": "Greeter1",
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
