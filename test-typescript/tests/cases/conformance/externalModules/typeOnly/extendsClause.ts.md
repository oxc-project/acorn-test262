__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 21,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 21,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 29,
        "end": 39,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 37,
          "end": 39,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
  "end": 247,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 28,
        "raw": "'./ns'",
        "value": "./ns"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
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
      "start": 30,
      "end": 66,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 65,
        "raw": "'./types'",
        "value": "./types"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 44,
          "end": 45,
          "imported": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 47,
          "end": 48,
          "imported": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 68,
      "end": 92,
      "body": {
        "type": "TSInterfaceBody",
        "start": 90,
        "end": 92,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 88,
          "end": 89,
          "expression": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 93,
      "end": 117,
      "body": {
        "type": "TSInterfaceBody",
        "start": 115,
        "end": 117,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 113,
          "end": 114,
          "expression": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 118,
      "end": 148,
      "body": {
        "type": "TSInterfaceBody",
        "start": 146,
        "end": 148,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 138,
          "end": 145,
          "expression": {
            "type": "MemberExpression",
            "start": 138,
            "end": 145,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 138,
              "end": 143,
              "decorators": [],
              "name": "types",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 149,
      "end": 179,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 179,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 169,
          "end": 176,
          "expression": {
            "type": "MemberExpression",
            "start": 169,
            "end": 176,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 169,
              "end": 174,
              "decorators": [],
              "name": "types",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 201,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 199,
        "end": 201,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 198,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 211,
      "end": 237,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 235,
        "end": 237,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 218,
        "decorators": [],
        "name": "V",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 227,
        "end": 234,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 227,
          "end": 232,
          "decorators": [],
          "name": "types",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 233,
          "end": 234,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
