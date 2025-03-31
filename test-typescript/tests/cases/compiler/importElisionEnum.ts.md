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
          "name": "MyEnum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 23,
            "end": 28,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "d",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "d",
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
            "name": "MyEnum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 35,
            "name": "MyEnumFromModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "MyEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 70,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "MemberExpression",
            "start": 74,
            "end": 92,
            "object": {
              "type": "Identifier",
              "start": 74,
              "end": 90,
              "name": "MyEnumFromModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 74,
              "end": 92,
              "object": {
                "type": "Identifier",
                "start": 74,
                "end": 90,
                "name": "MyEnumFromModule",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
