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
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 29,
        "body": {
          "type": "TSInterfaceBody",
          "start": 27,
          "end": 29,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 26,
          "decorators": [],
          "name": "Component",
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
  "end": 57,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 37,
        "raw": "'./types'",
        "value": "./types"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 12,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 22,
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 56,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 48,
          "end": 53,
          "exported": {
            "type": "Identifier",
            "start": 48,
            "end": 53,
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 53,
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 173,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 37,
        "raw": "'./types'",
        "value": "./types"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 12,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 22,
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 79,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 72,
        "end": 78,
        "raw": "'./ns'",
        "value": "./ns"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 46,
          "end": 66,
          "local": {
            "type": "Identifier",
            "start": 51,
            "end": 66,
            "decorators": [],
            "name": "nestedNamespace",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 81,
      "end": 118,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 118,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 100,
          "end": 115,
          "expression": {
            "type": "MemberExpression",
            "start": 100,
            "end": 115,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 100,
              "end": 105,
              "decorators": [],
              "name": "types",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 106,
              "end": 115,
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 172,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 138,
          "end": 169,
          "expression": {
            "type": "MemberExpression",
            "start": 138,
            "end": 169,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 138,
              "end": 159,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 138,
                "end": 153,
                "decorators": [],
                "name": "nestedNamespace",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 159,
                "decorators": [],
                "name": "types",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 160,
              "end": 169,
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
