__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 61,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 60,
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
            "type": "BinaryExpression",
            "start": 25,
            "end": 60,
            "operator": "in",
            "left": {
              "type": "TemplateLiteral",
              "start": 25,
              "end": 36,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 33,
                  "raw": "\"hi\"",
                  "value": "hi"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 25,
                  "end": 28,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 34,
                  "end": 36,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
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
