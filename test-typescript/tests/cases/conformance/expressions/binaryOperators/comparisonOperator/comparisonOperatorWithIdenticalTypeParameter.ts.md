__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 20,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 19,
              "end": 20,
              "typeName": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 193,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 43,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 42,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 34,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 37,
                  "end": 42,
                  "left": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<",
                  "right": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 48,
            "end": 63,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 52,
                "end": 62,
                "id": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 54,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 57,
                  "end": 62,
                  "left": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">",
                  "right": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 68,
            "end": 84,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 72,
                "end": 83,
                "id": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 74,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 77,
                  "end": 83,
                  "left": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 89,
            "end": 105,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 93,
                "end": 104,
                "id": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 95,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 98,
                  "end": 104,
                  "left": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": ">=",
                  "right": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 110,
            "end": 126,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 114,
                "end": 125,
                "id": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 116,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 119,
                  "end": 125,
                  "left": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "==",
                  "right": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 131,
            "end": 147,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 135,
                "end": 146,
                "id": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 137,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 140,
                  "end": 146,
                  "left": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!=",
                  "right": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 152,
            "end": 169,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 156,
                "end": 168,
                "id": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 158,
                  "name": "r7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 161,
                  "end": 168,
                  "left": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 162,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 168,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 174,
            "end": 191,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 178,
                "end": 190,
                "id": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 180,
                  "name": "r8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 183,
                  "end": 190,
                  "left": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 190,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
