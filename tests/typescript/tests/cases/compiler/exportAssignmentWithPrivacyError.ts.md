__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "connectmodule",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 23
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
                "name": "res",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 34
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "req",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 39
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 45
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 48,
                "end": 52
              },
              "start": 46,
              "end": 52
            },
            "start": 30,
            "end": 53
          }
        ],
        "start": 24,
        "end": 55
      },
      "declare": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "connectexport",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 79
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
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 89
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "connectmodule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 97,
                          "end": 110
                        },
                        "typeArguments": null,
                        "start": 97,
                        "end": 110
                      },
                      "start": 95,
                      "end": 110
                    },
                    "start": 92,
                    "end": 110
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "connectexport",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 128
                    },
                    "typeArguments": null,
                    "start": 115,
                    "end": 128
                  },
                  "start": 112,
                  "end": 128
                },
                "start": 91,
                "end": 128
              },
              "start": 89,
              "end": 128
            },
            "accessibility": null,
            "static": false,
            "start": 86,
            "end": 129
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "listen",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 140
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "port",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 149,
                        "end": 155
                      },
                      "start": 147,
                      "end": 155
                    },
                    "start": 143,
                    "end": 155
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 160,
                    "end": 164
                  },
                  "start": 157,
                  "end": 164
                },
                "start": 142,
                "end": 164
              },
              "start": 140,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 134,
            "end": 165
          }
        ],
        "start": 80,
        "end": 167
      },
      "declare": false,
      "start": 56,
      "end": 167
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
            "name": "server",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "connectexport",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 204
                        },
                        "typeArguments": null,
                        "start": 191,
                        "end": 204
                      },
                      "start": 189,
                      "end": 204
                    },
                    "start": 187,
                    "end": 205
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 215
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "connectmodule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 217,
                          "end": 230
                        },
                        "typeArguments": null,
                        "start": 217,
                        "end": 230
                      },
                      "start": 215,
                      "end": 230
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 210,
                    "end": 231
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 236,
                      "end": 241
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "connectmodule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 245,
                          "end": 258
                        },
                        "typeArguments": null,
                        "start": 245,
                        "end": 258
                      },
                      "start": 243,
                      "end": 258
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 236,
                    "end": 259
                  }
                ],
                "start": 181,
                "end": 261
              },
              "start": 179,
              "end": 261
            },
            "start": 173,
            "end": 261
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 261
        }
      ],
      "declare": false,
      "start": 169,
      "end": 262
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "server",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 279
      },
      "start": 264,
      "end": 280
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 281
}
```
