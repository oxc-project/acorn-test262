__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 173,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 22,
            "end": 35,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 22,
              "end": 33,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 22,
                "end": 26,
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 27,
                "end": 33,
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 45,
            "end": 51,
            "expressions": [
              {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 45,
                "end": 48,
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 49,
                "end": 51,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 72,
            "decorators": [],
            "name": "numericIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 75,
            "end": 85,
            "properties": [
              {
                "type": "Property",
                "start": 77,
                "end": 83,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 82,
                  "end": 83,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 113,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 112,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 87,
          "end": 110,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 87,
            "end": 102,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 87,
              "end": 99,
              "decorators": [],
              "name": "numericIndex",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 103,
            "end": 110,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 132,
            "decorators": [],
            "name": "stringIndex",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 135,
            "end": 145,
            "properties": [
              {
                "type": "Property",
                "start": 137,
                "end": 143,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 142,
                  "end": 143,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 172,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 147,
        "end": 171,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 147,
          "end": 169,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 147,
            "end": 161,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 147,
              "end": 158,
              "decorators": [],
              "name": "stringIndex",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 162,
            "end": 169,
            "decorators": [],
            "name": "toFixed",
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
