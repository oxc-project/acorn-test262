__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
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
            "type": "NewExpression",
            "start": 8,
            "end": 26,
            "callee": {
              "type": "TemplateLiteral",
              "start": 12,
              "end": 26,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 12,
                  "end": 18,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 21,
                  "end": 26,
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
                  "start": 19,
                  "end": 20,
                  "value": 1,
                  "raw": "1"
                }
              ]
            },
            "typeArguments": null,
            "arguments": []
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
