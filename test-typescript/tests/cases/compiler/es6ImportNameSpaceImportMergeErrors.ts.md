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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 17,
              "raw": "10",
              "value": 10
            }
          }
        ],
        "declare": false,
        "kind": "var"
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
  "end": 450,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 76,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 75,
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "value": "./es6ImportNameSpaceImportMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 28,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 28,
            "decorators": [],
            "name": "nameSpaceBinding",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 78,
      "end": 108,
      "body": {
        "type": "TSInterfaceBody",
        "start": 105,
        "end": 108,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 104,
        "decorators": [],
        "name": "nameSpaceBinding",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ImportDeclaration",
      "start": 131,
      "end": 208,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 166,
        "end": 207,
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "value": "./es6ImportNameSpaceImportMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 138,
          "end": 160,
          "local": {
            "type": "Identifier",
            "start": 143,
            "end": 160,
            "decorators": [],
            "name": "nameSpaceBinding1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 228,
      "end": 305,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 263,
        "end": 304,
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "value": "./es6ImportNameSpaceImportMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 235,
          "end": 257,
          "local": {
            "type": "Identifier",
            "start": 240,
            "end": 257,
            "decorators": [],
            "name": "nameSpaceBinding1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 326,
      "end": 403,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 361,
        "end": 402,
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "value": "./es6ImportNameSpaceImportMergeErrors_0"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 333,
          "end": 355,
          "local": {
            "type": "Identifier",
            "start": 338,
            "end": 355,
            "decorators": [],
            "name": "nameSpaceBinding3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 449,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 444,
            "decorators": [],
            "name": "nameSpaceBinding3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 447,
            "end": 449,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
