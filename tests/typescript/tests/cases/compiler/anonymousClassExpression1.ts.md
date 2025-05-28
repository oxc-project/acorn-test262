__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 59,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 19,
            "end": 57,
            "argument": {
              "type": "BinaryExpression",
              "start": 26,
              "end": 56,
              "left": {
                "type": "UnaryExpression",
                "start": 26,
                "end": 41,
                "operator": "typeof",
                "argument": {
                  "type": "ClassExpression",
                  "start": 33,
                  "end": 41,
                  "decorators": [],
                  "id": null,
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 39,
                    "end": 41,
                    "body": []
                  },
                  "abstract": false,
                  "declare": false
                },
                "prefix": true
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 46,
                "end": 56,
                "value": "function",
                "raw": "\"function\""
              }
            }
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
