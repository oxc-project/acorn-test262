__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "greeter",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 11
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "person",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 32,
                    "end": 38
                  },
                  "start": 30,
                  "end": 38
                },
                "start": 24,
                "end": 38
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "person2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 49,
                    "end": 55
                  },
                  "start": 47,
                  "end": 55
                },
                "start": 40,
                "end": 55
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unused",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 73
                      },
                      "init": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 76,
                        "end": 78
                      },
                      "definite": false,
                      "start": 67,
                      "end": 78
                    }
                  ],
                  "declare": false,
                  "start": 63,
                  "end": 79
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maker",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 93
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 113,
                                "end": 119
                              },
                              "start": 111,
                              "end": 119
                            },
                            "start": 106,
                            "end": 119
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 122,
                            "end": 126
                          },
                          "start": 120,
                          "end": 126
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "kind": "var",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "unused2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 141,
                                    "end": 148
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "value": 22,
                                    "raw": "22",
                                    "start": 151,
                                    "end": 153
                                  },
                                  "definite": false,
                                  "start": 141,
                                  "end": 153
                                }
                              ],
                              "declare": false,
                              "start": 137,
                              "end": 154
                            }
                          ],
                          "start": 127,
                          "end": 160
                        },
                        "expression": false,
                        "start": 96,
                        "end": 160
                      },
                      "definite": false,
                      "start": 88,
                      "end": 160
                    }
                  ],
                  "declare": false,
                  "start": 84,
                  "end": 160
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "person2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 172
                    },
                    "right": {
                      "type": "Literal",
                      "value": "dummy value",
                      "raw": "\"dummy value\"",
                      "start": 175,
                      "end": 188
                    },
                    "start": 165,
                    "end": 188
                  },
                  "directive": null,
                  "start": 165,
                  "end": 189
                }
              ],
              "start": 57,
              "end": 191
            },
            "expression": false,
            "start": 14,
            "end": 191
          },
          "definite": false,
          "start": 4,
          "end": 191
        }
      ],
      "declare": false,
      "start": 0,
      "end": 191
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 191
}
```
