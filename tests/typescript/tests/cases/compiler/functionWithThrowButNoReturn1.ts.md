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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "callee": {
                "type": "Identifier",
                "start": 36,
                "end": 41,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 42,
                  "end": 47,
                  "value": "NYI",
                  "raw": "'NYI'"
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 52,
            "end": 58,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 56,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
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
