__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 698,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 160,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 160,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
              "start": 21,
              "end": 22,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 75,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 39,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 39,
              "end": 75,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 40,
                  "end": 49,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 61,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 53,
                    "end": 61,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 55,
                      "end": 61
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 63,
                  "end": 73,
                  "decorators": [],
                  "name": "z",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 65,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 67,
                      "end": 73
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 115,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 91,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 91,
              "end": 115,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 92,
                  "end": 101,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 93,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 95,
                      "end": 101
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 103,
                  "end": 113,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
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
          },
          {
            "type": "MethodDefinition",
            "start": 120,
            "end": 158,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 131,
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
              "start": 131,
              "end": 158,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 143,
                "end": 158,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 145,
                    "end": 156,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 145,
                      "end": 155,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 145,
                        "end": 151,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 145,
                          "end": 149
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 151,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
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
                  "start": 132,
                  "end": 141,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 141,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 135,
                      "end": 141
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
        "start": 6,
        "end": 10,
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
      "start": 162,
      "end": 219,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 189,
        "end": 219,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 195,
            "end": 200,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
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
              "start": 199,
              "end": 200,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 205,
            "end": 217,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
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
              "start": 209,
              "end": 216,
              "raw": "'hello'",
              "value": "hello"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 175,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 184,
        "end": 188,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 229,
            "end": 242,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 233,
              "end": 240,
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
      "start": 253,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 276,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 262,
            "end": 276,
            "arguments": [
              {
                "type": "Literal",
                "start": 274,
                "end": 275,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 266,
              "end": 273,
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
      "start": 279,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 288,
            "end": 305,
            "arguments": [
              {
                "type": "Literal",
                "start": 300,
                "end": 301,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 303,
                "end": 304,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 292,
              "end": 299,
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
      "start": 307,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 313,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 316,
            "end": 336,
            "arguments": [
              {
                "type": "Literal",
                "start": 328,
                "end": 329,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 331,
                "end": 332,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 334,
                "end": 335,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 320,
              "end": 327,
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
      "start": 339,
      "end": 472,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 354,
        "end": 472,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 360,
            "end": 365,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 360,
              "end": 361,
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
              "start": 361,
              "end": 364,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 363,
                "end": 364,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
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
            "start": 370,
            "end": 402,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 370,
              "end": 381,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 381,
              "end": 402,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 382,
                  "end": 386,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 383,
                    "end": 386,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 385,
                      "end": 386,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 385,
                        "end": 386,
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
                  "start": 388,
                  "end": 393,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 390,
                    "end": 393,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 392,
                      "end": 393,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 393,
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
                  "start": 395,
                  "end": 400,
                  "decorators": [],
                  "name": "z",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 397,
                    "end": 400,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 399,
                      "end": 400,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 399,
                        "end": 400,
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
          },
          {
            "type": "MethodDefinition",
            "start": 407,
            "end": 432,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 407,
              "end": 418,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 418,
              "end": 432,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 419,
                  "end": 423,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 420,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 422,
                      "end": 423,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 422,
                        "end": 423,
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
                  "start": 425,
                  "end": 430,
                  "decorators": [],
                  "name": "y",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 427,
                    "end": 430,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 429,
                      "end": 430,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 429,
                        "end": 430,
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
          },
          {
            "type": "MethodDefinition",
            "start": 437,
            "end": 470,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 437,
              "end": 448,
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
              "start": 448,
              "end": 470,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 455,
                "end": 470,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 457,
                    "end": 468,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 457,
                      "end": 467,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 457,
                        "end": 463,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 457,
                          "end": 461
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 462,
                          "end": 463,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 466,
                        "end": 467,
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
                  "start": 449,
                  "end": 453,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 450,
                    "end": 453,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 452,
                      "end": 453,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 453,
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
        "start": 345,
        "end": 350,
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
        "start": 350,
        "end": 353,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 351,
            "end": 352,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
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
      "start": 474,
      "end": 545,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 515,
        "end": 545,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 521,
            "end": 526,
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
              "start": 525,
              "end": 526,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 531,
            "end": 543,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 531,
              "end": 532,
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
              "start": 532,
              "end": 535,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 534,
                "end": 535,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 535,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 538,
              "end": 542,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 480,
        "end": 481,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 506,
        "end": 511,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 511,
        "end": 514,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 512,
            "end": 513,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 512,
              "end": 513,
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
        "start": 481,
        "end": 497,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 482,
            "end": 496,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 492,
              "end": 496,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 492,
                "end": 496,
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
              "start": 482,
              "end": 483,
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
      "start": 547,
      "end": 563,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 551,
          "end": 562,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 551,
            "end": 552,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 555,
            "end": 562,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 559,
              "end": 560,
              "decorators": [],
              "name": "D",
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
      "start": 573,
      "end": 600,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 599,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 579,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 582,
            "end": 599,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 588,
                "end": 598,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 596,
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
              "start": 586,
              "end": 587,
              "decorators": [],
              "name": "D",
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
      "start": 607,
      "end": 646,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 611,
          "end": 645,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 611,
            "end": 613,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 616,
            "end": 645,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 622,
                "end": 632,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 630,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 634,
                "end": 644,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 638,
                  "end": 642,
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
              "start": 620,
              "end": 621,
              "decorators": [],
              "name": "D",
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
      "start": 647,
      "end": 698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 697,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 651,
            "end": 653,
            "decorators": [],
            "name": "d4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 656,
            "end": 697,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 662,
                "end": 672,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 670,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 674,
                "end": 684,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 682,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 686,
                "end": 696,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 690,
                  "end": 694,
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
              "start": 660,
              "end": 661,
              "decorators": [],
              "name": "D",
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
