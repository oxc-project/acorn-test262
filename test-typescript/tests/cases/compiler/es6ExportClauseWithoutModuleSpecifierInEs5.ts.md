__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 41,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 26,
        "end": 41,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 38,
          "end": 41,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 84,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 49,
        "end": 84,
        "id": {
          "type": "Identifier",
          "start": 56,
          "end": 57,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 58,
          "end": 84,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 64,
              "end": 82,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 71,
                "end": 82,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 75,
                    "end": 81,
                    "id": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 76,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 79,
                      "end": 81,
                      "value": 10,
                      "raw": "10"
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 85,
      "end": 103,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 92,
        "end": 103,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 96,
            "end": 102,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 100,
              "end": 102,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 136,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 111,
        "end": 136,
        "id": {
          "type": "Identifier",
          "start": 118,
          "end": 132,
          "name": "uninstantiated",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 133,
          "end": 136,
          "body": []
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 193,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 28,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 65,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 39,
          "end": 46,
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 44,
            "end": 46,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 64,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 120,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 75,
          "end": 76,
          "local": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 78,
          "end": 101,
          "local": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 83,
            "end": 101,
            "name": "instantiatedModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 109,
        "end": 119,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 121,
      "end": 163,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 130,
          "end": 144,
          "local": {
            "type": "Identifier",
            "start": 130,
            "end": 144,
            "name": "uninstantiated",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 130,
            "end": 144,
            "name": "uninstantiated",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 152,
        "end": 162,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 164,
      "end": 193,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 173,
          "end": 174,
          "local": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 182,
        "end": 192,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
