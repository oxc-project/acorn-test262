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
        "name": "http",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
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
                "name": "TcpSocketConnectOpts",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 113
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "port",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 124
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 126,
                        "end": 132
                      },
                      "start": 124,
                      "end": 132
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 120,
                    "end": 133
                  }
                ],
                "start": 114,
                "end": 137
              },
              "declare": false,
              "start": 83,
              "end": 137
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 76,
            "end": 137
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "AgentOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 170
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Partial",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 186
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TcpSocketConnectOpts",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 207
                        },
                        "typeArguments": null,
                        "start": 187,
                        "end": 207
                      }
                    ],
                    "start": 186,
                    "end": 208
                  },
                  "start": 179,
                  "end": 208
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keepAlive",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 224
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 227,
                            "end": 234
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 237,
                            "end": 246
                          }
                        ],
                        "start": 227,
                        "end": 246
                      },
                      "start": 225,
                      "end": 246
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 215,
                    "end": 247
                  }
                ],
                "start": 209,
                "end": 251
              },
              "declare": false,
              "start": 148,
              "end": 251
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 141,
            "end": 251
          }
        ],
        "start": 72,
        "end": 253
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 57,
      "end": 253
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tls",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 268
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
                "name": "ConnectionOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 307
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "port",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 314,
                      "end": 318
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 321,
                            "end": 327
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 330,
                            "end": 339
                          }
                        ],
                        "start": 321,
                        "end": 339
                      },
                      "start": 319,
                      "end": 339
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 314,
                    "end": 340
                  }
                ],
                "start": 308,
                "end": 344
              },
              "declare": false,
              "start": 280,
              "end": 344
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 273,
            "end": 344
          }
        ],
        "start": 269,
        "end": 346
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 255,
      "end": 346
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AgentOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 370
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
              "name": "http",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 383
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "AgentOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 396
            },
            "optional": false,
            "computed": false,
            "start": 379,
            "end": 396
          },
          "typeArguments": null,
          "start": 379,
          "end": 396
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "tls",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 401
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConnectionOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 419
            },
            "optional": false,
            "computed": false,
            "start": 398,
            "end": 419
          },
          "typeArguments": null,
          "start": 398,
          "end": 419
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "maxCachedSessions",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 483
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 486,
                    "end": 492
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 495,
                    "end": 504
                  }
                ],
                "start": 486,
                "end": 504
              },
              "start": 484,
              "end": 504
            },
            "accessibility": null,
            "static": false,
            "start": 466,
            "end": 505
          }
        ],
        "start": 420,
        "end": 507
      },
      "declare": false,
      "start": 348,
      "end": 507
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 507
}
```
