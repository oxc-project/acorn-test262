__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 8,
            "end": 47,
            "expressions": [
              {
                "type": "FunctionExpression",
                "start": 15,
                "end": 41,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 28,
                  "end": 41,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 30,
                      "end": 39,
                      "argument": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 38,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 14,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 42,
                "end": 47,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
