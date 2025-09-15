__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 35
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 36,
                "end": 38
              },
              "declare": false,
              "start": 23,
              "end": 38
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 16,
            "end": 38
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 60
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 62
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 61,
                    "end": 62
                  }
                ],
                "start": 60,
                "end": 63
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 64,
                "end": 66
              },
              "declare": false,
              "start": 48,
              "end": 66
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 41,
            "end": 66
          }
        ],
        "start": 12,
        "end": 68
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 68
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 77
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 87
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "I1",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 90
        },
        "optional": false,
        "computed": false,
        "start": 86,
        "end": 90
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 91,
        "end": 93
      },
      "abstract": false,
      "declare": false,
      "start": 69,
      "end": 93
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 102
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 103,
            "end": 104
          }
        ],
        "start": 102,
        "end": 105
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 115
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "I2",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 118
        },
        "optional": false,
        "computed": false,
        "start": 114,
        "end": 118
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "typeArguments": null,
            "start": 119,
            "end": 120
          }
        ],
        "start": 118,
        "end": 121
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 122,
        "end": 124
      },
      "abstract": false,
      "declare": false,
      "start": 94,
      "end": 124
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 139
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nested",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 166
              },
              "body": {
                "type": "TSModuleBlock",
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
                        "start": 188,
                        "end": 189
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 190,
                        "end": 192
                      },
                      "declare": false,
                      "start": 178,
                      "end": 192
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 171,
                    "end": 192
                  }
                ],
                "start": 167,
                "end": 195
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 150,
              "end": 195
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 143,
            "end": 195
          }
        ],
        "start": 140,
        "end": 197
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 126,
      "end": 197
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 206
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 218
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Nested",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 225
          },
          "optional": false,
          "computed": false,
          "start": 215,
          "end": 225
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 227
        },
        "optional": false,
        "computed": false,
        "start": 215,
        "end": 227
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 228,
        "end": 230
      },
      "abstract": false,
      "declare": false,
      "start": 199,
      "end": 230
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 230
}
```
