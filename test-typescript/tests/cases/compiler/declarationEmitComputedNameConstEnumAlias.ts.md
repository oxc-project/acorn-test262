__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 39,
      "body": {
        "type": "TSEnumBody",
        "start": 17,
        "end": 39,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 23,
            "end": 36,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "decorators": [],
              "name": "TEST",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 30,
              "end": 36,
              "raw": "'TEST'",
              "value": "TEST",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "decorators": [],
        "name": "EnumExample",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 41,
      "end": 68,
      "declaration": {
        "type": "Identifier",
        "start": 56,
        "end": 67,
        "decorators": [],
        "name": "EnumExample",
        "optional": false,
        "typeAnnotation": null
      },
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
  "end": 89,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 39,
        "raw": "'./EnumExample'",
        "value": "./EnumExample",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 18,
            "decorators": [],
            "name": "EnumExample",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 42,
      "end": 89,
      "declaration": {
        "type": "ObjectExpression",
        "start": 57,
        "end": 88,
        "properties": [
          {
            "type": "Property",
            "start": 63,
            "end": 85,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 64,
              "end": 80,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 64,
                "end": 75,
                "decorators": [],
                "name": "EnumExample",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 76,
                "end": 80,
                "decorators": [],
                "name": "TEST",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ObjectExpression",
              "start": 83,
              "end": 85,
              "properties": []
            }
          }
        ]
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
