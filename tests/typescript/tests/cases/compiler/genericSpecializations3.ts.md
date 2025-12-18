__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 27
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 31,
                      "end": 32
                    },
                    "typeArguments": null,
                    "start": 31,
                    "end": 32
                  },
                  "start": 29,
                  "end": 32
                },
                "start": 28,
                "end": 32
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 36
                },
                "typeArguments": null,
                "start": 35,
                "end": 36
              },
              "start": 33,
              "end": 36
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 24,
            "end": 37
          }
        ],
        "start": 18,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "iFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 55
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 56,
                      "end": 62
                    }
                  ],
                  "start": 55,
                  "end": 63
                },
                "start": 51,
                "end": 63
              },
              "start": 49,
              "end": 63
            },
            "start": 45,
            "end": 63
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 63
        }
      ],
      "declare": false,
      "start": 41,
      "end": 64
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "iFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 69
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 73
          },
          "optional": false,
          "computed": false,
          "start": 65,
          "end": 73
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 74,
            "end": 75
          }
        ],
        "optional": false,
        "start": 65,
        "end": 76
      },
      "directive": null,
      "start": 65,
      "end": 77
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IntFooBad",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 94
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 110
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 111,
                "end": 117
              }
            ],
            "start": 110,
            "end": 118
          },
          "start": 106,
          "end": 118
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 137
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 141,
                      "end": 147
                    },
                    "start": 139,
                    "end": 147
                  },
                  "start": 138,
                  "end": 147
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 150,
                  "end": 156
                },
                "start": 148,
                "end": 156
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 166,
                      "end": 170
                    },
                    "start": 159,
                    "end": 171
                  }
                ],
                "start": 157,
                "end": 173
              },
              "expression": false,
              "start": 137,
              "end": 173
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 134,
            "end": 173
          }
        ],
        "start": 119,
        "end": 175
      },
      "abstract": false,
      "declare": false,
      "start": 79,
      "end": 175
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "intFooBad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IntFooBad",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 201
                },
                "typeArguments": null,
                "start": 192,
                "end": 201
              },
              "start": 190,
              "end": 201
            },
            "start": 181,
            "end": 201
          },
          "init": null,
          "definite": false,
          "start": 181,
          "end": 201
        }
      ],
      "declare": false,
      "start": 177,
      "end": 202
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IntFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 216
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 232
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 233,
                "end": 239
              }
            ],
            "start": 232,
            "end": 240
          },
          "start": 228,
          "end": 240
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 250
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 254,
                      "end": 260
                    },
                    "start": 252,
                    "end": 260
                  },
                  "start": 251,
                  "end": 260
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 263,
                  "end": 269
                },
                "start": 261,
                "end": 269
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 279,
                      "end": 283
                    },
                    "start": 272,
                    "end": 284
                  }
                ],
                "start": 270,
                "end": 286
              },
              "expression": false,
              "start": 250,
              "end": 286
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 247,
            "end": 286
          }
        ],
        "start": 241,
        "end": 288
      },
      "abstract": false,
      "declare": false,
      "start": 204,
      "end": 288
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "intFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IntFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 308
                },
                "typeArguments": null,
                "start": 302,
                "end": 308
              },
              "start": 300,
              "end": 308
            },
            "start": 294,
            "end": 308
          },
          "init": null,
          "definite": false,
          "start": 294,
          "end": 308
        }
      ],
      "declare": false,
      "start": 290,
      "end": 309
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringFoo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 327
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 343
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 344,
                "end": 350
              }
            ],
            "start": 343,
            "end": 351
          },
          "start": 339,
          "end": 351
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 361
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 365,
                      "end": 371
                    },
                    "start": 363,
                    "end": 371
                  },
                  "start": 362,
                  "end": 371
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 374,
                  "end": 380
                },
                "start": 372,
                "end": 380
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 390,
                      "end": 394
                    },
                    "start": 383,
                    "end": 395
                  }
                ],
                "start": 381,
                "end": 397
              },
              "expression": false,
              "start": 361,
              "end": 397
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 358,
            "end": 397
          }
        ],
        "start": 352,
        "end": 399
      },
      "abstract": false,
      "declare": false,
      "start": 311,
      "end": 399
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringFoo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringFoo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 427
                },
                "typeArguments": null,
                "start": 417,
                "end": 427
              },
              "start": 415,
              "end": 427
            },
            "start": 405,
            "end": 427
          },
          "init": null,
          "definite": false,
          "start": 405,
          "end": 427
        }
      ],
      "declare": false,
      "start": 401,
      "end": 428
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringFoo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 439
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 443
          },
          "optional": false,
          "computed": false,
          "start": 429,
          "end": 443
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hm",
            "raw": "\"hm\"",
            "start": 444,
            "end": 448
          }
        ],
        "optional": false,
        "start": 429,
        "end": 449
      },
      "directive": null,
      "start": 429,
      "end": 450
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "intFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 453,
          "end": 459
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringFoo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 462,
          "end": 472
        },
        "start": 453,
        "end": 472
      },
      "directive": null,
      "start": 453,
      "end": 473
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringFoo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 483,
          "end": 493
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "intFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 496,
          "end": 502
        },
        "start": 483,
        "end": 502
      },
      "directive": null,
      "start": 483,
      "end": 503
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringFoo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 521,
        "end": 531
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 547
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 548,
                "end": 554
              }
            ],
            "start": 547,
            "end": 555
          },
          "start": 543,
          "end": 555
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 574
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 575,
                      "end": 576
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 575,
                    "end": 576
                  }
                ],
                "start": 574,
                "end": 577
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 581,
                        "end": 582
                      },
                      "typeArguments": null,
                      "start": 581,
                      "end": 582
                    },
                    "start": 579,
                    "end": 582
                  },
                  "start": 578,
                  "end": 582
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 585,
                    "end": 586
                  },
                  "typeArguments": null,
                  "start": 585,
                  "end": 586
                },
                "start": 583,
                "end": 586
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 596,
                      "end": 600
                    },
                    "start": 589,
                    "end": 601
                  }
                ],
                "start": 587,
                "end": 603
              },
              "expression": false,
              "start": 574,
              "end": 603
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 571,
            "end": 603
          }
        ],
        "start": 556,
        "end": 605
      },
      "abstract": false,
      "declare": false,
      "start": 515,
      "end": 605
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringFoo3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringFoo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 622,
                  "end": 632
                },
                "typeArguments": null,
                "start": 622,
                "end": 632
              },
              "start": 620,
              "end": 632
            },
            "start": 610,
            "end": 632
          },
          "init": null,
          "definite": false,
          "start": 610,
          "end": 632
        }
      ],
      "declare": false,
      "start": 606,
      "end": 633
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 633
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 41,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "iFoo",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "iFoo",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "IntFooBad",
    "start": 85,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 95,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 159,
    "end": 165
  },
  {
    "type": "Null",
    "value": "null",
    "start": 166,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "intFooBad",
    "start": 181,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "IntFooBad",
    "start": 192,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 204,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "IntFoo",
    "start": 210,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 217,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 272,
    "end": 278
  },
  {
    "type": "Null",
    "value": "null",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "intFoo",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "IntFoo",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 311,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "StringFoo2",
    "start": 317,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 328,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 358,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 383,
    "end": 389
  },
  {
    "type": "Null",
    "value": "null",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 401,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "stringFoo2",
    "start": 405,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "StringFoo2",
    "start": 417,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "stringFoo2",
    "start": 429,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "String",
    "value": "\"hm\"",
    "start": 444,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "intFoo",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "stringFoo2",
    "start": 462,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "stringFoo2",
    "start": 483,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "intFoo",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 515,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "StringFoo3",
    "start": 521,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 532,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 543,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 571,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 589,
    "end": 595
  },
  {
    "type": "Null",
    "value": "null",
    "start": 596,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "stringFoo3",
    "start": 610,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "StringFoo3",
    "start": 622,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  }
]
```
