__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnumExample",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TEST",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 27
            },
            "initializer": {
              "type": "Literal",
              "value": "TEST",
              "raw": "'TEST'",
              "start": 30,
              "end": 36
            },
            "computed": false,
            "start": 23,
            "end": 36
          }
        ],
        "start": 17,
        "end": 39
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "EnumExample",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 67
      },
      "exportKind": "value",
      "start": 41,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 69
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "EnumExample",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./EnumExample",
        "raw": "'./EnumExample'",
        "start": 24,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "EnumExample",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 75
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "TEST",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 80
              },
              "optional": false,
              "computed": false,
              "start": 64,
              "end": 80
            },
            "value": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 83,
              "end": 85
            },
            "method": false,
            "shorthand": false,
            "computed": true,
            "optional": false,
            "start": 63,
            "end": 85
          }
        ],
        "start": 57,
        "end": 88
      },
      "exportKind": "value",
      "start": 42,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
