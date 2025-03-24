__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 157,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 157,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 26,
            "end": 54,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 30,
                "end": 53,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 53,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 33,
                      "end": 53,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 34,
                          "end": 41,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 38,
                            "end": 41,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 40,
                              "end": 41,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 40,
                                "end": 41,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 43,
                        "end": 53,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 46,
                          "end": 53
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
            "start": 59,
            "end": 87,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 63,
                "end": 86,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 86,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 66,
                      "end": 86,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 67,
                          "end": 74,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 71,
                            "end": 74,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 73,
                              "end": 74,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 73,
                                "end": 74,
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
                        "start": 76,
                        "end": 86,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 79,
                          "end": 86
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
            "start": 92,
            "end": 98,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 92,
              "end": 97,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 126,
            "end": 132,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 126,
              "end": 131,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
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
