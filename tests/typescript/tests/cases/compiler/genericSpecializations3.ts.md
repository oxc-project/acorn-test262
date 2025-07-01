__ESTREE_TEST__:PASS:
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
