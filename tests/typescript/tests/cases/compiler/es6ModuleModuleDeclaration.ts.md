__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 37,
                      "end": 38
                    },
                    "init": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 41,
                      "end": 43
                    },
                    "definite": false,
                    "start": 37,
                    "end": 43
                  }
                ],
                "declare": false,
                "start": 33,
                "end": 44
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 26,
              "end": 44
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
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 54
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 57,
                    "end": 59
                  },
                  "definite": false,
                  "start": 53,
                  "end": 59
                }
              ],
              "declare": false,
              "start": 49,
              "end": 60
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "innerExportedModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 101
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 123,
                              "end": 124
                            },
                            "init": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 127,
                              "end": 129
                            },
                            "definite": false,
                            "start": 123,
                            "end": 129
                          }
                        ],
                        "declare": false,
                        "start": 119,
                        "end": 130
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 112,
                      "end": 130
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
                            "name": "l",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 143,
                            "end": 144
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 147,
                            "end": 149
                          },
                          "definite": false,
                          "start": 143,
                          "end": 149
                        }
                      ],
                      "declare": false,
                      "start": 139,
                      "end": 150
                    }
                  ],
                  "start": 102,
                  "end": 156
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 72,
                "end": 156
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 65,
              "end": 156
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "innerNonExportedModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 200
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
                              "start": 222,
                              "end": 223
                            },
                            "init": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 226,
                              "end": 228
                            },
                            "definite": false,
                            "start": 222,
                            "end": 228
                          }
                        ],
                        "declare": false,
                        "start": 218,
                        "end": 229
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 211,
                      "end": 229
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 243
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 246,
                            "end": 248
                          },
                          "definite": false,
                          "start": 242,
                          "end": 248
                        }
                      ],
                      "declare": false,
                      "start": 238,
                      "end": 249
                    }
                  ],
                  "start": 201,
                  "end": 255
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 168,
                "end": 255
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 161,
              "end": 255
            }
          ],
          "start": 20,
          "end": 257
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 257
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 257
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 270
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 288,
                    "end": 289
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 292,
                    "end": 294
                  },
                  "definite": false,
                  "start": 288,
                  "end": 294
                }
              ],
              "declare": false,
              "start": 284,
              "end": 295
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 277,
            "end": 295
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
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 305
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 308,
                  "end": 310
                },
                "definite": false,
                "start": 304,
                "end": 310
              }
            ],
            "declare": false,
            "start": 300,
            "end": 311
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "innerExportedModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 352
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
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 374,
                            "end": 375
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 378,
                            "end": 380
                          },
                          "definite": false,
                          "start": 374,
                          "end": 380
                        }
                      ],
                      "declare": false,
                      "start": 370,
                      "end": 381
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 363,
                    "end": 381
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
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 395
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 398,
                          "end": 400
                        },
                        "definite": false,
                        "start": 394,
                        "end": 400
                      }
                    ],
                    "declare": false,
                    "start": 390,
                    "end": 401
                  }
                ],
                "start": 353,
                "end": 407
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 323,
              "end": 407
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 316,
            "end": 407
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "innerNonExportedModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 451
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
                            "start": 473,
                            "end": 474
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 477,
                            "end": 479
                          },
                          "definite": false,
                          "start": 473,
                          "end": 479
                        }
                      ],
                      "declare": false,
                      "start": 469,
                      "end": 480
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 462,
                    "end": 480
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
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 493,
                          "end": 494
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 497,
                          "end": 499
                        },
                        "definite": false,
                        "start": 493,
                        "end": 499
                      }
                    ],
                    "declare": false,
                    "start": 489,
                    "end": 500
                  }
                ],
                "start": 452,
                "end": 506
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 419,
              "end": 506
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 412,
            "end": 506
          }
        ],
        "start": 271,
        "end": 508
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 258,
      "end": 508
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 508
}
```
