generatorReturnTypeFallback.3.ts
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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 48,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 46,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 26,
                "end": 45,
                "definite": false,
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
                  "argument": {
                    "type": "Literal",
                    "start": 44,
                    "end": 45,
                    "raw": "1",
                    "value": 1
                  },
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
