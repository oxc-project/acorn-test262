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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 26,
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
            "value": "zh-CN",
            "raw": "\"zh-CN\""
          },
          "definite": false
        }
      ],
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
              ],
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
              ]
            },
            "options": null,
            "phase": null
          },
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 70,
            "end": 97,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 77,
              "end": 97,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 83,
                  "end": 95,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 87,
                      "end": 94,
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
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
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
                  "decorators": [],
                  "name": "localeName",
                  "optional": false,
                  "typeAnnotation": null
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
            "options": null,
            "phase": null
          },
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 148,
            "end": 175,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 155,
              "end": 175,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 161,
                  "end": 173,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 165,
                      "end": 172,
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
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
