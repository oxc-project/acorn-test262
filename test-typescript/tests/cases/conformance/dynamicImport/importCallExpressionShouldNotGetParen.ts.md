__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 16,
            "name": "localeName",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 19,
            "end": 26,
            "value": "zh-CN",
            "raw": "\"zh-CN\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 99,
      "expression": {
        "type": "CallExpression",
        "start": 28,
        "end": 98,
        "callee": {
          "type": "MemberExpression",
          "start": 28,
          "end": 69,
          "object": {
            "type": "ImportExpression",
            "start": 28,
            "end": 64,
            "source": {
              "type": "TemplateLiteral",
              "start": 35,
              "end": 63,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 58,
                  "name": "localeName",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 35,
                  "end": 48,
                  "value": {
                    "cooked": "./locales/",
                    "raw": "./locales/"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 58,
                  "end": 63,
                  "value": {
                    "cooked": ".js",
                    "raw": ".js"
                  },
                  "tail": true
                }
              ]
            },
            "options": null
          },
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 70,
            "end": 97,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 70,
                "end": 73,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 77,
              "end": 97,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 83,
                  "end": 95,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 87,
                      "end": 94,
                      "id": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 88,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 94,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 177,
      "expression": {
        "type": "CallExpression",
        "start": 101,
        "end": 176,
        "callee": {
          "type": "MemberExpression",
          "start": 101,
          "end": 147,
          "object": {
            "type": "ImportExpression",
            "start": 101,
            "end": 142,
            "source": {
              "type": "BinaryExpression",
              "start": 108,
              "end": 141,
              "left": {
                "type": "BinaryExpression",
                "start": 108,
                "end": 133,
                "left": {
                  "type": "Literal",
                  "start": 108,
                  "end": 120,
                  "value": "./locales/",
                  "raw": "\"./locales/\""
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 133,
                  "name": "localeName",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 136,
                "end": 141,
                "value": ".js",
                "raw": "\".js\""
              }
            },
            "options": null
          },
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 148,
            "end": 175,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 148,
                "end": 151,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 155,
              "end": 175,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 161,
                  "end": 173,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 165,
                      "end": 172,
                      "id": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 172,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
