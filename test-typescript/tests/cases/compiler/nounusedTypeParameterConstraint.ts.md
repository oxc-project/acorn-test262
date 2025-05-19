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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 40,
        "body": {
          "type": "TSInterfaceBody",
          "start": 37,
          "end": 40,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 36,
          "decorators": [],
          "name": "IEventSourcedEntity",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 140,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 43,
        "raw": "\"./bar\"",
        "value": "./bar"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 28,
            "decorators": [],
            "name": "IEventSourcedEntity",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 140,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 52,
        "end": 140,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 80,
          "decorators": [],
          "name": "DomainEntityConstructor",
          "optional": false,
          "typeAnnotation": null
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 127,
                "end": 136,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 129,
                  "end": 136,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 136,
                    "decorators": [],
                    "name": "TEntity",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          ]
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
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 116,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 116,
                  "decorators": [],
                  "name": "IEventSourcedEntity",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 81,
                "end": 88,
                "decorators": [],
                "name": "TEntity",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
