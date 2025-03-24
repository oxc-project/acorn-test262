__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 488,
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
      "end": 80,
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
        "end": 80,
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
                "type": "TSStringKeyword",
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
      "start": 82,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 91,
        "end": 187,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 97,
            "end": 133,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 108,
              "end": 111,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 109,
                  "end": 110,
                  "name": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
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
              "start": 112,
              "end": 133,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 122,
                  "end": 127,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 123,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 125,
                      "end": 126,
                      "typeName": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 126,
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
            "start": 139,
            "end": 185,
            "id": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 150,
              "end": 153,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 151,
                  "end": 152,
                  "name": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
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
              "start": 154,
              "end": 185,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 164,
                  "end": 169,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 165,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 168,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 167,
                      "end": 168,
                      "typeName": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
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
      "start": 189,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 198,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 199,
        "end": 246,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 205,
            "end": 241,
            "id": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 216,
              "end": 219,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 217,
                  "end": 218,
                  "name": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 218,
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
              "start": 220,
              "end": 241,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 230,
                  "end": 235,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 231,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 231,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 233,
                      "end": 234,
                      "typeName": {
                        "type": "Identifier",
                        "start": 233,
                        "end": 234,
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
      "start": 248,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 257,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 258,
        "end": 352,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 264,
            "end": 350,
            "id": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 275,
              "end": 278,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 276,
                  "end": 277,
                  "name": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
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
              "start": 279,
              "end": 350,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 289,
                  "end": 294,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 290,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 290,
                    "end": 293,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 292,
                      "end": 293,
                      "typeName": {
                        "type": "Identifier",
                        "start": 292,
                        "end": 293,
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
      "start": 354,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 363,
        "name": "M3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 364,
        "end": 415,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 370,
            "end": 413,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 377,
              "end": 413,
              "id": {
                "type": "Identifier",
                "start": 387,
                "end": 388,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 388,
                "end": 391,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 389,
                    "end": 390,
                    "name": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 390,
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
                "start": 392,
                "end": 413,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 402,
                    "end": 407,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 403,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 403,
                      "end": 406,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 405,
                        "end": 406,
                        "typeName": {
                          "type": "Identifier",
                          "start": 405,
                          "end": 406,
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
      "start": 417,
      "end": 488,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 426,
        "name": "M3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 427,
        "end": 488,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 433,
            "end": 486,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 440,
              "end": 486,
              "id": {
                "type": "Identifier",
                "start": 450,
                "end": 451,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 451,
                "end": 454,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 452,
                    "end": 453,
                    "name": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 453,
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
                "start": 455,
                "end": 486,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 465,
                    "end": 470,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 466,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 466,
                      "end": 469,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 468,
                        "end": 469,
                        "typeName": {
                          "type": "Identifier",
                          "start": 468,
                          "end": 469,
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
