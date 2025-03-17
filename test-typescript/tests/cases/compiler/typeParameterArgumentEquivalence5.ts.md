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
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 50,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 33,
                      "end": 50,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 36,
                        "end": 50,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 39,
                          "end": 50,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 40,
                              "end": 44,
                              "name": "item",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 49,
                                "end": 50,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 80,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 80,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 63,
                      "end": 80,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 66,
                        "end": 80,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 69,
                          "end": 80,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 70,
                              "end": 74,
                              "name": "item",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 79,
                                "end": 80,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 92,
            "expression": {
              "type": "AssignmentExpression",
              "start": 86,
              "end": 91,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 120,
            "end": 126,
            "expression": {
              "type": "AssignmentExpression",
              "start": 120,
              "end": 125,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 17,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "U",
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
