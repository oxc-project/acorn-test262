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
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 19,
          "end": 21
        },
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 21
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 36
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 37,
          "end": 39
        },
        "abstract": false,
        "declare": false,
        "start": 29,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 22,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 40
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 22
          },
          "start": 12,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "'./types'",
        "start": 28,
        "end": 37
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 38
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 53
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 53
          },
          "exportKind": "value",
          "start": 48,
          "end": 53
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 39,
      "end": 56
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 57
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
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./ns",
        "raw": "'./ns'",
        "start": 22,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 45
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 45
          },
          "importKind": "value",
          "start": 44,
          "end": 45
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "importKind": "value",
          "start": 47,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types",
        "raw": "'./types'",
        "start": 56,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 30,
      "end": 66
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 79
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "typeArguments": null,
          "start": 88,
          "end": 89
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 90,
        "end": 92
      },
      "declare": false,
      "start": 68,
      "end": 92
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 104
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "typeArguments": null,
          "start": 113,
          "end": 114
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 115,
        "end": 117
      },
      "declare": false,
      "start": 93,
      "end": 117
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 129
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "types",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 143
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 145
            },
            "optional": false,
            "computed": false,
            "start": 138,
            "end": 145
          },
          "typeArguments": null,
          "start": 138,
          "end": 145
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 146,
        "end": 148
      },
      "declare": false,
      "start": 118,
      "end": 148
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 160
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "types",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 174
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "optional": false,
            "computed": false,
            "start": 169,
            "end": 176
          },
          "typeArguments": null,
          "start": 169,
          "end": 176
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 177,
        "end": 179
      },
      "declare": false,
      "start": 149,
      "end": 179
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 188
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 198
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 199,
        "end": 201
      },
      "abstract": false,
      "declare": false,
      "start": 181,
      "end": 201
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "V",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 218
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "types",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 232
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 233,
          "end": 234
        },
        "optional": false,
        "computed": false,
        "start": 227,
        "end": 234
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 235,
        "end": 237
      },
      "abstract": false,
      "declare": false,
      "start": 211,
      "end": 237
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 246
}
```
