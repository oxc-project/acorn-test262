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
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 74,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 132,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 87,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 85,
              "end": 86,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 92,
            "end": 130,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 103,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 130,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 113,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 107,
                      "end": 113
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 130,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 117,
                    "end": 128,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 117,
                      "end": 127,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 117,
                        "end": 123,
                        "object": {
                          "type": "ThisExpression",
                          "start": 117,
                          "end": 121
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 123,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 127,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 134,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 147,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 156,
        "end": 160,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 260,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 167,
            "end": 174,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 171,
              "end": 173,
              "value": "",
              "raw": "''"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 179,
            "end": 258,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 190,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 190,
              "end": 258,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 191,
                  "end": 200,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 192,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 194,
                      "end": 200
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 202,
                  "end": 211,
                  "name": "z",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 203,
                    "end": 211,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 205,
                      "end": 211
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 213,
                "end": 258,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 223,
                    "end": 232,
                    "expression": {
                      "type": "CallExpression",
                      "start": 223,
                      "end": 231,
                      "callee": {
                        "type": "Super",
                        "start": 223,
                        "end": 228
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 229,
                          "end": 230,
                          "value": 2,
                          "raw": "2"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 241,
                    "end": 252,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 241,
                      "end": 251,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 241,
                        "end": 247,
                        "object": {
                          "type": "ThisExpression",
                          "start": 241,
                          "end": 245
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
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
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 262,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 276,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 285,
        "end": 292,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 293,
        "end": 323,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 299,
            "end": 304,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 303,
              "end": 304,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 309,
            "end": 321,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 313,
              "end": 320,
              "value": "hello",
              "raw": "'hello'"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "VariableDeclaration",
      "start": 325,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 333,
            "end": 346,
            "callee": {
              "type": "Identifier",
              "start": 337,
              "end": 344,
              "name": "Derived",
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
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 363,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 366,
            "end": 381,
            "callee": {
              "type": "Identifier",
              "start": 370,
              "end": 378,
              "name": "Derived2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 379,
                "end": 380,
                "value": 1,
                "raw": "1"
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
      "start": 392,
      "end": 421,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 420,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 398,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 401,
            "end": 420,
            "callee": {
              "type": "Identifier",
              "start": 405,
              "end": 412,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 413,
                "end": 415,
                "value": "",
                "raw": "''"
              },
              {
                "type": "Literal",
                "start": 417,
                "end": 419,
                "value": "",
                "raw": "''"
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
      "type": "ClassDeclaration",
      "start": 423,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 434,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 438,
        "end": 489,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 444,
            "end": 449,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "name": "a",
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
              "start": 445,
              "end": 448,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 447,
                "end": 448,
                "typeName": {
                  "type": "Identifier",
                  "start": 447,
                  "end": 448,
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
            "type": "MethodDefinition",
            "start": 454,
            "end": 487,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 454,
              "end": 465,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 465,
              "end": 487,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 466,
                  "end": 470,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 467,
                    "end": 470,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 469,
                      "end": 470,
                      "typeName": {
                        "type": "Identifier",
                        "start": 469,
                        "end": 470,
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
                "start": 472,
                "end": 487,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 474,
                    "end": 485,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 474,
                      "end": 484,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 474,
                        "end": 480,
                        "object": {
                          "type": "ThisExpression",
                          "start": 474,
                          "end": 478
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 479,
                          "end": 480,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 483,
                        "end": 484,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
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
        "start": 434,
        "end": 437,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 435,
            "end": 436,
            "name": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
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
      "type": "ClassDeclaration",
      "start": 491,
      "end": 609,
      "id": {
        "type": "Identifier",
        "start": 497,
        "end": 498,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 510,
        "end": 514,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 515,
        "end": 609,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 521,
            "end": 533,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 528,
              "end": 532,
              "value": null,
              "raw": "null"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 522,
              "end": 525,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 524,
                "end": 525,
                "typeName": {
                  "type": "Identifier",
                  "start": 524,
                  "end": 525,
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
            "type": "MethodDefinition",
            "start": 538,
            "end": 607,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 538,
              "end": 549,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 549,
              "end": 607,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 550,
                  "end": 554,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 551,
                    "end": 554,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 553,
                      "end": 554,
                      "typeName": {
                        "type": "Identifier",
                        "start": 553,
                        "end": 554,
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
                {
                  "type": "Identifier",
                  "start": 556,
                  "end": 560,
                  "name": "z",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 557,
                    "end": 560,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 559,
                      "end": 560,
                      "typeName": {
                        "type": "Identifier",
                        "start": 559,
                        "end": 560,
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
                "start": 562,
                "end": 607,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 572,
                    "end": 581,
                    "expression": {
                      "type": "CallExpression",
                      "start": 572,
                      "end": 580,
                      "callee": {
                        "type": "Super",
                        "start": 572,
                        "end": 577
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 578,
                          "end": 579,
                          "value": 2,
                          "raw": "2"
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 590,
                    "end": 601,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 590,
                      "end": 600,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 590,
                        "end": 596,
                        "object": {
                          "type": "ThisExpression",
                          "start": 590,
                          "end": 594
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 595,
                          "end": 596,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 600,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
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
        "start": 498,
        "end": 501,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 499,
            "end": 500,
            "name": {
              "type": "Identifier",
              "start": 499,
              "end": 500,
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
      "type": "ClassDeclaration",
      "start": 612,
      "end": 680,
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 620,
        "name": "D2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 645,
        "end": 646,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 650,
        "end": 680,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 656,
            "end": 661,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 656,
              "end": 657,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 660,
              "end": 661,
              "value": 2,
              "raw": "2"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 666,
            "end": 678,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 666,
              "end": 667,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 673,
              "end": 677,
              "value": null,
              "raw": "null"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 667,
              "end": 670,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 669,
                "end": 670,
                "typeName": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 670,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 620,
        "end": 636,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 621,
            "end": 635,
            "name": {
              "type": "Identifier",
              "start": 621,
              "end": 622,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 631,
              "end": 635,
              "typeName": {
                "type": "Identifier",
                "start": 631,
                "end": 635,
                "name": "Date",
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
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 646,
        "end": 649,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 647,
            "end": 648,
            "typeName": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 687,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 690,
            "end": 698,
            "callee": {
              "type": "Identifier",
              "start": 694,
              "end": 696,
              "name": "D2",
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
    {
      "type": "VariableDeclaration",
      "start": 709,
      "end": 737,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 713,
          "end": 736,
          "id": {
            "type": "Identifier",
            "start": 713,
            "end": 715,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 718,
            "end": 736,
            "callee": {
              "type": "Identifier",
              "start": 722,
              "end": 724,
              "name": "D2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 725,
                "end": 735,
                "callee": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 733,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
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
      "start": 747,
      "end": 787,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 751,
          "end": 786,
          "id": {
            "type": "Identifier",
            "start": 751,
            "end": 753,
            "name": "d3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 756,
            "end": 786,
            "callee": {
              "type": "Identifier",
              "start": 760,
              "end": 762,
              "name": "D2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 763,
                "end": 773,
                "callee": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 771,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 775,
                "end": 785,
                "callee": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 783,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ],
            "typeArguments": null
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
