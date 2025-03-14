foo.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 14,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 40,
      "end": 85,
      "body": {
        "type": "TSModuleBlock",
        "start": 62,
        "end": 85,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 68,
            "end": 83,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 77,
              "end": 80,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 87,
      "end": 127,
      "body": {
        "type": "TSModuleBlock",
        "start": 102,
        "end": 127,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 108,
            "end": 125,
            "body": {
              "type": "TSModuleBlock",
              "start": 122,
              "end": 125,
              "body": []
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "decorators": [],
              "name": "Bar",
              "optional": false
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 101,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    }
  ],
  "sourceType": "module"
}
```
bar.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 27,
        "raw": "'./foo'",
        "value": "./foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Bar",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Bar",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSExportAssignment",
      "start": 29,
      "end": 42,
      "expression": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 43,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
