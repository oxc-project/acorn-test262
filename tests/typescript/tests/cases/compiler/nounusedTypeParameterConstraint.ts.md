__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IEventSourcedEntity",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 36
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 37,
          "end": 40
        },
        "declare": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 40
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
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
            "name": "IEventSourcedEntity",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "IEventSourcedEntity",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 28
          },
          "importKind": "value",
          "start": 9,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./bar",
        "raw": "\"./bar\"",
        "start": 36,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DomainEntityConstructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 80
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TEntity",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 88
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEventSourcedEntity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 116
                },
                "typeArguments": null,
                "start": 97,
                "end": 116
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 81,
              "end": 116
            }
          ],
          "start": 80,
          "end": 117
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TEntity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 136
                  },
                  "typeArguments": null,
                  "start": 129,
                  "end": 136
                },
                "start": 127,
                "end": 136
              },
              "start": 122,
              "end": 137
            }
          ],
          "start": 120,
          "end": 139
        },
        "declare": false,
        "start": 52,
        "end": 140
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 45,
      "end": 140
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
