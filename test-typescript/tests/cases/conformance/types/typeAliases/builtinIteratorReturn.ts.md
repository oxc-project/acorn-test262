__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 808,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 29,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 29,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 21,
                "end": 29,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 21,
                  "end": 27
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 69,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 69,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 53,
                  "end": 69,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 54,
                      "end": 60
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 62,
                      "end": 68
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 53,
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 101,
            "decorators": [],
            "name": "set",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 101,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 93,
                  "end": 101,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 94,
                      "end": 100
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 93,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 112,
            "decorators": [],
            "name": "i0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 115,
            "end": 139,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 115,
              "end": 137,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 115,
                "end": 120,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "start": 121,
                "end": 136,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 127,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 136,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 149,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 152,
            "end": 166,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 152,
              "end": 164,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 157,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 158,
                "end": 164,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 176,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 179,
            "end": 191,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 179,
              "end": 189,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 179,
                "end": 184,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 185,
                "end": 189,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 220,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 219,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 201,
            "decorators": [],
            "name": "i3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 204,
            "end": 219,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 204,
              "end": 217,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 204,
                "end": 209,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 210,
                "end": 217,
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 221,
      "end": 244,
      "await": false,
      "body": {
        "type": "EmptyStatement",
        "start": 243,
        "end": 244
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 226,
        "end": 233,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 232,
            "end": 233,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 237,
        "end": 242,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 279,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 254,
            "decorators": [],
            "name": "i4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 257,
            "end": 279,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 257,
              "end": 277,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 257,
                "end": 260,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "start": 261,
                "end": 276,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 267,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 276,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 305,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 304,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 289,
            "decorators": [],
            "name": "i5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 292,
            "end": 304,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 292,
              "end": 302,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 292,
                "end": 295,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 296,
                "end": 302,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 327,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 314,
            "decorators": [],
            "name": "i6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 317,
            "end": 327,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 317,
              "end": 325,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 317,
                "end": 320,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 321,
                "end": 325,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 353,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 337,
            "decorators": [],
            "name": "i7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 340,
            "end": 353,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 340,
              "end": 351,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 340,
                "end": 343,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 344,
                "end": 351,
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 355,
      "end": 376,
      "await": false,
      "body": {
        "type": "EmptyStatement",
        "start": 375,
        "end": 376
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 360,
        "end": 367,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 366,
            "end": 367,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 366,
              "end": 367,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 371,
        "end": 374,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 411,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 386,
            "decorators": [],
            "name": "i8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 389,
            "end": 411,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 389,
              "end": 409,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 389,
                "end": 392,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "start": 393,
                "end": 408,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 399,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 408,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 413,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 436,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 419,
            "end": 421,
            "decorators": [],
            "name": "i9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 424,
            "end": 436,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 424,
              "end": 434,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 424,
                "end": 427,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 428,
                "end": 434,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 438,
      "end": 461,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 460,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 444,
            "end": 447,
            "decorators": [],
            "name": "i10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 450,
            "end": 460,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 450,
              "end": 458,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 450,
                "end": 453,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 454,
                "end": 458,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 462,
      "end": 488,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 487,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 471,
            "decorators": [],
            "name": "i11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 474,
            "end": 487,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 474,
              "end": 485,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 478,
                "end": 485,
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 489,
      "end": 510,
      "await": false,
      "body": {
        "type": "EmptyStatement",
        "start": 509,
        "end": 510
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 494,
        "end": 501,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 500,
            "end": 501,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 500,
              "end": 501,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 505,
        "end": 508,
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 512,
      "end": 567,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 526,
          "end": 566,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 526,
            "end": 566,
            "decorators": [],
            "name": "i12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 529,
              "end": 566,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 531,
                "end": 566,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 547,
                  "end": 566,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 548,
                      "end": 554
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 556,
                      "end": 565
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 547,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 568,
      "end": 617,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 582,
          "end": 616,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 616,
            "decorators": [],
            "name": "i13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 585,
              "end": 616,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 587,
                "end": 616,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 603,
                  "end": 616,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 604,
                      "end": 610
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 612,
                      "end": 615
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 603,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 618,
      "end": 671,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 670,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 632,
            "end": 670,
            "decorators": [],
            "name": "i14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 635,
              "end": 670,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 637,
                "end": 670,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 653,
                  "end": 670,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 654,
                      "end": 660
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 662,
                      "end": 669
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 653,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 672,
      "end": 719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 718,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 718,
            "decorators": [],
            "name": "i15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 689,
              "end": 718,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 691,
                "end": 718,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 699,
                  "end": 718,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 700,
                      "end": 706
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 708,
                      "end": 717
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 699,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 720,
      "end": 761,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 734,
          "end": 760,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 734,
            "end": 760,
            "decorators": [],
            "name": "i16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 737,
              "end": 760,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 739,
                "end": 760,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 747,
                  "end": 760,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 748,
                      "end": 754
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 756,
                      "end": 759
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 747,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 762,
      "end": 807,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 776,
          "end": 806,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 776,
            "end": 806,
            "decorators": [],
            "name": "i17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 779,
              "end": 806,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 781,
                "end": 806,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 789,
                  "end": 806,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 790,
                      "end": 796
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 798,
                      "end": 805
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 781,
                  "end": 789,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
