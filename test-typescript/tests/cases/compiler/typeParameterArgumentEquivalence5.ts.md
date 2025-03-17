__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 151,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 151,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 51,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 50,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 50,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 33,
                      "end": 50,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 36,
                        "end": 50,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 39,
                          "end": 50,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 40,
                              "end": 44,
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 46,
                            "end": 50,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 49,
                              "end": 50,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 49,
                                "end": 50,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
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
            "start": 56,
            "end": 81,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 80,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 80,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 63,
                      "end": 80,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 66,
                        "end": 80,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 69,
                          "end": 80,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 70,
                              "end": 74,
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 76,
                            "end": 80,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 79,
                              "end": 80,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 79,
                                "end": 80,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
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
            "start": 86,
            "end": 92,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 86,
              "end": 91,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 120,
            "end": 126,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 120,
              "end": 125,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
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
        "end": 17,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "U",
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
