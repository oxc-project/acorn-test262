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
            "type": "ArrowFunctionExpression",
            "start": 25,
            "end": 44,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TemplateLiteral",
              "start": 30,
              "end": 44,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 30,
                  "end": 36,
                  "value": {
                    "cooked": "abc",
                    "raw": "abc"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 39,
                  "end": 44,
                  "value": {
                    "cooked": "def",
                    "raw": "def"
                  },
                  "tail": true
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
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
