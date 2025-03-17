__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 764,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "generic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 24,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 24,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 23,
              "end": 24,
              "typeName": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 68,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 32,
            "end": 50,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 49,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 45,
                  "name": "o",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 39,
                      "end": 45
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 77,
            "end": 79,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 93,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 89,
            "end": 93,
            "value": "42",
            "raw": "\"42\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 116,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 115,
        "callee": {
          "type": "Identifier",
          "start": 96,
          "end": 103,
          "name": "generic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 112,
            "end": 114,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 103,
          "end": 111,
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 104,
              "end": 110
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 136,
      "expression": {
        "type": "CallExpression",
        "start": 117,
        "end": 135,
        "callee": {
          "type": "Identifier",
          "start": 117,
          "end": 124,
          "name": "generic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 124,
          "end": 132,
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 125,
              "end": 131
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 158,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 157,
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 144,
          "name": "generic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 153,
            "end": 156,
            "value": 123,
            "raw": "123"
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 144,
          "end": 152,
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 145,
              "end": 151
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 194,
      "expression": {
        "type": "CallExpression",
        "start": 175,
        "end": 193,
        "callee": {
          "type": "Identifier",
          "start": 175,
          "end": 182,
          "name": "generic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 182,
          "end": 190,
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 183,
              "end": 189
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 226,
        "name": "bound",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 245,
          "end": 249,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 246,
            "end": 249,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 248,
              "end": 249,
              "typeName": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 251,
        "end": 283,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 257,
            "end": 275,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 261,
                "end": 274,
                "id": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 270,
                  "name": "o",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 262,
                    "end": 270,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 264,
                      "end": 270
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 226,
        "end": 244,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 227,
            "end": 243,
            "name": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 237,
              "end": 243
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 295,
      "expression": {
        "type": "CallExpression",
        "start": 285,
        "end": 294,
        "callee": {
          "type": "Identifier",
          "start": 285,
          "end": 290,
          "name": "bound",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 291,
            "end": 293,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 305,
      "expression": {
        "type": "CallExpression",
        "start": 296,
        "end": 304,
        "callee": {
          "type": "Identifier",
          "start": 296,
          "end": 301,
          "name": "bound",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 317,
      "expression": {
        "type": "CallExpression",
        "start": 306,
        "end": 316,
        "callee": {
          "type": "Identifier",
          "start": 306,
          "end": 311,
          "name": "bound",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 312,
            "end": 315,
            "value": 123,
            "raw": "123"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 343,
      "expression": {
        "type": "CallExpression",
        "start": 334,
        "end": 342,
        "callee": {
          "type": "Identifier",
          "start": 334,
          "end": 339,
          "name": "bound",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 340,
            "end": 341,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 361,
      "end": 399,
      "id": {
        "type": "Identifier",
        "start": 370,
        "end": 376,
        "name": "bound2",
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
        "start": 397,
        "end": 399,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 376,
        "end": 394,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 377,
            "end": 393,
            "name": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 387,
              "end": 393
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 414,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 413,
        "callee": {
          "type": "Identifier",
          "start": 401,
          "end": 407,
          "name": "bound2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 407,
          "end": 411,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 408,
              "end": 410,
              "members": []
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 415,
      "end": 432,
      "expression": {
        "type": "CallExpression",
        "start": 415,
        "end": 431,
        "callee": {
          "type": "Identifier",
          "start": 415,
          "end": 421,
          "name": "bound2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 421,
          "end": 429,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 422,
              "end": 428,
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 428,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 450,
      "expression": {
        "type": "CallExpression",
        "start": 433,
        "end": 449,
        "callee": {
          "type": "Identifier",
          "start": 433,
          "end": 439,
          "name": "bound2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 439,
          "end": 447,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 440,
              "end": 446
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 484,
      "expression": {
        "type": "CallExpression",
        "start": 467,
        "end": 483,
        "callee": {
          "type": "Identifier",
          "start": 467,
          "end": 473,
          "name": "bound2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 473,
          "end": 481,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 474,
              "end": 480
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 502,
      "end": 570,
      "id": {
        "type": "Identifier",
        "start": 511,
        "end": 517,
        "name": "bound3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 532,
          "end": 536,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 533,
            "end": 536,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 535,
              "end": 536,
              "typeName": {
                "type": "Identifier",
                "start": 535,
                "end": 536,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 538,
        "end": 570,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 544,
            "end": 562,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 548,
                "end": 561,
                "id": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 557,
                  "name": "o",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 549,
                    "end": 557,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 551,
                      "end": 557
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 561,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 517,
        "end": 531,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 518,
            "end": 530,
            "name": {
              "type": "Identifier",
              "start": 518,
              "end": 519,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 528,
              "end": 530,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 572,
      "end": 608,
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 587,
        "name": "Proxy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 587,
        "end": 605,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 588,
            "end": 604,
            "name": {
              "type": "Identifier",
              "start": 588,
              "end": 589,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 598,
              "end": 604
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 606,
        "end": 608,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 610,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 614,
          "end": 630,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 630,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 615,
              "end": 630,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 617,
                "end": 630,
                "typeName": {
                  "type": "Identifier",
                  "start": 617,
                  "end": 622,
                  "name": "Proxy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 622,
                  "end": 630,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 623,
                      "end": 629
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 641,
      "end": 660,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 645,
          "end": 659,
          "id": {
            "type": "Identifier",
            "start": 645,
            "end": 659,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 646,
              "end": 659,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 648,
                "end": 659,
                "typeName": {
                  "type": "Identifier",
                  "start": 648,
                  "end": 653,
                  "name": "Proxy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 653,
                  "end": 659,
                  "params": [
                    {
                      "type": "TSNullKeyword",
                      "start": 654,
                      "end": 658
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 667,
      "end": 692,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 671,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 690,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 672,
              "end": 690,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 674,
                "end": 690,
                "typeName": {
                  "type": "Identifier",
                  "start": 674,
                  "end": 679,
                  "name": "Proxy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 679,
                  "end": 690,
                  "params": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 680,
                      "end": 689
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 701,
      "end": 736,
      "id": {
        "type": "Identifier",
        "start": 711,
        "end": 715,
        "name": "Blah",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 716,
        "end": 736,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 722,
            "end": 734,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 722,
              "end": 725,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 725,
              "end": 733,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 727,
                "end": 733
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 738,
      "end": 757,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 742,
          "end": 756,
          "id": {
            "type": "Identifier",
            "start": 742,
            "end": 756,
            "name": "u",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 743,
              "end": 756,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 745,
                "end": 756,
                "typeName": {
                  "type": "Identifier",
                  "start": 745,
                  "end": 750,
                  "name": "Proxy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 750,
                  "end": 756,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 751,
                      "end": 755,
                      "typeName": {
                        "type": "Identifier",
                        "start": 751,
                        "end": 755,
                        "name": "Blah",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
