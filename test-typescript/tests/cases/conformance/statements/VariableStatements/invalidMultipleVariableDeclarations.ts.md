invalidMultipleVariableDeclarations.ts
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
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "id",
              "optional": false
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
        "optional": false
      }
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
              "optional": false
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
              "optional": false
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
        "optional": false
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
            "optional": false
          }
        }
      ],
      "superClass": null
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
              "optional": false
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
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "C",
        "optional": false
      }
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
              "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 168,
            "end": 182,
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
              "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 180,
                        "decorators": [],
                        "name": "T",
                        "optional": false
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
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 187,
            "end": 203,
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
              "optional": false
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 200,
                              "end": 201,
                              "decorators": [],
                              "name": "T",
                              "optional": false
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
                        "optional": false
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
                  "optional": false
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
        "optional": false
      },
      "implements": [],
      "superClass": null,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "T",
              "optional": false
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
        "optional": false
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
      }
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
                      "optional": false
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
                "optional": false
              },
              "implements": [],
              "superClass": null
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
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 375,
                          "decorators": [],
                          "name": "toString",
                          "optional": false
                        }
                      },
                      "optional": false
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
                "optional": false
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
              }
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
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 421,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 421,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 418,
                "end": 421
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 428,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 431,
            "end": 432,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 439,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 442,
            "end": 452,
            "raw": "'a string'",
            "value": "a string"
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 458,
            "end": 459,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 462,
            "end": 469,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 466,
              "end": 467,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 475,
            "end": 476,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 479,
            "end": 494,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 483,
              "end": 484,
              "decorators": [],
              "name": "D",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 501,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 504,
            "end": 505,
            "decorators": [],
            "name": "M",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 516,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "I",
                  "optional": false
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
    {
      "type": "VariableDeclaration",
      "start": 518,
      "end": 534,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 533,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 523,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 526,
            "end": 533,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 530,
              "end": 531,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 539,
            "end": 540,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 543,
            "end": 551,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 547,
              "end": 549,
              "decorators": [],
              "name": "C2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 559,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 562,
            "end": 563,
            "decorators": [],
            "name": "F",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 570,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 573,
            "end": 590,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 588,
              "end": 590,
              "raw": "''",
              "value": ""
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 574,
                "end": 583,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 575,
                  "end": 583,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 577,
                    "end": 583
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 610,
            "decorators": [],
            "name": "arr",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 619,
            "decorators": [],
            "name": "arr",
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 626,
                "end": 627,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 629,
                "end": 630,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 632,
                "end": 633,
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
    {
      "type": "VariableDeclaration",
      "start": 636,
      "end": 683,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 640,
          "end": 682,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 643,
            "decorators": [],
            "name": "arr",
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
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 651,
                  "end": 652,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              },
              {
                "type": "NewExpression",
                "start": 656,
                "end": 664,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 662,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                }
              },
              {
                "type": "NewExpression",
                "start": 666,
                "end": 681,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 671,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 689,
            "end": 693,
            "decorators": [],
            "name": "arr2",
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
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 702,
                  "decorators": [],
                  "name": "D",
                  "optional": false
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
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 719,
            "end": 723,
            "decorators": [],
            "name": "arr2",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 726,
            "end": 748,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 730,
              "end": 735,
              "decorators": [],
              "name": "Array",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 735,
              "end": 746,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 736,
                  "end": 745,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 736,
                    "end": 737,
                    "decorators": [],
                    "name": "D",
                    "optional": false
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
    {
      "type": "VariableDeclaration",
      "start": 751,
      "end": 767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 755,
          "end": 766,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 755,
            "end": 766,
            "decorators": [],
            "name": "m",
            "optional": false,
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
                  "decorators": [],
                  "name": "M",
                  "optional": false
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
    {
      "type": "VariableDeclaration",
      "start": 768,
      "end": 780,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 772,
          "end": 779,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 772,
            "end": 773,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 776,
            "end": 779,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 776,
              "end": 777,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 778,
              "end": 779,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
