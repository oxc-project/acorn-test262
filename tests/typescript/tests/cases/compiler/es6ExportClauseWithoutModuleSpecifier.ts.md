__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 18
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 37
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 38,
          "end": 41
        },
        "declare": false,
        "start": 26,
        "end": 41
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 19,
      "end": 41
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 60
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
                      "start": 78,
                      "end": 79
                    },
                    "init": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 82,
                      "end": 84
                    },
                    "definite": false,
                    "start": 78,
                    "end": 84
                  }
                ],
                "declare": false,
                "start": 74,
                "end": 85
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 67,
              "end": 85
            }
          ],
          "start": 61,
          "end": 87
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 49,
        "end": 87
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 42,
      "end": 87
    },
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
              "start": 99,
              "end": 100
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 103,
              "end": 105
            },
            "definite": false,
            "start": 99,
            "end": 105
          }
        ],
        "declare": false,
        "start": 95,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 88,
      "end": 106
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "uninstantiated",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 138
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [],
          "start": 139,
          "end": 142
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 114,
        "end": 142
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 142
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 143
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "start": 9,
            "end": 10
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "exportKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 18,
        "end": 26
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
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
            "start": 37,
            "end": 38
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 44
          },
          "exportKind": "value",
          "start": 37,
          "end": 44
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 52,
        "end": 60
      },
      "exportKind": "value",
      "attributes": [],
      "start": 28,
      "end": 61
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
            "start": 71,
            "end": 72
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "exportKind": "value",
          "start": 71,
          "end": 72
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "instantiatedModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 97
          },
          "exportKind": "value",
          "start": 74,
          "end": 97
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 105,
        "end": 113
      },
      "exportKind": "value",
      "attributes": [],
      "start": 62,
      "end": 114
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
            "start": 124,
            "end": 138
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "uninstantiated",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 138
          },
          "exportKind": "value",
          "start": 124,
          "end": 138
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 146,
        "end": 154
      },
      "exportKind": "value",
      "attributes": [],
      "start": 115,
      "end": 155
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
            "start": 165,
            "end": 166
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "exportKind": "value",
          "start": 165,
          "end": 166
        }
      ],
      "source": {
        "type": "Literal",
        "value": "server",
        "raw": "\"server\"",
        "start": 174,
        "end": 182
      },
      "exportKind": "value",
      "attributes": [],
      "start": 156,
      "end": 183
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 183
}
```
