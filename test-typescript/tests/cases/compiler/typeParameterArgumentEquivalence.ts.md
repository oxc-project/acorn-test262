typeParameterArgumentEquivalence.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 160,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 160,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 57,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 56,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 56,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 56,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 31,
                      "end": 56,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 32,
                          "end": 44,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 36,
                            "end": 44,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 38,
                              "end": 44
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 46,
                        "end": 56,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 49,
                          "end": 56
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
            "start": 62,
            "end": 90,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 66,
                "end": 89,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 89,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 69,
                      "end": 89,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 70,
                          "end": 77,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 74,
                            "end": 77,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 76,
                              "end": 77,
                              "typeName": {
                                "type": "Identifier",
                                "start": 76,
                                "end": 77,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 79,
                        "end": 89,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 82,
                          "end": 89
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
            "start": 95,
            "end": 101,
            "expression": {
              "type": "AssignmentExpression",
              "start": 95,
              "end": 100,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 129,
            "end": 135,
            "expression": {
              "type": "AssignmentExpression",
              "start": 129,
              "end": 134,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
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
        "end": 15,
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
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
