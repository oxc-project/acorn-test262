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
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "status",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 39
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 42,
                      "end": 43
                    },
                    "definite": false,
                    "start": 33,
                    "end": 43
                  }
                ],
                "declare": false,
                "start": 29,
                "end": 44
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "status",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 59
                  },
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 62,
                    "end": 63
                  },
                  "start": 53,
                  "end": 63
                },
                "directive": null,
                "start": 53,
                "end": 64
              }
            ],
            "start": 19,
            "end": 70
          }
        ],
        "start": 13,
        "end": 72
      },
      "expression": false,
      "start": 0,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 72
}
```
