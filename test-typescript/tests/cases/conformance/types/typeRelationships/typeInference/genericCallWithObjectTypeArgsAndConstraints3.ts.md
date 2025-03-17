__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 88,
  "end": 841,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 98,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 117,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 115,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "x",
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
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
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
      "start": 118,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 131,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 140,
        "end": 144,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 145,
        "end": 163,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 151,
            "end": 161,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "name": "y",
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
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 154,
                "end": 160
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
      "start": 164,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 178,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 187,
        "end": 191,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 192,
        "end": 210,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 198,
            "end": 208,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "name": "z",
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
              "start": 199,
              "end": 207,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 201,
                "end": 207
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
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 222,
        "name": "f",
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
          "start": 239,
          "end": 256,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 256,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 242,
              "end": 256,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 244,
                  "end": 249,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 245,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 245,
                    "end": 248,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 247,
                      "end": 248,
                      "typeName": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 248,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 250,
                  "end": 254,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 251,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 251,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 253,
                      "end": 254,
                      "typeName": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 289,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 264,
            "end": 273,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 268,
                "end": 272,
                "id": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 272,
                  "name": "r",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 269,
                    "end": 272,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 271,
                      "end": 272,
                      "typeName": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 278,
            "end": 287,
            "argument": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 222,
        "end": 238,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 237,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 237,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 237,
                "name": "Base",
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
      "type": "VariableDeclaration",
      "start": 291,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 297,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 300,
            "end": 342,
            "callee": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 302,
                "end": 341,
                "properties": [
                  {
                    "type": "Property",
                    "start": 304,
                    "end": 320,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 305,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 307,
                      "end": 320,
                      "callee": {
                        "type": "Identifier",
                        "start": 311,
                        "end": 318,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 322,
                    "end": 339,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 322,
                      "end": 323,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 325,
                      "end": 339,
                      "callee": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 337,
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 396,
      "end": 487,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 407,
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
          "start": 450,
          "end": 454,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 451,
            "end": 454,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 453,
              "end": 454,
              "typeName": {
                "type": "Identifier",
                "start": 453,
                "end": 454,
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
        "start": 456,
        "end": 487,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 462,
            "end": 471,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 466,
                "end": 470,
                "id": {
                  "type": "Identifier",
                  "start": 466,
                  "end": 470,
                  "name": "r",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 467,
                    "end": 470,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 469,
                      "end": 470,
                      "typeName": {
                        "type": "Identifier",
                        "start": 469,
                        "end": 470,
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 476,
            "end": 485,
            "argument": {
              "type": "Identifier",
              "start": 483,
              "end": 484,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 407,
        "end": 449,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 408,
            "end": 422,
            "name": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 418,
              "end": 422,
              "typeName": {
                "type": "Identifier",
                "start": 418,
                "end": 422,
                "name": "Base",
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
            "start": 424,
            "end": 448,
            "name": {
              "type": "Identifier",
              "start": 424,
              "end": 425,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 434,
              "end": 448,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 436,
                  "end": 441,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 440,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 439,
                      "end": 440,
                      "typeName": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 440,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 442,
                  "end": 446,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 443,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 443,
                    "end": 446,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 445,
                      "end": 446,
                      "typeName": {
                        "type": "Identifier",
                        "start": 445,
                        "end": 446,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 489,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 493,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 495,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 498,
            "end": 541,
            "callee": {
              "type": "Identifier",
              "start": 498,
              "end": 500,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 501,
                "end": 540,
                "properties": [
                  {
                    "type": "Property",
                    "start": 503,
                    "end": 519,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 503,
                      "end": 504,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 506,
                      "end": 519,
                      "callee": {
                        "type": "Identifier",
                        "start": 510,
                        "end": 517,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 521,
                    "end": 538,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 521,
                      "end": 522,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 524,
                      "end": 538,
                      "callee": {
                        "type": "Identifier",
                        "start": 528,
                        "end": 536,
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
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
      "start": 549,
      "end": 602,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 601,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 558,
            "end": 601,
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 560,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 561,
                "end": 600,
                "properties": [
                  {
                    "type": "Property",
                    "start": 563,
                    "end": 579,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 563,
                      "end": 564,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 566,
                      "end": 579,
                      "callee": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 577,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 581,
                    "end": 598,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 581,
                      "end": 582,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 584,
                      "end": 598,
                      "callee": {
                        "type": "Identifier",
                        "start": 588,
                        "end": 596,
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 611,
      "end": 684,
      "id": {
        "type": "Identifier",
        "start": 620,
        "end": 622,
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
          "start": 639,
          "end": 653,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 640,
            "end": 653,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 642,
              "end": 653,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 643,
                  "end": 647,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 644,
                    "end": 647,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 646,
                      "end": 647,
                      "typeName": {
                        "type": "Identifier",
                        "start": 646,
                        "end": 647,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 649,
                "end": 653,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 652,
                  "end": 653,
                  "typeName": {
                    "type": "Identifier",
                    "start": 652,
                    "end": 653,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 655,
          "end": 659,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 656,
            "end": 659,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 658,
              "end": 659,
              "typeName": {
                "type": "Identifier",
                "start": 658,
                "end": 659,
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
        "start": 661,
        "end": 684,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 667,
            "end": 682,
            "argument": {
              "type": "CallExpression",
              "start": 674,
              "end": 681,
              "callee": {
                "type": "Identifier",
                "start": 674,
                "end": 675,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 676,
                  "end": 680,
                  "value": null,
                  "raw": "null"
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 622,
        "end": 638,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 623,
            "end": 637,
            "name": {
              "type": "Identifier",
              "start": 623,
              "end": 624,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 633,
              "end": 637,
              "typeName": {
                "type": "Identifier",
                "start": 633,
                "end": 637,
                "name": "Base",
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
      "type": "VariableDeclaration",
      "start": 745,
      "end": 777,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 776,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 751,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 754,
            "end": 776,
            "callee": {
              "type": "Identifier",
              "start": 754,
              "end": 756,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 757,
                "end": 763,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 757,
                    "end": 758,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 763,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "NewExpression",
                "start": 765,
                "end": 775,
                "callee": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 773,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
            "optional": false,
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
      "start": 778,
      "end": 813,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 782,
          "end": 812,
          "id": {
            "type": "Identifier",
            "start": 782,
            "end": 784,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 787,
            "end": 812,
            "callee": {
              "type": "Identifier",
              "start": 787,
              "end": 789,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 790,
                "end": 796,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 790,
                    "end": 791,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 795,
                  "end": 796,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "NewExpression",
                "start": 798,
                "end": 811,
                "callee": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 809,
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
            "optional": false,
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
      "start": 814,
      "end": 840,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 818,
          "end": 839,
          "id": {
            "type": "Identifier",
            "start": 818,
            "end": 820,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 823,
            "end": 839,
            "callee": {
              "type": "Identifier",
              "start": 823,
              "end": 825,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 826,
                "end": 832,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 826,
                    "end": 827,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 832,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 834,
                "end": 838,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
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
