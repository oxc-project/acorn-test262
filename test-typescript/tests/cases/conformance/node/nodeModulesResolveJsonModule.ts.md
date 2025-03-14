index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 40,
          "end": 52,
          "key": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 46,
            "end": 52,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 32,
        "raw": "\"./package.json\"",
        "value": "./package.json"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "pkg",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 85,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 85,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 84,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 73,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 76,
              "end": 84,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 79,
                "decorators": [],
                "name": "pkg",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 84,
                "decorators": [],
                "name": "name",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 86,
      "end": 145,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 130,
          "end": 142,
          "key": {
            "type": "Identifier",
            "start": 130,
            "end": 134,
            "decorators": [],
            "name": "type",
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 136,
            "end": 142,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 106,
        "end": 122,
        "raw": "\"./package.json\"",
        "value": "./package.json"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 93,
          "end": 100,
          "local": {
            "type": "Identifier",
            "start": 98,
            "end": 100,
            "decorators": [],
            "name": "ns",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 170,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 170,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 169,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 164,
              "decorators": [],
              "name": "thing",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "decorators": [],
              "name": "ns",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 208,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 178,
        "end": 208,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 184,
            "end": 207,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 184,
              "end": 189,
              "decorators": [],
              "name": "name2",
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 192,
              "end": 207,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 192,
                "end": 202,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 194,
                  "decorators": [],
                  "name": "ns",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 202,
                  "decorators": [],
                  "name": "default",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 203,
                "end": 207,
                "decorators": [],
                "name": "name",
                "optional": false
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
