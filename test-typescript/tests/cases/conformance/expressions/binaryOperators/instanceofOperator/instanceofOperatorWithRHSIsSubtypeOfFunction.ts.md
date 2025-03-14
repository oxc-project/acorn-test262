__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 290,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 32,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 20,
          "end": 28,
          "expression": {
            "type": "Identifier",
            "start": 20,
            "end": 28,
            "decorators": [],
            "name": "Function",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 34,
      "end": 45,
      "declarations": [
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
            "name": "x",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 62,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 62,
                  "decorators": [],
                  "name": "Function",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 73,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 95,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 83,
                "end": 95,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 85,
                    "end": 93,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 87,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 89,
                        "end": 93
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 123,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 105,
                "end": 123,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 107,
                    "end": 121,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 113,
                      "end": 121,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 115,
                        "end": 121
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 135,
            "end": 150,
            "operator": "instanceof",
            "left": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 148,
              "end": 150,
              "decorators": [],
              "name": "f1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 158,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 161,
            "end": 176,
            "operator": "instanceof",
            "left": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 174,
              "end": 176,
              "decorators": [],
              "name": "f2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 184,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 187,
            "end": 202,
            "operator": "instanceof",
            "left": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 200,
              "end": 202,
              "decorators": [],
              "name": "f3",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 210,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 213,
            "end": 228,
            "operator": "instanceof",
            "left": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 226,
              "end": 228,
              "decorators": [],
              "name": "f4",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 256,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 236,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 239,
            "end": 256,
            "operator": "instanceof",
            "left": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 252,
              "end": 256,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 289,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 264,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 267,
            "end": 289,
            "operator": "instanceof",
            "left": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 280,
              "end": 289,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
