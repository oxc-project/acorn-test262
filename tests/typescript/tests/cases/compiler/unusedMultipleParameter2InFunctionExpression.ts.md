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
            "name": "func",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
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
                    "start": 28,
                    "end": 34
                  },
                  "start": 26,
                  "end": 34
                },
                "start": 20,
                "end": 34
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
                    "start": 45,
                    "end": 51
                  },
                  "start": 43,
                  "end": 51
                },
                "start": 36,
                "end": 51
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "person3",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  },
                  "start": 60,
                  "end": 68
                },
                "start": 53,
                "end": 68
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
                        "start": 80,
                        "end": 86
                      },
                      "init": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 89,
                        "end": 91
                      },
                      "definite": false,
                      "start": 80,
                      "end": 91
                    }
                  ],
                  "declare": false,
                  "start": 76,
                  "end": 92
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
                      "start": 97,
                      "end": 104
                    },
                    "right": {
                      "type": "Literal",
                      "value": "Dummy value",
                      "raw": "\"Dummy value\"",
                      "start": 107,
                      "end": 120
                    },
                    "start": 97,
                    "end": 120
                  },
                  "directive": null,
                  "start": 97,
                  "end": 121
                }
              ],
              "start": 70,
              "end": 123
            },
            "expression": false,
            "start": 11,
            "end": 123
          },
          "definite": false,
          "start": 4,
          "end": 123
        }
      ],
      "declare": false,
      "start": 0,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
