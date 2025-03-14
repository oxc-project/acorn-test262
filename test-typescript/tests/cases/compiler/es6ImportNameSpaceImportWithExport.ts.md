server.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 17,
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
  ],
  "sourceType": "module"
}
```
client.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 50,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 49,
        "raw": "\"server\"",
        "value": "server"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 14,
          "end": 35,
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 35,
            "decorators": [],
            "name": "nameSpaceBinding",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 85,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 58,
        "end": 85,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 62,
            "end": 84,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 66,
              "end": 84,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 82,
                "decorators": [],
                "name": "nameSpaceBinding",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 86,
      "end": 137,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 128,
        "end": 136,
        "raw": "\"server\"",
        "value": "server"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 100,
          "end": 122,
          "local": {
            "type": "Identifier",
            "start": 105,
            "end": 122,
            "decorators": [],
            "name": "nameSpaceBinding2",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
