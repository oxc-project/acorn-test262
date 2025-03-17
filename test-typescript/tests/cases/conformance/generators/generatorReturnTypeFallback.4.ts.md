__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 198,
  "end": 246,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 198,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 209,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 212,
        "end": 246,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 218,
            "end": 244,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 224,
                "end": 243,
                "id": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 233,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 225,
                    "end": 233,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 227,
                      "end": 233
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 236,
                  "end": 243,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 242,
                    "end": 243,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
