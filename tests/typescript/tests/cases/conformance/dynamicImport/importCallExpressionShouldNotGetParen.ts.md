__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "localeName",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 16
          },
          "init": {
            "type": "Literal",
            "value": "zh-CN",
            "raw": "\"zh-CN\"",
            "start": 19,
            "end": 26
          },
          "definite": false,
          "start": 6,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ImportExpression",
            "source": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "./locales/",
                    "cooked": "./locales/"
                  },
                  "tail": false,
                  "start": 35,
                  "end": 48
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": ".js",
                    "cooked": ".js"
                  },
                  "tail": true,
                  "start": 58,
                  "end": 63
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "localeName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 58
                }
              ],
              "start": 35,
              "end": 63
            },
            "options": null,
            "phase": null,
            "start": 28,
            "end": 64
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 69
          },
          "optional": false,
          "computed": false,
          "start": 28,
          "end": 69
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 73
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 88
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 94
                      },
                      "definite": false,
                      "start": 87,
                      "end": 94
                    }
                  ],
                  "declare": false,
                  "start": 83,
                  "end": 95
                }
              ],
              "start": 77,
              "end": 97
            },
            "id": null,
            "generator": false,
            "start": 70,
            "end": 97
          }
        ],
        "optional": false,
        "start": 28,
        "end": 98
      },
      "directive": null,
      "start": 28,
      "end": 99
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ImportExpression",
            "source": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "./locales/",
                  "raw": "\"./locales/\"",
                  "start": 108,
                  "end": 120
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "localeName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 133
                },
                "start": 108,
                "end": 133
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": ".js",
                "raw": "\".js\"",
                "start": 136,
                "end": 141
              },
              "start": 108,
              "end": 141
            },
            "options": null,
            "phase": null,
            "start": 101,
            "end": 142
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 147
          },
          "optional": false,
          "computed": false,
          "start": 101,
          "end": 147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 151
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 166
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 172
                      },
                      "definite": false,
                      "start": 165,
                      "end": 172
                    }
                  ],
                  "declare": false,
                  "start": 161,
                  "end": 173
                }
              ],
              "start": 155,
              "end": 175
            },
            "id": null,
            "generator": false,
            "start": 148,
            "end": 175
          }
        ],
        "optional": false,
        "start": 101,
        "end": 176
      },
      "directive": null,
      "start": 101,
      "end": 177
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 177
}
```
