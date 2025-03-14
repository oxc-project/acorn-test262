typeParameterArgumentEquivalence2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 40,
                                "end": 41,
                                "decorators": [],
                                "name": "U",
                                "optional": false
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 73,
                                "end": 74,
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
                        "start": 76,
                        "end": 86,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 79,
                          "end": 86
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
            "start": 92,
            "end": 98,
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
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 126,
            "end": 132,
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
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
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
