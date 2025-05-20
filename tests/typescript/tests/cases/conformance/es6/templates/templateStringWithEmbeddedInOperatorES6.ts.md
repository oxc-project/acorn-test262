__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 49,
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
            "end": 49,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 15,
                "end": 43,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 15,
                  "end": 19,
                  "raw": "\"hi\"",
                  "value": "hi"
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
                        "value": 10
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
                        "value": 20
                      }
                    }
                  ]
                }
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
                "start": 44,
                "end": 49,
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
