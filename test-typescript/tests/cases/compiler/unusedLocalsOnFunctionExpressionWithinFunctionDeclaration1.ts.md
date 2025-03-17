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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 31,
          "name": "person",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 48,
          "name": "person2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 66,
                  "name": "unused",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 69,
                  "end": 71,
                  "value": 20,
                  "raw": "20"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 86,
                  "name": "maker",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 89,
                  "end": 153,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 99,
                      "end": 112,
                      "name": "child",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 104,
                        "end": 112,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 106,
                          "end": 112
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "id": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 141,
                              "name": "unused2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Literal",
                              "start": 144,
                              "end": 146,
                              "value": 22,
                              "raw": "22"
                            },
                            "definite": false
                          }
                        ],
                        "kind": "var",
                        "declare": false
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
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
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "name": "person2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 168,
                "end": 181,
                "value": "dummy value",
                "raw": "\"dummy value\""
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
