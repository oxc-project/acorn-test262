__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 123,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 70,
              "end": 123,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 76,
                  "end": 92,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 80,
                      "end": 91,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 86,
                        "decorators": [],
                        "name": "unused",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 89,
                        "end": 91,
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
                  "type": "ExpressionStatement",
                  "start": 97,
                  "end": 121,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 97,
                    "end": 120,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 104,
                      "decorators": [],
                      "name": "person2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 107,
                      "end": 120,
                      "raw": "\"Dummy value\"",
                      "value": "Dummy value",
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
                "start": 20,
                "end": 34,
                "decorators": [],
                "name": "person",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 26,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 28,
                    "end": 34
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 36,
                "end": 51,
                "decorators": [],
                "name": "person2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 45,
                    "end": 51
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 53,
                "end": 68,
                "decorators": [],
                "name": "person3",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 60,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
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
