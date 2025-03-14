server.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
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
        "name": "a",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 12,
      "end": 29,
      "declaration": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "exportKind": "value"
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
  "end": 96,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 59,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 50,
        "end": 58,
        "raw": "\"server\"",
        "value": "server"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 21,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 21,
            "decorators": [],
            "name": "defaultBinding",
            "optional": false
          }
        },
        {
          "type": "ImportNamespaceSpecifier",
          "start": 23,
          "end": 44,
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 44,
            "decorators": [],
            "name": "nameSpaceBinding",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 96,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 67,
        "end": 96,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 71,
            "end": 95,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 75,
              "end": 95,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 79,
                "end": 93,
                "decorators": [],
                "name": "defaultBinding",
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
    }
  ],
  "sourceType": "module"
}
```
