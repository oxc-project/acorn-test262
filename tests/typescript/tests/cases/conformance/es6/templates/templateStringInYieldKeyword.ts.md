__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 140,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 109,
            "end": 138,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 113,
                "end": 137,
                "id": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 117,
                  "end": 137,
                  "delegate": false,
                  "argument": {
                    "type": "TemplateLiteral",
                    "start": 123,
                    "end": 137,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 123,
                        "end": 129,
                        "value": {
                          "raw": "abc",
                          "cooked": "abc"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 132,
                        "end": 137,
                        "value": {
                          "raw": "def",
                          "cooked": "def"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 130,
                        "end": 131,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
