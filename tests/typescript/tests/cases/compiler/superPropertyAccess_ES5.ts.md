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
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "getValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 25
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
                  "type": "TSNumberKeyword",
                  "start": 29,
                  "end": 35
                },
                "start": 27,
                "end": 35
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 45,
                      "end": 46
                    },
                    "start": 38,
                    "end": 47
                  }
                ],
                "start": 36,
                "end": 49
              },
              "expression": false,
              "start": 25,
              "end": 49
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 49
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 61
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
                  "type": "TSNumberKeyword",
                  "start": 65,
                  "end": 71
                },
                "start": 63,
                "end": 71
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 81,
                      "end": 82
                    },
                    "start": 74,
                    "end": 83
                  }
                ],
                "start": 72,
                "end": 85
              },
              "expression": false,
              "start": 61,
              "end": 85
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 52,
            "end": 85
          }
        ],
        "start": 13,
        "end": 87
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 87
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 104
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 119
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
              "start": 124,
              "end": 135
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
                        "start": 144,
                        "end": 149
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 144,
                      "end": 151
                    },
                    "directive": null,
                    "start": 144,
                    "end": 152
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 166
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 169,
                              "end": 174
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 183
                            },
                            "optional": false,
                            "computed": false,
                            "start": 169,
                            "end": 183
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 169,
                          "end": 185
                        },
                        "definite": false,
                        "start": 164,
                        "end": 185
                      }
                    ],
                    "declare": false,
                    "start": 158,
                    "end": 186
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 199
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 202,
                            "end": 207
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 208,
                            "end": 213
                          },
                          "optional": false,
                          "computed": false,
                          "start": 202,
                          "end": 213
                        },
                        "definite": false,
                        "start": 197,
                        "end": 213
                      }
                    ],
                    "declare": false,
                    "start": 191,
                    "end": 214
                  }
                ],
                "start": 138,
                "end": 218
              },
              "expression": false,
              "start": 135,
              "end": 218
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 124,
            "end": 218
          }
        ],
        "start": 120,
        "end": 220
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 220
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 227
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyDerived",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 243
            },
            "typeArguments": null,
            "arguments": [],
            "start": 230,
            "end": 245
          },
          "definite": false,
          "start": 226,
          "end": 245
        }
      ],
      "declare": false,
      "start": 222,
      "end": 246
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 253
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 257
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 263
            },
            "optional": false,
            "computed": false,
            "start": 256,
            "end": 263
          },
          "definite": false,
          "start": 251,
          "end": 263
        }
      ],
      "declare": false,
      "start": 247,
      "end": 264
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
        "start": 272,
        "end": 273
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
              "name": "_property",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 297
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 299,
                "end": 305
              },
              "start": 297,
              "end": 305
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 280,
            "end": 306
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 323
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 335,
                        "end": 339
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_property",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 349
                      },
                      "optional": false,
                      "computed": false,
                      "start": 335,
                      "end": 349
                    },
                    "start": 328,
                    "end": 350
                  }
                ],
                "start": 326,
                "end": 352
              },
              "expression": false,
              "start": 323,
              "end": 352
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 311,
            "end": 352
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 361,
              "end": 369
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 377,
                      "end": 383
                    },
                    "start": 375,
                    "end": 383
                  },
                  "start": 370,
                  "end": 383
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 387,
                          "end": 391
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_property",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 392,
                          "end": 401
                        },
                        "optional": false,
                        "computed": false,
                        "start": 387,
                        "end": 401
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 404,
                        "end": 409
                      },
                      "start": 387,
                      "end": 409
                    },
                    "directive": null,
                    "start": 387,
                    "end": 409
                  }
                ],
                "start": 385,
                "end": 411
              },
              "expression": false,
              "start": 369,
              "end": 411
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 357,
            "end": 411
          }
        ],
        "start": 274,
        "end": 413
      },
      "abstract": false,
      "declare": false,
      "start": 266,
      "end": 413
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
        "start": 421,
        "end": 422
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 432
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
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 451
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 459,
                      "end": 465
                    },
                    "start": 457,
                    "end": 465
                  },
                  "start": 452,
                  "end": 465
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 477,
                          "end": 482
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "property",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 483,
                          "end": 491
                        },
                        "optional": false,
                        "computed": false,
                        "start": 477,
                        "end": 491
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 494,
                          "end": 499
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": " addition",
                          "raw": "\" addition\"",
                          "start": 502,
                          "end": 513
                        },
                        "start": 494,
                        "end": 513
                      },
                      "start": 477,
                      "end": 513
                    },
                    "directive": null,
                    "start": 477,
                    "end": 514
                  }
                ],
                "start": 467,
                "end": 520
              },
              "expression": false,
              "start": 451,
              "end": 520
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 439,
            "end": 520
          }
        ],
        "start": 433,
        "end": 522
      },
      "abstract": false,
      "declare": false,
      "start": 415,
      "end": 522
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 522
}
```
