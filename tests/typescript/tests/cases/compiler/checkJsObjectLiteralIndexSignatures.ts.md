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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 35,
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
            "callee": {
              "type": "MemberExpression",
              "start": 22,
              "end": 33,
              "object": {
                "type": "Identifier",
                "start": 22,
                "end": 26,
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 27,
                "end": 33,
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 52,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 51,
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
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 45,
                "end": 48,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 49,
                "end": 51,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true
              }
            ],
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
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 86,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 85,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 82,
                  "end": 83,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 113,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 112,
        "callee": {
          "type": "MemberExpression",
          "start": 87,
          "end": 110,
          "object": {
            "type": "MemberExpression",
            "start": 87,
            "end": 102,
            "object": {
              "type": "Identifier",
              "start": 87,
              "end": 99,
              "decorators": [],
              "name": "numericIndex",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 103,
            "end": 110,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 146,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 145,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 142,
                  "end": 143,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 172,
      "expression": {
        "type": "CallExpression",
        "start": 147,
        "end": 171,
        "callee": {
          "type": "MemberExpression",
          "start": 147,
          "end": 169,
          "object": {
            "type": "MemberExpression",
            "start": 147,
            "end": 161,
            "object": {
              "type": "Identifier",
              "start": 147,
              "end": 158,
              "decorators": [],
              "name": "stringIndex",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 162,
            "end": 169,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
