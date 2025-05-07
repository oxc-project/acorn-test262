__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "greeter",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 14,
            "end": 191,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 57,
              "end": 191,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 73,
                        "decorators": [],
                        "name": "unused",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 76,
                        "end": 78,
                        "raw": "20",
                        "value": 20,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 84,
                  "end": 160,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 160,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 93,
                        "decorators": [],
                        "name": "maker",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 96,
                        "end": 160,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 127,
                          "end": 160,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 137,
                              "end": 154,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 141,
                                  "end": 153,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 141,
                                    "end": 148,
                                    "decorators": [],
                                    "name": "unused2",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "start": 151,
                                    "end": 153,
                                    "raw": "22",
                                    "value": 22,
                                    "regex": null,
                                    "bigint": null
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
                            "start": 106,
                            "end": 119,
                            "decorators": [],
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 111,
                              "end": 119,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 113,
                                "end": 119
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 120,
                          "end": 126,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 122,
                            "end": 126
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 165,
                  "end": 189,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 165,
                    "end": 188,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 172,
                      "decorators": [],
                      "name": "person2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 175,
                      "end": 188,
                      "raw": "\"dummy value\"",
                      "value": "dummy value",
                      "regex": null,
                      "bigint": null
                    }
                  }
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
                "start": 24,
                "end": 38,
                "decorators": [],
                "name": "person",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 32,
                    "end": 38
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 40,
                "end": 55,
                "decorators": [],
                "name": "person2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 49,
                    "end": 55
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
