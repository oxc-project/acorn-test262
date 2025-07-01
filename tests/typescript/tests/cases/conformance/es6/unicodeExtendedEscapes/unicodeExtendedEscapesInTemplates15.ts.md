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
                  "raw": "\\u{abcd}\\u{ef12}\\u{3456}\\u{7890}",
                  "cooked": "ꯍ㑖碐"
                },
                "tail": true,
                "start": 8,
                "end": 42
              }
            ],
            "expressions": [],
            "start": 8,
            "end": 42
          },
          "definite": false,
          "start": 4,
          "end": 42
        }
      ],
      "declare": false,
      "start": 0,
      "end": 43
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
