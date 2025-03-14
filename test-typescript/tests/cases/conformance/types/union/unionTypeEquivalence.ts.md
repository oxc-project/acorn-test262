__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 52,
  "end": 494,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 63,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 63,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 64,
      "end": 95,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 82,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 84,
            "end": 93,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 87,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 93,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 104,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 119,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 114,
                "end": 119,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 114,
                    "end": 115,
                    "typeName": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 115,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 118,
                    "end": 119,
                    "typeName": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 119,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 177,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 177,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 177,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 162,
                "end": 177,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 162,
                    "end": 168
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 171,
                    "end": 177
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 202,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 202,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 187,
                "end": 202,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 187,
                    "end": 193
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 196,
                    "end": 202
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 308,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 308,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 283,
                "end": 308,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 283,
                    "end": 289
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 292,
                    "end": 298
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 301,
                    "end": 308
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 310,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 345,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 345,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 316,
              "end": 345,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 318,
                "end": 345,
                "types": [
                  {
                    "type": "TSUnionType",
                    "start": 319,
                    "end": 334,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 319,
                        "end": 325
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 328,
                        "end": 334
                      }
                    ]
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 338,
                    "end": 345
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 383,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 382,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 382,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 353,
              "end": 382,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 355,
                "end": 382,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 355,
                    "end": 361
                  },
                  {
                    "type": "TSUnionType",
                    "start": 365,
                    "end": 381,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 365,
                        "end": 371
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 374,
                        "end": 381
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 384,
      "end": 409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 408,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 408,
            "decorators": [],
            "name": "AB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 391,
              "end": 408,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 393,
                "end": 408,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 393,
                    "end": 399
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 402,
                    "end": 408
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 410,
      "end": 436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 414,
          "end": 435,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 435,
            "decorators": [],
            "name": "BC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 417,
              "end": 435,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 419,
                "end": 435,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 419,
                    "end": 425
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 428,
                    "end": 435
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 437,
      "end": 465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 464,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 464,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 443,
              "end": 464,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 445,
                "end": 464,
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "start": 445,
                    "end": 454,
                    "exprName": {
                      "type": "Identifier",
                      "start": 452,
                      "end": 454,
                      "decorators": [],
                      "name": "AB",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 457,
                    "end": 464
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 493,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 492,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 492,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 472,
              "end": 492,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 474,
                "end": 492,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 474,
                    "end": 480
                  },
                  {
                    "type": "TSTypeQuery",
                    "start": 483,
                    "end": 492,
                    "exprName": {
                      "type": "Identifier",
                      "start": 490,
                      "end": 492,
                      "decorators": [],
                      "name": "BC",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
