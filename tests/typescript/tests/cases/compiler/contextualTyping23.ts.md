__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 53,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 52,
            "decorators": [],
            "name": "foo",
            "optional": false,
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
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
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 25,
                                  "end": 32,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 26,
                                    "end": 32
                                  }
                                }
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
                    }
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 82,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 81,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 60,
          "end": 81,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 71,
            "end": 81,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 72,
                "end": 80,
                "argument": {
                  "type": "Literal",
                  "start": 79,
                  "end": 80,
                  "value": 5,
                  "raw": "5"
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
