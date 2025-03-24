__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 44,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 27,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 33,
            "end": 34,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
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
            "start": 40,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "c",
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
          "start": 16,
          "end": 44,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 22,
              "end": 27,
              "id": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 26,
                "end": 27,
                "value": 1,
                "raw": "1"
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 33,
              "end": 34,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
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
              "start": 40,
              "end": 41,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "c",
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
  "end": 91,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 28,
        "value": "./foo.js",
        "raw": "'./foo.js'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 91,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 38,
        "end": 91,
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 46,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 53,
            "end": 62,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 57,
              "end": 62,
              "object": {
                "type": "Identifier",
                "start": 57,
                "end": 60,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 68,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 72,
              "end": 77,
              "object": {
                "type": "Identifier",
                "start": 72,
                "end": 75,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 83,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 87,
              "end": 88,
              "value": 5,
              "raw": "5"
            },
            "computed": false
          }
        ],
        "const": false,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 47,
          "end": 91,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 53,
              "end": 62,
              "id": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": {
                "type": "MemberExpression",
                "start": 57,
                "end": 62,
                "object": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 60,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 68,
              "end": 77,
              "id": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": {
                "type": "MemberExpression",
                "start": 72,
                "end": 77,
                "object": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 75,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 83,
              "end": 88,
              "id": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 87,
                "end": 88,
                "value": 5,
                "raw": "5"
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
