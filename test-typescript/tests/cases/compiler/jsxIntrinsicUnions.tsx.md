__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 176,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 76,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 62,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 62,
            "name": "React",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "value": "react",
        "raw": "\"react\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 86,
            "name": "El",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 89,
            "end": 116,
            "test": {
              "type": "CallExpression",
              "start": 89,
              "end": 102,
              "callee": {
                "type": "MemberExpression",
                "start": 89,
                "end": 100,
                "object": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 93,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 100,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "Literal",
              "start": 105,
              "end": 109,
              "value": "h1",
              "raw": "'h1'"
            },
            "alternate": {
              "type": "Literal",
              "start": 112,
              "end": 116,
              "value": "h2",
              "raw": "'h2'"
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 128,
            "name": "tag",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 131,
            "end": 174,
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
                    "value": "ok",
                    "raw": "\"ok\""
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
                    "value": "key",
                    "raw": "\"key\""
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
            },
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
            "children": [
              {
                "type": "JSXExpressionContainer",
                "start": 160,
                "end": 169,
                "expression": {
                  "type": "Literal",
                  "start": 161,
                  "end": 168,
                  "value": "Title",
                  "raw": "\"Title\""
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
