__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 22,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 19,
          "decorators": [],
          "name": "Member",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 20,
          "end": 22,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 23,
      "end": 45,
      "declaration": {
        "type": "Identifier",
        "start": 38,
        "end": 44,
        "decorators": [],
        "name": "Member",
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
  "end": 121,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 15,
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "value": "./b",
        "raw": "'./b'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 67,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 37,
          "end": 38,
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 42,
          "end": 53,
          "imported": {
            "type": "Identifier",
            "start": 42,
            "end": 48,
            "decorators": [],
            "name": "Member",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 61,
        "end": 66,
        "value": "./b",
        "raw": "'./b'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 68,
      "end": 94,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 75,
          "end": 82,
          "local": {
            "type": "Identifier",
            "start": 80,
            "end": 82,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 88,
        "end": 93,
        "value": "./b",
        "raw": "'./b'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 95,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 106,
        "end": 120,
        "expression": {
          "type": "Literal",
          "start": 114,
          "end": 119,
          "value": "./b",
          "raw": "\"./b\""
        }
      },
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
