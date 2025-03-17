__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 25,
            "end": 42,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "TemplateLiteral",
              "start": 26,
              "end": 42,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 33,
                  "end": 36,
                  "value": 123,
                  "raw": "123"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 26,
                  "end": 32,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 37,
                  "end": 42,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
