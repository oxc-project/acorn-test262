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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
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
                      "tail": true,
                      "value": {
                        "cooked": "template string 2",
                        "raw": "template string 2"
                      }
                    }
                  ]
                },
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
                      "tail": true,
                      "value": {
                        "cooked": "template string 1",
                        "raw": "template string 1"
                      }
                    }
                  ]
                },
                "typeArguments": null
              }
            ]
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
