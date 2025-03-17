__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1717,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 54,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 58,
        "body": []
      },
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
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 36,
                "end": 44,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 44,
                  "name": "C1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 86,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 90,
        "body": []
      },
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
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 74,
                "end": 76,
                "name": "C2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 132,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 128,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 132,
        "body": []
      },
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
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "CallExpression",
                "start": 106,
                "end": 118,
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "start": 107,
                  "end": 115,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 115,
                    "name": "C3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 140,
      "end": 666,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 148,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 149,
        "end": 666,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 188,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 183,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 183,
              "end": 188,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 186,
                "end": 188,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 160,
                      "end": 168,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 168,
                        "name": "C4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 193,
            "end": 241,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 220,
              "end": 241,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "y",
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 198,
                      "end": 206,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 206,
                        "name": "C4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 246,
            "end": 284,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 273,
              "end": 284,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 274,
                  "end": 280,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 275,
                    "end": 280,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 277,
                      "end": 280
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 282,
                "end": 284,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 251,
                      "end": 259,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 259,
                        "name": "C4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 289,
            "end": 318,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 294,
                      "end": 302,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 302,
                        "name": "C4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 323,
            "end": 361,
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 355,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": true,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 328,
                      "end": 336,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 334,
                        "end": 336,
                        "name": "C4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
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
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 367,
            "end": 393,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 382,
              "end": 388,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 388,
              "end": 393,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 391,
                "end": 393,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 372,
                      "end": 380,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 380,
                        "name": "C4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 398,
            "end": 439,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 418,
              "end": 439,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "y",
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 403,
                      "end": 411,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 411,
                        "name": "C4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 444,
            "end": 475,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 464,
              "end": 475,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 465,
                  "end": 471,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 466,
                    "end": 471,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 468,
                      "end": 471
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 473,
                "end": 475,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 449,
                      "end": 457,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 455,
                        "end": 457,
                        "name": "C4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 480,
            "end": 502,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 496,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 485,
                      "end": 493,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 493,
                        "name": "C4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 507,
            "end": 538,
            "key": {
              "type": "Identifier",
              "start": 531,
              "end": 532,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": false,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 512,
                      "end": 520,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 518,
                        "end": 520,
                        "name": "C4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
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
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 544,
            "end": 581,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 544,
              "end": 555,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 555,
              "end": 581,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 571,
                  "end": 577,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 572,
                    "end": 577,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 574,
                      "end": 577
                    }
                  },
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 561,
                            "end": 569,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "Identifier",
                              "start": 567,
                              "end": 569,
                              "name": "C4",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 579,
                "end": 581,
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
            "start": 586,
            "end": 626,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 593,
              "end": 600,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 600,
              "end": 626,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 616,
                  "end": 622,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 617,
                    "end": 622,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 619,
                      "end": 622
                    }
                  },
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 606,
                            "end": 614,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "Identifier",
                              "start": 612,
                              "end": 614,
                              "name": "C4",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 624,
                "end": 626,
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
            "start": 631,
            "end": 664,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 631,
              "end": 638,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 638,
              "end": 664,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 654,
                  "end": 660,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 655,
                    "end": 660,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 657,
                      "end": 660
                    }
                  },
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 644,
                            "end": 652,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "Identifier",
                              "start": 650,
                              "end": 652,
                              "name": "C4",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeParameters": null,
                            "returnType": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 662,
                "end": 664,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 677,
      "end": 1126,
      "id": {
        "type": "Identifier",
        "start": 683,
        "end": 685,
        "name": "C5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 686,
        "end": 1126,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 692,
            "end": 719,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 708,
              "end": 714,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 714,
              "end": 719,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 717,
                "end": 719,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 697,
                      "end": 699,
                      "name": "C5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 724,
            "end": 766,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 744,
              "end": 745,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 745,
              "end": 766,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "y",
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 729,
                      "end": 731,
                      "name": "C5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 771,
            "end": 803,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 791,
              "end": 792,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 792,
              "end": 803,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 793,
                  "end": 799,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 794,
                    "end": 799,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 796,
                      "end": 799
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 801,
                "end": 803,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 776,
                      "end": 778,
                      "name": "C5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 808,
            "end": 831,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 824,
              "end": 825,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 813,
                      "end": 815,
                      "name": "C5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 836,
            "end": 868,
            "key": {
              "type": "Identifier",
              "start": 861,
              "end": 862,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": true,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 841,
                      "end": 843,
                      "name": "C5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
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
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 874,
            "end": 894,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 883,
              "end": 889,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 889,
              "end": 894,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 892,
                "end": 894,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 879,
                      "end": 881,
                      "name": "C5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 899,
            "end": 934,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 912,
              "end": 913,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 913,
              "end": 934,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "y",
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 904,
                      "end": 906,
                      "name": "C5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 939,
            "end": 964,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 952,
              "end": 953,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 953,
              "end": 964,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 954,
                  "end": 960,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 955,
                    "end": 960,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 957,
                      "end": 960
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 962,
                "end": 964,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 944,
                      "end": 946,
                      "name": "C5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 969,
            "end": 985,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 978,
              "end": 979,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 974,
                      "end": 976,
                      "name": "C5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 990,
            "end": 1015,
            "key": {
              "type": "Identifier",
              "start": 1008,
              "end": 1009,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": false,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 995,
                      "end": 997,
                      "name": "C5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
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
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 1022,
            "end": 1053,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1022,
              "end": 1033,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1033,
              "end": 1053,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1043,
                  "end": 1049,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1044,
                    "end": 1049,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1046,
                      "end": 1049
                    }
                  },
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1039,
                            "end": 1041,
                            "name": "C5",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1051,
                "end": 1053,
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
            "start": 1058,
            "end": 1092,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1065,
              "end": 1072,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1072,
              "end": 1092,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1082,
                  "end": 1088,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1083,
                    "end": 1088,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1085,
                      "end": 1088
                    }
                  },
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1078,
                            "end": 1080,
                            "name": "C5",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1090,
                "end": 1092,
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
            "start": 1097,
            "end": 1124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1097,
              "end": 1104,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1104,
              "end": 1124,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1114,
                  "end": 1120,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1115,
                    "end": 1120,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1117,
                      "end": 1120
                    }
                  },
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1110,
                            "end": 1112,
                            "name": "C5",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1122,
                "end": 1124,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 1137,
      "end": 1716,
      "id": {
        "type": "Identifier",
        "start": 1143,
        "end": 1145,
        "name": "C6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1146,
        "end": 1716,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1152,
            "end": 1189,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1178,
              "end": 1184,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1184,
              "end": 1189,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1187,
                "end": 1189,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1157,
                      "end": 1169,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1158,
                        "end": 1166,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1164,
                          "end": 1166,
                          "name": "C6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1194,
            "end": 1246,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1224,
              "end": 1225,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1225,
              "end": 1246,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "y",
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1199,
                      "end": 1211,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1200,
                        "end": 1208,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1206,
                          "end": 1208,
                          "name": "C6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1251,
            "end": 1293,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1281,
              "end": 1282,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1282,
              "end": 1293,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1283,
                  "end": 1289,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1284,
                    "end": 1289,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1286,
                      "end": 1289
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1291,
                "end": 1293,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1256,
                      "end": 1268,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1257,
                        "end": 1265,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1263,
                          "end": 1265,
                          "name": "C6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1298,
            "end": 1331,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1324,
              "end": 1325,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1303,
                      "end": 1315,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1304,
                        "end": 1312,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1310,
                          "end": 1312,
                          "name": "C6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 1336,
            "end": 1378,
            "key": {
              "type": "Identifier",
              "start": 1371,
              "end": 1372,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": true,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1341,
                      "end": 1353,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1342,
                        "end": 1350,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1348,
                          "end": 1350,
                          "name": "C6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
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
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 1384,
            "end": 1414,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1403,
              "end": 1409,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1409,
              "end": 1414,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1412,
                "end": 1414,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1389,
                      "end": 1401,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1390,
                        "end": 1398,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1396,
                          "end": 1398,
                          "name": "C6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1419,
            "end": 1464,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1442,
              "end": 1443,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1443,
              "end": 1464,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "y",
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1424,
                      "end": 1436,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1425,
                        "end": 1433,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1431,
                          "end": 1433,
                          "name": "C6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1469,
            "end": 1504,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1492,
              "end": 1493,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1493,
              "end": 1504,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1494,
                  "end": 1500,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1495,
                    "end": 1500,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1497,
                      "end": 1500
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1502,
                "end": 1504,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1474,
                      "end": 1486,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1475,
                        "end": 1483,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1481,
                          "end": 1483,
                          "name": "C6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1509,
            "end": 1535,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1528,
              "end": 1529,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1514,
                      "end": 1526,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1515,
                        "end": 1523,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1521,
                          "end": 1523,
                          "name": "C6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 1540,
            "end": 1575,
            "key": {
              "type": "Identifier",
              "start": 1568,
              "end": 1569,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": false,
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
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1545,
                      "end": 1557,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1546,
                        "end": 1554,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1552,
                          "end": 1554,
                          "name": "C6",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "definite": false,
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
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 1582,
            "end": 1623,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1582,
              "end": 1593,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 1593,
              "end": 1623,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1613,
                  "end": 1619,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1614,
                    "end": 1619,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1616,
                      "end": 1619
                    }
                  },
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 1599,
                            "end": 1611,
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "start": 1600,
                              "end": 1608,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "Identifier",
                                "start": 1606,
                                "end": 1608,
                                "name": "C6",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1621,
                "end": 1623,
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
            "start": 1628,
            "end": 1672,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1635,
              "end": 1642,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1642,
              "end": 1672,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1662,
                  "end": 1668,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1663,
                    "end": 1668,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1665,
                      "end": 1668
                    }
                  },
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 1648,
                            "end": 1660,
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "start": 1649,
                              "end": 1657,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "Identifier",
                                "start": 1655,
                                "end": 1657,
                                "name": "C6",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1670,
                "end": 1672,
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
            "start": 1677,
            "end": 1714,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1677,
              "end": 1684,
              "name": "method2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1684,
              "end": 1714,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1704,
                  "end": 1710,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1705,
                    "end": 1710,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1707,
                      "end": 1710
                    }
                  },
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
                          "name": "dec",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 1690,
                            "end": 1702,
                            "callee": {
                              "type": "ArrowFunctionExpression",
                              "start": 1691,
                              "end": 1699,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "Identifier",
                                "start": 1697,
                                "end": 1699,
                                "name": "C6",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1712,
                "end": 1714,
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
