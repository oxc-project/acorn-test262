__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 724,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 82,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 58,
            "end": 81,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 70,
              "end": 81,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 72,
                  "end": 79,
                  "argument": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 104,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 89,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 92,
            "end": 103,
            "callee": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 93,
              "end": 101,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 94,
                  "end": 100
                }
              ]
            },
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
      "start": 105,
      "end": 120,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 115,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 115,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 112,
                "end": 115
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 142,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 127,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 130,
            "end": 141,
            "callee": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 131,
              "end": 139,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 132,
                  "end": 138
                }
              ]
            },
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
      "start": 144,
      "end": 160,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 159,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 159,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 151,
                "end": 159,
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 159,
                  "decorators": [],
                  "name": "Function",
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
      "start": 161,
      "end": 182,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 170,
            "end": 181,
            "callee": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 171,
              "end": 179,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 172,
                  "end": 178
                }
              ]
            },
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
      "start": 206,
      "end": 321,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 213,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 225,
          "end": 233,
          "expression": {
            "type": "Identifier",
            "start": 225,
            "end": 233,
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 234,
        "end": 321,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 240,
            "end": 257,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 249,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 252,
              "end": 256,
              "value": null,
              "raw": "null"
            },
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
            "type": "PropertyDefinition",
            "start": 262,
            "end": 273,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 268,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 271,
              "end": 272,
              "value": 1,
              "raw": "1"
            },
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
            "type": "PropertyDefinition",
            "start": 278,
            "end": 295,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 278,
              "end": 287,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 290,
              "end": 294,
              "value": null,
              "raw": "null"
            },
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
            "type": "PropertyDefinition",
            "start": 300,
            "end": 319,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 300,
              "end": 306,
              "decorators": [],
              "name": "caller",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 309,
              "end": 318,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 315,
                "end": 318,
                "body": []
              },
              "id": null,
              "generator": false
            },
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
      "start": 323,
      "end": 333,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 332,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 331,
                "end": 332,
                "typeName": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 332,
                  "decorators": [],
                  "name": "C",
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
      "start": 334,
      "end": 356,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 343,
            "end": 355,
            "callee": {
              "type": "Identifier",
              "start": 343,
              "end": 345,
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 345,
              "end": 353,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 346,
                  "end": 352
                }
              ]
            },
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
      "start": 380,
      "end": 409,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 388,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 397,
        "end": 405,
        "decorators": [],
        "name": "Function",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 406,
        "end": 409,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 419,
      "end": 430,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 429,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 429,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 425,
              "end": 429,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 427,
                "end": 429,
                "typeName": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 429,
                  "decorators": [],
                  "name": "C2",
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
      "start": 431,
      "end": 453,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 452,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 437,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 440,
            "end": 452,
            "callee": {
              "type": "Identifier",
              "start": 440,
              "end": 442,
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 442,
              "end": 450,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 443,
                  "end": 449
                }
              ]
            },
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
      "start": 464,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 475,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 476,
        "end": 501,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 482,
            "end": 499,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 483,
                "end": 489,
                "decorators": [],
                "name": "number",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 490,
              "end": 498,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 492,
                "end": 498
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 502,
      "end": 511,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 506,
          "end": 510,
          "id": {
            "type": "Identifier",
            "start": 506,
            "end": 510,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 507,
              "end": 510,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 509,
                "end": 510,
                "typeName": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 510,
                  "decorators": [],
                  "name": "I",
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
      "start": 512,
      "end": 534,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 533,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 518,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 521,
            "end": 533,
            "callee": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 522,
              "end": 530,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 523,
                  "end": 529
                }
              ]
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 531,
                "end": 532,
                "value": 1,
                "raw": "1"
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
      "type": "TSInterfaceDeclaration",
      "start": 545,
      "end": 586,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 564,
        "decorators": [],
        "name": "callable2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 564,
        "end": 567,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 565,
            "end": 566,
            "name": {
              "type": "Identifier",
              "start": 565,
              "end": 566,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 568,
        "end": 586,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 574,
            "end": 584,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 575,
                "end": 579,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 576,
                  "end": 579,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 578,
                    "end": 579,
                    "typeName": {
                      "type": "Identifier",
                      "start": 578,
                      "end": 579,
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 580,
              "end": 583,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 582,
                "end": 583,
                "typeName": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 583,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 588,
      "end": 614,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 613,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 613,
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 594,
              "end": 613,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 596,
                "end": 613,
                "typeName": {
                  "type": "Identifier",
                  "start": 596,
                  "end": 605,
                  "decorators": [],
                  "name": "callable2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 605,
                  "end": 613,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 606,
                      "end": 612
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
      "type": "ExpressionStatement",
      "start": 615,
      "end": 629,
      "expression": {
        "type": "CallExpression",
        "start": 615,
        "end": 628,
        "callee": {
          "type": "Identifier",
          "start": 615,
          "end": 617,
          "decorators": [],
          "name": "c4",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 617,
          "end": 625,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 618,
              "end": 624
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 626,
            "end": 627,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 630,
      "end": 671,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 649,
        "decorators": [],
        "name": "callable3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 649,
        "end": 652,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 650,
            "end": 651,
            "name": {
              "type": "Identifier",
              "start": 650,
              "end": 651,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 653,
        "end": 671,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 659,
            "end": 669,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 660,
                "end": 664,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 661,
                  "end": 664,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 663,
                    "end": 664,
                    "typeName": {
                      "type": "Identifier",
                      "start": 663,
                      "end": 664,
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 665,
              "end": 668,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 667,
                "end": 668,
                "typeName": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 668,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 673,
      "end": 699,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 677,
          "end": 698,
          "id": {
            "type": "Identifier",
            "start": 677,
            "end": 698,
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 679,
              "end": 698,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 681,
                "end": 698,
                "typeName": {
                  "type": "Identifier",
                  "start": 681,
                  "end": 690,
                  "decorators": [],
                  "name": "callable3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 690,
                  "end": 698,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 691,
                      "end": 697
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
      "type": "ExpressionStatement",
      "start": 700,
      "end": 714,
      "expression": {
        "type": "CallExpression",
        "start": 700,
        "end": 713,
        "callee": {
          "type": "Identifier",
          "start": 700,
          "end": 702,
          "decorators": [],
          "name": "c5",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 702,
          "end": 710,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 703,
              "end": 709
            }
          ]
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 711,
            "end": 712,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
