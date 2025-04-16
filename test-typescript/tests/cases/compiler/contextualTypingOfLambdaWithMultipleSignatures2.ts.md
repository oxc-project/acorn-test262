__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 59,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 59,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 13,
                    "end": 33,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 14,
                        "end": 23,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 15,
                          "end": 23,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 17,
                            "end": 23
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 24,
                      "end": 32,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 26,
                        "end": 32
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 38,
                    "end": 57,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 39,
                        "end": 48,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 40,
                          "end": 48,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 42,
                            "end": 48
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  }
                ]
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
      "start": 62,
      "end": 90,
      "expression": {
        "type": "AssignmentExpression",
        "start": 62,
        "end": 90,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 66,
          "end": 90,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 73,
            "end": 90,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 75,
                "end": 88,
                "argument": {
                  "type": "MemberExpression",
                  "start": 82,
                  "end": 88,
                  "object": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 88,
                    "name": "asdf",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            ]
          },
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
