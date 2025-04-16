__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 63,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 25,
            "end": 63,
            "properties": [
              {
                "type": "Property",
                "start": 31,
                "end": 61,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TemplateLiteral",
                  "start": 34,
                  "end": 61,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 41,
                      "end": 44,
                      "value": 123,
                      "raw": "123"
                    },
                    {
                      "type": "Literal",
                      "start": 52,
                      "end": 55,
                      "value": 456,
                      "raw": "456"
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 34,
                      "end": 40,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 45,
                      "end": 51,
                      "value": {
                        "cooked": "def",
                        "raw": "def"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 56,
                      "end": 61,
                      "value": {
                        "cooked": "ghi",
                        "raw": "ghi"
                      },
                      "tail": true
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
