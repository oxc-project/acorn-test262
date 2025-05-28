__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 29,
        "value": "my-React-Lib",
        "raw": "\"my-React-Lib\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 30,
        "end": 65,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 36,
            "end": 47,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 40,
                "end": 46,
                "id": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 46,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 43,
                      "end": 46
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSExportAssignment",
            "start": 52,
            "end": 63,
            "expression": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
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
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 43,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 22,
            "decorators": [],
            "name": "myReactLib",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 42,
        "value": "my-React-Lib",
        "raw": "\"my-React-Lib\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 89,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 88,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 88,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 85,
                "end": 88
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 103,
      "expression": {
        "type": "JSXElement",
        "start": 91,
        "end": 102,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 91,
          "end": 102,
          "name": {
            "type": "JSXIdentifier",
            "start": 92,
            "end": 95,
            "name": "foo"
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "start": 96,
              "end": 100,
              "name": {
                "type": "JSXIdentifier",
                "start": 96,
                "end": 100,
                "name": "data"
              },
              "value": null
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
