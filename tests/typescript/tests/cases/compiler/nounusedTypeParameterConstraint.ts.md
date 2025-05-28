__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 40,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 36,
          "decorators": [],
          "name": "IEventSourcedEntity",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 37,
          "end": 40,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
  "end": 140,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 28,
            "decorators": [],
            "name": "IEventSourcedEntity",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 28,
            "decorators": [],
            "name": "IEventSourcedEntity",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 43,
        "value": "./bar",
        "raw": "\"./bar\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 140,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 52,
        "end": 140,
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 80,
          "decorators": [],
          "name": "DomainEntityConstructor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 80,
          "end": 117,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 81,
              "end": 116,
              "name": {
                "type": "Identifier",
                "start": 81,
                "end": 88,
                "decorators": [],
                "name": "TEntity",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 116,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 116,
                  "decorators": [],
                  "name": "IEventSourcedEntity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 120,
          "end": 139,
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 122,
              "end": 137,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 127,
                "end": 136,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 129,
                  "end": 136,
                  "typeName": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 136,
                    "decorators": [],
                    "name": "TEntity",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
