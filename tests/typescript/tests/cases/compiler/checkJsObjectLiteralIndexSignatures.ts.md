__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 26
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "random",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 33
              },
              "optional": false,
              "computed": false,
              "start": 22,
              "end": 33
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 22,
            "end": 35
          },
          "definite": false,
          "start": 18,
          "end": 35
        }
      ],
      "declare": false,
      "start": 14,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 45,
                "end": 48
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 49,
                "end": 51
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              }
            ],
            "start": 45,
            "end": 51
          },
          "definite": false,
          "start": 41,
          "end": 51
        }
      ],
      "declare": false,
      "start": 37,
      "end": 52
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numericIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 72
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 79
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 82,
                  "end": 83
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 77,
                "end": 83
              }
            ],
            "start": 75,
            "end": 85
          },
          "definite": false,
          "start": 60,
          "end": 85
        }
      ],
      "declare": false,
      "start": 54,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numericIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 99
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            },
            "optional": false,
            "computed": true,
            "start": 87,
            "end": 102
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 110
          },
          "optional": false,
          "computed": false,
          "start": 87,
          "end": 110
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 87,
        "end": 112
      },
      "directive": null,
      "start": 87,
      "end": 113
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 132
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 139
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 142,
                  "end": 143
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 137,
                "end": 143
              }
            ],
            "start": 135,
            "end": 145
          },
          "definite": false,
          "start": 121,
          "end": 145
        }
      ],
      "declare": false,
      "start": 115,
      "end": 146
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 158
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "optional": false,
            "computed": true,
            "start": 147,
            "end": 161
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 169
          },
          "optional": false,
          "computed": false,
          "start": 147,
          "end": 169
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 147,
        "end": 171
      },
      "directive": null,
      "start": 147,
      "end": 172
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 173
}
```
