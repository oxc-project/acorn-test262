__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 45,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 9,
            "end": 44,
            "operator": "in",
            "left": {
              "type": "TemplateLiteral",
              "start": 9,
              "end": 20,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 13,
                  "end": 17,
                  "raw": "\"hi\"",
                  "value": "hi"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 9,
                  "end": 12,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 18,
                  "end": 20,
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
              "start": 24,
              "end": 44,
              "properties": [
                {
                  "type": "Property",
                  "start": 26,
                  "end": 32,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 28,
                    "decorators": [],
                    "name": "hi",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 30,
                    "end": 32,
                    "raw": "10",
                    "value": 10
                  }
                },
                {
                  "type": "Property",
                  "start": 34,
                  "end": 43,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 39,
                    "decorators": [],
                    "name": "hello",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 41,
                    "end": 43,
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
