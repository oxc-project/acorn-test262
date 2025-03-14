enum.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 37,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 37,
        "body": {
          "type": "TSEnumBody",
          "start": 23,
          "end": 37,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 27,
              "end": 34,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 30,
                "decorators": [],
                "name": "One",
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "raw": "1",
                "value": 1
              }
            }
          ]
        },
        "const": true,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 22,
          "decorators": [],
          "name": "Enum",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
merge.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 29,
        "raw": "\"./enum\"",
        "value": "./enum"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Enum",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Enum",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 77,
      "body": {
        "type": "TSModuleBlock",
        "start": 46,
        "end": 77,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 50,
            "end": 75,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 57,
              "end": 75,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 68,
                "end": 74
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 45,
        "decorators": [],
        "name": "Enum",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 78,
      "end": 94,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 87,
          "end": 91,
          "exported": {
            "type": "Identifier",
            "start": 87,
            "end": 91,
            "decorators": [],
            "name": "Enum",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 87,
            "end": 91,
            "decorators": [],
            "name": "Enum",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "raw": "\"./merge\"",
        "value": "./merge"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Enum",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "Enum",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 41,
      "expression": {
        "type": "MemberExpression",
        "start": 32,
        "end": 40,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 32,
          "end": 36,
          "decorators": [],
          "name": "Enum",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 37,
          "end": 40,
          "decorators": [],
          "name": "One",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
