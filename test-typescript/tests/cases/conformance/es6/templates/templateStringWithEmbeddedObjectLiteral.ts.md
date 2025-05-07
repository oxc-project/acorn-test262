__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 37,
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
            "type": "TemplateLiteral",
            "start": 8,
            "end": 37,
            "expressions": [
              {
                "type": "ObjectExpression",
                "start": 15,
                "end": 31,
                "properties": [
                  {
                    "type": "Property",
                    "start": 17,
                    "end": 22,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 18,
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
                      "start": 20,
                      "end": 22,
                      "raw": "10",
                      "value": 10,
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 24,
                    "end": 29,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 25,
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
                      "start": 27,
                      "end": 29,
                      "raw": "20",
                      "value": 20,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 14,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 32,
                "end": 37,
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
