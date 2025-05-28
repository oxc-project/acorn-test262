__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1716,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 58,
      "decorators": [
        {
          "type": "Decorator",
          "start": 31,
          "end": 45,
          "expression": {
            "type": "CallExpression",
            "start": 32,
            "end": 45,
            "callee": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 36,
                "end": 44,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 44,
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 54,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 58,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 90,
      "decorators": [
        {
          "type": "Decorator",
          "start": 69,
          "end": 77,
          "expression": {
            "type": "CallExpression",
            "start": 70,
            "end": 77,
            "callee": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 74,
                "end": 76,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 90,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 132,
      "decorators": [
        {
          "type": "Decorator",
          "start": 101,
          "end": 119,
          "expression": {
            "type": "CallExpression",
            "start": 102,
            "end": 119,
            "callee": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 106,
                "end": 118,
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 107,
                  "end": 115,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 115,
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            ],
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 128,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 132,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 140,
      "end": 666,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 148,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 149,
        "end": 666,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 188,
            "decorators": [
              {
                "type": "Decorator",
                "start": 155,
                "end": 169,
                "expression": {
                  "type": "CallExpression",
                  "start": 156,
                  "end": 169,
                  "callee": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 159,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 160,
                      "end": 168,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 168,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 183,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 183,
              "end": 188,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 186,
                "end": 188,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 193,
            "end": 241,
            "decorators": [
              {
                "type": "Decorator",
                "start": 193,
                "end": 207,
                "expression": {
                  "type": "CallExpression",
                  "start": 194,
                  "end": 207,
                  "callee": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 197,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 198,
                      "end": 206,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 206,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 220,
              "end": 241,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 223,
                "end": 241,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 225,
                    "end": 239,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 232,
                      "end": 238,
                      "object": {
                        "type": "ThisExpression",
                        "start": 232,
                        "end": 236
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 246,
            "end": 284,
            "decorators": [
              {
                "type": "Decorator",
                "start": 246,
                "end": 260,
                "expression": {
                  "type": "CallExpression",
                  "start": 247,
                  "end": 260,
                  "callee": {
                    "type": "Identifier",
                    "start": 247,
                    "end": 250,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 251,
                      "end": 259,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 259,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 273,
              "end": 284,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 274,
                  "end": 280,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 275,
                    "end": 280,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 277,
                      "end": 280
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 282,
                "end": 284,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 289,
            "end": 318,
            "decorators": [
              {
                "type": "Decorator",
                "start": 289,
                "end": 303,
                "expression": {
                  "type": "CallExpression",
                  "start": 290,
                  "end": 303,
                  "callee": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 293,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 294,
                      "end": 302,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 302,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 317,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 314,
                "end": 317
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 323,
            "end": 361,
            "decorators": [
              {
                "type": "Decorator",
                "start": 323,
                "end": 337,
                "expression": {
                  "type": "CallExpression",
                  "start": 324,
                  "end": 337,
                  "callee": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 327,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 328,
                      "end": 336,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 334,
                        "end": 336,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 355,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 360,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 357,
                "end": 360
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 367,
            "end": 393,
            "decorators": [
              {
                "type": "Decorator",
                "start": 367,
                "end": 381,
                "expression": {
                  "type": "CallExpression",
                  "start": 368,
                  "end": 381,
                  "callee": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 371,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 372,
                      "end": 380,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 380,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 382,
              "end": 388,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 393,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 391,
                "end": 393,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 398,
            "end": 439,
            "decorators": [
              {
                "type": "Decorator",
                "start": 398,
                "end": 412,
                "expression": {
                  "type": "CallExpression",
                  "start": 399,
                  "end": 412,
                  "callee": {
                    "type": "Identifier",
                    "start": 399,
                    "end": 402,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 403,
                      "end": 411,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 411,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 418,
              "end": 439,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 421,
                "end": 439,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 423,
                    "end": 437,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 430,
                      "end": 436,
                      "object": {
                        "type": "ThisExpression",
                        "start": 430,
                        "end": 434
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 435,
                        "end": 436,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 444,
            "end": 475,
            "decorators": [
              {
                "type": "Decorator",
                "start": 444,
                "end": 458,
                "expression": {
                  "type": "CallExpression",
                  "start": 445,
                  "end": 458,
                  "callee": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 448,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 449,
                      "end": 457,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 455,
                        "end": 457,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 464,
              "end": 475,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 465,
                  "end": 471,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 466,
                    "end": 471,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 468,
                      "end": 471
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 473,
                "end": 475,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 480,
            "end": 502,
            "decorators": [
              {
                "type": "Decorator",
                "start": 480,
                "end": 494,
                "expression": {
                  "type": "CallExpression",
                  "start": 481,
                  "end": 494,
                  "callee": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 484,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 485,
                      "end": 493,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 493,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 496,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 496,
              "end": 501,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 498,
                "end": 501
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 507,
            "end": 538,
            "decorators": [
              {
                "type": "Decorator",
                "start": 507,
                "end": 521,
                "expression": {
                  "type": "CallExpression",
                  "start": 508,
                  "end": 521,
                  "callee": {
                    "type": "Identifier",
                    "start": 508,
                    "end": 511,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 512,
                      "end": 520,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 518,
                        "end": 520,
                        "decorators": [],
                        "name": "C4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 531,
              "end": 532,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 532,
              "end": 537,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 534,
                "end": 537
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 544,
            "end": 581,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 544,
              "end": 555,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 555,
              "end": 581,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 571,
                  "end": 577,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 556,
                      "end": 570,
                      "expression": {
                        "type": "CallExpression",
                        "start": 557,
                        "end": 570,
                        "callee": {
                          "type": "Identifier",
                          "start": 557,
                          "end": 560,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 561,
                            "end": 569,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 567,
                              "end": 569,
                              "decorators": [],
                              "name": "C4",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 572,
                    "end": 577,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 574,
                      "end": 577
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 579,
                "end": 581,
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
            "start": 586,
            "end": 626,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 593,
              "end": 600,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 600,
              "end": 626,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 616,
                  "end": 622,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 601,
                      "end": 615,
                      "expression": {
                        "type": "CallExpression",
                        "start": 602,
                        "end": 615,
                        "callee": {
                          "type": "Identifier",
                          "start": 602,
                          "end": 605,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 606,
                            "end": 614,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 612,
                              "end": 614,
                              "decorators": [],
                              "name": "C4",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 617,
                    "end": 622,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 619,
                      "end": 622
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 624,
                "end": 626,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 631,
            "end": 664,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 631,
              "end": 638,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 638,
              "end": 664,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 654,
                  "end": 660,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 639,
                      "end": 653,
                      "expression": {
                        "type": "CallExpression",
                        "start": 640,
                        "end": 653,
                        "callee": {
                          "type": "Identifier",
                          "start": 640,
                          "end": 643,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 644,
                            "end": 652,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 650,
                              "end": 652,
                              "decorators": [],
                              "name": "C4",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 655,
                    "end": 660,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 657,
                      "end": 660
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 662,
                "end": 664,
                "body": []
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
      "start": 677,
      "end": 1126,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 683,
        "end": 685,
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 686,
        "end": 1126,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 692,
            "end": 719,
            "decorators": [
              {
                "type": "Decorator",
                "start": 692,
                "end": 700,
                "expression": {
                  "type": "CallExpression",
                  "start": 693,
                  "end": 700,
                  "callee": {
                    "type": "Identifier",
                    "start": 693,
                    "end": 696,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 697,
                      "end": 699,
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 708,
              "end": 714,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 714,
              "end": 719,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 717,
                "end": 719,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 724,
            "end": 766,
            "decorators": [
              {
                "type": "Decorator",
                "start": 724,
                "end": 732,
                "expression": {
                  "type": "CallExpression",
                  "start": 725,
                  "end": 732,
                  "callee": {
                    "type": "Identifier",
                    "start": 725,
                    "end": 728,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 729,
                      "end": 731,
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 744,
              "end": 745,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 745,
              "end": 766,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 748,
                "end": 766,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 750,
                    "end": 764,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 757,
                      "end": 763,
                      "object": {
                        "type": "ThisExpression",
                        "start": 757,
                        "end": 761
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 762,
                        "end": 763,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 771,
            "end": 803,
            "decorators": [
              {
                "type": "Decorator",
                "start": 771,
                "end": 779,
                "expression": {
                  "type": "CallExpression",
                  "start": 772,
                  "end": 779,
                  "callee": {
                    "type": "Identifier",
                    "start": 772,
                    "end": 775,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 776,
                      "end": 778,
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 791,
              "end": 792,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 792,
              "end": 803,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 793,
                  "end": 799,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 794,
                    "end": 799,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 796,
                      "end": 799
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 801,
                "end": 803,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 808,
            "end": 831,
            "decorators": [
              {
                "type": "Decorator",
                "start": 808,
                "end": 816,
                "expression": {
                  "type": "CallExpression",
                  "start": 809,
                  "end": 816,
                  "callee": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 812,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 813,
                      "end": 815,
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 824,
              "end": 825,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 825,
              "end": 830,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 827,
                "end": 830
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 836,
            "end": 868,
            "decorators": [
              {
                "type": "Decorator",
                "start": 836,
                "end": 844,
                "expression": {
                  "type": "CallExpression",
                  "start": 837,
                  "end": 844,
                  "callee": {
                    "type": "Identifier",
                    "start": 837,
                    "end": 840,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 841,
                      "end": 843,
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 861,
              "end": 862,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 862,
              "end": 867,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 864,
                "end": 867
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 874,
            "end": 894,
            "decorators": [
              {
                "type": "Decorator",
                "start": 874,
                "end": 882,
                "expression": {
                  "type": "CallExpression",
                  "start": 875,
                  "end": 882,
                  "callee": {
                    "type": "Identifier",
                    "start": 875,
                    "end": 878,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 879,
                      "end": 881,
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 883,
              "end": 889,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 889,
              "end": 894,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 892,
                "end": 894,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 899,
            "end": 934,
            "decorators": [
              {
                "type": "Decorator",
                "start": 899,
                "end": 907,
                "expression": {
                  "type": "CallExpression",
                  "start": 900,
                  "end": 907,
                  "callee": {
                    "type": "Identifier",
                    "start": 900,
                    "end": 903,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 904,
                      "end": 906,
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 912,
              "end": 913,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 913,
              "end": 934,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 916,
                "end": 934,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 918,
                    "end": 932,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 925,
                      "end": 931,
                      "object": {
                        "type": "ThisExpression",
                        "start": 925,
                        "end": 929
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 930,
                        "end": 931,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 939,
            "end": 964,
            "decorators": [
              {
                "type": "Decorator",
                "start": 939,
                "end": 947,
                "expression": {
                  "type": "CallExpression",
                  "start": 940,
                  "end": 947,
                  "callee": {
                    "type": "Identifier",
                    "start": 940,
                    "end": 943,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 944,
                      "end": 946,
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 952,
              "end": 953,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 953,
              "end": 964,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 954,
                  "end": 960,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 955,
                    "end": 960,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 957,
                      "end": 960
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 962,
                "end": 964,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 969,
            "end": 985,
            "decorators": [
              {
                "type": "Decorator",
                "start": 969,
                "end": 977,
                "expression": {
                  "type": "CallExpression",
                  "start": 970,
                  "end": 977,
                  "callee": {
                    "type": "Identifier",
                    "start": 970,
                    "end": 973,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 974,
                      "end": 976,
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 978,
              "end": 979,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 979,
              "end": 984,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 981,
                "end": 984
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 990,
            "end": 1015,
            "decorators": [
              {
                "type": "Decorator",
                "start": 990,
                "end": 998,
                "expression": {
                  "type": "CallExpression",
                  "start": 991,
                  "end": 998,
                  "callee": {
                    "type": "Identifier",
                    "start": 991,
                    "end": 994,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 995,
                      "end": 997,
                      "decorators": [],
                      "name": "C5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1008,
              "end": 1009,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1009,
              "end": 1014,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1011,
                "end": 1014
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 1022,
            "end": 1053,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1022,
              "end": 1033,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1033,
              "end": 1053,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1043,
                  "end": 1049,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 1034,
                      "end": 1042,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1035,
                        "end": 1042,
                        "callee": {
                          "type": "Identifier",
                          "start": 1035,
                          "end": 1038,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1039,
                            "end": 1041,
                            "decorators": [],
                            "name": "C5",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1044,
                    "end": 1049,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1046,
                      "end": 1049
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1051,
                "end": 1053,
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
            "start": 1058,
            "end": 1092,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1065,
              "end": 1072,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1072,
              "end": 1092,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1082,
                  "end": 1088,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 1073,
                      "end": 1081,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1074,
                        "end": 1081,
                        "callee": {
                          "type": "Identifier",
                          "start": 1074,
                          "end": 1077,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1078,
                            "end": 1080,
                            "decorators": [],
                            "name": "C5",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1083,
                    "end": 1088,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1085,
                      "end": 1088
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1090,
                "end": 1092,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1097,
            "end": 1124,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1097,
              "end": 1104,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1104,
              "end": 1124,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1114,
                  "end": 1120,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 1105,
                      "end": 1113,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1106,
                        "end": 1113,
                        "callee": {
                          "type": "Identifier",
                          "start": 1106,
                          "end": 1109,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1110,
                            "end": 1112,
                            "decorators": [],
                            "name": "C5",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1115,
                    "end": 1120,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1117,
                      "end": 1120
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1122,
                "end": 1124,
                "body": []
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
      "start": 1137,
      "end": 1716,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1143,
        "end": 1145,
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 1146,
        "end": 1716,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1152,
            "end": 1189,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1152,
                "end": 1170,
                "expression": {
                  "type": "CallExpression",
                  "start": 1153,
                  "end": 1170,
                  "callee": {
                    "type": "Identifier",
                    "start": 1153,
                    "end": 1156,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1157,
                      "end": 1169,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1158,
                        "end": 1166,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1164,
                          "end": 1166,
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1178,
              "end": 1184,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1184,
              "end": 1189,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1187,
                "end": 1189,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1194,
            "end": 1246,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1194,
                "end": 1212,
                "expression": {
                  "type": "CallExpression",
                  "start": 1195,
                  "end": 1212,
                  "callee": {
                    "type": "Identifier",
                    "start": 1195,
                    "end": 1198,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1199,
                      "end": 1211,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1200,
                        "end": 1208,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1206,
                          "end": 1208,
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1224,
              "end": 1225,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1225,
              "end": 1246,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1228,
                "end": 1246,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1230,
                    "end": 1244,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1237,
                      "end": 1243,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1237,
                        "end": 1241
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1242,
                        "end": 1243,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1251,
            "end": 1293,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1251,
                "end": 1269,
                "expression": {
                  "type": "CallExpression",
                  "start": 1252,
                  "end": 1269,
                  "callee": {
                    "type": "Identifier",
                    "start": 1252,
                    "end": 1255,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1256,
                      "end": 1268,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1257,
                        "end": 1265,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1263,
                          "end": 1265,
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1281,
              "end": 1282,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1282,
              "end": 1293,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1283,
                  "end": 1289,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1284,
                    "end": 1289,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1286,
                      "end": 1289
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1291,
                "end": 1293,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1298,
            "end": 1331,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1298,
                "end": 1316,
                "expression": {
                  "type": "CallExpression",
                  "start": 1299,
                  "end": 1316,
                  "callee": {
                    "type": "Identifier",
                    "start": 1299,
                    "end": 1302,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1303,
                      "end": 1315,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1304,
                        "end": 1312,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1310,
                          "end": 1312,
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1324,
              "end": 1325,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1325,
              "end": 1330,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1327,
                "end": 1330
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 1336,
            "end": 1378,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1336,
                "end": 1354,
                "expression": {
                  "type": "CallExpression",
                  "start": 1337,
                  "end": 1354,
                  "callee": {
                    "type": "Identifier",
                    "start": 1337,
                    "end": 1340,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1341,
                      "end": 1353,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1342,
                        "end": 1350,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1348,
                          "end": 1350,
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1371,
              "end": 1372,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1372,
              "end": 1377,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1374,
                "end": 1377
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 1384,
            "end": 1414,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1384,
                "end": 1402,
                "expression": {
                  "type": "CallExpression",
                  "start": 1385,
                  "end": 1402,
                  "callee": {
                    "type": "Identifier",
                    "start": 1385,
                    "end": 1388,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1389,
                      "end": 1401,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1390,
                        "end": 1398,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1396,
                          "end": 1398,
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1403,
              "end": 1409,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1409,
              "end": 1414,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1412,
                "end": 1414,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1419,
            "end": 1464,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1419,
                "end": 1437,
                "expression": {
                  "type": "CallExpression",
                  "start": 1420,
                  "end": 1437,
                  "callee": {
                    "type": "Identifier",
                    "start": 1420,
                    "end": 1423,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1424,
                      "end": 1436,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1425,
                        "end": 1433,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1431,
                          "end": 1433,
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1442,
              "end": 1443,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1443,
              "end": 1464,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1446,
                "end": 1464,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1448,
                    "end": 1462,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1455,
                      "end": 1461,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1455,
                        "end": 1459
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1460,
                        "end": 1461,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1469,
            "end": 1504,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1469,
                "end": 1487,
                "expression": {
                  "type": "CallExpression",
                  "start": 1470,
                  "end": 1487,
                  "callee": {
                    "type": "Identifier",
                    "start": 1470,
                    "end": 1473,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1474,
                      "end": 1486,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1475,
                        "end": 1483,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1481,
                          "end": 1483,
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1492,
              "end": 1493,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1493,
              "end": 1504,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1494,
                  "end": 1500,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1495,
                    "end": 1500,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1497,
                      "end": 1500
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1502,
                "end": 1504,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1509,
            "end": 1535,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1509,
                "end": 1527,
                "expression": {
                  "type": "CallExpression",
                  "start": 1510,
                  "end": 1527,
                  "callee": {
                    "type": "Identifier",
                    "start": 1510,
                    "end": 1513,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1514,
                      "end": 1526,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1515,
                        "end": 1523,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1521,
                          "end": 1523,
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1528,
              "end": 1529,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1529,
              "end": 1534,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1531,
                "end": 1534
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 1540,
            "end": 1575,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1540,
                "end": 1558,
                "expression": {
                  "type": "CallExpression",
                  "start": 1541,
                  "end": 1558,
                  "callee": {
                    "type": "Identifier",
                    "start": 1541,
                    "end": 1544,
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1545,
                      "end": 1557,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1546,
                        "end": 1554,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "start": 1552,
                          "end": 1554,
                          "decorators": [],
                          "name": "C6",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "id": null,
                        "generator": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  ],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 1568,
              "end": 1569,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1569,
              "end": 1574,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1571,
                "end": 1574
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 1582,
            "end": 1623,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1582,
              "end": 1593,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1593,
              "end": 1623,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1613,
                  "end": 1619,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 1594,
                      "end": 1612,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1595,
                        "end": 1612,
                        "callee": {
                          "type": "Identifier",
                          "start": 1595,
                          "end": 1598,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 1599,
                            "end": 1611,
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "start": 1600,
                              "end": 1608,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "start": 1606,
                                "end": 1608,
                                "decorators": [],
                                "name": "C6",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "id": null,
                              "generator": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1614,
                    "end": 1619,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1616,
                      "end": 1619
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1621,
                "end": 1623,
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
            "start": 1628,
            "end": 1672,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1635,
              "end": 1642,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1642,
              "end": 1672,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1662,
                  "end": 1668,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 1643,
                      "end": 1661,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1644,
                        "end": 1661,
                        "callee": {
                          "type": "Identifier",
                          "start": 1644,
                          "end": 1647,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 1648,
                            "end": 1660,
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "start": 1649,
                              "end": 1657,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "start": 1655,
                                "end": 1657,
                                "decorators": [],
                                "name": "C6",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "id": null,
                              "generator": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1663,
                    "end": 1668,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1665,
                      "end": 1668
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1670,
                "end": 1672,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1677,
            "end": 1714,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1677,
              "end": 1684,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1684,
              "end": 1714,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1704,
                  "end": 1710,
                  "decorators": [
                    {
                      "type": "Decorator",
                      "start": 1685,
                      "end": 1703,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1686,
                        "end": 1703,
                        "callee": {
                          "type": "Identifier",
                          "start": 1686,
                          "end": 1689,
                          "decorators": [],
                          "name": "dec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 1690,
                            "end": 1702,
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "start": 1691,
                              "end": 1699,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "start": 1697,
                                "end": 1699,
                                "decorators": [],
                                "name": "C6",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "id": null,
                              "generator": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        ],
                        "optional": false
                      }
                    }
                  ],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1705,
                    "end": 1710,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1707,
                      "end": 1710
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1712,
                "end": 1714,
                "body": []
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
