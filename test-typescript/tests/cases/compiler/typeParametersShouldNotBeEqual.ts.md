typeParametersShouldNotBeEqual.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 130,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 130,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 36,
            "end": 50,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 40,
                "end": 49,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 49,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 43,
                      "end": 49,
                      "typeName": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 49,
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
            "start": 55,
            "end": 61,
            "expression": {
              "type": "AssignmentExpression",
              "start": 55,
              "end": 60,
              "operator": "=",
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
                "start": 59,
                "end": 60,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 73,
            "end": 79,
            "expression": {
              "type": "AssignmentExpression",
              "start": 73,
              "end": 78,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 94,
            "end": 100,
            "expression": {
              "type": "AssignmentExpression",
              "start": 94,
              "end": 99,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "decorators": [],
                "name": "z",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 115,
            "end": 121,
            "expression": {
              "type": "AssignmentExpression",
              "start": 115,
              "end": 120,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
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
          "start": 18,
          "end": 22,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 19,
            "end": 22,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 21,
              "end": 22,
              "typeName": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 28,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 27,
              "end": 28,
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
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
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
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
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
  "sourceType": "script"
}
```
