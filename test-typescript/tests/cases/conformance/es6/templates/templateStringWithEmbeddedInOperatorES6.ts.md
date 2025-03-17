__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 66,
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
            "type": "TemplateLiteral",
            "start": 25,
            "end": 66,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 32,
                "end": 60,
                "left": {
                  "type": "Literal",
                  "start": 32,
                  "end": 36,
                  "value": "hi",
                  "raw": "\"hi\""
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
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 25,
                "end": 31,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 61,
                "end": 66,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": true
              }
            ]
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
