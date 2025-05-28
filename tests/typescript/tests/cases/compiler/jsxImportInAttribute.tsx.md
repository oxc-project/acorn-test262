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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "value": "Test",
        "raw": "\"Test\""
      },
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 46,
                "end": 50,
                "decorators": [],
                "name": "Text",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 51,
                "end": 54,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 133,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 40,
      "end": 64,
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 63,
        "value": "Test",
        "raw": "'Test'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 79,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 74,
            "end": 78,
            "decorators": [],
            "name": "Test",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 128,
      "expression": {
        "type": "JSXElement",
        "start": 103,
        "end": 127,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 103,
          "end": 127,
          "name": {
            "type": "JSXIdentifier",
            "start": 104,
            "end": 112,
            "name": "anything"
          },
          "typeArguments": null,
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
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
