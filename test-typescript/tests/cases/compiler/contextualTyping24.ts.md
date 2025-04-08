__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 52,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 52,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 8,
                "end": 52,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 9,
                    "end": 43,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 43,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 11,
                        "end": 43,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 12,
                            "end": 22,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 14,
                              "end": 21,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 15,
                                "end": 21
                              }
                            }
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 23,
                            "end": 41,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 24,
                                "end": 32,
                                "name": "i",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 25,
                                  "end": 32,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 26,
                                    "end": 32
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 33,
                              "end": 40,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 34,
                                "end": 40
                              }
                            }
                          }
                        ]
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 44,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
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
      "start": 54,
      "end": 101,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 100,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 60,
          "end": 100,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 69,
              "end": 79,
              "name": "this",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 73,
                "end": 79,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 75,
                  "end": 79
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 81,
              "end": 89,
              "name": "a",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 82,
                "end": 89,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 83,
                  "end": 89
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 90,
            "end": 100,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 91,
                "end": 99,
                "argument": {
                  "type": "Literal",
                  "start": 98,
                  "end": 99,
                  "value": 5,
                  "raw": "5"
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
