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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 140,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 109,
            "end": 138,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 113,
                "end": 137,
                "definite": false,
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
                  "argument": {
                    "type": "TemplateLiteral",
                    "start": 123,
                    "end": 137,
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
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 123,
                        "end": 129,
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 132,
                        "end": 137,
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
        "start": 10,
        "end": 13,
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
