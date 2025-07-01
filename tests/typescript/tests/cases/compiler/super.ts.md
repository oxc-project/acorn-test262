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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 28
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
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 45,
                          "end": 46
                        },
                        "init": null,
                        "definite": false,
                        "start": 45,
                        "end": 46
                      }
                    ],
                    "declare": false,
                    "start": 41,
                    "end": 47
                  }
                ],
                "start": 31,
                "end": 53
              },
              "expression": false,
              "start": 28,
              "end": 53
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 53
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 68
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "base",
                      "raw": "\"base\"",
                      "start": 88,
                      "end": 94
                    },
                    "start": 81,
                    "end": 95
                  }
                ],
                "start": 71,
                "end": 101
              },
              "expression": false,
              "start": 68,
              "end": 101
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 58,
            "end": 101
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 117
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "basebar",
                      "raw": "\"basebar\"",
                      "start": 137,
                      "end": 146
                    },
                    "start": 130,
                    "end": 147
                  }
                ],
                "start": 120,
                "end": 153
              },
              "expression": false,
              "start": 117,
              "end": 153
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 107,
            "end": 153
          }
        ],
        "start": 11,
        "end": 155
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 155
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 167
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 180
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 197
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "sub1",
                          "raw": "\"sub1\"",
                          "start": 217,
                          "end": 223
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 226,
                              "end": 231
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 232,
                              "end": 235
                            },
                            "optional": false,
                            "computed": false,
                            "start": 226,
                            "end": 235
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 226,
                          "end": 237
                        },
                        "start": 217,
                        "end": 237
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 240,
                            "end": 245
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 246,
                            "end": 249
                          },
                          "optional": false,
                          "computed": false,
                          "start": 240,
                          "end": 249
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 240,
                        "end": 251
                      },
                      "start": 217,
                      "end": 251
                    },
                    "start": 210,
                    "end": 252
                  }
                ],
                "start": 200,
                "end": 258
              },
              "expression": false,
              "start": 197,
              "end": 258
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 187,
            "end": 258
          }
        ],
        "start": 181,
        "end": 260
      },
      "abstract": false,
      "declare": false,
      "start": 157,
      "end": 260
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubSub1",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 276
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sub1",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 289
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 306
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "subsub1",
                        "raw": "\"subsub1\"",
                        "start": 326,
                        "end": 335
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 338,
                            "end": 343
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 344,
                            "end": 347
                          },
                          "optional": false,
                          "computed": false,
                          "start": 338,
                          "end": 347
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 338,
                        "end": 349
                      },
                      "start": 326,
                      "end": 349
                    },
                    "start": 319,
                    "end": 350
                  }
                ],
                "start": 309,
                "end": 356
              },
              "expression": false,
              "start": 306,
              "end": 356
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 296,
            "end": 356
          }
        ],
        "start": 290,
        "end": 358
      },
      "abstract": false,
      "declare": false,
      "start": 263,
      "end": 358
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 371
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 388
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
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 401,
                          "end": 406
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 407,
                          "end": 410
                        },
                        "optional": false,
                        "computed": false,
                        "start": 401,
                        "end": 410
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 401,
                      "end": 412
                    },
                    "directive": null,
                    "start": 401,
                    "end": 413
                  }
                ],
                "start": 391,
                "end": 419
              },
              "expression": false,
              "start": 388,
              "end": 419
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 378,
            "end": 419
          }
        ],
        "start": 372,
        "end": 421
      },
      "abstract": false,
      "declare": false,
      "start": 360,
      "end": 421
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 428
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sub1",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 439
            },
            "typeArguments": null,
            "arguments": [],
            "start": 431,
            "end": 441
          },
          "definite": false,
          "start": 427,
          "end": 441
        }
      ],
      "declare": false,
      "start": 423,
      "end": 442
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
            "name": "ss",
            "optional": false,
            "typeAnnotation": null,
            "start": 447,
            "end": 449
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SubSub1",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 463
            },
            "typeArguments": null,
            "arguments": [],
            "start": 452,
            "end": 465
          },
          "definite": false,
          "start": 447,
          "end": 465
        }
      ],
      "declare": false,
      "start": 443,
      "end": 466
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 468
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 472
            },
            "optional": false,
            "computed": false,
            "start": 467,
            "end": 472
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 467,
          "end": 474
        },
        "operator": "+",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ss",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 479
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 483
            },
            "optional": false,
            "computed": false,
            "start": 477,
            "end": 483
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 477,
          "end": 485
        },
        "start": 467,
        "end": 485
      },
      "directive": null,
      "start": 467,
      "end": 486
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 487
}
```
