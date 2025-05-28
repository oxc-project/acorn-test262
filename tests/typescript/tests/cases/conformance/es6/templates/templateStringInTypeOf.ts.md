__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 32,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 31,
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
            "end": 31,
            "operator": "typeof",
            "argument": {
              "type": "TemplateLiteral",
              "start": 15,
              "end": 31,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 15,
                  "end": 21,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 26,
                  "end": 31,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 22,
                  "end": 25,
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
