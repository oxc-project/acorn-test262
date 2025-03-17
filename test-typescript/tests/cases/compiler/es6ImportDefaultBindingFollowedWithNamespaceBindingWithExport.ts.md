__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 17,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "kind": "var",
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
  "end": 112,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 69,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 14,
          "end": 28,
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 28,
            "name": "defaultBinding",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportNamespaceSpecifier",
          "start": 30,
          "end": 51,
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 51,
            "name": "nameSpaceBinding",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 68,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 70,
      "end": 112,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 77,
        "end": 112,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 81,
            "end": 111,
            "id": {
              "type": "Identifier",
              "start": 81,
              "end": 90,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 82,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 84,
                  "end": 90
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 93,
              "end": 111,
              "object": {
                "type": "Identifier",
                "start": 93,
                "end": 109,
                "name": "nameSpaceBinding",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 110,
                "end": 111,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
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
