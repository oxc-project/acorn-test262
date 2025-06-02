__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 37,
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
            "type": "TemplateLiteral",
            "start": 8,
            "end": 37,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 14,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 32,
                "end": 37,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "NewExpression",
                "start": 15,
                "end": 31,
                "callee": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 25,
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 26,
                    "end": 30,
                    "value": "Hi",
                    "raw": "\"Hi\""
                  }
                ]
              }
            ]
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
