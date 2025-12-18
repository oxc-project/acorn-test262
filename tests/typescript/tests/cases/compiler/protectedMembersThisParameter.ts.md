__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Message",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "secret",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 34
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 38,
                  "end": 42
                },
                "start": 36,
                "end": 42
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 43,
                "end": 45
              },
              "expression": false,
              "start": 34,
              "end": 45
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 18,
            "end": 45
          }
        ],
        "start": 14,
        "end": 47
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MessageWrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 68
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 80
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 89
                },
                "typeArguments": null,
                "start": 82,
                "end": 89
              },
              "start": 80,
              "end": 89
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 103
              },
              "typeArguments": null,
              "arguments": [],
              "start": 92,
              "end": 105
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 73,
            "end": 106
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrap",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 113
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
                      "start": 114,
                      "end": 115
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 114,
                    "end": 115
                  }
                ],
                "start": 113,
                "end": 116
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 130
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 133,
                            "end": 137
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "message",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 138,
                            "end": 145
                          },
                          "optional": false,
                          "computed": false,
                          "start": 133,
                          "end": 145
                        },
                        "definite": false,
                        "start": 129,
                        "end": 145
                      }
                    ],
                    "declare": false,
                    "start": 125,
                    "end": 146
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 155,
                          "end": 156
                        },
                        "init": {
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
                              "name": "this",
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
                                    "start": 174,
                                    "end": 175
                                  },
                                  "typeArguments": null,
                                  "start": 174,
                                  "end": 175
                                },
                                "start": 172,
                                "end": 175
                              },
                              "start": 168,
                              "end": 175
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 185,
                                      "end": 186
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "secret",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 187,
                                      "end": 193
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 185,
                                    "end": 193
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 185,
                                  "end": 195
                                },
                                "directive": null,
                                "start": 185,
                                "end": 196
                              }
                            ],
                            "start": 177,
                            "end": 218
                          },
                          "expression": false,
                          "start": 159,
                          "end": 218
                        },
                        "definite": false,
                        "start": 155,
                        "end": 218
                      }
                    ],
                    "declare": false,
                    "start": 151,
                    "end": 218
                  }
                ],
                "start": 119,
                "end": 222
              },
              "expression": false,
              "start": 113,
              "end": 222
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 109,
            "end": 222
          }
        ],
        "start": 69,
        "end": 224
      },
      "abstract": false,
      "declare": false,
      "start": 48,
      "end": 224
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 233
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 249
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 252,
                "end": 254
              },
              "expression": false,
              "start": 249,
              "end": 254
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 238,
            "end": 254
          }
        ],
        "start": 234,
        "end": 256
      },
      "abstract": false,
      "declare": false,
      "start": 226,
      "end": 256
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 264
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 274
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 290
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 293,
                "end": 295
              },
              "expression": false,
              "start": 290,
              "end": 295
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 279,
            "end": 295
          }
        ],
        "start": 275,
        "end": 297
      },
      "abstract": false,
      "declare": false,
      "start": 257,
      "end": 297
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 304,
        "end": 305
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 315
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 334,
                "end": 336
              },
              "expression": false,
              "start": 331,
              "end": 336
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 320,
            "end": 336
          }
        ],
        "start": 316,
        "end": 338
      },
      "abstract": false,
      "declare": false,
      "start": 298,
      "end": 338
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 346
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 362
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 365,
                "end": 367
              },
              "expression": false,
              "start": 362,
              "end": 367
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 351,
            "end": 367
          }
        ],
        "start": 347,
        "end": 369
      },
      "abstract": false,
      "declare": false,
      "start": 339,
      "end": 369
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bA",
        "optional": false,
        "typeAnnotation": null,
        "start": 380,
        "end": 382
      },
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
              "start": 383,
              "end": 384
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 394
              },
              "typeArguments": null,
              "start": 393,
              "end": 394
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 383,
            "end": 394
          }
        ],
        "start": 382,
        "end": 395
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                "start": 402,
                "end": 403
              },
              "typeArguments": null,
              "start": 402,
              "end": 403
            },
            "start": 400,
            "end": 403
          },
          "start": 396,
          "end": 403
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 411
              },
              "typeArguments": null,
              "start": 410,
              "end": 411
            },
            "start": 408,
            "end": 411
          },
          "start": 405,
          "end": 411
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 417,
                  "end": 421
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 423
                },
                "optional": false,
                "computed": false,
                "start": 417,
                "end": 423
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 417,
              "end": 425
            },
            "directive": null,
            "start": 417,
            "end": 426
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 432
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 434
                },
                "optional": false,
                "computed": false,
                "start": 429,
                "end": 434
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 429,
              "end": 436
            },
            "directive": null,
            "start": 429,
            "end": 437
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 443
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 444,
                  "end": 445
                },
                "optional": false,
                "computed": false,
                "start": 440,
                "end": 445
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 440,
              "end": 447
            },
            "directive": null,
            "start": 440,
            "end": 448
          }
        ],
        "start": 413,
        "end": 601
      },
      "expression": false,
      "start": 371,
      "end": 601
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bB",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 613
      },
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
              "start": 614,
              "end": 615
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 625
              },
              "typeArguments": null,
              "start": 624,
              "end": 625
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 614,
            "end": 625
          }
        ],
        "start": 613,
        "end": 626
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                "start": 633,
                "end": 634
              },
              "typeArguments": null,
              "start": 633,
              "end": 634
            },
            "start": 631,
            "end": 634
          },
          "start": 627,
          "end": 634
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 642
              },
              "typeArguments": null,
              "start": 641,
              "end": 642
            },
            "start": 639,
            "end": 642
          },
          "start": 636,
          "end": 642
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 648,
                  "end": 652
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 653,
                  "end": 654
                },
                "optional": false,
                "computed": false,
                "start": 648,
                "end": 654
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 648,
              "end": 656
            },
            "directive": null,
            "start": 648,
            "end": 657
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 660,
                  "end": 664
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 666
                },
                "optional": false,
                "computed": false,
                "start": 660,
                "end": 666
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 660,
              "end": 668
            },
            "directive": null,
            "start": 660,
            "end": 669
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 675
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 677
                },
                "optional": false,
                "computed": false,
                "start": 672,
                "end": 677
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 672,
              "end": 679
            },
            "directive": null,
            "start": 672,
            "end": 680
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 683,
                  "end": 686
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 688
                },
                "optional": false,
                "computed": false,
                "start": 683,
                "end": 688
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 683,
              "end": 690
            },
            "directive": null,
            "start": 683,
            "end": 691
          }
        ],
        "start": 644,
        "end": 693
      },
      "expression": false,
      "start": 602,
      "end": 693
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bC",
        "optional": false,
        "typeAnnotation": null,
        "start": 703,
        "end": 705
      },
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
              "start": 706,
              "end": 707
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 716,
                "end": 717
              },
              "typeArguments": null,
              "start": 716,
              "end": 717
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 706,
            "end": 717
          }
        ],
        "start": 705,
        "end": 718
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                "start": 725,
                "end": 726
              },
              "typeArguments": null,
              "start": 725,
              "end": 726
            },
            "start": 723,
            "end": 726
          },
          "start": 719,
          "end": 726
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 734
              },
              "typeArguments": null,
              "start": 733,
              "end": 734
            },
            "start": 731,
            "end": 734
          },
          "start": 728,
          "end": 734
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 740,
                  "end": 744
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 745,
                  "end": 746
                },
                "optional": false,
                "computed": false,
                "start": 740,
                "end": 746
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 740,
              "end": 748
            },
            "directive": null,
            "start": 740,
            "end": 749
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 752,
                  "end": 756
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 757,
                  "end": 758
                },
                "optional": false,
                "computed": false,
                "start": 752,
                "end": 758
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 752,
              "end": 760
            },
            "directive": null,
            "start": 752,
            "end": 761
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 764,
                  "end": 767
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 769
                },
                "optional": false,
                "computed": false,
                "start": 764,
                "end": 769
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 764,
              "end": 771
            },
            "directive": null,
            "start": 764,
            "end": 772
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 794
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 795,
                  "end": 796
                },
                "optional": false,
                "computed": false,
                "start": 791,
                "end": 796
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 791,
              "end": 798
            },
            "directive": null,
            "start": 791,
            "end": 799
          }
        ],
        "start": 736,
        "end": 817
      },
      "expression": false,
      "start": 694,
      "end": 817
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bZ",
        "optional": false,
        "typeAnnotation": null,
        "start": 827,
        "end": 829
      },
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
              "start": 830,
              "end": 831
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 841
              },
              "typeArguments": null,
              "start": 840,
              "end": 841
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 830,
            "end": 841
          }
        ],
        "start": 829,
        "end": 842
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                "start": 849,
                "end": 850
              },
              "typeArguments": null,
              "start": 849,
              "end": 850
            },
            "start": 847,
            "end": 850
          },
          "start": 843,
          "end": 850
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 857,
                "end": 858
              },
              "typeArguments": null,
              "start": 857,
              "end": 858
            },
            "start": 855,
            "end": 858
          },
          "start": 852,
          "end": 858
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 864,
                  "end": 868
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 869,
                  "end": 870
                },
                "optional": false,
                "computed": false,
                "start": 864,
                "end": 870
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 864,
              "end": 872
            },
            "directive": null,
            "start": 864,
            "end": 873
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 876,
                  "end": 879
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 880,
                  "end": 881
                },
                "optional": false,
                "computed": false,
                "start": 876,
                "end": 881
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 876,
              "end": 883
            },
            "directive": null,
            "start": 876,
            "end": 884
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 903,
                  "end": 906
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 907,
                  "end": 908
                },
                "optional": false,
                "computed": false,
                "start": 903,
                "end": 908
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 903,
              "end": 910
            },
            "directive": null,
            "start": 903,
            "end": 911
          }
        ],
        "start": 860,
        "end": 929
      },
      "expression": false,
      "start": 818,
      "end": 929
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bString",
        "optional": false,
        "typeAnnotation": null,
        "start": 939,
        "end": 946
      },
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
              "start": 947,
              "end": 948
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 957,
              "end": 963
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 947,
            "end": 963
          }
        ],
        "start": 946,
        "end": 964
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                "start": 971,
                "end": 972
              },
              "typeArguments": null,
              "start": 971,
              "end": 972
            },
            "start": 969,
            "end": 972
          },
          "start": 965,
          "end": 972
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 979,
                "end": 980
              },
              "typeArguments": null,
              "start": 979,
              "end": 980
            },
            "start": 977,
            "end": 980
          },
          "start": 974,
          "end": 980
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 986,
                  "end": 990
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 991,
                  "end": 1002
                },
                "optional": false,
                "computed": false,
                "start": 986,
                "end": 1002
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 986,
              "end": 1004
            },
            "directive": null,
            "start": 986,
            "end": 1005
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1008,
                  "end": 1011
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1012,
                  "end": 1013
                },
                "optional": false,
                "computed": false,
                "start": 1008,
                "end": 1013
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1008,
              "end": 1015
            },
            "directive": null,
            "start": 1008,
            "end": 1016
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1035,
                  "end": 1038
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1040
                },
                "optional": false,
                "computed": false,
                "start": 1035,
                "end": 1040
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1035,
              "end": 1042
            },
            "directive": null,
            "start": 1035,
            "end": 1043
          }
        ],
        "start": 982,
        "end": 1061
      },
      "expression": false,
      "start": 930,
      "end": 1061
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 1071,
        "end": 1075
      },
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
              "start": 1076,
              "end": 1077
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1076,
            "end": 1077
          }
        ],
        "start": 1075,
        "end": 1078
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
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
                "start": 1085,
                "end": 1086
              },
              "typeArguments": null,
              "start": 1085,
              "end": 1086
            },
            "start": 1083,
            "end": 1086
          },
          "start": 1079,
          "end": 1086
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1094
              },
              "typeArguments": null,
              "start": 1093,
              "end": 1094
            },
            "start": 1091,
            "end": 1094
          },
          "start": 1088,
          "end": 1094
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1100,
                  "end": 1103
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1104,
                  "end": 1105
                },
                "optional": false,
                "computed": false,
                "start": 1100,
                "end": 1105
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1100,
              "end": 1107
            },
            "directive": null,
            "start": 1100,
            "end": 1108
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1127,
                  "end": 1130
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1131,
                  "end": 1132
                },
                "optional": false,
                "computed": false,
                "start": 1127,
                "end": 1132
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1127,
              "end": 1134
            },
            "directive": null,
            "start": 1127,
            "end": 1135
          }
        ],
        "start": 1096,
        "end": 1153
      },
      "expression": false,
      "start": 1062,
      "end": 1153
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1161,
        "end": 1162
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1177,
              "end": 1178
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1181,
                "end": 1183
              },
              "expression": false,
              "start": 1178,
              "end": 1183
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 1167,
            "end": 1183
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1187,
              "end": 1195
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1201,
                        "end": 1203
                      },
                      "typeArguments": null,
                      "start": 1201,
                      "end": 1203
                    },
                    "start": 1199,
                    "end": 1203
                  },
                  "start": 1196,
                  "end": 1203
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1211,
                          "end": 1214
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1215,
                          "end": 1216
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1211,
                        "end": 1216
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1211,
                      "end": 1218
                    },
                    "directive": null,
                    "start": 1211,
                    "end": 1219
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1224,
                          "end": 1227
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1228,
                          "end": 1230
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1224,
                        "end": 1230
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1224,
                      "end": 1232
                    },
                    "directive": null,
                    "start": 1224,
                    "end": 1233
                  }
                ],
                "start": 1205,
                "end": 1253
              },
              "expression": false,
              "start": 1195,
              "end": 1253
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1187,
            "end": 1253
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived1ThisD",
              "optional": false,
              "typeAnnotation": null,
              "start": 1256,
              "end": 1269
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1276,
                        "end": 1277
                      },
                      "typeArguments": null,
                      "start": 1276,
                      "end": 1277
                    },
                    "start": 1274,
                    "end": 1277
                  },
                  "start": 1270,
                  "end": 1277
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1284,
                        "end": 1286
                      },
                      "typeArguments": null,
                      "start": 1284,
                      "end": 1286
                    },
                    "start": 1282,
                    "end": 1286
                  },
                  "start": 1279,
                  "end": 1286
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1294,
                          "end": 1297
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1298,
                          "end": 1299
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1294,
                        "end": 1299
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1294,
                      "end": 1301
                    },
                    "directive": null,
                    "start": 1294,
                    "end": 1302
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1307,
                          "end": 1310
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1311,
                          "end": 1313
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1307,
                        "end": 1313
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1307,
                      "end": 1315
                    },
                    "directive": null,
                    "start": 1307,
                    "end": 1316
                  }
                ],
                "start": 1288,
                "end": 1336
              },
              "expression": false,
              "start": 1269,
              "end": 1336
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1256,
            "end": 1336
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived1ThisD1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1339,
              "end": 1353
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1360,
                        "end": 1362
                      },
                      "typeArguments": null,
                      "start": 1360,
                      "end": 1362
                    },
                    "start": 1358,
                    "end": 1362
                  },
                  "start": 1354,
                  "end": 1362
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1369,
                        "end": 1371
                      },
                      "typeArguments": null,
                      "start": 1369,
                      "end": 1371
                    },
                    "start": 1367,
                    "end": 1371
                  },
                  "start": 1364,
                  "end": 1371
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1379,
                          "end": 1382
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1383,
                          "end": 1384
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1379,
                        "end": 1384
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1379,
                      "end": 1386
                    },
                    "directive": null,
                    "start": 1379,
                    "end": 1387
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1392,
                          "end": 1395
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1396,
                          "end": 1398
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1392,
                        "end": 1398
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1392,
                      "end": 1400
                    },
                    "directive": null,
                    "start": 1392,
                    "end": 1401
                  }
                ],
                "start": 1373,
                "end": 1405
              },
              "expression": false,
              "start": 1353,
              "end": 1405
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1339,
            "end": 1405
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1409,
              "end": 1417
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1423,
                        "end": 1425
                      },
                      "typeArguments": null,
                      "start": 1423,
                      "end": 1425
                    },
                    "start": 1421,
                    "end": 1425
                  },
                  "start": 1418,
                  "end": 1425
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1433,
                          "end": 1436
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1437,
                          "end": 1438
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1433,
                        "end": 1438
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1433,
                      "end": 1440
                    },
                    "directive": null,
                    "start": 1433,
                    "end": 1441
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1497,
                          "end": 1500
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1501,
                          "end": 1503
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1497,
                        "end": 1503
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1497,
                      "end": 1505
                    },
                    "directive": null,
                    "start": 1497,
                    "end": 1506
                  }
                ],
                "start": 1427,
                "end": 1526
              },
              "expression": false,
              "start": 1417,
              "end": 1526
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1409,
            "end": 1526
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived2ThisD",
              "optional": false,
              "typeAnnotation": null,
              "start": 1529,
              "end": 1542
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1549,
                        "end": 1550
                      },
                      "typeArguments": null,
                      "start": 1549,
                      "end": 1550
                    },
                    "start": 1547,
                    "end": 1550
                  },
                  "start": 1543,
                  "end": 1550
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1557,
                        "end": 1559
                      },
                      "typeArguments": null,
                      "start": 1557,
                      "end": 1559
                    },
                    "start": 1555,
                    "end": 1559
                  },
                  "start": 1552,
                  "end": 1559
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1567,
                          "end": 1570
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1571,
                          "end": 1572
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1567,
                        "end": 1572
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1567,
                      "end": 1574
                    },
                    "directive": null,
                    "start": 1567,
                    "end": 1575
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1631,
                          "end": 1634
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1635,
                          "end": 1637
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1631,
                        "end": 1637
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1631,
                      "end": 1639
                    },
                    "directive": null,
                    "start": 1631,
                    "end": 1640
                  }
                ],
                "start": 1561,
                "end": 1660
              },
              "expression": false,
              "start": 1542,
              "end": 1660
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1529,
            "end": 1660
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "derived2ThisD2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1663,
              "end": 1677
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1684,
                        "end": 1686
                      },
                      "typeArguments": null,
                      "start": 1684,
                      "end": 1686
                    },
                    "start": 1682,
                    "end": 1686
                  },
                  "start": 1678,
                  "end": 1686
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1693,
                        "end": 1695
                      },
                      "typeArguments": null,
                      "start": 1693,
                      "end": 1695
                    },
                    "start": 1691,
                    "end": 1695
                  },
                  "start": 1688,
                  "end": 1695
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1703,
                          "end": 1706
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1707,
                          "end": 1708
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1703,
                        "end": 1708
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1703,
                      "end": 1710
                    },
                    "directive": null,
                    "start": 1703,
                    "end": 1711
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1716,
                          "end": 1719
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1720,
                          "end": 1722
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1716,
                        "end": 1722
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1716,
                      "end": 1724
                    },
                    "directive": null,
                    "start": 1716,
                    "end": 1725
                  }
                ],
                "start": 1697,
                "end": 1729
              },
              "expression": false,
              "start": 1677,
              "end": 1729
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1663,
            "end": 1729
          }
        ],
        "start": 1163,
        "end": 1731
      },
      "abstract": false,
      "declare": false,
      "start": 1155,
      "end": 1731
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1738,
        "end": 1740
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1749,
        "end": 1750
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1765,
              "end": 1767
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1770,
                "end": 1772
              },
              "expression": false,
              "start": 1767,
              "end": 1772
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 1755,
            "end": 1772
          }
        ],
        "start": 1751,
        "end": 1774
      },
      "abstract": false,
      "declare": false,
      "start": 1732,
      "end": 1774
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1781,
        "end": 1783
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1792,
        "end": 1793
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1808,
              "end": 1809
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1812,
                "end": 1814
              },
              "expression": false,
              "start": 1809,
              "end": 1814
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 1798,
            "end": 1814
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1827,
              "end": 1829
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1832,
                "end": 1834
              },
              "expression": false,
              "start": 1829,
              "end": 1834
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 1817,
            "end": 1834
          }
        ],
        "start": 1794,
        "end": 1836
      },
      "abstract": false,
      "declare": false,
      "start": 1775,
      "end": 1836
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1837
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 6,
    "end": 13,
    "range": [
      6,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 18,
    "end": 27,
    "range": [
      18,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "secret",
    "start": 28,
    "end": 34,
    "range": [
      28,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 38,
    "end": 42,
    "range": [
      38,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 48,
    "end": 53,
    "range": [
      48,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "MessageWrapper",
    "start": 54,
    "end": 68,
    "range": [
      54,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 73,
    "end": 80,
    "range": [
      73,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 82,
    "end": 89,
    "range": [
      82,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 92,
    "end": 95,
    "range": [
      92,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 96,
    "end": 103,
    "range": [
      96,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 109,
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 125,
    "end": 128,
    "range": [
      125,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 133,
    "end": 137,
    "range": [
      133,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 138,
    "end": 145,
    "range": [
      138,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 151,
    "end": 154,
    "range": [
      151,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 159,
    "end": 167,
    "range": [
      159,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 168,
    "end": 172,
    "range": [
      168,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "secret",
    "start": 187,
    "end": 193,
    "range": [
      187,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 226,
    "end": 231,
    "range": [
      226,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 238,
    "end": 247,
    "range": [
      238,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 257,
    "end": 262,
    "range": [
      257,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 265,
    "end": 272,
    "range": [
      265,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 279,
    "end": 288,
    "range": [
      279,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 298,
    "end": 303,
    "range": [
      298,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 306,
    "end": 313,
    "range": [
      306,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 320,
    "end": 329,
    "range": [
      320,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 339,
    "end": 344,
    "range": [
      339,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 351,
    "end": 360,
    "range": [
      351,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 371,
    "end": 379,
    "range": [
      371,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "bA",
    "start": 380,
    "end": 382,
    "range": [
      380,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 385,
    "end": 392,
    "range": [
      385,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 396,
    "end": 400,
    "range": [
      396,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 405,
    "end": 408,
    "range": [
      405,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 417,
    "end": 421,
    "range": [
      417,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 429,
    "end": 432,
    "range": [
      429,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 440,
    "end": 443,
    "range": [
      440,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 602,
    "end": 610,
    "range": [
      602,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "bB",
    "start": 611,
    "end": 613,
    "range": [
      611,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 616,
    "end": 623,
    "range": [
      616,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 627,
    "end": 631,
    "range": [
      627,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 636,
    "end": 639,
    "range": [
      636,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 648,
    "end": 652,
    "range": [
      648,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 660,
    "end": 664,
    "range": [
      660,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 672,
    "end": 675,
    "range": [
      672,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 683,
    "end": 686,
    "range": [
      683,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 694,
    "end": 702,
    "range": [
      694,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "bC",
    "start": 703,
    "end": 705,
    "range": [
      703,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 708,
    "end": 715,
    "range": [
      708,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 719,
    "end": 723,
    "range": [
      719,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 728,
    "end": 731,
    "range": [
      728,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 740,
    "end": 744,
    "range": [
      740,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 752,
    "end": 756,
    "range": [
      752,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 764,
    "end": 767,
    "range": [
      764,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 791,
    "end": 794,
    "range": [
      791,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 818,
    "end": 826,
    "range": [
      818,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "bZ",
    "start": 827,
    "end": 829,
    "range": [
      827,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 832,
    "end": 839,
    "range": [
      832,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 843,
    "end": 847,
    "range": [
      843,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 852,
    "end": 855,
    "range": [
      852,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 864,
    "end": 868,
    "range": [
      864,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 876,
    "end": 879,
    "range": [
      876,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 903,
    "end": 906,
    "range": [
      903,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 930,
    "end": 938,
    "range": [
      930,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "bString",
    "start": 939,
    "end": 946,
    "range": [
      939,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 949,
    "end": 956,
    "range": [
      949,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 957,
    "end": 963,
    "range": [
      957,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 965,
    "end": 969,
    "range": [
      965,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 974,
    "end": 977,
    "range": [
      974,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 986,
    "end": 990,
    "range": [
      986,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 991,
    "end": 1002,
    "range": [
      991,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1008,
    "end": 1011,
    "range": [
      1008,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1035,
    "end": 1038,
    "range": [
      1035,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1062,
    "end": 1070,
    "range": [
      1062,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "bAny",
    "start": 1071,
    "end": 1075,
    "range": [
      1071,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1079,
    "end": 1083,
    "range": [
      1079,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1088,
    "end": 1091,
    "range": [
      1088,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1100,
    "end": 1103,
    "range": [
      1100,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1127,
    "end": 1130,
    "range": [
      1127,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1155,
    "end": 1160,
    "range": [
      1155,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1167,
    "end": 1176,
    "range": [
      1167,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Identifier",
    "value": "derived1",
    "start": 1187,
    "end": 1195,
    "range": [
      1187,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1196,
    "end": 1199,
    "range": [
      1196,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 1201,
    "end": 1203,
    "range": [
      1201,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1211,
    "end": 1214,
    "range": [
      1211,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1224,
    "end": 1227,
    "range": [
      1224,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1228,
    "end": 1230,
    "range": [
      1228,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "derived1ThisD",
    "start": 1256,
    "end": 1269,
    "range": [
      1256,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1270,
    "end": 1274,
    "range": [
      1270,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1279,
    "end": 1282,
    "range": [
      1279,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 1284,
    "end": 1286,
    "range": [
      1284,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1294,
    "end": 1297,
    "range": [
      1294,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1307,
    "end": 1310,
    "range": [
      1307,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1311,
    "end": 1313,
    "range": [
      1311,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "derived1ThisD1",
    "start": 1339,
    "end": 1353,
    "range": [
      1339,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1354,
    "end": 1358,
    "range": [
      1354,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 1360,
    "end": 1362,
    "range": [
      1360,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1364,
    "end": 1367,
    "range": [
      1364,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 1369,
    "end": 1371,
    "range": [
      1369,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1379,
    "end": 1382,
    "range": [
      1379,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1392,
    "end": 1395,
    "range": [
      1392,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1396,
    "end": 1398,
    "range": [
      1396,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Identifier",
    "value": "derived2",
    "start": 1409,
    "end": 1417,
    "range": [
      1409,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1418,
    "end": 1421,
    "range": [
      1418,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 1423,
    "end": 1425,
    "range": [
      1423,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1433,
    "end": 1436,
    "range": [
      1433,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1497,
    "end": 1500,
    "range": [
      1497,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1501,
    "end": 1503,
    "range": [
      1501,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Identifier",
    "value": "derived2ThisD",
    "start": 1529,
    "end": 1542,
    "range": [
      1529,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1543,
    "end": 1547,
    "range": [
      1543,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1552,
    "end": 1555,
    "range": [
      1552,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 1557,
    "end": 1559,
    "range": [
      1557,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1567,
    "end": 1570,
    "range": [
      1567,
      1570
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1631,
    "end": 1634,
    "range": [
      1631,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1635,
    "end": 1637,
    "range": [
      1635,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "derived2ThisD2",
    "start": 1663,
    "end": 1677,
    "range": [
      1663,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1678,
    "end": 1682,
    "range": [
      1678,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 1684,
    "end": 1686,
    "range": [
      1684,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1688,
    "end": 1691,
    "range": [
      1688,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 1693,
    "end": 1695,
    "range": [
      1693,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1703,
    "end": 1706,
    "range": [
      1703,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1708,
    "end": 1709,
    "range": [
      1708,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1716,
    "end": 1719,
    "range": [
      1716,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1720,
    "end": 1722,
    "range": [
      1720,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1732,
    "end": 1737,
    "range": [
      1732,
      1737
    ]
  },
  {
    "type": "Identifier",
    "value": "D1",
    "start": 1738,
    "end": 1740,
    "range": [
      1738,
      1740
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1741,
    "end": 1748,
    "range": [
      1741,
      1748
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1755,
    "end": 1764,
    "range": [
      1755,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1765,
    "end": 1767,
    "range": [
      1765,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1775,
    "end": 1780,
    "range": [
      1775,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 1781,
    "end": 1783,
    "range": [
      1781,
      1783
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1784,
    "end": 1791,
    "range": [
      1784,
      1791
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1798,
    "end": 1807,
    "range": [
      1798,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1817,
    "end": 1826,
    "range": [
      1817,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1827,
    "end": 1829,
    "range": [
      1827,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  }
]
```
