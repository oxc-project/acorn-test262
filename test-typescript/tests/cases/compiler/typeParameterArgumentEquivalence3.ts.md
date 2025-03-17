__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 145,
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
        "end": 145,
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
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 44,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 33,
                      "end": 44,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 34,
                          "end": 38,
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
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
            "start": 50,
            "end": 75,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 54,
                "end": 74,
                "id": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 74,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 55,
                    "end": 74,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 57,
                      "end": 74,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 58,
                          "end": 62,
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 64,
                        "end": 74,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 67,
                          "end": 74
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
            "start": 80,
            "end": 86,
            "expression": {
              "type": "AssignmentExpression",
              "start": 80,
              "end": 85,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
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
            "start": 114,
            "end": 120,
            "expression": {
              "type": "AssignmentExpression",
              "start": 114,
              "end": 119,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
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
