__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 53,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 31,
      "end": 53,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 41,
        "end": 48,
        "elements": [
          {
            "type": "Literal",
            "start": 42,
            "end": 43,
            "value": 0,
            "raw": "0"
          },
          {
            "type": "Literal",
            "start": 45,
            "end": 47,
            "value": "",
            "raw": "\"\""
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 53,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
