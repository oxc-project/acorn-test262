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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "ns",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 30,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 39,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 50,
        "name": "AnEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 57,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 60,
            "name": "ONE",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 66,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "name": "TWO",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 51,
        "end": 71,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 57,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 60,
              "name": "ONE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 66,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
              "name": "TWO",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 126,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 81,
          "end": 83,
          "local": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 81,
            "end": 83,
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 85,
          "end": 91,
          "local": {
            "type": "Identifier",
            "start": 85,
            "end": 91,
            "name": "AnEnum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 85,
            "end": 91,
            "name": "AnEnum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 93,
          "end": 105,
          "local": {
            "type": "Identifier",
            "start": 93,
            "end": 95,
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 99,
            "end": 105,
            "name": "FooBar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 107,
          "end": 124,
          "local": {
            "type": "Identifier",
            "start": 107,
            "end": 113,
            "name": "AnEnum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "name": "BarEnum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
