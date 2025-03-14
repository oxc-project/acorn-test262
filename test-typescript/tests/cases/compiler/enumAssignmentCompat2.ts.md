__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 438,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 25,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 25,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 14,
            "end": 15,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 17,
            "end": 18,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 21,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "W",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 27,
      "end": 62,
      "body": {
        "type": "TSModuleBlock",
        "start": 36,
        "end": 62,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 42,
            "end": 60,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 49,
              "end": 60,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 57,
                "end": 60,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "D",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "W",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 64,
      "end": 119,
      "body": {
        "type": "TSInterfaceBody",
        "start": 82,
        "end": 119,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 94,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "W",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 100,
            "end": 105,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "name": "W",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 111,
            "end": 116,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "W",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 81,
        "decorators": [],
        "name": "WStatic",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 137,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 130,
                "end": 137,
                "typeName": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 137,
                  "decorators": [],
                  "name": "WStatic",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "W",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 158,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 150,
                "end": 158,
                "exprName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "W",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 161,
            "end": 162,
            "decorators": [],
            "name": "W",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 177,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 177,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 171,
                "end": 177
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "W",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 205,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 199,
                "end": 205
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 208,
            "end": 211,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "decorators": [],
              "name": "W",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "a",
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
      "start": 213,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 234,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 228,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 228,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 220,
                "end": 228,
                "exprName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 228,
                  "decorators": [],
                  "name": "W",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 231,
            "end": 234,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "W",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "a",
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
      "start": 245,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 268,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 262,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 262,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 252,
                "end": 262,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 259,
                  "end": 262,
                  "left": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 260,
                    "decorators": [],
                    "name": "W",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 262,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 265,
            "end": 268,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "decorators": [],
              "name": "W",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "a",
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
      "start": 270,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 289,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 285,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 275,
              "end": 285,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 277,
                "end": 285,
                "exprName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "decorators": [],
                  "name": "W",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 288,
            "end": 289,
            "raw": "3",
            "value": 3
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 321,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 317,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 307,
                "end": 317,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 314,
                  "end": 317,
                  "left": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "decorators": [],
                    "name": "W",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 317,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 320,
            "end": 321,
            "raw": "4",
            "value": 4
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 343,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 337,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 328,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 330,
                "end": 337,
                "typeName": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 337,
                  "decorators": [],
                  "name": "WStatic",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 340,
            "end": 343,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 340,
              "end": 341,
              "decorators": [],
              "name": "W",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 342,
              "end": 343,
              "decorators": [],
              "name": "a",
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
      "start": 354,
      "end": 373,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 372,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 368,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 359,
              "end": 368,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 361,
                "end": 368,
                "typeName": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 368,
                  "decorators": [],
                  "name": "WStatic",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 371,
            "end": 372,
            "raw": "5",
            "value": 5
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 396,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 395,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 391,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 391,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 390,
                "end": 391,
                "typeName": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "decorators": [],
                  "name": "W",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 394,
            "end": 395,
            "raw": "3",
            "value": 3
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 397,
      "end": 412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 411,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 405,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 402,
              "end": 405,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 404,
                "end": 405,
                "typeName": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 405,
                  "decorators": [],
                  "name": "W",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 408,
            "end": 411,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "decorators": [],
              "name": "W",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 410,
              "end": 411,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 421,
      "expression": {
        "type": "AssignmentExpression",
        "start": 413,
        "end": 420,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 413,
          "end": 414,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 417,
          "end": 420,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 417,
            "end": 418,
            "decorators": [],
            "name": "W",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 419,
            "end": 420,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 422,
      "end": 426,
      "expression": {
        "type": "MemberExpression",
        "start": 422,
        "end": 425,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 422,
          "end": 423,
          "decorators": [],
          "name": "W",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 424,
          "end": 425,
          "decorators": [],
          "name": "D",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 437,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 437,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 432,
              "end": 437,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 434,
                "end": 437,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 434,
                  "end": 437,
                  "left": {
                    "type": "Identifier",
                    "start": 434,
                    "end": 435,
                    "decorators": [],
                    "name": "W",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "decorators": [],
                    "name": "D",
                    "optional": false
                  }
                }
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
