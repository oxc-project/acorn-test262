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
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 76,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 37,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 36,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 33,
                      "end": 36
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 60,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
      "expression": false
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
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 78,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 45,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 36,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 33,
                      "end": 36
                    }
                  }
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
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 41,
                      "end": 44
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
      "expression": false
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
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 77,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 38,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 37,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 37,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 34,
                      "end": 37
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 60,
                  "end": 61,
                  "id": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
      "expression": false
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
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 79,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 46,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 37,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 37,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 34,
                      "end": 37
                    }
                  }
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
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 42,
                      "end": 45
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
      "expression": false
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
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 163,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 82,
            "end": 93,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 86,
                "end": 92,
                "id": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 92,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 87,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 89,
                      "end": 92
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "LabeledStatement",
            "start": 98,
            "end": 161,
            "label": {
              "type": "Identifier",
              "start": 98,
              "end": 103,
              "decorators": [],
              "name": "outer",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "ForOfStatement",
              "start": 105,
              "end": 161,
              "await": true,
              "left": {
                "type": "VariableDeclaration",
                "start": 116,
                "end": 123,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 122,
                    "end": 123,
                    "id": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "right": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "outer",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "expression": false
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
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 164,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 83,
            "end": 94,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 87,
                "end": 93,
                "id": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "LabeledStatement",
            "start": 99,
            "end": 162,
            "label": {
              "type": "Identifier",
              "start": 99,
              "end": 104,
              "decorators": [],
              "name": "outer",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "ForOfStatement",
              "start": 106,
              "end": 162,
              "await": true,
              "left": {
                "type": "VariableDeclaration",
                "start": 117,
                "end": 124,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 123,
                    "end": 124,
                    "id": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              },
              "right": {
                "type": "Identifier",
                "start": 128,
                "end": 129,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "outer",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "expression": false
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
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 162,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 83,
            "end": 94,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 87,
                "end": 93,
                "id": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 93,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 90,
                      "end": 93
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 135,
                        "end": 136,
                        "id": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 136,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
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
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
