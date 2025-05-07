__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 633,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 39,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 39,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 24,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 28,
                "end": 32,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 29,
                  "end": 32,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 31,
                    "end": 32,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 36,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "start": 41,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 63,
            "decorators": [],
            "name": "iFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 51,
                "end": 63,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 55,
                  "end": 63,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 56,
                      "end": 62
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 55,
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 65,
      "end": 77,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 65,
        "end": 76,
        "arguments": [
          {
            "type": "Literal",
            "start": 74,
            "end": 75,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 65,
          "end": 73,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "decorators": [],
            "name": "iFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 73,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 79,
      "end": 175,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 175,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 134,
            "end": 173,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
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
              "start": 137,
              "end": 173,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 173,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 159,
                    "end": 171,
                    "argument": {
                      "type": "Literal",
                      "start": 166,
                      "end": 170,
                      "raw": "null",
                      "value": null,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 138,
                  "end": 147,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 141,
                      "end": 147
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 148,
                "end": 156,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 150,
                  "end": 156
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
        "start": 85,
        "end": 94,
        "decorators": [],
        "name": "IntFooBad",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 106,
          "end": 118,
          "expression": {
            "type": "Identifier",
            "start": 106,
            "end": 110,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 110,
            "end": 118,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 111,
                "end": 117
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 201,
            "decorators": [],
            "name": "intFooBad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 192,
                "end": 201,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 201,
                  "decorators": [],
                  "name": "IntFooBad",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ClassDeclaration",
      "start": 204,
      "end": 288,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 241,
        "end": 288,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 247,
            "end": 286,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 250,
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
              "start": 250,
              "end": 286,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 270,
                "end": 286,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 272,
                    "end": 284,
                    "argument": {
                      "type": "Literal",
                      "start": 279,
                      "end": 283,
                      "raw": "null",
                      "value": null,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 251,
                  "end": 260,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 252,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 254,
                      "end": 260
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 261,
                "end": 269,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 263,
                  "end": 269
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
        "start": 210,
        "end": 216,
        "decorators": [],
        "name": "IntFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 228,
          "end": 240,
          "expression": {
            "type": "Identifier",
            "start": 228,
            "end": 232,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 232,
            "end": 240,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 233,
                "end": 239
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 308,
            "decorators": [],
            "name": "intFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 300,
              "end": 308,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 302,
                "end": 308,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 308,
                  "decorators": [],
                  "name": "IntFoo",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ClassDeclaration",
      "start": 311,
      "end": 399,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 352,
        "end": 399,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 358,
            "end": 397,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 361,
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
              "start": 361,
              "end": 397,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 381,
                "end": 397,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 383,
                    "end": 395,
                    "argument": {
                      "type": "Literal",
                      "start": 390,
                      "end": 394,
                      "raw": "null",
                      "value": null,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 371,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 363,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 365,
                      "end": 371
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 372,
                "end": 380,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 374,
                  "end": 380
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
        "start": 317,
        "end": 327,
        "decorators": [],
        "name": "StringFoo2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 339,
          "end": 351,
          "expression": {
            "type": "Identifier",
            "start": 339,
            "end": 343,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 343,
            "end": 351,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 344,
                "end": 350
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 427,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 427,
            "decorators": [],
            "name": "stringFoo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 427,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 417,
                "end": 427,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 427,
                  "decorators": [],
                  "name": "StringFoo2",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 429,
      "end": 450,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 429,
        "end": 449,
        "arguments": [
          {
            "type": "Literal",
            "start": 444,
            "end": 448,
            "raw": "\"hm\"",
            "value": "hm",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 429,
          "end": 443,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 429,
            "end": 439,
            "decorators": [],
            "name": "stringFoo2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 440,
            "end": 443,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 453,
      "end": 473,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 453,
        "end": 472,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 453,
          "end": 459,
          "decorators": [],
          "name": "intFoo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 462,
          "end": 472,
          "decorators": [],
          "name": "stringFoo2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 483,
      "end": 503,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 483,
        "end": 502,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 483,
          "end": 493,
          "decorators": [],
          "name": "stringFoo2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 496,
          "end": 502,
          "decorators": [],
          "name": "intFoo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 515,
      "end": 605,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 556,
        "end": 605,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 571,
            "end": 603,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 574,
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
              "start": 574,
              "end": 603,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 587,
                "end": 603,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 589,
                    "end": 601,
                    "argument": {
                      "type": "Literal",
                      "start": 596,
                      "end": 600,
                      "raw": "null",
                      "value": null,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 578,
                  "end": 582,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 579,
                    "end": 582,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 581,
                      "end": 582,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 581,
                        "end": 582,
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
                "start": 583,
                "end": 586,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 585,
                  "end": 586,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 585,
                    "end": 586,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 574,
                "end": 577,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 575,
                    "end": 576,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 576,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 521,
        "end": 531,
        "decorators": [],
        "name": "StringFoo3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 543,
          "end": 555,
          "expression": {
            "type": "Identifier",
            "start": 543,
            "end": 547,
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 547,
            "end": 555,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 548,
                "end": 554
              }
            ]
          }
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 633,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 632,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 632,
            "decorators": [],
            "name": "stringFoo3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 620,
              "end": 632,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 622,
                "end": 632,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 632,
                  "decorators": [],
                  "name": "StringFoo3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
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
