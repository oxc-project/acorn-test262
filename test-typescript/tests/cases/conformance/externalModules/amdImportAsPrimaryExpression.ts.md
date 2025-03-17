__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 25,
        "body": {
          "type": "TSEnumBody",
          "start": 15,
          "end": 25,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 18,
              "end": 19,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 20,
              "end": 21,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 22,
              "end": 23,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "C",
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
          "start": 12,
          "end": 14,
          "decorators": [],
          "name": "E1",
          "optional": false,
          "typeAnnotation": null
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
  "end": 149,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "raw": "\"./foo_0\"",
          "value": "./foo_0"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 33,
      "end": 148,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 51,
        "end": 148,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 36,
        "end": 50,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 44,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 36,
            "end": 42,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 40,
              "end": 42,
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 49,
          "end": 50,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
