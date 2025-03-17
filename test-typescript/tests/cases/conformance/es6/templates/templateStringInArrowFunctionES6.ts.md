__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 45,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 25,
            "end": 44,
            "async": false,
            "body": {
              "type": "TemplateLiteral",
              "start": 30,
              "end": 44,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 30,
                  "end": 36,
                  "tail": false,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 39,
                  "end": 44,
                  "tail": true,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  }
                }
              ]
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
