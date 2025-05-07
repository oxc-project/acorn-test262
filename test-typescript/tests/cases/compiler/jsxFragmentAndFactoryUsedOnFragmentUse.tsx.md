__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 39,
        "raw": "\"./jsx\"",
        "value": "./jsx",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "element",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 17,
          "end": 25,
          "imported": {
            "type": "Identifier",
            "start": 17,
            "end": 25,
            "decorators": [],
            "name": "fragment",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 25,
            "decorators": [],
            "name": "fragment",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 77,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 49,
        "end": 77,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 55,
            "end": 77,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "JSXFragment",
              "start": 59,
              "end": 77,
              "children": [
                {
                  "type": "JSXText",
                  "start": 61,
                  "end": 74,
                  "raw": "fragment text",
                  "value": "fragment text"
                }
              ],
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 74,
                "end": 77
              },
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 59,
                "end": 61
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 59,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 28,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 26,
          "end": 28,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 23,
          "decorators": [],
          "name": "element",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 37,
        "end": 59,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 57,
          "end": 59,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 54,
          "decorators": [],
          "name": "fragment",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
