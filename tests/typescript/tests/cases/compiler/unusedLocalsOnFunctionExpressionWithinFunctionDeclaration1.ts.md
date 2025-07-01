__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
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
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 17,
          "end": 31
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
              "start": 42,
              "end": 48
            },
            "start": 40,
            "end": 48
          },
          "start": 33,
          "end": 48
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
                  "start": 60,
                  "end": 66
                },
                "init": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 69,
                  "end": 71
                },
                "definite": false,
                "start": 60,
                "end": 71
              }
            ],
            "declare": false,
            "start": 56,
            "end": 72
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
                  "start": 81,
                  "end": 86
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
                  "start": 89,
                  "end": 153
                },
                "definite": false,
                "start": 81,
                "end": 153
              }
            ],
            "declare": false,
            "start": 77,
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
        "start": 50,
        "end": 184
      },
      "expression": false,
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
