__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 55,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 54,
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
            "type": "TemplateLiteral",
            "start": 25,
            "end": 54,
            "expressions": [
              {
                "type": "NewExpression",
                "start": 32,
                "end": 48,
                "callee": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 42,
                  "name": "String",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 43,
                    "end": 47,
                    "value": "Hi",
                    "raw": "\"Hi\""
                  }
                ],
                "typeArguments": null
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 25,
                "end": 31,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 49,
                "end": 54,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": true
              }
            ]
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
