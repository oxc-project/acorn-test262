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
        "start": 15,
        "end": 16
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
              "start": 113,
              "end": 121
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 124,
                  "end": 130
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 132,
                    "end": 138
                  },
                  "start": 132,
                  "end": 140
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 150
                  },
                  "typeArguments": null,
                  "start": 142,
                  "end": 150
                }
              ],
              "start": 124,
              "end": 150
            },
            "declare": false,
            "start": 108,
            "end": 151
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
                "start": 174,
                "end": 181
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
                            "start": 203,
                            "end": 206
                          },
                          "start": 201,
                          "end": 206
                        },
                        "start": 193,
                        "end": 206
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
                          "start": 224,
                          "end": 233
                        },
                        "typeArguments": null,
                        "start": 224,
                        "end": 233
                      },
                      "start": 222,
                      "end": 233
                    },
                    "start": 192,
                    "end": 234
                  }
                ],
                "start": 182,
                "end": 240
              },
              "declare": false,
              "start": 164,
              "end": 240
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 157,
            "end": 240
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
                "start": 262,
                "end": 271
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 272,
                "end": 275
              },
              "declare": false,
              "start": 252,
              "end": 275
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 245,
            "end": 275
          }
        ],
        "start": 17,
        "end": 277
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 277
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
                    "start": 293,
                    "end": 294
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IStatic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 302
                  },
                  "start": 293,
                  "end": 302
                },
                "typeArguments": null,
                "start": 293,
                "end": 302
              },
              "start": 291,
              "end": 302
            },
            "start": 290,
            "end": 302
          },
          "init": null,
          "definite": false,
          "start": 290,
          "end": 302
        }
      ],
      "declare": true,
      "start": 278,
      "end": 303
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 365
}
```
