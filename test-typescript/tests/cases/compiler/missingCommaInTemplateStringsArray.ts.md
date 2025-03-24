__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 12,
            "end": 65,
            "elements": [
              {
                "type": "TaggedTemplateExpression",
                "start": 18,
                "end": 61,
                "tag": {
                  "type": "TemplateLiteral",
                  "start": 18,
                  "end": 37,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 18,
                      "end": 37,
                      "value": {
                        "cooked": "template string 1",
                        "raw": "template string 1"
                      },
                      "tail": true
                    }
                  ]
                },
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 42,
                  "end": 61,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 42,
                      "end": 61,
                      "value": {
                        "cooked": "template string 2",
                        "raw": "template string 2"
                      },
                      "tail": true
                    }
                  ]
                },
                "typeArguments": null
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
