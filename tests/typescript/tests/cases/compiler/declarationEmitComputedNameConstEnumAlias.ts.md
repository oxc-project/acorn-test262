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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "decorators": [],
        "name": "EnumExample",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 17,
        "end": 39,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 23,
            "end": 36,
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
              "value": "TEST",
              "raw": "'TEST'"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
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
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 39,
        "value": "./EnumExample",
        "raw": "'./EnumExample'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
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
            "kind": "init",
            "key": {
              "type": "MemberExpression",
              "start": 64,
              "end": 80,
              "object": {
                "type": "Identifier",
                "start": 64,
                "end": 75,
                "decorators": [],
                "name": "EnumExample",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 76,
                "end": 80,
                "decorators": [],
                "name": "TEST",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 83,
              "end": 85,
              "properties": []
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false
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
