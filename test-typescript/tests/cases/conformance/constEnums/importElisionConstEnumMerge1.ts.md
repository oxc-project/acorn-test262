__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 37,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 22,
          "name": "Enum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 34,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "name": "One",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 33,
              "end": 34,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          }
        ],
        "const": true,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 23,
          "end": 37,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 27,
              "end": 34,
              "id": {
                "type": "Identifier",
                "start": 27,
                "end": 30,
                "name": "One",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 33,
                "end": 34,
                "value": 1,
                "raw": "1"
              },
              "computed": false
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Enum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Enum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 29,
        "value": "./enum",
        "raw": "\"./enum\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 45,
        "name": "Enum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 46,
        "end": 77,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 50,
            "end": 75,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 57,
              "end": 75,
              "id": {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 68,
                "end": 74
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 78,
      "end": 94,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 87,
          "end": 91,
          "local": {
            "type": "Identifier",
            "start": 87,
            "end": 91,
            "name": "Enum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 87,
            "end": 91,
            "name": "Enum",
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Enum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "Enum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "value": "./merge",
        "raw": "\"./merge\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 41,
      "expression": {
        "type": "MemberExpression",
        "start": 32,
        "end": 40,
        "object": {
          "type": "Identifier",
          "start": 32,
          "end": 36,
          "name": "Enum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 37,
          "end": 40,
          "name": "One",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
