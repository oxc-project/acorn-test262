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
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 26,
        "body": {
          "type": "TSInterfaceBody",
          "start": 24,
          "end": 26,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "IPoint",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 98,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 35,
        "end": 98,
        "body": {
          "type": "TSModuleBlock",
          "start": 49,
          "end": 98,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 56,
              "end": 95,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 63,
                "end": 95,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 93,
                  "end": 95,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 74,
                  "decorators": [],
                  "name": "Point",
                  "optional": false
                },
                "implements": [
                  {
                    "type": "TSClassImplements",
                    "start": 86,
                    "end": 92,
                    "expression": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 92,
                      "decorators": [],
                      "name": "IPoint",
                      "optional": false
                    }
                  }
                ],
                "superClass": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 42,
          "end": 48,
          "decorators": [],
          "name": "Shapes",
          "optional": false
        },
        "kind": "module"
      },
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
  "start": 122,
  "end": 122,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
