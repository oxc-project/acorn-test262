__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 184,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 184,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 72,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 71,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 66,
                  "decorators": [],
                  "name": "unused",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 69,
                  "end": 71,
                  "raw": "20",
                  "value": 20
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 77,
            "end": 153,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 81,
                "end": 153,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 86,
                  "decorators": [],
                  "name": "maker",
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 89,
                  "end": 153,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 120,
                    "end": 153,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 130,
                        "end": 147,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 134,
                            "end": 146,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 141,
                              "decorators": [],
                              "name": "unused2",
                              "optional": false
                            },
                            "init": {
                              "type": "Literal",
                              "start": 144,
                              "end": 146,
                              "raw": "22",
                              "value": 22
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var"
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 99,
                      "end": 112,
                      "decorators": [],
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 104,
                        "end": 112,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 106,
                          "end": 112
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 113,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 115,
                      "end": 119
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 158,
            "end": 182,
            "expression": {
              "type": "AssignmentExpression",
              "start": 158,
              "end": 181,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 158,
                "end": 165,
                "decorators": [],
                "name": "person2",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 168,
                "end": 181,
                "raw": "\"dummy value\"",
                "value": "dummy value"
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
        "end": 16,
        "decorators": [],
        "name": "greeter",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 31,
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 48,
          "decorators": [],
          "name": "person2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
