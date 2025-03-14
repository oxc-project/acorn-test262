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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "x",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TemplateLiteral",
                  "start": 34,
                  "end": 61,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 41,
                      "end": 44,
                      "raw": "123",
                      "value": 123
                    },
                    {
                      "type": "Literal",
                      "start": 52,
                      "end": 55,
                      "raw": "456",
                      "value": 456
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 34,
                      "end": 40,
                      "tail": false,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 45,
                      "end": 51,
                      "tail": false,
                      "value": {
                        "cooked": "def",
                        "raw": "def"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 56,
                      "end": 61,
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
