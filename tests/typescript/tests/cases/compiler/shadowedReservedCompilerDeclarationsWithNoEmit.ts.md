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
        "start": 42,
        "end": 46
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 47,
        "end": 50
      },
      "abstract": false,
      "declare": false,
      "start": 36,
      "end": 50
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
        "start": 57,
        "end": 58
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 89
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
                        "type": "Super",
                        "start": 102,
                        "end": 107
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 102,
                      "end": 109
                    },
                    "directive": null,
                    "start": 102,
                    "end": 110
                  }
                ],
                "start": 92,
                "end": 116
              },
              "expression": false,
              "start": 89,
              "end": 116
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 78,
            "end": 116
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
              "start": 122,
              "end": 125
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 142,
                          "end": 147
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 150,
                          "end": 154
                        },
                        "definite": false,
                        "start": 142,
                        "end": 154
                      }
                    ],
                    "declare": false,
                    "start": 138,
                    "end": 155
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_this",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 185,
                              "end": 190
                            },
                            "directive": null,
                            "start": 185,
                            "end": 191
                          }
                        ],
                        "start": 171,
                        "end": 201
                      },
                      "id": null,
                      "generator": false,
                      "start": 165,
                      "end": 201
                    },
                    "directive": null,
                    "start": 165,
                    "end": 202
                  }
                ],
                "start": 128,
                "end": 208
              },
              "expression": false,
              "start": 125,
              "end": 208
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 122,
            "end": 208
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
              "start": 214,
              "end": 217
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_super",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 240
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 243,
                          "end": 247
                        },
                        "definite": false,
                        "start": 234,
                        "end": 247
                      }
                    ],
                    "declare": false,
                    "start": 230,
                    "end": 248
                  }
                ],
                "start": 220,
                "end": 254
              },
              "expression": false,
              "start": 217,
              "end": 254
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 214,
            "end": 254
          }
        ],
        "start": 72,
        "end": 256
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 256
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 293
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 303
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 309
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 305,
          "end": 309
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 311,
        "end": 314
      },
      "expression": false,
      "start": 282,
      "end": 314
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 324
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 337
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 355
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
                        "type": "Super",
                        "start": 368,
                        "end": 373
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 368,
                      "end": 375
                    },
                    "directive": null,
                    "start": 368,
                    "end": 376
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
                          "name": "_newTarget",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 389,
                          "end": 399
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 402,
                          "end": 404
                        },
                        "definite": false,
                        "start": 389,
                        "end": 404
                      }
                    ],
                    "declare": false,
                    "start": 385,
                    "end": 405
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 418,
                          "end": 419
                        },
                        "init": {
                          "type": "MetaProperty",
                          "meta": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 422,
                            "end": 425
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 426,
                            "end": 432
                          },
                          "start": 422,
                          "end": 432
                        },
                        "definite": false,
                        "start": 418,
                        "end": 432
                      }
                    ],
                    "declare": false,
                    "start": 414,
                    "end": 433
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 446,
                          "end": 447
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_newTarget",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 450,
                          "end": 460
                        },
                        "definite": false,
                        "start": 446,
                        "end": 460
                      }
                    ],
                    "declare": false,
                    "start": 442,
                    "end": 461
                  }
                ],
                "start": 358,
                "end": 467
              },
              "expression": false,
              "start": 355,
              "end": 467
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 344,
            "end": 467
          }
        ],
        "start": 338,
        "end": 469
      },
      "abstract": false,
      "declare": false,
      "start": 316,
      "end": 469
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 503
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 506,
            "end": 510
          },
          "definite": false,
          "start": 496,
          "end": 510
        }
      ],
      "declare": false,
      "start": 492,
      "end": 511
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 527,
        "end": 529
      },
      "generator": false,
      "async": true,
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
              "value": 0,
              "raw": "0",
              "start": 545,
              "end": 546
            },
            "start": 538,
            "end": 547
          }
        ],
        "start": 532,
        "end": 549
      },
      "expression": false,
      "start": 512,
      "end": 549
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
            "name": "require",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 583
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 586,
            "end": 587
          },
          "definite": false,
          "start": 576,
          "end": 587
        }
      ],
      "declare": false,
      "start": 572,
      "end": 588
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
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 614,
            "end": 621
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 624,
            "end": 625
          },
          "definite": false,
          "start": 614,
          "end": 625
        }
      ],
      "declare": false,
      "start": 610,
      "end": 626
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 629,
      "end": 640
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 36,
  "end": 640
}
```
