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
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 17,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 19,
        "end": 37,
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
          "end": 22,
          "decorators": [],
          "name": "tag",
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
