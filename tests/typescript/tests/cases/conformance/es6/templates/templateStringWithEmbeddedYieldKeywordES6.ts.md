__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 116,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 116,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 114,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 113,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TemplateLiteral",
                  "start": 92,
                  "end": 113,
                  "expressions": [
                    {
                      "type": "YieldExpression",
                      "start": 99,
                      "end": 107,
                      "argument": {
                        "type": "Literal",
                        "start": 105,
                        "end": 107,
                        "raw": "10",
                        "value": 10
                      },
                      "delegate": false
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 92,
                      "end": 98,
                      "tail": false,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 108,
                      "end": 113,
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
