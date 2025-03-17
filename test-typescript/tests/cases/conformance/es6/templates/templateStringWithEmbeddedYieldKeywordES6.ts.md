__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 134,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 17,
      "end": 133,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 133,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 101,
            "end": 131,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 105,
                "end": 130,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 109,
                  "end": 130,
                  "expressions": [
                    {
                      "type": "YieldExpression",
                      "start": 116,
                      "end": 124,
                      "argument": {
                        "type": "Literal",
                        "start": 122,
                        "end": 124,
                        "raw": "10",
                        "value": 10
                      },
                      "delegate": false
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 109,
                      "end": 115,
                      "tail": false,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 125,
                      "end": 130,
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
