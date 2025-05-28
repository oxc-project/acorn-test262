__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 45,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 18,
          "decorators": [],
          "name": "MyEnum",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 19,
          "end": 45,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 23,
              "end": 28,
              "id": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": {
                "type": "Literal",
                "start": 27,
                "end": 28,
                "value": 0,
                "raw": "0"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 32,
              "end": 33,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 37,
              "end": 38,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 42,
              "end": 43,
              "id": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            }
          ]
        },
        "const": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 94,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 52,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 35,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "MyEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 35,
            "decorators": [],
            "name": "MyEnumFromModule",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 43,
        "end": 51,
        "value": "./enum",
        "raw": "\"./enum\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 54,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 65,
        "decorators": [],
        "name": "MyEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 66,
        "end": 94,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 70,
            "end": 92,
            "id": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 74,
              "end": 92,
              "object": {
                "type": "Identifier",
                "start": 74,
                "end": 90,
                "decorators": [],
                "name": "MyEnumFromModule",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
