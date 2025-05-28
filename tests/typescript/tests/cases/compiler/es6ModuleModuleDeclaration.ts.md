__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 490,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 248,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 248,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 16,
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 17,
          "end": 248,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 23,
              "end": 41,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 30,
                "end": 41,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 34,
                    "end": 40,
                    "id": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 38,
                      "end": 40,
                      "value": 10,
                      "raw": "10"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "VariableDeclaration",
              "start": 46,
              "end": 57,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 50,
                  "end": 56,
                  "id": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 54,
                    "end": 56,
                    "value": 10,
                    "raw": "10"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 62,
              "end": 150,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 69,
                "end": 150,
                "id": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 95,
                  "decorators": [],
                  "name": "innerExportedModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 96,
                  "end": 150,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 106,
                      "end": 124,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 113,
                        "end": 124,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 117,
                            "end": 123,
                            "id": {
                              "type": "Identifier",
                              "start": 117,
                              "end": 118,
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 121,
                              "end": 123,
                              "value": 10,
                              "raw": "10"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 133,
                      "end": 144,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 137,
                          "end": 143,
                          "id": {
                            "type": "Identifier",
                            "start": 137,
                            "end": 138,
                            "decorators": [],
                            "name": "l",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 141,
                            "end": 143,
                            "value": 10,
                            "raw": "10"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 155,
              "end": 246,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 162,
                "end": 246,
                "id": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 191,
                  "decorators": [],
                  "name": "innerNonExportedModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 192,
                  "end": 246,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 202,
                      "end": 220,
                      "declaration": {
                        "type": "VariableDeclaration",
                        "start": 209,
                        "end": 220,
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 213,
                            "end": 219,
                            "id": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 214,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Literal",
                              "start": 217,
                              "end": 219,
                              "value": 10,
                              "raw": "10"
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 229,
                      "end": 240,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 233,
                          "end": 239,
                          "id": {
                            "type": "Identifier",
                            "start": 233,
                            "end": 234,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 237,
                            "end": 239,
                            "value": 10,
                            "raw": "10"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 249,
      "end": 490,
      "id": {
        "type": "Identifier",
        "start": 256,
        "end": 258,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 259,
        "end": 490,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 265,
            "end": 283,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 272,
              "end": 283,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 276,
                  "end": 282,
                  "id": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 280,
                    "end": 282,
                    "value": 10,
                    "raw": "10"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "VariableDeclaration",
            "start": 288,
            "end": 299,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 292,
                "end": 298,
                "id": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 296,
                  "end": 298,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 304,
            "end": 392,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 311,
              "end": 392,
              "id": {
                "type": "Identifier",
                "start": 318,
                "end": 337,
                "decorators": [],
                "name": "innerExportedModule",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 338,
                "end": 392,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 348,
                    "end": 366,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 355,
                      "end": 366,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 359,
                          "end": 365,
                          "id": {
                            "type": "Identifier",
                            "start": 359,
                            "end": 360,
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 363,
                            "end": 365,
                            "value": 10,
                            "raw": "10"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 375,
                    "end": 386,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 379,
                        "end": 385,
                        "id": {
                          "type": "Identifier",
                          "start": 379,
                          "end": 380,
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 383,
                          "end": 385,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 397,
            "end": 488,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 404,
              "end": 488,
              "id": {
                "type": "Identifier",
                "start": 411,
                "end": 433,
                "decorators": [],
                "name": "innerNonExportedModule",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 434,
                "end": 488,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 444,
                    "end": 462,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 451,
                      "end": 462,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 455,
                          "end": 461,
                          "id": {
                            "type": "Identifier",
                            "start": 455,
                            "end": 456,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 459,
                            "end": 461,
                            "value": 10,
                            "raw": "10"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 471,
                    "end": 482,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 475,
                        "end": 481,
                        "id": {
                          "type": "Identifier",
                          "start": 475,
                          "end": 476,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 479,
                          "end": 481,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
