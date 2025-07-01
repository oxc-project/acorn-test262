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
        "start": 7,
        "end": 8
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
                "start": 30,
                "end": 32
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 33,
                "end": 35
              },
              "declare": false,
              "start": 20,
              "end": 35
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 13,
            "end": 35
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
                "start": 55,
                "end": 57
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
                      "start": 58,
                      "end": 59
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 58,
                    "end": 59
                  }
                ],
                "start": 57,
                "end": 60
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 61,
                "end": 63
              },
              "declare": false,
              "start": 45,
              "end": 63
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 38,
            "end": 63
          }
        ],
        "start": 9,
        "end": 65
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 65
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
        "start": 72,
        "end": 74
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
          "start": 83,
          "end": 84
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "I1",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 87
        },
        "optional": false,
        "computed": false,
        "start": 83,
        "end": 87
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 88,
        "end": 90
      },
      "abstract": false,
      "declare": false,
      "start": 66,
      "end": 90
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
        "start": 97,
        "end": 99
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
              "start": 100,
              "end": 101
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 100,
            "end": 101
          }
        ],
        "start": 99,
        "end": 102
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 112
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "I2",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 115
        },
        "optional": false,
        "computed": false,
        "start": 111,
        "end": 115
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
              "start": 116,
              "end": 117
            },
            "typeArguments": null,
            "start": 116,
            "end": 117
          }
        ],
        "start": 115,
        "end": 118
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 119,
        "end": 121
      },
      "abstract": false,
      "declare": false,
      "start": 91,
      "end": 121
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mod",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 133
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
                "start": 154,
                "end": 160
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
                        "start": 182,
                        "end": 183
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 184,
                        "end": 186
                      },
                      "declare": false,
                      "start": 172,
                      "end": 186
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 165,
                    "end": 186
                  }
                ],
                "start": 161,
                "end": 189
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 144,
              "end": 189
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 137,
            "end": 189
          }
        ],
        "start": 134,
        "end": 191
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 123,
      "end": 191
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
        "start": 199,
        "end": 200
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
            "start": 209,
            "end": 212
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Nested",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 219
          },
          "optional": false,
          "computed": false,
          "start": 209,
          "end": 219
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 221
        },
        "optional": false,
        "computed": false,
        "start": 209,
        "end": 221
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 222,
        "end": 224
      },
      "abstract": false,
      "declare": false,
      "start": 193,
      "end": 224
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 224
}
```
