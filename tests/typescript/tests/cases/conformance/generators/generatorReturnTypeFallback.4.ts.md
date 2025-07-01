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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 208,
        "end": 209
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 227,
                      "end": 233
                    },
                    "start": 225,
                    "end": 233
                  },
                  "start": 224,
                  "end": 233
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 242,
                    "end": 243
                  },
                  "start": 236,
                  "end": 243
                },
                "definite": false,
                "start": 224,
                "end": 243
              }
            ],
            "declare": false,
            "start": 218,
            "end": 244
          }
        ],
        "start": 212,
        "end": 246
      },
      "expression": false,
      "start": 198,
      "end": 246
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 198,
  "end": 246
}
```
