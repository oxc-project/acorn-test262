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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 33,
                    "end": 43,
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
                      "value": 1,
                      "raw": "1"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 53,
                "end": 64,
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
                    "value": 2,
                    "raw": "2"
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
