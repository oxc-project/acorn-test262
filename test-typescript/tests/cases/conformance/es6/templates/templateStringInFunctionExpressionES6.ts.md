__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 8,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 21,
              "end": 70,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 27,
                  "end": 41,
                  "expression": {
                    "type": "TemplateLiteral",
                    "start": 27,
                    "end": 41,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 34,
                        "end": 35,
                        "value": 0,
                        "raw": "0"
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 27,
                        "end": 33,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 36,
                        "end": 41,
                        "value": {
                          "cooked": "def",
                          "raw": "def"
                        },
                        "tail": true
                      }
                    ]
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 46,
                  "end": 68,
                  "argument": {
                    "type": "TemplateLiteral",
                    "start": 53,
                    "end": 67,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 60,
                        "end": 61,
                        "value": 0,
                        "raw": "0"
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 53,
                        "end": 59,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 62,
                        "end": 67,
                        "value": {
                          "cooked": "def",
                          "raw": "def"
                        },
                        "tail": true
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
