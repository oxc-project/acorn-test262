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
            "type": "FunctionExpression",
            "start": 8,
            "end": 70,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 21,
              "end": 70,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 27,
                  "end": 41,
                  "directive": null,
                  "expression": {
                    "type": "TemplateLiteral",
                    "start": 27,
                    "end": 41,
                    "expressions": [
                      {
                        "type": "Literal",
                        "start": 34,
                        "end": 35,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 27,
                        "end": 33,
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 36,
                        "end": 41,
                        "tail": true,
                        "value": {
                          "cooked": "def",
                          "raw": "def"
                        }
                      }
                    ]
                  }
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
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 53,
                        "end": 59,
                        "tail": false,
                        "value": {
                          "cooked": "abc",
                          "raw": "abc"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 62,
                        "end": 67,
                        "tail": true,
                        "value": {
                          "cooked": "def",
                          "raw": "def"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
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
