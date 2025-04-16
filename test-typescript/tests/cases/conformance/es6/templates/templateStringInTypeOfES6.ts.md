__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 49,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 48,
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
            "end": 48,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "TemplateLiteral",
              "start": 32,
              "end": 48,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 39,
                  "end": 42,
                  "value": 123,
                  "raw": "123"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 32,
                  "end": 38,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 43,
                  "end": 48,
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
