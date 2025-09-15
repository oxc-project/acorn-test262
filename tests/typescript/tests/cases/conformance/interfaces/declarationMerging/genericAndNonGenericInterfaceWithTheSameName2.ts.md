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
        "start": 81,
        "end": 82
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
              "start": 99,
              "end": 100
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
                    "start": 101,
                    "end": 102
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 101,
                  "end": 102
                }
              ],
              "start": 100,
              "end": 103
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
                    "start": 114,
                    "end": 117
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
                        "start": 119,
                        "end": 120
                      },
                      "typeArguments": null,
                      "start": 119,
                      "end": 120
                    },
                    "start": 117,
                    "end": 120
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 114,
                  "end": 121
                }
              ],
              "start": 104,
              "end": 127
            },
            "declare": false,
            "start": 89,
            "end": 127
          }
        ],
        "start": 83,
        "end": 129
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 71,
      "end": 129
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 143
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
              "start": 160,
              "end": 161
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
                    "start": 178,
                    "end": 181
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 183,
                      "end": 189
                    },
                    "start": 181,
                    "end": 189
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 178,
                  "end": 190
                }
              ],
              "start": 162,
              "end": 196
            },
            "declare": false,
            "start": 150,
            "end": 196
          }
        ],
        "start": 144,
        "end": 198
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 131,
      "end": 198
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 211
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
              "start": 228,
              "end": 229
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
                    "start": 250,
                    "end": 251
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
                          "start": 252,
                          "end": 253
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 252,
                        "end": 253
                      }
                    ],
                    "start": 251,
                    "end": 254
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
                          "start": 269,
                          "end": 272
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
                              "start": 274,
                              "end": 275
                            },
                            "typeArguments": null,
                            "start": 274,
                            "end": 275
                          },
                          "start": 272,
                          "end": 275
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 269,
                        "end": 276
                      }
                    ],
                    "start": 255,
                    "end": 286
                  },
                  "declare": false,
                  "start": 240,
                  "end": 286
                }
              ],
              "start": 230,
              "end": 292
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 218,
            "end": 292
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 310
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
                    "start": 331,
                    "end": 332
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
                          "start": 353,
                          "end": 356
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 358,
                            "end": 364
                          },
                          "start": 356,
                          "end": 364
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 353,
                        "end": 365
                      }
                    ],
                    "start": 333,
                    "end": 375
                  },
                  "declare": false,
                  "start": 321,
                  "end": 375
                }
              ],
              "start": 311,
              "end": 381
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 298,
            "end": 381
          }
        ],
        "start": 212,
        "end": 383
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 200,
      "end": 383
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 71,
  "end": 383
}
```
