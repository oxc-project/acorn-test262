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
        "start": 35,
        "end": 36
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
                    "start": 54,
                    "end": 55
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 58,
                    "end": 60
                  },
                  "definite": false,
                  "start": 54,
                  "end": 60
                }
              ],
              "declare": false,
              "start": 50,
              "end": 61
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 43,
            "end": 61
          }
        ],
        "start": 37,
        "end": 63
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 28,
      "end": 63
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
            "start": 68,
            "end": 69
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 72,
            "end": 74
          },
          "definite": false,
          "start": 68,
          "end": 74
        }
      ],
      "declare": false,
      "start": 64,
      "end": 75
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "uninstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 97
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 98,
        "end": 101
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 76,
      "end": 101
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
            "start": 111,
            "end": 112
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "exportKind": "value",
          "start": 111,
          "end": 112
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 102,
      "end": 115
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
            "start": 125,
            "end": 126
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 132
          },
          "exportKind": "value",
          "start": 125,
          "end": 132
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 116,
      "end": 135
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
            "start": 145,
            "end": 146
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 146
          },
          "exportKind": "value",
          "start": 145,
          "end": 146
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 149
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "instantiatedModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 171
          },
          "exportKind": "value",
          "start": 148,
          "end": 171
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 136,
      "end": 174
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
            "start": 184,
            "end": 198
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "uninstantiated",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 198
          },
          "exportKind": "value",
          "start": 184,
          "end": 198
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 175,
      "end": 201
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
            "start": 211,
            "end": 212
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "exportKind": "value",
          "start": 211,
          "end": 212
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 202,
      "end": 215
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 215
}
```
