__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 91,
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 9,
        "value": false,
        "raw": "false"
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 11,
        "end": 91,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 58,
            "end": 89,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 64,
                "end": 88,
                "id": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 68,
                  "end": 88,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 81,
                    "end": 88,
                    "body": []
                  },
                  "expression": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
