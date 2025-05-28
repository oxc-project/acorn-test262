__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 3557,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 82,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 93,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 93,
        "end": 109,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 94,
            "end": 105,
            "name": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 104,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 107,
            "end": 108,
            "name": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 110,
          "end": 114,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 114,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 116,
          "end": 120,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 120,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 122,
        "end": 177,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 128,
            "end": 149,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 132,
                "end": 148,
                "id": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 136,
                  "end": 148,
                  "test": {
                    "type": "Literal",
                    "start": 136,
                    "end": 140,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 154,
            "end": 175,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 158,
                "end": 174,
                "id": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 162,
                  "end": 174,
                  "test": {
                    "type": "Literal",
                    "start": 162,
                    "end": 166,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 174,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 192,
      "end": 438,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 203,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 203,
        "end": 232,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 204,
            "end": 215,
            "name": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 214,
              "end": 215,
              "typeName": {
                "type": "Identifier",
                "start": 214,
                "end": 215,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 217,
            "end": 228,
            "name": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 227,
              "end": 228,
              "typeName": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 230,
            "end": 231,
            "name": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 233,
          "end": 237,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 234,
            "end": 237,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 236,
              "end": 237,
              "typeName": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 239,
          "end": 243,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 243,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 242,
              "end": 243,
              "typeName": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 245,
          "end": 249,
          "decorators": [],
          "name": "z",
          "optional": false,
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
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 251,
        "end": 438,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 257,
            "end": 278,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 261,
                "end": 277,
                "id": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 265,
                  "end": 277,
                  "test": {
                    "type": "Literal",
                    "start": 265,
                    "end": 269,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 273,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 283,
            "end": 304,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 287,
                "end": 303,
                "id": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 291,
                  "end": 303,
                  "test": {
                    "type": "Literal",
                    "start": 291,
                    "end": 295,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 299,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 320,
            "end": 342,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 324,
                "end": 341,
                "id": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 326,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 329,
                  "end": 341,
                  "test": {
                    "type": "Literal",
                    "start": 329,
                    "end": 333,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 337,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 341,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 347,
            "end": 369,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 351,
                "end": 368,
                "id": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 353,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 356,
                  "end": 368,
                  "test": {
                    "type": "Literal",
                    "start": 356,
                    "end": 360,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 364,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 368,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 385,
            "end": 408,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 389,
                "end": 407,
                "id": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 392,
                  "decorators": [],
                  "name": "r2a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 395,
                  "end": 407,
                  "test": {
                    "type": "Literal",
                    "start": 395,
                    "end": 399,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 402,
                    "end": 403,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 407,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 413,
            "end": 436,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 417,
                "end": 435,
                "id": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 420,
                  "decorators": [],
                  "name": "r2b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 423,
                  "end": 435,
                  "test": {
                    "type": "Literal",
                    "start": 423,
                    "end": 427,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 431,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 434,
                    "end": 435,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 456,
      "end": 732,
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 467,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 467,
        "end": 496,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 468,
            "end": 479,
            "name": {
              "type": "Identifier",
              "start": 468,
              "end": 469,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 478,
              "end": 479,
              "typeName": {
                "type": "Identifier",
                "start": 478,
                "end": 479,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 481,
            "end": 495,
            "name": {
              "type": "Identifier",
              "start": 481,
              "end": 482,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 491,
              "end": 495,
              "typeName": {
                "type": "Identifier",
                "start": 491,
                "end": 495,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 497,
          "end": 501,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 498,
            "end": 501,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 500,
              "end": 501,
              "typeName": {
                "type": "Identifier",
                "start": 500,
                "end": 501,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 503,
          "end": 507,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 504,
            "end": 507,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 506,
              "end": 507,
              "typeName": {
                "type": "Identifier",
                "start": 506,
                "end": 507,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 509,
        "end": 732,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 515,
            "end": 536,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 519,
                "end": 535,
                "id": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 520,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 523,
                  "end": 535,
                  "test": {
                    "type": "Literal",
                    "start": 523,
                    "end": 527,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 531,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 534,
                    "end": 535,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 541,
            "end": 562,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 545,
                "end": 561,
                "id": {
                  "type": "Identifier",
                  "start": 545,
                  "end": 546,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 549,
                  "end": 561,
                  "test": {
                    "type": "Literal",
                    "start": 549,
                    "end": 553,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 556,
                    "end": 557,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 560,
                    "end": 561,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 578,
            "end": 609,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 582,
                "end": 608,
                "id": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 584,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 587,
                  "end": 608,
                  "test": {
                    "type": "Literal",
                    "start": 587,
                    "end": 591,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 595,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 598,
                    "end": 608,
                    "callee": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 606,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 615,
            "end": 646,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 619,
                "end": 645,
                "id": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 621,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 624,
                  "end": 645,
                  "test": {
                    "type": "Literal",
                    "start": 624,
                    "end": 628,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 631,
                    "end": 641,
                    "callee": {
                      "type": "Identifier",
                      "start": 635,
                      "end": 639,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 645,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 662,
            "end": 693,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 666,
                "end": 692,
                "id": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 668,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 671,
                  "end": 692,
                  "test": {
                    "type": "Literal",
                    "start": 671,
                    "end": 675,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 678,
                    "end": 679,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 682,
                    "end": 692,
                    "callee": {
                      "type": "Identifier",
                      "start": 686,
                      "end": 690,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 699,
            "end": 730,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 703,
                "end": 729,
                "id": {
                  "type": "Identifier",
                  "start": 703,
                  "end": 705,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 708,
                  "end": 729,
                  "test": {
                    "type": "Literal",
                    "start": 708,
                    "end": 712,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 715,
                    "end": 725,
                    "callee": {
                      "type": "Identifier",
                      "start": 719,
                      "end": 723,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 728,
                    "end": 729,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "TSInterfaceDeclaration",
      "start": 735,
      "end": 764,
      "id": {
        "type": "Identifier",
        "start": 745,
        "end": 747,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 748,
        "end": 764,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 750,
            "end": 762,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 750,
              "end": 753,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 753,
              "end": 761,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 755,
                "end": 761
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
      "type": "ClassDeclaration",
      "start": 765,
      "end": 790,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 771,
        "end": 773,
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
        "start": 774,
        "end": 790,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 776,
            "end": 788,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 776,
              "end": 779,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 779,
              "end": 787,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 781,
                "end": 787
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 791,
      "end": 814,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 797,
        "end": 799,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 799,
        "end": 802,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 800,
            "end": 801,
            "name": {
              "type": "Identifier",
              "start": 800,
              "end": 801,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 803,
        "end": 814,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 805,
            "end": 812,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 805,
              "end": 808,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 808,
              "end": 811,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 810,
                "end": 811,
                "typeName": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 811,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 815,
      "end": 827,
      "id": {
        "type": "Identifier",
        "start": 820,
        "end": 821,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 822,
        "end": 827,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 824,
            "end": 825,
            "id": {
              "type": "Identifier",
              "start": 824,
              "end": 825,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 828,
      "end": 844,
      "id": {
        "type": "Identifier",
        "start": 837,
        "end": 838,
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
        "start": 841,
        "end": 844,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 845,
      "end": 881,
      "id": {
        "type": "Identifier",
        "start": 852,
        "end": 853,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 854,
        "end": 881,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 860,
            "end": 879,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 867,
              "end": 879,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 871,
                  "end": 878,
                  "id": {
                    "type": "Identifier",
                    "start": 871,
                    "end": 874,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 877,
                    "end": 878,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 882,
      "end": 905,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 888,
        "end": 889,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 890,
        "end": 905,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 892,
            "end": 903,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 892,
              "end": 895,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 895,
              "end": 903,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 897,
                "end": 903
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 906,
      "end": 942,
      "id": {
        "type": "Identifier",
        "start": 913,
        "end": 914,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 915,
        "end": 942,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 921,
            "end": 940,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 928,
              "end": 940,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 932,
                  "end": 939,
                  "id": {
                    "type": "Identifier",
                    "start": 932,
                    "end": 935,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 938,
                    "end": 939,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 944,
      "end": 1153,
      "id": {
        "type": "Identifier",
        "start": 953,
        "end": 955,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 955,
        "end": 973,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 956,
            "end": 972,
            "name": {
              "type": "Identifier",
              "start": 956,
              "end": 957,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 966,
              "end": 972,
              "typeName": {
                "type": "Identifier",
                "start": 966,
                "end": 972,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 974,
          "end": 978,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 975,
            "end": 978,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 977,
              "end": 978,
              "typeName": {
                "type": "Identifier",
                "start": 977,
                "end": 978,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 980,
        "end": 1153,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 986,
            "end": 1011,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 990,
                "end": 1010,
                "id": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 992,
                  "decorators": [],
                  "name": "r0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 995,
                  "end": 1010,
                  "test": {
                    "type": "Literal",
                    "start": 995,
                    "end": 999,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1002,
                    "end": 1003,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 1006,
                    "end": 1010,
                    "value": null,
                    "raw": "null"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1022,
            "end": 1047,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1026,
                "end": 1046,
                "id": {
                  "type": "Identifier",
                  "start": 1026,
                  "end": 1028,
                  "decorators": [],
                  "name": "r0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1031,
                  "end": 1046,
                  "test": {
                    "type": "Literal",
                    "start": 1031,
                    "end": 1035,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 1038,
                    "end": 1042,
                    "value": null,
                    "raw": "null"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1045,
                    "end": 1046,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1059,
            "end": 1083,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1063,
                "end": 1082,
                "id": {
                  "type": "Identifier",
                  "start": 1063,
                  "end": 1082,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1064,
                    "end": 1082,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 1066,
                      "end": 1082,
                      "exprName": {
                        "type": "Identifier",
                        "start": 1073,
                        "end": 1082,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1088,
            "end": 1111,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1092,
                "end": 1110,
                "id": {
                  "type": "Identifier",
                  "start": 1092,
                  "end": 1095,
                  "decorators": [],
                  "name": "r0b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1098,
                  "end": 1110,
                  "test": {
                    "type": "Literal",
                    "start": 1098,
                    "end": 1102,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1105,
                    "end": 1106,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1109,
                    "end": 1110,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1122,
            "end": 1145,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1126,
                "end": 1144,
                "id": {
                  "type": "Identifier",
                  "start": 1126,
                  "end": 1129,
                  "decorators": [],
                  "name": "r0b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1132,
                  "end": 1144,
                  "test": {
                    "type": "Literal",
                    "start": 1132,
                    "end": 1136,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1139,
                    "end": 1140,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1143,
                    "end": 1144,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 1155,
      "end": 1260,
      "id": {
        "type": "Identifier",
        "start": 1164,
        "end": 1166,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1166,
        "end": 1184,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1167,
            "end": 1183,
            "name": {
              "type": "Identifier",
              "start": 1167,
              "end": 1168,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1177,
              "end": 1183,
              "typeName": {
                "type": "Identifier",
                "start": 1177,
                "end": 1183,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1185,
          "end": 1189,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1186,
            "end": 1189,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1188,
              "end": 1189,
              "typeName": {
                "type": "Identifier",
                "start": 1188,
                "end": 1189,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1191,
        "end": 1260,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1197,
            "end": 1219,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1201,
                "end": 1218,
                "id": {
                  "type": "Identifier",
                  "start": 1201,
                  "end": 1203,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1206,
                  "end": 1218,
                  "test": {
                    "type": "Literal",
                    "start": 1206,
                    "end": 1210,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 1213,
                    "end": 1214,
                    "value": 1,
                    "raw": "1"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1217,
                    "end": 1218,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1230,
            "end": 1252,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1234,
                "end": 1251,
                "id": {
                  "type": "Identifier",
                  "start": 1234,
                  "end": 1236,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1239,
                  "end": 1251,
                  "test": {
                    "type": "Literal",
                    "start": 1239,
                    "end": 1243,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1246,
                    "end": 1247,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 1250,
                    "end": 1251,
                    "value": 1,
                    "raw": "1"
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 1262,
      "end": 1369,
      "id": {
        "type": "Identifier",
        "start": 1271,
        "end": 1273,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1273,
        "end": 1291,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1274,
            "end": 1290,
            "name": {
              "type": "Identifier",
              "start": 1274,
              "end": 1275,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1284,
              "end": 1290,
              "typeName": {
                "type": "Identifier",
                "start": 1284,
                "end": 1290,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1292,
          "end": 1296,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1293,
            "end": 1296,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1295,
              "end": 1296,
              "typeName": {
                "type": "Identifier",
                "start": 1295,
                "end": 1296,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1298,
        "end": 1369,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1304,
            "end": 1327,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1308,
                "end": 1326,
                "id": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1310,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1313,
                  "end": 1326,
                  "test": {
                    "type": "Literal",
                    "start": 1313,
                    "end": 1317,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 1320,
                    "end": 1322,
                    "value": "",
                    "raw": "''"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1325,
                    "end": 1326,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1338,
            "end": 1361,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1342,
                "end": 1360,
                "id": {
                  "type": "Identifier",
                  "start": 1342,
                  "end": 1344,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1347,
                  "end": 1360,
                  "test": {
                    "type": "Literal",
                    "start": 1347,
                    "end": 1351,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1354,
                    "end": 1355,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 1358,
                    "end": 1360,
                    "value": "",
                    "raw": "''"
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 1371,
      "end": 1483,
      "id": {
        "type": "Identifier",
        "start": 1380,
        "end": 1382,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1382,
        "end": 1401,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1383,
            "end": 1400,
            "name": {
              "type": "Identifier",
              "start": 1383,
              "end": 1384,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1393,
              "end": 1400,
              "typeName": {
                "type": "Identifier",
                "start": 1393,
                "end": 1400,
                "decorators": [],
                "name": "Boolean",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1402,
          "end": 1406,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1403,
            "end": 1406,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1405,
              "end": 1406,
              "typeName": {
                "type": "Identifier",
                "start": 1405,
                "end": 1406,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1408,
        "end": 1483,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1414,
            "end": 1439,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1418,
                "end": 1438,
                "id": {
                  "type": "Identifier",
                  "start": 1418,
                  "end": 1420,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1423,
                  "end": 1438,
                  "test": {
                    "type": "Literal",
                    "start": 1423,
                    "end": 1427,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 1430,
                    "end": 1434,
                    "value": true,
                    "raw": "true"
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1437,
                    "end": 1438,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1450,
            "end": 1475,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1454,
                "end": 1474,
                "id": {
                  "type": "Identifier",
                  "start": 1454,
                  "end": 1456,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1459,
                  "end": 1474,
                  "test": {
                    "type": "Literal",
                    "start": 1459,
                    "end": 1463,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1466,
                    "end": 1467,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 1470,
                    "end": 1474,
                    "value": true,
                    "raw": "true"
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 1485,
      "end": 1606,
      "id": {
        "type": "Identifier",
        "start": 1494,
        "end": 1496,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1496,
        "end": 1512,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1497,
            "end": 1511,
            "name": {
              "type": "Identifier",
              "start": 1497,
              "end": 1498,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1507,
              "end": 1511,
              "typeName": {
                "type": "Identifier",
                "start": 1507,
                "end": 1511,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1513,
          "end": 1517,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1514,
            "end": 1517,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1516,
              "end": 1517,
              "typeName": {
                "type": "Identifier",
                "start": 1516,
                "end": 1517,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1519,
        "end": 1606,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1525,
            "end": 1556,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1529,
                "end": 1555,
                "id": {
                  "type": "Identifier",
                  "start": 1529,
                  "end": 1531,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1534,
                  "end": 1555,
                  "test": {
                    "type": "Literal",
                    "start": 1534,
                    "end": 1538,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 1541,
                    "end": 1551,
                    "callee": {
                      "type": "Identifier",
                      "start": 1545,
                      "end": 1549,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1554,
                    "end": 1555,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1567,
            "end": 1598,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1571,
                "end": 1597,
                "id": {
                  "type": "Identifier",
                  "start": 1571,
                  "end": 1573,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1576,
                  "end": 1597,
                  "test": {
                    "type": "Literal",
                    "start": 1576,
                    "end": 1580,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1583,
                    "end": 1584,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 1587,
                    "end": 1597,
                    "callee": {
                      "type": "Identifier",
                      "start": 1591,
                      "end": 1595,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 1608,
      "end": 1717,
      "id": {
        "type": "Identifier",
        "start": 1617,
        "end": 1619,
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1619,
        "end": 1637,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1620,
            "end": 1636,
            "name": {
              "type": "Identifier",
              "start": 1620,
              "end": 1621,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1630,
              "end": 1636,
              "typeName": {
                "type": "Identifier",
                "start": 1630,
                "end": 1636,
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1638,
          "end": 1642,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1639,
            "end": 1642,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1641,
              "end": 1642,
              "typeName": {
                "type": "Identifier",
                "start": 1641,
                "end": 1642,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1644,
        "end": 1717,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1650,
            "end": 1674,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1654,
                "end": 1673,
                "id": {
                  "type": "Identifier",
                  "start": 1654,
                  "end": 1656,
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1659,
                  "end": 1673,
                  "test": {
                    "type": "Literal",
                    "start": 1659,
                    "end": 1663,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Literal",
                    "start": 1666,
                    "end": 1669,
                    "value": null,
                    "raw": "/1/",
                    "regex": {
                      "flags": "",
                      "pattern": "1"
                    }
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1672,
                    "end": 1673,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1685,
            "end": 1709,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1689,
                "end": 1708,
                "id": {
                  "type": "Identifier",
                  "start": 1689,
                  "end": 1691,
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1694,
                  "end": 1708,
                  "test": {
                    "type": "Literal",
                    "start": 1694,
                    "end": 1698,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1701,
                    "end": 1702,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 1705,
                    "end": 1708,
                    "value": null,
                    "raw": "/1/",
                    "regex": {
                      "flags": "",
                      "pattern": "1"
                    }
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 1719,
      "end": 1852,
      "id": {
        "type": "Identifier",
        "start": 1728,
        "end": 1731,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1731,
        "end": 1758,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1732,
            "end": 1757,
            "name": {
              "type": "Identifier",
              "start": 1732,
              "end": 1733,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 1742,
              "end": 1757,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1744,
                  "end": 1755,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1744,
                    "end": 1747,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1747,
                    "end": 1755,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1749,
                      "end": 1755
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1759,
          "end": 1763,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1760,
            "end": 1763,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1762,
              "end": 1763,
              "typeName": {
                "type": "Identifier",
                "start": 1762,
                "end": 1763,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1765,
        "end": 1852,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1771,
            "end": 1802,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1775,
                "end": 1801,
                "id": {
                  "type": "Identifier",
                  "start": 1775,
                  "end": 1777,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1780,
                  "end": 1801,
                  "test": {
                    "type": "Literal",
                    "start": 1780,
                    "end": 1784,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "start": 1787,
                    "end": 1797,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1789,
                        "end": 1795,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1789,
                          "end": 1792,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1794,
                          "end": 1795,
                          "value": 1,
                          "raw": "1"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1800,
                    "end": 1801,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1813,
            "end": 1844,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1817,
                "end": 1843,
                "id": {
                  "type": "Identifier",
                  "start": 1817,
                  "end": 1819,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1822,
                  "end": 1843,
                  "test": {
                    "type": "Literal",
                    "start": 1822,
                    "end": 1826,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1829,
                    "end": 1830,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "start": 1833,
                    "end": 1843,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1835,
                        "end": 1841,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1835,
                          "end": 1838,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1840,
                          "end": 1841,
                          "value": 1,
                          "raw": "1"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 1854,
      "end": 1980,
      "id": {
        "type": "Identifier",
        "start": 1863,
        "end": 1866,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1866,
        "end": 1888,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1867,
            "end": 1887,
            "name": {
              "type": "Identifier",
              "start": 1867,
              "end": 1868,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 1877,
              "end": 1887,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1880,
                "end": 1887,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1883,
                  "end": 1887
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1889,
          "end": 1893,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1890,
            "end": 1893,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1892,
              "end": 1893,
              "typeName": {
                "type": "Identifier",
                "start": 1892,
                "end": 1893,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1895,
        "end": 1980,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1901,
            "end": 1931,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1905,
                "end": 1930,
                "id": {
                  "type": "Identifier",
                  "start": 1905,
                  "end": 1907,
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1910,
                  "end": 1930,
                  "test": {
                    "type": "Literal",
                    "start": 1910,
                    "end": 1914,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "start": 1917,
                    "end": 1926,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1923,
                      "end": 1926,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1929,
                    "end": 1930,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1942,
            "end": 1972,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1946,
                "end": 1971,
                "id": {
                  "type": "Identifier",
                  "start": 1946,
                  "end": 1948,
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 1951,
                  "end": 1971,
                  "test": {
                    "type": "Literal",
                    "start": 1951,
                    "end": 1955,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 1958,
                    "end": 1959,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "start": 1962,
                    "end": 1971,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1968,
                      "end": 1971,
                      "body": []
                    },
                    "id": null,
                    "generator": false
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 1982,
      "end": 2196,
      "id": {
        "type": "Identifier",
        "start": 1991,
        "end": 1994,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1994,
        "end": 2020,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1995,
            "end": 2019,
            "name": {
              "type": "Identifier",
              "start": 1995,
              "end": 1996,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 2005,
              "end": 2019,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2005,
                "end": 2008,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2006,
                    "end": 2007,
                    "name": {
                      "type": "Identifier",
                      "start": 2006,
                      "end": 2007,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 2009,
                  "end": 2013,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2010,
                    "end": 2013,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2012,
                      "end": 2013,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2012,
                        "end": 2013,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2015,
                "end": 2019,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2018,
                  "end": 2019,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2018,
                    "end": 2019,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2021,
          "end": 2025,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2022,
            "end": 2025,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2024,
              "end": 2025,
              "typeName": {
                "type": "Identifier",
                "start": 2024,
                "end": 2025,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2027,
        "end": 2196,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2033,
            "end": 2079,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2037,
                "end": 2078,
                "id": {
                  "type": "Identifier",
                  "start": 2037,
                  "end": 2039,
                  "decorators": [],
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2042,
                  "end": 2078,
                  "test": {
                    "type": "Literal",
                    "start": 2042,
                    "end": 2046,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "start": 2049,
                    "end": 2074,
                    "expression": false,
                    "async": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 2049,
                      "end": 2052,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 2050,
                          "end": 2051,
                          "name": {
                            "type": "Identifier",
                            "start": 2050,
                            "end": 2051,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2053,
                        "end": 2057,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2054,
                          "end": 2057,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2056,
                            "end": 2057,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2056,
                              "end": 2057,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2062,
                      "end": 2074,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2064,
                          "end": 2072,
                          "argument": {
                            "type": "Identifier",
                            "start": 2071,
                            "end": 2072,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2077,
                    "end": 2078,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2090,
            "end": 2137,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2094,
                "end": 2136,
                "id": {
                  "type": "Identifier",
                  "start": 2094,
                  "end": 2097,
                  "decorators": [],
                  "name": "r8b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2100,
                  "end": 2136,
                  "test": {
                    "type": "Literal",
                    "start": 2100,
                    "end": 2104,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2107,
                    "end": 2108,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "start": 2111,
                    "end": 2136,
                    "expression": false,
                    "async": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 2111,
                      "end": 2114,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 2112,
                          "end": 2113,
                          "name": {
                            "type": "Identifier",
                            "start": 2112,
                            "end": 2113,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false
                        }
                      ]
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2115,
                        "end": 2119,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2116,
                          "end": 2119,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2118,
                            "end": 2119,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2118,
                              "end": 2119,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 2124,
                      "end": 2136,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2126,
                          "end": 2134,
                          "argument": {
                            "type": "Identifier",
                            "start": 2133,
                            "end": 2134,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 2198,
      "end": 2318,
      "id": {
        "type": "Identifier",
        "start": 2207,
        "end": 2210,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2210,
        "end": 2224,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2211,
            "end": 2223,
            "name": {
              "type": "Identifier",
              "start": 2211,
              "end": 2212,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2221,
              "end": 2223,
              "typeName": {
                "type": "Identifier",
                "start": 2221,
                "end": 2223,
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2225,
          "end": 2229,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2226,
            "end": 2229,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2228,
              "end": 2229,
              "typeName": {
                "type": "Identifier",
                "start": 2228,
                "end": 2229,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2231,
        "end": 2318,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2237,
            "end": 2248,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2241,
                "end": 2247,
                "id": {
                  "type": "Identifier",
                  "start": 2241,
                  "end": 2247,
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2243,
                    "end": 2247,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2245,
                      "end": 2247,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2245,
                        "end": 2247,
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2253,
            "end": 2276,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2257,
                "end": 2275,
                "id": {
                  "type": "Identifier",
                  "start": 2257,
                  "end": 2259,
                  "decorators": [],
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2262,
                  "end": 2275,
                  "test": {
                    "type": "Literal",
                    "start": 2262,
                    "end": 2266,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2269,
                    "end": 2271,
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2274,
                    "end": 2275,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2287,
            "end": 2310,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2291,
                "end": 2309,
                "id": {
                  "type": "Identifier",
                  "start": 2291,
                  "end": 2293,
                  "decorators": [],
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2296,
                  "end": 2309,
                  "test": {
                    "type": "Literal",
                    "start": 2296,
                    "end": 2300,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2303,
                    "end": 2304,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2307,
                    "end": 2309,
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 2320,
      "end": 2442,
      "id": {
        "type": "Identifier",
        "start": 2329,
        "end": 2332,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2332,
        "end": 2346,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2333,
            "end": 2345,
            "name": {
              "type": "Identifier",
              "start": 2333,
              "end": 2334,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2343,
              "end": 2345,
              "typeName": {
                "type": "Identifier",
                "start": 2343,
                "end": 2345,
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2347,
          "end": 2351,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2348,
            "end": 2351,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2350,
              "end": 2351,
              "typeName": {
                "type": "Identifier",
                "start": 2350,
                "end": 2351,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2353,
        "end": 2442,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2359,
            "end": 2370,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2363,
                "end": 2369,
                "id": {
                  "type": "Identifier",
                  "start": 2363,
                  "end": 2369,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2365,
                    "end": 2369,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2367,
                      "end": 2369,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2367,
                        "end": 2369,
                        "decorators": [],
                        "name": "C1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2375,
            "end": 2399,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2379,
                "end": 2398,
                "id": {
                  "type": "Identifier",
                  "start": 2379,
                  "end": 2382,
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2385,
                  "end": 2398,
                  "test": {
                    "type": "Literal",
                    "start": 2385,
                    "end": 2389,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2392,
                    "end": 2394,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2397,
                    "end": 2398,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2410,
            "end": 2434,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2414,
                "end": 2433,
                "id": {
                  "type": "Identifier",
                  "start": 2414,
                  "end": 2417,
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2420,
                  "end": 2433,
                  "test": {
                    "type": "Literal",
                    "start": 2420,
                    "end": 2424,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2427,
                    "end": 2428,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2431,
                    "end": 2433,
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 2444,
      "end": 2582,
      "id": {
        "type": "Identifier",
        "start": 2453,
        "end": 2456,
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2456,
        "end": 2478,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2457,
            "end": 2477,
            "name": {
              "type": "Identifier",
              "start": 2457,
              "end": 2458,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2467,
              "end": 2477,
              "typeName": {
                "type": "Identifier",
                "start": 2467,
                "end": 2469,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2469,
                "end": 2477,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2470,
                    "end": 2476
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2479,
          "end": 2483,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2480,
            "end": 2483,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2482,
              "end": 2483,
              "typeName": {
                "type": "Identifier",
                "start": 2482,
                "end": 2483,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2485,
        "end": 2582,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2491,
            "end": 2510,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2495,
                "end": 2509,
                "id": {
                  "type": "Identifier",
                  "start": 2495,
                  "end": 2509,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2497,
                    "end": 2509,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2499,
                      "end": 2509,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2499,
                        "end": 2501,
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2501,
                        "end": 2509,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 2502,
                            "end": 2508
                          }
                        ]
                      }
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2515,
            "end": 2539,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2519,
                "end": 2538,
                "id": {
                  "type": "Identifier",
                  "start": 2519,
                  "end": 2522,
                  "decorators": [],
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2525,
                  "end": 2538,
                  "test": {
                    "type": "Literal",
                    "start": 2525,
                    "end": 2529,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2532,
                    "end": 2534,
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2537,
                    "end": 2538,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2550,
            "end": 2574,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2554,
                "end": 2573,
                "id": {
                  "type": "Identifier",
                  "start": 2554,
                  "end": 2557,
                  "decorators": [],
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2560,
                  "end": 2573,
                  "test": {
                    "type": "Literal",
                    "start": 2560,
                    "end": 2564,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2567,
                    "end": 2568,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2571,
                    "end": 2573,
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 2584,
      "end": 2760,
      "id": {
        "type": "Identifier",
        "start": 2593,
        "end": 2596,
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2596,
        "end": 2609,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2597,
            "end": 2608,
            "name": {
              "type": "Identifier",
              "start": 2597,
              "end": 2598,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2607,
              "end": 2608,
              "typeName": {
                "type": "Identifier",
                "start": 2607,
                "end": 2608,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2610,
          "end": 2614,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2611,
            "end": 2614,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2613,
              "end": 2614,
              "typeName": {
                "type": "Identifier",
                "start": 2613,
                "end": 2614,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2616,
        "end": 2760,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2622,
            "end": 2645,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2626,
                "end": 2644,
                "id": {
                  "type": "Identifier",
                  "start": 2626,
                  "end": 2629,
                  "decorators": [],
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2632,
                  "end": 2644,
                  "test": {
                    "type": "Literal",
                    "start": 2632,
                    "end": 2636,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2639,
                    "end": 2640,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2643,
                    "end": 2644,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2656,
            "end": 2679,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2660,
                "end": 2678,
                "id": {
                  "type": "Identifier",
                  "start": 2660,
                  "end": 2663,
                  "decorators": [],
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2666,
                  "end": 2678,
                  "test": {
                    "type": "Literal",
                    "start": 2666,
                    "end": 2670,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2673,
                    "end": 2674,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2677,
                    "end": 2678,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2691,
            "end": 2716,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2695,
                "end": 2715,
                "id": {
                  "type": "Identifier",
                  "start": 2695,
                  "end": 2698,
                  "decorators": [],
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2701,
                  "end": 2715,
                  "test": {
                    "type": "Literal",
                    "start": 2701,
                    "end": 2705,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "start": 2708,
                    "end": 2711,
                    "object": {
                      "type": "Identifier",
                      "start": 2708,
                      "end": 2709,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2710,
                      "end": 2711,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2714,
                    "end": 2715,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2727,
            "end": 2752,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2731,
                "end": 2751,
                "id": {
                  "type": "Identifier",
                  "start": 2731,
                  "end": 2734,
                  "decorators": [],
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2737,
                  "end": 2751,
                  "test": {
                    "type": "Literal",
                    "start": 2737,
                    "end": 2741,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2744,
                    "end": 2745,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "start": 2748,
                    "end": 2751,
                    "object": {
                      "type": "Identifier",
                      "start": 2748,
                      "end": 2749,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2750,
                      "end": 2751,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 2762,
      "end": 2896,
      "id": {
        "type": "Identifier",
        "start": 2771,
        "end": 2774,
        "decorators": [],
        "name": "f17",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2774,
        "end": 2794,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2775,
            "end": 2793,
            "name": {
              "type": "Identifier",
              "start": 2775,
              "end": 2776,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeQuery",
              "start": 2785,
              "end": 2793,
              "exprName": {
                "type": "Identifier",
                "start": 2792,
                "end": 2793,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2795,
          "end": 2799,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2796,
            "end": 2799,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2798,
              "end": 2799,
              "typeName": {
                "type": "Identifier",
                "start": 2798,
                "end": 2799,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2801,
        "end": 2896,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2807,
            "end": 2824,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2811,
                "end": 2823,
                "id": {
                  "type": "Identifier",
                  "start": 2811,
                  "end": 2823,
                  "decorators": [],
                  "name": "af",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2813,
                    "end": 2823,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2815,
                      "end": 2823,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2822,
                        "end": 2823,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2829,
            "end": 2853,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2833,
                "end": 2852,
                "id": {
                  "type": "Identifier",
                  "start": 2833,
                  "end": 2836,
                  "decorators": [],
                  "name": "r15",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2839,
                  "end": 2852,
                  "test": {
                    "type": "Literal",
                    "start": 2839,
                    "end": 2843,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2846,
                    "end": 2848,
                    "decorators": [],
                    "name": "af",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2851,
                    "end": 2852,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2864,
            "end": 2888,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2868,
                "end": 2887,
                "id": {
                  "type": "Identifier",
                  "start": 2868,
                  "end": 2871,
                  "decorators": [],
                  "name": "r15",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2874,
                  "end": 2887,
                  "test": {
                    "type": "Literal",
                    "start": 2874,
                    "end": 2878,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2881,
                    "end": 2882,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2885,
                    "end": 2887,
                    "decorators": [],
                    "name": "af",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 2898,
      "end": 3032,
      "id": {
        "type": "Identifier",
        "start": 2907,
        "end": 2910,
        "decorators": [],
        "name": "f18",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2910,
        "end": 2930,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2911,
            "end": 2929,
            "name": {
              "type": "Identifier",
              "start": 2911,
              "end": 2912,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeQuery",
              "start": 2921,
              "end": 2929,
              "exprName": {
                "type": "Identifier",
                "start": 2928,
                "end": 2929,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2931,
          "end": 2935,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2932,
            "end": 2935,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2934,
              "end": 2935,
              "typeName": {
                "type": "Identifier",
                "start": 2934,
                "end": 2935,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2937,
        "end": 3032,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2943,
            "end": 2960,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2947,
                "end": 2959,
                "id": {
                  "type": "Identifier",
                  "start": 2947,
                  "end": 2959,
                  "decorators": [],
                  "name": "ac",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2949,
                    "end": 2959,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2951,
                      "end": 2959,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2958,
                        "end": 2959,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2965,
            "end": 2989,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2969,
                "end": 2988,
                "id": {
                  "type": "Identifier",
                  "start": 2969,
                  "end": 2972,
                  "decorators": [],
                  "name": "r16",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 2975,
                  "end": 2988,
                  "test": {
                    "type": "Literal",
                    "start": 2975,
                    "end": 2979,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 2982,
                    "end": 2984,
                    "decorators": [],
                    "name": "ac",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2987,
                    "end": 2988,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3000,
            "end": 3024,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3004,
                "end": 3023,
                "id": {
                  "type": "Identifier",
                  "start": 3004,
                  "end": 3007,
                  "decorators": [],
                  "name": "r16",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 3010,
                  "end": 3023,
                  "test": {
                    "type": "Literal",
                    "start": 3010,
                    "end": 3014,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 3017,
                    "end": 3018,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 3021,
                    "end": 3023,
                    "decorators": [],
                    "name": "ac",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 3034,
      "end": 3313,
      "id": {
        "type": "Identifier",
        "start": 3043,
        "end": 3046,
        "decorators": [],
        "name": "f19",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3046,
        "end": 3049,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3047,
            "end": 3048,
            "name": {
              "type": "Identifier",
              "start": 3047,
              "end": 3048,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3050,
          "end": 3054,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3051,
            "end": 3054,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3053,
              "end": 3054,
              "typeName": {
                "type": "Identifier",
                "start": 3053,
                "end": 3054,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3056,
        "end": 3313,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 3062,
            "end": 3177,
            "id": {
              "type": "Identifier",
              "start": 3071,
              "end": 3074,
              "decorators": [],
              "name": "f17",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3074,
              "end": 3087,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3075,
                  "end": 3086,
                  "name": {
                    "type": "Identifier",
                    "start": 3075,
                    "end": 3076,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3085,
                    "end": 3086,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3085,
                      "end": 3086,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 3088,
                "end": 3092,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3089,
                  "end": 3092,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3091,
                    "end": 3092,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3091,
                      "end": 3092,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 3094,
              "end": 3177,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3104,
                  "end": 3127,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3108,
                      "end": 3126,
                      "id": {
                        "type": "Identifier",
                        "start": 3108,
                        "end": 3111,
                        "decorators": [],
                        "name": "r17",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 3114,
                        "end": 3126,
                        "test": {
                          "type": "Literal",
                          "start": 3114,
                          "end": 3118,
                          "value": true,
                          "raw": "true"
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 3121,
                          "end": 3122,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 3125,
                          "end": 3126,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3142,
                  "end": 3165,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3146,
                      "end": 3164,
                      "id": {
                        "type": "Identifier",
                        "start": 3146,
                        "end": 3149,
                        "decorators": [],
                        "name": "r17",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 3152,
                        "end": 3164,
                        "test": {
                          "type": "Literal",
                          "start": 3152,
                          "end": 3156,
                          "value": true,
                          "raw": "true"
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 3159,
                          "end": 3160,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 3163,
                          "end": 3164,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
          {
            "type": "FunctionDeclaration",
            "start": 3183,
            "end": 3311,
            "id": {
              "type": "Identifier",
              "start": 3192,
              "end": 3195,
              "decorators": [],
              "name": "f18",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3195,
              "end": 3221,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3196,
                  "end": 3207,
                  "name": {
                    "type": "Identifier",
                    "start": 3196,
                    "end": 3197,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3206,
                    "end": 3207,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3206,
                      "end": 3207,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 3209,
                  "end": 3220,
                  "name": {
                    "type": "Identifier",
                    "start": 3209,
                    "end": 3210,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3219,
                    "end": 3220,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3219,
                      "end": 3220,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 3222,
                "end": 3226,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3223,
                  "end": 3226,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3225,
                    "end": 3226,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3225,
                      "end": 3226,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 3228,
              "end": 3311,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3238,
                  "end": 3261,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3242,
                      "end": 3260,
                      "id": {
                        "type": "Identifier",
                        "start": 3242,
                        "end": 3245,
                        "decorators": [],
                        "name": "r18",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 3248,
                        "end": 3260,
                        "test": {
                          "type": "Literal",
                          "start": 3248,
                          "end": 3252,
                          "value": true,
                          "raw": "true"
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 3255,
                          "end": 3256,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 3259,
                          "end": 3260,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3276,
                  "end": 3299,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3280,
                      "end": 3298,
                      "id": {
                        "type": "Identifier",
                        "start": 3280,
                        "end": 3283,
                        "decorators": [],
                        "name": "r18",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "start": 3286,
                        "end": 3298,
                        "test": {
                          "type": "Literal",
                          "start": 3286,
                          "end": 3290,
                          "value": true,
                          "raw": "true"
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 3293,
                          "end": 3294,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 3297,
                          "end": 3298,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3315,
      "end": 3445,
      "id": {
        "type": "Identifier",
        "start": 3324,
        "end": 3327,
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3327,
        "end": 3345,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3328,
            "end": 3344,
            "name": {
              "type": "Identifier",
              "start": 3328,
              "end": 3329,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3338,
              "end": 3344,
              "typeName": {
                "type": "Identifier",
                "start": 3338,
                "end": 3344,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3346,
          "end": 3350,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3347,
            "end": 3350,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3349,
              "end": 3350,
              "typeName": {
                "type": "Identifier",
                "start": 3349,
                "end": 3350,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3352,
        "end": 3445,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3358,
            "end": 3392,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3362,
                "end": 3391,
                "id": {
                  "type": "Identifier",
                  "start": 3362,
                  "end": 3365,
                  "decorators": [],
                  "name": "r19",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 3368,
                  "end": 3391,
                  "test": {
                    "type": "Literal",
                    "start": 3368,
                    "end": 3372,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "start": 3375,
                    "end": 3387,
                    "callee": {
                      "type": "Identifier",
                      "start": 3379,
                      "end": 3385,
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 3390,
                    "end": 3391,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3403,
            "end": 3437,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3407,
                "end": 3436,
                "id": {
                  "type": "Identifier",
                  "start": 3407,
                  "end": 3410,
                  "decorators": [],
                  "name": "r19",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 3413,
                  "end": 3436,
                  "test": {
                    "type": "Literal",
                    "start": 3413,
                    "end": 3417,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 3420,
                    "end": 3421,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 3424,
                    "end": 3436,
                    "callee": {
                      "type": "Identifier",
                      "start": 3428,
                      "end": 3434,
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
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
    {
      "type": "FunctionDeclaration",
      "start": 3447,
      "end": 3557,
      "id": {
        "type": "Identifier",
        "start": 3456,
        "end": 3459,
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3459,
        "end": 3477,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3460,
            "end": 3476,
            "name": {
              "type": "Identifier",
              "start": 3460,
              "end": 3461,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3470,
              "end": 3476,
              "typeName": {
                "type": "Identifier",
                "start": 3470,
                "end": 3476,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3478,
          "end": 3482,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3479,
            "end": 3482,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3481,
              "end": 3482,
              "typeName": {
                "type": "Identifier",
                "start": 3481,
                "end": 3482,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3484,
        "end": 3557,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3490,
            "end": 3514,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3494,
                "end": 3513,
                "id": {
                  "type": "Identifier",
                  "start": 3494,
                  "end": 3497,
                  "decorators": [],
                  "name": "r20",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 3500,
                  "end": 3513,
                  "test": {
                    "type": "Literal",
                    "start": 3500,
                    "end": 3504,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "start": 3507,
                    "end": 3509,
                    "properties": []
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 3512,
                    "end": 3513,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3525,
            "end": 3549,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3529,
                "end": 3548,
                "id": {
                  "type": "Identifier",
                  "start": 3529,
                  "end": 3532,
                  "decorators": [],
                  "name": "r20",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 3535,
                  "end": 3548,
                  "test": {
                    "type": "Literal",
                    "start": 3535,
                    "end": 3539,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 3542,
                    "end": 3543,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "start": 3546,
                    "end": 3548,
                    "properties": []
                  }
                },
                "definite": false
              }
            ],
            "declare": false
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
