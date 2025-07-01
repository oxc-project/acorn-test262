__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 30
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 33,
                  "end": 34
                },
                "definite": false,
                "start": 25,
                "end": 34
              }
            ],
            "declare": false,
            "start": 19,
            "end": 35
          }
        ],
        "start": 13,
        "end": 37
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 50
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 60
            },
            "initializer": null,
            "computed": false,
            "start": 57,
            "end": 60
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TWO",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 69
            },
            "initializer": null,
            "computed": false,
            "start": 66,
            "end": 69
          }
        ],
        "start": 51,
        "end": 71
      },
      "const": false,
      "declare": false,
      "start": 39,
      "end": 71
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 83
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 83
          },
          "exportKind": "value",
          "start": 81,
          "end": 83
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 91
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 91
          },
          "exportKind": "value",
          "start": 85,
          "end": 91
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 95
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FooBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 105
          },
          "exportKind": "value",
          "start": 93,
          "end": 105
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 113
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "BarEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 124
          },
          "exportKind": "value",
          "start": 107,
          "end": 124
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 73,
      "end": 126
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 126
}
```
