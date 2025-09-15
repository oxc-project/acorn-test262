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
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Selector",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 124
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 127,
                  "end": 133
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  },
                  "start": 135,
                  "end": 143
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 153
                  },
                  "typeArguments": null,
                  "start": 145,
                  "end": 153
                }
              ],
              "start": 127,
              "end": 153
            },
            "declare": false,
            "start": 111,
            "end": 154
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IStatic",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 184
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "selector",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 206,
                            "end": 209
                          },
                          "start": 204,
                          "end": 209
                        },
                        "start": 196,
                        "end": 209
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IInstance",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 227,
                          "end": 236
                        },
                        "typeArguments": null,
                        "start": 227,
                        "end": 236
                      },
                      "start": 225,
                      "end": 236
                    },
                    "start": 195,
                    "end": 237
                  }
                ],
                "start": 185,
                "end": 243
              },
              "declare": false,
              "start": 167,
              "end": 243
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 160,
            "end": 243
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 274
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 275,
                "end": 278
              },
              "declare": false,
              "start": 255,
              "end": 278
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 248,
            "end": 278
          }
        ],
        "start": 20,
        "end": 280
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 280
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 297
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IStatic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 305
                  },
                  "start": 296,
                  "end": 305
                },
                "typeArguments": null,
                "start": 296,
                "end": 305
              },
              "start": 294,
              "end": 305
            },
            "start": 293,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 293,
          "end": 305
        }
      ],
      "declare": true,
      "start": 281,
      "end": 306
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 368
}
```
