__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 807,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 29,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 70,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 69,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 53,
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 102,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 101,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 93,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 104,
      "end": 140,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 139,
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
            "callee": {
              "type": "MemberExpression",
              "start": 115,
              "end": 137,
              "object": {
                "type": "Identifier",
                "start": 115,
                "end": 120,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "MemberExpression",
                "start": 121,
                "end": 136,
                "object": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 127,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 136,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "optional": false,
              "computed": true
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 167,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 166,
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
            "callee": {
              "type": "MemberExpression",
              "start": 152,
              "end": 164,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 157,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 158,
                "end": 164,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 192,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 191,
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
            "callee": {
              "type": "MemberExpression",
              "start": 179,
              "end": 189,
              "object": {
                "type": "Identifier",
                "start": 179,
                "end": 184,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 185,
                "end": 189,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 220,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 219,
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
            "callee": {
              "type": "MemberExpression",
              "start": 204,
              "end": 217,
              "object": {
                "type": "Identifier",
                "start": 204,
                "end": 209,
                "decorators": [],
                "name": "array",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 210,
                "end": 217,
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 221,
      "end": 244,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 226,
        "end": 233,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 232,
            "end": 233,
            "id": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 237,
        "end": 242,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "EmptyStatement",
        "start": 243,
        "end": 244
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 280,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 279,
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
            "callee": {
              "type": "MemberExpression",
              "start": 257,
              "end": 277,
              "object": {
                "type": "Identifier",
                "start": 257,
                "end": 260,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "MemberExpression",
                "start": 261,
                "end": 276,
                "object": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 267,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 276,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "optional": false,
              "computed": true
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 305,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 304,
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
            "callee": {
              "type": "MemberExpression",
              "start": 292,
              "end": 302,
              "object": {
                "type": "Identifier",
                "start": 292,
                "end": 295,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 296,
                "end": 302,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 306,
      "end": 328,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 327,
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
            "callee": {
              "type": "MemberExpression",
              "start": 317,
              "end": 325,
              "object": {
                "type": "Identifier",
                "start": 317,
                "end": 320,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 321,
                "end": 325,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 354,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 353,
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
            "callee": {
              "type": "MemberExpression",
              "start": 340,
              "end": 351,
              "object": {
                "type": "Identifier",
                "start": 340,
                "end": 343,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 344,
                "end": 351,
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 355,
      "end": 376,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 360,
        "end": 367,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 366,
            "end": 367,
            "id": {
              "type": "Identifier",
              "start": 366,
              "end": 367,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 371,
        "end": 374,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "EmptyStatement",
        "start": 375,
        "end": 376
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 412,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 411,
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
            "callee": {
              "type": "MemberExpression",
              "start": 389,
              "end": 409,
              "object": {
                "type": "Identifier",
                "start": 389,
                "end": 392,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "MemberExpression",
                "start": 393,
                "end": 408,
                "object": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 399,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 408,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "optional": false,
              "computed": true
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 413,
      "end": 437,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 436,
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
            "callee": {
              "type": "MemberExpression",
              "start": 424,
              "end": 434,
              "object": {
                "type": "Identifier",
                "start": 424,
                "end": 427,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 428,
                "end": 434,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 438,
      "end": 461,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 444,
          "end": 460,
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
            "callee": {
              "type": "MemberExpression",
              "start": 450,
              "end": 458,
              "object": {
                "type": "Identifier",
                "start": 450,
                "end": 453,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 454,
                "end": 458,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 462,
      "end": 488,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 487,
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
            "callee": {
              "type": "MemberExpression",
              "start": 474,
              "end": 485,
              "object": {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 478,
                "end": 485,
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 489,
      "end": 510,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 494,
        "end": 501,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 500,
            "end": 501,
            "id": {
              "type": "Identifier",
              "start": 500,
              "end": 501,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 505,
        "end": 508,
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "EmptyStatement",
        "start": 509,
        "end": 510
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 512,
      "end": 567,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 526,
          "end": 566,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 547,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 568,
      "end": 617,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 582,
          "end": 616,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 603,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 618,
      "end": 671,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 670,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 653,
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 672,
      "end": 719,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 718,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 699,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 720,
      "end": 761,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 734,
          "end": 760,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 747,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 762,
      "end": 807,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 776,
          "end": 806,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 781,
                  "end": 789,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
