__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 938,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 93,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 93,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 71,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 62,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 76,
            "end": 91,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 81,
              "decorators": [],
              "name": "valid",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 52,
          "end": 53,
          "expression": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 95,
      "end": 135,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 135,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 133,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 124,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 103,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 137,
      "end": 205,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 147,
        "end": 205,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 153,
            "end": 163,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "decorators": [],
              "name": "source",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 161,
                "end": 162,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 168,
            "end": 182,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 175,
              "decorators": [],
              "name": "recurse",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 181,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 178,
                  "end": 181,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 179,
                      "end": 180,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 180,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 203,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 194,
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 203,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 203,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 197,
                  "end": 203,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 198,
                      "end": 202,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 199,
                        "end": 202,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 200,
                            "end": 201,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 200,
                              "end": 201,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 199,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 144,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 144,
        "end": 147,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 145,
            "end": 146,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
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
      "type": "FunctionDeclaration",
      "start": 207,
      "end": 251,
      "async": false,
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
              "raw": "42",
              "value": 42
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 218,
          "end": 227,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 227,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 221,
              "end": 227
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 228,
        "end": 236,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 230,
          "end": 236
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 253,
      "end": 382,
      "body": {
        "type": "TSModuleBlock",
        "start": 262,
        "end": 382,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 268,
            "end": 312,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 275,
              "end": 312,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 283,
                "end": 312,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 293,
                    "end": 306,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 297,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 281,
                "end": 282,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 318,
            "end": 380,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 325,
              "end": 380,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 365,
                        "end": 375,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 366,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 375,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 334,
                "end": 336,
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 337,
                  "end": 346,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 338,
                    "end": 346,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 340,
                      "end": 346
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 347,
                "end": 355,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 349,
                  "end": 355
                }
              },
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ForStatement",
      "start": 411,
      "end": 431,
      "body": {
        "type": "BlockStatement",
        "start": 429,
        "end": 431,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 416,
        "end": 426,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 420,
            "end": 426,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 420,
              "end": 426,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 421,
                "end": 426,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 423,
                  "end": 426
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 432,
      "end": 451,
      "body": {
        "type": "BlockStatement",
        "start": 449,
        "end": 451,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 437,
        "end": 446,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 441,
            "end": 446,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 441,
              "end": 442,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 445,
              "end": 446,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 452,
      "end": 480,
      "body": {
        "type": "BlockStatement",
        "start": 478,
        "end": 480,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 457,
        "end": 475,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 461,
            "end": 475,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 465,
              "end": 475,
              "raw": "'a string'",
              "value": "a string"
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 481,
      "end": 506,
      "body": {
        "type": "BlockStatement",
        "start": 504,
        "end": 506,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 486,
        "end": 501,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 490,
            "end": 501,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 494,
              "end": 501,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 498,
                "end": 499,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 507,
      "end": 540,
      "body": {
        "type": "BlockStatement",
        "start": 538,
        "end": 540,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 512,
        "end": 535,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 516,
            "end": 535,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 516,
              "end": 517,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 520,
              "end": 535,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 524,
                "end": 525,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 525,
                "end": 533,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 526,
                    "end": 532
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 541,
      "end": 560,
      "body": {
        "type": "BlockStatement",
        "start": 558,
        "end": 560,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 546,
        "end": 555,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 550,
            "end": 555,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 550,
              "end": 551,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 554,
              "end": 555,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 562,
      "end": 580,
      "body": {
        "type": "BlockStatement",
        "start": 578,
        "end": 580,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 567,
        "end": 575,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 571,
            "end": 575,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 571,
              "end": 575,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 572,
                "end": 575,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 574,
                  "end": 575,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 575,
                    "decorators": [],
                    "name": "I",
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
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 581,
      "end": 606,
      "body": {
        "type": "BlockStatement",
        "start": 604,
        "end": 606,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 586,
        "end": 601,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 590,
            "end": 601,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 590,
              "end": 591,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 594,
              "end": 601,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 598,
                "end": 599,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 607,
      "end": 633,
      "body": {
        "type": "BlockStatement",
        "start": 631,
        "end": 633,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 612,
        "end": 628,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 616,
            "end": 628,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 620,
              "end": 628,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 624,
                "end": 626,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 635,
      "end": 653,
      "body": {
        "type": "BlockStatement",
        "start": 651,
        "end": 653,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 639,
        "end": 648,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 643,
            "end": 648,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 643,
              "end": 644,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 654,
      "end": 689,
      "body": {
        "type": "BlockStatement",
        "start": 687,
        "end": 689,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 659,
        "end": 684,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 663,
            "end": 684,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 663,
              "end": 664,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 667,
              "end": 684,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 682,
                "end": 684,
                "raw": "''",
                "value": ""
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 668,
                  "end": 677,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 669,
                    "end": 677,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 671,
                      "end": 677
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 691,
      "end": 717,
      "body": {
        "type": "BlockStatement",
        "start": 715,
        "end": 717,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 695,
        "end": 712,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 699,
            "end": 712,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 699,
              "end": 712,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 702,
                "end": 712,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 704,
                  "end": 712,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 704,
                    "end": 710
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
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 718,
      "end": 750,
      "body": {
        "type": "BlockStatement",
        "start": 748,
        "end": 750,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 723,
        "end": 745,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 727,
            "end": 745,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 727,
              "end": 730,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 733,
              "end": 745,
              "elements": [
                {
                  "type": "Literal",
                  "start": 734,
                  "end": 735,
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 737,
                  "end": 738,
                  "raw": "2",
                  "value": 2
                },
                {
                  "type": "Literal",
                  "start": 740,
                  "end": 741,
                  "raw": "3",
                  "value": 3
                },
                {
                  "type": "Literal",
                  "start": 743,
                  "end": 744,
                  "raw": "4",
                  "value": 4
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 751,
      "end": 807,
      "body": {
        "type": "BlockStatement",
        "start": 805,
        "end": 807,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 756,
        "end": 802,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 760,
            "end": 802,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 760,
              "end": 763,
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 766,
              "end": 802,
              "elements": [
                {
                  "type": "NewExpression",
                  "start": 767,
                  "end": 774,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 771,
                    "end": 772,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "NewExpression",
                  "start": 776,
                  "end": 784,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 780,
                    "end": 782,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "NewExpression",
                  "start": 786,
                  "end": 801,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 790,
                    "end": 791,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 791,
                    "end": 799,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 792,
                        "end": 798
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 809,
      "end": 846,
      "body": {
        "type": "BlockStatement",
        "start": 844,
        "end": 846,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 813,
        "end": 841,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 817,
            "end": 841,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 817,
              "end": 821,
              "decorators": [],
              "name": "arr2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrayExpression",
              "start": 824,
              "end": 841,
              "elements": [
                {
                  "type": "NewExpression",
                  "start": 825,
                  "end": 840,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 829,
                    "end": 830,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 830,
                    "end": 838,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 831,
                        "end": 837
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 847,
      "end": 890,
      "body": {
        "type": "BlockStatement",
        "start": 888,
        "end": 890,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 852,
        "end": 885,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 856,
            "end": 885,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 856,
              "end": 860,
              "decorators": [],
              "name": "arr2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 863,
              "end": 885,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 867,
                "end": 872,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 872,
                "end": 883,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 873,
                    "end": 882,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 874,
                      "end": 882,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 875,
                          "end": 881
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 874,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 892,
      "end": 916,
      "body": {
        "type": "BlockStatement",
        "start": 914,
        "end": 916,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 896,
        "end": 911,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 900,
            "end": 911,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 900,
              "end": 911,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 901,
                "end": 911,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 903,
                  "end": 911,
                  "exprName": {
                    "type": "Identifier",
                    "start": 910,
                    "end": 911,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 917,
      "end": 938,
      "body": {
        "type": "BlockStatement",
        "start": 936,
        "end": 938,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 922,
        "end": 933,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 926,
            "end": 933,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 926,
              "end": 927,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 930,
              "end": 933,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 930,
                "end": 931,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 932,
                "end": 933,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": null,
      "update": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
