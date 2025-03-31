__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 76,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 37,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 36,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 33,
                      "end": 36
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 42,
            "end": 74,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 53,
              "end": 60,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 60,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 67,
              "end": 74,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 78,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 45,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 36,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 33,
                      "end": 36
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 38,
                "end": 44,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 44,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 41,
                      "end": 44
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 50,
            "end": 76,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 69,
              "end": 76,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 18,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 77,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 38,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 37,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 37,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 34,
                      "end": 37
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 43,
            "end": 75,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 54,
              "end": 61,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 60,
                  "end": 61,
                  "id": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 68,
              "end": 75,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 18,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 79,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 46,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 37,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 37,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 34,
                      "end": 37
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 39,
                "end": 45,
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 45,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 42,
                      "end": 45
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 51,
            "end": 77,
            "await": true,
            "left": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 70,
              "end": 77,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 163,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 73,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 163,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 82,
            "end": 93,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 86,
                "end": 92,
                "id": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 92,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 87,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 89,
                      "end": 92
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "LabeledStatement",
            "start": 98,
            "end": 161,
            "body": {
              "type": "ForOfStatement",
              "start": 105,
              "end": 161,
              "await": true,
              "left": {
                "type": "VariableDeclaration",
                "start": 116,
                "end": 123,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 122,
                    "end": 123,
                    "id": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "right": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 130,
                "end": 161,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 140,
                    "end": 155,
                    "label": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 154,
                      "name": "outer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              }
            },
            "label": {
              "type": "Identifier",
              "start": 98,
              "end": 103,
              "name": "outer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 164,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "name": "f6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 164,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 83,
            "end": 94,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 87,
                "end": 93,
                "id": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "LabeledStatement",
            "start": 99,
            "end": 162,
            "body": {
              "type": "ForOfStatement",
              "start": 106,
              "end": 162,
              "await": true,
              "left": {
                "type": "VariableDeclaration",
                "start": 117,
                "end": 124,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 123,
                    "end": 124,
                    "id": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "const",
                "declare": false
              },
              "right": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 162,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 141,
                    "end": 156,
                    "label": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 155,
                      "name": "outer",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              }
            },
            "label": {
              "type": "Identifier",
              "start": 99,
              "end": 104,
              "name": "outer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 162,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "name": "f7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 162,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 83,
            "end": 94,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 87,
                "end": 93,
                "id": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 99,
            "end": 160,
            "init": null,
            "test": null,
            "update": null,
            "body": {
              "type": "BlockStatement",
              "start": 108,
              "end": 160,
              "body": [
                {
                  "type": "ForOfStatement",
                  "start": 118,
                  "end": 154,
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 129,
                    "end": 136,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 135,
                        "end": 136,
                        "id": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 136,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 143,
                    "end": 154,
                    "body": []
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
