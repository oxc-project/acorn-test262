__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 50,
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
            "type": "TemplateLiteral",
            "start": 9,
            "end": 50,
            "expressions": [
              {
                "type": "BinaryExpression",
                "start": 16,
                "end": 44,
                "left": {
                  "type": "Literal",
                  "start": 16,
                  "end": 20,
                  "value": "hi",
                  "raw": "\"hi\""
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
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 9,
                "end": 15,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 45,
                "end": 50,
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
