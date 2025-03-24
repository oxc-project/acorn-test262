__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "func",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 106,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 20,
                "end": 34,
                "name": "person",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 26,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 28,
                    "end": 34
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 36,
                "end": 51,
                "name": "person2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 45,
                    "end": 51
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 53,
              "end": 106,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 59,
                  "end": 75,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 63,
                      "end": 74,
                      "id": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 69,
                        "name": "unused",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 72,
                        "end": 74,
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
                  "type": "ExpressionStatement",
                  "start": 80,
                  "end": 104,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 80,
                    "end": 103,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 87,
                      "name": "person2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 90,
                      "end": 103,
                      "value": "Dummy value",
                      "raw": "\"Dummy value\""
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
