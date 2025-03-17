__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2156,
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
      "end": 91,
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
        "end": 91,
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
            "end": 89,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 80,
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
              "start": 80,
              "end": 88,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
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
      "start": 93,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 101,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 135,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 133,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 123,
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
              "start": 123,
              "end": 132,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
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
      "type": "FunctionDeclaration",
      "start": 252,
      "end": 302,
      "id": {
        "type": "Identifier",
        "start": 261,
        "end": 263,
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
          "start": 264,
          "end": 273,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 265,
            "end": 273,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 267,
              "end": 273
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 284,
        "end": 302,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 286,
            "end": 300,
            "argument": {
              "type": "BinaryExpression",
              "start": 293,
              "end": 299,
              "left": {
                "type": "Identifier",
                "start": 293,
                "end": 294,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 297,
                "end": 299,
                "value": 42,
                "raw": "42"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 274,
        "end": 283,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 276,
          "end": 283
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 304,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 312,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 313,
        "end": 433,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 319,
            "end": 363,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 326,
              "end": 363,
              "id": {
                "type": "Identifier",
                "start": 332,
                "end": 333,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 334,
                "end": 363,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 344,
                    "end": 357,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 344,
                      "end": 348,
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
                      "start": 348,
                      "end": 356,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 350,
                        "end": 356
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
            "start": 369,
            "end": 431,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 376,
              "end": 431,
              "id": {
                "type": "Identifier",
                "start": 385,
                "end": 387,
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
                  "start": 388,
                  "end": 397,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 389,
                    "end": 397,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 391,
                      "end": 397
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 407,
                "end": 431,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 409,
                    "end": 429,
                    "argument": {
                      "type": "CallExpression",
                      "start": 416,
                      "end": 428,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 416,
                        "end": 426,
                        "object": {
                          "type": "Identifier",
                          "start": 416,
                          "end": 417,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 426,
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
                "start": 398,
                "end": 406,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 400,
                  "end": 406
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
      "type": "TSModuleDeclaration",
      "start": 435,
      "end": 562,
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 443,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 444,
        "end": 562,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 450,
            "end": 492,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 457,
              "end": 492,
              "id": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 465,
                "end": 492,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 475,
                    "end": 486,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 475,
                      "end": 477,
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
                      "start": 477,
                      "end": 485,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 479,
                        "end": 485
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
            "start": 498,
            "end": 560,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 505,
              "end": 560,
              "id": {
                "type": "Identifier",
                "start": 514,
                "end": 516,
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
                  "start": 517,
                  "end": 526,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 518,
                    "end": 526,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 520,
                      "end": 526
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 536,
                "end": 560,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 538,
                    "end": 558,
                    "argument": {
                      "type": "CallExpression",
                      "start": 545,
                      "end": 557,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 545,
                        "end": 555,
                        "object": {
                          "type": "Identifier",
                          "start": 545,
                          "end": 546,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 547,
                          "end": 555,
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
                "start": 527,
                "end": 535,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 529,
                  "end": 535
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
      "type": "IfStatement",
      "start": 576,
      "end": 589,
      "test": {
        "type": "Literal",
        "start": 580,
        "end": 584,
        "value": true,
        "raw": "true"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 586,
        "end": 589,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 590,
      "end": 606,
      "test": {
        "type": "Literal",
        "start": 597,
        "end": 601,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "start": 603,
        "end": 606,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 607,
      "end": 624,
      "body": {
        "type": "BlockStatement",
        "start": 610,
        "end": 613,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 619,
        "end": 623,
        "value": true,
        "raw": "true"
      }
    },
    {
      "type": "IfStatement",
      "start": 626,
      "end": 639,
      "test": {
        "type": "Literal",
        "start": 630,
        "end": 634,
        "value": null,
        "raw": "null"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 636,
        "end": 639,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 640,
      "end": 656,
      "test": {
        "type": "Literal",
        "start": 647,
        "end": 651,
        "value": null,
        "raw": "null"
      },
      "body": {
        "type": "BlockStatement",
        "start": 653,
        "end": 656,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 657,
      "end": 674,
      "body": {
        "type": "BlockStatement",
        "start": 660,
        "end": 663,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 669,
        "end": 673,
        "value": null,
        "raw": "null"
      }
    },
    {
      "type": "IfStatement",
      "start": 676,
      "end": 694,
      "test": {
        "type": "Identifier",
        "start": 680,
        "end": 689,
        "name": "undefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 691,
        "end": 694,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 695,
      "end": 716,
      "test": {
        "type": "Identifier",
        "start": 702,
        "end": 711,
        "name": "undefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 713,
        "end": 716,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 717,
      "end": 739,
      "body": {
        "type": "BlockStatement",
        "start": 720,
        "end": 723,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 729,
        "end": 738,
        "name": "undefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 741,
      "end": 753,
      "test": {
        "type": "Literal",
        "start": 745,
        "end": 748,
        "value": 0,
        "raw": "0.0"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 750,
        "end": 753,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 754,
      "end": 769,
      "test": {
        "type": "Literal",
        "start": 761,
        "end": 764,
        "value": 0,
        "raw": "0.0"
      },
      "body": {
        "type": "BlockStatement",
        "start": 766,
        "end": 769,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 770,
      "end": 786,
      "body": {
        "type": "BlockStatement",
        "start": 773,
        "end": 776,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 782,
        "end": 785,
        "value": 0,
        "raw": "0.0"
      }
    },
    {
      "type": "IfStatement",
      "start": 788,
      "end": 807,
      "test": {
        "type": "Literal",
        "start": 792,
        "end": 802,
        "value": "a string",
        "raw": "'a string'"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 804,
        "end": 807,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 808,
      "end": 830,
      "test": {
        "type": "Literal",
        "start": 815,
        "end": 825,
        "value": "a string",
        "raw": "'a string'"
      },
      "body": {
        "type": "BlockStatement",
        "start": 827,
        "end": 830,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 831,
      "end": 854,
      "body": {
        "type": "BlockStatement",
        "start": 834,
        "end": 837,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 843,
        "end": 853,
        "value": "a string",
        "raw": "'a string'"
      }
    },
    {
      "type": "IfStatement",
      "start": 856,
      "end": 867,
      "test": {
        "type": "Literal",
        "start": 860,
        "end": 862,
        "value": "",
        "raw": "''"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 864,
        "end": 867,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 868,
      "end": 882,
      "test": {
        "type": "Literal",
        "start": 875,
        "end": 877,
        "value": "",
        "raw": "''"
      },
      "body": {
        "type": "BlockStatement",
        "start": 879,
        "end": 882,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 883,
      "end": 898,
      "body": {
        "type": "BlockStatement",
        "start": 886,
        "end": 889,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 895,
        "end": 897,
        "value": "",
        "raw": "''"
      }
    },
    {
      "type": "IfStatement",
      "start": 900,
      "end": 916,
      "test": {
        "type": "Literal",
        "start": 904,
        "end": 911,
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "flags": "",
          "pattern": "[a-z]"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 913,
        "end": 916,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 917,
      "end": 936,
      "test": {
        "type": "Literal",
        "start": 924,
        "end": 931,
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "flags": "",
          "pattern": "[a-z]"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 933,
        "end": 936,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 937,
      "end": 957,
      "body": {
        "type": "BlockStatement",
        "start": 940,
        "end": 943,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 949,
        "end": 956,
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "flags": "",
          "pattern": "[a-z]"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 959,
      "end": 970,
      "test": {
        "type": "ArrayExpression",
        "start": 963,
        "end": 965,
        "elements": []
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 967,
        "end": 970,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 971,
      "end": 985,
      "test": {
        "type": "ArrayExpression",
        "start": 978,
        "end": 980,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 982,
        "end": 985,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 986,
      "end": 1001,
      "body": {
        "type": "BlockStatement",
        "start": 989,
        "end": 992,
        "body": []
      },
      "test": {
        "type": "ArrayExpression",
        "start": 998,
        "end": 1000,
        "elements": []
      }
    },
    {
      "type": "IfStatement",
      "start": 1003,
      "end": 1018,
      "test": {
        "type": "ArrayExpression",
        "start": 1007,
        "end": 1013,
        "elements": [
          {
            "type": "Literal",
            "start": 1008,
            "end": 1009,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1011,
            "end": 1012,
            "value": 2,
            "raw": "2"
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1015,
        "end": 1018,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1019,
      "end": 1037,
      "test": {
        "type": "ArrayExpression",
        "start": 1026,
        "end": 1032,
        "elements": [
          {
            "type": "Literal",
            "start": 1027,
            "end": 1028,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1030,
            "end": 1031,
            "value": 2,
            "raw": "2"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1034,
        "end": 1037,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1038,
      "end": 1057,
      "body": {
        "type": "BlockStatement",
        "start": 1041,
        "end": 1044,
        "body": []
      },
      "test": {
        "type": "ArrayExpression",
        "start": 1050,
        "end": 1056,
        "elements": [
          {
            "type": "Literal",
            "start": 1051,
            "end": 1052,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 1054,
            "end": 1055,
            "value": 2,
            "raw": "2"
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1059,
      "end": 1070,
      "test": {
        "type": "ObjectExpression",
        "start": 1063,
        "end": 1065,
        "properties": []
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1067,
        "end": 1070,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1071,
      "end": 1085,
      "test": {
        "type": "ObjectExpression",
        "start": 1078,
        "end": 1080,
        "properties": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 1082,
        "end": 1085,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1086,
      "end": 1101,
      "body": {
        "type": "BlockStatement",
        "start": 1089,
        "end": 1092,
        "body": []
      },
      "test": {
        "type": "ObjectExpression",
        "start": 1098,
        "end": 1100,
        "properties": []
      }
    },
    {
      "type": "IfStatement",
      "start": 1103,
      "end": 1128,
      "test": {
        "type": "ObjectExpression",
        "start": 1107,
        "end": 1123,
        "properties": [
          {
            "type": "Property",
            "start": 1109,
            "end": 1113,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1109,
              "end": 1110,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1112,
              "end": 1113,
              "value": 1,
              "raw": "1"
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 1115,
            "end": 1121,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1115,
              "end": 1116,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1118,
              "end": 1121,
              "value": "a",
              "raw": "'a'"
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1125,
        "end": 1128,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1129,
      "end": 1157,
      "test": {
        "type": "ObjectExpression",
        "start": 1136,
        "end": 1152,
        "properties": [
          {
            "type": "Property",
            "start": 1138,
            "end": 1142,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1138,
              "end": 1139,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1141,
              "end": 1142,
              "value": 1,
              "raw": "1"
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 1144,
            "end": 1150,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1144,
              "end": 1145,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1147,
              "end": 1150,
              "value": "a",
              "raw": "'a'"
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 1154,
        "end": 1157,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1158,
      "end": 1187,
      "body": {
        "type": "BlockStatement",
        "start": 1161,
        "end": 1164,
        "body": []
      },
      "test": {
        "type": "ObjectExpression",
        "start": 1170,
        "end": 1186,
        "properties": [
          {
            "type": "Property",
            "start": 1172,
            "end": 1176,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1172,
              "end": 1173,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1175,
              "end": 1176,
              "value": 1,
              "raw": "1"
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 1178,
            "end": 1184,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1178,
              "end": 1179,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1181,
              "end": 1184,
              "value": "a",
              "raw": "'a'"
            },
            "kind": "init",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 1189,
      "end": 1206,
      "test": {
        "type": "ArrowFunctionExpression",
        "start": 1193,
        "end": 1201,
        "id": null,
        "expression": true,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "Literal",
          "start": 1199,
          "end": 1201,
          "value": 43,
          "raw": "43"
        },
        "typeParameters": null,
        "returnType": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1203,
        "end": 1206,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1207,
      "end": 1227,
      "test": {
        "type": "ArrowFunctionExpression",
        "start": 1214,
        "end": 1222,
        "id": null,
        "expression": true,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "Literal",
          "start": 1220,
          "end": 1222,
          "value": 43,
          "raw": "43"
        },
        "typeParameters": null,
        "returnType": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1224,
        "end": 1227,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1228,
      "end": 1249,
      "body": {
        "type": "BlockStatement",
        "start": 1231,
        "end": 1234,
        "body": []
      },
      "test": {
        "type": "ArrowFunctionExpression",
        "start": 1240,
        "end": 1248,
        "id": null,
        "expression": true,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "Literal",
          "start": 1246,
          "end": 1248,
          "value": 43,
          "raw": "43"
        },
        "typeParameters": null,
        "returnType": null
      }
    },
    {
      "type": "IfStatement",
      "start": 1251,
      "end": 1267,
      "test": {
        "type": "NewExpression",
        "start": 1255,
        "end": 1262,
        "callee": {
          "type": "Identifier",
          "start": 1259,
          "end": 1260,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1264,
        "end": 1267,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1268,
      "end": 1287,
      "test": {
        "type": "NewExpression",
        "start": 1275,
        "end": 1282,
        "callee": {
          "type": "Identifier",
          "start": 1279,
          "end": 1280,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 1284,
        "end": 1287,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1288,
      "end": 1308,
      "body": {
        "type": "BlockStatement",
        "start": 1291,
        "end": 1294,
        "body": []
      },
      "test": {
        "type": "NewExpression",
        "start": 1300,
        "end": 1307,
        "callee": {
          "type": "Identifier",
          "start": 1304,
          "end": 1305,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 1310,
      "end": 1329,
      "test": {
        "type": "NewExpression",
        "start": 1314,
        "end": 1324,
        "callee": {
          "type": "Identifier",
          "start": 1318,
          "end": 1319,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1319,
          "end": 1322,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1320,
              "end": 1321,
              "typeName": {
                "type": "Identifier",
                "start": 1320,
                "end": 1321,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1326,
        "end": 1329,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1330,
      "end": 1352,
      "test": {
        "type": "NewExpression",
        "start": 1337,
        "end": 1347,
        "callee": {
          "type": "Identifier",
          "start": 1341,
          "end": 1342,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1342,
          "end": 1345,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1343,
              "end": 1344,
              "typeName": {
                "type": "Identifier",
                "start": 1343,
                "end": 1344,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1349,
        "end": 1352,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1353,
      "end": 1376,
      "body": {
        "type": "BlockStatement",
        "start": 1356,
        "end": 1359,
        "body": []
      },
      "test": {
        "type": "NewExpression",
        "start": 1365,
        "end": 1375,
        "callee": {
          "type": "Identifier",
          "start": 1369,
          "end": 1370,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1370,
          "end": 1373,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1371,
              "end": 1372,
              "typeName": {
                "type": "Identifier",
                "start": 1371,
                "end": 1372,
                "name": "C",
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
    {
      "type": "VariableDeclaration",
      "start": 1392,
      "end": 1405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1396,
          "end": 1404,
          "id": {
            "type": "Identifier",
            "start": 1396,
            "end": 1397,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1400,
            "end": 1404,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1406,
      "end": 1416,
      "test": {
        "type": "Identifier",
        "start": 1410,
        "end": 1411,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1413,
        "end": 1416,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1417,
      "end": 1430,
      "test": {
        "type": "Identifier",
        "start": 1424,
        "end": 1425,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1427,
        "end": 1430,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1431,
      "end": 1445,
      "body": {
        "type": "BlockStatement",
        "start": 1434,
        "end": 1437,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1443,
        "end": 1444,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1447,
      "end": 1460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1451,
          "end": 1459,
          "id": {
            "type": "Identifier",
            "start": 1451,
            "end": 1452,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1455,
            "end": 1459,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1461,
      "end": 1471,
      "test": {
        "type": "Identifier",
        "start": 1465,
        "end": 1466,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1468,
        "end": 1471,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1472,
      "end": 1485,
      "test": {
        "type": "Identifier",
        "start": 1479,
        "end": 1480,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1482,
        "end": 1485,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1486,
      "end": 1500,
      "body": {
        "type": "BlockStatement",
        "start": 1489,
        "end": 1492,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1498,
        "end": 1499,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1502,
      "end": 1520,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1506,
          "end": 1519,
          "id": {
            "type": "Identifier",
            "start": 1506,
            "end": 1507,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 1510,
            "end": 1519,
            "name": "undefined",
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
      "type": "IfStatement",
      "start": 1521,
      "end": 1531,
      "test": {
        "type": "Identifier",
        "start": 1525,
        "end": 1526,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1528,
        "end": 1531,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1532,
      "end": 1545,
      "test": {
        "type": "Identifier",
        "start": 1539,
        "end": 1540,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1542,
        "end": 1545,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1546,
      "end": 1560,
      "body": {
        "type": "BlockStatement",
        "start": 1549,
        "end": 1552,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1558,
        "end": 1559,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1562,
      "end": 1574,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1566,
          "end": 1573,
          "id": {
            "type": "Identifier",
            "start": 1566,
            "end": 1567,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1570,
            "end": 1573,
            "value": 0,
            "raw": "0.0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1575,
      "end": 1585,
      "test": {
        "type": "Identifier",
        "start": 1579,
        "end": 1580,
        "name": "d",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1582,
        "end": 1585,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1586,
      "end": 1599,
      "test": {
        "type": "Identifier",
        "start": 1593,
        "end": 1594,
        "name": "d",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1596,
        "end": 1599,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1600,
      "end": 1614,
      "body": {
        "type": "BlockStatement",
        "start": 1603,
        "end": 1606,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1612,
        "end": 1613,
        "name": "d",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1616,
      "end": 1635,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1620,
          "end": 1634,
          "id": {
            "type": "Identifier",
            "start": 1620,
            "end": 1621,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1624,
            "end": 1634,
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
      "type": "IfStatement",
      "start": 1636,
      "end": 1646,
      "test": {
        "type": "Identifier",
        "start": 1640,
        "end": 1641,
        "name": "e",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1643,
        "end": 1646,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1647,
      "end": 1660,
      "test": {
        "type": "Identifier",
        "start": 1654,
        "end": 1655,
        "name": "e",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1657,
        "end": 1660,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1661,
      "end": 1675,
      "body": {
        "type": "BlockStatement",
        "start": 1664,
        "end": 1667,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1673,
        "end": 1674,
        "name": "e",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1677,
      "end": 1688,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1681,
          "end": 1687,
          "id": {
            "type": "Identifier",
            "start": 1681,
            "end": 1682,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1685,
            "end": 1687,
            "value": "",
            "raw": "''"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1689,
      "end": 1699,
      "test": {
        "type": "Identifier",
        "start": 1693,
        "end": 1694,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1696,
        "end": 1699,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1700,
      "end": 1713,
      "test": {
        "type": "Identifier",
        "start": 1707,
        "end": 1708,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1710,
        "end": 1713,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1714,
      "end": 1728,
      "body": {
        "type": "BlockStatement",
        "start": 1717,
        "end": 1720,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1726,
        "end": 1727,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1730,
      "end": 1745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1734,
          "end": 1745,
          "id": {
            "type": "Identifier",
            "start": 1734,
            "end": 1735,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1738,
            "end": 1745,
            "value": null,
            "raw": "/[a-z]/",
            "regex": {
              "flags": "",
              "pattern": "[a-z]"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1746,
      "end": 1756,
      "test": {
        "type": "Identifier",
        "start": 1750,
        "end": 1751,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1753,
        "end": 1756,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1757,
      "end": 1770,
      "test": {
        "type": "Identifier",
        "start": 1764,
        "end": 1765,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1767,
        "end": 1770,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1771,
      "end": 1785,
      "body": {
        "type": "BlockStatement",
        "start": 1774,
        "end": 1777,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1783,
        "end": 1784,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1787,
      "end": 1798,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1791,
          "end": 1797,
          "id": {
            "type": "Identifier",
            "start": 1791,
            "end": 1792,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1795,
            "end": 1797,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1799,
      "end": 1809,
      "test": {
        "type": "Identifier",
        "start": 1803,
        "end": 1804,
        "name": "h",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1806,
        "end": 1809,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1810,
      "end": 1823,
      "test": {
        "type": "Identifier",
        "start": 1817,
        "end": 1818,
        "name": "h",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1820,
        "end": 1823,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1824,
      "end": 1838,
      "body": {
        "type": "BlockStatement",
        "start": 1827,
        "end": 1830,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1836,
        "end": 1837,
        "name": "h",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1840,
      "end": 1855,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1844,
          "end": 1854,
          "id": {
            "type": "Identifier",
            "start": 1844,
            "end": 1845,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1848,
            "end": 1854,
            "elements": [
              {
                "type": "Literal",
                "start": 1849,
                "end": 1850,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1852,
                "end": 1853,
                "value": 2,
                "raw": "2"
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
      "type": "IfStatement",
      "start": 1856,
      "end": 1866,
      "test": {
        "type": "Identifier",
        "start": 1860,
        "end": 1861,
        "name": "i",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1863,
        "end": 1866,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1867,
      "end": 1880,
      "test": {
        "type": "Identifier",
        "start": 1874,
        "end": 1875,
        "name": "i",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1877,
        "end": 1880,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1881,
      "end": 1895,
      "body": {
        "type": "BlockStatement",
        "start": 1884,
        "end": 1887,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1893,
        "end": 1894,
        "name": "i",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1897,
      "end": 1908,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1901,
          "end": 1907,
          "id": {
            "type": "Identifier",
            "start": 1901,
            "end": 1902,
            "name": "j",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1905,
            "end": 1907,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 1909,
      "end": 1919,
      "test": {
        "type": "Identifier",
        "start": 1913,
        "end": 1914,
        "name": "j",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1916,
        "end": 1919,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1920,
      "end": 1933,
      "test": {
        "type": "Identifier",
        "start": 1927,
        "end": 1928,
        "name": "j",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1930,
        "end": 1933,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1934,
      "end": 1948,
      "body": {
        "type": "BlockStatement",
        "start": 1937,
        "end": 1940,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 1946,
        "end": 1947,
        "name": "j",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1950,
      "end": 1975,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1954,
          "end": 1974,
          "id": {
            "type": "Identifier",
            "start": 1954,
            "end": 1955,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1958,
            "end": 1974,
            "properties": [
              {
                "type": "Property",
                "start": 1960,
                "end": 1964,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1960,
                  "end": 1961,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1963,
                  "end": 1964,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1966,
                "end": 1972,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1966,
                  "end": 1967,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1969,
                  "end": 1972,
                  "value": "a",
                  "raw": "'a'"
                },
                "kind": "init",
                "optional": false
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
      "type": "IfStatement",
      "start": 1976,
      "end": 1986,
      "test": {
        "type": "Identifier",
        "start": 1980,
        "end": 1981,
        "name": "k",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1983,
        "end": 1986,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 1987,
      "end": 2000,
      "test": {
        "type": "Identifier",
        "start": 1994,
        "end": 1995,
        "name": "k",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 1997,
        "end": 2000,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 2001,
      "end": 2015,
      "body": {
        "type": "BlockStatement",
        "start": 2004,
        "end": 2007,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 2013,
        "end": 2014,
        "name": "k",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2017,
      "end": 2060,
      "id": {
        "type": "Identifier",
        "start": 2026,
        "end": 2028,
        "name": "fn",
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
          "start": 2029,
          "end": 2039,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2031,
            "end": 2039,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2033,
              "end": 2039
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2044,
        "end": 2060,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2046,
            "end": 2058,
            "argument": {
              "type": "Literal",
              "start": 2053,
              "end": 2057,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2040,
        "end": 2043,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2042,
          "end": 2043,
          "typeName": {
            "type": "Identifier",
            "start": 2042,
            "end": 2043,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 2061,
      "end": 2074,
      "test": {
        "type": "CallExpression",
        "start": 2065,
        "end": 2069,
        "callee": {
          "type": "Identifier",
          "start": 2065,
          "end": 2067,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 2071,
        "end": 2074,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 2075,
      "end": 2091,
      "test": {
        "type": "CallExpression",
        "start": 2082,
        "end": 2086,
        "callee": {
          "type": "Identifier",
          "start": 2082,
          "end": 2084,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 2088,
        "end": 2091,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 2092,
      "end": 2109,
      "body": {
        "type": "BlockStatement",
        "start": 2095,
        "end": 2098,
        "body": []
      },
      "test": {
        "type": "CallExpression",
        "start": 2104,
        "end": 2108,
        "callee": {
          "type": "Identifier",
          "start": 2104,
          "end": 2106,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 2111,
      "end": 2122,
      "test": {
        "type": "Identifier",
        "start": 2115,
        "end": 2117,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 2119,
        "end": 2122,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "WhileStatement",
      "start": 2123,
      "end": 2137,
      "test": {
        "type": "Identifier",
        "start": 2130,
        "end": 2132,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 2134,
        "end": 2137,
        "body": []
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 2138,
      "end": 2153,
      "body": {
        "type": "BlockStatement",
        "start": 2141,
        "end": 2144,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 2150,
        "end": 2152,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
