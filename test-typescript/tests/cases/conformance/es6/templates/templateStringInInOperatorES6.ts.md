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
            "type": "BinaryExpression",
            "start": 25,
            "end": 60,
            "left": {
              "type": "TemplateLiteral",
              "start": 25,
              "end": 36,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 33,
                  "value": "hi",
                  "raw": "\"hi\""
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 25,
                  "end": 28,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 34,
                  "end": 36,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "operator": "in",
            "right": {
              "type": "ObjectExpression",
              "start": 40,
              "end": 60,
              "properties": [
                {
                  "type": "Property",
                  "start": 42,
                  "end": 48,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 44,
                    "name": "hi",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 46,
                    "end": 48,
                    "value": 10,
                    "raw": "10"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 50,
                  "end": 59,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 55,
                    "name": "hello",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 57,
                    "end": 59,
                    "value": 20,
                    "raw": "20"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
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
