__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 154,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 154,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 66,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 70,
                "end": 79,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 79,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 71,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 73,
                      "end": 79,
                      "typeName": {
                        "type": "Identifier",
                        "start": 73,
                        "end": 79,
                        "decorators": [],
                        "name": "Object",
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
            "type": "ExpressionStatement",
            "start": 85,
            "end": 91,
            "expression": {
              "type": "AssignmentExpression",
              "start": 85,
              "end": 90,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 109,
            "expression": {
              "type": "AssignmentExpression",
              "start": 103,
              "end": 108,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 121,
            "end": 127,
            "expression": {
              "type": "AssignmentExpression",
              "start": 121,
              "end": 126,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 125,
                "end": 126,
                "decorators": [],
                "name": "z",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 145,
            "expression": {
              "type": "AssignmentExpression",
              "start": 139,
              "end": 144,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 143,
                "end": 144,
                "decorators": [],
                "name": "x",
                "optional": false
              }
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
        "name": "ff",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 52,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 52,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 51,
              "end": 52,
              "typeName": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 54,
          "end": 58,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 28,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 28,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 46,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 40,
              "end": 46,
              "typeName": {
                "type": "Identifier",
                "start": 40,
                "end": 46,
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
