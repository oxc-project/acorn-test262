__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 342,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 22,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 22,
              "raw": "\"hello\"",
              "value": "hello"
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 56,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 31,
        "end": 56,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 35,
            "end": 48,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 44,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 38,
                  "end": 44
                }
              }
            },
            "init": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 55,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 85,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 81,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 94,
      "end": 221,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 101,
        "end": 221,
        "body": {
          "type": "TSModuleBlock",
          "start": 111,
          "end": 221,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 117,
              "end": 134,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 124,
                "end": 134,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 128,
                    "end": 133,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 129,
                      "decorators": [],
                      "name": "k",
                      "optional": false
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 133,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 139,
              "end": 171,
              "attributes": [],
              "declaration": {
                "type": "VariableDeclaration",
                "start": 146,
                "end": 171,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 150,
                    "end": 163,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 159,
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 151,
                        "end": 159,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 153,
                          "end": 159
                        }
                      }
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 163,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  },
                  {
                    "type": "VariableDeclarator",
                    "start": 165,
                    "end": 170,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "decorators": [],
                      "name": "m",
                      "optional": false
                    },
                    "init": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "decorators": [],
                      "name": "k",
                      "optional": false
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "VariableDeclaration",
              "start": 176,
              "end": 189,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 180,
                  "end": 188,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 181,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 184,
                    "end": 188,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 186,
                      "decorators": [],
                      "name": "m1",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "decorators": [],
                      "name": "k",
                      "optional": false
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            {
              "type": "VariableDeclaration",
              "start": 194,
              "end": 219,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 198,
                  "end": 211,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 207,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 199,
                      "end": 207,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 201,
                        "end": 207
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "start": 213,
                  "end": 218,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 214,
                    "decorators": [],
                    "name": "p",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 218,
                    "decorators": [],
                    "name": "k",
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 108,
          "end": 110,
          "decorators": [],
          "name": "m1",
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 222,
      "end": 342,
      "body": {
        "type": "TSModuleBlock",
        "start": 232,
        "end": 342,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 238,
            "end": 255,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 245,
              "end": 255,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 249,
                  "end": 254,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 250,
                    "decorators": [],
                    "name": "k",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 260,
            "end": 292,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 267,
              "end": 292,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 271,
                  "end": 284,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 280,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 272,
                      "end": 280,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 274,
                        "end": 280
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 284,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "start": 286,
                  "end": 291,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 286,
                    "end": 287,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 290,
                    "end": 291,
                    "decorators": [],
                    "name": "k",
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 297,
            "end": 310,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 301,
                "end": 309,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 302,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 305,
                  "end": 309,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 305,
                    "end": 307,
                    "decorators": [],
                    "name": "m1",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 309,
                    "decorators": [],
                    "name": "k",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 315,
            "end": 340,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 319,
                "end": 332,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 328,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 320,
                    "end": 328,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 322,
                      "end": 328
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 332,
                  "decorators": [],
                  "name": "n",
                  "optional": false
                }
              },
              {
                "type": "VariableDeclarator",
                "start": 334,
                "end": 339,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 335,
                  "decorators": [],
                  "name": "p",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 339,
                  "decorators": [],
                  "name": "k",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 231,
        "decorators": [],
        "name": "m2",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
