__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 780,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
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
      "start": 33,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 93,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 71,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 62,
              "name": "id",
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
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 76,
            "end": 91,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 81,
              "name": "valid",
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
              "start": 81,
              "end": 90,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 83,
                "end": 90
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 52,
          "end": 53,
          "expression": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 103,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 135,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 133,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 124,
              "name": "name",
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
              "start": 124,
              "end": 132,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 126,
                "end": 132
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
      "start": 137,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 144,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 147,
        "end": 205,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 153,
            "end": 163,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "name": "source",
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
              "start": 159,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 162,
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 168,
            "end": 182,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 175,
              "name": "recurse",
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
              "start": 175,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 181,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 178,
                  "end": 181,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 179,
                      "end": 180,
                      "typeName": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 180,
                        "name": "T",
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 203,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 194,
              "name": "wrapped",
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
              "start": 194,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 203,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 197,
                  "end": 203,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 198,
                      "end": 202,
                      "typeName": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 199,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 199,
                        "end": 202,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 200,
                            "end": 201,
                            "typeName": {
                              "type": "Identifier",
                              "start": 200,
                              "end": 201,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 144,
        "end": 147,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 145,
            "end": 146,
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
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
      "type": "FunctionDeclaration",
      "start": 207,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "name": "F",
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
          "start": 218,
          "end": 227,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 227,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 221,
              "end": 227
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 251,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 239,
            "end": 249,
            "argument": {
              "type": "Literal",
              "start": 246,
              "end": 248,
              "value": 42,
              "raw": "42"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 228,
        "end": 236,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 230,
          "end": 236
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 253,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 262,
        "end": 382,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 268,
            "end": 312,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 275,
              "end": 312,
              "id": {
                "type": "Identifier",
                "start": 281,
                "end": 282,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 283,
                "end": 312,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 293,
                    "end": 306,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 297,
                      "name": "name",
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
                      "start": 297,
                      "end": 305,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 299,
                        "end": 305
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 318,
            "end": 380,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 325,
              "end": 380,
              "id": {
                "type": "Identifier",
                "start": 334,
                "end": 336,
                "name": "F2",
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
                  "start": 337,
                  "end": 346,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 338,
                    "end": 346,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 340,
                      "end": 346
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 356,
                "end": 380,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 358,
                    "end": 378,
                    "argument": {
                      "type": "CallExpression",
                      "start": 365,
                      "end": 377,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 365,
                        "end": 375,
                        "object": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 366,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 375,
                          "name": "toString",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 347,
                "end": 355,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 349,
                  "end": 355
                }
              }
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
      "type": "VariableDeclaration",
      "start": 411,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 421,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 421,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 421,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 418,
                "end": 421
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
      "start": 423,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 432,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 428,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 431,
            "end": 432,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 434,
      "end": 453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 452,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 439,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 442,
            "end": 452,
            "value": "a string",
            "raw": "'a string'"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 454,
      "end": 470,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 458,
          "end": 469,
          "id": {
            "type": "Identifier",
            "start": 458,
            "end": 459,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 462,
            "end": 469,
            "callee": {
              "type": "Identifier",
              "start": 466,
              "end": 467,
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
      "start": 471,
      "end": 495,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 475,
          "end": 494,
          "id": {
            "type": "Identifier",
            "start": 475,
            "end": 476,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 479,
            "end": 494,
            "callee": {
              "type": "Identifier",
              "start": 483,
              "end": 484,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 484,
              "end": 492,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 485,
                  "end": 491
                }
              ]
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
      "start": 496,
      "end": 506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 501,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 504,
            "end": 505,
            "name": "M",
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
      "start": 508,
      "end": 517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 516,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 513,
              "end": 516,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 515,
                "end": 516,
                "typeName": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 516,
                  "name": "I",
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
      "start": 518,
      "end": 534,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 533,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 523,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 526,
            "end": 533,
            "callee": {
              "type": "Identifier",
              "start": 530,
              "end": 531,
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
      "start": 535,
      "end": 552,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 539,
          "end": 551,
          "id": {
            "type": "Identifier",
            "start": 539,
            "end": 540,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 543,
            "end": 551,
            "callee": {
              "type": "Identifier",
              "start": 547,
              "end": 549,
              "name": "C2",
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
      "start": 554,
      "end": 564,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 563,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 559,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 562,
            "end": 563,
            "name": "F",
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
      "start": 565,
      "end": 591,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 570,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 573,
            "end": 590,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 574,
                "end": 583,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 575,
                  "end": 583,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 577,
                    "end": 583
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 588,
              "end": 590,
              "value": "",
              "raw": "''"
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 593,
      "end": 611,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 597,
          "end": 610,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 610,
            "name": "arr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 600,
              "end": 610,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 602,
                "end": 610,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 602,
                  "end": 608
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
      "start": 612,
      "end": 635,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 634,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 619,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 622,
            "end": 634,
            "elements": [
              {
                "type": "Literal",
                "start": 623,
                "end": 624,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 626,
                "end": 627,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 629,
                "end": 630,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 632,
                "end": 633,
                "value": 4,
                "raw": "4"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 636,
      "end": 683,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 640,
          "end": 682,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 643,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 646,
            "end": 682,
            "elements": [
              {
                "type": "NewExpression",
                "start": 647,
                "end": 654,
                "callee": {
                  "type": "Identifier",
                  "start": 651,
                  "end": 652,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 656,
                "end": 664,
                "callee": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 662,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 666,
                "end": 681,
                "callee": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 671,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 671,
                  "end": 679,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 672,
                      "end": 678
                    }
                  ]
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 685,
      "end": 714,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 689,
          "end": 713,
          "id": {
            "type": "Identifier",
            "start": 689,
            "end": 693,
            "name": "arr2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 696,
            "end": 713,
            "elements": [
              {
                "type": "NewExpression",
                "start": 697,
                "end": 712,
                "callee": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 702,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
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
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 715,
      "end": 749,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 719,
          "end": 748,
          "id": {
            "type": "Identifier",
            "start": 719,
            "end": 723,
            "name": "arr2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 726,
            "end": 748,
            "callee": {
              "type": "Identifier",
              "start": 730,
              "end": 735,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 735,
              "end": 746,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 736,
                  "end": 745,
                  "typeName": {
                    "type": "Identifier",
                    "start": 736,
                    "end": 737,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 737,
                    "end": 745,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 738,
                        "end": 744
                      }
                    ]
                  }
                }
              ]
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
      "start": 751,
      "end": 767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 755,
          "end": 766,
          "id": {
            "type": "Identifier",
            "start": 755,
            "end": 766,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 756,
              "end": 766,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 758,
                "end": 766,
                "exprName": {
                  "type": "Identifier",
                  "start": 765,
                  "end": 766,
                  "name": "M",
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
      "start": 768,
      "end": 780,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 772,
          "end": 779,
          "id": {
            "type": "Identifier",
            "start": 772,
            "end": 773,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 776,
            "end": 779,
            "object": {
              "type": "Identifier",
              "start": 776,
              "end": 777,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 778,
              "end": 779,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
