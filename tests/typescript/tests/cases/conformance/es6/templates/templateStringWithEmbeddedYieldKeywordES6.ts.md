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
        "end": 116,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 84,
            "end": 114,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 88,
                "end": 113,
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
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 92,
                      "end": 98,
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 108,
                      "end": 113,
                      "value": {
                        "raw": "def",
                        "cooked": "def"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "YieldExpression",
                      "start": 99,
                      "end": 107,
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 105,
                        "end": 107,
                        "value": 10,
                        "raw": "10"
                      }
                    }
                  ]
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
