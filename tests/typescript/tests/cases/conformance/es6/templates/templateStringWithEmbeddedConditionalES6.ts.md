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
                "start": 34,
                "end": 39
              }
            ],
            "expressions": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 15,
                  "end": 19
                },
                "consequent": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 22,
                  "end": 27
                },
                "alternate": {
                  "type": "Literal",
                  "value": " ",
                  "raw": "\" \"",
                  "start": 30,
                  "end": 33
                },
                "start": 15,
                "end": 33
              }
            ],
            "start": 8,
            "end": 39
          },
          "definite": false,
          "start": 4,
          "end": 39
        }
      ],
      "declare": false,
      "start": 0,
      "end": 40
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 40
}
```
