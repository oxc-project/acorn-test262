__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 56,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 56,
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "start": 25,
            "end": 54,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 40,
              "end": 54,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 51,
                "end": 54,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 46,
                "end": 50,
                "decorators": [],
                "name": "Text",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "raw": "\"Test\"",
        "value": "Test"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 134,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 64,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 63,
        "raw": "'Test'",
        "value": "Test"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 47,
          "end": 51,
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 51,
            "decorators": [],
            "name": "Test",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 74,
            "end": 78,
            "decorators": [],
            "name": "Test",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 128,
      "expression": {
        "type": "JSXElement",
        "start": 103,
        "end": 127,
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 103,
          "end": 127,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 113,
              "end": 124,
              "name": {
                "type": "JSXIdentifier",
                "start": 113,
                "end": 117,
                "name": "attr"
              },
              "value": {
                "type": "JSXExpressionContainer",
                "start": 118,
                "end": 124,
                "expression": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 123,
                  "decorators": [],
                  "name": "Test",
                  "optional": false
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "start": 104,
            "end": 112,
            "name": "anything"
          },
          "selfClosing": true
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
