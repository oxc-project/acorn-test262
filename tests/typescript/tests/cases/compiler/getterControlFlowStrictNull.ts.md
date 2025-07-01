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
        "start": 6,
        "end": 7
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
              "start": 13,
              "end": 14
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
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 18,
                      "end": 24
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 27,
                      "end": 31
                    }
                  ],
                  "start": 18,
                  "end": 31
                },
                "start": 16,
                "end": 31
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 46,
                            "end": 50
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 51,
                            "end": 57
                          },
                          "optional": false,
                          "computed": false,
                          "start": 46,
                          "end": 57
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 46,
                        "end": 59
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 62,
                        "end": 65
                      },
                      "start": 46,
                      "end": 65
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 88,
                            "end": 90
                          },
                          "start": 81,
                          "end": 91
                        }
                      ],
                      "start": 67,
                      "end": 101
                    },
                    "alternate": null,
                    "start": 42,
                    "end": 101
                  }
                ],
                "start": 32,
                "end": 150
              },
              "expression": false,
              "start": 14,
              "end": 150
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 13,
            "end": 150
          }
        ],
        "start": 8,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 152
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
        "start": 159,
        "end": 160
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
              "start": 171,
              "end": 172
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
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 176,
                      "end": 182
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 185,
                      "end": 189
                    }
                  ],
                  "start": 176,
                  "end": 189
                },
                "start": 174,
                "end": 189
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 204,
                            "end": 208
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 209,
                            "end": 215
                          },
                          "optional": false,
                          "computed": false,
                          "start": 204,
                          "end": 215
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 204,
                        "end": 217
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 220,
                        "end": 223
                      },
                      "start": 204,
                      "end": 223
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 246,
                            "end": 248
                          },
                          "start": 239,
                          "end": 249
                        }
                      ],
                      "start": 225,
                      "end": 259
                    },
                    "alternate": null,
                    "start": 200,
                    "end": 259
                  }
                ],
                "start": 190,
                "end": 327
              },
              "expression": false,
              "start": 172,
              "end": 327
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 167,
            "end": 327
          }
        ],
        "start": 161,
        "end": 329
      },
      "abstract": false,
      "declare": false,
      "start": 153,
      "end": 329
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
        "start": 336,
        "end": 337
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
              "start": 348,
              "end": 349
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 366,
                            "end": 370
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 371,
                            "end": 377
                          },
                          "optional": false,
                          "computed": false,
                          "start": 366,
                          "end": 377
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 366,
                        "end": 379
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": "0.5",
                        "start": 382,
                        "end": 385
                      },
                      "start": 366,
                      "end": 385
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 408,
                            "end": 409
                          },
                          "start": 401,
                          "end": 410
                        }
                      ],
                      "start": 387,
                      "end": 420
                    },
                    "alternate": null,
                    "start": 362,
                    "end": 420
                  }
                ],
                "start": 352,
                "end": 488
              },
              "expression": false,
              "start": 349,
              "end": 488
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 344,
            "end": 488
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 499
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
                      "type": "TSNumberKeyword",
                      "start": 507,
                      "end": 513
                    },
                    "start": 505,
                    "end": 513
                  },
                  "start": 500,
                  "end": 513
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 515,
                "end": 522
              },
              "expression": false,
              "start": 499,
              "end": 522
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 494,
            "end": 522
          }
        ],
        "start": 338,
        "end": 524
      },
      "abstract": false,
      "declare": false,
      "start": 330,
      "end": 524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 524
}
```
