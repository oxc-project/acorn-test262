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
      "body": {
        "type": "TSModuleBlock",
        "start": 73,
        "end": 159,
        "body": [
          {
            "type": "ForStatement",
            "start": 79,
            "end": 115,
            "body": {
              "type": "BlockStatement",
              "start": 108,
              "end": 115,
              "body": []
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 84,
              "end": 93,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 88,
                  "end": 93,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "decorators": [],
                    "name": "j",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 92,
                    "end": 93,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 95,
              "end": 101,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "j",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 99,
                "end": 101,
                "raw": "10",
                "value": 10
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 103,
              "end": 106,
              "argument": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "j",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "ForStatement",
            "start": 121,
            "end": 157,
            "body": {
              "type": "BlockStatement",
              "start": 150,
              "end": 157,
              "body": []
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 126,
              "end": 135,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 130,
                  "end": 135,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 131,
                    "decorators": [],
                    "name": "j",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 134,
                    "end": 135,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 137,
              "end": 143,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "j",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 141,
                "end": 143,
                "raw": "10",
                "value": 10
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 145,
              "end": 148,
              "argument": {
                "type": "Identifier",
                "start": 145,
                "end": 146,
                "decorators": [],
                "name": "j",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 161,
      "end": 296,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 176,
        "end": 296,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 182,
            "end": 192,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 186,
                "end": 191,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 190,
                  "end": 191,
                  "raw": "2",
                  "value": 2
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 197,
            "end": 207,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 201,
                "end": 206,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 205,
                  "end": 206,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "IfStatement",
            "start": 212,
            "end": 294,
            "alternate": {
              "type": "BlockStatement",
              "start": 263,
              "end": 294,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 273,
                  "end": 288,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 277,
                      "end": 287,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 277,
                        "end": 283,
                        "decorators": [],
                        "name": "result",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 286,
                        "end": 287,
                        "raw": "2",
                        "value": 2
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 236,
                      "end": 246,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 242,
                        "decorators": [],
                        "name": "result",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 245,
                        "end": 246,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 216,
              "end": 220,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 173,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ClassDeclaration",
      "start": 298,
      "end": 427,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 306,
        "end": 427,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 312,
            "end": 425,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 315,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 315,
              "end": 425,
              "async": false,
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
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 350,
                              "end": 355,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 350,
                                "end": 351,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              },
                              "init": {
                                "type": "Literal",
                                "start": 354,
                                "end": 355,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var"
                        }
                      ]
                    },
                    "finalizer": null,
                    "handler": {
                      "type": "CatchClause",
                      "start": 375,
                      "end": 419,
                      "body": {
                        "type": "BlockStatement",
                        "start": 385,
                        "end": 419,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 399,
                            "end": 409,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 403,
                                "end": 408,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 403,
                                  "end": 404,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 407,
                                  "end": 408,
                                  "raw": "2",
                                  "value": 2
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          }
                        ]
                      },
                      "param": {
                        "type": "Identifier",
                        "start": 382,
                        "end": 383,
                        "decorators": [],
                        "name": "e",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 304,
        "end": 305,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
