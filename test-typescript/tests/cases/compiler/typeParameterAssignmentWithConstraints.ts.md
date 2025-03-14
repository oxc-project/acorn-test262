typeParameterAssignmentWithConstraints.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 102,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 102,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 35,
            "end": 44,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 39,
                "end": 43,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 43,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 40,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 42,
                      "end": 43,
                      "typeName": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
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
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 49,
            "end": 58,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 53,
                "end": 57,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 57,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 56,
                      "end": 57,
                      "typeName": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 57,
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
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 63,
            "end": 69,
            "expression": {
              "type": "AssignmentExpression",
              "start": 63,
              "end": 68,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "b",
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
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 25,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 25,
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "B",
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
