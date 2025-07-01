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
        "start": 78,
        "end": 79
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
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
                    "start": 98,
                    "end": 99
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 98,
                  "end": 99
                }
              ],
              "start": 97,
              "end": 100
            },
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 114
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                    },
                    "start": 114,
                    "end": 117
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 111,
                  "end": 118
                }
              ],
              "start": 101,
              "end": 124
            },
            "declare": false,
            "start": 86,
            "end": 124
          }
        ],
        "start": 80,
        "end": 126
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 71,
      "end": 126
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 137
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 175
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 177,
                      "end": 183
                    },
                    "start": 175,
                    "end": 183
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 172,
                  "end": 184
                }
              ],
              "start": 156,
              "end": 190
            },
            "declare": false,
            "start": 144,
            "end": 190
          }
        ],
        "start": 138,
        "end": 192
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 128,
      "end": 192
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 202
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 217
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 239
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
                          "start": 240,
                          "end": 241
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 240,
                        "end": 241
                      }
                    ],
                    "start": 239,
                    "end": 242
                  },
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
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 260
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 262,
                              "end": 263
                            },
                            "typeArguments": null,
                            "start": 262,
                            "end": 263
                          },
                          "start": 260,
                          "end": 263
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 257,
                        "end": 264
                      }
                    ],
                    "start": 243,
                    "end": 274
                  },
                  "declare": false,
                  "start": 228,
                  "end": 274
                }
              ],
              "start": 218,
              "end": 280
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 209,
            "end": 280
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 295
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 317
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 338,
                          "end": 341
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 343,
                            "end": 349
                          },
                          "start": 341,
                          "end": 349
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 338,
                        "end": 350
                      }
                    ],
                    "start": 318,
                    "end": 360
                  },
                  "declare": false,
                  "start": 306,
                  "end": 360
                }
              ],
              "start": 296,
              "end": 366
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 286,
            "end": 366
          }
        ],
        "start": 203,
        "end": 368
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 194,
      "end": 368
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 71,
  "end": 368
}
```
