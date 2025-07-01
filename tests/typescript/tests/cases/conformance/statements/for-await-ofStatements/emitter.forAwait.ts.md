__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 17
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 33,
                      "end": 36
                    },
                    "start": 31,
                    "end": 36
                  },
                  "start": 30,
                  "end": 36
                },
                "init": null,
                "definite": false,
                "start": 30,
                "end": 36
              }
            ],
            "declare": false,
            "start": 26,
            "end": 37
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "init": null,
                  "definite": false,
                  "start": 59,
                  "end": 60
                }
              ],
              "declare": false,
              "start": 53,
              "end": 60
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 67,
              "end": 74
            },
            "start": 42,
            "end": 74
          }
        ],
        "start": 20,
        "end": 76
      },
      "expression": false,
      "start": 0,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 17
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 33,
                      "end": 36
                    },
                    "start": 31,
                    "end": 36
                  },
                  "start": 30,
                  "end": 36
                },
                "init": null,
                "definite": false,
                "start": 30,
                "end": 36
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 41,
                      "end": 44
                    },
                    "start": 39,
                    "end": 44
                  },
                  "start": 38,
                  "end": 44
                },
                "init": null,
                "definite": false,
                "start": 38,
                "end": 44
              }
            ],
            "declare": false,
            "start": 26,
            "end": 45
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 69,
              "end": 76
            },
            "start": 50,
            "end": 76
          }
        ],
        "start": 20,
        "end": 78
      },
      "expression": false,
      "start": 0,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 78
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 18
      },
      "generator": true,
      "async": true,
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 34,
                      "end": 37
                    },
                    "start": 32,
                    "end": 37
                  },
                  "start": 31,
                  "end": 37
                },
                "init": null,
                "definite": false,
                "start": 31,
                "end": 37
              }
            ],
            "declare": false,
            "start": 27,
            "end": 38
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 61
                  },
                  "init": null,
                  "definite": false,
                  "start": 60,
                  "end": 61
                }
              ],
              "declare": false,
              "start": 54,
              "end": 61
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 68,
              "end": 75
            },
            "start": 43,
            "end": 75
          }
        ],
        "start": 21,
        "end": 77
      },
      "expression": false,
      "start": 0,
      "end": 77
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 18
      },
      "generator": true,
      "async": true,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 34,
                      "end": 37
                    },
                    "start": 32,
                    "end": 37
                  },
                  "start": 31,
                  "end": 37
                },
                "init": null,
                "definite": false,
                "start": 31,
                "end": 37
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 42,
                      "end": 45
                    },
                    "start": 40,
                    "end": 45
                  },
                  "start": 39,
                  "end": 45
                },
                "init": null,
                "definite": false,
                "start": 39,
                "end": 45
              }
            ],
            "declare": false,
            "start": 27,
            "end": 46
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 68
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 70,
              "end": 77
            },
            "start": 51,
            "end": 77
          }
        ],
        "start": 21,
        "end": 79
      },
      "expression": false,
      "start": 0,
      "end": 79
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 79
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 73
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 89,
                      "end": 92
                    },
                    "start": 87,
                    "end": 92
                  },
                  "start": 86,
                  "end": 92
                },
                "init": null,
                "definite": false,
                "start": 86,
                "end": 92
              }
            ],
            "declare": false,
            "start": 82,
            "end": 93
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 103
            },
            "body": {
              "type": "ForOfStatement",
              "await": true,
              "left": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 123
                    },
                    "init": null,
                    "definite": false,
                    "start": 122,
                    "end": 123
                  }
                ],
                "declare": false,
                "start": 116,
                "end": 123
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "outer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 154
                    },
                    "start": 140,
                    "end": 155
                  }
                ],
                "start": 130,
                "end": 161
              },
              "start": 105,
              "end": 161
            },
            "start": 98,
            "end": 161
          }
        ],
        "start": 76,
        "end": 163
      },
      "expression": false,
      "start": 56,
      "end": 163
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 163
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 74
      },
      "generator": true,
      "async": true,
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    },
                    "start": 88,
                    "end": 93
                  },
                  "start": 87,
                  "end": 93
                },
                "init": null,
                "definite": false,
                "start": 87,
                "end": 93
              }
            ],
            "declare": false,
            "start": 83,
            "end": 94
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "outer",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 104
            },
            "body": {
              "type": "ForOfStatement",
              "await": true,
              "left": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 124
                    },
                    "init": null,
                    "definite": false,
                    "start": 123,
                    "end": 124
                  }
                ],
                "declare": false,
                "start": 117,
                "end": 124
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 129
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "outer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 155
                    },
                    "start": 141,
                    "end": 156
                  }
                ],
                "start": 131,
                "end": 162
              },
              "start": 106,
              "end": 162
            },
            "start": 99,
            "end": 162
          }
        ],
        "start": 77,
        "end": 164
      },
      "expression": false,
      "start": 56,
      "end": 164
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 164
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 74
      },
      "generator": true,
      "async": true,
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    },
                    "start": 88,
                    "end": 93
                  },
                  "start": 87,
                  "end": 93
                },
                "init": null,
                "definite": false,
                "start": 87,
                "end": 93
              }
            ],
            "declare": false,
            "start": 83,
            "end": 94
          },
          {
            "type": "ForStatement",
            "init": null,
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 135,
                          "end": 136
                        },
                        "init": null,
                        "definite": false,
                        "start": 135,
                        "end": 136
                      }
                    ],
                    "declare": false,
                    "start": 129,
                    "end": 136
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 143,
                    "end": 154
                  },
                  "start": 118,
                  "end": 154
                }
              ],
              "start": 108,
              "end": 160
            },
            "start": 99,
            "end": 160
          }
        ],
        "start": 77,
        "end": 162
      },
      "expression": false,
      "start": 56,
      "end": 162
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 162
}
```
