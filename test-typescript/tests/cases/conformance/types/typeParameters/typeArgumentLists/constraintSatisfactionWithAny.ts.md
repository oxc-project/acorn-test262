__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 93,
  "end": 1040,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 149,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 149,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 135,
            "end": 147,
            "argument": {
              "type": "Literal",
              "start": 142,
              "end": 146,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 105,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 124,
          "end": 128,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 128,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 132,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 131,
          "end": 132,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 123,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 122,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 116,
              "end": 122,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 122,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
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
      "start": 150,
      "end": 214,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 198,
        "end": 214,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 200,
            "end": 212,
            "argument": {
              "type": "Literal",
              "start": 207,
              "end": 211,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 163,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 189,
          "end": 193,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 190,
            "end": 193,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 193,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
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
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 163,
        "end": 188,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 164,
            "end": 187,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 174,
              "end": 187,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 176,
                  "end": 185,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 177,
                    "end": 185,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 179,
                      "end": 185
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
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
      "start": 272,
      "end": 340,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 324,
        "end": 340,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 326,
            "end": 338,
            "argument": {
              "type": "Literal",
              "start": 333,
              "end": 337,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 285,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 315,
          "end": 319,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 316,
            "end": 319,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 318,
              "end": 319,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 320,
        "end": 323,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 322,
          "end": 323,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 285,
        "end": 314,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 286,
            "end": 313,
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "start": 296,
              "end": 313,
              "params": [
                {
                  "type": "Identifier",
                  "start": 300,
                  "end": 304,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 301,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 303,
                      "end": 304,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 303,
                        "end": 304,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 306,
                "end": 313,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 309,
                  "end": 313
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 296,
                "end": 299,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 297,
                    "end": 298,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
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
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
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
      "type": "VariableDeclaration",
      "start": 341,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 346,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 346,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 348,
      "end": 355,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 348,
        "end": 354,
        "arguments": [
          {
            "type": "Identifier",
            "start": 352,
            "end": 353,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 348,
          "end": 351,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 364,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 356,
        "end": 363,
        "arguments": [
          {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 356,
          "end": 360,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 376,
      "end": 384,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 376,
        "end": 383,
        "arguments": [
          {
            "type": "Identifier",
            "start": 381,
            "end": 382,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 376,
          "end": 380,
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 386,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 399,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 399,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 399,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 393,
                "end": 399
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
      "type": "ExpressionStatement",
      "start": 401,
      "end": 413,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 412,
        "arguments": [
          {
            "type": "Identifier",
            "start": 410,
            "end": 411,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 401,
          "end": 404,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 404,
          "end": 409,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 405,
              "end": 408
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 414,
      "end": 427,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 414,
        "end": 426,
        "arguments": [
          {
            "type": "Identifier",
            "start": 424,
            "end": 425,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 414,
          "end": 418,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 418,
          "end": 423,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 419,
              "end": 422
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 457,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 444,
        "end": 456,
        "arguments": [
          {
            "type": "Identifier",
            "start": 454,
            "end": 455,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 444,
          "end": 448,
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 448,
          "end": 453,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 449,
              "end": 452
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 577,
      "end": 639,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 603,
        "end": 639,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 609,
            "end": 637,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 609,
              "end": 620,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 620,
              "end": 637,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 634,
                "end": 637,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 621,
                  "end": 632,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 628,
                    "end": 632,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 629,
                      "end": 632,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 631,
                        "end": 632,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 631,
                          "end": 632,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 583,
        "end": 584,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 584,
        "end": 602,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 585,
            "end": 601,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 595,
              "end": 601,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 595,
                "end": 601,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 585,
              "end": 586,
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
      "type": "VariableDeclaration",
      "start": 641,
      "end": 659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 645,
          "end": 658,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 645,
            "end": 647,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 650,
            "end": 658,
            "arguments": [
              {
                "type": "Identifier",
                "start": 656,
                "end": 657,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 654,
              "end": 655,
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
    {
      "type": "VariableDeclaration",
      "start": 660,
      "end": 683,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 664,
          "end": 682,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 664,
            "end": 666,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 669,
            "end": 682,
            "arguments": [
              {
                "type": "Identifier",
                "start": 680,
                "end": 681,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 673,
              "end": 674,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 674,
              "end": 679,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 675,
                  "end": 678
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
      "type": "ClassDeclaration",
      "start": 685,
      "end": 755,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 719,
        "end": 755,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 725,
            "end": 753,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 725,
              "end": 736,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 736,
              "end": 753,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 750,
                "end": 753,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 737,
                  "end": 748,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 748,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 745,
                      "end": 748,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 747,
                        "end": 748,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 747,
                          "end": 748,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 691,
        "end": 693,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 693,
        "end": 718,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 694,
            "end": 717,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 704,
              "end": 717,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 706,
                  "end": 715,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 706,
                    "end": 707,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 707,
                    "end": 715,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 709,
                      "end": 715
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 694,
              "end": 695,
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
      "type": "VariableDeclaration",
      "start": 757,
      "end": 776,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 761,
          "end": 775,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 761,
            "end": 763,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 766,
            "end": 775,
            "arguments": [
              {
                "type": "Identifier",
                "start": 773,
                "end": 774,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 770,
              "end": 772,
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
    {
      "type": "VariableDeclaration",
      "start": 777,
      "end": 801,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 781,
          "end": 800,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 781,
            "end": 783,
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 786,
            "end": 800,
            "arguments": [
              {
                "type": "Identifier",
                "start": 798,
                "end": 799,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 790,
              "end": 792,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 792,
              "end": 797,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 793,
                  "end": 796
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
      "type": "ClassDeclaration",
      "start": 921,
      "end": 991,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 955,
        "end": 991,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 961,
            "end": 989,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 961,
              "end": 972,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 972,
              "end": 989,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 986,
                "end": 989,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 973,
                  "end": 984,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 980,
                    "end": 984,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 981,
                      "end": 984,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 983,
                        "end": 984,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 983,
                          "end": 984,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 927,
        "end": 929,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 929,
        "end": 954,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 930,
            "end": 953,
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "start": 940,
              "end": 953,
              "params": [
                {
                  "type": "Identifier",
                  "start": 944,
                  "end": 947,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 945,
                    "end": 947,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 946,
                      "end": 947,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 946,
                        "end": 947,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 949,
                "end": 953,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 952,
                  "end": 953,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 952,
                    "end": 953,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 940,
                "end": 943,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 941,
                    "end": 942,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 941,
                      "end": 942,
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
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 930,
              "end": 931,
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
      "type": "VariableDeclaration",
      "start": 993,
      "end": 1012,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 997,
          "end": 1011,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 997,
            "end": 999,
            "decorators": [],
            "name": "c7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1002,
            "end": 1011,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1009,
                "end": 1010,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1006,
              "end": 1008,
              "decorators": [],
              "name": "C4",
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
    {
      "type": "VariableDeclaration",
      "start": 1013,
      "end": 1037,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1017,
          "end": 1036,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1017,
            "end": 1019,
            "decorators": [],
            "name": "c8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1022,
            "end": 1036,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1034,
                "end": 1035,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1026,
              "end": 1028,
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1028,
              "end": 1033,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 1029,
                  "end": 1032
                }
              ]
            }
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
