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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "name": "gen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 122,
                        "end": 124,
                        "value": 10,
                        "raw": "10"
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 109,
                      "end": 115,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 125,
                      "end": 130,
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
