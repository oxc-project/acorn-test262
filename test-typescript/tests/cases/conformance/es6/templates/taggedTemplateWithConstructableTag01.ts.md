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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 17,
        "body": []
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 42,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 19,
        "end": 41,
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
              "tail": true,
              "value": {
                "cooked": "Hello world!",
                "raw": "Hello world!"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 19,
          "end": 26,
          "decorators": [],
          "name": "CtorTag",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
