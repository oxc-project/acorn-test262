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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 65,
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
                "tag": {
                  "type": "TemplateLiteral",
                  "start": 18,
                  "end": 37,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 18,
                      "end": 37,
                      "value": {
                        "raw": "template string 1",
                        "cooked": "template string 1"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 42,
                  "end": 61,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 42,
                      "end": 61,
                      "value": {
                        "raw": "template string 2",
                        "cooked": "template string 2"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                }
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
