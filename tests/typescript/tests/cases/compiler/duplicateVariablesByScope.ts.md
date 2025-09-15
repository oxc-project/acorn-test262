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
        "start": 74,
        "end": 75
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
                    "start": 91,
                    "end": 92
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 95,
                    "end": 96
                  },
                  "definite": false,
                  "start": 91,
                  "end": 96
                }
              ],
              "declare": false,
              "start": 87,
              "end": 96
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 99
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 102,
                "end": 104
              },
              "start": 98,
              "end": 104
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
                "start": 106,
                "end": 107
              },
              "start": 106,
              "end": 109
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 111,
              "end": 118
            },
            "start": 82,
            "end": 118
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
                    "start": 133,
                    "end": 134
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 137,
                    "end": 138
                  },
                  "definite": false,
                  "start": 133,
                  "end": 138
                }
              ],
              "declare": false,
              "start": 129,
              "end": 138
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 141
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 144,
                "end": 146
              },
              "start": 140,
              "end": 146
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
                "start": 148,
                "end": 149
              },
              "start": 148,
              "end": 151
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 153,
              "end": 160
            },
            "start": 124,
            "end": 160
          }
        ],
        "start": 76,
        "end": 162
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 64,
      "end": 162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 176
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
                  "start": 189,
                  "end": 190
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 193,
                  "end": 194
                },
                "definite": false,
                "start": 189,
                "end": 194
              }
            ],
            "declare": false,
            "start": 185,
            "end": 195
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
                  "start": 204,
                  "end": 205
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 208,
                  "end": 209
                },
                "definite": false,
                "start": 204,
                "end": 209
              }
            ],
            "declare": false,
            "start": 200,
            "end": 210
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 219,
              "end": 223
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
                        "start": 239,
                        "end": 245
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 248,
                        "end": 249
                      },
                      "definite": false,
                      "start": 239,
                      "end": 249
                    }
                  ],
                  "declare": false,
                  "start": 235,
                  "end": 250
                }
              ],
              "start": 225,
              "end": 256
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
                        "start": 280,
                        "end": 286
                      },
                      "init": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 289,
                        "end": 290
                      },
                      "definite": false,
                      "start": 280,
                      "end": 290
                    }
                  ],
                  "declare": false,
                  "start": 276,
                  "end": 291
                }
              ],
              "start": 266,
              "end": 297
            },
            "start": 215,
            "end": 297
          }
        ],
        "start": 179,
        "end": 299
      },
      "expression": false,
      "start": 164,
      "end": 299
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
        "start": 307,
        "end": 308
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
              "start": 315,
              "end": 318
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
                                "start": 353,
                                "end": 354
                              },
                              "init": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 357,
                                "end": 358
                              },
                              "definite": false,
                              "start": 353,
                              "end": 358
                            }
                          ],
                          "declare": false,
                          "start": 349,
                          "end": 359
                        }
                      ],
                      "start": 335,
                      "end": 369
                    },
                    "handler": {
                      "type": "CatchClause",
                      "param": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 385,
                        "end": 386
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
                                  "start": 406,
                                  "end": 407
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 410,
                                  "end": 411
                                },
                                "definite": false,
                                "start": 406,
                                "end": 411
                              }
                            ],
                            "declare": false,
                            "start": 402,
                            "end": 412
                          }
                        ],
                        "start": 388,
                        "end": 422
                      },
                      "start": 378,
                      "end": 422
                    },
                    "finalizer": null,
                    "start": 331,
                    "end": 422
                  }
                ],
                "start": 321,
                "end": 428
              },
              "expression": false,
              "start": 318,
              "end": 428
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 315,
            "end": 428
          }
        ],
        "start": 309,
        "end": 430
      },
      "abstract": false,
      "declare": false,
      "start": 301,
      "end": 430
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 430
}
```
