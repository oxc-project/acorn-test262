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
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "TaggedTemplateExpression",
                "tag": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "template string 1",
                        "cooked": "template string 1"
                      },
                      "tail": true,
                      "start": 18,
                      "end": 37
                    }
                  ],
                  "expressions": [],
                  "start": 18,
                  "end": 37
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "template string 2",
                        "cooked": "template string 2"
                      },
                      "tail": true,
                      "start": 42,
                      "end": 61
                    }
                  ],
                  "expressions": [],
                  "start": 42,
                  "end": 61
                },
                "start": 18,
                "end": 61
              }
            ],
            "start": 12,
            "end": 65
          },
          "definite": false,
          "start": 4,
          "end": 65
        }
      ],
      "declare": false,
      "start": 0,
      "end": 66
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
