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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
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
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 75,
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 78,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 104,
        "decorators": [],
        "name": "nameSpaceBinding",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 105,
        "end": 108,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 131,
      "end": 208,
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
      "source": {
        "type": "Literal",
        "start": 166,
        "end": 207,
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 228,
      "end": 305,
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
      "source": {
        "type": "Literal",
        "start": 263,
        "end": 304,
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 326,
      "end": 403,
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
      "source": {
        "type": "Literal",
        "start": 361,
        "end": 402,
        "value": "./es6ImportNameSpaceImportMergeErrors_0",
        "raw": "\"./es6ImportNameSpaceImportMergeErrors_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 450,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 449,
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
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
