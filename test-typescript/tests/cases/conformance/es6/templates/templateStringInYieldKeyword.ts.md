__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 158,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 17,
      "end": 157,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 157,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 126,
            "end": 155,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 130,
                "end": 154,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 134,
                  "end": 154,
                  "argument": {
                    "type": "TemplateLiteral",
                    "start": 140,
                    "end": 154,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 147,
                        "end": 148,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 140,
                        "end": 146,
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 149,
                        "end": 154,
                        "tail": true,
                        "value": {
                          "cooked": "def",
                          "raw": "def"
                        }
                      }
                    ]
                  },
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "gen",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
