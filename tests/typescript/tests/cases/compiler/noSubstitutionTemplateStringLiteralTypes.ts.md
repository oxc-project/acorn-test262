__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 22,
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
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 9,
                      "end": 14,
                      "value": {
                        "raw": "foo",
                        "cooked": "foo"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 17,
            "end": 22,
            "value": "foo",
            "raw": "\"foo\""
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
