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
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 9,
            "end": 44,
            "left": {
              "type": "TemplateLiteral",
              "start": 9,
              "end": 20,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 13,
                  "end": 17,
                  "value": "hi",
                  "raw": "\"hi\""
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 9,
                  "end": 12,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 18,
                  "end": 20,
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
              "start": 24,
              "end": 44,
              "properties": [
                {
                  "type": "Property",
                  "start": 26,
                  "end": 32,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 28,
                    "name": "hi",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 30,
                    "end": 32,
                    "value": 10,
                    "raw": "10"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 34,
                  "end": 43,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 34,
                    "end": 39,
                    "name": "hello",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 41,
                    "end": 43,
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
