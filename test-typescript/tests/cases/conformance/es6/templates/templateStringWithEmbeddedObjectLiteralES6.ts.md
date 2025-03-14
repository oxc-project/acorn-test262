__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 55,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 54,
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
            "end": 54,
            "expressions": [
              {
                "type": "ObjectExpression",
                "start": 32,
                "end": 48,
                "properties": [
                  {
                    "type": "Property",
                    "start": 34,
                    "end": 39,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 37,
                      "end": 39,
                      "raw": "10",
                      "value": 10
                    }
                  },
                  {
                    "type": "Property",
                    "start": 41,
                    "end": 46,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 44,
                      "end": 46,
                      "raw": "20",
                      "value": 20
                    }
                  }
                ]
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
                "start": 49,
                "end": 54,
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
