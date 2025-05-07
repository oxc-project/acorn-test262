__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 175,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 76,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "raw": "\"react\"",
        "value": "react",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 62,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 86,
            "decorators": [],
            "name": "El",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 89,
            "end": 116,
            "alternate": {
              "type": "Literal",
              "start": 112,
              "end": 116,
              "raw": "'h2'",
              "value": "h2",
              "regex": null,
              "bigint": null
            },
            "consequent": {
              "type": "Literal",
              "start": 105,
              "end": 109,
              "raw": "'h1'",
              "value": "h1",
              "regex": null,
              "bigint": null
            },
            "test": {
              "type": "CallExpression",
              "start": 89,
              "end": 102,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 89,
                "end": 100,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 93,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 100,
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
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 128,
            "decorators": [],
            "name": "tag",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 131,
            "end": 174,
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 160,
                "end": 169,
                "expression": {
                  "type": "Literal",
                  "start": 161,
                  "end": 168,
                  "raw": "\"Title\"",
                  "value": "Title",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "start": 169,
              "end": 174,
              "name": {
                "type": "JSXIdentifier",
                "start": 171,
                "end": 173,
                "name": "El"
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 131,
              "end": 160,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "start": 135,
                  "end": 149,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 135,
                    "end": 144,
                    "name": "className"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 145,
                    "end": 149,
                    "raw": "\"ok\"",
                    "value": "ok",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "JSXAttribute",
                  "start": 150,
                  "end": 159,
                  "name": {
                    "type": "JSXIdentifier",
                    "start": 150,
                    "end": 153,
                    "name": "key"
                  },
                  "value": {
                    "type": "Literal",
                    "start": 154,
                    "end": 159,
                    "raw": "\"key\"",
                    "value": "key",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 132,
                "end": 134,
                "name": "El"
              },
              "selfClosing": false,
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
