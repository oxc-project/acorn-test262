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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "IFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 39,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 24,
            "end": 37,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 28,
                "end": 32,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 29,
                  "end": 32,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 31,
                    "end": 32,
                    "typeName": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
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
              "start": 33,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 36,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 63,
            "name": "iFoo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 51,
                "end": 63,
                "typeName": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 55,
                  "name": "IFoo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
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
      "start": 65,
      "end": 77,
      "expression": {
        "type": "CallExpression",
        "start": 65,
        "end": 76,
        "callee": {
          "type": "MemberExpression",
          "start": 65,
          "end": 73,
          "object": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "name": "iFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 73,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 74,
            "end": 75,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 79,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 94,
        "name": "IntFooBad",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 119,
        "end": 175,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 134,
            "end": 173,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 137,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 137,
              "end": 173,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 138,
                  "end": 147,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 141,
                      "end": 147
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                "start": 148,
                "end": 156,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 150,
                  "end": 156
                }
              }
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 106,
          "end": 118,
          "expression": {
            "type": "Identifier",
            "start": 106,
            "end": 110,
            "name": "IFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 201,
            "name": "intFooBad",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 190,
              "end": 201,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 192,
                "end": 201,
                "typeName": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 201,
                  "name": "IntFooBad",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 204,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 216,
        "name": "IntFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 241,
        "end": 288,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 247,
            "end": 286,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 250,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 250,
              "end": 286,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 251,
                  "end": 260,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 252,
                    "end": 260,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 254,
                      "end": 260
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                "start": 261,
                "end": 269,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 263,
                  "end": 269
                }
              }
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 228,
          "end": 240,
          "expression": {
            "type": "Identifier",
            "start": 228,
            "end": 232,
            "name": "IFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 308,
            "name": "intFoo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 300,
              "end": 308,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 302,
                "end": 308,
                "typeName": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 308,
                  "name": "IntFoo",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 311,
      "end": 399,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 327,
        "name": "StringFoo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 352,
        "end": 399,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 358,
            "end": 397,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 358,
              "end": 361,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 397,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 371,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 363,
                    "end": 371,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 365,
                      "end": 371
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                "start": 372,
                "end": 380,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 374,
                  "end": 380
                }
              }
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 339,
          "end": 351,
          "expression": {
            "type": "Identifier",
            "start": 339,
            "end": 343,
            "name": "IFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 427,
            "name": "stringFoo2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 427,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 417,
                "end": 427,
                "typeName": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 427,
                  "name": "StringFoo2",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 429,
      "end": 450,
      "expression": {
        "type": "CallExpression",
        "start": 429,
        "end": 449,
        "callee": {
          "type": "MemberExpression",
          "start": 429,
          "end": 443,
          "object": {
            "type": "Identifier",
            "start": 429,
            "end": 439,
            "name": "stringFoo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 440,
            "end": 443,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 444,
            "end": 448,
            "value": "hm",
            "raw": "\"hm\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 453,
      "end": 473,
      "expression": {
        "type": "AssignmentExpression",
        "start": 453,
        "end": 472,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 453,
          "end": 459,
          "name": "intFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 462,
          "end": 472,
          "name": "stringFoo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 483,
      "end": 503,
      "expression": {
        "type": "AssignmentExpression",
        "start": 483,
        "end": 502,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 483,
          "end": 493,
          "name": "stringFoo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 496,
          "end": 502,
          "name": "intFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 515,
      "end": 605,
      "id": {
        "type": "Identifier",
        "start": 521,
        "end": 531,
        "name": "StringFoo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 556,
        "end": 605,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 571,
            "end": 603,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 571,
              "end": 574,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 574,
              "end": 603,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 578,
                  "end": 582,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 579,
                    "end": 582,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 581,
                      "end": 582,
                      "typeName": {
                        "type": "Identifier",
                        "start": 581,
                        "end": 582,
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 574,
                "end": 577,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 575,
                    "end": 576,
                    "name": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 576,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 583,
                "end": 586,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 585,
                  "end": 586,
                  "typeName": {
                    "type": "Identifier",
                    "start": 585,
                    "end": 586,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 543,
          "end": 555,
          "expression": {
            "type": "Identifier",
            "start": 543,
            "end": 547,
            "name": "IFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 632,
            "name": "stringFoo3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 620,
              "end": 632,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 622,
                "end": 632,
                "typeName": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 632,
                  "name": "StringFoo3",
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
          "init": null,
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
