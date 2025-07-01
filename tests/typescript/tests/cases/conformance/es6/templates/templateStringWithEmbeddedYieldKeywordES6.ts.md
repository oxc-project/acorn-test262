__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "init": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "abc",
                        "cooked": "abc"
                      },
                      "tail": false,
                      "start": 92,
                      "end": 98
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "def",
                        "cooked": "def"
                      },
                      "tail": true,
                      "start": 108,
                      "end": 113
                    }
                  ],
                  "expressions": [
                    {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 105,
                        "end": 107
                      },
                      "start": 99,
                      "end": 107
                    }
                  ],
                  "start": 92,
                  "end": 113
                },
                "definite": false,
                "start": 88,
                "end": 113
              }
            ],
            "declare": false,
            "start": 84,
            "end": 114
          }
        ],
        "start": 16,
        "end": 116
      },
      "expression": false,
      "start": 0,
      "end": 116
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 116
}
```
