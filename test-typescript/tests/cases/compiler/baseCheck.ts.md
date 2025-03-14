baseCheck.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 601,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 49,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 49,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 47,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 21,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 21,
              "end": 47,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 47,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 130,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 130,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 128,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 88,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 128,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 116,
                          "end": 117,
                          "raw": "0",
                          "value": 0
                        },
                        {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 110,
                        "end": 115
                      },
                      "optional": false
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 60,
        "decorators": [],
        "name": "ELoc",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 131,
      "end": 255,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 255,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 216,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 174,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 174,
              "end": 216,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 202,
                          "end": 203,
                          "raw": "0",
                          "value": 0
                        },
                        {
                          "type": "Identifier",
                          "start": 205,
                          "end": 208,
                          "decorators": [],
                          "name": "loc",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 196,
                        "end": 201
                      },
                      "optional": false
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
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 222,
            "end": 253,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 223,
              "end": 253,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 253,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 236,
                    "end": 247,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 240,
                        "end": 246,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 243,
                          "decorators": [],
                          "name": "loc",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 244,
                          "end": 246,
                          "raw": "10",
                          "value": 10
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 144,
        "decorators": [],
        "name": "ELocVar",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 257,
      "end": 327,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 275,
        "end": 327,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 277,
            "end": 324,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 288,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 288,
              "end": 324,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 315,
                          "end": 321,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 315,
                            "end": 319
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 320,
                            "end": 321,
                            "decorators": [],
                            "name": "z",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 309,
                        "end": 314
                      },
                      "optional": false
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 264,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 273,
        "end": 274,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 346,
      "end": 418,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 364,
        "end": 418,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 416,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 366,
              "end": 377,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 377,
              "end": 416,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 404,
                          "end": 405,
                          "raw": "0",
                          "value": 0
                        },
                        {
                          "type": "MemberExpression",
                          "start": 407,
                          "end": 413,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 407,
                            "end": 411
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 412,
                            "end": 413,
                            "decorators": [],
                            "name": "z",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 398,
                        "end": 403
                      },
                      "optional": false
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 353,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 362,
        "end": 363,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 419,
      "end": 497,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 437,
        "end": 497,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 439,
            "end": 495,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 439,
              "end": 450,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 450,
              "end": 495,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 477,
                          "end": 484,
                          "raw": "\"hello\"",
                          "value": "hello"
                        },
                        {
                          "type": "MemberExpression",
                          "start": 486,
                          "end": 492,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 486,
                            "end": 490
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 491,
                            "end": 492,
                            "decorators": [],
                            "name": "z",
                            "optional": false
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 471,
                        "end": 476
                      },
                      "optional": false
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 425,
        "end": 426,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 435,
        "end": 436,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 519,
      "end": 600,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 532,
        "end": 600,
        "body": [
          {
            "type": "IfStatement",
            "start": 538,
            "end": 598,
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
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 589,
                      "end": 591,
                      "raw": "12",
                      "value": 12
                    }
                  }
                }
              ]
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
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 558,
                      "end": 560,
                      "raw": "11",
                      "value": 11
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 542,
              "end": 546,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 542,
                "end": 543,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 544,
                "end": 546,
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
        "start": 528,
        "end": 529,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
