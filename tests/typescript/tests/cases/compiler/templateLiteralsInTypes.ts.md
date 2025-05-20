__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 92,
            "async": false,
            "body": {
              "type": "TSAsExpression",
              "start": 40,
              "end": 92,
              "expression": {
                "type": "TemplateLiteral",
                "start": 40,
                "end": 61,
                "expressions": [
                  {
                    "type": "Identifier",
                    "start": 43,
                    "end": 46,
                    "decorators": [],
                    "name": "hdr",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 40,
                    "end": 43,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 46,
                    "end": 52,
                    "tail": false,
                    "value": {
                      "cooked": ":\t",
                      "raw": ":\\t"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 55,
                    "end": 61,
                    "tail": true,
                    "value": {
                      "cooked": "\r\n",
                      "raw": "\\r\\n"
                    }
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 65,
                "end": 92,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 65,
                    "end": 68,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 74,
                    "end": 80,
                    "tail": false,
                    "value": {
                      "cooked": ":\t",
                      "raw": ":\\t"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 86,
                    "end": 92,
                    "tail": true,
                    "value": {
                      "cooked": "\r\n",
                      "raw": "\\r\\n"
                    }
                  }
                ],
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  }
                ]
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 11,
                "end": 22,
                "decorators": [],
                "name": "hdr",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 14,
                  "end": 22,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 16,
                    "end": 22
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 24,
                "end": 35,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 29,
                    "end": 35
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 106,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 95,
        "end": 105,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 95,
          "end": 101,
          "arguments": [
            {
              "type": "Literal",
              "start": 97,
              "end": 100,
              "raw": "\"x\"",
              "value": "x"
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 102,
          "end": 105,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
