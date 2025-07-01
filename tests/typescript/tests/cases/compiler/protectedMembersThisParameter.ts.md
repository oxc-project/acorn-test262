__ESTREE_TEST__:PASS:
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
