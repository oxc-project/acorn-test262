__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1124,
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
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 73,
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
      "start": 75,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 143,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 101,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
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
              "start": 97,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 100,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
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
            "start": 106,
            "end": 120,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
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
              "start": 113,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 119,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 116,
                  "end": 119,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 118,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
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
                  "start": 115,
                  "end": 116,
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
            "start": 125,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 132,
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
              "start": 132,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 141,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 135,
                  "end": 141,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 136,
                      "end": 140,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 137,
                        "end": 140,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 138,
                            "end": 139,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 138,
                              "end": 139,
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
                        "start": 136,
                        "end": 137,
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
                  "start": 134,
                  "end": 135,
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
        "start": 81,
        "end": 82,
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
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
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
      "start": 145,
      "end": 189,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 189,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 177,
            "end": 187,
            "argument": {
              "type": "Literal",
              "start": 184,
              "end": 186,
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
        "start": 154,
        "end": 155,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 156,
          "end": 165,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 157,
            "end": 165,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 159,
              "end": 165
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 166,
        "end": 174,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 168,
          "end": 174
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 191,
      "end": 320,
      "body": {
        "type": "TSModuleBlock",
        "start": 200,
        "end": 320,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 206,
            "end": 250,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 213,
              "end": 250,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 221,
                "end": 250,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 231,
                    "end": 244,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 235,
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
                      "start": 235,
                      "end": 243,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
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
                "start": 219,
                "end": 220,
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
            "start": 256,
            "end": 318,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 263,
              "end": 318,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 294,
                "end": 318,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 296,
                    "end": 316,
                    "argument": {
                      "type": "CallExpression",
                      "start": 303,
                      "end": 315,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 303,
                        "end": 313,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 303,
                          "end": 304,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 313,
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
                "start": 272,
                "end": 274,
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 275,
                  "end": 284,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 276,
                    "end": 284,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 278,
                      "end": 284
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 285,
                "end": 293,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 287,
                  "end": 293
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
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ForStatement",
      "start": 322,
      "end": 356,
      "body": {
        "type": "BlockStatement",
        "start": 354,
        "end": 356,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 326,
        "end": 351,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 330,
            "end": 351,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 330,
              "end": 345,
              "decorators": [],
              "name": "aNumber",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 337,
                "end": 345,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 339,
                  "end": 345
                }
              }
            },
            "init": {
              "type": "Literal",
              "start": 348,
              "end": 351,
              "raw": "9.9",
              "value": 9.9
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
      "start": 358,
      "end": 407,
      "body": {
        "type": "BlockStatement",
        "start": 405,
        "end": 407,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 362,
        "end": 402,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 366,
            "end": 402,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 366,
              "end": 381,
              "decorators": [],
              "name": "aString",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 373,
                "end": 381,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 375,
                  "end": 381
                }
              }
            },
            "init": {
              "type": "Literal",
              "start": 384,
              "end": 402,
              "raw": "'this is a string'",
              "value": "this is a string"
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
      "start": 408,
      "end": 447,
      "body": {
        "type": "BlockStatement",
        "start": 445,
        "end": 447,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 412,
        "end": 442,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 416,
            "end": 442,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 416,
              "end": 427,
              "decorators": [],
              "name": "aDate",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 421,
                "end": 427,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 423,
                  "end": 427,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 427,
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "NewExpression",
              "start": 430,
              "end": 442,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 439,
                  "end": 441,
                  "raw": "12",
                  "value": 12
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 434,
                "end": 438,
                "decorators": [],
                "name": "Date",
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
      "start": 448,
      "end": 492,
      "body": {
        "type": "BlockStatement",
        "start": 490,
        "end": 492,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 452,
        "end": 487,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 456,
            "end": 487,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 456,
              "end": 472,
              "decorators": [],
              "name": "anObject",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 464,
                "end": 472,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 466,
                  "end": 472,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 466,
                    "end": 472,
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "NewExpression",
              "start": 475,
              "end": 487,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 479,
                "end": 485,
                "decorators": [],
                "name": "Object",
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
      "start": 494,
      "end": 524,
      "body": {
        "type": "BlockStatement",
        "start": 522,
        "end": 524,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 498,
        "end": 519,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 502,
            "end": 519,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 502,
              "end": 512,
              "decorators": [],
              "name": "anAny",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 507,
                "end": 512,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 509,
                  "end": 512
                }
              }
            },
            "init": {
              "type": "Literal",
              "start": 515,
              "end": 519,
              "raw": "null",
              "value": null
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
      "start": 525,
      "end": 565,
      "body": {
        "type": "BlockStatement",
        "start": 563,
        "end": 565,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 529,
        "end": 560,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 533,
            "end": 560,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 533,
              "end": 548,
              "decorators": [],
              "name": "aSecondAny",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 543,
                "end": 548,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 545,
                  "end": 548
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 551,
              "end": 560,
              "decorators": [],
              "name": "undefined",
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
      "start": 566,
      "end": 602,
      "body": {
        "type": "BlockStatement",
        "start": 600,
        "end": 602,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 570,
        "end": 597,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 574,
            "end": 597,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 574,
              "end": 585,
              "decorators": [],
              "name": "aVoid",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 579,
                "end": 585,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 581,
                  "end": 585
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 588,
              "end": 597,
              "decorators": [],
              "name": "undefined",
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
      "start": 604,
      "end": 641,
      "body": {
        "type": "BlockStatement",
        "start": 639,
        "end": 641,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 608,
        "end": 636,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 612,
            "end": 636,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 612,
              "end": 626,
              "decorators": [],
              "name": "anInterface",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 623,
                "end": 626,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 625,
                  "end": 626,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 625,
                    "end": 626,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "NewExpression",
              "start": 629,
              "end": 636,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 633,
                "end": 634,
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
      "start": 642,
      "end": 674,
      "body": {
        "type": "BlockStatement",
        "start": 672,
        "end": 674,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 646,
        "end": 669,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 650,
            "end": 669,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 650,
              "end": 659,
              "decorators": [],
              "name": "aClass",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 656,
                "end": 659,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 658,
                  "end": 659,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 658,
                    "end": 659,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "NewExpression",
              "start": 662,
              "end": 669,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 666,
                "end": 667,
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
      "start": 675,
      "end": 730,
      "body": {
        "type": "BlockStatement",
        "start": 728,
        "end": 730,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 679,
        "end": 725,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 683,
            "end": 725,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 683,
              "end": 707,
              "decorators": [],
              "name": "aGenericClass",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 696,
                "end": 707,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 698,
                  "end": 707,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 699,
                    "end": 707,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 700,
                        "end": 706
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 698,
                    "end": 699,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "NewExpression",
              "start": 710,
              "end": 725,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 714,
                "end": 715,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 715,
                "end": 723,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 716,
                    "end": 722
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
      "start": 731,
      "end": 775,
      "body": {
        "type": "BlockStatement",
        "start": 773,
        "end": 775,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 735,
        "end": 770,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 739,
            "end": 770,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 739,
              "end": 757,
              "decorators": [],
              "name": "anObjectLiteral",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 754,
                "end": 757,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 756,
                  "end": 757,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 756,
                    "end": 757,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "start": 760,
              "end": 770,
              "properties": [
                {
                  "type": "Property",
                  "start": 762,
                  "end": 768,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 762,
                    "end": 764,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 766,
                    "end": 768,
                    "raw": "12",
                    "value": 12
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
      "start": 776,
      "end": 835,
      "body": {
        "type": "BlockStatement",
        "start": 833,
        "end": 835,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 780,
        "end": 830,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 784,
            "end": 830,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 784,
              "end": 820,
              "decorators": [],
              "name": "anOtherObjectLiteral",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 804,
                "end": 820,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 806,
                  "end": 820,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 808,
                      "end": 818,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 808,
                        "end": 810,
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
                        "start": 810,
                        "end": 818,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 812,
                          "end": 818
                        }
                      }
                    }
                  ]
                }
              }
            },
            "init": {
              "type": "NewExpression",
              "start": 823,
              "end": 830,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 827,
                "end": 828,
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
      "start": 837,
      "end": 873,
      "body": {
        "type": "BlockStatement",
        "start": 871,
        "end": 873,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 841,
        "end": 868,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 845,
            "end": 868,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 845,
              "end": 864,
              "decorators": [],
              "name": "aFunction",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 854,
                "end": 864,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 856,
                  "end": 864,
                  "exprName": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 864,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 867,
              "end": 868,
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
      "start": 874,
      "end": 929,
      "body": {
        "type": "BlockStatement",
        "start": 927,
        "end": 929,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 878,
        "end": 924,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 882,
            "end": 924,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 882,
              "end": 920,
              "decorators": [],
              "name": "anOtherFunction",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 897,
                "end": 920,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 899,
                  "end": 920,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 900,
                      "end": 909,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 901,
                        "end": 909,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 903,
                          "end": 909
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 911,
                    "end": 920,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 914,
                      "end": 920
                    }
                  },
                  "typeParameters": null
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 923,
              "end": 924,
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
      "start": 930,
      "end": 971,
      "body": {
        "type": "BlockStatement",
        "start": 969,
        "end": 971,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 934,
        "end": 966,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 938,
            "end": 966,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 938,
              "end": 955,
              "decorators": [],
              "name": "aLambda",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 945,
                "end": 955,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 947,
                  "end": 955,
                  "exprName": {
                    "type": "Identifier",
                    "start": 954,
                    "end": 955,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 958,
              "end": 966,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 965,
                "end": 966,
                "raw": "2",
                "value": 2
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 959,
                  "end": 960,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 973,
      "end": 1007,
      "body": {
        "type": "BlockStatement",
        "start": 1005,
        "end": 1007,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 977,
        "end": 1002,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 981,
            "end": 1002,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 981,
              "end": 998,
              "decorators": [],
              "name": "aModule",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 988,
                "end": 998,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 990,
                  "end": 998,
                  "exprName": {
                    "type": "Identifier",
                    "start": 997,
                    "end": 998,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 1001,
              "end": 1002,
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
      "start": 1008,
      "end": 1052,
      "body": {
        "type": "BlockStatement",
        "start": 1050,
        "end": 1052,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 1012,
        "end": 1047,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1016,
            "end": 1047,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1016,
              "end": 1035,
              "decorators": [],
              "name": "aClassInModule",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1030,
                "end": 1035,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1032,
                  "end": 1035,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 1032,
                    "end": 1035,
                    "left": {
                      "type": "Identifier",
                      "start": 1032,
                      "end": 1033,
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1034,
                      "end": 1035,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "init": {
              "type": "NewExpression",
              "start": 1038,
              "end": 1047,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 1042,
                "end": 1045,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1042,
                  "end": 1043,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1044,
                  "end": 1045,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 1053,
      "end": 1124,
      "body": {
        "type": "BlockStatement",
        "start": 1122,
        "end": 1124,
        "body": []
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 1057,
        "end": 1119,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1061,
            "end": 1119,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1061,
              "end": 1091,
              "decorators": [],
              "name": "aFunctionInModule",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1078,
                "end": 1091,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 1080,
                  "end": 1091,
                  "exprName": {
                    "type": "TSQualifiedName",
                    "start": 1087,
                    "end": 1091,
                    "left": {
                      "type": "Identifier",
                      "start": 1087,
                      "end": 1088,
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1089,
                      "end": 1091,
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 1094,
              "end": 1119,
              "async": false,
              "body": {
                "type": "Literal",
                "start": 1101,
                "end": 1119,
                "raw": "'this is a string'",
                "value": "this is a string"
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1095,
                  "end": 1096,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
