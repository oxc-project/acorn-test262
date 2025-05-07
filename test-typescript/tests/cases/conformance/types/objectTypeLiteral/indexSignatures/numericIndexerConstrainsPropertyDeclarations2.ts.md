__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 65,
  "end": 726,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 109,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 109,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 107,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 107,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 107,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 95,
                    "end": 105,
                    "argument": {
                      "type": "Literal",
                      "start": 102,
                      "end": 104,
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 84,
                "end": 92,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 86,
                  "end": 92
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
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
    {
      "type": "ClassDeclaration",
      "start": 111,
      "end": 165,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 165,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 135,
            "end": 163,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 138,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 163,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 163,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 151,
                    "end": 161,
                    "argument": {
                      "type": "Literal",
                      "start": 158,
                      "end": 160,
                      "raw": "''",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 140,
                "end": 148,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 142,
                  "end": 148
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 309,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 177,
        "end": 309,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 183,
            "end": 198,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 184,
                "end": 193,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 185,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 187,
                    "end": 193
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 197,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 203,
            "end": 210,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 203,
              "end": 206,
              "raw": "1.0",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 208,
                "end": 209,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 221,
            "end": 228,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 221,
              "end": 224,
              "raw": "2.0",
              "value": 2,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 227,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 239,
            "end": 247,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 239,
              "end": 244,
              "raw": "\"2.5\"",
              "value": "2.5",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 247,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 246,
                "end": 247,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 258,
            "end": 270,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 258,
              "end": 261,
              "raw": "3.0",
              "value": 3,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 269,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 263,
                "end": 269
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 284,
            "end": 298,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 284,
              "end": 289,
              "raw": "\"4.0\"",
              "value": "4.0",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 297,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 291,
                "end": 297
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
        "start": 173,
        "end": 176,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 311,
      "end": 458,
      "body": {
        "type": "TSInterfaceBody",
        "start": 326,
        "end": 458,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 332,
            "end": 347,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 333,
                "end": 342,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 334,
                  "end": 342,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 336,
                    "end": 342
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 345,
                "end": 346,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 352,
            "end": 359,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 352,
              "end": 355,
              "raw": "1.0",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 357,
                "end": 358,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 358,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 370,
            "end": 377,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 370,
              "end": 373,
              "raw": "2.0",
              "value": 2,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 373,
              "end": 376,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 375,
                "end": 376,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 376,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 388,
            "end": 396,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 388,
              "end": 393,
              "raw": "\"2.5\"",
              "value": "2.5",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 396,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 395,
                "end": 396,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 396,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 407,
            "end": 419,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 407,
              "end": 410,
              "raw": "3.0",
              "value": 3,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 410,
              "end": 418,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 412,
                "end": 418
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 433,
            "end": 447,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 433,
              "end": 438,
              "raw": "\"4.0\"",
              "value": "4.0",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 438,
              "end": 446,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 440,
                "end": 446
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 325,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 460,
      "end": 600,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 464,
          "end": 599,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 599,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 599,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 467,
                "end": 599,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 473,
                    "end": 488,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 474,
                        "end": 483,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 475,
                          "end": 483,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 477,
                            "end": 483
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 484,
                      "end": 487,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 486,
                        "end": 487,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 486,
                          "end": 487,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 493,
                    "end": 500,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 493,
                      "end": 496,
                      "raw": "1.0",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 496,
                      "end": 499,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 498,
                        "end": 499,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 498,
                          "end": 499,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 511,
                    "end": 518,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 511,
                      "end": 514,
                      "raw": "2.0",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 514,
                      "end": 517,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 516,
                        "end": 517,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 516,
                          "end": 517,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 529,
                    "end": 537,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 529,
                      "end": 534,
                      "raw": "\"2.5\"",
                      "value": "2.5",
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 534,
                      "end": 537,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 536,
                        "end": 537,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 536,
                          "end": 537,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 548,
                    "end": 560,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 548,
                      "end": 551,
                      "raw": "3.0",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 551,
                      "end": 559,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 553,
                        "end": 559
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 574,
                    "end": 588,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 574,
                      "end": 579,
                      "raw": "\"4.0\"",
                      "value": "4.0",
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 579,
                      "end": 587,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 581,
                        "end": 587
                      }
                    }
                  }
                ]
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
      "start": 611,
      "end": 726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 726,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 636,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 616,
              "end": 636,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 618,
                "end": 636,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 620,
                    "end": 634,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 621,
                        "end": 630,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 622,
                          "end": 630,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 624,
                            "end": 630
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 631,
                      "end": 634,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 633,
                        "end": 634,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 633,
                          "end": 634,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 639,
            "end": 726,
            "properties": [
              {
                "type": "Property",
                "start": 645,
                "end": 657,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 645,
                  "end": 648,
                  "raw": "1.0",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 650,
                  "end": 657,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 654,
                    "end": 655,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "Property",
                "start": 664,
                "end": 676,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 664,
                  "end": 667,
                  "raw": "2.0",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 669,
                  "end": 676,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 673,
                    "end": 674,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "Property",
                "start": 683,
                "end": 697,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 683,
                  "end": 688,
                  "raw": "\"2.5\"",
                  "value": "2.5",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 690,
                  "end": 697,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 694,
                    "end": 695,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "Property",
                "start": 703,
                "end": 709,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 703,
                  "end": 706,
                  "raw": "3.0",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 708,
                  "end": 709,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 715,
                "end": 724,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 715,
                  "end": 720,
                  "raw": "\"4.0\"",
                  "value": "4.0",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 722,
                  "end": 724,
                  "raw": "''",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
