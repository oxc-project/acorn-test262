__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
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
                      },
                      "typeParameters": null
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 76,
                                "end": 77,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
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
                      },
                      "typeParameters": null
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
            "directive": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 129,
            "end": 135,
            "directive": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
