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
            "end": 123,
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
              },
              {
                "type": "Identifier",
                "start": 53,
                "end": 68,
                "name": "person3",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 60,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                      "id": {
                        "type": "Identifier",
                        "start": 80,
                        "end": 86,
                        "name": "unused",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 89,
                        "end": 91,
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
                  "start": 97,
                  "end": 121,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 97,
                    "end": 120,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 97,
                      "end": 104,
                      "name": "person2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 107,
                      "end": 120,
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
