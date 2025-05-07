__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 763,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 68,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 45,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 39,
                      "end": 45
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "generic",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 24,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 24,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 23,
              "end": 24,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 77,
            "end": 79,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 89,
            "end": 93,
            "raw": "\"42\"",
            "value": "42",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 116,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 115,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 112,
            "end": 114,
            "properties": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 96,
          "end": 103,
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 136,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 117,
        "end": 135,
        "arguments": [
          {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 117,
          "end": 124,
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 158,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 157,
        "arguments": [
          {
            "type": "Literal",
            "start": 153,
            "end": 156,
            "raw": "123",
            "value": 123,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 144,
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 194,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 175,
        "end": 193,
        "arguments": [
          {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 175,
          "end": 182,
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null
        },
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 283,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 270,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 262,
                    "end": 270,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 264,
                      "end": 270
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 226,
        "decorators": [],
        "name": "bound",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 245,
          "end": 249,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 246,
            "end": 249,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 248,
              "end": 249,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 226,
        "end": 244,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 227,
            "end": 243,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 237,
              "end": 243
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 295,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 285,
        "end": 294,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 291,
            "end": 293,
            "properties": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 285,
          "end": 290,
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 305,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 296,
        "end": 304,
        "arguments": [
          {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 296,
          "end": 301,
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 317,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 306,
        "end": 316,
        "arguments": [
          {
            "type": "Literal",
            "start": 312,
            "end": 315,
            "raw": "123",
            "value": 123,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 306,
          "end": 311,
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 343,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 334,
        "end": 342,
        "arguments": [
          {
            "type": "Identifier",
            "start": 340,
            "end": 341,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 334,
          "end": 339,
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 361,
      "end": 399,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 397,
        "end": 399,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 370,
        "end": 376,
        "decorators": [],
        "name": "bound2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 376,
        "end": 394,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 377,
            "end": 393,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 387,
              "end": 393
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 414,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 413,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 401,
          "end": 407,
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 415,
      "end": 432,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 415,
        "end": 431,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 415,
          "end": 421,
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null
        },
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 422,
                "end": 428,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 450,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 433,
        "end": 449,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 433,
          "end": 439,
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 484,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 467,
        "end": 483,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 467,
          "end": 473,
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null
        },
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 502,
      "end": 570,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 557,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 549,
                    "end": 557,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 551,
                      "end": 557
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 561,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 511,
        "end": 517,
        "decorators": [],
        "name": "bound3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 532,
          "end": 536,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 533,
            "end": 536,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 535,
              "end": 536,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 535,
                "end": 536,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 517,
        "end": 531,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 518,
            "end": 530,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 528,
              "end": 530,
              "members": []
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 518,
              "end": 519,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 572,
      "end": 608,
      "body": {
        "type": "TSInterfaceBody",
        "start": 606,
        "end": 608,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 587,
        "decorators": [],
        "name": "Proxy",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 587,
        "end": 605,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 588,
            "end": 604,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 598,
              "end": 604
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 588,
              "end": 589,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 630,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 615,
              "end": 630,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 617,
                "end": 630,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 617,
                  "end": 622,
                  "decorators": [],
                  "name": "Proxy",
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
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 645,
            "end": 659,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 646,
              "end": 659,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 648,
                "end": 659,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 648,
                  "end": 653,
                  "decorators": [],
                  "name": "Proxy",
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
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 690,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 672,
              "end": 690,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 674,
                "end": 690,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 674,
                  "end": 679,
                  "decorators": [],
                  "name": "Proxy",
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
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 701,
      "end": 736,
      "body": {
        "type": "TSInterfaceBody",
        "start": 716,
        "end": 736,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 722,
            "end": 734,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 722,
              "end": 725,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 725,
              "end": 733,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 727,
                "end": 733
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 711,
        "end": 715,
        "decorators": [],
        "name": "Blah",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 742,
            "end": 756,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 743,
              "end": 756,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 745,
                "end": 756,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 750,
                  "end": 756,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 751,
                      "end": 755,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 751,
                        "end": 755,
                        "decorators": [],
                        "name": "Blah",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 745,
                  "end": 750,
                  "decorators": [],
                  "name": "Proxy",
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
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
