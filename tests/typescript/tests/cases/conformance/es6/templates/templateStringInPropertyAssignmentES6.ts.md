__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 46,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 46,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 44,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TemplateLiteral",
                  "start": 17,
                  "end": 44,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 17,
                      "end": 23,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 28,
                      "end": 34,
                      "value": {
                        "cooked": "def",
                        "raw": "def"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 39,
                      "end": 44,
                      "value": {
                        "cooked": "ghi",
                        "raw": "ghi"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 24,
                      "end": 27,
                      "value": 123,
                      "raw": "123"
                    },
                    {
                      "type": "Literal",
                      "start": 35,
                      "end": 38,
                      "value": 456,
                      "raw": "456"
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
