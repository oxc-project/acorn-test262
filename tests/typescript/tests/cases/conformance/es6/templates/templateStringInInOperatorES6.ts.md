__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 43,
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
            "type": "BinaryExpression",
            "start": 8,
            "end": 43,
            "left": {
              "type": "TemplateLiteral",
              "start": 8,
              "end": 19,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 8,
                  "end": 11,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 17,
                  "end": 19,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 12,
                  "end": 16,
                  "value": "hi",
                  "raw": "\"hi\""
                }
              ]
            },
            "operator": "in",
            "right": {
              "type": "ObjectExpression",
              "start": 23,
              "end": 43,
              "properties": [
                {
                  "type": "Property",
                  "start": 25,
                  "end": 31,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 27,
                    "decorators": [],
                    "name": "hi",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 29,
                    "end": 31,
                    "value": 10,
                    "raw": "10"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 33,
                  "end": 42,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 38,
                    "decorators": [],
                    "name": "hello",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 40,
                    "end": 42,
                    "value": 20,
                    "raw": "20"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
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
