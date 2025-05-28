__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 48,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 46,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 45,
                "id": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 29,
                      "end": 35
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 38,
                  "end": 45,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 44,
                    "end": 45,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
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
