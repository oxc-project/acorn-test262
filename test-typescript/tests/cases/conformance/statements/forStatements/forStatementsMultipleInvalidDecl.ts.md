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
      "type": "ForStatement",
      "start": 411,
      "end": 431,
      "init": {
        "type": "VariableDeclaration",
        "start": 416,
        "end": 426,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 420,
            "end": 426,
            "id": {
              "type": "Identifier",
              "start": 420,
              "end": 426,
              "name": "a",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 421,
                "end": 426,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 423,
                  "end": 426
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 429,
        "end": 431,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 432,
      "end": 451,
      "init": {
        "type": "VariableDeclaration",
        "start": 437,
        "end": 446,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 441,
            "end": 446,
            "id": {
              "type": "Identifier",
              "start": 441,
              "end": 442,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 445,
              "end": 446,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 449,
        "end": 451,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 452,
      "end": 480,
      "init": {
        "type": "VariableDeclaration",
        "start": 457,
        "end": 475,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 461,
            "end": 475,
            "id": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 465,
              "end": 475,
              "value": "a string",
              "raw": "'a string'"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 478,
        "end": 480,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 481,
      "end": 506,
      "init": {
        "type": "VariableDeclaration",
        "start": 486,
        "end": 501,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 490,
            "end": 501,
            "id": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 494,
              "end": 501,
              "callee": {
                "type": "Identifier",
                "start": 498,
                "end": 499,
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 504,
        "end": 506,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 507,
      "end": 540,
      "init": {
        "type": "VariableDeclaration",
        "start": 512,
        "end": 535,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 516,
            "end": 535,
            "id": {
              "type": "Identifier",
              "start": 516,
              "end": 517,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 520,
              "end": 535,
              "callee": {
                "type": "Identifier",
                "start": 524,
                "end": 525,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 538,
        "end": 540,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 541,
      "end": 560,
      "init": {
        "type": "VariableDeclaration",
        "start": 546,
        "end": 555,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 550,
            "end": 555,
            "id": {
              "type": "Identifier",
              "start": 550,
              "end": 551,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 554,
              "end": 555,
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 558,
        "end": 560,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 562,
      "end": 580,
      "init": {
        "type": "VariableDeclaration",
        "start": 567,
        "end": 575,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 571,
            "end": 575,
            "id": {
              "type": "Identifier",
              "start": 571,
              "end": 575,
              "name": "b",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 572,
                "end": 575,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 574,
                  "end": 575,
                  "typeName": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 575,
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 578,
        "end": 580,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 581,
      "end": 606,
      "init": {
        "type": "VariableDeclaration",
        "start": 586,
        "end": 601,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 590,
            "end": 601,
            "id": {
              "type": "Identifier",
              "start": 590,
              "end": 591,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 594,
              "end": 601,
              "callee": {
                "type": "Identifier",
                "start": 598,
                "end": 599,
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 604,
        "end": 606,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 607,
      "end": 633,
      "init": {
        "type": "VariableDeclaration",
        "start": 612,
        "end": 628,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 616,
            "end": 628,
            "id": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 620,
              "end": 628,
              "callee": {
                "type": "Identifier",
                "start": 624,
                "end": 626,
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 631,
        "end": 633,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 635,
      "end": 653,
      "init": {
        "type": "VariableDeclaration",
        "start": 639,
        "end": 648,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 643,
            "end": 648,
            "id": {
              "type": "Identifier",
              "start": 643,
              "end": 644,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 651,
        "end": 653,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 654,
      "end": 689,
      "init": {
        "type": "VariableDeclaration",
        "start": 659,
        "end": 684,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 663,
            "end": 684,
            "id": {
              "type": "Identifier",
              "start": 663,
              "end": 664,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 667,
              "end": 684,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 668,
                  "end": 677,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 669,
                    "end": 677,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 671,
                      "end": 677
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "Literal",
                "start": 682,
                "end": 684,
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 687,
        "end": 689,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 691,
      "end": 717,
      "init": {
        "type": "VariableDeclaration",
        "start": 695,
        "end": 712,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 699,
            "end": 712,
            "id": {
              "type": "Identifier",
              "start": 699,
              "end": 712,
              "name": "arr",
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 715,
        "end": 717,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 718,
      "end": 750,
      "init": {
        "type": "VariableDeclaration",
        "start": 723,
        "end": 745,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 727,
            "end": 745,
            "id": {
              "type": "Identifier",
              "start": 727,
              "end": 730,
              "name": "arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 737,
                  "end": 738,
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "Literal",
                  "start": 740,
                  "end": 741,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 743,
                  "end": 744,
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 748,
        "end": 750,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 751,
      "end": 807,
      "init": {
        "type": "VariableDeclaration",
        "start": 756,
        "end": 802,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 760,
            "end": 802,
            "id": {
              "type": "Identifier",
              "start": 760,
              "end": 763,
              "name": "arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "callee": {
                    "type": "Identifier",
                    "start": 771,
                    "end": 772,
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
                  "start": 776,
                  "end": 784,
                  "callee": {
                    "type": "Identifier",
                    "start": 780,
                    "end": 782,
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
                  "start": 786,
                  "end": 801,
                  "callee": {
                    "type": "Identifier",
                    "start": 790,
                    "end": 791,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
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
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 805,
        "end": 807,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 809,
      "end": 846,
      "init": {
        "type": "VariableDeclaration",
        "start": 813,
        "end": 841,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 817,
            "end": 841,
            "id": {
              "type": "Identifier",
              "start": 817,
              "end": 821,
              "name": "arr2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "callee": {
                    "type": "Identifier",
                    "start": 829,
                    "end": 830,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
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
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 844,
        "end": 846,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 847,
      "end": 890,
      "init": {
        "type": "VariableDeclaration",
        "start": 852,
        "end": 885,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 856,
            "end": 885,
            "id": {
              "type": "Identifier",
              "start": 856,
              "end": 860,
              "name": "arr2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 863,
              "end": 885,
              "callee": {
                "type": "Identifier",
                "start": 867,
                "end": 872,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 872,
                "end": 883,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 873,
                    "end": 882,
                    "typeName": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 874,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 888,
        "end": 890,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 892,
      "end": 916,
      "init": {
        "type": "VariableDeclaration",
        "start": 896,
        "end": 911,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 900,
            "end": 911,
            "id": {
              "type": "Identifier",
              "start": 900,
              "end": 911,
              "name": "m",
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
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 914,
        "end": 916,
        "body": []
      }
    },
    {
      "type": "ForStatement",
      "start": 917,
      "end": 938,
      "init": {
        "type": "VariableDeclaration",
        "start": 922,
        "end": 933,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 926,
            "end": 933,
            "id": {
              "type": "Identifier",
              "start": 926,
              "end": 927,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 930,
              "end": 933,
              "object": {
                "type": "Identifier",
                "start": 930,
                "end": 931,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 932,
                "end": 933,
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
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 936,
        "end": 938,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
