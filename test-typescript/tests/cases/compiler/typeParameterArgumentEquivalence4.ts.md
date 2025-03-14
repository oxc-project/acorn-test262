typeParameterArgumentEquivalence4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 139,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 139,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 45,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 44,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 44,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 33,
                      "end": 44,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 34,
                          "end": 38,
                          "decorators": [],
                          "name": "item",
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 40,
                        "end": 44,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 43,
                          "end": 44,
                          "typeName": {
                            "type": "Identifier",
                            "start": 43,
                            "end": 44,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
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
            "start": 50,
            "end": 69,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 54,
                "end": 68,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 68,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 68,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 57,
                      "end": 68,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 58,
                          "end": 62,
                          "decorators": [],
                          "name": "item",
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 64,
                        "end": 68,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 67,
                          "end": 68,
                          "typeName": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 68,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
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
            "start": 74,
            "end": 80,
            "expression": {
              "type": "AssignmentExpression",
              "start": 74,
              "end": 79,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 108,
            "end": 114,
            "expression": {
              "type": "AssignmentExpression",
              "start": 108,
              "end": 113,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
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
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
