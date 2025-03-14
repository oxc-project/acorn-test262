__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 29,
        "body": {
          "type": "TSEnumBody",
          "start": 22,
          "end": 29,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 24,
              "end": 27,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 24,
                "end": 27,
                "decorators": [],
                "name": "Bar",
                "optional": false
              }
            }
          ]
        },
        "const": true,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 21,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 63,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 28,
        "raw": "\"./enum\"",
        "value": "./enum"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 62,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 62,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 53,
            "end": 60,
            "argument": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 41,
          "end": 49,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 44,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 46,
              "end": 49,
              "typeName": {
                "type": "Identifier",
                "start": 46,
                "end": 49,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
