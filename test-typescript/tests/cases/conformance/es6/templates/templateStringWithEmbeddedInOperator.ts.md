templateStringWithEmbeddedInOperator.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "x",
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
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 16,
                  "end": 20,
                  "raw": "\"hi\"",
                  "value": "hi"
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 24,
                  "end": 44,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 26,
                      "end": 32,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 26,
                        "end": 28,
                        "decorators": [],
                        "name": "hi",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 30,
                        "end": 32,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    {
                      "type": "Property",
                      "start": 34,
                      "end": 43,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 39,
                        "decorators": [],
                        "name": "hello",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 41,
                        "end": 43,
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
                "start": 45,
                "end": 50,
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
  "sourceType": "script"
}
```
