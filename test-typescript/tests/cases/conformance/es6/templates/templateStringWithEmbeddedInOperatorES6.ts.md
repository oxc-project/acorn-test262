__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 66,
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
            "type": "TemplateLiteral",
            "start": 25,
            "end": 66,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 32,
                "end": 60,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 32,
                  "end": 36,
                  "raw": "\"hi\"",
                  "value": "hi"
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 40,
                  "end": 60,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 42,
                      "end": 48,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 44,
                        "decorators": [],
                        "name": "hi",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 46,
                        "end": 48,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    {
                      "type": "Property",
                      "start": 50,
                      "end": 59,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 55,
                        "decorators": [],
                        "name": "hello",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 57,
                        "end": 59,
                        "raw": "20",
                        "value": 20
                      }
                    }
                  ]
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 25,
                "end": 31,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 61,
                "end": 66,
                "tail": true,
                "value": {
                  "cooked": "def",
                  "raw": "def"
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
