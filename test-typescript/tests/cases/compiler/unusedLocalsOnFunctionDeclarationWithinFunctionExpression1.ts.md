__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "name": "greeter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 14,
            "end": 184,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 38,
                "name": "person",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 32,
                    "end": 38
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 40,
                "end": 55,
                "name": "person2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 49,
                    "end": 55
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 184,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 63,
                  "end": 79,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 67,
                      "end": 78,
                      "id": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 73,
                        "name": "unused",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 76,
                        "end": 78,
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
                  "type": "FunctionDeclaration",
                  "start": 84,
                  "end": 153,
                  "id": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 98,
                    "name": "maker",
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
