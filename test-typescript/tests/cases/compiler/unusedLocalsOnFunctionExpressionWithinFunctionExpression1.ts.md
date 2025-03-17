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
            "end": 191,
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
                  "type": "VariableDeclaration",
                  "start": 84,
                  "end": 160,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 88,
                      "end": 160,
                      "id": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 93,
                        "name": "maker",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 96,
                        "end": 160,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 106,
                            "end": 119,
                            "name": "child",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 111,
                              "end": 119,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 113,
                                "end": 119
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                                  "id": {
                                    "type": "Identifier",
                                    "start": 141,
                                    "end": 148,
                                    "name": "unused2",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "start": 151,
                                    "end": 153,
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
                          "start": 120,
                          "end": 126,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 122,
                            "end": 126
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
                  "start": 165,
                  "end": 189,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 165,
                    "end": 188,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 172,
                      "name": "person2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 175,
                      "end": 188,
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
