__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 22,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 22,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 14,
            "end": 20,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 19,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 18,
                "end": 19,
                "typeName": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 19,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "EmptyStatement",
      "start": 22,
      "end": 23
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 40,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 40,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 53,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 78,
      "body": {
        "type": "TSInterfaceBody",
        "start": 68,
        "end": 78,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 70,
            "end": 76,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 75,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "EmptyStatement",
      "start": 78,
      "end": 79
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 96,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 106,
            "end": 109,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 112,
      "end": 134,
      "body": {
        "type": "TSInterfaceBody",
        "start": 124,
        "end": 134,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 126,
            "end": 132,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 130,
                "end": 131,
                "typeName": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "EmptyStatement",
      "start": 134,
      "end": 135
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 152,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 149,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 151,
                "end": 152,
                "typeName": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 165,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 162,
            "end": 165,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 174,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 173,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 168,
          "end": 169,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 172,
          "end": 173,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
