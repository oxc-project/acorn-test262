__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 60,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 60,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 26,
            "end": 49,
            "argument": {
              "type": "NewExpression",
              "start": 32,
              "end": 48,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 42,
                  "end": 47,
                  "raw": "'NYI'",
                  "value": "NYI",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 36,
                "end": 41,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 52,
            "end": 58,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 56,
                "end": 57,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 21,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 15,
          "end": 21
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
