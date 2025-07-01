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
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 15,
          "end": 21
        },
        "start": 13,
        "end": 21
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 41
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "NYI",
                  "raw": "'NYI'",
                  "start": 42,
                  "end": 47
                }
              ],
              "start": 32,
              "end": 48
            },
            "start": 26,
            "end": 49
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                },
                "init": null,
                "definite": false,
                "start": 56,
                "end": 57
              }
            ],
            "declare": false,
            "start": 52,
            "end": 58
          }
        ],
        "start": 22,
        "end": 60
      },
      "expression": false,
      "start": 0,
      "end": 60
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 60
}
```
