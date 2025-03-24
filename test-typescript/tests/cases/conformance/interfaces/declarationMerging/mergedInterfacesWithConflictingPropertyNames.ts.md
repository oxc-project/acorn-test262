__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 494,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 39,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
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
      "start": 41,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 53,
        "end": 71,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 69,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 62,
                "end": 68
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
      "start": 73,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 82,
        "end": 183,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 88,
            "end": 124,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 99,
              "end": 102,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 100,
                  "end": 101,
                  "name": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
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
              "start": 103,
              "end": 124,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 113,
                  "end": 118,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "name": "x",
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
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 130,
            "end": 181,
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 141,
              "end": 144,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 142,
                  "end": 143,
                  "name": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
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
              "start": 145,
              "end": 181,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 155,
                  "end": 165,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 156,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
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
      "start": 185,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 194,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 195,
        "end": 242,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 201,
            "end": 237,
            "id": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 212,
              "end": 215,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 213,
                  "end": 214,
                  "name": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 214,
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
              "start": 216,
              "end": 237,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 226,
                  "end": 231,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 230,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 229,
                      "end": 230,
                      "typeName": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
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
      "start": 244,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 251,
        "end": 253,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 254,
        "end": 353,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 260,
            "end": 351,
            "id": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 271,
              "end": 274,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 272,
                  "end": 273,
                  "name": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 273,
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
              "start": 275,
              "end": 351,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 285,
                  "end": 295,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 286,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 286,
                    "end": 294,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 288,
                      "end": 294
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
      "start": 355,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 364,
        "name": "M3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 365,
        "end": 416,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 371,
            "end": 414,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 378,
              "end": 414,
              "id": {
                "type": "Identifier",
                "start": 388,
                "end": 389,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 389,
                "end": 392,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 390,
                    "end": 391,
                    "name": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 391,
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
                "start": 393,
                "end": 414,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 403,
                    "end": 408,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 404,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 404,
                      "end": 407,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 406,
                        "end": 407,
                        "typeName": {
                          "type": "Identifier",
                          "start": 406,
                          "end": 407,
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 418,
      "end": 494,
      "id": {
        "type": "Identifier",
        "start": 425,
        "end": 427,
        "name": "M3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 428,
        "end": 494,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 434,
            "end": 492,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 441,
              "end": 492,
              "id": {
                "type": "Identifier",
                "start": 451,
                "end": 452,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 452,
                "end": 455,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 453,
                    "end": 454,
                    "name": {
                      "type": "Identifier",
                      "start": 453,
                      "end": 454,
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
                "start": 456,
                "end": 492,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 466,
                    "end": 476,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 466,
                      "end": 467,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 467,
                      "end": 475,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 469,
                        "end": 475
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
