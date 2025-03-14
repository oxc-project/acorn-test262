topLevelWithDeclIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 28,
      "await": true,
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 28,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 11,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 17,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "y",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
topLevelWithExprIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 22,
      "await": true,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 22,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "right": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "decorators": [],
        "name": "y",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
forAwaitInWithDeclIsError.ts
```json
'of' expected.
```
forAwaitInWithExprIsError.ts
```json
'of' expected.
```
inFunctionDeclWithDeclIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 70,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 70,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 31,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 30,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 30,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 27,
                      "end": 30
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForOfStatement",
            "start": 36,
            "end": 68,
            "await": true,
            "body": {
              "type": "BlockStatement",
              "start": 61,
              "end": 68,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 47,
              "end": 54,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 53,
                  "end": 54,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
inFunctionDeclWithExprIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 72,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 72,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 39,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 30,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 30,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 27,
                      "end": 30
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 38,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 38,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 35,
                      "end": 38
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForOfStatement",
            "start": 44,
            "end": 70,
            "await": true,
            "body": {
              "type": "BlockStatement",
              "start": 63,
              "end": 70,
              "body": []
            },
            "left": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
inAsyncFunctionWithDeclIsOk.ts
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
      "async": true,
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForOfStatement",
            "start": 42,
            "end": 74,
            "await": true,
            "body": {
              "type": "BlockStatement",
              "start": 67,
              "end": 74,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 53,
              "end": 60,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 59,
                  "end": 60,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
inAsyncFunctionWithExprIsOk.ts
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
      "async": true,
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
                "definite": false,
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
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 38,
                "end": 44,
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForOfStatement",
            "start": 50,
            "end": 76,
            "await": true,
            "body": {
              "type": "BlockStatement",
              "start": 69,
              "end": 76,
              "body": []
            },
            "left": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "decorators": [],
        "name": "f8",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
inAsyncGeneratorWithDeclIsOk.ts
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
      "async": true,
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
                "definite": false,
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
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForOfStatement",
            "start": 43,
            "end": 75,
            "await": true,
            "body": {
              "type": "BlockStatement",
              "start": 68,
              "end": 75,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 54,
              "end": 61,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 60,
                  "end": 61,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 18,
        "decorators": [],
        "name": "f9",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
inAsyncGeneratorWithExpressionIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 80,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 80,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 47,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 38,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 38,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 35,
                      "end": 38
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 40,
                "end": 46,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 46,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 43,
                      "end": 46
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForOfStatement",
            "start": 52,
            "end": 78,
            "await": true,
            "body": {
              "type": "BlockStatement",
              "start": 71,
              "end": 78,
              "body": []
            },
            "left": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 19,
        "decorators": [],
        "name": "f10",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
inGeneratorWithDeclIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 72,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 72,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 33,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 32,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 32,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 32,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 29,
                      "end": 32
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForOfStatement",
            "start": 38,
            "end": 70,
            "await": true,
            "body": {
              "type": "BlockStatement",
              "start": 63,
              "end": 70,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 49,
              "end": 56,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 55,
                  "end": 56,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "f11",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
inGeneratorWithExprIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 74,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 74,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 41,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 32,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 32,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 32,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 29,
                      "end": 32
                    }
                  }
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 34,
                "end": 40,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 40,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 40,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 37,
                      "end": 40
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ForOfStatement",
            "start": 46,
            "end": 72,
            "await": true,
            "body": {
              "type": "BlockStatement",
              "start": 65,
              "end": 72,
              "body": []
            },
            "left": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "f12",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
