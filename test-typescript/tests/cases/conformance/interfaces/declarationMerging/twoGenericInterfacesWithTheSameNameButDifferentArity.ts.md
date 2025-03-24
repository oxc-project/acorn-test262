__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 481,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 28,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
        "start": 15,
        "end": 28,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 26,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 25,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
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
      "start": 30,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 45,
            "end": 46,
            "name": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "name": "U",
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
        "start": 48,
        "end": 70,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 68,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
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
      "start": 72,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 81,
        "end": 179,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 87,
            "end": 123,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 98,
              "end": 101,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 99,
                  "end": 100,
                  "name": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
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
              "start": 102,
              "end": 123,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 112,
                  "end": 117,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 113,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 115,
                      "end": 116,
                      "typeName": {
                        "type": "Identifier",
                        "start": 115,
                        "end": 116,
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
            "start": 129,
            "end": 177,
            "id": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 140,
              "end": 146,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 141,
                  "end": 142,
                  "name": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 144,
                  "end": 145,
                  "name": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 145,
                    "name": "U",
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
              "start": 147,
              "end": 177,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 166,
                  "end": 171,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 167,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 167,
                    "end": 170,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 169,
                      "end": 170,
                      "typeName": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 170,
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
      "start": 181,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 190,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 191,
        "end": 235,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 197,
            "end": 233,
            "id": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 208,
              "end": 211,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 209,
                  "end": 210,
                  "name": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 210,
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
              "start": 212,
              "end": 233,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 222,
                  "end": 227,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 223,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 225,
                      "end": 226,
                      "typeName": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 226,
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
      "start": 237,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 246,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 247,
        "end": 343,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 253,
            "end": 341,
            "id": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 264,
              "end": 270,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 265,
                  "end": 266,
                  "name": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 266,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 268,
                  "end": 269,
                  "name": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 269,
                    "name": "U",
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
              "start": 271,
              "end": 341,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 330,
                  "end": 335,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 334,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 333,
                      "end": 334,
                      "typeName": {
                        "type": "Identifier",
                        "start": 333,
                        "end": 334,
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
      "start": 345,
      "end": 406,
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 354,
        "name": "M3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 355,
        "end": 406,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 361,
            "end": 404,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 368,
              "end": 404,
              "id": {
                "type": "Identifier",
                "start": 378,
                "end": 379,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 379,
                "end": 382,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 380,
                    "end": 381,
                    "name": {
                      "type": "Identifier",
                      "start": 380,
                      "end": 381,
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
                "start": 383,
                "end": 404,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 393,
                    "end": 398,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 393,
                      "end": 394,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 394,
                      "end": 397,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 396,
                        "end": 397,
                        "typeName": {
                          "type": "Identifier",
                          "start": 396,
                          "end": 397,
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
      "start": 408,
      "end": 481,
      "id": {
        "type": "Identifier",
        "start": 415,
        "end": 417,
        "name": "M3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 418,
        "end": 481,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 424,
            "end": 479,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 431,
              "end": 479,
              "id": {
                "type": "Identifier",
                "start": 441,
                "end": 442,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 442,
                "end": 448,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 443,
                    "end": 444,
                    "name": {
                      "type": "Identifier",
                      "start": 443,
                      "end": 444,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 446,
                    "end": 447,
                    "name": {
                      "type": "Identifier",
                      "start": 446,
                      "end": 447,
                      "name": "U",
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
                "start": 449,
                "end": 479,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 468,
                    "end": 473,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 469,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 469,
                      "end": 472,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 471,
                        "end": 472,
                        "typeName": {
                          "type": "Identifier",
                          "start": 471,
                          "end": 472,
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
