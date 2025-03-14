__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 80,
  "end": 211,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 80,
      "end": 111,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 103,
        "end": 110,
        "raw": "'react'",
        "value": "react"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 87,
          "end": 97,
          "local": {
            "type": "Identifier",
            "start": 92,
            "end": 97,
            "decorators": [],
            "name": "React",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 126,
            "decorators": [],
            "name": "Test123",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 129,
            "end": 141,
            "async": false,
            "body": {
              "type": "JSXElement",
              "start": 135,
              "end": 141,
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 135,
                "end": 141,
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 136,
                  "end": 139,
                  "name": "div"
                },
                "selfClosing": true
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 144,
      "end": 211,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 211,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 180,
            "end": 209,
            "argument": {
              "type": "JSXElement",
              "start": 187,
              "end": 208,
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 187,
                "end": 208,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "start": 196,
                    "end": 206,
                    "argument": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 205,
                      "decorators": [],
                      "name": "props",
                      "optional": false
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "start": 188,
                  "end": 195,
                  "name": "Test123"
                },
                "selfClosing": true
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 166,
        "decorators": [],
        "name": "testComponent",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 167,
          "end": 172,
          "decorators": [],
          "name": "props",
          "optional": false
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
