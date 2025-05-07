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
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 11,
        "end": 91,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 58,
            "end": 89,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 64,
                "end": 88,
                "definite": false,
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
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 81,
                    "end": 88,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
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
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 9,
        "raw": "false",
        "value": false,
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
