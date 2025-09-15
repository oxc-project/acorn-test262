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
        "start": 74,
        "end": 75
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 100
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
                      "start": 111,
                      "end": 114
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 116,
                        "end": 122
                      },
                      "start": 114,
                      "end": 122
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 111,
                    "end": 123
                  }
                ],
                "start": 101,
                "end": 129
              },
              "declare": false,
              "start": 89,
              "end": 129
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 82,
            "end": 129
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
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
                      "start": 154,
                      "end": 155
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 154,
                    "end": 155
                  }
                ],
                "start": 153,
                "end": 156
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 170
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
                          "start": 172,
                          "end": 173
                        },
                        "typeArguments": null,
                        "start": 172,
                        "end": 173
                      },
                      "start": 170,
                      "end": 173
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 167,
                    "end": 174
                  }
                ],
                "start": 157,
                "end": 180
              },
              "declare": false,
              "start": 142,
              "end": 180
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 135,
            "end": 180
          }
        ],
        "start": 76,
        "end": 182
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 64,
      "end": 182
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 196
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 221
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 235
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 237,
                        "end": 243
                      },
                      "start": 235,
                      "end": 243
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 232,
                    "end": 244
                  }
                ],
                "start": 222,
                "end": 250
              },
              "declare": false,
              "start": 210,
              "end": 250
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 203,
            "end": 250
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 263,
                        "end": 264
                      },
                      "typeArguments": null,
                      "start": 263,
                      "end": 264
                    },
                    "start": 261,
                    "end": 264
                  },
                  "start": 260,
                  "end": 264
                },
                "init": null,
                "definite": false,
                "start": 260,
                "end": 264
              }
            ],
            "declare": false,
            "start": 256,
            "end": 265
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 276
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 279,
                    "end": 280
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 284
                  },
                  "optional": false,
                  "computed": false,
                  "start": 279,
                  "end": 284
                },
                "definite": false,
                "start": 274,
                "end": 284
              }
            ],
            "declare": false,
            "start": 270,
            "end": 285
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 303,
                  "end": 305
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 309
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 313
                  },
                  "optional": false,
                  "computed": false,
                  "start": 308,
                  "end": 313
                },
                "definite": false,
                "start": 303,
                "end": 313
              }
            ],
            "declare": false,
            "start": 299,
            "end": 314
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 339
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
                      "start": 340,
                      "end": 341
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 340,
                    "end": 341
                  }
                ],
                "start": 339,
                "end": 342
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
                      "start": 353,
                      "end": 356
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
                          "start": 358,
                          "end": 359
                        },
                        "typeArguments": null,
                        "start": 358,
                        "end": 359
                      },
                      "start": 356,
                      "end": 359
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 353,
                    "end": 360
                  }
                ],
                "start": 343,
                "end": 366
              },
              "declare": false,
              "start": 328,
              "end": 366
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 321,
            "end": 366
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 380
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 381,
                            "end": 387
                          }
                        ],
                        "start": 380,
                        "end": 388
                      },
                      "start": 379,
                      "end": 388
                    },
                    "start": 377,
                    "end": 388
                  },
                  "start": 376,
                  "end": 388
                },
                "init": null,
                "definite": false,
                "start": 376,
                "end": 388
              }
            ],
            "declare": false,
            "start": 372,
            "end": 389
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 400
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 404
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 405,
                    "end": 408
                  },
                  "optional": false,
                  "computed": false,
                  "start": 403,
                  "end": 408
                },
                "definite": false,
                "start": 398,
                "end": 408
              }
            ],
            "declare": false,
            "start": 394,
            "end": 409
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 429
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 432,
                    "end": 433
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 437
                  },
                  "optional": false,
                  "computed": false,
                  "start": 432,
                  "end": 437
                },
                "definite": false,
                "start": 427,
                "end": 437
              }
            ],
            "declare": false,
            "start": 423,
            "end": 438
          }
        ],
        "start": 197,
        "end": 441
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 184,
      "end": 441
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 64,
  "end": 441
}
```
