__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 24,
              "name": "foo",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16,
                "end": 24,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 18,
                  "end": 24
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
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
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 25,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 24,
              "name": "foo",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16,
                "end": 24,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 18,
                  "end": 24
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
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
  "end": 232,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 62,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 35,
          "end": 46,
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 46,
            "name": "fooSub",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 52,
        "end": 61,
        "value": "foo/sub",
        "raw": "\"foo/sub\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 63,
      "end": 97,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 70,
          "end": 81,
          "local": {
            "type": "Identifier",
            "start": 75,
            "end": 81,
            "name": "barSub",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 87,
        "end": 96,
        "value": "bar/sub",
        "raw": "\"bar/sub\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 98,
      "end": 137,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 105,
          "end": 118,
          "local": {
            "type": "Identifier",
            "start": 110,
            "end": 118,
            "name": "scopeFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 124,
        "end": 136,
        "value": "@scope/foo",
        "raw": "\"@scope/foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 138,
      "end": 184,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 145,
          "end": 161,
          "local": {
            "type": "Identifier",
            "start": 150,
            "end": 161,
            "name": "scopeFooSub",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 167,
        "end": 183,
        "value": "@scope/foo/sub",
        "raw": "\"@scope/foo/sub\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 185,
      "end": 231,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 192,
          "end": 208,
          "local": {
            "type": "Identifier",
            "start": 197,
            "end": 208,
            "name": "scopeBarSub",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 214,
        "end": 230,
        "value": "@scope/bar/sub",
        "raw": "\"@scope/bar/sub\""
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
