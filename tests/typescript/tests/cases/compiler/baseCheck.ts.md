__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 600,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 49,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 49,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 47,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 21,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 47,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 22,
                  "end": 31,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 23,
                    "end": 31,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 25,
                      "end": 31
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 33,
                  "end": 42,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 36,
                      "end": 42
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 47,
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 130,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 60,
        "decorators": [],
        "name": "ELoc",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 130,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 128,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 88,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 128,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 98,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 92,
                      "end": 98
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 128,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 122,
                    "expression": {
                      "type": "CallExpression",
                      "start": 110,
                      "end": 121,
                      "callee": {
                        "type": "Super",
                        "start": 110,
                        "end": 115
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 116,
                          "end": 117,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "ClassDeclaration",
      "start": 131,
      "end": 255,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 144,
        "decorators": [],
        "name": "ELocVar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 255,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 216,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 174,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 216,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 175,
                  "end": 184,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 184,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 178,
                      "end": 184
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 186,
                "end": 216,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 196,
                    "end": 210,
                    "expression": {
                      "type": "CallExpression",
                      "start": 196,
                      "end": 209,
                      "callee": {
                        "type": "Super",
                        "start": 196,
                        "end": 201
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 202,
                          "end": 203,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "Identifier",
                          "start": 205,
                          "end": 208,
                          "decorators": [],
                          "name": "loc",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
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
            "start": 222,
            "end": 253,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 223,
              "end": 253,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 253,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 236,
                    "end": 247,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 240,
                        "end": 246,
                        "id": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 243,
                          "decorators": [],
                          "name": "loc",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 244,
                          "end": 246,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
      "type": "ClassDeclaration",
      "start": 257,
      "end": 327,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 273,
        "end": 274,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 327,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 277,
            "end": 324,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 288,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 288,
              "end": 324,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 289,
                  "end": 305,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 296,
                    "end": 305,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 305,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 299,
                        "end": 305
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
                "start": 307,
                "end": 324,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 309,
                    "end": 322,
                    "expression": {
                      "type": "CallExpression",
                      "start": 309,
                      "end": 322,
                      "callee": {
                        "type": "Super",
                        "start": 309,
                        "end": 314
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 315,
                          "end": 321,
                          "object": {
                            "type": "ThisExpression",
                            "start": 315,
                            "end": 319
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 320,
                            "end": 321,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "ClassDeclaration",
      "start": 346,
      "end": 418,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 353,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 362,
        "end": 363,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 364,
        "end": 418,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 416,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 366,
              "end": 377,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 377,
              "end": 416,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 378,
                  "end": 394,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 394,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 386,
                      "end": 394,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 388,
                        "end": 394
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
                "start": 396,
                "end": 416,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 398,
                    "end": 414,
                    "expression": {
                      "type": "CallExpression",
                      "start": 398,
                      "end": 414,
                      "callee": {
                        "type": "Super",
                        "start": 398,
                        "end": 403
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 404,
                          "end": 405,
                          "value": 0,
                          "raw": "0"
                        },
                        {
                          "type": "MemberExpression",
                          "start": 407,
                          "end": 413,
                          "object": {
                            "type": "ThisExpression",
                            "start": 407,
                            "end": 411
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 412,
                            "end": 413,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "ClassDeclaration",
      "start": 419,
      "end": 497,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 425,
        "end": 426,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 435,
        "end": 436,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 437,
        "end": 497,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 439,
            "end": 495,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 439,
              "end": 450,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 450,
              "end": 495,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 451,
                  "end": 467,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 467,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 459,
                      "end": 467,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 461,
                        "end": 467
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
                "start": 469,
                "end": 495,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 471,
                    "end": 493,
                    "expression": {
                      "type": "CallExpression",
                      "start": 471,
                      "end": 493,
                      "callee": {
                        "type": "Super",
                        "start": 471,
                        "end": 476
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 477,
                          "end": 484,
                          "value": "hello",
                          "raw": "\"hello\""
                        },
                        {
                          "type": "MemberExpression",
                          "start": 486,
                          "end": 492,
                          "object": {
                            "type": "ThisExpression",
                            "start": 486,
                            "end": 490
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 491,
                            "end": 492,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "start": 519,
      "end": 600,
      "id": {
        "type": "Identifier",
        "start": 528,
        "end": 529,
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
        "start": 532,
        "end": 600,
        "body": [
          {
            "type": "IfStatement",
            "start": 538,
            "end": 598,
            "test": {
              "type": "BinaryExpression",
              "start": 542,
              "end": 546,
              "left": {
                "type": "Identifier",
                "start": 542,
                "end": 543,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 544,
                "end": 546,
                "value": 10,
                "raw": "10"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 548,
              "end": 567,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 556,
                  "end": 561,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 556,
                    "end": 560,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 556,
                      "end": 557,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 558,
                      "end": 560,
                      "value": 11,
                      "raw": "11"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 577,
              "end": 598,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 587,
                  "end": 592,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 587,
                    "end": 591,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 587,
                      "end": 588,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 589,
                      "end": 591,
                      "value": 12,
                      "raw": "12"
                    }
                  },
                  "directive": null
                }
              ]
            }
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
