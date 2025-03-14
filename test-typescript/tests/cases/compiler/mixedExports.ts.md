__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 90,
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 90,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 24,
            "end": 39,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 45,
            "end": 67,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 52,
              "end": 67,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 61,
                "end": 64,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSDeclareFunction",
            "start": 73,
            "end": 88,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
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
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 92,
      "end": 164,
      "body": {
        "type": "TSModuleBlock",
        "start": 110,
        "end": 164,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 117,
            "end": 140,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 124,
              "end": 140,
              "body": {
                "type": "TSInterfaceBody",
                "start": 138,
                "end": 140,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 134,
                "end": 137,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 146,
            "end": 162,
            "body": {
              "type": "TSInterfaceBody",
              "start": 160,
              "end": 162,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 156,
              "end": 159,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 109,
        "decorators": [],
        "name": "M1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 166,
      "end": 244,
      "body": {
        "type": "TSModuleBlock",
        "start": 175,
        "end": 244,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 182,
            "end": 197,
            "body": {
              "type": "TSInterfaceBody",
              "start": 194,
              "end": 197,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 195,
                  "end": 196,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 196,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "X",
              "optional": false
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 203,
            "end": 221,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 210,
              "end": 221,
              "body": {
                "type": "TSModuleBlock",
                "start": 219,
                "end": 221,
                "body": []
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "X",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 227,
            "end": 242,
            "body": {
              "type": "TSInterfaceBody",
              "start": 239,
              "end": 242,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 240,
                  "end": 241,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "decorators": [],
              "name": "X",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 174,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
