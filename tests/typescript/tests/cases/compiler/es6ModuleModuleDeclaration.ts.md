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
          "start": 14,
          "end": 16
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
                      "start": 34,
                      "end": 35
                    },
                    "init": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 38,
                      "end": 40
                    },
                    "definite": false,
                    "start": 34,
                    "end": 40
                  }
                ],
                "declare": false,
                "start": 30,
                "end": 41
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 23,
              "end": 41
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
                    "start": 50,
                    "end": 51
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 54,
                    "end": 56
                  },
                  "definite": false,
                  "start": 50,
                  "end": 56
                }
              ],
              "declare": false,
              "start": 46,
              "end": 57
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
                  "start": 76,
                  "end": 95
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
                              "start": 117,
                              "end": 118
                            },
                            "init": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 121,
                              "end": 123
                            },
                            "definite": false,
                            "start": 117,
                            "end": 123
                          }
                        ],
                        "declare": false,
                        "start": 113,
                        "end": 124
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 106,
                      "end": 124
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
                            "start": 137,
                            "end": 138
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 141,
                            "end": 143
                          },
                          "definite": false,
                          "start": 137,
                          "end": 143
                        }
                      ],
                      "declare": false,
                      "start": 133,
                      "end": 144
                    }
                  ],
                  "start": 96,
                  "end": 150
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 69,
                "end": 150
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 62,
              "end": 150
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
                  "start": 169,
                  "end": 191
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
                              "start": 213,
                              "end": 214
                            },
                            "init": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 217,
                              "end": 219
                            },
                            "definite": false,
                            "start": 213,
                            "end": 219
                          }
                        ],
                        "declare": false,
                        "start": 209,
                        "end": 220
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 202,
                      "end": 220
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
                            "start": 233,
                            "end": 234
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 237,
                            "end": 239
                          },
                          "definite": false,
                          "start": 233,
                          "end": 239
                        }
                      ],
                      "declare": false,
                      "start": 229,
                      "end": 240
                    }
                  ],
                  "start": 192,
                  "end": 246
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 162,
                "end": 246
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 155,
              "end": 246
            }
          ],
          "start": 17,
          "end": 248
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 248
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 248
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 256,
        "end": 258
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
                    "start": 276,
                    "end": 277
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 280,
                    "end": 282
                  },
                  "definite": false,
                  "start": 276,
                  "end": 282
                }
              ],
              "declare": false,
              "start": 272,
              "end": 283
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 265,
            "end": 283
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
                  "start": 292,
                  "end": 293
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 296,
                  "end": 298
                },
                "definite": false,
                "start": 292,
                "end": 298
              }
            ],
            "declare": false,
            "start": 288,
            "end": 299
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
                "start": 318,
                "end": 337
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
                            "start": 359,
                            "end": 360
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 363,
                            "end": 365
                          },
                          "definite": false,
                          "start": 359,
                          "end": 365
                        }
                      ],
                      "declare": false,
                      "start": 355,
                      "end": 366
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 348,
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
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 379,
                          "end": 380
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 383,
                          "end": 385
                        },
                        "definite": false,
                        "start": 379,
                        "end": 385
                      }
                    ],
                    "declare": false,
                    "start": 375,
                    "end": 386
                  }
                ],
                "start": 338,
                "end": 392
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 311,
              "end": 392
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 304,
            "end": 392
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
                "start": 411,
                "end": 433
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
                            "start": 455,
                            "end": 456
                          },
                          "init": {
                            "type": "Literal",
                            "value": 10,
                            "raw": "10",
                            "start": 459,
                            "end": 461
                          },
                          "definite": false,
                          "start": 455,
                          "end": 461
                        }
                      ],
                      "declare": false,
                      "start": 451,
                      "end": 462
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 444,
                    "end": 462
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
                          "start": 475,
                          "end": 476
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 479,
                          "end": 481
                        },
                        "definite": false,
                        "start": 475,
                        "end": 481
                      }
                    ],
                    "declare": false,
                    "start": 471,
                    "end": 482
                  }
                ],
                "start": 434,
                "end": 488
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 404,
              "end": 488
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 397,
            "end": 488
          }
        ],
        "start": 259,
        "end": 490
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 249,
      "end": 490
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 490
}
```
