__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 793,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 132,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 132,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 87,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 85,
              "end": 86,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 92,
            "end": 130,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 103,
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
              "start": 103,
              "end": 130,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 130,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 117,
                    "end": 128,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 117,
                      "end": 127,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 117,
                        "end": 123,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 117,
                          "end": 121
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 123,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 127,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 113,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 107,
                      "end": 113
                    }
                  }
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
        "start": 70,
        "end": 74,
        "decorators": [],
        "name": "Base",
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
      "start": 134,
      "end": 260,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 260,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 174,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 171,
              "end": 173,
              "raw": "''",
              "value": "",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 179,
            "end": 258,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 190,
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
              "start": 190,
              "end": 258,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 213,
                "end": 258,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 223,
                    "end": 232,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 223,
                      "end": 231,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 229,
                          "end": 230,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 223,
                        "end": 228
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 241,
                    "end": 252,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 241,
                      "end": 251,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 241,
                        "end": 247,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 241,
                          "end": 245
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 191,
                  "end": 200,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 192,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 194,
                      "end": 200
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 202,
                  "end": 211,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 203,
                    "end": 211,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 205,
                      "end": 211
                    }
                  }
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
        "start": 140,
        "end": 147,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 156,
        "end": 160,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 262,
      "end": 323,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 293,
        "end": 323,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 299,
            "end": 304,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 303,
              "end": 304,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 309,
            "end": 321,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 313,
              "end": 320,
              "raw": "'hello'",
              "value": "hello",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 276,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 285,
        "end": 292,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 346,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 333,
            "end": 346,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 337,
              "end": 344,
              "decorators": [],
              "name": "Derived",
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
      "start": 357,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 363,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 366,
            "end": 381,
            "arguments": [
              {
                "type": "Literal",
                "start": 379,
                "end": 380,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 370,
              "end": 378,
              "decorators": [],
              "name": "Derived2",
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
      "start": 392,
      "end": 421,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 420,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 398,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 401,
            "end": 420,
            "arguments": [
              {
                "type": "Literal",
                "start": 413,
                "end": 415,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 417,
                "end": 419,
                "raw": "''",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 405,
              "end": 412,
              "decorators": [],
              "name": "Derived",
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
      "type": "ClassDeclaration",
      "start": 423,
      "end": 489,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 438,
        "end": 489,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 444,
            "end": 449,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 448,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 447,
                "end": 448,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 448,
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
            "type": "MethodDefinition",
            "start": 454,
            "end": 487,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 454,
              "end": 465,
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
              "start": 465,
              "end": 487,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 472,
                "end": 487,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 474,
                    "end": 485,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 474,
                      "end": 484,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 474,
                        "end": 480,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 474,
                          "end": 478
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 479,
                          "end": 480,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 484,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 466,
                  "end": 470,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 467,
                    "end": 470,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 469,
                      "end": 470,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 469,
                        "end": 470,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
        "start": 429,
        "end": 434,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 434,
        "end": 437,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 435,
            "end": 436,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
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
      "type": "ClassDeclaration",
      "start": 491,
      "end": 609,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 515,
        "end": 609,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 521,
            "end": 533,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 522,
              "end": 525,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 524,
                "end": 525,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 525,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 528,
              "end": 532,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 538,
            "end": 607,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 538,
              "end": 549,
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
              "start": 549,
              "end": 607,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 562,
                "end": 607,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 572,
                    "end": 581,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 572,
                      "end": 580,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 578,
                          "end": 579,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 572,
                        "end": 577
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 590,
                    "end": 601,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 590,
                      "end": 600,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 590,
                        "end": 596,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 590,
                          "end": 594
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 595,
                          "end": 596,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 600,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 550,
                  "end": 554,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 551,
                    "end": 554,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 553,
                      "end": 554,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 553,
                        "end": 554,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 556,
                  "end": 560,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 557,
                    "end": 560,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 559,
                      "end": 560,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 559,
                        "end": 560,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
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
        "start": 497,
        "end": 498,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 510,
        "end": 514,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 498,
        "end": 501,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 499,
            "end": 500,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 499,
              "end": 500,
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
      "type": "ClassDeclaration",
      "start": 612,
      "end": 680,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 650,
        "end": 680,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 656,
            "end": 661,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 656,
              "end": 657,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 660,
              "end": 661,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 666,
            "end": 678,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 666,
              "end": 667,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 667,
              "end": 670,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 669,
                "end": 670,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 670,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 673,
              "end": 677,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 620,
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 645,
        "end": 646,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 646,
        "end": 649,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 647,
            "end": 648,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 620,
        "end": 636,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 621,
            "end": 635,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 631,
              "end": 635,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 631,
                "end": 635,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 621,
              "end": 622,
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
      "start": 682,
      "end": 699,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 698,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 687,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 690,
            "end": 698,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 694,
              "end": 696,
              "decorators": [],
              "name": "D2",
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
      "start": 709,
      "end": 737,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 713,
          "end": 736,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 713,
            "end": 715,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 718,
            "end": 736,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 725,
                "end": 735,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 733,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 722,
              "end": 724,
              "decorators": [],
              "name": "D2",
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
      "start": 747,
      "end": 787,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 751,
          "end": 786,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 751,
            "end": 753,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 756,
            "end": 786,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 763,
                "end": 773,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 771,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 775,
                "end": 785,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 783,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 760,
              "end": 762,
              "decorators": [],
              "name": "D2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
