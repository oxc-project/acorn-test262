__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "abc",
                    "cooked": "abc"
                  },
                  "tail": false,
                  "start": 8,
                  "end": 14
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "def",
                    "cooked": "def"
                  },
                  "tail": true,
                  "start": 17,
                  "end": 22
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 15,
                  "end": 16
                }
              ],
              "start": 8,
              "end": 22
            },
            "operator": "/",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 25,
              "end": 26
            },
            "start": 8,
            "end": 26
          },
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
