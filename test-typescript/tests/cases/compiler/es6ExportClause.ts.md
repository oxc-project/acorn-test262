server.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 215,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 12,
      "end": 27,
      "body": {
        "type": "TSInterfaceBody",
        "start": 24,
        "end": 27,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "i",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 28,
      "end": 63,
      "body": {
        "type": "TSModuleBlock",
        "start": 37,
        "end": 63,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 61,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 50,
              "end": 61,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 54,
                  "end": 60,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 58,
                    "end": 60,
                    "raw": "10",
                    "value": 10
                  }
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
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 72,
            "end": 74,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 76,
      "end": 101,
      "body": {
        "type": "TSModuleBlock",
        "start": 98,
        "end": 101,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 97,
        "decorators": [],
        "name": "uninstantiated",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 102,
      "end": 115,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 111,
          "end": 112,
          "exported": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 116,
      "end": 135,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 125,
          "end": 132,
          "exported": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 136,
      "end": 174,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 145,
          "end": 146,
          "exported": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "i",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 148,
          "end": 171,
          "exported": {
            "type": "Identifier",
            "start": 153,
            "end": 171,
            "decorators": [],
            "name": "instantiatedModule",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 175,
      "end": 201,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 184,
          "end": 198,
          "exported": {
            "type": "Identifier",
            "start": 184,
            "end": 198,
            "decorators": [],
            "name": "uninstantiated",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 184,
            "end": 198,
            "decorators": [],
            "name": "uninstantiated",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 202,
      "end": 215,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 211,
          "end": 212,
          "exported": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 211,
            "end": 212,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
