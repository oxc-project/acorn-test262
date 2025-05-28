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
        "start": 212,
        "end": 246,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 218,
            "end": 244,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 224,
                "end": 243,
                "id": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 233,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 225,
                    "end": 233,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 227,
                      "end": 233
                    }
                  }
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
