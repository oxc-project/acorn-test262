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
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "name": "tag",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 17,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9,
                "end": 17,
                "typeName": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 17,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 38,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 19,
        "end": 37,
        "tag": {
          "type": "Identifier",
          "start": 19,
          "end": 22,
          "name": "tag",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 23,
          "end": 37,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 23,
              "end": 37,
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
