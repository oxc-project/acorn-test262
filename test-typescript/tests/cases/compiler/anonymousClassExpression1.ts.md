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
                "prefix": true,
                "argument": {
                  "type": "ClassExpression",
                  "start": 33,
                  "end": 41,
                  "id": null,
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 39,
                    "end": 41,
                    "body": []
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                }
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
