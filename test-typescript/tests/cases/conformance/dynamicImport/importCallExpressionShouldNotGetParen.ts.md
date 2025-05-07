__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 177,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 16,
            "decorators": [],
            "name": "localeName",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 19,
            "end": 26,
            "raw": "\"zh-CN\"",
            "value": "zh-CN",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 99,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 28,
        "end": 98,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 70,
            "end": 97,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 88,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 94,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 70,
                "end": 73,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 28,
          "end": 69,
          "computed": false,
          "object": {
            "type": "ImportExpression",
            "start": 28,
            "end": 64,
            "options": null,
            "source": {
              "type": "TemplateLiteral",
              "start": 35,
              "end": 63,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 48,
                  "end": 58,
                  "decorators": [],
                  "name": "localeName",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 35,
                  "end": 48,
                  "tail": false,
                  "value": {
                    "cooked": "./locales/",
                    "raw": "./locales/"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 58,
                  "end": 63,
                  "tail": true,
                  "value": {
                    "cooked": ".js",
                    "raw": ".js"
                  }
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 177,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 101,
        "end": 176,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 148,
            "end": 175,
            "async": false,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 172,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 148,
                "end": 151,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 101,
          "end": 147,
          "computed": false,
          "object": {
            "type": "ImportExpression",
            "start": 101,
            "end": 142,
            "options": null,
            "source": {
              "type": "BinaryExpression",
              "start": 108,
              "end": 141,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 108,
                "end": 133,
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "start": 108,
                  "end": 120,
                  "raw": "\"./locales/\"",
                  "value": "./locales/",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 133,
                  "decorators": [],
                  "name": "localeName",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 136,
                "end": 141,
                "raw": "\".js\"",
                "value": ".js",
                "regex": null,
                "bigint": null
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
