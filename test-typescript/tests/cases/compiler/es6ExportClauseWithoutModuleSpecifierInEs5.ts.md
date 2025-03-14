server.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 26,
        "end": 41,
        "body": {
          "type": "TSInterfaceBody",
          "start": 38,
          "end": 41,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "decorators": [],
          "name": "i",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 84,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 49,
        "end": 84,
        "body": {
          "type": "TSModuleBlock",
          "start": 58,
          "end": 84,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 64,
              "end": 82,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 71,
                "end": 82,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 75,
                    "end": 81,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 76,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 79,
                      "end": 81,
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
          "start": 56,
          "end": 57,
          "decorators": [],
          "name": "m",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 85,
      "end": 103,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 92,
        "end": 103,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 96,
            "end": 102,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 100,
              "end": 102,
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 136,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 111,
        "end": 136,
        "body": {
          "type": "TSModuleBlock",
          "start": 133,
          "end": 136,
          "body": []
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 118,
          "end": 132,
          "decorators": [],
          "name": "uninstantiated",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
client.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 28,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 10,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 65,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 64,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 39,
          "end": 46,
          "exported": {
            "type": "Identifier",
            "start": 44,
            "end": 46,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 120,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 109,
        "end": 119,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 75,
          "end": 76,
          "exported": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "i",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 78,
          "end": 101,
          "exported": {
            "type": "Identifier",
            "start": 83,
            "end": 101,
            "decorators": [],
            "name": "instantiatedModule",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 121,
      "end": 163,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 152,
        "end": 162,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 130,
          "end": 144,
          "exported": {
            "type": "Identifier",
            "start": 130,
            "end": 144,
            "decorators": [],
            "name": "uninstantiated",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 130,
            "end": 144,
            "decorators": [],
            "name": "uninstantiated",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 164,
      "end": 193,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 182,
        "end": 192,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 173,
          "end": 174,
          "exported": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
