__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 8,
                  "end": 11
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 17,
                  "end": 19
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 12,
                  "end": 16
                }
              ],
              "start": 8,
              "end": 19
            },
            "operator": "in",
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hi",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 25,
                    "end": 27
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 29,
                    "end": 31
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 25,
                  "end": 31
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hello",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 38
                  },
                  "value": {
                    "type": "Literal",
                    "value": 20,
                    "raw": "20",
                    "start": 40,
                    "end": 42
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 33,
                  "end": 42
                }
              ],
              "start": 23,
              "end": 43
            },
            "start": 8,
            "end": 43
          },
          "definite": false,
          "start": 4,
          "end": 43
        }
      ],
      "declare": false,
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
