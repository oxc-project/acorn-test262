__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 427,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 64,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 73,
        "end": 159,
        "body": [
          {
            "type": "ForStatement",
            "start": 79,
            "end": 115,
            "init": {
              "type": "VariableDeclaration",
              "start": 84,
              "end": 93,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 88,
                  "end": 93,
                  "id": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 92,
                    "end": 93,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 95,
              "end": 101,
              "left": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 99,
                "end": 101,
                "value": 10,
                "raw": "10"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 103,
              "end": 106,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 108,
              "end": 115,
              "body": []
            }
          },
          {
            "type": "ForStatement",
            "start": 121,
            "end": 157,
            "init": {
              "type": "VariableDeclaration",
              "start": 126,
              "end": 135,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 130,
                  "end": 135,
                  "id": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 131,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 134,
                    "end": 135,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 137,
              "end": 143,
              "left": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 141,
                "end": 143,
                "value": 10,
                "raw": "10"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 145,
              "end": 148,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 150,
              "end": 157,
              "body": []
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 161,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 173,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 176,
        "end": 296,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 182,
            "end": 192,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 186,
                "end": 191,
                "id": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 190,
                  "end": 191,
                  "value": 2,
                  "raw": "2"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 197,
            "end": 207,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 206,
                "id": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 205,
                  "end": 206,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 212,
            "end": 294,
            "test": {
              "type": "Literal",
              "start": 216,
              "end": 220,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 222,
              "end": 253,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 232,
                  "end": 247,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 236,
                      "end": 246,
                      "id": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 242,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 245,
                        "end": 246,
                        "value": 1,
                        "raw": "1"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 263,
              "end": 294,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 273,
                  "end": 288,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 277,
                      "end": 287,
                      "id": {
                        "type": "Identifier",
                        "start": 277,
                        "end": 283,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 286,
                        "end": 287,
                        "value": 2,
                        "raw": "2"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 298,
      "end": 427,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 304,
        "end": 305,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 306,
        "end": 427,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 312,
            "end": 425,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 315,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 425,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 318,
                "end": 425,
                "body": [
                  {
                    "type": "TryStatement",
                    "start": 328,
                    "end": 419,
                    "block": {
                      "type": "BlockStatement",
                      "start": 332,
                      "end": 366,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 346,
                          "end": 356,
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 350,
                              "end": 355,
                              "id": {
                                "type": "Identifier",
                                "start": 350,
                                "end": 351,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "Literal",
                                "start": 354,
                                "end": 355,
                                "value": 1,
                                "raw": "1"
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        }
                      ]
                    },
                    "handler": {
                      "type": "CatchClause",
                      "start": 375,
                      "end": 419,
                      "param": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 383,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 385,
                        "end": 419,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 399,
                            "end": 409,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 403,
                                "end": 408,
                                "id": {
                                  "type": "Identifier",
                                  "start": 403,
                                  "end": 404,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 407,
                                  "end": 408,
                                  "value": 2,
                                  "raw": "2"
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          }
                        ]
                      }
                    },
                    "finalizer": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
