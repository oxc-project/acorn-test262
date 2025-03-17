__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 71,
  "end": 368,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 71,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 126,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 86,
            "end": 124,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 97,
              "end": 100,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 98,
                  "end": 99,
                  "name": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 101,
              "end": 124,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 111,
                  "end": 118,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 114,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 116,
                      "end": 117,
                      "typeName": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 128,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 137,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 138,
        "end": 192,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 144,
            "end": 190,
            "id": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 156,
              "end": 190,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 172,
                  "end": 184,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 175,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 177,
                      "end": 183
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 194,
      "end": 368,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 203,
        "end": 368,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 209,
            "end": 280,
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 218,
              "end": 280,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 228,
                  "end": 274,
                  "id": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 239,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 239,
                    "end": 242,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 240,
                        "end": 241,
                        "name": {
                          "type": "Identifier",
                          "start": 240,
                          "end": 241,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 243,
                    "end": 274,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 257,
                        "end": 264,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 260,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 260,
                          "end": 263,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 262,
                            "end": 263,
                            "typeName": {
                              "type": "Identifier",
                              "start": 262,
                              "end": 263,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 286,
            "end": 366,
            "id": {
              "type": "Identifier",
              "start": 293,
              "end": 295,
              "name": "M2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 296,
              "end": 366,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 306,
                  "end": 360,
                  "id": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 317,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 318,
                    "end": 360,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 338,
                        "end": 350,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 338,
                          "end": 341,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 341,
                          "end": 349,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 343,
                            "end": 349
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
