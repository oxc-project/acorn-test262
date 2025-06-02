__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 8,
            "end": 25,
            "operator": "+",
            "argument": {
              "type": "TemplateLiteral",
              "start": 9,
              "end": 25,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 9,
                  "end": 15,
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 20,
                  "end": 25,
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 16,
                  "end": 19,
                  "value": 123,
                  "raw": "123"
                }
              ]
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
