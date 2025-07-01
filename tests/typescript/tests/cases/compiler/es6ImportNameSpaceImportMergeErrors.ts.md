__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
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
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 15,
              "end": 17
            },
            "definite": false,
            "start": 11,
            "end": 17
          }
        ],
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 19
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
            "name": "nameSpaceBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 28
          },
          "start": 7,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "start": 34,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 76
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nameSpaceBinding",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 104
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 105,
        "end": 108
      },
      "declare": false,
      "start": 78,
      "end": 108
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameSpaceBinding1",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 160
          },
          "start": 138,
          "end": 160
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "start": 166,
        "end": 207
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 131,
      "end": 208
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameSpaceBinding1",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 257
          },
          "start": 235,
          "end": 257
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "start": 263,
        "end": 304
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 228,
      "end": 305
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameSpaceBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 355
          },
          "start": 333,
          "end": 355
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\"",
        "start": 361,
        "end": 402
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 326,
      "end": 403
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
            "name": "nameSpaceBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 444
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 447,
            "end": 449
          },
          "definite": false,
          "start": 427,
          "end": 449
        }
      ],
      "declare": false,
      "start": 423,
      "end": 450
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 450
}
```
