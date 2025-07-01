__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 15
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 23
              },
              "initializer": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 26,
                "end": 27
              },
              "computed": false,
              "start": 22,
              "end": 27
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 34
              },
              "initializer": null,
              "computed": false,
              "start": 33,
              "end": 34
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "initializer": null,
              "computed": false,
              "start": 40,
              "end": 41
            }
          ],
          "start": 16,
          "end": 44
        },
        "const": false,
        "declare": false,
        "start": 7,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 44
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "importKind": "value",
          "start": 8,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./foo.js",
        "raw": "'./foo.js'",
        "start": 18,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 46
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 54
              },
              "initializer": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 60
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "optional": false,
                "computed": false,
                "start": 57,
                "end": 62
              },
              "computed": false,
              "start": 53,
              "end": 62
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 69
              },
              "initializer": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 75
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 77
                },
                "optional": false,
                "computed": false,
                "start": 72,
                "end": 77
              },
              "computed": false,
              "start": 68,
              "end": 77
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 84
              },
              "initializer": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 87,
                "end": 88
              },
              "computed": false,
              "start": 83,
              "end": 88
            }
          ],
          "start": 47,
          "end": 91
        },
        "const": false,
        "declare": false,
        "start": 38,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 31,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 91
}
```
