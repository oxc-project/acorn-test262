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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "name": "element",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "name": "element",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 17,
          "end": 25,
          "imported": {
            "type": "Identifier",
            "start": 17,
            "end": 25,
            "name": "fragment",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 25,
            "name": "fragment",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 39,
        "value": "./jsx",
        "raw": "\"./jsx\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 77,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 49,
        "end": 77,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 55,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "JSXFragment",
              "start": 59,
              "end": 77,
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 59,
                "end": 61
              },
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 74,
                "end": 77
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 61,
                  "end": 74,
                  "value": "fragment text",
                  "raw": "fragment text"
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 28,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 23,
          "name": "element",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 26,
          "end": 28,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 59,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 37,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 54,
          "name": "fragment",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 57,
          "end": 59,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
