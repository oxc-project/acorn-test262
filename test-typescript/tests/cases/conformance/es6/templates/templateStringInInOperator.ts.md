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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 43,
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
            "type": "BinaryExpression",
            "start": 8,
            "end": 43,
            "operator": "in",
            "left": {
              "type": "TemplateLiteral",
              "start": 8,
              "end": 19,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 12,
                  "end": 16,
                  "raw": "\"hi\"",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 8,
                  "end": 11,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 17,
                  "end": 19,
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
              "start": 23,
              "end": 43,
              "properties": [
                {
                  "type": "Property",
                  "start": 25,
                  "end": 31,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 25,
                    "end": 27,
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
                    "start": 29,
                    "end": 31,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 33,
                  "end": 42,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 38,
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
                    "start": 40,
                    "end": 42,
                    "raw": "20",
                    "value": 20,
                    "regex": null,
                    "bigint": null
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
