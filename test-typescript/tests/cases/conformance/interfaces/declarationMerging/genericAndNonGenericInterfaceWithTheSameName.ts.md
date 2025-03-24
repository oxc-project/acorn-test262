__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 71,
  "end": 565,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 71,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 103,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 101,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 92,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 100,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 105,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 116,
        "end": 119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 117,
            "end": 118,
            "name": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
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
        "start": 120,
        "end": 144,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 142,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 138,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 140,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 146,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 155,
        "end": 257,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 161,
            "end": 200,
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 172,
              "end": 175,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 173,
                  "end": 174,
                  "name": {
                    "type": "Identifier",
                    "start": 173,
                    "end": 174,
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
              "start": 176,
              "end": 200,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 187,
                  "end": 194,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 187,
                    "end": 190,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 190,
                    "end": 193,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 192,
                      "end": 193,
                      "typeName": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 193,
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
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 206,
            "end": 255,
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 218,
              "end": 255,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 237,
                  "end": 249,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 240,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 240,
                    "end": 248,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 242,
                      "end": 248
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
      "start": 259,
      "end": 317,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 268,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 269,
        "end": 317,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 275,
            "end": 315,
            "id": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 287,
              "end": 315,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 297,
                  "end": 309,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 300,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 300,
                    "end": 308,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 302,
                      "end": 308
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
      "start": 319,
      "end": 424,
      "id": {
        "type": "Identifier",
        "start": 326,
        "end": 328,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 329,
        "end": 424,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 335,
            "end": 422,
            "id": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 346,
              "end": 349,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 347,
                  "end": 348,
                  "name": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 348,
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
              "start": 350,
              "end": 422,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 409,
                  "end": 416,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 412,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 412,
                    "end": 415,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 414,
                      "end": 415,
                      "typeName": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 415,
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
      "start": 426,
      "end": 491,
      "id": {
        "type": "Identifier",
        "start": 433,
        "end": 435,
        "name": "M3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 436,
        "end": 491,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 442,
            "end": 489,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 449,
              "end": 489,
              "id": {
                "type": "Identifier",
                "start": 459,
                "end": 460,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 461,
                "end": 489,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 471,
                    "end": 483,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 474,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 474,
                      "end": 482,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 476,
                        "end": 482
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 493,
      "end": 565,
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 502,
        "name": "M3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 503,
        "end": 565,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 509,
            "end": 563,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 516,
              "end": 563,
              "id": {
                "type": "Identifier",
                "start": 526,
                "end": 527,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 527,
                "end": 530,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 528,
                    "end": 529,
                    "name": {
                      "type": "Identifier",
                      "start": 528,
                      "end": 529,
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
                "start": 531,
                "end": 563,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 550,
                    "end": 557,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 553,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 553,
                      "end": 556,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 555,
                        "end": 556,
                        "typeName": {
                          "type": "Identifier",
                          "start": 555,
                          "end": 556,
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
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
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
