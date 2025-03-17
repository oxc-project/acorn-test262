__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1313,
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
      "end": 530,
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
        "end": 530,
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
              "name": "x",
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
            "end": 279,
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
              "end": 279,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 277,
                "end": 279,
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
            "start": 284,
            "end": 313,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 284,
                "end": 298,
                "expression": {
                  "type": "CallExpression",
                  "start": 285,
                  "end": 298,
                  "callee": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 288,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 289,
                      "end": 297,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 295,
                        "end": 297,
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
              "start": 307,
              "end": 312,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 309,
                "end": 312
              }
            },
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 318,
            "end": 356,
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
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
                "start": 318,
                "end": 332,
                "expression": {
                  "type": "CallExpression",
                  "start": 319,
                  "end": 332,
                  "callee": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 322,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 323,
                      "end": 331,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 331,
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
              "start": 350,
              "end": 355,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 352,
                "end": 355
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
            "start": 362,
            "end": 388,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 377,
              "end": 383,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 383,
              "end": 388,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 386,
                "end": 388,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 362,
                "end": 376,
                "expression": {
                  "type": "CallExpression",
                  "start": 363,
                  "end": 376,
                  "callee": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 366,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 367,
                      "end": 375,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 375,
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
            "start": 393,
            "end": 434,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 413,
              "end": 434,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 416,
                "end": 434,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 418,
                    "end": 432,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 425,
                      "end": 431,
                      "object": {
                        "type": "ThisExpression",
                        "start": 425,
                        "end": 429
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 430,
                        "end": 431,
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
                "start": 393,
                "end": 407,
                "expression": {
                  "type": "CallExpression",
                  "start": 394,
                  "end": 407,
                  "callee": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 397,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 398,
                      "end": 406,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 404,
                        "end": 406,
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
            "start": 439,
            "end": 465,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 459,
              "end": 465,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 460,
                  "end": 461,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 463,
                "end": 465,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 439,
                "end": 453,
                "expression": {
                  "type": "CallExpression",
                  "start": 440,
                  "end": 453,
                  "callee": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 443,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 444,
                      "end": 452,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 452,
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
            "start": 470,
            "end": 492,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 470,
                "end": 484,
                "expression": {
                  "type": "CallExpression",
                  "start": 471,
                  "end": 484,
                  "callee": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 474,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 475,
                      "end": 483,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 483,
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
              "start": 486,
              "end": 491,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 488,
                "end": 491
              }
            },
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 497,
            "end": 528,
            "key": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
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
                "start": 497,
                "end": 511,
                "expression": {
                  "type": "CallExpression",
                  "start": 498,
                  "end": 511,
                  "callee": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 501,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 502,
                      "end": 510,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 508,
                        "end": 510,
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
              "start": 522,
              "end": 527,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 524,
                "end": 527
              }
            },
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
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
      "start": 541,
      "end": 871,
      "id": {
        "type": "Identifier",
        "start": 547,
        "end": 549,
        "name": "C5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 550,
        "end": 871,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 556,
            "end": 583,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 572,
              "end": 578,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 578,
              "end": 583,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 581,
                "end": 583,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 556,
                "end": 564,
                "expression": {
                  "type": "CallExpression",
                  "start": 557,
                  "end": 564,
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
                      "type": "Identifier",
                      "start": 561,
                      "end": 563,
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
            "start": 588,
            "end": 630,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 608,
              "end": 609,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 609,
              "end": 630,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 612,
                "end": 630,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 614,
                    "end": 628,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 621,
                      "end": 627,
                      "object": {
                        "type": "ThisExpression",
                        "start": 621,
                        "end": 625
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 626,
                        "end": 627,
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
                "start": 588,
                "end": 596,
                "expression": {
                  "type": "CallExpression",
                  "start": 589,
                  "end": 596,
                  "callee": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 592,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 593,
                      "end": 595,
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
            "start": 635,
            "end": 662,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 655,
              "end": 656,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 656,
              "end": 662,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 657,
                  "end": 658,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 660,
                "end": 662,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 635,
                "end": 643,
                "expression": {
                  "type": "CallExpression",
                  "start": 636,
                  "end": 643,
                  "callee": {
                    "type": "Identifier",
                    "start": 636,
                    "end": 639,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 640,
                      "end": 642,
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
            "start": 667,
            "end": 690,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 683,
              "end": 684,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 667,
                "end": 675,
                "expression": {
                  "type": "CallExpression",
                  "start": 668,
                  "end": 675,
                  "callee": {
                    "type": "Identifier",
                    "start": 668,
                    "end": 671,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 672,
                      "end": 674,
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
              "start": 684,
              "end": 689,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 686,
                "end": 689
              }
            },
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 695,
            "end": 727,
            "key": {
              "type": "Identifier",
              "start": 720,
              "end": 721,
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
                "start": 695,
                "end": 703,
                "expression": {
                  "type": "CallExpression",
                  "start": 696,
                  "end": 703,
                  "callee": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 699,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 700,
                      "end": 702,
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
              "start": 721,
              "end": 726,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 723,
                "end": 726
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
            "start": 733,
            "end": 753,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 742,
              "end": 748,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 748,
              "end": 753,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 751,
                "end": 753,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 733,
                "end": 741,
                "expression": {
                  "type": "CallExpression",
                  "start": 734,
                  "end": 741,
                  "callee": {
                    "type": "Identifier",
                    "start": 734,
                    "end": 737,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 738,
                      "end": 740,
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
            "start": 758,
            "end": 793,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 771,
              "end": 772,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 772,
              "end": 793,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 775,
                "end": 793,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 777,
                    "end": 791,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 784,
                      "end": 790,
                      "object": {
                        "type": "ThisExpression",
                        "start": 784,
                        "end": 788
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 789,
                        "end": 790,
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
                "start": 758,
                "end": 766,
                "expression": {
                  "type": "CallExpression",
                  "start": 759,
                  "end": 766,
                  "callee": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 762,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 763,
                      "end": 765,
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
            "start": 798,
            "end": 818,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 811,
              "end": 812,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 812,
              "end": 818,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 813,
                  "end": 814,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 816,
                "end": 818,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 798,
                "end": 806,
                "expression": {
                  "type": "CallExpression",
                  "start": 799,
                  "end": 806,
                  "callee": {
                    "type": "Identifier",
                    "start": 799,
                    "end": 802,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 803,
                      "end": 805,
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
            "start": 823,
            "end": 839,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 832,
              "end": 833,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 823,
                "end": 831,
                "expression": {
                  "type": "CallExpression",
                  "start": 824,
                  "end": 831,
                  "callee": {
                    "type": "Identifier",
                    "start": 824,
                    "end": 827,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 828,
                      "end": 830,
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
              "start": 833,
              "end": 838,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 835,
                "end": 838
              }
            },
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 844,
            "end": 869,
            "key": {
              "type": "Identifier",
              "start": 862,
              "end": 863,
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
                "start": 844,
                "end": 852,
                "expression": {
                  "type": "CallExpression",
                  "start": 845,
                  "end": 852,
                  "callee": {
                    "type": "Identifier",
                    "start": 845,
                    "end": 848,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 849,
                      "end": 851,
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
              "start": 863,
              "end": 868,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 865,
                "end": 868
              }
            },
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
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
      "start": 882,
      "end": 1312,
      "id": {
        "type": "Identifier",
        "start": 888,
        "end": 890,
        "name": "C6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 891,
        "end": 1312,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 897,
            "end": 934,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 923,
              "end": 929,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 929,
              "end": 934,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 932,
                "end": 934,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 897,
                "end": 915,
                "expression": {
                  "type": "CallExpression",
                  "start": 898,
                  "end": 915,
                  "callee": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 901,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 902,
                      "end": 914,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 903,
                        "end": 911,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 909,
                          "end": 911,
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
            "start": 939,
            "end": 991,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 969,
              "end": 970,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 970,
              "end": 991,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 973,
                "end": 991,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 975,
                    "end": 989,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 982,
                      "end": 988,
                      "object": {
                        "type": "ThisExpression",
                        "start": 982,
                        "end": 986
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 987,
                        "end": 988,
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
                "start": 939,
                "end": 957,
                "expression": {
                  "type": "CallExpression",
                  "start": 940,
                  "end": 957,
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
                      "type": "CallExpression",
                      "start": 944,
                      "end": 956,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 945,
                        "end": 953,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 951,
                          "end": 953,
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
            "start": 996,
            "end": 1033,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1026,
              "end": 1027,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1027,
              "end": 1033,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1028,
                  "end": 1029,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1031,
                "end": 1033,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 996,
                "end": 1014,
                "expression": {
                  "type": "CallExpression",
                  "start": 997,
                  "end": 1014,
                  "callee": {
                    "type": "Identifier",
                    "start": 997,
                    "end": 1000,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1001,
                      "end": 1013,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1002,
                        "end": 1010,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1008,
                          "end": 1010,
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
            "start": 1038,
            "end": 1071,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1064,
              "end": 1065,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1038,
                "end": 1056,
                "expression": {
                  "type": "CallExpression",
                  "start": 1039,
                  "end": 1056,
                  "callee": {
                    "type": "Identifier",
                    "start": 1039,
                    "end": 1042,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1043,
                      "end": 1055,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1044,
                        "end": 1052,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1050,
                          "end": 1052,
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
              "start": 1065,
              "end": 1070,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1067,
                "end": 1070
              }
            },
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 1076,
            "end": 1118,
            "key": {
              "type": "Identifier",
              "start": 1111,
              "end": 1112,
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
                "start": 1076,
                "end": 1094,
                "expression": {
                  "type": "CallExpression",
                  "start": 1077,
                  "end": 1094,
                  "callee": {
                    "type": "Identifier",
                    "start": 1077,
                    "end": 1080,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1081,
                      "end": 1093,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1082,
                        "end": 1090,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1088,
                          "end": 1090,
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
              "start": 1112,
              "end": 1117,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1114,
                "end": 1117
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
            "start": 1124,
            "end": 1154,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1143,
              "end": 1149,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1149,
              "end": 1154,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1152,
                "end": 1154,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 1124,
                "end": 1142,
                "expression": {
                  "type": "CallExpression",
                  "start": 1125,
                  "end": 1142,
                  "callee": {
                    "type": "Identifier",
                    "start": 1125,
                    "end": 1128,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1129,
                      "end": 1141,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1130,
                        "end": 1138,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1136,
                          "end": 1138,
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
            "start": 1159,
            "end": 1204,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1182,
              "end": 1183,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 1183,
              "end": 1204,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1186,
                "end": 1204,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1188,
                    "end": 1202,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1195,
                      "end": 1201,
                      "object": {
                        "type": "ThisExpression",
                        "start": 1195,
                        "end": 1199
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1200,
                        "end": 1201,
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
                "start": 1159,
                "end": 1177,
                "expression": {
                  "type": "CallExpression",
                  "start": 1160,
                  "end": 1177,
                  "callee": {
                    "type": "Identifier",
                    "start": 1160,
                    "end": 1163,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1164,
                      "end": 1176,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1165,
                        "end": 1173,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1171,
                          "end": 1173,
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
            "start": 1209,
            "end": 1239,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1232,
              "end": 1233,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 1233,
              "end": 1239,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1234,
                  "end": 1235,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1237,
                "end": 1239,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 1209,
                "end": 1227,
                "expression": {
                  "type": "CallExpression",
                  "start": 1210,
                  "end": 1227,
                  "callee": {
                    "type": "Identifier",
                    "start": 1210,
                    "end": 1213,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1214,
                      "end": 1226,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1215,
                        "end": 1223,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1221,
                          "end": 1223,
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
            "start": 1244,
            "end": 1270,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1263,
              "end": 1264,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1244,
                "end": 1262,
                "expression": {
                  "type": "CallExpression",
                  "start": 1245,
                  "end": 1262,
                  "callee": {
                    "type": "Identifier",
                    "start": 1245,
                    "end": 1248,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1249,
                      "end": 1261,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1250,
                        "end": 1258,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1256,
                          "end": 1258,
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
              "start": 1264,
              "end": 1269,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1266,
                "end": 1269
              }
            },
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 1275,
            "end": 1310,
            "key": {
              "type": "Identifier",
              "start": 1303,
              "end": 1304,
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
                "start": 1275,
                "end": 1293,
                "expression": {
                  "type": "CallExpression",
                  "start": 1276,
                  "end": 1293,
                  "callee": {
                    "type": "Identifier",
                    "start": 1276,
                    "end": 1279,
                    "name": "dec",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "CallExpression",
                      "start": 1280,
                      "end": 1292,
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 1281,
                        "end": 1289,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "Identifier",
                          "start": 1287,
                          "end": 1289,
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
              "start": 1304,
              "end": 1309,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1306,
                "end": 1309
              }
            },
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
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
