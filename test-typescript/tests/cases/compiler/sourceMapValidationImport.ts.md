__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 46,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 46,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 44,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 44,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 37,
                  "end": 44,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
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
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
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
      "type": "TSImportEqualsDeclaration",
      "start": 47,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 58,
        "end": 61,
        "left": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "m",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 63,
      "end": 85,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 70,
        "end": 85,
        "id": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 81,
          "end": 84,
          "left": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 94,
            "end": 101,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 111,
            "end": 118,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
