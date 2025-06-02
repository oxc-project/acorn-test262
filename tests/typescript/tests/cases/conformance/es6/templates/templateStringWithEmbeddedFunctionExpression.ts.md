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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 47,
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
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 8,
                "end": 14,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 42,
                "end": 47,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "FunctionExpression",
                "start": 15,
                "end": 41,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                "expression": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
