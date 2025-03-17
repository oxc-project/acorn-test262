__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 593,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 45,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 43,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 43,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 29,
                  "end": 38,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 32,
                      "end": 38
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 43,
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
      "start": 47,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 63,
        "end": 67,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 88,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 86,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 77,
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
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
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
      "type": "VariableDeclaration",
      "start": 90,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 109,
            "end": 116,
            "callee": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 133,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 136,
            "end": 144,
            "callee": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 142,
                "end": 143,
                "value": 1,
                "raw": "1"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 153,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 164,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 199,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 176,
            "end": 197,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 187,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 187,
              "end": 197,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 188,
                  "end": 192,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 189,
                    "end": 192,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 191,
                      "end": 192,
                      "typeName": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 192,
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
                "start": 194,
                "end": 197,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 166,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 167,
            "end": 168,
            "name": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 201,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 208,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 222,
        "end": 227,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 233,
        "end": 248,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 239,
            "end": 246,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 242,
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
              "start": 242,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
                  "name": "U",
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
        "start": 208,
        "end": 213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 209,
            "end": 210,
            "name": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 211,
            "end": 212,
            "name": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 227,
        "end": 232,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 228,
            "end": 229,
            "typeName": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 230,
            "end": 231,
            "typeName": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 256,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 259,
            "end": 260,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 270,
            "end": 277,
            "callee": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 288,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 294,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 297,
            "end": 305,
            "callee": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 303,
                "end": 304,
                "value": 1,
                "raw": "1"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 340,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 346,
        "end": 348,
        "name": "D2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 363,
        "end": 368,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 385,
        "end": 400,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 391,
            "end": 398,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 391,
              "end": 394,
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
              "start": 394,
              "end": 397,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 396,
                "end": 397,
                "typeName": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 397,
                  "name": "U",
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
        "start": 348,
        "end": 354,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 349,
            "end": 350,
            "name": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 352,
            "end": 353,
            "name": {
              "type": "Identifier",
              "start": 352,
              "end": 353,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 368,
        "end": 384,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 369,
            "end": 375
          },
          {
            "type": "TSNumberKeyword",
            "start": 377,
            "end": 383
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 408,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 411,
            "end": 413,
            "name": "D2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 431,
          "id": {
            "type": "Identifier",
            "start": 419,
            "end": 421,
            "name": "d3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 424,
            "end": 431,
            "callee": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 459,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 448,
            "name": "d4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 451,
            "end": 459,
            "callee": {
              "type": "Identifier",
              "start": 455,
              "end": 456,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 457,
                "end": 458,
                "value": 1,
                "raw": "1"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 468,
      "end": 527,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 476,
        "name": "D3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 485,
        "end": 490,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 507,
        "end": 527,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 513,
            "end": 525,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 513,
              "end": 516,
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
              "start": 516,
              "end": 524,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 518,
                "end": 524
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
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 490,
        "end": 506,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 491,
            "end": 497
          },
          {
            "type": "TSNumberKeyword",
            "start": 499,
            "end": 505
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 541,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 540,
          "id": {
            "type": "Identifier",
            "start": 533,
            "end": 535,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 538,
            "end": 540,
            "name": "D3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 542,
      "end": 559,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 546,
          "end": 558,
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 548,
            "name": "d5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 551,
            "end": 558,
            "callee": {
              "type": "Identifier",
              "start": 555,
              "end": 556,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 569,
      "end": 587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 586,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 575,
            "name": "d6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 578,
            "end": 586,
            "callee": {
              "type": "Identifier",
              "start": 582,
              "end": 583,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 584,
                "end": 585,
                "value": 1,
                "raw": "1"
              }
            ],
            "typeArguments": null
          },
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
