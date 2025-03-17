__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 39,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 38,
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
            "type": "TemplateLiteral",
            "start": 9,
            "end": 38,
            "expressions": [
              {
                "type": "ObjectExpression",
                "start": 16,
                "end": 32,
                "properties": [
                  {
                    "type": "Property",
                    "start": 18,
                    "end": 23,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 19,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 21,
                      "end": 23,
                      "raw": "10",
                      "value": 10
                    }
                  },
                  {
                    "type": "Property",
                    "start": 25,
                    "end": 30,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 26,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 28,
                      "end": 30,
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
                "start": 9,
                "end": 15,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 33,
                "end": 38,
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
