defaultExportsCannotMerge04.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 33,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 33,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 30,
          "end": 33,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 70,
      "body": {
        "type": "TSModuleBlock",
        "start": 49,
        "end": 70,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 55,
            "end": 68,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 62,
              "end": 68,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 66,
                  "end": 67,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
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
        "start": 45,
        "end": 48,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 72,
      "end": 89,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 89,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 85,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 91,
      "end": 115,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 98,
        "end": 115,
        "body": {
          "type": "TSInterfaceBody",
          "start": 112,
          "end": 115,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
