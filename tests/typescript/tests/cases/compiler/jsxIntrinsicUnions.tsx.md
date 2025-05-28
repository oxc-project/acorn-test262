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
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 75,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 117,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 116,
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
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 100,
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 175,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 174,
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
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 131,
              "end": 160,
              "name": {
                "type": "JSXIdentifier",
                "start": 132,
                "end": 134,
                "name": "El"
              },
              "typeArguments": null,
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
              "selfClosing": false
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
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
