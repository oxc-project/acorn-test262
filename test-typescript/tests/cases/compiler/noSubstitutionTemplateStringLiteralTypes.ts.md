__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 14,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 9,
                "end": 14,
                "literal": {
                  "type": "TemplateLiteral",
                  "start": 9,
                  "end": 14,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 9,
                      "end": 14,
                      "tail": true,
                      "value": {
                        "cooked": "foo",
                        "raw": "foo"
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 17,
            "end": 22,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
