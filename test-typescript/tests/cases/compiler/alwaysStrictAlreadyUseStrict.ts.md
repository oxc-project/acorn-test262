__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "FunctionDeclaration",
      "start": 13,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 45,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 32,
            "end": 43,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 42,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 40,
                  "end": 42,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "var",
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
