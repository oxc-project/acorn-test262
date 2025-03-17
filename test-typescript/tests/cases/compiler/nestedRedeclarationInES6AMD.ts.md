__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 72,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 72,
        "body": [
          {
            "type": "BlockStatement",
            "start": 19,
            "end": 70,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 29,
                "end": 44,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 33,
                    "end": 43,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 39,
                      "decorators": [],
                      "name": "status",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 42,
                      "end": 43,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ],
                "declare": false,
                "kind": "let"
              },
              {
                "type": "ExpressionStatement",
                "start": 53,
                "end": 64,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 53,
                  "end": 63,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 59,
                    "decorators": [],
                    "name": "status",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 62,
                    "end": 63,
                    "raw": "2",
                    "value": 2
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
