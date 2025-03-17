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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "CtorTag",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 17,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "name": "CtorTag",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 27,
          "end": 41,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 27,
              "end": 41,
              "value": {
                "cooked": "Hello world!",
                "raw": "Hello world!"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
