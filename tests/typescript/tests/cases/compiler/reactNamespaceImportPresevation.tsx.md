__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "my-React-Lib",
        "raw": "\"my-React-Lib\"",
        "start": 15,
        "end": 29
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 43,
                      "end": 46
                    },
                    "start": 41,
                    "end": 46
                  },
                  "start": 40,
                  "end": 46
                },
                "init": null,
                "definite": false,
                "start": 40,
                "end": 46
              }
            ],
            "declare": false,
            "start": 36,
            "end": 47
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "start": 52,
            "end": 63
          }
        ],
        "start": 30,
        "end": 65
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
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
            "name": "myReactLib",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 22
          },
          "start": 7,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "my-React-Lib",
        "raw": "\"my-React-Lib\"",
        "start": 28,
        "end": 42
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 85,
                "end": 88
              },
              "start": 83,
              "end": 88
            },
            "start": 80,
            "end": 88
          },
          "init": null,
          "definite": false,
          "start": 80,
          "end": 88
        }
      ],
      "declare": true,
      "start": 68,
      "end": 89
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "foo",
            "start": 92,
            "end": 95
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data",
                "start": 96,
                "end": 100
              },
              "value": null,
              "start": 96,
              "end": 100
            }
          ],
          "selfClosing": true,
          "start": 91,
          "end": 102
        },
        "children": [],
        "closingElement": null,
        "start": 91,
        "end": 102
      },
      "directive": null,
      "start": 91,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
