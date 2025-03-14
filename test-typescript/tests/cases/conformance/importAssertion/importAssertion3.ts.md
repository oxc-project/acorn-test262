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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 22,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 22,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "I",
          "optional": false
        }
      },
      "exportKind": "type",
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
  "end": 103,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
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
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 41,
            "end": 47,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 102,
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
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 94,
            "end": 100,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 73,
        "end": 78,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 64,
          "end": 65,
          "exported": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "I",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "I",
            "optional": false
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
  "end": 111,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 53,
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
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 45,
            "end": 51,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "raw": "'./0'",
        "value": "./0"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 54,
      "end": 109,
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
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 101,
            "end": 107,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 85,
        "raw": "'./0'",
        "value": "./0"
      },
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
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
