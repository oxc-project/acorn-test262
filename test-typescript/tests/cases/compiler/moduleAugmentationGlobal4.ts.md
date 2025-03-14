__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 46,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 46,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 44,
            "body": {
              "type": "TSInterfaceBody",
              "start": 41,
              "end": 44,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 42,
                  "end": 43,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
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
              "start": 31,
              "end": 40,
              "decorators": [],
              "name": "Something",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 57,
      "attributes": [],
      "declaration": null,
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
  "end": 57,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 46,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 46,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 21,
            "end": 44,
            "body": {
              "type": "TSInterfaceBody",
              "start": 41,
              "end": 44,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 42,
                  "end": 43,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
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
              "start": 31,
              "end": 40,
              "decorators": [],
              "name": "Something",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 14,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 57,
      "attributes": [],
      "declaration": null,
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
  "end": 31,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 14,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 13,
        "raw": "\"./f1\"",
        "value": "./f1"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 15,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 28,
        "raw": "\"./f2\"",
        "value": "./f2"
      },
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
