__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 72
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 88,
                    "end": 89
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 92,
                    "end": 93
                  },
                  "definite": false,
                  "start": 88,
                  "end": 93
                }
              ],
              "declare": false,
              "start": 84,
              "end": 93
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 96
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 99,
                "end": 101
              },
              "start": 95,
              "end": 101
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 104
              },
              "start": 103,
              "end": 106
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 108,
              "end": 115
            },
            "start": 79,
            "end": 115
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 130,
                    "end": 131
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 134,
                    "end": 135
                  },
                  "definite": false,
                  "start": 130,
                  "end": 135
                }
              ],
              "declare": false,
              "start": 126,
              "end": 135
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 138
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 141,
                "end": 143
              },
              "start": 137,
              "end": 143
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 146
              },
              "start": 145,
              "end": 148
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 150,
              "end": 157
            },
            "start": 121,
            "end": 157
          }
        ],
        "start": 73,
        "end": 159
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 64,
      "end": 159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 173
      },
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
                  "start": 186,
                  "end": 187
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 190,
                  "end": 191
                },
                "definite": false,
                "start": 186,
                "end": 191
              }
            ],
            "declare": false,
            "start": 182,
            "end": 192
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 202
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 205,
                  "end": 206
                },
                "definite": false,
                "start": 201,
                "end": 206
              }
            ],
            "declare": false,
            "start": 197,
            "end": 207
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 216,
              "end": 220
            },
            "consequent": {
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 236,
                        "end": 242
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 245,
                        "end": 246
                      },
                      "definite": false,
                      "start": 236,
                      "end": 246
                    }
                  ],
                  "declare": false,
                  "start": 232,
                  "end": 247
                }
              ],
              "start": 222,
              "end": 253
            },
            "alternate": {
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 277,
                        "end": 283
                      },
                      "init": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 286,
                        "end": 287
                      },
                      "definite": false,
                      "start": 277,
                      "end": 287
                    }
                  ],
                  "declare": false,
                  "start": 273,
                  "end": 288
                }
              ],
              "start": 263,
              "end": 294
            },
            "start": 212,
            "end": 294
          }
        ],
        "start": 176,
        "end": 296
      },
      "expression": false,
      "start": 161,
      "end": 296
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
              "start": 312,
              "end": 315
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
                    "type": "TryStatement",
                    "block": {
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
                                "start": 350,
                                "end": 351
                              },
                              "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 354,
                                "end": 355
                              },
                              "definite": false,
                              "start": 350,
                              "end": 355
                            }
                          ],
                          "declare": false,
                          "start": 346,
                          "end": 356
                        }
                      ],
                      "start": 332,
                      "end": 366
                    },
                    "handler": {
                      "type": "CatchClause",
                      "param": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 383
                      },
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
                                  "start": 403,
                                  "end": 404
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 407,
                                  "end": 408
                                },
                                "definite": false,
                                "start": 403,
                                "end": 408
                              }
                            ],
                            "declare": false,
                            "start": 399,
                            "end": 409
                          }
                        ],
                        "start": 385,
                        "end": 419
                      },
                      "start": 375,
                      "end": 419
                    },
                    "finalizer": null,
                    "start": 328,
                    "end": 419
                  }
                ],
                "start": 318,
                "end": 425
              },
              "expression": false,
              "start": 315,
              "end": 425
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 312,
            "end": 425
          }
        ],
        "start": 306,
        "end": 427
      },
      "abstract": false,
      "declare": false,
      "start": 298,
      "end": 427
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 427
}
```
