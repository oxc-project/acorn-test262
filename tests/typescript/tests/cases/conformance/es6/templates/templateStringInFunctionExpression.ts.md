__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "abc",
                          "cooked": "abc"
                        },
                        "tail": false,
                        "start": 27,
                        "end": 33
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "def",
                          "cooked": "def"
                        },
                        "tail": true,
                        "start": 36,
                        "end": 41
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 34,
                        "end": 35
                      }
                    ],
                    "start": 27,
                    "end": 41
                  },
                  "directive": null,
                  "start": 27,
                  "end": 41
                },
                {
                  "type": "ReturnStatement",
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
                        "start": 53,
                        "end": 59
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "def",
                          "cooked": "def"
                        },
                        "tail": true,
                        "start": 62,
                        "end": 67
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 60,
                        "end": 61
                      }
                    ],
                    "start": 53,
                    "end": 67
                  },
                  "start": 46,
                  "end": 68
                }
              ],
              "start": 21,
              "end": 70
            },
            "expression": false,
            "start": 8,
            "end": 70
          },
          "definite": false,
          "start": 4,
          "end": 70
        }
      ],
      "declare": false,
      "start": 0,
      "end": 71
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 71
}
```
