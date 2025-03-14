assignmentCompatibilityForConstrainedTypeParameters.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 125,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 125,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 46,
            "end": 123,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 74,
              "end": 123,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 80,
                  "end": 89,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 84,
                      "end": 88,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 88,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 85,
                          "end": 88,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 87,
                            "end": 88,
                            "typeName": {
                              "type": "Identifier",
                              "start": 87,
                              "end": 88,
                              "decorators": [],
                              "name": "S",
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
                  "start": 94,
                  "end": 103,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 98,
                      "end": 102,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 102,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 99,
                          "end": 102,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 101,
                            "end": 102,
                            "typeName": {
                              "type": "Identifier",
                              "start": 101,
                              "end": 102,
                              "decorators": [],
                              "name": "T",
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
                  "start": 111,
                  "end": 117,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 111,
                    "end": 116,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 112,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
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
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 58,
              "end": 71,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 59,
                  "end": 70,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 69,
                    "end": 70,
                    "typeName": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  },
                  "out": false
                }
              ]
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
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 38,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 23,
              "end": 38,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 25,
                  "end": 36,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 28,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 30,
                      "end": 36
                    }
                  }
                }
              ]
            },
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
