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
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 25,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 14,
          "decorators": [],
          "name": "E1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 15,
          "end": 25,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 18,
              "end": 19,
              "id": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 20,
              "end": 21,
              "id": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            },
            {
              "type": "TSEnumMember",
              "start": 22,
              "end": 23,
              "id": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "C",
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
  "end": 148,
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "value": "./foo_0",
          "raw": "\"./foo_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 33,
      "end": 148,
      "test": {
        "type": "BinaryExpression",
        "start": 36,
        "end": 50,
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 44,
          "object": {
            "type": "MemberExpression",
            "start": 36,
            "end": 42,
            "object": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 40,
              "end": 42,
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 49,
          "end": 50,
          "value": 0,
          "raw": "0"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 51,
        "end": 148,
        "body": []
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
