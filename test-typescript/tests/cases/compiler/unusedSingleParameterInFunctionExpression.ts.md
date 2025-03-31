__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 60,
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
            "end": 60,
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
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 36,
              "end": 60,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 42,
                  "end": 58,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 46,
                      "end": 57,
                      "id": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 52,
                        "name": "unused",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 55,
                        "end": 57,
                        "value": 20,
                        "raw": "20"
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
