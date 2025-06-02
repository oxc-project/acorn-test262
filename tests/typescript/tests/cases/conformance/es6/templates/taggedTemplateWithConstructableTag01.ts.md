__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 17,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "CtorTag",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 17,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 42,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 19,
        "end": 41,
        "tag": {
          "type": "Identifier",
          "start": 19,
          "end": 26,
          "decorators": [],
          "name": "CtorTag",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 27,
          "end": 41,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 27,
              "end": 41,
              "value": {
                "raw": "Hello world!",
                "cooked": "Hello world!"
              },
              "tail": true
            }
          ],
          "expressions": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
