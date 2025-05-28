__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 22,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 22,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "end": 99,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 47,
      "declaration": null,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "value": "./0",
        "raw": "'./0'"
      },
      "exportKind": "type",
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 33,
          "end": 45,
          "key": {
            "type": "Identifier",
            "start": 33,
            "end": 37,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 39,
            "end": 45,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 98,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 62,
          "end": 63,
          "local": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 76,
        "value": "./0",
        "raw": "'./0'"
      },
      "exportKind": "type",
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 84,
          "end": 96,
          "key": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 90,
            "end": 96,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ]
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
  "end": 105,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 51,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "value": "./0",
        "raw": "'./0'"
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 37,
          "end": 49,
          "key": {
            "type": "Identifier",
            "start": 37,
            "end": 41,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 43,
            "end": 49,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 52,
      "end": 105,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 64,
          "end": 72,
          "local": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 78,
        "end": 83,
        "value": "./0",
        "raw": "'./0'"
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 91,
          "end": 103,
          "key": {
            "type": "Identifier",
            "start": 91,
            "end": 95,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 97,
            "end": 103,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
