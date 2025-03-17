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
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 105,
        "name": "foo",
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
          "start": 124,
          "end": 128,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 128,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 105,
        "end": 123,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 106,
            "end": 122,
            "name": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 116,
              "end": 122,
              "typeName": {
                "type": "Identifier",
                "start": 116,
                "end": 122,
                "name": "String",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 132,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 131,
          "end": 132,
          "typeName": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 163,
        "name": "foo2",
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
          "start": 189,
          "end": 193,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 190,
            "end": 193,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 193,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 163,
        "end": 188,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 164,
            "end": 187,
            "name": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 174,
              "end": 187,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 176,
                  "end": 185,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 177,
                    "end": 185,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 179,
                      "end": 185
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 194,
        "end": 197,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 196,
          "end": 197,
          "typeName": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 272,
      "end": 340,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 285,
        "name": "foo4",
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
          "start": 315,
          "end": 319,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 316,
            "end": 319,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 318,
              "end": 319,
              "typeName": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 285,
        "end": 314,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 286,
            "end": 313,
            "name": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 296,
              "end": 313,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 296,
                "end": 299,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 297,
                    "end": 298,
                    "name": {
                      "type": "Identifier",
                      "start": 297,
                      "end": 298,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 300,
                  "end": 304,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 301,
                    "end": 304,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 303,
                      "end": 304,
                      "typeName": {
                        "type": "Identifier",
                        "start": 303,
                        "end": 304,
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
                "start": 306,
                "end": 313,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 309,
                  "end": 313
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 320,
        "end": 323,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 322,
          "end": 323,
          "typeName": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 346,
            "name": "a",
            "typeAnnotation": null,
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
      "type": "ExpressionStatement",
      "start": 348,
      "end": 355,
      "expression": {
        "type": "CallExpression",
        "start": 348,
        "end": 354,
        "callee": {
          "type": "Identifier",
          "start": 348,
          "end": 351,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 352,
            "end": 353,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 364,
      "expression": {
        "type": "CallExpression",
        "start": 356,
        "end": 363,
        "callee": {
          "type": "Identifier",
          "start": 356,
          "end": 360,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 361,
            "end": 362,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 376,
      "end": 384,
      "expression": {
        "type": "CallExpression",
        "start": 376,
        "end": 383,
        "callee": {
          "type": "Identifier",
          "start": 376,
          "end": 380,
          "name": "foo4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 381,
            "end": 382,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 399,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 399,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 393,
                "end": 399
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
      "type": "ExpressionStatement",
      "start": 401,
      "end": 413,
      "expression": {
        "type": "CallExpression",
        "start": 401,
        "end": 412,
        "callee": {
          "type": "Identifier",
          "start": 401,
          "end": 404,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 410,
            "end": 411,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 414,
      "end": 427,
      "expression": {
        "type": "CallExpression",
        "start": 414,
        "end": 426,
        "callee": {
          "type": "Identifier",
          "start": 414,
          "end": 418,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 424,
            "end": 425,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 457,
      "expression": {
        "type": "CallExpression",
        "start": 444,
        "end": 456,
        "callee": {
          "type": "Identifier",
          "start": 444,
          "end": 448,
          "name": "foo4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 454,
            "end": 455,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
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
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 577,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 583,
        "end": 584,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 603,
        "end": 639,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 609,
            "end": 637,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 609,
              "end": 620,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 620,
              "end": 637,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 629,
                      "end": 632,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 631,
                        "end": 632,
                        "typeName": {
                          "type": "Identifier",
                          "start": 631,
                          "end": 632,
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
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 634,
                "end": 637,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 584,
        "end": 602,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 585,
            "end": 601,
            "name": {
              "type": "Identifier",
              "start": 585,
              "end": 586,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 595,
              "end": 601,
              "typeName": {
                "type": "Identifier",
                "start": 595,
                "end": 601,
                "name": "String",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 645,
            "end": 647,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 650,
            "end": 658,
            "callee": {
              "type": "Identifier",
              "start": 654,
              "end": 655,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 656,
                "end": 657,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
      "start": 660,
      "end": 683,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 664,
          "end": 682,
          "id": {
            "type": "Identifier",
            "start": 664,
            "end": 666,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 669,
            "end": 682,
            "callee": {
              "type": "Identifier",
              "start": 673,
              "end": 674,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 680,
                "end": 681,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 685,
      "end": 755,
      "id": {
        "type": "Identifier",
        "start": 691,
        "end": 693,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 719,
        "end": 755,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 725,
            "end": 753,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 725,
              "end": 736,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 736,
              "end": 753,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 745,
                      "end": 748,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 747,
                        "end": 748,
                        "typeName": {
                          "type": "Identifier",
                          "start": 747,
                          "end": 748,
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
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 750,
                "end": 753,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 693,
        "end": 718,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 694,
            "end": 717,
            "name": {
              "type": "Identifier",
              "start": 694,
              "end": 695,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 704,
              "end": 717,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 706,
                  "end": 715,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 706,
                    "end": 707,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 707,
                    "end": 715,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 709,
                      "end": 715
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 761,
            "end": 763,
            "name": "c3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 766,
            "end": 775,
            "callee": {
              "type": "Identifier",
              "start": 770,
              "end": 772,
              "name": "C2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 773,
                "end": 774,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
      "start": 777,
      "end": 801,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 781,
          "end": 800,
          "id": {
            "type": "Identifier",
            "start": 781,
            "end": 783,
            "name": "c4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 786,
            "end": 800,
            "callee": {
              "type": "Identifier",
              "start": 790,
              "end": 792,
              "name": "C2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 798,
                "end": 799,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 921,
      "end": 991,
      "id": {
        "type": "Identifier",
        "start": 927,
        "end": 929,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 955,
        "end": 991,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 961,
            "end": 989,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 961,
              "end": 972,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 972,
              "end": 989,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 981,
                      "end": 984,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 983,
                        "end": 984,
                        "typeName": {
                          "type": "Identifier",
                          "start": 983,
                          "end": 984,
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
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 986,
                "end": 989,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 929,
        "end": 954,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 930,
            "end": 953,
            "name": {
              "type": "Identifier",
              "start": 930,
              "end": 931,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 940,
              "end": 953,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 940,
                "end": 943,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 941,
                    "end": 942,
                    "name": {
                      "type": "Identifier",
                      "start": 941,
                      "end": 942,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 944,
                  "end": 947,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 945,
                    "end": 947,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 946,
                      "end": 947,
                      "typeName": {
                        "type": "Identifier",
                        "start": 946,
                        "end": 947,
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
                "start": 949,
                "end": 953,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 952,
                  "end": 953,
                  "typeName": {
                    "type": "Identifier",
                    "start": 952,
                    "end": 953,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
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
      "type": "VariableDeclaration",
      "start": 993,
      "end": 1012,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 997,
          "end": 1011,
          "id": {
            "type": "Identifier",
            "start": 997,
            "end": 999,
            "name": "c7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1002,
            "end": 1011,
            "callee": {
              "type": "Identifier",
              "start": 1006,
              "end": 1008,
              "name": "C4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1009,
                "end": 1010,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
      "start": 1013,
      "end": 1037,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1017,
          "end": 1036,
          "id": {
            "type": "Identifier",
            "start": 1017,
            "end": 1019,
            "name": "c8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1022,
            "end": 1036,
            "callee": {
              "type": "Identifier",
              "start": 1026,
              "end": 1028,
              "name": "C4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1034,
                "end": 1035,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
