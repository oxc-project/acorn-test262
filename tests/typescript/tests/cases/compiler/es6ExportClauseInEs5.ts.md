__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 11
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 23
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 24,
        "end": 27
      },
      "declare": false,
      "start": 12,
      "end": 27
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 39
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 58
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 61,
                    "end": 63
                  },
                  "definite": false,
                  "start": 57,
                  "end": 63
                }
              ],
              "declare": false,
              "start": 53,
              "end": 64
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 46,
            "end": 64
          }
        ],
        "start": 40,
        "end": 66
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 28,
      "end": 66
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 75,
            "end": 77
          },
          "definite": false,
          "start": 71,
          "end": 77
        }
      ],
      "declare": false,
      "start": 67,
      "end": 78
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uninstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 103
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 104,
        "end": 107
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 79,
      "end": 107
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 118
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 118
          },
          "exportKind": "value",
          "start": 117,
          "end": 118
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 108,
      "end": 121
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 138
          },
          "exportKind": "value",
          "start": 131,
          "end": 138
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 122,
      "end": 141
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 152
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 152
          },
          "exportKind": "value",
          "start": 151,
          "end": 152
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "instantiatedModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 177
          },
          "exportKind": "value",
          "start": 154,
          "end": 177
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 142,
      "end": 180
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
            "name": "uninstantiated",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 204
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "uninstantiated",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 204
          },
          "exportKind": "value",
          "start": 190,
          "end": 204
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 181,
      "end": 207
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 218
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 218
          },
          "exportKind": "value",
          "start": 217,
          "end": 218
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 208,
      "end": 221
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 221
}
```
