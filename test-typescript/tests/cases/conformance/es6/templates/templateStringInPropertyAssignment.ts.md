__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 9,
            "end": 47,
            "properties": [
              {
                "type": "Property",
                "start": 15,
                "end": 45,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 16,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TemplateLiteral",
                  "start": 18,
                  "end": 45,
                  "expressions": [
                    {
                      "type": "Literal",
                      "start": 25,
                      "end": 28,
                      "value": 123,
                      "raw": "123"
                    },
                    {
                      "type": "Literal",
                      "start": 36,
                      "end": 39,
                      "value": 456,
                      "raw": "456"
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 18,
                      "end": 24,
                      "value": {
                        "cooked": "abc",
                        "raw": "abc"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 29,
                      "end": 35,
                      "value": {
                        "cooked": "def",
                        "raw": "def"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 40,
                      "end": 45,
                      "value": {
                        "cooked": "ghi",
                        "raw": "ghi"
                      },
                      "tail": true
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
