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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 70,
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
            "type": "FunctionExpression",
            "start": 8,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
                    ],
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 34,
                        "end": 35,
                        "value": 0,
                        "raw": "0"
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
                    ],
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 60,
                        "end": 61,
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  }
                }
              ]
            },
            "expression": false
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
