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
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 41
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 63,
                            "end": 64
                          },
                          "init": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 67,
                            "end": 69
                          },
                          "definite": false,
                          "start": 63,
                          "end": 69
                        }
                      ],
                      "declare": false,
                      "start": 59,
                      "end": 70
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 52,
                    "end": 70
                  }
                ],
                "start": 42,
                "end": 76
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 28,
              "end": 76
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 21,
            "end": 76
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 102
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 114,
                      "end": 115
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 117,
                        "end": 123
                      },
                      "start": 115,
                      "end": 123
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 114,
                    "end": 124
                  }
                ],
                "start": 103,
                "end": 130
              },
              "declare": false,
              "start": 89,
              "end": 130
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 82,
            "end": 130
          }
        ],
        "start": 15,
        "end": 132
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 132
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 148
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 168
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 191
                        },
                        "init": {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 194,
                          "end": 196
                        },
                        "definite": false,
                        "start": 190,
                        "end": 196
                      }
                    ],
                    "declare": false,
                    "start": 186,
                    "end": 197
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 179,
                  "end": 197
                }
              ],
              "start": 169,
              "end": 203
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 155,
            "end": 203
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 229
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 240,
                      "end": 241
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 243,
                        "end": 249
                      },
                      "start": 241,
                      "end": 249
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 240,
                    "end": 250
                  }
                ],
                "start": 230,
                "end": 256
              },
              "declare": false,
              "start": 216,
              "end": 256
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 209,
            "end": 256
          }
        ],
        "start": 149,
        "end": 258
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 134,
      "end": 258
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
            "name": "z2",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 266
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 273
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 277
              },
              "optional": false,
              "computed": false,
              "start": 269,
              "end": 277
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 279
            },
            "optional": false,
            "computed": false,
            "start": 269,
            "end": 279
          },
          "definite": false,
          "start": 264,
          "end": 279
        }
      ],
      "declare": false,
      "start": 260,
      "end": 280
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 342
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 369
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 391,
                            "end": 392
                          },
                          "init": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 395,
                            "end": 397
                          },
                          "definite": false,
                          "start": 391,
                          "end": 397
                        }
                      ],
                      "declare": false,
                      "start": 387,
                      "end": 398
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 380,
                    "end": 398
                  }
                ],
                "start": 370,
                "end": 404
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 356,
              "end": 404
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 349,
            "end": 404
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 423
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 436
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 438,
                      "end": 444
                    },
                    "start": 436,
                    "end": 444
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 435,
                  "end": 445
                }
              ],
              "start": 424,
              "end": 451
            },
            "declare": false,
            "start": 410,
            "end": 451
          }
        ],
        "start": 343,
        "end": 453
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 328,
      "end": 453
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 453
}
```
