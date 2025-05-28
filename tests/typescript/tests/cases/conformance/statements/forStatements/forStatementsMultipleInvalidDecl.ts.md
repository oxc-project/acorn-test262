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
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
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
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 93,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 71,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 62,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
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
            "start": 76,
            "end": 91,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 81,
              "decorators": [],
              "name": "valid",
              "optional": false,
              "typeAnnotation": null
            },
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
      "start": 95,
      "end": 135,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 135,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 133,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 124,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
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
      "start": 137,
      "end": 205,
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
        "start": 147,
        "end": 205,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 153,
            "end": 163,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "decorators": [],
              "name": "source",
              "optional": false,
              "typeAnnotation": null
            },
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
          },
          {
            "type": "PropertyDefinition",
            "start": 168,
            "end": 182,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 175,
              "decorators": [],
              "name": "recurse",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
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
          },
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 203,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 187,
              "end": 194,
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
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
      "type": "FunctionDeclaration",
      "start": 207,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 253,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 283,
                "end": 312,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 293,
                    "end": 306,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 297,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 375,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
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
      "type": "ForStatement",
      "start": 411,
      "end": 431,
      "init": {
        "type": "VariableDeclaration",
        "start": 416,
        "end": 426,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 420,
            "end": 426,
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
            "init": null,
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 441,
            "end": 446,
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
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 461,
            "end": 475,
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
              "value": "a string",
              "raw": "'a string'"
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 490,
            "end": 501,
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
              "callee": {
                "type": "Identifier",
                "start": 498,
                "end": 499,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 516,
            "end": 535,
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
              },
              "arguments": []
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 550,
            "end": 555,
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
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 571,
            "end": 575,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 575,
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 590,
            "end": 601,
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
              "callee": {
                "type": "Identifier",
                "start": 598,
                "end": 599,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 616,
            "end": 628,
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
              "callee": {
                "type": "Identifier",
                "start": 624,
                "end": 626,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 643,
            "end": 648,
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
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 663,
            "end": 684,
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
              "expression": true,
              "async": false,
              "typeParameters": null,
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
              "body": {
                "type": "Literal",
                "start": 682,
                "end": 684,
                "value": "",
                "raw": "''"
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 699,
            "end": 712,
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
            "init": null,
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 727,
            "end": 745,
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 760,
            "end": 802,
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
                  "callee": {
                    "type": "Identifier",
                    "start": 771,
                    "end": 772,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                {
                  "type": "NewExpression",
                  "start": 776,
                  "end": 784,
                  "callee": {
                    "type": "Identifier",
                    "start": 780,
                    "end": 782,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                {
                  "type": "NewExpression",
                  "start": 786,
                  "end": 801,
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
                  },
                  "arguments": []
                }
              ]
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 817,
            "end": 841,
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
                  },
                  "arguments": []
                }
              ]
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 856,
            "end": 885,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 874,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
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
              },
              "arguments": []
            },
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 900,
            "end": 911,
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
            "init": null,
            "definite": false
          }
        ],
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 926,
            "end": 933,
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
              "object": {
                "type": "Identifier",
                "start": 930,
                "end": 931,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 932,
                "end": 933,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
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
