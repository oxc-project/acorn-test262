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
                "id": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 131,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 134,
                  "end": 154,
                  "delegate": false,
                  "argument": {
                    "type": "TemplateLiteral",
                    "start": 140,
                    "end": 154,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 147,
                        "end": 148,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 140,
                        "end": 146,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 149,
                        "end": 154,
                        "value": {
                          "cooked": "def",
                          "raw": "def"
                        },
                        "tail": true
                      }
                    ]
                  }
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
