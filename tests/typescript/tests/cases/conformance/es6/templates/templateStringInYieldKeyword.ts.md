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
                  "start": 113,
                  "end": 114
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "abc",
                          "cooked": "abc"
                        },
                        "tail": false,
                        "start": 123,
                        "end": 129
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "def",
                          "cooked": "def"
                        },
                        "tail": true,
                        "start": 132,
                        "end": 137
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 131
                      }
                    ],
                    "start": 123,
                    "end": 137
                  },
                  "start": 117,
                  "end": 137
                },
                "definite": false,
                "start": 113,
                "end": 137
              }
            ],
            "declare": false,
            "start": 109,
            "end": 138
          }
        ],
        "start": 16,
        "end": 140
      },
      "expression": false,
      "start": 0,
      "end": 140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
