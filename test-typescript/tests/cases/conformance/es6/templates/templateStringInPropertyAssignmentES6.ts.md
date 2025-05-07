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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 46,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TemplateLiteral",
                  "start": 17,
                  "end": 44,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 24,
                      "end": 27,
                      "raw": "123",
                      "value": 123,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 35,
                      "end": 38,
                      "raw": "456",
                      "value": 456,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 17,
                      "end": 23,
                      "tail": false,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 28,
                      "end": 34,
                      "tail": false,
                      "value": {
                        "cooked": "def",
                        "raw": "def"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 39,
                      "end": 44,
                      "tail": true,
                      "value": {
                        "cooked": "ghi",
                        "raw": "ghi"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
