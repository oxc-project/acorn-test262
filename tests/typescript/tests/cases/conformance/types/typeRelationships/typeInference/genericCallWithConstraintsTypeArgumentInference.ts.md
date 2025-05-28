__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 80,
  "end": 2440,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 107,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 90,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 91,
        "end": 107,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 93,
            "end": 105,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 96,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
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
      "start": 108,
      "end": 151,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 121,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 130,
        "end": 134,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 135,
        "end": 151,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 137,
            "end": 149,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 140,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
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
      "start": 152,
      "end": 199,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 166,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 175,
        "end": 182,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 183,
        "end": 199,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 185,
            "end": 197,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 188,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 196,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 190,
                "end": 196
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
      "type": "VariableDeclaration",
      "start": 200,
      "end": 212,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 211,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 207,
                "end": 211,
                "typeName": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 211,
                  "decorators": [],
                  "name": "Base",
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
      "start": 213,
      "end": 229,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 228,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 228,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 221,
                "end": 228,
                "typeName": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 228,
                  "decorators": [],
                  "name": "Derived",
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
      "start": 230,
      "end": 247,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 246,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 246,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 238,
                "end": 246,
                "typeName": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 246,
                  "decorators": [],
                  "name": "Derived2",
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
      "type": "FunctionDeclaration",
      "start": 249,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 261,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 261,
        "end": 277,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 262,
            "end": 276,
            "name": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 272,
              "end": 276,
              "typeName": {
                "type": "Identifier",
                "start": 272,
                "end": 276,
                "decorators": [],
                "name": "Base",
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
          "start": 278,
          "end": 282,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 279,
            "end": 282,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 281,
              "end": 282,
              "typeName": {
                "type": "Identifier",
                "start": 281,
                "end": 282,
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
        "start": 284,
        "end": 301,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 290,
            "end": 299,
            "argument": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 318,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 308,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 311,
            "end": 317,
            "callee": {
              "type": "Identifier",
              "start": 311,
              "end": 314,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 315,
                "end": 316,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 344,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 343,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 333,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 336,
            "end": 343,
            "callee": {
              "type": "Identifier",
              "start": 336,
              "end": 339,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 340,
                "end": 342,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 357,
      "end": 435,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 370,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 370,
        "end": 405,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 371,
            "end": 385,
            "name": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 381,
              "end": 385,
              "typeName": {
                "type": "Identifier",
                "start": 381,
                "end": 385,
                "decorators": [],
                "name": "Base",
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
            "start": 387,
            "end": 404,
            "name": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 397,
              "end": 404,
              "typeName": {
                "type": "Identifier",
                "start": 397,
                "end": 404,
                "decorators": [],
                "name": "Derived",
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
          "start": 406,
          "end": 410,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 407,
            "end": 410,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 409,
              "end": 410,
              "typeName": {
                "type": "Identifier",
                "start": 409,
                "end": 410,
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
          "start": 412,
          "end": 416,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 413,
            "end": 416,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 415,
              "end": 416,
              "typeName": {
                "type": "Identifier",
                "start": 415,
                "end": 416,
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
        "start": 418,
        "end": 435,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 424,
            "end": 433,
            "argument": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 437,
      "end": 524,
      "id": {
        "type": "Identifier",
        "start": 446,
        "end": 451,
        "decorators": [],
        "name": "foo2b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 451,
        "end": 486,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 452,
            "end": 466,
            "name": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 462,
              "end": 466,
              "typeName": {
                "type": "Identifier",
                "start": 462,
                "end": 466,
                "decorators": [],
                "name": "Base",
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
            "start": 468,
            "end": 485,
            "name": {
              "type": "Identifier",
              "start": 468,
              "end": 469,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 478,
              "end": 485,
              "typeName": {
                "type": "Identifier",
                "start": 478,
                "end": 485,
                "decorators": [],
                "name": "Derived",
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
          "start": 487,
          "end": 491,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 488,
            "end": 491,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 490,
              "end": 491,
              "typeName": {
                "type": "Identifier",
                "start": 490,
                "end": 491,
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
        "start": 493,
        "end": 524,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 499,
            "end": 508,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 503,
                "end": 507,
                "id": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 507,
                  "decorators": [],
                  "name": "x",
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
                        "name": "T",
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
            "type": "ReturnStatement",
            "start": 513,
            "end": 522,
            "argument": {
              "type": "Identifier",
              "start": 520,
              "end": 521,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 526,
      "end": 609,
      "id": {
        "type": "Identifier",
        "start": 535,
        "end": 540,
        "decorators": [],
        "name": "foo2c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 540,
        "end": 575,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 541,
            "end": 555,
            "name": {
              "type": "Identifier",
              "start": 541,
              "end": 542,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 551,
              "end": 555,
              "typeName": {
                "type": "Identifier",
                "start": 551,
                "end": 555,
                "decorators": [],
                "name": "Base",
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
            "start": 557,
            "end": 574,
            "name": {
              "type": "Identifier",
              "start": 557,
              "end": 558,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 567,
              "end": 574,
              "typeName": {
                "type": "Identifier",
                "start": 567,
                "end": 574,
                "decorators": [],
                "name": "Derived",
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
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 578,
        "end": 609,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 584,
            "end": 593,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 588,
                "end": 592,
                "id": {
                  "type": "Identifier",
                  "start": 588,
                  "end": 592,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 589,
                    "end": 592,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 591,
                      "end": 592,
                      "typeName": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 592,
                        "decorators": [],
                        "name": "T",
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
            "type": "ReturnStatement",
            "start": 598,
            "end": 607,
            "argument": {
              "type": "Identifier",
              "start": 605,
              "end": 606,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 611,
      "end": 630,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 629,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 617,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 620,
            "end": 629,
            "callee": {
              "type": "Identifier",
              "start": 620,
              "end": 625,
              "decorators": [],
              "name": "foo2b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 626,
                "end": 628,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 639,
      "end": 657,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 656,
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 646,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 649,
            "end": 656,
            "callee": {
              "type": "Identifier",
              "start": 649,
              "end": 654,
              "decorators": [],
              "name": "foo2c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 667,
      "end": 1361,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 673,
        "end": 674,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 674,
        "end": 709,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 675,
            "end": 689,
            "name": {
              "type": "Identifier",
              "start": 675,
              "end": 676,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 685,
              "end": 689,
              "typeName": {
                "type": "Identifier",
                "start": 685,
                "end": 689,
                "decorators": [],
                "name": "Base",
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
            "start": 691,
            "end": 708,
            "name": {
              "type": "Identifier",
              "start": 691,
              "end": 692,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 701,
              "end": 708,
              "typeName": {
                "type": "Identifier",
                "start": 701,
                "end": 708,
                "decorators": [],
                "name": "Derived",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 710,
        "end": 1361,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 716,
            "end": 761,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 716,
              "end": 727,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 727,
              "end": 761,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 728,
                  "end": 739,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 735,
                    "end": 739,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 736,
                      "end": 739,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 738,
                        "end": 739,
                        "typeName": {
                          "type": "Identifier",
                          "start": 738,
                          "end": 739,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 741,
                  "end": 752,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 748,
                    "end": 752,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 749,
                      "end": 752,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 751,
                        "end": 752,
                        "typeName": {
                          "type": "Identifier",
                          "start": 751,
                          "end": 752,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
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
                "start": 754,
                "end": 761,
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
            "start": 767,
            "end": 808,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 767,
              "end": 770,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 770,
              "end": 808,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 771,
                  "end": 775,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 772,
                    "end": 775,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 774,
                      "end": 775,
                      "typeName": {
                        "type": "Identifier",
                        "start": 774,
                        "end": 775,
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
                  "start": 777,
                  "end": 781,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 778,
                    "end": 781,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 780,
                      "end": 781,
                      "typeName": {
                        "type": "Identifier",
                        "start": 780,
                        "end": 781,
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
                "start": 783,
                "end": 808,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 793,
                    "end": 802,
                    "argument": {
                      "type": "Identifier",
                      "start": 800,
                      "end": 801,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 814,
            "end": 856,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 814,
              "end": 818,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 818,
              "end": 856,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 819,
                  "end": 823,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 820,
                    "end": 823,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 822,
                      "end": 823,
                      "typeName": {
                        "type": "Identifier",
                        "start": 822,
                        "end": 823,
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
                  "start": 825,
                  "end": 829,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 826,
                    "end": 829,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 828,
                      "end": 829,
                      "typeName": {
                        "type": "Identifier",
                        "start": 828,
                        "end": 829,
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
                "start": 831,
                "end": 856,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 841,
                    "end": 850,
                    "argument": {
                      "type": "Identifier",
                      "start": 848,
                      "end": 849,
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 862,
            "end": 923,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 862,
              "end": 866,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 866,
              "end": 923,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 866,
                "end": 885,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 867,
                    "end": 884,
                    "name": {
                      "type": "Identifier",
                      "start": 867,
                      "end": 868,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 877,
                      "end": 884,
                      "typeName": {
                        "type": "Identifier",
                        "start": 877,
                        "end": 884,
                        "decorators": [],
                        "name": "Derived",
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
                  "start": 886,
                  "end": 890,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 887,
                    "end": 890,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 889,
                      "end": 890,
                      "typeName": {
                        "type": "Identifier",
                        "start": 889,
                        "end": 890,
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
                  "start": 892,
                  "end": 896,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 893,
                    "end": 896,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 895,
                      "end": 896,
                      "typeName": {
                        "type": "Identifier",
                        "start": 895,
                        "end": 896,
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
                "start": 898,
                "end": 923,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 908,
                    "end": 917,
                    "argument": {
                      "type": "Identifier",
                      "start": 915,
                      "end": 916,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 929,
            "end": 991,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 929,
              "end": 933,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 933,
              "end": 991,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 933,
                "end": 953,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 934,
                    "end": 952,
                    "name": {
                      "type": "Identifier",
                      "start": 934,
                      "end": 935,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 944,
                      "end": 952,
                      "typeName": {
                        "type": "Identifier",
                        "start": 944,
                        "end": 952,
                        "decorators": [],
                        "name": "Derived2",
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
                  "start": 954,
                  "end": 958,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 955,
                    "end": 958,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 957,
                      "end": 958,
                      "typeName": {
                        "type": "Identifier",
                        "start": 957,
                        "end": 958,
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
                  "start": 960,
                  "end": 964,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 961,
                    "end": 964,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 963,
                      "end": 964,
                      "typeName": {
                        "type": "Identifier",
                        "start": 963,
                        "end": 964,
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
                "start": 966,
                "end": 991,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 976,
                    "end": 985,
                    "argument": {
                      "type": "Identifier",
                      "start": 983,
                      "end": 984,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 997,
            "end": 1078,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 997,
              "end": 1001,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1001,
              "end": 1078,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1001,
                "end": 1040,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1002,
                    "end": 1019,
                    "name": {
                      "type": "Identifier",
                      "start": 1002,
                      "end": 1003,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1012,
                      "end": 1019,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1012,
                        "end": 1019,
                        "decorators": [],
                        "name": "Derived",
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
                    "start": 1021,
                    "end": 1039,
                    "name": {
                      "type": "Identifier",
                      "start": 1021,
                      "end": 1022,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1031,
                      "end": 1039,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1031,
                        "end": 1039,
                        "decorators": [],
                        "name": "Derived2",
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
                  "start": 1041,
                  "end": 1045,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1042,
                    "end": 1045,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1044,
                      "end": 1045,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1044,
                        "end": 1045,
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
                  "start": 1047,
                  "end": 1051,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1048,
                    "end": 1051,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1050,
                      "end": 1051,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1050,
                        "end": 1051,
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
                "start": 1053,
                "end": 1078,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1063,
                    "end": 1072,
                    "argument": {
                      "type": "Identifier",
                      "start": 1070,
                      "end": 1071,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 1084,
            "end": 1173,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1084,
              "end": 1088,
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1088,
              "end": 1173,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1088,
                "end": 1127,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1089,
                    "end": 1106,
                    "name": {
                      "type": "Identifier",
                      "start": 1089,
                      "end": 1090,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1099,
                      "end": 1106,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1099,
                        "end": 1106,
                        "decorators": [],
                        "name": "Derived",
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
                    "start": 1108,
                    "end": 1126,
                    "name": {
                      "type": "Identifier",
                      "start": 1108,
                      "end": 1109,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1118,
                      "end": 1126,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1118,
                        "end": 1126,
                        "decorators": [],
                        "name": "Derived2",
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
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1130,
                "end": 1173,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1140,
                    "end": 1149,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1144,
                        "end": 1148,
                        "id": {
                          "type": "Identifier",
                          "start": 1144,
                          "end": 1148,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1145,
                            "end": 1148,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1147,
                              "end": 1148,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1147,
                                "end": 1148,
                                "decorators": [],
                                "name": "T",
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
                    "type": "ReturnStatement",
                    "start": 1158,
                    "end": 1167,
                    "argument": {
                      "type": "Identifier",
                      "start": 1165,
                      "end": 1166,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 1179,
            "end": 1268,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1179,
              "end": 1183,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1183,
              "end": 1268,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1183,
                "end": 1218,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1184,
                    "end": 1198,
                    "name": {
                      "type": "Identifier",
                      "start": 1184,
                      "end": 1185,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1194,
                      "end": 1198,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1194,
                        "end": 1198,
                        "decorators": [],
                        "name": "Base",
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
                    "start": 1200,
                    "end": 1217,
                    "name": {
                      "type": "Identifier",
                      "start": 1200,
                      "end": 1201,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1210,
                      "end": 1217,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1210,
                        "end": 1217,
                        "decorators": [],
                        "name": "Derived",
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
                  "start": 1219,
                  "end": 1223,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1220,
                    "end": 1223,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1222,
                      "end": 1223,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1222,
                        "end": 1223,
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
                "start": 1225,
                "end": 1268,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1235,
                    "end": 1244,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1239,
                        "end": 1243,
                        "id": {
                          "type": "Identifier",
                          "start": 1239,
                          "end": 1243,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1240,
                            "end": 1243,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1242,
                              "end": 1243,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1242,
                                "end": 1243,
                                "decorators": [],
                                "name": "T",
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
                    "type": "ReturnStatement",
                    "start": 1253,
                    "end": 1262,
                    "argument": {
                      "type": "Identifier",
                      "start": 1260,
                      "end": 1261,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 1274,
            "end": 1359,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1274,
              "end": 1278,
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1278,
              "end": 1359,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1278,
                "end": 1313,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1279,
                    "end": 1293,
                    "name": {
                      "type": "Identifier",
                      "start": 1279,
                      "end": 1280,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1289,
                      "end": 1293,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1289,
                        "end": 1293,
                        "decorators": [],
                        "name": "Base",
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
                    "start": 1295,
                    "end": 1312,
                    "name": {
                      "type": "Identifier",
                      "start": 1295,
                      "end": 1296,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1305,
                      "end": 1312,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1305,
                        "end": 1312,
                        "decorators": [],
                        "name": "Derived",
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
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1316,
                "end": 1359,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1326,
                    "end": 1335,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1330,
                        "end": 1334,
                        "id": {
                          "type": "Identifier",
                          "start": 1330,
                          "end": 1334,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1331,
                            "end": 1334,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1333,
                              "end": 1334,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1333,
                                "end": 1334,
                                "decorators": [],
                                "name": "T",
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
                    "type": "ReturnStatement",
                    "start": 1344,
                    "end": 1353,
                    "argument": {
                      "type": "Identifier",
                      "start": 1351,
                      "end": 1352,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
      "type": "VariableDeclaration",
      "start": 1363,
      "end": 1384,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1367,
          "end": 1383,
          "id": {
            "type": "Identifier",
            "start": 1367,
            "end": 1368,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1371,
            "end": 1383,
            "callee": {
              "type": "Identifier",
              "start": 1375,
              "end": 1376,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1377,
                "end": 1378,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1380,
                "end": 1382,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1385,
      "end": 1408,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1389,
          "end": 1407,
          "id": {
            "type": "Identifier",
            "start": 1389,
            "end": 1391,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1394,
            "end": 1407,
            "callee": {
              "type": "MemberExpression",
              "start": 1394,
              "end": 1399,
              "object": {
                "type": "Identifier",
                "start": 1394,
                "end": 1395,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1396,
                "end": 1399,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1400,
                "end": 1402,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1404,
                "end": 1406,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1417,
      "end": 1440,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1421,
          "end": 1439,
          "id": {
            "type": "Identifier",
            "start": 1421,
            "end": 1423,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1426,
            "end": 1439,
            "callee": {
              "type": "MemberExpression",
              "start": 1426,
              "end": 1432,
              "object": {
                "type": "Identifier",
                "start": 1426,
                "end": 1427,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1428,
                "end": 1432,
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1433,
                "end": 1434,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1436,
                "end": 1438,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1452,
      "end": 1476,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1456,
          "end": 1475,
          "id": {
            "type": "Identifier",
            "start": 1456,
            "end": 1458,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1461,
            "end": 1475,
            "callee": {
              "type": "MemberExpression",
              "start": 1461,
              "end": 1467,
              "object": {
                "type": "Identifier",
                "start": 1461,
                "end": 1462,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1463,
                "end": 1467,
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1468,
                "end": 1470,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1472,
                "end": 1474,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1488,
      "end": 1512,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1492,
          "end": 1511,
          "id": {
            "type": "Identifier",
            "start": 1492,
            "end": 1494,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1497,
            "end": 1511,
            "callee": {
              "type": "MemberExpression",
              "start": 1497,
              "end": 1503,
              "object": {
                "type": "Identifier",
                "start": 1497,
                "end": 1498,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1499,
                "end": 1503,
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1504,
                "end": 1506,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1508,
                "end": 1510,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1521,
      "end": 1545,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1525,
          "end": 1544,
          "id": {
            "type": "Identifier",
            "start": 1525,
            "end": 1527,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1530,
            "end": 1544,
            "callee": {
              "type": "MemberExpression",
              "start": 1530,
              "end": 1536,
              "object": {
                "type": "Identifier",
                "start": 1530,
                "end": 1531,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1532,
                "end": 1536,
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1537,
                "end": 1539,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1541,
                "end": 1543,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1557,
      "end": 1582,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1561,
          "end": 1581,
          "id": {
            "type": "Identifier",
            "start": 1561,
            "end": 1564,
            "decorators": [],
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1567,
            "end": 1581,
            "callee": {
              "type": "MemberExpression",
              "start": 1567,
              "end": 1573,
              "object": {
                "type": "Identifier",
                "start": 1567,
                "end": 1568,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1569,
                "end": 1573,
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1574,
                "end": 1576,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1578,
                "end": 1580,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1595,
      "end": 1613,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1599,
          "end": 1612,
          "id": {
            "type": "Identifier",
            "start": 1599,
            "end": 1601,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1604,
            "end": 1612,
            "callee": {
              "type": "MemberExpression",
              "start": 1604,
              "end": 1610,
              "object": {
                "type": "Identifier",
                "start": 1604,
                "end": 1605,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1606,
                "end": 1610,
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1625,
      "end": 1646,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1629,
          "end": 1645,
          "id": {
            "type": "Identifier",
            "start": 1629,
            "end": 1632,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1635,
            "end": 1645,
            "callee": {
              "type": "MemberExpression",
              "start": 1635,
              "end": 1641,
              "object": {
                "type": "Identifier",
                "start": 1635,
                "end": 1636,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1637,
                "end": 1641,
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1642,
                "end": 1644,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1655,
      "end": 1674,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1659,
          "end": 1673,
          "id": {
            "type": "Identifier",
            "start": 1659,
            "end": 1662,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1665,
            "end": 1673,
            "callee": {
              "type": "MemberExpression",
              "start": 1665,
              "end": 1671,
              "object": {
                "type": "Identifier",
                "start": 1665,
                "end": 1666,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1667,
                "end": 1671,
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1684,
      "end": 2116,
      "id": {
        "type": "Identifier",
        "start": 1694,
        "end": 1695,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1695,
        "end": 1730,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1696,
            "end": 1710,
            "name": {
              "type": "Identifier",
              "start": 1696,
              "end": 1697,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1706,
              "end": 1710,
              "typeName": {
                "type": "Identifier",
                "start": 1706,
                "end": 1710,
                "decorators": [],
                "name": "Base",
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
            "start": 1712,
            "end": 1729,
            "name": {
              "type": "Identifier",
              "start": 1712,
              "end": 1713,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1722,
              "end": 1729,
              "typeName": {
                "type": "Identifier",
                "start": 1722,
                "end": 1729,
                "decorators": [],
                "name": "Derived",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1731,
        "end": 2116,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1737,
            "end": 1754,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1742,
                "end": 1746,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1743,
                  "end": 1746,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1745,
                    "end": 1746,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1745,
                      "end": 1746,
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
                "start": 1748,
                "end": 1752,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1749,
                  "end": 1752,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1751,
                    "end": 1752,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1751,
                      "end": 1752,
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
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1759,
            "end": 1778,
            "key": {
              "type": "Identifier",
              "start": 1759,
              "end": 1762,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1763,
                "end": 1767,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1764,
                  "end": 1767,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1766,
                    "end": 1767,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1766,
                      "end": 1767,
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
                "start": 1769,
                "end": 1773,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1770,
                  "end": 1773,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1772,
                    "end": 1773,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1772,
                      "end": 1773,
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
              "start": 1774,
              "end": 1777,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1776,
                "end": 1777,
                "typeName": {
                  "type": "Identifier",
                  "start": 1776,
                  "end": 1777,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1783,
            "end": 1803,
            "key": {
              "type": "Identifier",
              "start": 1783,
              "end": 1787,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1788,
                "end": 1792,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1789,
                  "end": 1792,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1791,
                    "end": 1792,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1791,
                      "end": 1792,
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
                "start": 1794,
                "end": 1798,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1795,
                  "end": 1798,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1797,
                    "end": 1798,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1797,
                      "end": 1798,
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
              "start": 1799,
              "end": 1802,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1801,
                "end": 1802,
                "typeName": {
                  "type": "Identifier",
                  "start": 1801,
                  "end": 1802,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1808,
            "end": 1847,
            "key": {
              "type": "Identifier",
              "start": 1808,
              "end": 1812,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1812,
              "end": 1831,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1813,
                  "end": 1830,
                  "name": {
                    "type": "Identifier",
                    "start": 1813,
                    "end": 1814,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1823,
                    "end": 1830,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1823,
                      "end": 1830,
                      "decorators": [],
                      "name": "Derived",
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
                "start": 1832,
                "end": 1836,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1833,
                  "end": 1836,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1835,
                    "end": 1836,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1835,
                      "end": 1836,
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
                "start": 1838,
                "end": 1842,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1839,
                  "end": 1842,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1841,
                    "end": 1842,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1841,
                      "end": 1842,
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
              "start": 1843,
              "end": 1846,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1845,
                "end": 1846,
                "typeName": {
                  "type": "Identifier",
                  "start": 1845,
                  "end": 1846,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1852,
            "end": 1892,
            "key": {
              "type": "Identifier",
              "start": 1852,
              "end": 1856,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1856,
              "end": 1876,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1857,
                  "end": 1875,
                  "name": {
                    "type": "Identifier",
                    "start": 1857,
                    "end": 1858,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1867,
                    "end": 1875,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1867,
                      "end": 1875,
                      "decorators": [],
                      "name": "Derived2",
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
                "start": 1877,
                "end": 1881,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1878,
                  "end": 1881,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1880,
                    "end": 1881,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1880,
                      "end": 1881,
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
                "start": 1883,
                "end": 1887,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1884,
                  "end": 1887,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1886,
                    "end": 1887,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1886,
                      "end": 1887,
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
              "start": 1888,
              "end": 1891,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1890,
                "end": 1891,
                "typeName": {
                  "type": "Identifier",
                  "start": 1890,
                  "end": 1891,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1897,
            "end": 1956,
            "key": {
              "type": "Identifier",
              "start": 1897,
              "end": 1901,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1901,
              "end": 1940,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1902,
                  "end": 1919,
                  "name": {
                    "type": "Identifier",
                    "start": 1902,
                    "end": 1903,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1912,
                    "end": 1919,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1912,
                      "end": 1919,
                      "decorators": [],
                      "name": "Derived",
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
                  "start": 1921,
                  "end": 1939,
                  "name": {
                    "type": "Identifier",
                    "start": 1921,
                    "end": 1922,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1931,
                    "end": 1939,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1931,
                      "end": 1939,
                      "decorators": [],
                      "name": "Derived2",
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
                "start": 1941,
                "end": 1945,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1942,
                  "end": 1945,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1944,
                    "end": 1945,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1944,
                      "end": 1945,
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
                "start": 1947,
                "end": 1951,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1948,
                  "end": 1951,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1950,
                    "end": 1951,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1950,
                      "end": 1951,
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
              "start": 1952,
              "end": 1955,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1954,
                "end": 1955,
                "typeName": {
                  "type": "Identifier",
                  "start": 1954,
                  "end": 1955,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1961,
            "end": 2010,
            "key": {
              "type": "Identifier",
              "start": 1961,
              "end": 1965,
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1965,
              "end": 2004,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1966,
                  "end": 1983,
                  "name": {
                    "type": "Identifier",
                    "start": 1966,
                    "end": 1967,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1976,
                    "end": 1983,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1976,
                      "end": 1983,
                      "decorators": [],
                      "name": "Derived",
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
                  "start": 1985,
                  "end": 2003,
                  "name": {
                    "type": "Identifier",
                    "start": 1985,
                    "end": 1986,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1995,
                    "end": 2003,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1995,
                      "end": 2003,
                      "decorators": [],
                      "name": "Derived2",
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2006,
              "end": 2009,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2008,
                "end": 2009,
                "typeName": {
                  "type": "Identifier",
                  "start": 2008,
                  "end": 2009,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2015,
            "end": 2064,
            "key": {
              "type": "Identifier",
              "start": 2015,
              "end": 2019,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2019,
              "end": 2054,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2020,
                  "end": 2034,
                  "name": {
                    "type": "Identifier",
                    "start": 2020,
                    "end": 2021,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2030,
                    "end": 2034,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2030,
                      "end": 2034,
                      "decorators": [],
                      "name": "Base",
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
                  "start": 2036,
                  "end": 2053,
                  "name": {
                    "type": "Identifier",
                    "start": 2036,
                    "end": 2037,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2046,
                    "end": 2053,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2046,
                      "end": 2053,
                      "decorators": [],
                      "name": "Derived",
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
                "start": 2055,
                "end": 2059,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2056,
                  "end": 2059,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2058,
                    "end": 2059,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2058,
                      "end": 2059,
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
              "start": 2060,
              "end": 2063,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2062,
                "end": 2063,
                "typeName": {
                  "type": "Identifier",
                  "start": 2062,
                  "end": 2063,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 2069,
            "end": 2114,
            "key": {
              "type": "Identifier",
              "start": 2069,
              "end": 2073,
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2073,
              "end": 2108,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2074,
                  "end": 2088,
                  "name": {
                    "type": "Identifier",
                    "start": 2074,
                    "end": 2075,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2084,
                    "end": 2088,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2084,
                      "end": 2088,
                      "decorators": [],
                      "name": "Base",
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
                  "start": 2090,
                  "end": 2107,
                  "name": {
                    "type": "Identifier",
                    "start": 2090,
                    "end": 2091,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2100,
                    "end": 2107,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2100,
                      "end": 2107,
                      "decorators": [],
                      "name": "Derived",
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2110,
              "end": 2113,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2112,
                "end": 2113,
                "typeName": {
                  "type": "Identifier",
                  "start": 2112,
                  "end": 2113,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2118,
      "end": 2142,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2122,
          "end": 2141,
          "id": {
            "type": "Identifier",
            "start": 2122,
            "end": 2141,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2123,
              "end": 2141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2125,
                "end": 2141,
                "typeName": {
                  "type": "Identifier",
                  "start": 2125,
                  "end": 2126,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2126,
                  "end": 2141,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2127,
                      "end": 2131,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2127,
                        "end": 2131,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2133,
                      "end": 2140,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2133,
                        "end": 2140,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
      "start": 2143,
      "end": 2166,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2147,
          "end": 2165,
          "id": {
            "type": "Identifier",
            "start": 2147,
            "end": 2149,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2152,
            "end": 2165,
            "callee": {
              "type": "MemberExpression",
              "start": 2152,
              "end": 2157,
              "object": {
                "type": "Identifier",
                "start": 2152,
                "end": 2153,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2154,
                "end": 2157,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2158,
                "end": 2160,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2162,
                "end": 2164,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2175,
      "end": 2198,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2179,
          "end": 2197,
          "id": {
            "type": "Identifier",
            "start": 2179,
            "end": 2181,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2184,
            "end": 2197,
            "callee": {
              "type": "MemberExpression",
              "start": 2184,
              "end": 2190,
              "object": {
                "type": "Identifier",
                "start": 2184,
                "end": 2185,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2186,
                "end": 2190,
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2191,
                "end": 2192,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2194,
                "end": 2196,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2210,
      "end": 2234,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2214,
          "end": 2233,
          "id": {
            "type": "Identifier",
            "start": 2214,
            "end": 2216,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2219,
            "end": 2233,
            "callee": {
              "type": "MemberExpression",
              "start": 2219,
              "end": 2225,
              "object": {
                "type": "Identifier",
                "start": 2219,
                "end": 2220,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2221,
                "end": 2225,
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2226,
                "end": 2228,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2230,
                "end": 2232,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2246,
      "end": 2270,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2250,
          "end": 2269,
          "id": {
            "type": "Identifier",
            "start": 2250,
            "end": 2252,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2255,
            "end": 2269,
            "callee": {
              "type": "MemberExpression",
              "start": 2255,
              "end": 2261,
              "object": {
                "type": "Identifier",
                "start": 2255,
                "end": 2256,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2257,
                "end": 2261,
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2262,
                "end": 2264,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2266,
                "end": 2268,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2279,
      "end": 2303,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2283,
          "end": 2302,
          "id": {
            "type": "Identifier",
            "start": 2283,
            "end": 2285,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2288,
            "end": 2302,
            "callee": {
              "type": "MemberExpression",
              "start": 2288,
              "end": 2294,
              "object": {
                "type": "Identifier",
                "start": 2288,
                "end": 2289,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2290,
                "end": 2294,
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2295,
                "end": 2297,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2299,
                "end": 2301,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2315,
      "end": 2340,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2319,
          "end": 2339,
          "id": {
            "type": "Identifier",
            "start": 2319,
            "end": 2322,
            "decorators": [],
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2325,
            "end": 2339,
            "callee": {
              "type": "MemberExpression",
              "start": 2325,
              "end": 2331,
              "object": {
                "type": "Identifier",
                "start": 2325,
                "end": 2326,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2327,
                "end": 2331,
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2332,
                "end": 2334,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2336,
                "end": 2338,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2353,
      "end": 2371,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2357,
          "end": 2370,
          "id": {
            "type": "Identifier",
            "start": 2357,
            "end": 2359,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2362,
            "end": 2370,
            "callee": {
              "type": "MemberExpression",
              "start": 2362,
              "end": 2368,
              "object": {
                "type": "Identifier",
                "start": 2362,
                "end": 2363,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2364,
                "end": 2368,
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2383,
      "end": 2404,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2387,
          "end": 2403,
          "id": {
            "type": "Identifier",
            "start": 2387,
            "end": 2390,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2393,
            "end": 2403,
            "callee": {
              "type": "MemberExpression",
              "start": 2393,
              "end": 2399,
              "object": {
                "type": "Identifier",
                "start": 2393,
                "end": 2394,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2395,
                "end": 2399,
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2400,
                "end": 2402,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2413,
      "end": 2432,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2417,
          "end": 2431,
          "id": {
            "type": "Identifier",
            "start": 2417,
            "end": 2420,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2423,
            "end": 2431,
            "callee": {
              "type": "MemberExpression",
              "start": 2423,
              "end": 2429,
              "object": {
                "type": "Identifier",
                "start": 2423,
                "end": 2424,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2425,
                "end": 2429,
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
