__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSModuleBlock",
        "start": 13,
        "end": 37,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 35,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 34,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 30,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 39,
      "end": 71,
      "body": {
        "type": "TSEnumBody",
        "start": 51,
        "end": 71,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 57,
            "end": 60,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 60,
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 66,
            "end": 69,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 50,
        "decorators": [],
        "name": "AnEnum",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 126,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 81,
          "end": 83,
          "exported": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 85,
          "end": 91,
          "exported": {
            "type": "Identifier",
            "start": 85,
            "end": 91,
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 85,
            "end": 91,
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 93,
          "end": 105,
          "exported": {
            "type": "Identifier",
            "start": 99,
            "end": 105,
            "decorators": [],
            "name": "FooBar",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 93,
            "end": 95,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 107,
          "end": 124,
          "exported": {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "decorators": [],
            "name": "BarEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 107,
            "end": 113,
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
