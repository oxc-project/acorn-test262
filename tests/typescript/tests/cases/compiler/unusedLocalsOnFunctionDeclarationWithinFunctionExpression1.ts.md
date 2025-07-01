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
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "maker",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 98
                  },
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
                          "start": 106,
                          "end": 112
                        },
                        "start": 104,
                        "end": 112
                      },
                      "start": 99,
                      "end": 112
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 115,
                      "end": 119
                    },
                    "start": 113,
                    "end": 119
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
                              "start": 134,
                              "end": 141
                            },
                            "init": {
                              "type": "Literal",
                              "value": 22,
                              "raw": "22",
                              "start": 144,
                              "end": 146
                            },
                            "definite": false,
                            "start": 134,
                            "end": 146
                          }
                        ],
                        "declare": false,
                        "start": 130,
                        "end": 147
                      }
                    ],
                    "start": 120,
                    "end": 153
                  },
                  "expression": false,
                  "start": 84,
                  "end": 153
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
                      "start": 158,
                      "end": 165
                    },
                    "right": {
                      "type": "Literal",
                      "value": "dummy value",
                      "raw": "\"dummy value\"",
                      "start": 168,
                      "end": 181
                    },
                    "start": 158,
                    "end": 181
                  },
                  "directive": null,
                  "start": 158,
                  "end": 182
                }
              ],
              "start": 57,
              "end": 184
            },
            "expression": false,
            "start": 14,
            "end": 184
          },
          "definite": false,
          "start": 4,
          "end": 184
        }
      ],
      "declare": false,
      "start": 0,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
