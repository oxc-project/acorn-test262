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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
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
              "start": 36,
              "end": 47
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringOrUndefined",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 74,
                            "end": 80
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 83,
                            "end": 92
                          }
                        ],
                        "start": 74,
                        "end": 92
                      },
                      "start": 72,
                      "end": 92
                    },
                    "start": 55,
                    "end": 92
                  },
                  "readonly": false,
                  "static": false,
                  "start": 48,
                  "end": 92
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 94,
                "end": 96
              },
              "expression": false,
              "start": 47,
              "end": 96
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 36,
            "end": 96
          }
        ],
        "start": 30,
        "end": 98
      },
      "abstract": false,
      "declare": false,
      "start": 22,
      "end": 98
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
        "start": 106,
        "end": 107
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
              "start": 114,
              "end": 125
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 138,
                        "end": 144
                      },
                      "start": 136,
                      "end": 144
                    },
                    "start": 133,
                    "end": 144
                  },
                  "readonly": false,
                  "static": false,
                  "start": 126,
                  "end": 144
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 146,
                "end": 148
              },
              "expression": false,
              "start": 125,
              "end": 148
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 114,
            "end": 148
          }
        ],
        "start": 108,
        "end": 150
      },
      "abstract": false,
      "declare": false,
      "start": 100,
      "end": 150
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 159
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 167
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "123",
                "raw": "\"123\"",
                "start": 168,
                "end": 173
              }
            ],
            "start": 162,
            "end": 174
          },
          "definite": false,
          "start": 158,
          "end": 174
        }
      ],
      "declare": false,
      "start": 152,
      "end": 175
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 182
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "start": 181,
          "end": 195
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 200
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 199,
          "end": 218
        },
        "start": 181,
        "end": 218
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 231
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 233
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringOrUndefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 251
                  },
                  "optional": false,
                  "computed": false,
                  "start": 232,
                  "end": 251
                }
              ],
              "start": 226,
              "end": 252
            },
            "directive": null,
            "start": 226,
            "end": 252
          }
        ],
        "start": 220,
        "end": 254
      },
      "alternate": null,
      "start": 177,
      "end": 254
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 261
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringOrUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 279
          },
          "optional": false,
          "computed": false,
          "start": 260,
          "end": 279
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 284
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 297
          },
          "start": 283,
          "end": 297
        },
        "start": 260,
        "end": 297
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 310
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 312
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stringOrUndefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 330
                  },
                  "optional": false,
                  "computed": false,
                  "start": 311,
                  "end": 330
                }
              ],
              "start": 305,
              "end": 331
            },
            "directive": null,
            "start": 305,
            "end": 331
          }
        ],
        "start": 299,
        "end": 333
      },
      "alternate": null,
      "start": 256,
      "end": 333
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 340
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 352,
          "end": 353
        },
        "start": 339,
        "end": 353
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 366
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringOrUndefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 384
              },
              "optional": false,
              "computed": false,
              "start": 365,
              "end": 384
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 401
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 402,
                          "end": 403
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stringOrUndefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 421
                        },
                        "optional": false,
                        "computed": false,
                        "start": 402,
                        "end": 421
                      }
                    ],
                    "start": 396,
                    "end": 422
                  },
                  "directive": null,
                  "start": 396,
                  "end": 422
                }
              ],
              "start": 386,
              "end": 428
            },
            "alternate": null,
            "start": 361,
            "end": 428
          }
        ],
        "start": 355,
        "end": 430
      },
      "alternate": null,
      "start": 335,
      "end": 430
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 436,
          "end": 437
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringOrUndefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 455
        },
        "optional": false,
        "computed": false,
        "start": 436,
        "end": 455
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 468
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              },
              "start": 467,
              "end": 481
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 497,
                      "end": 498
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 499,
                          "end": 500
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stringOrUndefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 501,
                          "end": 518
                        },
                        "optional": false,
                        "computed": false,
                        "start": 499,
                        "end": 518
                      }
                    ],
                    "start": 493,
                    "end": 519
                  },
                  "directive": null,
                  "start": 493,
                  "end": 519
                }
              ],
              "start": 483,
              "end": 525
            },
            "alternate": null,
            "start": 463,
            "end": 525
          }
        ],
        "start": 457,
        "end": 527
      },
      "alternate": null,
      "start": 432,
      "end": 527
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 527
}
```
