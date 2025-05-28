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
  "end": 103,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
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
          "start": 35,
          "end": 47,
          "key": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 41,
            "end": 47,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 102,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 64,
          "end": 65,
          "local": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
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
        "start": 73,
        "end": 78,
        "value": "./0",
        "raw": "'./0'"
      },
      "exportKind": "type",
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 88,
          "end": 100,
          "key": {
            "type": "Identifier",
            "start": 88,
            "end": 92,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 94,
            "end": 100,
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
  "end": 110,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 53,
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
          "start": 39,
          "end": 51,
          "key": {
            "type": "Identifier",
            "start": 39,
            "end": 43,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 45,
            "end": 51,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 54,
      "end": 109,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 66,
          "end": 74,
          "local": {
            "type": "Identifier",
            "start": 71,
            "end": 74,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 85,
        "value": "./0",
        "raw": "'./0'"
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 95,
          "end": 107,
          "key": {
            "type": "Identifier",
            "start": 95,
            "end": 99,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 101,
            "end": 107,
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
