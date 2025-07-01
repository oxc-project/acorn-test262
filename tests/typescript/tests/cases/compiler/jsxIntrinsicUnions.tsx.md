__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 76
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
            "name": "El",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 86
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 93
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 100
                },
                "optional": false,
                "computed": false,
                "start": 89,
                "end": 100
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 89,
              "end": 102
            },
            "consequent": {
              "type": "Literal",
              "value": "h1",
              "raw": "'h1'",
              "start": 105,
              "end": 109
            },
            "alternate": {
              "type": "Literal",
              "value": "h2",
              "raw": "'h2'",
              "start": 112,
              "end": 116
            },
            "start": 89,
            "end": 116
          },
          "definite": false,
          "start": 84,
          "end": 116
        }
      ],
      "declare": false,
      "start": 78,
      "end": 117
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
            "name": "tag",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 128
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "El",
                "start": 132,
                "end": 134
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "className",
                    "start": 135,
                    "end": 144
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 145,
                    "end": 149
                  },
                  "start": 135,
                  "end": 149
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 150,
                    "end": 153
                  },
                  "value": {
                    "type": "Literal",
                    "value": "key",
                    "raw": "\"key\"",
                    "start": 154,
                    "end": 159
                  },
                  "start": 150,
                  "end": 159
                }
              ],
              "selfClosing": false,
              "start": 131,
              "end": 160
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "Title",
                  "raw": "\"Title\"",
                  "start": 161,
                  "end": 168
                },
                "start": 160,
                "end": 169
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "El",
                "start": 171,
                "end": 173
              },
              "start": 169,
              "end": 174
            },
            "start": 131,
            "end": 174
          },
          "definite": false,
          "start": 125,
          "end": 174
        }
      ],
      "declare": false,
      "start": 119,
      "end": 175
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 175
}
```
