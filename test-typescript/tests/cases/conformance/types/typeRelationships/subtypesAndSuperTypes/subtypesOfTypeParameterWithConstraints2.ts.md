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
        "name": "f1",
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
          "start": 110,
          "end": 114,
          "name": "x",
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
        },
        {
          "type": "Identifier",
          "start": 116,
          "end": 120,
          "name": "y",
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
                "name": "U",
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
        "start": 122,
        "end": 177,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 128,
            "end": 149,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 132,
                "end": 148,
                "id": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 154,
            "end": 175,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 158,
                "end": 174,
                "id": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 174,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 104,
              "end": 105,
              "typeName": {
                "type": "Identifier",
                "start": 104,
                "end": 105,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "U",
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
      "type": "FunctionDeclaration",
      "start": 192,
      "end": 438,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 203,
        "name": "f2",
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
          "start": 233,
          "end": 237,
          "name": "x",
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
        },
        {
          "type": "Identifier",
          "start": 239,
          "end": 243,
          "name": "y",
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
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 245,
          "end": 249,
          "name": "z",
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
                "name": "V",
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
        "end": 438,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 257,
            "end": 278,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 261,
                "end": 277,
                "id": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 283,
            "end": 304,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 287,
                "end": 303,
                "id": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 320,
            "end": 342,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 324,
                "end": 341,
                "id": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 326,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 341,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 347,
            "end": 369,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 351,
                "end": 368,
                "id": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 353,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 368,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 385,
            "end": 408,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 389,
                "end": 407,
                "id": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 392,
                  "name": "r2a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 407,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 413,
            "end": 436,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 417,
                "end": 435,
                "id": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 420,
                  "name": "r2b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 434,
                    "end": 435,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 214,
              "end": 215,
              "typeName": {
                "type": "Identifier",
                "start": 214,
                "end": 215,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 227,
              "end": 228,
              "typeName": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "V",
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
      "type": "FunctionDeclaration",
      "start": 456,
      "end": 732,
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 467,
        "name": "f3",
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
          "start": 497,
          "end": 501,
          "name": "x",
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
        },
        {
          "type": "Identifier",
          "start": 503,
          "end": 507,
          "name": "y",
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
                "name": "U",
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
        "start": 509,
        "end": 732,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 515,
            "end": 536,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 519,
                "end": 535,
                "id": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 520,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 534,
                    "end": 535,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 541,
            "end": 562,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 545,
                "end": 561,
                "id": {
                  "type": "Identifier",
                  "start": 545,
                  "end": 546,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 560,
                    "end": 561,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 578,
            "end": 609,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 582,
                "end": 608,
                "id": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 584,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 598,
                    "end": 608,
                    "callee": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 606,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 615,
            "end": 646,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 619,
                "end": 645,
                "id": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 621,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 645,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 662,
            "end": 693,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 666,
                "end": 692,
                "id": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 668,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 682,
                    "end": 692,
                    "callee": {
                      "type": "Identifier",
                      "start": 686,
                      "end": 690,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 699,
            "end": 730,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 703,
                "end": 729,
                "id": {
                  "type": "Identifier",
                  "start": 703,
                  "end": 705,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 728,
                    "end": 729,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 478,
              "end": 479,
              "typeName": {
                "type": "Identifier",
                "start": 478,
                "end": 479,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 491,
              "end": 495,
              "typeName": {
                "type": "Identifier",
                "start": 491,
                "end": 495,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 735,
      "end": 764,
      "id": {
        "type": "Identifier",
        "start": 745,
        "end": 747,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 771,
        "end": 773,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 774,
        "end": 790,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 776,
            "end": 788,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 776,
              "end": 779,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "start": 791,
      "end": 814,
      "id": {
        "type": "Identifier",
        "start": 797,
        "end": 799,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 803,
        "end": 814,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 805,
            "end": 812,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 805,
              "end": 808,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 815,
      "end": 827,
      "id": {
        "type": "Identifier",
        "start": 820,
        "end": 821,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 824,
          "end": 825,
          "id": {
            "type": "Identifier",
            "start": 824,
            "end": 825,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 828,
      "end": 844,
      "id": {
        "type": "Identifier",
        "start": 837,
        "end": 838,
        "name": "f",
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
        "start": 841,
        "end": 844,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 845,
      "end": 881,
      "id": {
        "type": "Identifier",
        "start": 852,
        "end": 853,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 871,
                  "end": 878,
                  "id": {
                    "type": "Identifier",
                    "start": 871,
                    "end": 874,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
      "id": {
        "type": "Identifier",
        "start": 888,
        "end": 889,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 890,
        "end": 905,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 892,
            "end": 903,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 892,
              "end": 895,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
      "type": "TSModuleDeclaration",
      "start": 906,
      "end": 942,
      "id": {
        "type": "Identifier",
        "start": 913,
        "end": 914,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 932,
                  "end": 939,
                  "id": {
                    "type": "Identifier",
                    "start": 932,
                    "end": 935,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
        "name": "f4",
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
          "start": 974,
          "end": 978,
          "name": "x",
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
        "start": 980,
        "end": 1153,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 986,
            "end": 1011,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 990,
                "end": 1010,
                "id": {
                  "type": "Identifier",
                  "start": 990,
                  "end": 992,
                  "name": "r0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1022,
            "end": 1047,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1026,
                "end": 1046,
                "id": {
                  "type": "Identifier",
                  "start": 1026,
                  "end": 1028,
                  "name": "r0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1059,
            "end": 1083,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1063,
                "end": 1082,
                "id": {
                  "type": "Identifier",
                  "start": 1063,
                  "end": 1082,
                  "name": "u",
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
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "start": 1088,
            "end": 1111,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1092,
                "end": 1110,
                "id": {
                  "type": "Identifier",
                  "start": 1092,
                  "end": 1095,
                  "name": "r0b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1109,
                    "end": 1110,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1122,
            "end": 1145,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1126,
                "end": 1144,
                "id": {
                  "type": "Identifier",
                  "start": 1126,
                  "end": 1129,
                  "name": "r0b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1143,
                    "end": 1144,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 966,
              "end": 972,
              "typeName": {
                "type": "Identifier",
                "start": 966,
                "end": 972,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1155,
      "end": 1260,
      "id": {
        "type": "Identifier",
        "start": 1164,
        "end": 1166,
        "name": "f5",
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
          "start": 1185,
          "end": 1189,
          "name": "x",
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
        "start": 1191,
        "end": 1260,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1197,
            "end": 1219,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1201,
                "end": 1218,
                "id": {
                  "type": "Identifier",
                  "start": 1201,
                  "end": 1203,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1230,
            "end": 1252,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1234,
                "end": 1251,
                "id": {
                  "type": "Identifier",
                  "start": 1234,
                  "end": 1236,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "kind": "var",
            "declare": false
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1177,
              "end": 1183,
              "typeName": {
                "type": "Identifier",
                "start": 1177,
                "end": 1183,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1262,
      "end": 1369,
      "id": {
        "type": "Identifier",
        "start": 1271,
        "end": 1273,
        "name": "f6",
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
          "start": 1292,
          "end": 1296,
          "name": "x",
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
        "start": 1298,
        "end": 1369,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1304,
            "end": 1327,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1308,
                "end": 1326,
                "id": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1310,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1338,
            "end": 1361,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1342,
                "end": 1360,
                "id": {
                  "type": "Identifier",
                  "start": 1342,
                  "end": 1344,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "kind": "var",
            "declare": false
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1284,
              "end": 1290,
              "typeName": {
                "type": "Identifier",
                "start": 1284,
                "end": 1290,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1371,
      "end": 1483,
      "id": {
        "type": "Identifier",
        "start": 1380,
        "end": 1382,
        "name": "f7",
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
          "start": 1402,
          "end": 1406,
          "name": "x",
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
        "start": 1408,
        "end": 1483,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1414,
            "end": 1439,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1418,
                "end": 1438,
                "id": {
                  "type": "Identifier",
                  "start": 1418,
                  "end": 1420,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1450,
            "end": 1475,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1454,
                "end": 1474,
                "id": {
                  "type": "Identifier",
                  "start": 1454,
                  "end": 1456,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "kind": "var",
            "declare": false
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1393,
              "end": 1400,
              "typeName": {
                "type": "Identifier",
                "start": 1393,
                "end": 1400,
                "name": "Boolean",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1485,
      "end": 1606,
      "id": {
        "type": "Identifier",
        "start": 1494,
        "end": 1496,
        "name": "f8",
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
          "start": 1513,
          "end": 1517,
          "name": "x",
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
        "start": 1519,
        "end": 1606,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1525,
            "end": 1556,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1529,
                "end": 1555,
                "id": {
                  "type": "Identifier",
                  "start": 1529,
                  "end": 1531,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1554,
                    "end": 1555,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1567,
            "end": 1598,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1571,
                "end": 1597,
                "id": {
                  "type": "Identifier",
                  "start": 1571,
                  "end": 1573,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 1587,
                    "end": 1597,
                    "callee": {
                      "type": "Identifier",
                      "start": 1591,
                      "end": 1595,
                      "name": "Date",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1507,
              "end": 1511,
              "typeName": {
                "type": "Identifier",
                "start": 1507,
                "end": 1511,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1608,
      "end": 1717,
      "id": {
        "type": "Identifier",
        "start": 1617,
        "end": 1619,
        "name": "f9",
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
          "start": 1638,
          "end": 1642,
          "name": "x",
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
        "start": 1644,
        "end": 1717,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1650,
            "end": 1674,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1654,
                "end": 1673,
                "id": {
                  "type": "Identifier",
                  "start": 1654,
                  "end": 1656,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1685,
            "end": 1709,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1689,
                "end": 1708,
                "id": {
                  "type": "Identifier",
                  "start": 1689,
                  "end": 1691,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "kind": "var",
            "declare": false
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1630,
              "end": 1636,
              "typeName": {
                "type": "Identifier",
                "start": 1630,
                "end": 1636,
                "name": "RegExp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1719,
      "end": 1852,
      "id": {
        "type": "Identifier",
        "start": 1728,
        "end": 1731,
        "name": "f10",
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
          "start": 1759,
          "end": 1763,
          "name": "x",
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
        "start": 1765,
        "end": 1852,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1771,
            "end": 1802,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1775,
                "end": 1801,
                "id": {
                  "type": "Identifier",
                  "start": 1775,
                  "end": 1777,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1789,
                          "end": 1792,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1794,
                          "end": 1795,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1800,
                    "end": 1801,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1813,
            "end": 1844,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1817,
                "end": 1843,
                "id": {
                  "type": "Identifier",
                  "start": 1817,
                  "end": 1819,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1835,
                          "end": 1838,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1840,
                          "end": 1841,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1854,
      "end": 1980,
      "id": {
        "type": "Identifier",
        "start": 1863,
        "end": 1866,
        "name": "f11",
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
          "start": 1889,
          "end": 1893,
          "name": "x",
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
        "start": 1895,
        "end": 1980,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1901,
            "end": 1931,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1905,
                "end": 1930,
                "id": {
                  "type": "Identifier",
                  "start": 1905,
                  "end": 1907,
                  "name": "r7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1923,
                      "end": 1926,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 1929,
                    "end": 1930,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1942,
            "end": 1972,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1946,
                "end": 1971,
                "id": {
                  "type": "Identifier",
                  "start": 1946,
                  "end": 1948,
                  "name": "r7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "start": 1962,
                    "end": 1971,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1968,
                      "end": 1971,
                      "body": []
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1982,
      "end": 2196,
      "id": {
        "type": "Identifier",
        "start": 1991,
        "end": 1994,
        "name": "f12",
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
          "start": 2021,
          "end": 2025,
          "name": "x",
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
        "start": 2027,
        "end": 2196,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2033,
            "end": 2079,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2037,
                "end": 2078,
                "id": {
                  "type": "Identifier",
                  "start": 2037,
                  "end": 2039,
                  "name": "r8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2053,
                        "end": 2057,
                        "name": "x",
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
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
                  "alternate": {
                    "type": "Identifier",
                    "start": 2077,
                    "end": 2078,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2090,
            "end": 2137,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2094,
                "end": 2136,
                "id": {
                  "type": "Identifier",
                  "start": 2094,
                  "end": 2097,
                  "name": "r8b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "start": 2111,
                    "end": 2136,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2115,
                        "end": 2119,
                        "name": "x",
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
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
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "U",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 2009,
                  "end": 2013,
                  "name": "x",
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
                        "name": "U",
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
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2198,
      "end": 2318,
      "id": {
        "type": "Identifier",
        "start": 2207,
        "end": 2210,
        "name": "f13",
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
          "start": 2225,
          "end": 2229,
          "name": "x",
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
        "start": 2231,
        "end": 2318,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2237,
            "end": 2248,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2241,
                "end": 2247,
                "id": {
                  "type": "Identifier",
                  "start": 2241,
                  "end": 2247,
                  "name": "i1",
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
                        "name": "I1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "start": 2253,
            "end": 2276,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2257,
                "end": 2275,
                "id": {
                  "type": "Identifier",
                  "start": 2257,
                  "end": 2259,
                  "name": "r9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "i1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2274,
                    "end": 2275,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2287,
            "end": 2310,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2291,
                "end": 2309,
                "id": {
                  "type": "Identifier",
                  "start": 2291,
                  "end": 2293,
                  "name": "r9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2307,
                    "end": 2309,
                    "name": "i1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2221,
              "end": 2223,
              "typeName": {
                "type": "Identifier",
                "start": 2221,
                "end": 2223,
                "name": "I1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2320,
      "end": 2442,
      "id": {
        "type": "Identifier",
        "start": 2329,
        "end": 2332,
        "name": "f14",
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
          "start": 2347,
          "end": 2351,
          "name": "x",
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
        "start": 2353,
        "end": 2442,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2359,
            "end": 2370,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2363,
                "end": 2369,
                "id": {
                  "type": "Identifier",
                  "start": 2363,
                  "end": 2369,
                  "name": "c1",
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
                        "name": "C1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "start": 2375,
            "end": 2399,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2379,
                "end": 2398,
                "id": {
                  "type": "Identifier",
                  "start": 2379,
                  "end": 2382,
                  "name": "r10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2397,
                    "end": 2398,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2410,
            "end": 2434,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2414,
                "end": 2433,
                "id": {
                  "type": "Identifier",
                  "start": 2414,
                  "end": 2417,
                  "name": "r10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2431,
                    "end": 2433,
                    "name": "c1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2343,
              "end": 2345,
              "typeName": {
                "type": "Identifier",
                "start": 2343,
                "end": 2345,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2444,
      "end": 2582,
      "id": {
        "type": "Identifier",
        "start": 2453,
        "end": 2456,
        "name": "f15",
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
          "start": 2479,
          "end": 2483,
          "name": "x",
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
        "start": 2485,
        "end": 2582,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2491,
            "end": 2510,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2495,
                "end": 2509,
                "id": {
                  "type": "Identifier",
                  "start": 2495,
                  "end": 2509,
                  "name": "c2",
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
                        "name": "C2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "start": 2515,
            "end": 2539,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2519,
                "end": 2538,
                "id": {
                  "type": "Identifier",
                  "start": 2519,
                  "end": 2522,
                  "name": "r12",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "c2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2537,
                    "end": 2538,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2550,
            "end": 2574,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2554,
                "end": 2573,
                "id": {
                  "type": "Identifier",
                  "start": 2554,
                  "end": 2557,
                  "name": "r12",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2571,
                    "end": 2573,
                    "name": "c2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2467,
              "end": 2477,
              "typeName": {
                "type": "Identifier",
                "start": 2467,
                "end": 2469,
                "name": "C2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2584,
      "end": 2760,
      "id": {
        "type": "Identifier",
        "start": 2593,
        "end": 2596,
        "name": "f16",
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
          "start": 2610,
          "end": 2614,
          "name": "x",
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
        "start": 2616,
        "end": 2760,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2622,
            "end": 2645,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2626,
                "end": 2644,
                "id": {
                  "type": "Identifier",
                  "start": 2626,
                  "end": 2629,
                  "name": "r13",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2643,
                    "end": 2644,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2656,
            "end": 2679,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2660,
                "end": 2678,
                "id": {
                  "type": "Identifier",
                  "start": 2660,
                  "end": 2663,
                  "name": "r13",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2677,
                    "end": 2678,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2691,
            "end": 2716,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2695,
                "end": 2715,
                "id": {
                  "type": "Identifier",
                  "start": 2695,
                  "end": 2698,
                  "name": "r14",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2710,
                      "end": 2711,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2714,
                    "end": 2715,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2727,
            "end": 2752,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2731,
                "end": 2751,
                "id": {
                  "type": "Identifier",
                  "start": 2731,
                  "end": 2734,
                  "name": "r14",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "start": 2748,
                    "end": 2751,
                    "object": {
                      "type": "Identifier",
                      "start": 2748,
                      "end": 2749,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2750,
                      "end": 2751,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2607,
              "end": 2608,
              "typeName": {
                "type": "Identifier",
                "start": 2607,
                "end": 2608,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2762,
      "end": 2896,
      "id": {
        "type": "Identifier",
        "start": 2771,
        "end": 2774,
        "name": "f17",
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
          "start": 2795,
          "end": 2799,
          "name": "x",
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
        "start": 2801,
        "end": 2896,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2807,
            "end": 2824,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2811,
                "end": 2823,
                "id": {
                  "type": "Identifier",
                  "start": 2811,
                  "end": 2823,
                  "name": "af",
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
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "start": 2829,
            "end": 2853,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2833,
                "end": 2852,
                "id": {
                  "type": "Identifier",
                  "start": 2833,
                  "end": 2836,
                  "name": "r15",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "af",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2851,
                    "end": 2852,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2864,
            "end": 2888,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2868,
                "end": 2887,
                "id": {
                  "type": "Identifier",
                  "start": 2868,
                  "end": 2871,
                  "name": "r15",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2885,
                    "end": 2887,
                    "name": "af",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeQuery",
              "start": 2785,
              "end": 2793,
              "exprName": {
                "type": "Identifier",
                "start": 2792,
                "end": 2793,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2898,
      "end": 3032,
      "id": {
        "type": "Identifier",
        "start": 2907,
        "end": 2910,
        "name": "f18",
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
          "start": 2931,
          "end": 2935,
          "name": "x",
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
        "start": 2937,
        "end": 3032,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2943,
            "end": 2960,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2947,
                "end": 2959,
                "id": {
                  "type": "Identifier",
                  "start": 2947,
                  "end": 2959,
                  "name": "ac",
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
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
            "start": 2965,
            "end": 2989,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2969,
                "end": 2988,
                "id": {
                  "type": "Identifier",
                  "start": 2969,
                  "end": 2972,
                  "name": "r16",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "ac",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 2987,
                    "end": 2988,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3000,
            "end": 3024,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3004,
                "end": 3023,
                "id": {
                  "type": "Identifier",
                  "start": 3004,
                  "end": 3007,
                  "name": "r16",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 3021,
                    "end": 3023,
                    "name": "ac",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeQuery",
              "start": 2921,
              "end": 2929,
              "exprName": {
                "type": "Identifier",
                "start": 2928,
                "end": 2929,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3034,
      "end": 3313,
      "id": {
        "type": "Identifier",
        "start": 3043,
        "end": 3046,
        "name": "f19",
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
          "start": 3050,
          "end": 3054,
          "name": "x",
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
              "name": "f17",
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
                "start": 3088,
                "end": 3092,
                "name": "a",
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
                      "name": "U",
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
              "start": 3094,
              "end": 3177,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3104,
                  "end": 3127,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3108,
                      "end": 3126,
                      "id": {
                        "type": "Identifier",
                        "start": 3108,
                        "end": 3111,
                        "name": "r17",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 3125,
                          "end": 3126,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3142,
                  "end": 3165,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3146,
                      "end": 3164,
                      "id": {
                        "type": "Identifier",
                        "start": 3146,
                        "end": 3149,
                        "name": "r17",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 3163,
                          "end": 3164,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3085,
                    "end": 3086,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3085,
                      "end": 3086,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 3183,
            "end": 3311,
            "id": {
              "type": "Identifier",
              "start": 3192,
              "end": 3195,
              "name": "f18",
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
                "start": 3222,
                "end": 3226,
                "name": "a",
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
                      "name": "V",
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
              "start": 3228,
              "end": 3311,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 3238,
                  "end": 3261,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3242,
                      "end": 3260,
                      "id": {
                        "type": "Identifier",
                        "start": 3242,
                        "end": 3245,
                        "name": "r18",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 3259,
                          "end": 3260,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3276,
                  "end": 3299,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3280,
                      "end": 3298,
                      "id": {
                        "type": "Identifier",
                        "start": 3280,
                        "end": 3283,
                        "name": "r18",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "alternate": {
                          "type": "Identifier",
                          "start": 3297,
                          "end": 3298,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3206,
                    "end": 3207,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3206,
                      "end": 3207,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3219,
                    "end": 3220,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3219,
                      "end": 3220,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "returnType": null
          }
        ]
      },
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
      "type": "FunctionDeclaration",
      "start": 3315,
      "end": 3445,
      "id": {
        "type": "Identifier",
        "start": 3324,
        "end": 3327,
        "name": "f20",
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
          "start": 3346,
          "end": 3350,
          "name": "x",
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
        "start": 3352,
        "end": 3445,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3358,
            "end": 3392,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3362,
                "end": 3391,
                "id": {
                  "type": "Identifier",
                  "start": 3362,
                  "end": 3365,
                  "name": "r19",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "alternate": {
                    "type": "Identifier",
                    "start": 3390,
                    "end": 3391,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3403,
            "end": 3437,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3407,
                "end": 3436,
                "id": {
                  "type": "Identifier",
                  "start": 3407,
                  "end": 3410,
                  "name": "r19",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "start": 3424,
                    "end": 3436,
                    "callee": {
                      "type": "Identifier",
                      "start": 3428,
                      "end": 3434,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3338,
              "end": 3344,
              "typeName": {
                "type": "Identifier",
                "start": 3338,
                "end": 3344,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3447,
      "end": 3557,
      "id": {
        "type": "Identifier",
        "start": 3456,
        "end": 3459,
        "name": "f21",
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
          "start": 3478,
          "end": 3482,
          "name": "x",
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
        "start": 3484,
        "end": 3557,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3490,
            "end": 3514,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3494,
                "end": 3513,
                "id": {
                  "type": "Identifier",
                  "start": 3494,
                  "end": 3497,
                  "name": "r20",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3525,
            "end": 3549,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3529,
                "end": 3548,
                "id": {
                  "type": "Identifier",
                  "start": 3529,
                  "end": 3532,
                  "name": "r20",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "kind": "var",
            "declare": false
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3470,
              "end": 3476,
              "typeName": {
                "type": "Identifier",
                "start": 3470,
                "end": 3476,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
