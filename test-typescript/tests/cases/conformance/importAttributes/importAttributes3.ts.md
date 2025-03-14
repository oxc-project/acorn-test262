0.ts
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
  "sourceType": "module"
}
```
1.ts
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
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 39,
            "end": 45,
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
      "start": 48,
      "end": 98,
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
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 90,
            "end": 96,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 76,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 62,
          "end": 63,
          "exported": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "I",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "I",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 51,
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
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 43,
            "end": 49,
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
      "start": 52,
      "end": 105,
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
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 97,
            "end": 103,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 78,
        "end": 83,
        "raw": "'./0'",
        "value": "./0"
      },
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
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
