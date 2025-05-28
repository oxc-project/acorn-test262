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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "tag",
            "optional": false,
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
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "tag",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 23,
          "end": 37,
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
